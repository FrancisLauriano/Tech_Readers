import React, { useState, useEffect } from 'react';
import { MenuContainer, MenuButton, MenuList, MenuItem } from './DropdownMenu.styles';
import defaultProfileImg from '../../assets/profile.svg'; // Imagem padrão para perfil
import { getUserById, logoutUser } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/Cookie'; // Função para obter cookie
import ConfirmDeleteProfileModal from '../../Modals/ConfirmDeleteProfileModal/ConfirmDeleteProfileModal';
import DeleteProfileSuccessModal from '../../Modals/DeleteProfileSuccessModal/DeleteProfileSuccessModal';

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState(defaultProfileImg);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // recupera o ID do usuário logado dos cookies
  const loggedInUserId = getCookie('userId');

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (loggedInUserId) {
        try {
          const user = await getUserById(loggedInUserId);
          setUserProfileImage(user.image || defaultProfileImg); // usa a imagem do usuário ou a imagem padrão
        } catch (error) {
          console.error('Erro ao buscar o usuário logado:', error);
        }
      }
    };

    fetchUserProfile();
  }, [loggedInUserId]);

  const handleClick = (path) => {
    navigate(path);
  };

  // função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/'); // redireciona para a página inicial após excluir o perfil
  };

  // Função para logout e redirecionamento
  const handleLogout = () => {
    logoutUser(); // Realiza o logout
    navigate('/'); // Redireciona para a página de landing
  };

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}> 
        <img
          src={userProfileImage}
          alt="Perfil"
        />
      </MenuButton>
      <MenuList $isOpen={isOpen}>
        <MenuItem onClick={() => handleClick("/criar-anuncio")}>
          Criar Anúncio
        </MenuItem>
        <MenuItem onClick={() => handleClick("/my-profile")}>
          Meu perfil
        </MenuItem>
        <MenuItem onClick={() => handleClick("/edit-profile")}>
          Editar perfil
        </MenuItem>
        {/* Excluir perfil */}
        <MenuItem onClick={() => setShowConfirmDeleteModal(true)}>
          Excluir perfil
        </MenuItem>
        <MenuItem onClick={() => handleClick("/notificacoes")}>
          Notificações
        </MenuItem>
        {/* Sair: sair da conta do usuario - fazer logout e ir para landing page */}
        <MenuItem onClick={handleLogout}> 
          Sair
        </MenuItem>
      </MenuList>

      {/* Modais */}
      {showConfirmDeleteModal && (
        <ConfirmDeleteProfileModal 
          userId={loggedInUserId} // Passa o ID do usuário
          onLogout={handleLogout} // Passa a função de logout
          onConfirm={() => setShowSuccessModal(true)} // Define o que acontece após a exclusão
          onCancel={() => setShowConfirmDeleteModal(false)} 
        />
      )}
      {showSuccessModal && (
        <DeleteProfileSuccessModal onClose={handleCloseSuccessModal} />
      )}
    </MenuContainer>
  );
};

export default DropdownMenu;


