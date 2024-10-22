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

export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  background-color: #FFFFFF; 
  border: 1px solid #FFFFFF; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: auto; 
  overflow-y: auto;
  min-height: 200px; 
`;

export const ChatItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  &:last-child {
    border-bottom: none;
  }
`;



