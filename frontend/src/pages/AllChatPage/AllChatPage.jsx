import React, { useState, useEffect } from 'react';
import { getAllChatsByUserId } from '../../services/messageService';
import { getCookie } from '../../utils/Cookie';
import ChatPreview from '../../components/ChatPreview/ChatPreview';
import { ChatListContainer, ChatItem, PageWrapper } from './AllChatPage.styles';
import Navbar from '../../components/Navbar/Navbar'; 
import Footer from '../../components/Footer/Footer'; 

const AllChatPage = () => {
  const [chats, setChats] = useState([]);
  const userId = getCookie('userId'); 

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await getAllChatsByUserId(userId);
        
        // agrupa as mensagens por outro usuario envolvido no chat
        const groupedChats = data.reduce((acc, message) => {
          const otherUserId = message.usuario_remetente_id === userId 
            ? message.usuario_destinatario_id 
            : message.usuario_remetente_id;
          
          if (!acc[otherUserId]) {
            acc[otherUserId] = [];
          }

          acc[otherUserId].push(message);
          return acc;
        }, {});

        setChats(Object.entries(groupedChats)); // converte para um array de entradas [otherUserId, messages]
      } catch (error) {
        console.error('Erro ao obter conversas:', error);
      }
    };

    fetchChats();
  }, [userId]);

  return (
    <>
      <Navbar /> 
      <PageWrapper>
        <ChatListContainer>
          {chats.map(([otherUserId, messages], index) => (
            <ChatItem key={index}>
              <ChatPreview otherUserId={otherUserId} messages={messages} />
            </ChatItem>
          ))}
        </ChatListContainer>
      </PageWrapper>
      <Footer /> 
    </>
  );
};

export default AllChatPage;




