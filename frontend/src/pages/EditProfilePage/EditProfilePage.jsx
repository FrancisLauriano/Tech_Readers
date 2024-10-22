// EditProfilePage.jsx:
import React, { useState, useEffect } from 'react';
import InputField from '../../components/InputField/InputField';
import { getUserById, updateUser } from '../../services/userService';
import { getCookie } from '../../utils/Cookie';
import { 
  ProfileContainer, 
  ProfileForm, 
  ProfileImage, 
  InputGroup, 
  DoubleInputGroup, 
  SaveButton, 
  CancelButton,
  LabelStyled 
} from './EditProfilePage.styles';
import defaultProfileImg from '../../assets/profile.svg'; 
import cameraImg from '../../assets/camera-icon.svg';
import Navbar from '../../components/Navbar/Navbar'; 
import Footer from '../../components/Footer/Footer'; 
import UpdateProfileModal from '../../Modals/UpdateProfileModal/UpdateProfileModal'; 
import { useNavigate } from 'react-router-dom'; 

const EditProfilePage = () => {
  const [userData, setUserData] = useState({
    nome: '',
    bio: '',
    email: '',
    senha: '',
    image: null, 
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

  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = getCookie('userId');
      const data = await getUserById(userId);
      
      setUserData({
        ...data,
        nome: data.nome || '', 
        bio: data.bio || '',
        email: data.email || '', 
        senha: '', 
        image: data.image ? data.image : null, 
        enderecos: {
          logradouro: data.enderecos?.logradouro || '',
          numero: data.enderecos?.numero || '',
          bairro: data.enderecos?.bairro || '',
          complemento: data.enderecos?.complemento || '',
          cep: data.enderecos?.cep || '',
          municipio: data.enderecos?.municipio || '',
          uf: data.enderecos?.uf || ''
        },
        telefones: Array.isArray(data.telefones) && data.telefones.length > 0 ? data.telefones : [{ contato: '' }]
      });
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name.includes('enderecos.')) {
      setUserData({
        ...userData,
        enderecos: {
          ...userData.enderecos,
          [name.split('.')[1]]: value || ''
        }
      });
    } else if (name === 'telefones') {
      setUserData({
        ...userData,
        telefones: [{ contato: value || '' }]
      });
    } else if (name === 'image') {
      setUserData({ ...userData, image: files[0] || null });
    } else {
      setUserData({ ...userData, [name]: value || '' });
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('nome', userData.nome);
    formData.append('bio', userData.bio);
    formData.append('email', userData.email);
    formData.append('senha', userData.senha);
  
    if (userData.image) {
      formData.append('image', userData.image);
    }
  
    formData.append('enderecos[logradouro]', userData.enderecos.logradouro);
    formData.append('enderecos[numero]', userData.enderecos.numero);
    formData.append('enderecos[bairro]', userData.enderecos.bairro);
    formData.append('enderecos[complemento]', userData.enderecos.complemento);
    formData.append('enderecos[cep]', userData.enderecos.cep);
    formData.append('enderecos[municipio]', userData.enderecos.municipio);
    formData.append('enderecos[uf]', userData.enderecos.uf);
    formData.append('telefones[0][contato]', userData.telefones[0]?.contato || '');

    try {
      const userId = getCookie('userId');
      await updateUser(userId, formData);
      setShowModal(true); 
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error.response ? error.response.data : error.message);
      alert('Erro ao atualizar usuário.');
    }
  };

  
  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/home'); 
  };

  
  const handleCancel = () => {
    navigate('/home'); 
  };

  return (
    <>
      <Navbar />
      <ProfileContainer>
        <ProfileForm>
          <ProfileImage>
            <img 
              src={userData.image ? (typeof userData.image === 'string' ? userData.image : URL.createObjectURL(userData.image)) : defaultProfileImg} 
              alt="Profile" 
            />
            <div className="camera-icon-wrapper">
              <label htmlFor="upload-image">
                <img src={cameraImg} alt="Upload" className="camera-icon" />
              </label>
              <input id="upload-image" type="file" name="image" onChange={handleChange} accept="image/*" />
            </div>
          </ProfileImage>

          <InputGroup>
            <LabelStyled>Nome</LabelStyled>
            <InputField placeholder="Nome" name="nome" value={userData.nome} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <LabelStyled>Bio</LabelStyled>
            <InputField placeholder="Bio" name="bio" value={userData.bio} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <LabelStyled>Email</LabelStyled>
            <InputField placeholder="Email" name="email" value={userData.email} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <LabelStyled>Senha</LabelStyled>
            <InputField placeholder="Senha" name="senha" type="password" value={userData.senha} onChange={handleChange} />
          </InputGroup>

          <DoubleInputGroup>
            <div>
              <LabelStyled>CEP</LabelStyled>
              <InputField placeholder="CEP" name="enderecos.cep" value={userData.enderecos.cep} onChange={handleChange} />
            </div>
            <div>
              <LabelStyled>Número</LabelStyled>
              <InputField placeholder="Número" name="enderecos.numero" value={userData.enderecos.numero} onChange={handleChange} />
            </div>
          </DoubleInputGroup>

          <InputGroup>
            <LabelStyled>Rua</LabelStyled>
            <InputField placeholder="Rua" name="enderecos.logradouro" value={userData.enderecos.logradouro} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <LabelStyled>Bairro</LabelStyled>
            <InputField placeholder="Bairro" name="enderecos.bairro" value={userData.enderecos.bairro} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <LabelStyled>Complemento</LabelStyled>
            <InputField placeholder="Complemento" name="enderecos.complemento" value={userData.enderecos.complemento} onChange={handleChange} />
          </InputGroup>

          <DoubleInputGroup>
            <div>
              <LabelStyled>Município</LabelStyled>
              <InputField placeholder="Município" name="enderecos.municipio" value={userData.enderecos.municipio} onChange={handleChange} />
            </div>
            <div>
              <LabelStyled>UF</LabelStyled>
              <InputField placeholder="UF" name="enderecos.uf" value={userData.enderecos.uf} onChange={handleChange} />
            </div>
          </DoubleInputGroup>

          <InputGroup>
            <LabelStyled>Telefone</LabelStyled>
            <InputField placeholder="Telefone" name="telefones" value={userData.telefones[0]?.contato || ''} onChange={handleChange} />
          </InputGroup>

          <SaveButton onClick={handleUpdate}>Salvar</SaveButton>
          <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
        </ProfileForm>
      </ProfileContainer>
      <Footer />
      
      {showModal && (
        <UpdateProfileModal 
          onConfirm={handleModalConfirm}  
          onCancel={handleModalConfirm}  
        />
      )}
    </>
  );
};

export default EditProfilePage;



