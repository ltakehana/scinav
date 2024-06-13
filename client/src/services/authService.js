import api from './api';
import qs from 'qs';

export const login = async (username, password) => {
  try {
    const response = await api.post('/api/v1/auth/login', qs.stringify({
      username,
      password
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
