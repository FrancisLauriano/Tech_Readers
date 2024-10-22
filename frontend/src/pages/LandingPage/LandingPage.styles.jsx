import styled from "styled-components";

// Corpo principal da Landing Page
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  transition: all 0.5s;
  background: rgb(254, 252, 252);
  background: linear-gradient(
    0deg,
    rgba(254, 252, 252, 1) 0%,
    rgba(178, 214, 183, 1) 70%,
    rgba(178, 214, 183, 1) 100%
  );
`;

// Header da Landing Page
export const ImagemHeader = styled.img`
  width: 1000px;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
`;

// Seção "Sobre"
export const About = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6rem;
  text-align: center;
`;

export const Título = styled.h2`
  font-size: 3rem;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.VerdeMedioUm};
  font-family: ${(props) => props.theme.fonts.Segunda};
`;

export const ParagraphAbout = styled.p`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  max-width: 1010px;
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.fonts.Principal};
`;

// Seção "Features"
export const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  width: 100%;
  gap: 20px; 
  margin: 40px 0; 
`;

// Cartões de Recursos na Seção "Features"
export const CardLandingPage = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center; 
  justify-content: center;
  margin: 20px 0px;
  padding: 2rem 3rem;
  width: 80%;
  max-width: 1010px;
  height: auto;
  border-radius: 10px;
  gap: 2rem;
  transition: all 0.5s;
  background-color: ${(props) => props.theme.colors.Branco};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
  &:hover {
    transform: scale(1.05);
  }
`;

// Estilo para as imagens dentro dos cards
export const CardImage = styled.img`
  width: 100px; 
  height: auto;
  max-width: 100%;
  object-fit: contain;
  margin-right: 1rem; 
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.colors.Preto};
  font-family: ${(props) => props.theme.fonts.Principal};
`;

// Seção de Avaliações
export const SectionAvaliacoes = styled.section`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-bottom: 8rem;
  padding-top: 4rem;
  border-top: 1px solid ${(props) => props.theme.colors.CinzaQuatro};
  border-bottom: 1px solid ${(props) => props.theme.colors.CinzaQuatro};
  justify-content: center;
`;

export const CardAvaliacoes = styled.div`
  background-color: ${(props) => props.theme.colors.CinzaUm};
  border-radius: 10px;
  height: 100px;
  width: 400px;
  padding: 4rem 3rem 1rem 3rem;
  text-align: center;
`;

// Estilos personalizados para o ProfileCard
export const customStyleUm = {
  transform: "translateY(40px) translateX(155px)",
  opacity: 0.8,
};
export const customStyleDois = {
  transform: "translateY(40px) translateX(135px)",
};

// Seção "Inscreva-se"
export const ImagemSubscribe = styled.img`
  width: 25rem;
`;

export const SubscribeButton = styled.button`
  background-color: ${(props) => props.theme.colors.VerdeEscuro};
  color: ${(props) => props.theme.colors.Branco};
  font-size: 60px;
  height: 7rem;
  border-radius: 10px;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.Segunda};
  width: 320px;
  border: none;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 3px 10px 0px;
    background-color: ${(props) => props.theme.colors.VerdeMedioUm};
    transform: scale(1.05);
  }
`;

export const CallForAction = styled.p`
  font-family: ${(props) => props.theme.fonts.Terceira};
  font-size: 40px;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.VerdeMedioUm};
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;




