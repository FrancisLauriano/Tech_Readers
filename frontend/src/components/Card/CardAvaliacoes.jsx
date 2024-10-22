import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import defaultProfileImg from '../../assets/profile.svg';
import defaultBookImg from '../../assets/book-image.svg';
import { getUserById } from '../../services/userService';
import { getExchangeById } from '../../services/exchangeService';
import { getCookie } from '../../utils/Cookie'; // Importa a função getCookie
import ReviewStars from '../../components/ReviewStars/ReviewStars';
import {
  ReviewCardContainer,
  ReviewerImages,
  ReviewerImage,
  ReviewContent,
  ReviewText,
  BookTitle,
  BookGenre,
  BookAuthor,
  AdImage,
} from './CardAvaliacoes.styles';

const CardAvaliacoes = ({ review }) => {
  const [reviewer, setReviewer] = useState(null);
  const [reviewedUser, setReviewedUser] = useState(null);
  const [exchange, setExchange] = useState(null);
  const navigate = useNavigate(); // Hook de navegação

  const currentUserId = getCookie('userId'); // Captura o ID do usuário logado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewerData = await getUserById(review.usuario_avaliador_id);
        setReviewer(reviewerData);

        const exchangeData = await getExchangeById(review.anuncio_id);
        setExchange(exchangeData);

        const reviewedUserData = await getUserById(exchangeData.anunciante_id);
        setReviewedUser(reviewedUserData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, [review]);

  // Função para navegar para o perfil do usuário
  const navigateToProfile = (userId) => {
    if (userId === currentUserId) {
      navigate('/my-profile'); // Se for o próprio usuário, vai para a página MyProfilePage
    } else {
      navigate(`/other-profile/${userId}`); // Se for outro usuário, vai para a página OthersProfilePage
    }
  };

  return (
    <ReviewCardContainer>
      <ReviewerImages>
        <ReviewerImage
          src={reviewedUser?.image || defaultProfileImg}
          alt="Dono do Anúncio"
          onClick={() => navigateToProfile(exchange?.anunciante_id)} // Navega ao clicar na imagem do usuário avaliado
        />
        <ReviewerImage
          src={reviewer?.image || defaultProfileImg}
          alt="Avaliador"
          $isReviewer
          onClick={() => navigateToProfile(review?.usuario_avaliador_id)} // Navega ao clicar na imagem do avaliador
        />
      </ReviewerImages>
      <AdImage src={exchange?.image || defaultBookImg} alt="Imagem do Anúncio" />
      <ReviewContent>
        <ReviewStars rating={review.nota} />
        {review.comentario && <ReviewText>{review.comentario}</ReviewText>}
        <BookTitle>{exchange?.titulo || 'Título do Livro'}</BookTitle>
        <BookGenre>{exchange?.genero_livro_oferecido || 'Gênero'}</BookGenre>
        <BookAuthor>{exchange?.autor_livro_oferecido || 'Autor'}</BookAuthor>
      </ReviewContent>
    </ReviewCardContainer>
  );
};

export default CardAvaliacoes;












