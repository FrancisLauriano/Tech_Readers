import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh; 
  background-color: #E8E8E8; 
`;

export const LeftContainer = styled.div`
  flex: 1;
  background-color: #E8E8E8; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; 
  height: 100vh; 
  width: 50%; 
`;

export const Logo = styled.img`
  max-width: 60%;
`;

export const RightContainer = styled.div`
  flex: 1;
  background-color: #D7C4B6; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  min-height: 100vh; 
  overflow-y: auto; 
  margin-left: 50%;
`;

export const RegisterBox = styled.div`
  background-color: #EEEEEE;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 20px 0;
  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px; 
  background-color: #5A645F;
  color: #E8E8E8;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #4b5351;
  }
`;

export const InputLabel = styled.label`
  color: #303030;
  font-size: 1rem;
  margin: 0 0 5px;
  display: block;
  text-align: left;
  width: 100%;
`;

export const InputFieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background-color: #FEFCFC;
  color: #8B8B8B;
  font-size: 14px;
  box-sizing: border-box;
  text-align: center; 
  
  &::placeholder {
    color: #8B8B8B;
  }
`;








