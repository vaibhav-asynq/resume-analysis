from typing import Dict, Any
import json

def format_analysis_response(claude_response: str) -> Dict[Any, Any]:
    """
    Format and validate the Claude response into the expected structure
    """
    try:
        # Extract JSON from Claude's response if it's wrapped in text
        json_str = claude_response.strip()
        if "```json" in json_str:
            json_str = json_str.split("```json")[1].split("```")[0]
        
        analysis = json.loads(json_str)
        
        # Ensure required fields are present
        required_fields = [
            "overallScore",
            "technicalSkills",
            "culturalFit",
            "insights",
            "recommendations"
        ]
        
        for field in required_fields:
            if field not in analysis:
                analysis[field] = []
                
        return analysis
        
    except json.JSONDecodeError:
        raise ValueError("Invalid JSON response from Claude")
    except Exception as e:
        raise ValueError(f"Error formatting analysis response: {str(e)}")
