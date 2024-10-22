import React from 'react';
import { ModalContainer, ModalContent, Icon, Message, ButtonGroup, StyledButton } from './UpdateProfileModal.styles';
import successIcon from '../../assets/success-icon.svg'; 

const UpdateProfileModal = ({ onConfirm }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <Icon>
          <img src={successIcon} alt="Sucesso" />
        </Icon>
        <Message>Perfil atualizado com sucesso</Message>
        <ButtonGroup>
          <StyledButton onClick={onConfirm}>OK</StyledButton> 
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default UpdateProfileModal;

