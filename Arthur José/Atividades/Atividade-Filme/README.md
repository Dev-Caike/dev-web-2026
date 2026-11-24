# 🎬 Página de Filme — Interestelar

Projeto da **2ª Avaliação** da disciplina de Desenvolvimento Web: uma página sobre um filme favorito, construída do zero apenas com **HTML e CSS** (sem Bootstrap).

O filme escolhido foi **Interestelar (2014)**, dirigido por Christopher Nolan.

## 📁 Estrutura do projeto

```
pagina-de-filme/
├── index.html    # Estrutura da página (HTML semântico)
├── estilo.css    # Estilização (CSS separado, com variáveis)
├── capa.svg      # Imagem de capa do filme
└── README.md     # Descrição do projeto
```

## ✅ Requisitos atendidos

### 1. Estrutura com HTML semântico
O arquivo `index.html` utiliza tags semânticas para organizar o conteúdo:

- `<header>` e `<nav>`: topo da página e menu de navegação
- `<main>`: conteúdo principal
- `<section>`: destaque, sinopse, ficha técnica e elenco
- `<article>`: cartões de sinopse, ficha técnica e atores
- `<figure>` e `<figcaption>`: imagem de capa com legenda
- `<footer>`: rodapé da página

### 2. Estilização com CSS separado
Todo o estilo está no arquivo `estilo.css`, vinculado ao `index.html` pela tag:

```html
<link rel="stylesheet" href="estilo.css">
```

### 3. Variáveis CSS
Cores, fontes e espaçamentos são definidos como variáveis no `:root` e reutilizados em todo o arquivo:

```css
:root {
  --cor-fundo: #0b0f1a;
  --cor-destaque: #f5a623;
  --fonte-titulo: Georgia, "Times New Roman", serif;
  --espaco-2: 1rem;
  /* ... */
}
```

### 4. Layout com Flexbox e Grid
- **Flexbox**: topo, menu de navegação e seção de destaque (capa + texto)
- **Grid**: ficha técnica e lista de elenco, com `auto-fit`/`auto-fill` para se adaptar à largura da tela
- **Responsividade**: `@media (max-width: 700px)` reorganiza o destaque em coluna em telas pequenas

### 5. Conteúdo
- Título do filme
- Sinopse
- Elenco
- Diretor (e demais dados da ficha técnica)
- Imagem de capa

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` em qualquer navegador.

Não é necessário instalar nenhuma dependência.

## 🛠️ Tecnologias

- HTML5
- CSS3 (variáveis, Flexbox, Grid e media queries)

## 👤 Autor

Projeto desenvolvido por **[Seu Nome]** para fins acadêmicos.
