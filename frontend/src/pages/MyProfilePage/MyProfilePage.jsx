import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import { getExchangesByUserId } from '../../services/exchangeService';
import { getReviewsByExchangeId } from '../../services/reviewService';
import { getUserById } from '../../services/userService';
import { getCookie } from '../../utils/Cookie';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {
  PageContainer,
  ProfileSection,
  UserInfo,
  UserImage,
  UserName,
  UserBio,
  EditButton,
  Divider,
  SectionTitle,
  ExchangesContainer,
  ReviewsContainer,
  UserDetails,
  SelectedCard,
  CloseButton
} from './MyProfilePage.styles';
import CardAnuncios from '../../components/Card/CardAnuncios';
import defaultProfileImg from '../../assets/profile.svg';
import CardAvaliacoes from '../../components/Card/CardAvaliacoes';
import DeleteAdSuccessModal from '../../Modals/DeleteAdSuccessModal/DeleteAdSuccessModal'; // modificado

const MyProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [exchanges, setExchanges] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // modificado

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = getCookie('userId');
        const userData = await getUserById(userId);
        setProfileData(userData);

        const userExchanges = await getExchangesByUserId(userId);
        setExchanges(userExchanges);

        const userReviews = await Promise.all(
          userExchanges.map(async (exchange) => {
            const reviews = await getReviewsByExchangeId(exchange.id);
            return reviews;
          })
        );

        setReviews(userReviews.flat());
      } catch (error) {
        console.error('Erro ao carregar dados do perfil:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleSelectExchange = (exchange) => {
    setSelectedExchange(exchange);
  };

  const handleCloseSelected = () => {
    setSelectedExchange(null);
  };

  const removeExchange = (exchangeId) => {
    setExchanges((prevExchanges) => prevExchanges.filter((exchange) => exchange.id !== exchangeId));
    setSelectedExchange(null); // Fecha o card aberto
    setShowSuccessModal(true); // modificado - Abre o modal de sucesso após a remoção
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
  }; // modificado

  return (
    <>
      <Navbar />
      <PageContainer>
        <ProfileSection>
          <UserInfo>
            <UserImage src={profileData?.image || defaultProfileImg} alt="Profile" />
            <UserDetails>
              <UserName>{profileData?.nome || 'NOME PESSOA'}</UserName>
              <EditButton onClick={() => window.location.href = '/edit-profile'}>Editar Perfil</EditButton>
            </UserDetails>
          </UserInfo>
          <UserBio>{profileData?.bio || 'Nenhuma bio disponível.'}</UserBio>
        </ProfileSection>
        <Divider />
        <SectionTitle>MEUS ANÚNCIOS</SectionTitle>

        {selectedExchange && (
          <SelectedCard>
            <CloseButton onClick={handleCloseSelected}>X</CloseButton>
            <CardAnuncios data={selectedExchange} selected onDelete={removeExchange} />
          </SelectedCard>
        )}

        <ExchangesContainer>
          {exchanges.map((exchange) => (
            <CardAnuncios 
              key={exchange.id} 
              data={exchange} 
              onClick={() => handleSelectExchange(exchange)} 
              isDisabled={!!selectedExchange}
              onDelete={removeExchange}
            />
          ))}
        </ExchangesContainer>

        <SectionTitle>MEUS ANÚNCIOS AVALIADOS</SectionTitle>
        <ReviewsContainer>
          {reviews.map((review) => (
            <CardAvaliacoes key={review.id} review={review} />
          ))}
        </ReviewsContainer>

        {/* modificação */}
        {showSuccessModal && (
          <DeleteAdSuccessModal onClose={handleSuccessClose} />
        )} 
        
      </PageContainer>
      <Footer />
    </>
  );
};

export default MyProfilePage;





