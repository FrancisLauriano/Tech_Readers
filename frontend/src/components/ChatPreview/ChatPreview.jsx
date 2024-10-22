import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatPreviewContainer, UserName, LastMessage, ChatInfo, UserAvatar } from './ChatPreview.styles';
import { getUserById } from '../../services/userService'; 
import defaultProfileImg from '../../assets/profile.svg'; 

const ChatPreview = ({ otherUserId, messages }) => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate(); // Hook de navegação para redirecionamento

  useEffect(() => {
    const fetchUserData = async () => {
      if (otherUserId) {
        try {
          const data = await getUserById(otherUserId);
          setUserData(data);
        } catch (error) {
          console.error('Erro ao obter dados do usuário:', error);
        }
      }
    };

    fetchUserData();
  }, [otherUserId]);

  // Ordena as mensagens pela data de envio para obter a última
  const sortedMessages = [...messages].sort((a, b) => new Date(b.data_envio) - new Date(a.data_envio));
  const lastMessage = sortedMessages[0]; // Pega a última mensagem após ordenação

  // Função para redirecionar para a página de chat ao clicar no preview
  const handleClick = () => {
    navigate(`/chat/${otherUserId}`);
  };

  return (
    <ChatPreviewContainer onClick={handleClick}>
      <UserAvatar src={userData.image || defaultProfileImg} alt="User Avatar" />
      <ChatInfo>
        <UserName>{userData.nome || 'Nome do Usuário'}</UserName>
        <LastMessage>{lastMessage ? lastMessage.texto : 'Nenhuma mensagem ainda.'}</LastMessage>
      </ChatInfo>
    </ChatPreviewContainer>
  );
};

export default ChatPreview;
















