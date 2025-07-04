# 🎮 BuscadorFilmesOMDB

Este é um projeto Angular que permite aos usuários buscar informações sobre filmes utilizando a [API pública do OMDb](https://www.omdbapi.com/). É possível pesquisar filmes por nome e visualizar detalhes como título, ano, nota do IMDb, duração, diretor e sinopse, exibidos em um modal interativo com Angular Material.

---

## 🚀 Funcionalidades

- 🔎 Busca de filmes em tempo real pela API do OMDb.
- 🧹 Exibição dos resultados em cards com título, imagem, ano e nota IMDb.
- 🪟 Modal com detalhes do filme: título, diretor, nota, tempo de duração, gênero e sinopse.
- 📱 Layout responsivo para dispositivos móveis.
- ⚙️ Estruturado em componentes reutilizáveis no padrão Angular.

---

## 🛠️ Tecnologias utilizadas

- [Angular CLI 19.0.6](https://github.com/angular/angular-cli)
- [Angular Material](https://material.angular.io/)
- [OMDb API](https://www.omdbapi.com/)
- HTML5 + SCSS + TypeScript

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/gabriel-saint/BuscadorFilmesOMDB.git
```

2. Acesse o diretório do projeto:

```bash
cd BuscadorFilmesOMDB
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Insira sua chave da API OMDb no serviço responsável pelas requisições (exemplo: `movie.service.ts`):

```ts
const API_KEY = 'SUA_CHAVE_AQUI';
```

5. Execute o servidor de desenvolvimento:

```bash
ng serve
```

6. Abra o navegador e acesse:

```
http://localhost:4200/
```

---

## 🔧 Build do projeto

Para compilar o projeto em modo de produção:

```bash
ng build
```

Os arquivos serão gerados no diretório `dist/`.

---

## 🧪 Testes

### Testes unitários (Karma):

```bash
ng test
```

### Testes end-to-end (e2e):

```bash
ng e2e
```

💡 Observação: o Angular CLI não inclui frameworks e2e por padrão. Você pode integrar ferramentas como Cypress ou Playwright.

---


## 🔑 Sobre a API OMDb

Para usar a API OMDb, é necessário obter uma chave gratuita (ou paga para mais requisições) em:\
👉 https\://www\.omdbapi.com/apikey.aspx

---

## 📄 Licença

Este projeto é livre para uso acadêmico, pessoal ou como base para estudos.\
Todos os direitos dos dados exibidos pertencem aos seus respectivos detentores e à [OMDb API](https://www.omdbapi.com/).

---

## ✨ Autor

Gabriel S. – Desenvolvedor Front-End apaixonado por cinema e tecnologia.

