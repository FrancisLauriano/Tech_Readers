import React from 'react';
import Button from '../../components/Button/Button';
import { ModalContainer, ModalContent, Icon, Message, ButtonGroup, StyledButton } from './DeleteAdSuccessModal.styles';
import successIcon from '../../assets/success-icon.svg'; // Caminho para o ícone de sucesso

const DeleteAdSuccessModal = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <Icon>
          <img src={successIcon} alt="Sucesso" />
        </Icon>
        <Message>Anúncio removido com sucesso</Message>
        <ButtonGroup>
          <StyledButton onClick={onClose}>OK</StyledButton>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteAdSuccessModal;


