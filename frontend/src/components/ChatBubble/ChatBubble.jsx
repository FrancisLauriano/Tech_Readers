import React from 'react';
import { StyledChatBubble, UserImage, MessageMeta } from './ChatBubble.styles';
import { format } from 'date-fns'; // Importa a função para formatar a data

const ChatBubble = ({ message, sender, userImage, timestamp }) => {
  // Formata a data para um formato mais legível
  const formattedTimestamp = format(new Date(timestamp), 'dd/MM/yyyy HH:mm');

  return (
    <div style={{ display: 'flex', flexDirection: sender ? 'row-reverse' : 'row', alignItems: 'center' }}>
      <UserImage src={userImage} alt="User" />
      <StyledChatBubble $sender={sender}>
        <p>{message}</p>
        <MessageMeta>{formattedTimestamp}</MessageMeta> {/* Exibe a data e hora */}
      </StyledChatBubble>
    </div>
  );
};

export default ChatBubble;



