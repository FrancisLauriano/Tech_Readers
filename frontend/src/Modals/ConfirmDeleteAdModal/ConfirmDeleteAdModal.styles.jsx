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
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente para o modal */
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #ffffff; /* Cor de fundo do modal */
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px; /* Limita a largura máxima do modal */
`;

export const Icon = styled.div`
  margin-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.Preto};
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  button {
    flex: 1; /* Faz com que ambos os botões tenham o mesmo tamanho */
  }
`;




