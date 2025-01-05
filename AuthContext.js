import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const loadAuthToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        setAuthToken(token); 
      }
    };

    loadAuthToken();
  }, []);

  const setToken = async (token) => {
    await AsyncStorage.setItem('authToken', token);
    setAuthToken(token); 
  };

  const logout = async () => {
    await AsyncStorage.removeItem('authToken');
    setAuthToken(null); 
  };

  return (
    <AuthContext.Provider value={{ authToken, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
