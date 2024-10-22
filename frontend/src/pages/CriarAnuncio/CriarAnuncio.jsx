import React, { useState, useEffect } from 'react';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { createExchange } from '../../services/exchangeService';
import { 
  PageContainer,
  FormContainer,
  InputGroup,
  ImageUploadButton,
  SubmitButton,
  CancelButton,
  DescriptionContainer,
  TextAreaStyled,
  LabelStyled
} from './CriarAnuncio.styles';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { getCookie } from '../../utils/Cookie';
import CreateAdModal  from '../../Modals/CreateAdModal/CreateAdModal';
import { useNavigate} from 'react-router-dom';

const CriarAnuncio = () => {
  const [exchangeData, setExchangeData] = useState({
    titulo: '',
    titulo_livro_oferecido: '',
    autor_livro_oferecido: '',
    genero_livro_oferecido: '',
    titulo_livro_solicitado: '',
    autor_livro_solicitado: '',
    genero_livro_solicitado: '',
    descricao: '',
    image: null,
    anunciante_id: '', 
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  
  useEffect(() => {
    const userId = getCookie('userId');
    setExchangeData((prevData) => ({
      ...prevData,
      anunciante_id: userId,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setExchangeData({ ...exchangeData, image: file });
      if (file) {
        setImagePreview(URL.createObjectURL(file));
      } else {
        setImagePreview(null);
      }
    } else {
      setExchangeData({ ...exchangeData, [name]: value });
    }
  };

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append('titulo', exchangeData.titulo);
    formData.append('titulo_livro_oferecido', exchangeData.titulo_livro_oferecido);
    formData.append('autor_livro_oferecido', exchangeData.autor_livro_oferecido);
    formData.append('genero_livro_oferecido', exchangeData.genero_livro_oferecido);
    formData.append('titulo_livro_solicitado', exchangeData.titulo_livro_solicitado);
    formData.append('autor_livro_solicitado', exchangeData.autor_livro_solicitado);
    formData.append('genero_livro_solicitado', exchangeData.genero_livro_solicitado);
    formData.append('descricao', exchangeData.descricao);
    formData.append('anunciante_id', exchangeData.anunciante_id); 
    if (exchangeData.image) {
      formData.append('image', exchangeData.image);
    }

    try {
      await createExchange(formData);
      setShowModal(true);
    } catch (error) {
      alert('Erro ao criar anúncio.');
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
      <PageContainer>
        <FormContainer>
          <InputGroup>
            <LabelStyled>Título do Anúncio</LabelStyled>
            <InputField placeholder="Título do Anúncio" name="titulo" value={exchangeData.titulo} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <LabelStyled>Título do Livro Oferecido</LabelStyled>
            <InputField placeholder="Título do Livro Oferecido" name="titulo_livro_oferecido" value={exchangeData.titulo_livro_oferecido} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <LabelStyled>Autor do Livro Oferecido</LabelStyled>
            <InputField placeholder="Autor do Livro Oferecido" name="autor_livro_oferecido" value={exchangeData.autor_livro_oferecido} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <LabelStyled>Gênero do Livro Oferecido</LabelStyled>
            <InputField placeholder="Gênero do Livro Oferecido" name="genero_livro_oferecido" value={exchangeData.genero_livro_oferecido} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <LabelStyled>Título do Livro Solicitado</LabelStyled>
            <InputField placeholder="Título do Livro Solicitado" name="titulo_livro_solicitado" value={exchangeData.titulo_livro_solicitado} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <LabelStyled>Autor do Livro Solicitado</LabelStyled>
            <InputField placeholder="Autor do Livro Solicitado" name="autor_livro_solicitado" value={exchangeData.autor_livro_solicitado} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <LabelStyled>Gênero do Livro Solicitado</LabelStyled>
            <InputField placeholder="Gênero do Livro Solicitado" name="genero_livro_solicitado" value={exchangeData.genero_livro_solicitado} onChange={handleChange} />
          </InputGroup>
          <DescriptionContainer>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <LabelStyled>Descrição</LabelStyled>
              <TextAreaStyled placeholder="Descrição" name="descricao" value={exchangeData.descricao} onChange={handleChange} />
            </div>
            <ImageUploadButton>
              <input type="file" name="image" onChange={handleChange} accept="image/*" />
              {imagePreview ? <img src={imagePreview} alt="Pré-visualização" /> : <span>+</span>}
            </ImageUploadButton>
          </DescriptionContainer>
          <SubmitButton onClick={handleCreate}>Cadastrar</SubmitButton>
          <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
        </FormContainer>
      </PageContainer>
      <Footer />
     
      {showModal && (
        <CreateAdModal 
          onConfirm={handleModalConfirm}  
          onCancel={handleModalConfirm}  
        />
      )}
    </>
  );
};

export default CriarAnuncio;








