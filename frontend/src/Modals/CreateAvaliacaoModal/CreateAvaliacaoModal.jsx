import React from 'react';
import { ModalContainer, ModalContent, Icon, Message, ButtonGroup, StyledButton } from './CreateAvaliacaoModal.styles';
import successIcon from '../../assets/success-icon.svg'; 

const CreateAvaliacaoModal = ({ onConfirm }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <Icon>
          <img src={successIcon} alt="Sucesso" />
        </Icon>
        <Message>Avaliação enviada com sucesso!</Message>
        <ButtonGroup>
          <StyledButton onClick={onConfirm}>OK</StyledButton> 
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default CreateAvaliacaoModal;

