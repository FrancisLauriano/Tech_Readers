import styled from 'styled-components';

export const ReviewContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  // padding-left: 60px; 

  h4 {
    margin-bottom: 10px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.Preto};
  }

  .stars {
    display: flex;
    justify-content: flex-start;
    gap: 5px; 
    margin-top: 10px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    height: 80px;
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 14px;
    background-color: #5A645F;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #4E5653;
    }
  }
`;

export const AdCard = styled.div`
  width: 100%;
  max-width: 250px;
  background-color: #EEEEEE;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  overflow: visible;
  cursor: pointer;
  position: relative;
  

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0px;
    
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.Preto};
  }

  p {
    font-size: 0.9rem;
    color: grey;
    margin-bottom: 10px;
    line-height: 1.2;
    text-align: justify;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    img {
      height: auto;
    }
  }
`;

export const ProfileAnuncio = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.Branco};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -30px;
  left: calc(50% - 30px);
  z-index: 1;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #EEEEEE;
  }

  @media (max-width: 768px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const AnuncioImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 30px;
  // padding-left: 60px; 
`;

export const SelectedAdCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #FFFFFF;
  border: 1px solid #B7B7B7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const AdContent = styled.div`
  display: flex;
  gap: 40px; /* espaçamento entre a imagem e as informações */
`;

export const AdDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  padding-top: 30px;
  padding-left: 100px; /*  padding para empurrar as informações para a direita */
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 80px;
  width: 100%;
`;

export const EditButton = styled.button`
  flex: 1;
  padding: 16px 32px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #5A645F;
  color: #E8E8E8;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  &:hover {
    background-color: #4E5653;
  }
`;

export const DeleteButton = styled.button`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #8B8B8B;
  border-radius: 5px;
  cursor: pointer;
  background-color: #FFFFFF;
  color: #1F1F1F;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  img {
    margin-right: 8px;
  }

  &:hover {
    background-color: #F1F1F1;
  }
`;

export const MessageButton = styled.button`
  flex: 1;
  padding: 10px 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #5A645F;
  color: #E8E8E8;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;

  &:hover {
    background-color: #4E5653;
  }
`;

export const ToggleButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 40px;
  cursor: pointer;
  z-index: 2;
`;

export const SelectedAnuncioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.Preto};
  }

  p {
    font-size: 0.9rem;
    color: grey;
    margin-bottom: 10px;
    line-height: 1.2;
    text-align: justify;
  }
`;




