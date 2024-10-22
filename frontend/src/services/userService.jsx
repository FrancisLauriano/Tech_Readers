import api from './api';
import { setCookie, removeCookie} from '../utils/Cookie';  

// Autentica um usuário e armazena o token JWT no cookie
export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/users/login', loginData);
    const { token, id } = response.data;

    if (token && id) {
      setCookie('token', token, 7);
      setCookie('userId', id, 7);
    } else {
      console.warn('Token ou ID não recebido após o login.');
    }

    return response.data;
  } catch (error) {
    console.error('Erro ao autenticar o usuário:', error);
    throw error;
  }
};

// Função de logout
export const logoutUser = () => {
  removeCookie('token'); // Remove o cookie de token
  removeCookie('userId'); // Remove o cookie de ID do usuário
};

// Retorna todos os usuários
export const getAllUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    throw error;
  }
};

// Retorna um usuário específico por ID
export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter o usuário:', error);
    throw error;
  }
};

// Cria um novo usuário
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar o usuário:', error);
    throw error;
  }
};

// Atualiza os dados de um usuário específico por ID
export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o usuário:', error);
    throw error;
  }
};

// Deleta um usuário específico por ID
export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar o usuário:', error);
    throw error;
  }
};




