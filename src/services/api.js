const API_BASE_URL = 'http://localhost:8000';

export const analyzeResume = async (jobDescription, resumeFile) => {
  const formData = new FormData();
  formData.append('job_description', jobDescription);
  formData.append('resume', resumeFile);

  try {
    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Analysis failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error analyzing resume:', error);
    throw error;
  }
};
