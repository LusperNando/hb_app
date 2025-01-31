import React, { useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded.role);
        setUser(decoded); 
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
