import React from "react";
import * as S from "./NavbarLanding.styles";
import Logomarca from "/src/assets/TECH-READER-copiar.svg";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

const NavbarLanding = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <S.Navigation>
      <S.ImagemLogo src={Logomarca} alt="LOGO" />
      <S.ListStyle>
        <S.LinkNavBar>
          <S.Link href="#About">About</S.Link>
        </S.LinkNavBar>
        <S.LinkNavBar>
          <S.Link href="#Features">Features</S.Link>
        </S.LinkNavBar>
        <S.LinkNavBar>
          <S.Link href="#Avaliacoes">Avaliações</S.Link>
        </S.LinkNavBar>
        <S.LinkNavBar>
          <S.Subscribe onClick={handleSubscribeClick}>
            Inscreva-se
          </S.Subscribe>
        </S.LinkNavBar>
        <S.LinkNavBar>
          <S.LoginLandingPage onClick={handleLogin}>
            Login <LoginIcon />
          </S.LoginLandingPage>
        </S.LinkNavBar>
      </S.ListStyle>
    </S.Navigation>
  );
};

export default NavbarLanding;




