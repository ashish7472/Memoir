const API_BASE = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'}/api`;

export const entriesAPI = {
  // Get all entries
  getEntries: async () => {
    const response = await fetch(`${API_BASE}/entries`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to get entries');
    }
    
    return response.json();
  },

  // Get single entry
  getEntry: async (id) => {
    const response = await fetch(`${API_BASE}/entries/${id}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to get entry');
    }
    
    return response.json();
  },

  // Create new entry
  createEntry: async (entryData) => {
    const response = await fetch(`${API_BASE}/entries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entryData),
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create entry');
    }
    
    return response.json();
  },

  // Update entry
  updateEntry: async (id, entryData) => {
    const response = await fetch(`${API_BASE}/entries/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entryData),
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update entry');
    }
    
    return response.json();
  },

  // Delete entry
  deleteEntry: async (id) => {
    const response = await fetch(`${API_BASE}/entries/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete entry');
    }
    
    return response.json();
  },

  // Search entries
  searchEntries: async (searchText) => {
    const response = await fetch(`${API_BASE}/entries/search?text=${encodeURIComponent(searchText)}`, {
      credentials: 'include'
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Search failed');
    }
    
    return response.json();
  }
};
