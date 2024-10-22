import styled from 'styled-components';

export const ChatPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #E6E6E6; /* Cor de fundo do ChatPreview */
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d9d9d9; /* Cor ao passar o mouse */
  }
`;

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const LastMessage = styled.span`
  color: #888;
  font-size: 14px;
`;




