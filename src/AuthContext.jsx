import React, { useContext, useEffect, useState, createContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded); 
        setIsAuthenticated(true); 
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
      }
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);


  const login = (token) => {
    localStorage.setItem('token', token); 
    const decoded = jwtDecode(token);
    setUser(decoded); 
    setIsAuthenticated(true); 
  };

  const logout = () => {
    localStorage.removeItem('token'); 
    setUser(null); 
    setIsAuthenticated(false); 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);