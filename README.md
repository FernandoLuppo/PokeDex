<div align="center">
<h1> 🚀 PokeDex 🚀 </h1>
</div>

<p>
  Olá!! Este é um projeto full-stack que criei, um site onde o usuário poderá fazer consultas
  sobre um pokemon ou criar um time para enfrentar os diversos desafios que os jogos nos proporciona.
  <br>
  Esse projeto foi feito utilizando a API PokeAPI: https://pokeapi.co/
</p>

<p>💻 As tecnologias usadas no projeto foram:
  <br> - TypeScript
  <br> - Styled Components
  <br> - Figma
  <br> - React
  <br> - React Router DOM
  <br> - React Icons
  <br> - Jest
  <br> - Testing Library
  <br> - Axios
  <br> - eslint
  <br> - dotenv
</p>

<br><br>

<h2>Links</h2>
<p>
  <strong>🖥️ Link do repositório da API do projeto: https://github.com/FernandoLuppo/PokeDex-API</strong>
</p>

<h2>Overview</h2>

<p>
  Sobre a criação, o projeto foi feito em cima da API do PokeAPI porém foi realizado uma filtragem de informações para apresentar o layout planejado,
  falando sobre o layout ele é de minha autoria e foi projetado no Figma.
  <br>
  Enquanto sua funcionalidade, estando deslogado o usuário vai ter acesso a Home onde poderá escolher um pokemon, seja realizando o scroll da página até encontrar
  ou procurando diretamente pelo nome ou id do pokemon na search bar, após escolher um pokemon o usuário será levado para a outra tela onde terá acesso as 
  informações do pokemon como os ataques e seus respectivos níveis, os status e outros.
  <br>
  Para a proteção do usuário o monitoramento do próprio na página é feito atravéz de JWT com Refresh Token e Cookies, as senhas são criptografadas e todos formulários
  são validados
</p>

<h2>Como usar</h2>
<p>
  Caso queira fazer um clone dessa aplicação recomendo que faça da API também pois sem ela o projeto não irá funcionar corretamente, primeiramente instale as dependências tanto
  do cliente quanto do servidor, após o projeto precisará de dois terminais um para o front e um para o back.
</p>
<p>
  No primeiro terminal, estando no root pasta do front utilize o comando: <strong>yarn dev</strong> para inicializar o React.
</p>
<p>
  No segundo terminal, estando no root pasta do back utilize o comando <strong>yarn start</strong> para inicializar o servidor.
</p>

<h2>Página Home</h2>
<p>
  Estando na Home o usuário tem acesso a lista de pokemons e ao search bar onde o usuário poderá escolher um pokemon para se informar, caso o usuário esteja deslogado
  na side bar terá dois botões para levá-lo a pagina de login ou de registro, e caso o usuário já esteja logado, no side bar irá aparecer seu nome, um botão para levá-lo
  ao seu perfil e um botão de deslogar caso o usuário queira sair da conta.
</p>
<img src=https://user-images.githubusercontent.com/95176596/266644029-b2e69732-28bb-400f-8e2d-b74528c314b5.png />
<img src=https://user-images.githubusercontent.com/95176596/266644611-73cdb878-924f-4df0-96af-7a4218695c1d.png />
<img src=https://user-images.githubusercontent.com/95176596/266645687-2bec0e58-de6b-406d-9895-17f6093f0822.gif /> 
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/266646914-37149924-2097-4845-95ed-85af960a1aa0.png /> 
  <img src=https://user-images.githubusercontent.com/95176596/266647307-c1158815-7c05-43d6-82d5-6b5cefad1ff7.png />
</div>

<h2>Página Pokemon</h2>
<p>
  Na página do pokemon é possível ver as informações base do próprio assim como sua descrição, ataques e leveis em que se aprende,
  caso o usuário esteja logado irá aparecer um botão para adicionar o pokemon em questão a equipe caso ela não esteja cheia.
</p>
<img src=https://user-images.githubusercontent.com/95176596/266714632-83efb266-e9c8-42df-8a1c-6e2a4ed4e7ee.gif />
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/266715457-0a73d40e-7942-4aeb-b4d9-beb325b19b5c.gif />
</div>

<h2>Página My Profile</h2>
<p>
  A página do usuário é onde ele poderá alterar o nome e o seu email, assim como visualizar e gerenciar o seu time pokemon, ela só pode ser acessada caso
  o usuário esteja logado.
</p>
<img src=https://user-images.githubusercontent.com/95176596/266717809-28b6e10f-ba43-4658-ad84-b049faae3537.gif />
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/266726194-425a9650-0665-485f-ac6b-c100a7494639.gif />
</div>

<h2>Login e Registro</h2>
<p>
  A página de Login e Registro serve para comprir ambos seus respectiveis papeis, as páginas possuem validação em seu formulário caso o usuário
  preencha algum campo errado ele será notificado, elas possuem um botão para retornar para Home, na página de Login há um botão para trocar a
  senha caso o usarío a perca.
</p>
<img src=https://user-images.githubusercontent.com/95176596/266727626-91d2230c-18af-49b5-8e37-54b8ff38664a.gif />
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/266727744-612844b8-f9f2-4330-9112-853fd20bcc87.gif />
</div>

<h2>Pagina Recuperar a Senha - Validação de Email</h2>
<p>
  Essa página é a primeira etapa para a troca de senha, nela o usuário colocar o email que foi cadastrado e será enviado um código para ele,
  após o usuário tera um determinado tempo para preencher o código, caso contrário o próprio é invalidado, depois de colocar o código certo o 
  usuário sera redirecionado para a segunda etapa de troca de senha.
</p>

<img src=https://user-images.githubusercontent.com/95176596/266730281-72da5fce-58d8-4ddc-8c07-e89cc96615de.png />
<img src=https://user-images.githubusercontent.com/95176596/266730461-00be046b-7f33-456a-a337-29dbebd747e1.png />
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/266730389-898bfde5-3f9a-47c2-a456-e34bb011c4fd.png />
  <img src=https://user-images.githubusercontent.com/95176596/266730538-a82b2eda-15c7-4b15-b162-28bb7cc3d0be.png />
</div>

<h2>Página Recuperar a Senha - Troca de Senha</h2>
<p>
  Agora na segunda etapa o usuário terá que criar uma nova senha, após ele será redirecionado para a página de Login novamente.
</p>
<img src=https://user-images.githubusercontent.com/95176596/266733442-f84be934-6c8c-4fb0-82dd-603e4d199319.png />
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/266733502-0d1eda52-a1f9-48fb-80f0-cded58f8e358.png />
</div>



  
