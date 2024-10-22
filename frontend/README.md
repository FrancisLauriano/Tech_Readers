<h1>Conectando Leitores</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=18.2.0&color=61dafb&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=HTML&message=5&color=e34f26&style=for-the-badge&logo=html5"/>
  <img src="https://img.shields.io/static/v1?label=CSS&message=3&color=1572b6&style=for-the-badge&logo=css3"/>
  <img src="http://img.shields.io/static/v1?label=javascript&message=ES6&color=f7df1e&style=for-the-badge&logo=javascript"/>
  <img src="http://img.shields.io/static/v1?label=Axios&message=1.7.5&color=5A29E4&style=for-the-badge&logo=axios"/>
  <img src="https://img.shields.io/static/v1?label=Styled-Components&message=6.1.12&color=DB7093&style=for-the-badge&logo=styledcomponents"/>
  <img src="http://img.shields.io/static/v1?label=Figma&message=16.13.3&color=F24E1E&style=for-the-badge&logo=figma"/>
  <img src="http://img.shields.io/static/v1?label=Git&message=2.45.2&color=f05032&style=for-the-badge&logo=git"/>
  <img src="http://img.shields.io/static/v1?label=GitHub&message=2024&color=181717&style=for-the-badge&logo=github"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido) | :warning: (em desenvolvimento) | :x: (não iniciada)

### Tópicos 


:small_blue_diamond: [Protótipo das Telas](#protótipo-das-telas-art) :heavy_check_mark:


:small_blue_diamond: [Arquitetura do Frontend](#arquitetura-do-frontend-triangular_ruler-straight_ruler) :warning:

:small_blue_diamond: [Instação das depedências](#instação-das-depedências-arrow_down_small) 

:small_blue_diamond: [Executar app](#executar-app-arrow_forward) 


... 

## Protótipo das Telas :art:

- [Figma](https://www.figma.com/design/aGEyPhnpQwSCnvYnHYNIyW/Untitled?node-id=0-1&t=EUUURJpekyeWPhST-0)



## Arquitetura do Frontend :triangular_ruler: :straight_ruler:

```plaintext
Conectando Leitores
|
|    src/
|    │
|    ├── assets/
|    │   └── ... (imagens e outros recursos)
|    │
|    ├── components/
|    │   ├── Button/
|    │   │   ├── Button.jsx
|    │   │   └── Button.styles.jsx
|    │   ├── InputField/
|    │   │   ├── InputField.jsx
|    │   │   └── InputField.styles.jsx
|    │   ├── TextArea/
|    │   │   ├── TextArea.jsx
|    │   │   └── TextArea.styles.jsx
|    │   ├── Card/
|    │   │   ├── CardAnuncios.jsx
|    │   │   ├── CardAnuncios.styles.jsx
|    │   │   ├── CardAvaliacoes.jsx
|    │   │   ├── CardAvaliacoes.styles.jsx
|    │   │   ├── ProfileCard.jsx
|    │   │   └── ProfileCard.styles.jsx
|    │   ├── Navbar/
|    │   │   ├── Navbar.jsx
|    │   │   └── Navbar.styles.jsx
|    │   ├── NavbarLanding/
|    │   │   ├── NavbarLanding.jsx
|    │   │   └── NavbarLanding.styles.jsx
|    │   ├── DropdownMenu/
|    │   │   ├── DropdownMenu.jsx
|    │   │   └── DropdownMenu.styles.jsx
|    │   ├── Footer/
|    │   │   ├── Footer.jsx
|    │   │   └── Footer.styles.jsx
|    │   ├── ReviewStars/
|    │   │   ├── ReviewStars.jsx
|    │   │   └── ReviewStars.styles.jsx
|    │   ├── ChatPreview/
|    │   │   ├── ChatPreview.jsx
|    │   │   └── ChatPreview.styles.jsx
|    │   └── ChatBubble/
|    │       ├── ChatBubble.jsx
|    │       └── ChatBubble.styles.jsx
|    │
|    ├── modals/
|    │   ├── UpdateAdModal/
|    │   │   ├── UpdateAdModal.jsx
|    │   │   └── UpdateAdModal.styles.jsx
|    │   ├── UpdateProfileModal/
|    │   │   ├── UpdateProfileModal.jsx
|    │   │   └── UpdateProfileModal.styles.jsx
|    │   ├── CreateAdModal/
|    │   │   ├── CreateAdModal.jsx
|    │   │   └── CreateAdModal.styles.jsx
|    │   ├── CreateProfileModal/
|    │   │   ├── CreateProfileModal.jsx
|    │   │   └── CreateProfileModal.styles.jsx
|    │   ├── ConfirmDeleteAdModal/
|    │   │   ├── ConfirmDeleteAdModal.jsx
|    │   │   └── ConfirmDeleteAdModal.styles.jsx
|    │   ├── DeleteAdSuccessModal/
|    │   │   ├── DeleteAdSuccessModal.jsx
|    │   │   └── DeleteAdSuccessModal.styles.jsx
|    │   ├── ConfirmDeleteProfileModal/
|    │   │   ├── ConfirmDeleteProfileModal.jsx
|    │   │   └── ConfirmDeleteProfileModal.styles.jsx
|    │   └── DeleteProfileSuccessModal/
|    │       ├── DeleteProfileSuccessModal.jsx
|    │       └── DeleteProfileSuccessModal.styles.jsx  
|    │
|    ├── pages/
|    │   ├── LandingPage/
|    │   │   ├── LandingPage.jsx
|    │   │   └── LandingPage.styles.jsx
|    │   ├── LoginPage/
|    │   │   ├── LoginPage.jsx
|    │   │   └── LoginPage.styles.jsx
|    │   ├── RegisterPage/
|    │   │   ├── RegisterPage.jsx
|    │   │   └── RegisterPage.styles.jsx
|    │   ├── EditeProfilePage/
|    │   │   ├── EditeProfilePage.jsx
|    │   │   └── EditeProfilePage.styles.jsx
|    │   ├── CriarAnuncio/
|    │   │   ├── CriarAnuncio.jsx
|    │   │   └── CriarAnuncio.styles.jsx
|    │   ├── AtualizarAnuncio/
|    │   │   ├── AtualizarAnuncio.jsx
|    │   │   └── AtualizarAnuncio.styles.jsx
|    │   ├── HomePage/
|    │   │   ├── HomePage.jsx
|    │   │   └── HomePage.styles.jsx
|    │   ├── MyProfilePage/
|    │   │   ├── MyProfilePage.jsx
|    │   │   └── MyProfilePage.styles.jsx
|    │   ├── OtherProfilePage/
|    │   │   ├── OtherProfilePage.jsx
|    │   │   └── OtherProfilePage.styles.jsx
|    │   ├── MyAdsPage/
|    │   │   ├── MyAdsPage.jsx
|    │   │   └── MyAdsPage.styles.jsx
|    │   ├── OtherUserAdsPage/
|    │   │   ├── OtherUserAdsPage.jsx
|    │   │   └── OtherUserAdsPage.styles.jsx
|    │   ├── AllChatPage/
|    │   │   ├── AllChatPage.jsx
|    │   │   └── AllChatPage.styles.jsx
|    │   └── ChatPage/
|    │       ├── ChatPage.jsx
|    │       └── ChatPage.styles.jsx
|    |
|    ├── utils/
|    │   └── Cookie.jsx
|    |
|    ├── services/
|    │   ├── api.jsx
|    │   ├── exchangeService.jsx
|    │   ├── messageService.jsx
|    │   ├── reviewService.jsx
|    │   └── userService.jsx
|    |
|    ├── App.jsx
|    ├── GlobalStyle.jsx
|    ├── index.css
|    └── main.jsx
|
└── index.html

```


**Descrição:** :heavy_check_mark:

1. **Diretório Raiz (src/)**
- O diretório src/ é a raiz do código fonte do frontend e contém subdiretórios e arquivos responsáveis pelo funcionamento da aplicação.

2. **Recursos Estáticos (assets/)**
- Descrição: Contém todos os arquivos de mídia e recursos estáticos, como imagens, ícones, fontes, etc.
Exemplo de Conteúdo: Logo da aplicação, ícones para navegação, e imagens de fundo.

3. **Componentes Reutilizáveis (components/)**
- Descrição: Este diretório contém todos os componentes reutilizáveis da aplicação. Cada componente tem seu próprio subdiretório com um arquivo principal (.jsx) e um arquivo de estilo associado (.styles.jsx).

- Button/:
  - Button.jsx: Define o componente de botão reutilizável.
  - Button.styles.jsx: Contém os estilos específicos para o botão usando styled-components.
  
- InputField/:
  - InputField.jsx: Componente para campos de entrada de texto.
  - InputField.styles.jsx: Estilos personalizados para campos de entrada.

- TextArea/:
  - TextArea.jsx: Componente para áreas de texto maiores, como descrições.
  - TextArea.styles.jsx: Estilos específicos para o componente de área de texto.

- Card/:
  - Card.jsx: Um componente de cartão reutilizável para exibir informações.
  - Card.styles.jsx: Estilos para o layout e aparência dos cartões.

- ProfileCard/:
  - ProfileCard.jsx: Componente de cartão específico para exibir informações do perfil do usuário.
  - ProfileCard.styles.jsx: Estilos para o componente ProfileCard.

- Navbar/:
  - Navbar.jsx: Barra de navegação principal da aplicação.
  - Navbar.styles.jsx: Estilos específicos para a barra de navegação.

- NavbarLanding/:
  - NavbarLanding.jsx: Barra de navegação para a página de aterrissagem.
  - NavbarLanding.styles.jsx: Estilos específicos para a NavbarLanding.

- DropdownMenu/:
  - DropdownMenu.jsx: Componente para menus suspensos.
  - DropdownMenu.styles.jsx: Estilos para o menu suspenso.

- Footer/:
  - Footer.jsx: Rodapé da aplicação.
  - Footer.styles.jsx: Estilos para o rodapé.

- ReviewStars/:
  - ReviewStars.jsx: Componente para exibir estrelas de avaliação.
  - ReviewStars.styles.jsx: Estilos para o componente de estrelas de avaliação.

- ChatBubble/:
  - ChatBubble.jsx: Componente para exibir balões de chat.
  - ChatBubble.styles.jsx: Estilos para os balões de chat.

4. **Modais (modals/)**
- Descrição: Contém componentes modais que são usados para várias operações CRUD (Create, Read, Update, Delete) e outras interações críticas.
  
- UpdateAdModal.jsx: Modal para atualizar um anúncio.
- UpdateProfileModal.jsx: Modal para atualizar o perfil do usuário.
- CreateAdModal.jsx: Modal para criar um novo anúncio.
- DeleteAdModal.jsx: Modal para confirmar a exclusão de um anúncio.
- DeleteProfileModal.jsx: Modal para confirmar a exclusão do perfil do usuário.

5. **Páginas Principais (pages/)**
- Descrição: Contém os componentes de página principais da aplicação. Cada página é um diretório com um arquivo principal (.jsx) e um arquivo de estilo associado (.styles.jsx).

- LandingPage/:
  - LandingPage.jsx: Página de aterrissagem com informações iniciais sobre a aplicação.
  - LandingPage.styles.jsx: Estilos para a página de aterrissagem.

- LoginPage/:
  - LoginPage.jsx: Página de login para autenticação do usuário.
  - LoginPage.styles.jsx: Estilos para a página de login.

- RegisterPage/:
  - RegisterPage.jsx: Página de registro para criar uma nova conta de usuário.
  - RegisterPage.styles.jsx: Estilos para a página de registro.

- HomePage/:
  - HomePage.jsx: Página inicial após o login, exibindo todos os anúncios ativos.
  - HomePage.styles.jsx: Estilos para a página inicial.

- MyProfilePage/:
  - MyProfilePage.jsx: Página de perfil do usuário.
  - MyProfilePage.styles.jsx: Estilos para a página de perfil do usuário.

- OtherProfilePage/:
  - OtherProfilePage.jsx: Página de perfil de outros usuários.
  - OtherProfilePage.styles.jsx: Estilos para a página de perfil de outros usuários.

- ChatPage/:
  - ChatPage.jsx: Página de chat para comunicação entre usuários.
  - ChatPage.styles.jsx: Estilos para a página de chat.

6. **Utilitários de Funções Auxiliares(utils/)**
- Descrição: Utilitários de funções auxiliares.
  
- Cookie.jsx: Funções para manipulação de cookies e autenticação de sessão.

7. **Serviços (services/)**
- Descrição: Contém funções para interagir com a API backend. Essas funções fazem chamadas HTTP para endpoints específicos usando a biblioteca Axios.
  
- api.jsx: Configuração básica do Axios para definir a URL base e os cabeçalhos padrão.
- exchangeService.jsx: Funções para interagir com a API de anúncios (exchanges), como obter, criar, atualizar e deletar anúncios.
- messageService.jsx: Funções para gerenciar mensagens, como enviar mensagens, obter mensagens de um anúncio e marcar mensagens como lidas.
- reviewService.jsx: Funções para criar, obter, atualizar, deletar e curtir avaliações.
- userService.jsx: Funções para gerenciar usuários, incluindo registro, login, atualização e exclusão de perfis.

8. **Arquivos de Configuração e Entrada**
- App.jsx: Componente raiz da aplicação que define as rotas usando React Router. Gerencia a navegação entre diferentes páginas da aplicação.
- GlobalStyle.jsx: Define estilos globais usando styled-components para manter uma aparência consistente em toda a aplicação.
- index.css: Contém estilos globais básicos, como reset de CSS e definições de tipografia.
- main.jsx: Ponto de entrada principal da aplicação React. Renderiza o componente App dentro do ThemeProvider para aplicar temas globais.
- index.html: Arquivo HTML principal que carrega a aplicação React. Contém a div raiz (<div id="root"></div>) onde o React renderiza a aplicação.


## Instação das depedências :arrow_down_small:

```bash
$ npm install
```

## Executar app :arrow_forward:
 
**development:**
```bash
$ npm run dev
```

```bash
Running on http://localhost:5173/
```
...  

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2024 - Conectando Leitores
