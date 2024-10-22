import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BegeUm};
  padding: 15px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 40px;
  object-fit: contain;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Branco};
  padding: 8px 15px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.CinzaTres};
`;

export const SearchIcon = styled.img`
  height: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  border: none;
  outline: none;
  width: 300px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  color: #686868;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.VerdeEscuro};
  }

  img {
    height: 16px;
    margin-right: 8px;
  }
`;

export const ChatNotificationBadge = styled.span`
  position: absolute;
  top: -8px;
  left: -12px; /* posicionar à esquerda */
  background-color: red;
  color: white;
  border-radius: 60%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  min-width: 10px;
  min-height: 10px;
  text-align: center;
`;

// Novos estilos para o resultado da pesquisa
export const ResultsContainer = styled.div`
  padding: 20px;
  margin-top: 80px; /* Ajuste de margem para compensar o navbar fixo */
`;

export const ResultsTitle = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.Preto};
  text-align: left;
  padding-left: 10px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Limita a três colunas */
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Ajusta para duas colunas em telas menores */
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Ajusta para uma coluna em telas muito pequenas */
  }
`;





