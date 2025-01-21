// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useCart } from './Component/CartContext';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const { setCart } = useCart(); // Access setCart from CartContext
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (token) => {
    // Handle login logic
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token'); // Clear token
    setIsLoggedIn(false);
    setCart([]); // Clear the cart when logging out
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



// // AuthContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     // Check if there's a token in localStorage and update state
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setIsLoggedIn(true);
//       setToken(storedToken);
//     } else {
//       setIsLoggedIn(false);
//       setToken(null);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, token, setIsLoggedIn, setToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
