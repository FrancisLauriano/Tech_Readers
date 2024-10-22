import styled from 'styled-components';

export const StyledChatBubble = styled.div`
  background-color: ${({ $sender }) => ($sender ? '#56a559' : '#d3d3d3')};
  color: ${({ $sender }) => ($sender ? '#fff' : '#000')};
  padding: 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  max-width: 60%;
  align-self: ${({ $sender }) => ($sender ? 'flex-end' : 'flex-start')};
  position: relative; /* Necessário para posicionamento relativo do timestamp */
  margin-bottom: 20px; /* Aumenta a margem inferior para evitar sobreposição */
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: ${({ $sender }) => ($sender ? '0 0 0 10px' : '0 10px 0 0')};
`;

export const MessageMeta = styled.span`
  font-size: 10px;
  color: ${({ $sender }) => ($sender ? '#d0d0d0' : '#434343')};  /* Cores diferentes para mensagens enviadas e recebidas */
  // position: absolute; /* Posiciona no canto inferior direito */
  margin-top: 5px; /* Adiciona margem superior para separar a data/hora do texto da mensagem */
  text-align: ${({ $sender }) => ($sender ? 'right' : 'left')};
  align-self: ${({ $sender }) => ($sender ? 'flex-end' : 'flex-start')};
`;




