import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  flex: 1;
  background-color: #E8E8E8; 
  display: flex;
  align-items: center;
  justify-content: center;
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
  position: relative;
  flex-direction: column;
`;

export const LoginBox = styled.div`
  background-color: #EEEEEE; 
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  position: relative;
  margin-top: 30px; 
`;

export const BackButton = styled.button`
  align-self: flex-end; 
  background-color: #5A645F; 
  color: #E8E8E8; 
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 20px; 
  margin-bottom: 10px; 
  display: flex; 
  align-items: center; 
  &:hover {
    background-color: #4b5351;
  }
`;

export const InputLabel = styled.label`
  color: #303030; 
  font-size: 1rem;
  margin: 10px 0 5px;
  display: block;
`;

export const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const RememberMeLabel = styled.label`
  color: #8B8B8B; 
  font-size: 0.9rem;
`;

export const ForgotPasswordLink = styled.a`
  color: #8B8B8B; 
  font-size: 0.9rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  hr {
    flex: 1;
    border: none;
    height: 1px;
    background-color: #A0A0A0; 
  }
  span {
    margin: 0 10px;
    color: #A0A0A0; 
  }
`;

export const RegisterLink = styled.div`
  text-align: center;
  color: #000000; 
  margin-top: 20px;
  font-size: 0.9rem;

  p {
    margin: 0; 
  }

  a {
    display: block; 
    color: #000000; 
    text-decoration: none;
    font-weight: bold;
    margin-top: 5px; 
    &:hover {
      text-decoration: underline;
    }
  }
`;







