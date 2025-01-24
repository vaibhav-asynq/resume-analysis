const API_URL = 'http://localhost:3000/api';

export async function analyzeResume(formData) {
  try {
    const response = await fetch(`${API_URL}/analyze`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Analysis failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

export async function getAnalysis(id) {
  try {
    const response = await fetch(`${API_URL}/analyses/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch analysis');
    }

    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}
