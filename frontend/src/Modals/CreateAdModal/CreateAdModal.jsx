import React from 'react';
import { ModalContainer, ModalContent, Icon, Message, ButtonGroup, StyledButton } from './CreateAdModal.styles';
import successIcon from '../../assets/success-icon.svg'; // Caminho para o ícone de sucesso

const CreateAdModal = ({ onConfirm }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <Icon>
          <img src={successIcon} alt="Sucesso" />
        </Icon>
        <Message>Anúncio criado com sucesso</Message>
        <ButtonGroup>
          <StyledButton onClick={onConfirm}>OK</StyledButton> 
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default CreateAdModal;
