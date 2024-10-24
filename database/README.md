<h1>Conectando Leitores</h1> 

<p align="center">
  <img src="http://img.shields.io/static/v1?label=Draw.io&message=24.6.4&color=f08705&style=for-the-badge&logo=diagramsdotnet"/>
  <img src="http://img.shields.io/static/v1?label=Workbench MySQL&message=8.0.38&color=4479a1&style=for-the-badge&logo=mysql&logoColor=f5f5f5"/>
  <img src="http://img.shields.io/static/v1?label=PostgreSQL&message=16&color=4169e1&style=for-the-badge&logo=postgresql&logoColor=f5f5f5"/>
  <img src="http://img.shields.io/static/v1?label=Firebase&message=10.13.0&color=DD2C00&style=for-the-badge&logo=firebase"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluido) | :warning: (em desenvolvimento) | :x: (não iniciada)

### Tópicos 

:small_blue_diamond: [Entidades e Atributos](#entidades-e-atributos-file_folder) :heavy_check_mark:

:small_blue_diamond: [Relacionamentos](#relacionamentos-handshake) :heavy_check_mark:

:small_blue_diamond: [Modelo Lógico - DER](modelo_logico_der) :heavy_check_mark:

:small_blue_diamond: [Modelo Físico - Scrips Create Database](scripts_create_database) :heavy_check_mark:

... 

## Entidades e Atributos :file_folder:

<p align="justify">

**1. Usuarios** :heavy_check_mark:
  - id (PK) VARCHAR (UUID)
  - nome VARCHAR
  - bio VARCHAR
  - email VARCHAR
  - senha (ATENÇÃO: Deverá ser permitido apenas um cadastro por email) VARCHAR
  - telefone (ATENÇÃO: atributo multivalorado) 
  - endereco (logradouro, numero, municipio, estado, CEP) (ATENÇÃO: Atributo composto)
  - data_cadastro TIMESTAMP
  - image VARCHAR
  - **OBS:**
    - email com a cláusula UNIQUE: Restrição que garante que todos os valores na coluna email sejam únicos em toda a tabela.
    - data_cadastro com cláusula DEFAULT CURRENT_TIMESTAMP: Define que por padrão, será preenchida com a data e hora atuais no momento
    em que um novo registro é inserido na tabela.

**2. Anuncios** :heavy_check_mark:
  - id (PK) VARCHAR (UUID)
  - data_criacao TIMESTAMP
  - data_conclusao TIMESTAMP
  - ativo BOOLEAN
  - titulo VARCHAR
  - titulo_livro_oferecido VARCHAR
  - autor_livro_oferecido VARCHAR
  - genero_livro_oferecido VARCHAR
  - titulo_livro_solicitado VARCHAR
  - autor_livro_solicitado VARCHAR
  - genero_livro_oferecido VARCHAR
  - descricao TEXT
  - anunciante_id (FK para Usuarios) VARCHAR (UUID)
  - image VARCHAR
  - **OBS:**
    - data_criacao com cláusula DEFAULT CURRENT_TIMESTAMP: Define que por padrão, será preenchida com a data e hora atuais no momento
    em que um novo registro é inserido na tabela.
   
**3. Avaliacoes** :heavy_check_mark:
  - id (PK) VARCHAR (UUID)
  - data_avaliacao TIMESTAMP
  - nota INT
  - comentario TEXT
  - qtd_like INT
  - usuario_avaliador_id (FK para Usuarios) VARCHAR (UUID)
  - anuncio_id (FK para Anuncios) VARCHAR (UUID)
  
  - **OBS:**
    - data_avaliacao com cláusula DEFAULT CURRENT_TIMESTAMP: Define que por padrão, será preenchida com a data e hora atuais no momento
    em que um novo registro é inserido na tabela.

**4. Mensagens** :heavy_check_mark:
  - id (PK) VARCHAR (UUID)
  - usuario_remetente_id (FK para Usuário) VARCHAR (UUID)
  - usuario_destinatario_id (FK para Usuário) VARCHAR (UUID)
  - texto TEXT
  - data_envio TIMESTAMP
  - lido (false, true) BOOLEAN 
  - **OBS:**
    - data_envio com cláusula DEFAULT CURRENT_TIMESTAMP: Define que por padrão, será preenchida com a data e hora atuais no momento
    em que um novo registro é inserido na tabela.
    - O atributo lido é por default False.

</p>

## Relacionamentos :handshake:

**1. Usuarios e Enderecos:** :heavy_check_mark:
  - Muitos-para-Um (N:1).
  - Um usuário (Usuarios) pode ter um único endereço (Enderecos).
  - Cada endereço pode ser associado a muitos usuários.
  - Chave Estrangeira: endereco_id em Usuarios refere-se a id em Enderecos.

**2. Usuarios e Telefones:** :heavy_check_mark:
 - Um-para-Muitos (1:N).
 - Um usuário (Usuarios) pode ter vários telefones (Telefones).
 - Cada telefone está associado a um único usuário.
 - Chave Estrangeira: usuario_id em Telefones refere-se a id em Usuarios.

**3. Usuarios e Anuncios:** :heavy_check_mark:
  - Um-para-Muitos (1:N).
  - Um usuário pode criar vários anúncios de troca de livros, mas cada anúncio é criado por um único usuário.
  - Chave Estrangeira: anunciante_id em Anuncios refere-se a id em Usuarios.

**4. Usuarios e Avaliacoes:** :heavy_check_mark:
  - Um-para-Muitos (1:N).
  - Um usuário pode fazer várias avaliações de trocas, mas cada avaliação é feita por um único usuário.
  - Chave Estrangeira: usuario_avaliador_id em Avaliacoes refere-se a id em Usuarios.

**5. Anuncios e Avaliacoes:** :heavy_check_mark:
  - Relacionamento: Zero-para-Muitos (0:N).
  - Anúncio pode receber várias avaliações, mas cada avaliação pertence a um único anúncio.
  - Chave Estrangeira: anuncio_id em Avaliacoes refere-se a id em Anuncios.

**6. Usuarios e Mensagens:** :heavy_check_mark:
  - Um-para-Muitos (1:N).
  - Um usuário pode enviar várias mensagens, mas cada mensagem é enviada por um único usuário.
  - Um usuário pode receber várias mensagens, mas cada mensagem é recebida por um único usuário.
  - Chave Estrangeira:
    - usuario_remetente_id em Mensagens refere-se a id em Usuarios.
    - usuario_destinatario_id em Mensagens refere-se a id em Usuarios.

 
... 

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2024 - Conectando Leitores
