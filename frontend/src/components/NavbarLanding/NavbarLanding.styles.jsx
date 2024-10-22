import styled from "styled-components";

export const Navigation = styled.div`
  background-color: ${(props) => props.theme.colors.BegeUm};
  color: ${(props) => props.theme.colors.VerdeEscuro};
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: ${(props) => props.theme.fonts.Principal};
  padding-top: 0.3rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

export const ImagemLogo = styled.img`
  width: 10rem;
`;

export const ListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-left: 20rem;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.VerdeEscuro};
  font-size: 1.1rem;
  text-decoration: none !important;
`;

export const LinkNavBar = styled.li`
  margin: 0;
  padding: 0rem 0.4rem;
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.Principal};
  align-items: center;
`;

export const Subscribe = styled.button`
  background-color: ${(props) => props.theme.colors.VerdeMedioUm};
  color: ${(props) => props.theme.colors.Branco};
  font-size: 1.2rem;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
    color: ${(props) => props.theme.colors.VerdeEscuro};
  }
`;

export const LoginLandingPage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) => props.theme.colors.CinzaUm};
  color: ${(props) => props.theme.colors.VerdeMedioUm};
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
    background-color: ${(props) => props.theme.colors.Branco};
    color: ${(props) => props.theme.colors.VerdeEscuro};
  }
`;




