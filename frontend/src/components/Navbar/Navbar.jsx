import React, { useState, useEffect } from 'react';
import {
  Nav,
  Logo,
  SearchBarContainer,
  SearchIcon,
  SearchBar,
  NavLinks,
  NavLink,
  ChatNotificationBadge,
  ResultsContainer, 
  ResultsTitle,
  CardGrid
} from './Navbar.styles'; 
import logoImg from '../../assets/LOGO-TECH-READERS.svg';
import searchIcon from '../../assets/search-icon.svg';
import chatIcon from '../../assets/chat-icon.svg';
import adIcon from '../../assets/ad-anuncio-icon.svg';
import starIcon from '../../assets/star-icon.svg';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useNavigate } from 'react-router-dom';
import { getAllExchanges } from '../../services/exchangeService';
import { getUnreadMessagesCount } from '../../services/messageService';
import { getCookie } from '../../utils/Cookie';
import CardAnuncios from '../../components/Card/CardAnuncios';

const MenuNav = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExchanges, setFilteredExchanges] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const userId = getCookie('userId'); // obter o ID do usuário logado

  useEffect(() => {
    const fetchUnreadMessages = async () => {
      if (userId) {
        try {
          const count = await getUnreadMessagesCount(userId); // obter a contagem de mensagens não lidas
          setUnreadCount(count);
        } catch (error) {
          console.error('Erro ao buscar mensagens não lidas:', error);
        }
      }
    };

    fetchUnreadMessages();
  }, [userId]); // executa quando o userId mudar

  const handleClick = (path) => {
    navigate(path);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async () => {
    if (searchTerm.trim() === '') return;
    try {
      const exchanges = await getAllExchanges();
      const filtered = exchanges.filter((exchange) =>
        exchange.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exchange.titulo_livro_oferecido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exchange.autor_livro_oferecido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exchange.genero_livro_oferecido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exchange.titulo_livro_solicitado.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exchange.autor_livro_solicitado.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exchange.genero_livro_solicitado.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredExchanges(filtered);
    } catch (error) {
      console.error("Erro ao buscar anúncios:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <>
      <Nav>
        <Logo
          style={{ cursor: "pointer" }}
          src={logoImg}
          alt="Logo"
          onClick={() => handleClick("/home")}
        />
        <SearchBarContainer>
          <SearchIcon src={searchIcon} alt="Buscar" onClick={handleSearchSubmit} />
          <SearchBar
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
        </SearchBarContainer>
        <NavLinks>
          <NavLink onClick={() => handleClick("/all-chats")}>
            {unreadCount > 0 && (
              <ChatNotificationBadge>{unreadCount}</ChatNotificationBadge>
            )}
            <img src={chatIcon} alt="Chat" />
            Chat
          </NavLink>
          <NavLink onClick={() => handleClick("/meus-anuncios")}>
            <img src={adIcon} alt="Meus Anúncios" />
            Meus Anúncios
          </NavLink>
          <NavLink onClick={() => handleClick("*")}>
            <img src={starIcon} alt="Avaliações" />
            Avaliações
          </NavLink>
          <DropdownMenu />
        </NavLinks>
      </Nav>
      {/* renderizar resultados filtrados se houver termos de busca */}
      {searchTerm && (
        <ResultsContainer>
          <ResultsTitle>RESULTADO DA PESQUISA</ResultsTitle>
          <CardGrid>
            {filteredExchanges.length > 0 ? (
              filteredExchanges.map((exchange) => (
                <CardAnuncios key={exchange.id} data={exchange} />
              ))
            ) : (
              <p>Nenhum anúncio encontrado.</p>
            )}
          </CardGrid>
        </ResultsContainer>
      )}
    </>
  );
};

export default MenuNav;





