import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { getExchangesByUserId } from '../../services/exchangeService';
import { getCookie } from '../../utils/Cookie';
import CardAnuncios from '../../components/Card/CardAnuncios';
import {
  PageContainer,
  SectionTitle,
  ExchangesContainer,
  SelectedCard,
  CloseButton
} from './MyAdsPage.styles';
import DeleteAdSuccessModal from '../../Modals/DeleteAdSuccessModal/DeleteAdSuccessModal'; // modificado

const MyAdsPage = () => {
  const [exchanges, setExchanges] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // modificado


  useEffect(() => {
    const fetchUserExchanges = async () => {
      try {
        const userId = getCookie('userId');
        const userExchanges = await getExchangesByUserId(userId);
        setExchanges(userExchanges);
      } catch (error) {
        console.error('Erro ao carregar anúncios do usuário:', error);
      }
    };

    fetchUserExchanges();
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
        {/* modificação */}
        {showSuccessModal && (
          <DeleteAdSuccessModal onClose={handleSuccessClose} />
        )} 
      </PageContainer>
      <Footer />
    </>
  );
};

export default MyAdsPage;




