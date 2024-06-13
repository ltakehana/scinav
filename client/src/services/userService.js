import api from './api';

export const getUser = async () => {
  try {
    const response = await api.get('/api/v1/auth/users/me');
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
