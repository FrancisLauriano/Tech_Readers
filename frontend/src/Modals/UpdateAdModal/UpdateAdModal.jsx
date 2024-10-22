import React from 'react';
import { ModalContainer, ModalContent, Icon, Message, ButtonGroup, StyledButton } from './UpdateAdModal.styles';
import successIcon from '../../assets/success-icon.svg'; 

const UpdateAdModal = ({ onConfirm }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <Icon>
          <img src={successIcon} alt="Sucesso" />
        </Icon>
        <Message>Anúncio atualizado com sucesso</Message>
        <ButtonGroup>
          <StyledButton onClick={onConfirm}>OK</StyledButton> 
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default UpdateAdModal;

