from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import anthropic
import os
from dotenv import load_dotenv
import PyPDF2
import io
from docx import Document

load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalysisRequest(BaseModel):
    job_description: str

claude = anthropic.Client(api_key=os.getenv("ANTHROPIC_API_KEY"))

def extract_text_from_pdf(file_bytes):
    pdf_reader = PyPDF2.PdfReader(io.BytesIO(file_bytes))
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

def extract_text_from_docx(file_bytes):
    doc = Document(io.BytesIO(file_bytes))
    text = ""
    for paragraph in doc.paragraphs:
        text += paragraph.text + "\n"
    return text

def analyze_resume(resume_text: str, job_description: str) -> dict:
    prompt = f"""You are an expert HR professional and technical recruiter. Analyze the following resume for the given job description. Provide a detailed analysis including:

1. Overall match score (percentage)
2. Technical skills assessment
3. Experience relevance
4. Cultural fit indicators
5. Key strengths
6. Areas for improvement
7. Specific recommendations

Job Description:
{job_description}

Resume:
{resume_text}

Provide the analysis in a structured JSON format with the following keys:
- overallScore
- technicalSkills (array of objects with name, level, and proficiency)
- culturalFit (object with workEnvironment array and values array)
- insights (object with achievements, education, and certifications)
- recommendations (array)
"""

    response = claude.messages.create(
        model="claude-2.1",
        max_tokens=1500,
        temperature=0,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    
    # Extract and parse the JSON response
    try:
        # Assuming the response is in JSON format
        return response.content
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error parsing analysis results")

@app.post("/analyze")
async def analyze(
    job_description: str = Form(...),
    resume: UploadFile = File(...)
):
    try:
        # Read the file content
        file_content = await resume.read()
        
        # Extract text based on file type
        if resume.filename.endswith('.pdf'):
            resume_text = extract_text_from_pdf(file_content)
        elif resume.filename.endswith('.docx'):
            resume_text = extract_text_from_docx(file_content)
        else:
            raise HTTPException(status_code=400, detail="Unsupported file format")

        # Analyze the resume
        analysis_result = analyze_resume(resume_text, job_description)
        
        return analysis_result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
