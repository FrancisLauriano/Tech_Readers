import React, { useState, useEffect } from 'react';
import ChatBubble from '../../components/ChatBubble/ChatBubble';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { getMessagesBetweenUsers, createMessage, markMessageAsRead } from '../../services/messageService'; 
import { getCookie } from '../../utils/Cookie';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../services/userService';
import {
  ChatContainer,
  Header,
  ChatArea,
  FooterContainer, 
  MessageInputContainer,
  PageWrapper,
  UserAvatar
} from './ChatPage.styles';

import defaultProfileImg from '../../assets/profile.svg';
import Navbar from '../../components/Navbar/Navbar'; 
import Footer from '../../components/Footer/Footer';  

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userImages, setUserImages] = useState({ sender: null, receiver: null });
  const { id } = useParams();  // ID do outro usuário
  const userId = getCookie('userId');  // ID do usuário logado

  // Função para marcar mensagens como lidas
  const markMessagesAsRead = async (unreadMessages) => {
    try {
      for (const message of unreadMessages) {
        await markMessageAsRead(message.id);
      }
    } catch (error) {
      console.error('Erro ao marcar mensagem como lida:', error);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessagesBetweenUsers(userId, id); 
        const sortedMessages = data.sort((a, b) => new Date(a.data_envio) - new Date(b.data_envio));

        setMessages(sortedMessages);

        // filtrar mensagens ñ lidas que pertencem ao usuario logado como destinatario
        const unreadMessages = sortedMessages.filter(
          (msg) => !msg.lido && msg.usuario_destinatario_id === userId
        );

        if (unreadMessages.length > 0) {
          // marca  todas as mensagens não lidas como lidas
          await markMessagesAsRead(unreadMessages);
        }
      } catch (error) {
        console.error('Erro ao obter mensagens:', error);
      }
    };

    const fetchUserImages = async () => {
      try {
        const senderData = await getUserById(userId);
        const receiverData = await getUserById(id);
        setUserImages({
          sender: senderData.image || defaultProfileImg,
          receiver: receiverData.image || defaultProfileImg,
        });
      } catch (error) {
        console.error('Erro ao obter imagens dos usuários:', error);
      }
    };

    fetchMessages();
    fetchUserImages();
  }, [id, userId]);  //  quando o ID do usuário ou o ID do destinatário mudar

  const handleSendMessage = async () => {
    const messageData = {
      texto: newMessage,
      usuario_remetente_id: userId,
      usuario_destinatario_id: id, 
    };

    try {
      await createMessage(messageData);
      setNewMessage('');
      const updatedMessages = await getMessagesBetweenUsers(userId, id);
      const sortedMessages = updatedMessages.sort((a, b) => new Date(a.data_envio) - new Date(b.data_envio));
      setMessages(sortedMessages);
    } catch (error) {
      alert('Erro ao enviar mensagem.');
    }
  };

  return (
    <>
      <Navbar /> 
      <PageWrapper>
        <ChatContainer>
          <Header>
            <UserAvatar src={userImages.receiver} alt="User Avatar" />
          </Header>
          <ChatArea>
            {messages.map((msg, index) => (
              <ChatBubble 
                key={index} 
                message={msg.texto} 
                sender={msg.usuario_remetente_id === userId} 
                userImage={msg.usuario_remetente_id === userId ? userImages.sender : userImages.receiver}
                timestamp={msg.data_envio} 
              />
            ))}
          </ChatArea>
          <FooterContainer> 
            <MessageInputContainer>
              <InputField
                placeholder="Digite sua mensagem"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <Button onClick={handleSendMessage}>Enviar</Button>
            </MessageInputContainer>
          </FooterContainer>
        </ChatContainer>
      </PageWrapper>
      <Footer /> 
    </>
  );
};

export default ChatPage;


