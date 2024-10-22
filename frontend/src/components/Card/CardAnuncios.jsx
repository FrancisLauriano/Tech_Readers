import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  AdCard, ProfileAnuncio, AnuncioImage, SelectedAdCard,
  SelectedAnuncioInfo, ButtonContainer, EditButton, DeleteButton,
  MessageButton, ToggleButtonContainer, ReviewContainer, AdContent, AdDetails
} from "./CardAnuncios.styles";

import defaultProfileImg from '../../assets/profile.svg';
import defaultBookImg from '../../assets/book-image.svg';
import { getUserById } from '../../services/userService';
import { getCookie } from '../../utils/Cookie';
import ConfirmDeleteAdModal from '../../Modals/ConfirmDeleteAdModal/ConfirmDeleteAdModal';
import DeleteAdSuccessModal from '../../Modals/DeleteAdSuccessModal/DeleteAdSuccessModal';
import toggleOff from '../../assets/toggle-off-solid.svg'; 
import toggleOn from '../../assets/toggle-on-solid.svg'; 
import { stateExchange } from '../../services/exchangeService';
import trashIcon from '../../assets/trash-icon.svg';
import ReviewStars from '../ReviewStars/ReviewStars';
import { createReview } from '../../services/reviewService';
import CreateAvaliacaoModal from '../../Modals/CreateAvaliacaoModal/CreateAvaliacaoModal'; 

const CardAnuncios = ({ data, onClick, selected, isDisabled, onDelete }) => {
  const [userInfo, setUserInfo] = useState({ name: '', image: defaultProfileImg });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAvaliacaoModal, setShowAvaliacaoModal] = useState(false); // estado para controlar o modal de avaliação
  const [isActive, setIsActive] = useState(data.ativo);
  const [rating, setRating] = useState(0); 
  const [comment, setComment] = useState('');
  const [hasReviewed, setHasReviewed] = useState(false); // controle de avaliação
  const navigate = useNavigate();
  const userId = getCookie('userId');

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (data.anunciante_id) {
        try {
          const user = await getUserById(data.anunciante_id);
          setUserInfo({
            name: user.nome || 'Usuário Desconhecido',
            image: user.image || defaultProfileImg
          });
        } catch (error) {
          console.error('Erro ao buscar o usuário:', error);
        }
      }
    };

    fetchUserInfo();
  }, [data.anunciante_id]);

  const handleProfileClick = () => {
    if (data.anunciante_id === userId) {
      navigate('/my-profile');
    } else {
      navigate(`/other-profile/${data.anunciante_id}`);
    }
  };

  const handleEditClick = () => {
    navigate(`/editar-anuncio/${data.id}`);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (onDelete) {
      await onDelete(data.id);
      setShowDeleteModal(false);
      setShowSuccessModal(true);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
  };

  const handleMessageClick = () => {
    navigate(`/chat/${data.anunciante_id}`);
  };

  const handleToggleClick = async () => {
    try {
      const updatedData = await stateExchange(data.id);
      setIsActive(updatedData.ativo);
      data.ativo = updatedData.ativo;
    } catch (error) {
      console.error('Erro ao alternar o estado do anúncio:', error);
    }
  };

  const handleSubmitReview = async () => {
    if (rating === 0) {
      alert('A nota é obrigatória!');
      return;
    }

    const reviewData = {
      nota: rating,
      comentario: comment,
      usuario_avaliador_id: userId,
      anuncio_id: data.id,
    };

    try {
      await createReview(reviewData);
      setHasReviewed(true);
      setShowAvaliacaoModal(true); // mostrar o modal apos o envio bem sucedido
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      alert('Erro ao enviar avaliação.');
    }
  };

  const anuncioImage = data.image || defaultBookImg;

  return (
    <>
      {selected ? (
        <SelectedAdCard>
          {data.anunciante_id === userId && (
            <ToggleButtonContainer>
              <img 
                src={isActive ? toggleOn : toggleOff} 
                alt={isActive ? "Desativar" : "Ativar"}
                onClick={handleToggleClick} 
                style={{ cursor: 'pointer', width: '24px', height: '24px' }}
              />
            </ToggleButtonContainer>
          )}
          <ProfileAnuncio onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
            <img src={userInfo.image} alt="perfil" />
          </ProfileAnuncio>

          <AdContent>
            <div>
              <AnuncioImage src={anuncioImage} alt="Anúncio Avaliado" />

              {/* avaliação só será exibida se o usuário não for o dono do anuncio */}
              {data.anunciante_id !== userId && !hasReviewed && (
                <ReviewContainer>
                  <h4>Avalie este anúncio:</h4>
                  <div className="stars">
                    <ReviewStars rating={rating} onClick={(index) => setRating(index)} />
                  </div>
                  <textarea
                    placeholder="Deixe um comentário (opcional)"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button onClick={handleSubmitReview}>
                    Enviar Avaliação
                  </button>
                </ReviewContainer>
              )}
            </div>

            <AdDetails>
              <h3>{data.titulo}</h3>
              <p><strong>Nome do Anunciante:</strong> {userInfo.name}</p>
              <p><strong>Livro Oferecido:</strong> {data.titulo_livro_oferecido}</p>
              <p><strong>Autor Oferecido:</strong> {data.autor_livro_oferecido}</p>
              <p><strong>Gênero Oferecido:</strong> {data.genero_livro_oferecido}</p>
              <p><strong>Livro Solicitado:</strong> {data.titulo_livro_solicitado}</p>
              <p><strong>Autor Solicitado:</strong> {data.autor_livro_solicitado}</p>
              <p><strong>Gênero Solicitado:</strong> {data.genero_livro_solicitado}</p>
              {data.descricao && <p><strong>Descrição:</strong> {data.descricao}</p>}
              <ButtonContainer>
                {data.anunciante_id === userId ? (
                  <>
                    <EditButton onClick={handleEditClick}>Editar anúncio</EditButton>
                    <DeleteButton onClick={handleDeleteClick}>
                      <img src={trashIcon} alt="Excluir" style={{ marginRight: '8px' }} />
                      Excluir anúncio
                    </DeleteButton>
                  </>
                ) : (
                  <>
                    <MessageButton onClick={handleMessageClick}>Enviar Mensagem</MessageButton>
                  </>
                )}
              </ButtonContainer>
            </AdDetails>
          </AdContent>
        </SelectedAdCard>
      ) : (
        <AdCard onClick={!isDisabled ? onClick : null} style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}>
          <ProfileAnuncio onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
            <img src={userInfo.image} alt="perfil" />
          </ProfileAnuncio>
          <AnuncioImage src={anuncioImage} alt="Anúncio Avaliado" />
          <h3>{data.titulo}</h3>
          <p><strong>Livro Oferecido:</strong> {data.titulo_livro_oferecido}</p>
          <p><strong>Autor Oferecido:</strong> {data.autor_livro_oferecido}</p>
          <p><strong>Livro Solicitado:</strong> {data.titulo_livro_solicitado}</p>
          <p><strong>Autor Solicitado:</strong> {data.autor_livro_solicitado}</p>
        </AdCard>
      )}

      {showDeleteModal && (
        <ConfirmDeleteAdModal
          anuncioId={data.id}
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      )}

      {showSuccessModal && (
        <DeleteAdSuccessModal onClose={handleSuccessClose} />
      )}

      {showAvaliacaoModal && (
        <CreateAvaliacaoModal onConfirm={() => setShowAvaliacaoModal(false)} />
      )}
    </>
  );
};

export default CardAnuncios;





