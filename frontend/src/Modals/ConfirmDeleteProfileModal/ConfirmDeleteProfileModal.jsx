import React from 'react';
import Button from '../../components/Button/Button';
import { deleteUser, logoutUser } from '../../services/userService'; 
import { getCookie } from '../../utils/Cookie'; 
import { ModalContainer, ModalContent, Icon, Message, ButtonGroup } from './ConfirmDeleteProfileModal.styles';
import trashIcon from '../../assets/trash-icon.svg'; 

const ConfirmDeleteProfileModal = ({ onConfirm, onCancel }) => {

  const handleDeleteProfile = async () => {
    
    // Recuperação do userId e do token para dentro da função de exclusão
    const userId = getCookie('userId');

    await deleteUser(userId);
    logoutUser(); // Realiza o logout após a exclusão
    onConfirm(); // Notifica o componente pai sobre o sucesso

  };

  return (
    <ModalContainer>
      <ModalContent>
        <Icon>
          <img src={trashIcon} alt="Lixeira" />
        </Icon>
        <Message>Tem certeza que deseja remover o perfil?</Message>
        <ButtonGroup>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button onClick={handleDeleteProfile}>Remover</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default ConfirmDeleteProfileModal;










