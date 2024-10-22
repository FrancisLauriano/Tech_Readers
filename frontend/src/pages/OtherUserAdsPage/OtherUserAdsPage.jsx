import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/CardAnuncios';
import { getExchangesByUserId } from '../../services/exchangeService';

const OtherUserAdsPage = ({ match }) => {
  const [userExchanges, setUserExchanges] = useState([]);

  useEffect(() => {
    const fetchUserExchanges = async () => {
      const { id } = match.params;
      const data = await getExchangesByUserId(id);
      setUserExchanges(data);
    };

    fetchUserExchanges();
  }, [match.params]);

  return (
    <div>
      <h2>Anúncios de Outros Usuários</h2>
      {userExchanges.map((exchange) => (
        <Card key={exchange.id}>
          <h3>{exchange.titulo}</h3>
          <p>{exchange.descricao}</p>
        </Card>
      ))}
    </div>
  );
};

export default OtherUserAdsPage;



