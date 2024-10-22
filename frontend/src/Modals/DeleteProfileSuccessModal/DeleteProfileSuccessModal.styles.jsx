import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1); /* Fundo levemente transparente */
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #18322E; /* Verde escuro*/
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 400px;
`;

export const Icon = styled.div`
  margin-bottom: 20px;

  img {
    width: 50px; 
    height: 50px;
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: #ffffff; /* Branco para contraste no fundo verde escuro */
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const StyledButton = styled.button`
  background-color: #FFFFFF; /* Branco para o fundo do botão */
  color: #5A645F; /* Cor das letras no botão */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
  }
`;





