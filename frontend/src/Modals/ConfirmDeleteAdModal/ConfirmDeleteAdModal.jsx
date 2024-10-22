import React from 'react';
import Button from '../../components/Button/Button';
import { deleteExchange } from '../../services/exchangeService';
import { ModalContainer, ModalContent, Icon, Message, ButtonGroup } from './ConfirmDeleteAdModal.styles';
import trashIcon from '../../assets/trash-icon.svg'; 

const ConfirmDeleteAdModal = ({ anuncioId, onConfirm, onCancel }) => {
  const handleDeleteAd = async () => {
    
    await deleteExchange(anuncioId); // Tenta deletar o anúncio pelo ID
    onConfirm(); // Mostra o modal de sucesso se a exclusão for bem-sucedida
    
  };

  return (
    <ModalContainer>
      <ModalContent>
        <Icon>
          <img src={trashIcon} alt="Lixeira" />
        </Icon>
        <Message>Tem certeza que deseja remover o anúncio?</Message>
        <ButtonGroup>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button onClick={handleDeleteAd}>Remover</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default ConfirmDeleteAdModal;




