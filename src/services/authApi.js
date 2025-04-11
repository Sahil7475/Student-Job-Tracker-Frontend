import { apiRequest } from "./interceptors";

export const authApi = {
    register: async (userData) => {
      return apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
    },
    
    login: async (credentials) => {
      return apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
    },
  };
