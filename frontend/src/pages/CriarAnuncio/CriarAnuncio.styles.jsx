import styled from 'styled-components';
import Button from '../../components/Button/Button';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* 100% da largura da tela */
  min-height: 100vh; /* 100% da altura da tela */
  background-color: #ffffff; /* Fundo da página em branco */
  overflow-x: hidden; /* Remove a rolagem horizontal */
  padding: 20px; /* Adiciona padding para não colar nas bordas */
  padding-top: 80px; /* Adiciona espaço para o Navbar fixo */
  padding-bottom: 60px; /* Adiciona espaço para o Footer fixo */
  box-sizing: border-box; /* Inclui padding e borda no cálculo da largura total */
`;

export const FormContainer = styled.div`
  background-color: #eeeeee; /* Fundo do formulário em cinza claro */
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #d9d9d9; /* Adiciona borda ao formulário */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 650px; /* Reduz a largura máxima do formulário */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os elementos dentro do formulário */
  gap: 15px;
  margin: 20px 0; /* Espaço entre a navbar e o formulário */
`;

export const InputGroup = styled.div`
  width: 90%; /* Ajusta a largura dos inputs para serem mais largos */
  display: flex;
  flex-direction: column; /* Mantém os labels e inputs organizados verticalmente */
  gap: 5px; /* Espaço entre o label e o input */
`;

export const LabelStyled = styled.label`
  font-size: 14px;
  color: #303030;
  align-self: flex-start;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Alinha o textarea e o upload de imagem no topo verticalmente */
  gap: 15px; /* Espaço entre o campo de descrição e o botão de upload */
  width: 90%; /* Ajusta a largura para centralizar e ser mais larga */
`;

export const TextAreaStyled = styled.textarea`
  flex: 1; /* Ocupa a largura disponível */
  min-height: 320px; /* Altura ajustada para ser a mesma do quadrado de upload */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none; /* Desabilita o redimensionamento pelo usuário */
  font-size: 14px;
  color: #333;
  background-color: #ffffff;
  box-sizing: border-box; /* Garante que o padding seja considerado na altura total */

  &::placeholder {
    color: #8b8b8b;
  }
`;

export const ImageUploadButton = styled.label`
  flex: 1; /* Ocupa a largura disponível */
  min-height: 320px; /* Altura ajustada para ser a mesma do TextArea */
  margin-top: 18px; /* Ajuste para compensar a altura do LabelStyled acima do TextArea */
  background-color: #d9d9d9;
  color: #8b8b8b;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box; /* Garante que o padding seja considerado na altura total */

  input[type="file"] {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra todo o quadrado */
    border-radius: 4px;
  }

  span {
    font-size: 24px;
    color: #8b8b8b;
  }

  &:hover {
    background-color: #c9c9c9;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: #495057;
  color: #ffffff;
  width: 90%; /* Aumenta a largura do botão */
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #343a40;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #ffffff;
  color: #5a645f;
  width: 90%; /* Aumenta a largura do botão */
  padding: 10px;
  border: 1px solid #5a645f;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #e8e8e8;
  }
`;








