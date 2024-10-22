import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import { getExchangesByUserId } from '../../services/exchangeService';
import { getReviewsByExchangeId } from '../../services/reviewService';
import { getUserById } from '../../services/userService';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {
  PageContainer,
  ProfileSection,
  UserInfo,
  UserImage,
  UserName,
  UserBio,
  MessageButton,
  Divider,
  SectionTitle,
  ExchangesContainer,
  ReviewsContainer,
  UserDetails,
  SelectedCard,
  CloseButton
} from './OthersProfilePage.styles';
import CardAnuncios from '../../components/Card/CardAnuncios';
import defaultProfileImg from '../../assets/profile.svg';
import CardAvaliacoes from '../../components/Card/CardAvaliacoes';

const OthersProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [exchanges, setExchanges] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (!id) {
          console.error("ID do usuário não está definido.");
          return;
        }

        const userData = await getUserById(id);
        setProfileData(userData);

        const userExchanges = await getExchangesByUserId(id);

        // filtra os anúncios para mostrar apenas os ativos
        const activeExchanges = userExchanges.filter((exchange) => exchange.ativo === true);
        setExchanges(activeExchanges);

        const userReviews = await Promise.all(
          activeExchanges.map(async (exchange) => {
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
  }, [id]);

  const handleMessageClick = () => {
    navigate(`/chat/${id}`);
  };

  const handleSelectExchange = (exchange) => {
    setSelectedExchange(exchange);
  };

  const handleCloseSelected = () => {
    setSelectedExchange(null);
  };

  const removeExchange = (exchangeId) => {
    setExchanges((prevExchanges) => prevExchanges.filter((exchange) => exchange.id !== exchangeId));
    setSelectedExchange(null); // Fecha o card aberto
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        {profileData ? (
          <>
            <ProfileSection>
              <UserInfo>
                <UserImage src={profileData.image || defaultProfileImg} alt="Profile" />
                <UserDetails>
                  <UserName>{profileData.nome || 'NOME PESSOA'}</UserName>
                  <MessageButton onClick={handleMessageClick}>Mensagem</MessageButton>
                </UserDetails>
              </UserInfo>
              <UserBio>{profileData.bio || 'Nenhuma bio disponível.'}</UserBio>
            </ProfileSection>
            <Divider />
            <SectionTitle>LIVROS ANUNCIADOS</SectionTitle>

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

            <SectionTitle>ANÚNCIOS AVALIADOS</SectionTitle>
            <ReviewsContainer>
              {reviews.map((review) => (
                <CardAvaliacoes key={review.id} review={review} />
              ))}
            </ReviewsContainer>
          </>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </PageContainer>
      <Footer />
    </>
  );
};

export default OthersProfilePage;











