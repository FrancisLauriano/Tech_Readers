import React, { useState, useEffect } from 'react';
import InputField from '../../components/InputField/InputField';
import TextArea from '../../components/TextArea/TextArea';
import { getExchangeById, updateExchange } from '../../services/exchangeService';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
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
} from '../CriarAnuncio/CriarAnuncio.styles';
import UpdateAdModal from '../../Modals/UpdateAdModal/UpdateAdModal'; // modal atualização realizada com sucesso

const AtualizarAnuncio = () => {
  const { id } = useParams(); 
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
  const [showModal, setShowModal] = useState(false); // estado para controlar a exibição do modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExchangeData = async () => {
      try {
        const data = await getExchangeById(id);
        setExchangeData(data);
        if (data.image) {
          setImagePreview(data.image); // Se houver imagem, define a pré-visualização
        }
      } catch (error) {
        console.error('Erro ao buscar dados do anúncio:', error);
      }
    };

    fetchExchangeData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setExchangeData({ ...exchangeData, image: file || null});
      if (file) {
        setImagePreview(URL.createObjectURL(file));
      } else {
        setImagePreview(null);
      }
    } else {
      setExchangeData({ ...exchangeData, [name]: value || ''});
    }
  };

  const handleUpdate = async () => {
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

    console.log([...formData.entries()]); 

    try {
      await updateExchange(id, formData);
      setShowModal(true); //  modal após atualização bem-sucedida
    } catch (error) {
      alert('Erro ao atualizar anúncio.');
    }
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/home'); // redireciona para a pag inicial após a confirmação no modal
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
          <SubmitButton onClick={handleUpdate}>Atualizar</SubmitButton>
          <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
        </FormContainer>
      </PageContainer>
      <Footer />
      

      
      {showModal && (
        <UpdateAdModal 
          onConfirm={handleModalConfirm}  
          onCancel={handleModalConfirm}  
        />
      )}
    </>
  );
};

export default AtualizarAnuncio;




