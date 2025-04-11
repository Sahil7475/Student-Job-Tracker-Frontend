// API base URL
const API_BASE_URL = 'https://student-job-tracker-server-30qv.onrender.com/api';

// Function to handle API requests with auth token
export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  
  
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }
  
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // Handle non-2xx responses
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'API request failed');
    }
    
    // Return JSON data if available
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};


