import styled from 'styled-components';

export const ReviewCardContainer = styled.div`
  width: 250px;
  height: 350px;
  background-color: #E9E1DB; /* Cor de fundo do card de avaliação */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative; /* Necessário para posicionar as imagens corretamente */
`;

export const ReviewerImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* Posiciona as imagens na parte superior do card */
  top: -20px; /* Ajusta a posição vertical das imagens */
`;

export const ReviewerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #E9E1DB; /* Borda para combinar com o fundo do card */
  background-color: white; /* Adiciona uma borda branca ao redor das imagens */
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2); /* Sombra para destacar as imagens */
  margin-left: -15px; /* Sobreposição das imagens */
  cursor: pointer; /* Define o cursor como pointer para indicar que é clicável */

  ${({ $isReviewer }) =>
    $isReviewer &&
    `
    z-index: 2; /* Imagem do avaliador sobrepõe a do dono do anúncio */
    margin-left: -10px; /* Ajusta a margem para sobrepor mais suavemente */
  `}
`;

export const AdImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  margin-top: 40px; /* Adiciona margem superior para acomodar as imagens do usuário */
  object-fit: cover;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2); /* Sombra para destacar a imagem */
`;

export const ReviewContent = styled.div`
  text-align: center;
  margin-top: 20px; /* Ajusta para dar espaço para as imagens */
`;

export const ReviewText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0;
`;

export const BookTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
`;

export const BookGenre = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

export const BookAuthor = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;




