// Gestion de l'authentification des utilisateurs

import axios from 'axios';

const API_URL = 'https://mon-api.com/api/';

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw new Error('Registration failed: ' + error.response.data.message);
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw new Error('Login failed: ' + error.response.data.message);
  }
};

const logout = () => {
  localStorage.removeItem('userToken');
};

export { register, login, logout };
