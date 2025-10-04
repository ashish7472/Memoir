const API_BASE = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}/api`;

export const authAPI = {
  // Sign up user
  signup: async (userData) => {
    try {
      const response = await fetch(`${API_BASE}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include'
      });
      
      if (!response.ok) {
        const error = await response.json();
        console.error('Signup API Error:', error);
        throw new Error(error.message || 'Signup failed');
      }
      
      const data = await response.json();
      console.log('Signup successful:', data);
      return data;
    } catch (error) {
      console.error('Signup fetch error:', error);
      throw error;
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include'
      });
      
      if (!response.ok) {
        const error = await response.json();
        console.error('Login API Error:', error);
        throw new Error(error.message || 'Login failed');
      }
      
      const data = await response.json();
      console.log('Login successful:', data);
      return data;
    } catch (error) {
      console.error('Login fetch error:', error);
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    const response = await fetch(`${API_BASE}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Logout failed');
    }
    
    return response.json();
  },

  // Change password
  changePassword: async (passwordData) => {
    const response = await fetch(`${API_BASE}/auth/change-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(passwordData),
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Password change failed');
    }
    
    return response.json();
  }
};
