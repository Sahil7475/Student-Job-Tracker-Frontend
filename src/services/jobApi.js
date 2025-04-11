import { apiRequest } from './interceptors';

export const jobApi = {
  getAllJobs: async (filters = {}) => {
    
    const queryParams = new URLSearchParams();
    
    if (filters.status) {
      queryParams.append('status', filters.status);
    }
    
    if (filters.date) {
      queryParams.append('date', filters.date);
    }
    
    const queryString = queryParams.toString();
    const endpoint = queryString ? `/?${queryString}` : '/';
    
    return apiRequest(endpoint);
  },
  
  addJob: async (jobData) => {
    return apiRequest('/add', {
      method: 'POST',
      body: JSON.stringify(jobData),
    });
  },
  
  updateJobStatus: async (jobId, status) => {
    return apiRequest(`/${jobId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },
  
  deleteJob: async (jobId) => {
    return apiRequest(`/${jobId}`, {
      method: 'DELETE',
    });
  },
};