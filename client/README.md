# Projeto de Teste - Dev Junior

Este é um projeto de teste para um desenvolvedor(a) júnior. O projeto consiste em uma API com endpoints para gerenciar usuários, juntamente com um cliente Vue.js para interagir com a API.

## Configuração

Antes de iniciar o projeto, certifique-se de ter o Node.js e o npm instalados em seu sistema. Além disso, você precisará de um cluster MongoDB válido e atualizar a variável `mongoUri` no arquivo `server.js` com a URL de conexão correta.

## Instalação

1. Clone o repositório para sua máquina local:

2. Restaure as dependências do servidor executando o seguinte comando: npm install

## Executando o servidor

1.Na pasta do server, digite o comando: nodemon server.js

Isso iniciará o servidor Node.js usando o `nodemon`, que reinicia automaticamente o servidor sempre que houver alterações nos arquivos.

3.O servidor irá iniciar automaticamente no localhost:3000. Para trocar a porta basta mudar a variável port no server.js

2.Certifique-se de atualizar a variável `mongoUri` no arquivo `server.js` com a URL do seu cluster MongoDB válido.

## Executando o Cliente

1. Na pasta raiz do projeto, navegue para a pasta do cliente: cd client


2. Inicie o cliente Vue.js executando o seguinte comando: npm run serve


Isso iniciará o cliente Vue.js e você poderá acessá-lo em seu navegador no endereço `http://localhost:8080`.

## Endpoints da API

A API possui os seguintes endpoints disponíveis:

- `GET '/users'`: Retorna todos os usuários cadastrados.
- `GET '/users/:id'`: Retorna um usuário específico com base em seu ID.
- `PATCH '/users/:id'`: Atualiza os dados de um usuário específico com base em seu ID.
- `POST '/users'`: Cria um novo usuário.

Certifique-se de realizar as requisições HTTP adequadas para interagir com a API.

## Contribuição

Fique à vontade para contribuir para este projeto através de pull requests e relatar quaisquer problemas encontrados.

Espero que este projeto de teste seja útil para seu desenvolvimento como desenvolvedor(a) júnior. Divirta-se codando!
