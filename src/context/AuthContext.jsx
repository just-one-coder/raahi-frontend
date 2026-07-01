import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('raahi_token'));

  // Backend URL - Make sure this matches your backend URL
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  // Check if user is logged in on app start
  useEffect(() => {
    const checkAuthStatus = async () => {
      const storedToken = localStorage.getItem('raahi_token');
      const storedUser = localStorage.getItem('raahi_user');

      if (storedToken && storedUser) {
        setToken(storedToken);
        setCurrentUser(JSON.parse(storedUser));
        
        // Verify token is still valid
        try {
          const response = await fetch(`${API_BASE_URL}/auth/profile`, {
            headers: {
              'Authorization': `Bearer ${storedToken}`
            }
          });
          
          if (!response.ok) {
            throw new Error('Token invalid');
          }
        } catch (error) {
          console.error('Auth check failed:', error);
          logout();
        }
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const signup = async (userData) => {
    try {
      console.log('Sending signup request...', userData);
      
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Log the response for debugging
      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        localStorage.setItem('raahi_token', data.token);
        localStorage.setItem('raahi_user', JSON.stringify(data.user));
        setToken(data.token);
        setCurrentUser(data.user);
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error('Signup error:', error);
      return { 
        success: false, 
        message: `Network error: ${error.message}. Please check if the backend server is running on port 5000.` 
      };
    }
  };

  const signin = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('raahi_token', data.token);
        localStorage.setItem('raahi_user', JSON.stringify(data.user));
        setToken(data.token);
        setCurrentUser(data.user);
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message };
      }
    } catch (error) {
      console.error('Signin error:', error);
      return { 
        success: false, 
        message: `Network error: ${error.message}. Please check if the backend server is running.` 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('raahi_token');
    localStorage.removeItem('raahi_user');
    setToken(null);
    setCurrentUser(null);
  };

  const updateProfile = async (profileData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(profileData),
    });

    const data = await response.json();

    if (data.success) {
      const updatedUser = { ...currentUser, ...profileData };
      setCurrentUser(updatedUser);
      localStorage.setItem('raahi_user', JSON.stringify(updatedUser));
      return { success: true, message: data.message };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error('Profile update error:', error);
    return { 
      success: false, 
      message: `Network error: ${error.message}` 
    };
  }
};

  const value = {
    currentUser,
    token,
    signup,
    signin,
    logout,
    loading,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};