import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import * as S from './RegisterPage.styles';
import { createUser } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import CreateProfileModal from '../../Modals/CreateProfileModal/CreateProfileModal';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    enderecos: {
      logradouro: '',
      numero: '',
      bairro: '',
      complemento: '',
      cep: '',
      municipio: '',
      uf: ''
    },
    telefones: [{ contato: '' }]
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('enderecos.')) {
      setUserData({
        ...userData,
        enderecos: {
          ...userData.enderecos,
          [name.split('.')[1]]: value
        }
      });
    } else if (name === 'telefones') {
      setUserData({
        ...userData,
        telefones: [{ contato: value }]
      });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleRegister = async () => {
    if (userData.senha !== userData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    } else if (userData.senha.length <= 6) {
      alert('Senha deve ter mais de 6 caracteres');
      return;
    }

    const { confirmarSenha, ...userDataToSubmit } = userData;

    try {
      await createUser(userDataToSubmit);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/login');
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
        <S.RegisterBox>
          {[
            { label: 'Nome', name: 'nome', placeholder: 'Insira seu nome.' },
            { label: 'Email', name: 'email', placeholder: 'Insira seu email.' },
            { label: 'Senha', name: 'senha', type: 'password', placeholder: 'Insira sua senha.' },
            { label: 'Confirmar senha', name: 'confirmarSenha', type: 'password', placeholder: 'Confirme sua senha.' },
            { label: 'CEP', name: 'enderecos.cep', placeholder: 'Insira seu CEP' },
            { label: 'Número', name: 'enderecos.numero', placeholder: 'N°' },
            { label: 'Rua', name: 'enderecos.logradouro', placeholder: 'Insira sua rua' },
            { label: 'Bairro', name: 'enderecos.bairro', placeholder: 'Insira seu bairro' },
            { label: 'Complemento', name: 'enderecos.complemento', placeholder: 'Insira complemento' },
            { label: 'Município', name: 'enderecos.municipio', placeholder: 'Insira seu município' },
            { label: 'UF', name: 'enderecos.uf', placeholder: 'UF' },
          ].map((field, index) => (
            <S.InputFieldWrapper key={index}>
              <S.InputLabel>{field.label}:</S.InputLabel>
              <InputField 
                placeholder={field.placeholder}
                name={field.name}
                type={field.type || 'text'}
                value={field.name.includes('enderecos.') ? userData.enderecos[field.name.split('.')[1]] : userData[field.name]}
                onChange={handleChange}
              />
            </S.InputFieldWrapper>
          ))}

          <S.InputFieldWrapper>
            <S.InputLabel>Telefone de Contato:</S.InputLabel>
            <InputField 
              placeholder="Insira seu telefone de contato"
              name="telefones"
              type="text"
              value={userData.telefones[0].contato}
              onChange={handleChange}
            />
          </S.InputFieldWrapper>

          <Button onClick={handleRegister}>Cadastrar</Button>
        </S.RegisterBox>
      </S.RightContainer>

      {showSuccessModal && (
        <CreateProfileModal onConfirm={handleCloseModal} />
      )}
    </S.PageContainer>
  );
};

export default RegisterPage;












