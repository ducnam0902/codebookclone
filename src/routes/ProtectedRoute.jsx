import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  return !token ? <Navigate to="/login" /> : children;
};
