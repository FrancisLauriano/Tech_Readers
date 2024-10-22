import React from "react";
import NavbarLanding from "../../components/NavbarLanding/NavbarLanding";
import Footer from "../../components/Footer/Footer";
import * as S from "./LandingPage.styles";
import { DivColumn, DivRow } from "../../AppStyle";
import ReadingCat from "../../assets/book.svg";
import LandingPageHeader from "/src/assets/Landing-page.svg";
import GatoUm from "../../assets/bell.svg";
import GatoDois from "../../assets/Chat.svg";
import GatoTres from "../../assets/gifts.svg";
import ProfileCard from "../../components/Card/ProfileCard";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <S.Body>
      {/* Navbar */}
      <NavbarLanding />

      {/* About Section */}
      <S.About id="About">
        <S.ImagemHeader
          src={LandingPageHeader}
          alt="imagem de livros em um notebook"
        />
        <S.Título>TROQUE LIVROS COMPARTILHE HISTÓRIAS</S.Título>
        <S.ParagraphAbout>
          Bem-vindo ao Tech Reader, a plataforma onde o amor pelos livros ganha
          vida! Somos um ponto de encontro para leitores apaixonados que
          acreditam no poder da partilha. Aqui, você pode trocar seus livros
          favoritos, descobrir novas leituras e fazer parte de uma comunidade
          que valoriza o conhecimento e a sustentabilidade. Nosso objetivo é
          facilitar a circulação de livros entre leitores, permitindo que
          histórias continuem a inspirar novas mentes. Se você tem livros
          parados na estante ou está em busca de uma nova aventura literária,
          aqui é o lugar ideal para você.
          <br />
          <br />
          Junte-se a nós e ajude a criar um mundo onde todos têm acesso à leitura e onde cada livro encontra um novo lar!
        </S.ParagraphAbout>
      </S.About>

      {/* Features Section */}
      <S.FeaturesSection id="Features">
        <S.CardLandingPage>
          <S.CardImage src={GatoUm} alt="Anuncie" />
          <S.CardText>
            <S.Título>ANUNCIE</S.Título>
            <p>
                Aqui você pode anunciar seus livros de forma rápida e fácil.
                Conecte-se com outros leitores, troque histórias e descubra
                novas aventuras literárias. Anunciando seu livro você valoriza
                a leitura e a troca de conhecimentos!
            </p>
          </S.CardText>
        </S.CardLandingPage>

        <S.CardLandingPage>
          <S.CardText>
            <S.Título>CONVERSE</S.Título>
            <p>
                No Tech Readers, você não apenas troca livros, mas também faz
                novas conexões. Nosso site oferece um espaço para chat, onde
                você pode se comunicar diretamente com outros leitores que
                estão anunciando. Dessa forma, a troca de informações se torna
                mais fluida e a comunidade fica ainda mais rica e envolvente!
            </p>
          </S.CardText>
          <S.CardImage src={GatoDois} alt="Converse" />
        </S.CardLandingPage>

        <S.CardLandingPage>
          <S.CardImage src={GatoTres} alt="Troque" />
          <S.CardText>
            <S.Título>TROQUE</S.Título>
            <p>
                A troca de livros vai além de um simples gesto, é uma
                experiência de descoberta e conexão. Encontre novas leituras
                ao compartilhar os livros que já leu, dando-lhes a chance de
                inspirar outros. Com nosso sistema de troca, você renova sua
                estante e, ao mesmo tempo, contribui para uma comunidade
                literária vibrante e em constante crescimento!
            </p>
          </S.CardText>
        </S.CardLandingPage>
      </S.FeaturesSection>

      {/* Reviews Section */}
      <S.SectionAvaliacoes id="Avaliacoes">
        <DivColumn>
          <DivRow>
            <ProfileCard style={S.customStyleUm} name="" photoUrl="../../assets/ligeirinho.jpg" />
            <ProfileCard style={S.customStyleDois} name="" photoUrl="../../assets/ligeirinho.jpg" />
          </DivRow>
          <S.CardAvaliacoes>
            <S.CardText>
              Acabei de descobrir o Tech Reader e estou completamente encantado! Se você é apaixonado por livros este site é para você.
            </S.CardText>
          </S.CardAvaliacoes>
        </DivColumn>
        <DivColumn>
          <DivRow>
            <ProfileCard style={S.customStyleUm} name="" photoUrl="../../assets/ligeirinho.jpg" />
            <ProfileCard style={S.customStyleDois} name="" photoUrl="../../assets/ligeirinho.jpg" />
          </DivRow>
          <S.CardAvaliacoes>
            <S.CardText>
              Se você é um amante de livros, não pode deixar de conhecer o Tech Reader. Este site é uma verdadeira joia para quem adora trocar e explorar novas leituras.
            </S.CardText>
          </S.CardAvaliacoes>
        </DivColumn>
      </S.SectionAvaliacoes>

      {/* Subscribe Section */}
      <section id="subscribe">
        <DivRow style={{ alignItems: "flex-end", gap: "40px" }}>
          <S.ImagemSubscribe src={ReadingCat} alt="Entre na comunidade" />
          <DivColumn>
            <S.CallForAction>Entre na comunidade</S.CallForAction>
            <S.SubscribeButton onClick={handleSubscribeClick}>LEIA!</S.SubscribeButton>
          </DivColumn>
        </DivRow>
      </section>

      {/* Footer */}
      <Footer />
    </S.Body>
  );
};

export default LandingPage;









