import React from 'react';
import Button from '../../components/Button/Button';
import { ModalContainer, ModalContent, Icon, Message, ButtonGroup, StyledButton } from './DeleteProfileSuccessModal.styles';
import successIcon from '../../assets/success-icon.svg'; 

const DeleteProfileSuccessModal = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <Icon>
          <img src={successIcon} alt="Sucesso" />
        </Icon>
        <Message>Perfil removido com sucesso</Message>
        <ButtonGroup>
          <StyledButton onClick={onClose}>OK</StyledButton>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default DeleteProfileSuccessModal;







