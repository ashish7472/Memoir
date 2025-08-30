const API_BASE = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}/api`;

export const userAPI = {
  // Get user profile
  getProfile: async () => {
    const response = await fetch(`${API_BASE}/users/me`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to get profile');
    }
    
    return response.json();
  },

  // Update user profile
  updateProfile: async (profileData) => {
    const response = await fetch(`${API_BASE}/users/me`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Profile update failed');
    }
    
    return response.json();
  }
};
