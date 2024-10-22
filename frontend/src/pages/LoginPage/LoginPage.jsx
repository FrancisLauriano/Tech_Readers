import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { loginUser } from '../../services/userService';
import * as S from './LoginPage.styles';
import { useNavigate } from 'react-router-dom';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      await loginUser(loginData);
      window.location.href = '/home';
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <S.PageContainer>
      <S.LeftContainer>
        <S.Logo src="/src/assets/TECH-READER-copiar.svg" alt="Tech Reader Logo" />
      </S.LeftContainer>
      <S.RightContainer>
        <S.BackButton onClick={handleBack}>
          <RotateLeftIcon style={{ marginRight: '5px' }} />
          Voltar
        </S.BackButton>
        
        <S.LoginBox>
          <S.InputLabel>Email</S.InputLabel>
          <InputField 
            placeholder="Insira seu email." 
            name="email" 
            value={loginData.email} 
            onChange={handleChange} 
          />
          <S.InputLabel>Senha</S.InputLabel>
          <InputField 
            placeholder="Insira sua senha." 
            name="senha" 
            type="password" 
            value={loginData.senha} 
            onChange={handleChange} 
          />
          <S.RememberMeContainer>
            <S.RememberMeLabel>
              <input type="checkbox" /> Lembre-se
            </S.RememberMeLabel>
            <S.ForgotPasswordLink href="#">Esqueci a senha</S.ForgotPasswordLink>
          </S.RememberMeContainer>
          <Button onClick={handleLogin}>Entrar</Button>
          <S.Divider>
            <hr />
            <span>ou</span>
            <hr />
          </S.Divider>
          <S.RegisterLink>
            <p>Ainda não possui cadastro?</p>
            <a href="/register">Cadastre-se</a>
          </S.RegisterLink>
        </S.LoginBox>
      </S.RightContainer>
    </S.PageContainer>
  );
};

export default LoginPage;






