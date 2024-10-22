import React, { useState, useEffect } from 'react';
import CardAnuncios from '../../components/Card/CardAnuncios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import * as S from './HomePage.styles';
import { getAllExchanges } from '../../services/exchangeService';
import HeaderImage from '../../assets/HEADER.svg';
import DeleteAdSuccessModal from '../../Modals/DeleteAdSuccessModal/DeleteAdSuccessModal'; // modificado

const HomePage = () => {
  const [exchanges, setExchanges] = useState([]);
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // modificado

  useEffect(() => {
    const fetchExchanges = async () => {
      const data = await getAllExchanges();
      const activeExchanges = data.filter(exchange => exchange.ativo === true); // Filtra apenas os anúncios ativos
      setExchanges(activeExchanges);
    };

    fetchExchanges();
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
    <S.PageContainer>
      <Navbar />
      <S.MainContent>
        <S.Banner>
          <img src={HeaderImage} alt="Banner" />
        </S.Banner>

        {selectedExchange && (
          <S.SelectedCard>
            <S.CloseButton onClick={handleCloseSelected}>X</S.CloseButton>
            <CardAnuncios data={selectedExchange} selected onDelete={removeExchange} />
          </S.SelectedCard>
        )}

        <S.CardGrid>
          {exchanges.map((exchange) => (
            <CardAnuncios 
              key={exchange.id} 
              data={exchange} 
              onClick={() => handleSelectExchange(exchange)} 
              isDisabled={!!selectedExchange}
              onDelete={removeExchange}
            />
          ))}
        </S.CardGrid>
        
        {/* modificação */}
        {showSuccessModal && (
          <DeleteAdSuccessModal onClose={handleSuccessClose} />
        )} 

      </S.MainContent>
      <Footer />
    </S.PageContainer>
  );
};

export default HomePage;











