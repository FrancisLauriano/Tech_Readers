import api from './api';

// Cria uma nova avaliação
export const createReview = async (reviewData) => {
  try {
    const response = await api.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar a avaliação:', error);
    throw error;
  }
};

// Retorna todas as avaliações de um anúncio específico
export const getReviewsByExchangeId = async (anuncio_id) => {
  try {
    const response = await api.get(`/reviews/${anuncio_id}/exchanges`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter avaliações:', error);
    throw error;
  }
};

// Atualiza os dados de uma avaliação específica por ID
export const updateReview = async (id, reviewData) => {
  try {
    const response = await api.put(`/reviews/${id}`, reviewData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar a avaliação:', error);
    throw error;
  }
};

// Deleta uma avaliação específica por ID
export const deleteReview = async (id) => {
  try {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar a avaliação:', error);
    throw error;
  }
};

// Curte uma avaliação (incrementa qtd_like)
export const likeReview = async (id) => {
  try {
    const response = await api.patch(`/reviews/${id}/like`);
    return response.data;
  } catch (error) {
    console.error('Erro ao curtir a avaliação:', error);
    throw error;
  }
};






