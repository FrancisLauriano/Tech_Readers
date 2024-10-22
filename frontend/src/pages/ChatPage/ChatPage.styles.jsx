import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF; 
  padding-top: 95px; 
  padding-bottom: 50px; 
  overflow-y: auto; 
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  max-width: 800px;
  max-height: 400px; /* altura máxima para o ChatContainer */
  background-color: #EEEEEE; 
  border: 1px solid #EEEEEE; 
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #d0d0d0;
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatArea = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 120px); /*  altura máxima para acomodar o cabeçalho e o rodapé */
`;

export const FooterContainer = styled.div`
  padding: 10px;
  border-top: 1px solid #d0d0d0;
`;

export const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


