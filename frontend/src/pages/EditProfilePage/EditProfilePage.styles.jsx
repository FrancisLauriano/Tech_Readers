// EditProfilePage.styles.jsx:
import styled from 'styled-components';
import Button from '../../components/Button/Button'; 

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100vw; 
  padding: 20px;
  padding-top: 100px; 
  padding-bottom: 60px; 
  background-color: #FEFCFC; 
  overflow-x: hidden; 
  box-sizing: border-box; 
`;

export const ProfileForm = styled.div`
  background-color: #EEEEEE; 
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #D9D9D9; 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box; 
`;

export const ProfileImage = styled.div`
  position: relative;
  margin-bottom: 20px;
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #18322E; 
  }

  .camera-icon-wrapper {
    position: absolute;
    bottom: 0;
    left: 75%; 
    transform: translate(-50%, 50%);
    width: 50px; 
    height: 50px; 
    background-color: #D9D9D9; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .camera-icon {
    width: 20px;
    height: 20px;
    border: none; 
  }

  input[type="file"] {
    display: none; 
  }
`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  color: #303030;
  align-self: flex-start;
  margin-bottom: 5px; /* Espaçamento abaixo do label */
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; 
`;

export const DoubleInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px; /* aumentando o espaçamento entre CEP e Número, e entre Município e UF */
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    width: 48%; 
  }
`;

export const SaveButton = styled(Button)`
  background-color: #18322E;
  color: #FFFFFF;
  width: 100%;
  margin-top: 20px;
`;

export const CancelButton = styled(Button)`
  background-color: #FFFFFF;
  color: #5A645F;
  width: 100%;
  margin-top: 10px;
  border: 1px solid #18322E;
`;
