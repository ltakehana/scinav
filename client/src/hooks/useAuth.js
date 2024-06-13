import { useState, useEffect } from 'react';
import { login as loginService, logout as logoutService } from '../services/authService';
import { isAuthenticated as isAuth, setToken, removeToken } from '../services/tokenService';
import { getUser } from '../services/userService';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(isAuth());
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      getUser()
        .then(setUser)
        .catch(() => {
          logoutService();
          setIsAuthenticated(false);
        });
    }
  }, [isAuthenticated]);

  const login = async (username, password) => {
    try {
      const data = await loginService(username, password);
      setToken(data.access_token);
      setIsAuthenticated(true);
      const userData = await getUser();
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const logout = () => {
    logoutService();
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout
  };
};
