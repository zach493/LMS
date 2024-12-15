import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a Context for authentication
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  // Load authToken from AsyncStorage on app startup
  useEffect(() => {
    const loadAuthToken = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        setAuthToken(token); // Set the token to the state if it exists
      }
    };

    loadAuthToken();
  }, []);

  // Save the authToken to AsyncStorage whenever it changes
  const setToken = async (token) => {
    await AsyncStorage.setItem('authToken', token);
    setAuthToken(token); // Update the state with the new token
  };

  // Logout function to clear token
  const logout = async () => {
    await AsyncStorage.removeItem('authToken');
    setAuthToken(null); // Clear token from state
  };

  return (
    <AuthContext.Provider value={{ authToken, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
