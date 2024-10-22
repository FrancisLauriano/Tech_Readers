import api from "./api";	

// Obtem todos os anuncios
export const getAllExchanges = async () => {
  try {
    const response = await api.get("/exchanges");
    return response.data;
  } catch (error) {
    console.error("Erro ao obter anúncios:", error);
    throw error;
  }
};

// Alterna o estado de um anúncio (de ativo para inativo e vice-versa)
export const stateExchange = async (id) => {
  try {
    const response = await api.patch(`/exchanges/state/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao fechar o anúncio:", error);
    throw error;
  }
};

// Obtem um anuncio especifico por ID
export const getExchangeById = async (id) => {
  try {
    const response = await api.get(`/exchanges/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o anúncio:", error);
    throw error;
  }
};

// Obtem todos os anuncios de um usuario especifico  getExchangesByUserId 
export const getExchangesByUserId = async (userId) => {
  try {
    const response = await api.get(`/exchanges/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter os anúncios do usuário:", error);
    throw error;
  }
};

// Cria um novo anuncio
export const createExchange = async (exchangeData) => {
  try {
    const response = await api.post("/exchanges", exchangeData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o anúncio:", error);
    throw error;
  }
};

// Atualiza os dados de um anuncio especifico
export const updateExchange = async (id, exchangeData) => {
  try {
    const response = await api.put(`/exchanges/${id}`, exchangeData);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar o anúncio:", error);
    throw error;
  }
};

// Deleta um anuncio especifico
export const deleteExchange = async (id) => {
  try {
    const response = await api.delete(`/exchanges/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar o usuário:', error);
    throw error;  
  }
};






