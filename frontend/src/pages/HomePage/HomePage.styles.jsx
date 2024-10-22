import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;  
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.Branco};
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  padding-top: 100px; 
  padding-bottom: 80px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  box-sizing: border-box; 
`;

export const Banner = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Máximo de três colunas */
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
`;

export const SelectedCard = styled.div`
  width: 100%;
  max-width: 1200px; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #FFFFFF;
  border: 1px solid #B7B7B7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  box-sizing: border-box; 
  overflow: visible; 
  position: relative;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px; 
  height: 30px; 
  background-color: #FFFFFF; 
  border: 1px solid #B7B7B7; 
  border-radius: 50%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 1.2rem; 
  cursor: pointer; 
  color: ${({ theme }) => theme.colors.Preto}; 
  transition: background-color 0.2s, transform 0.2s; 
  z-index: 3; 

  &:hover {
    background-color: #f0f0f0; 
    transform: scale(1.1); 
  }

  &:focus {
    outline: none; 
  }
`;









