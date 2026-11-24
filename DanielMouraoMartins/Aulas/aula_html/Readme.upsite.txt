Readme.upsite

# 🎈 Up: Altas Aventuras

Página web sobre o meu filme favorito, **Up: Altas Aventuras** (Pixar, 2009), desenvolvida como atividade de aula para praticar HTML semântico e CSS.

## 📋 Sobre o projeto

A página apresenta o filme com sinopse, uma seção explicando por que ele é o meu favorito, um menu de navegação e uma barra lateral com informações sobre o autor e categorias.

O objetivo da atividade é aplicar os conceitos vistos em sala:

- Estrutura com HTML semântico
- Estilização com CSS em arquivo separado
- Layout com Flexbox
- Design responsivo para celulares

## 🛠️ Tecnologias utilizadas

- **HTML5**: estrutura da página
- **CSS3**: estilização, Flexbox e media queries

## 📁 Estrutura de arquivos

```
📦 projeto
 ┣ 📄 up.html     → estrutura e conteúdo da página
 ┣ 📄 style.css   → estilos da página
 ┗ 🖼️ imagem do pôster (usada na seção Sinopse)
```

## 🧱 Estrutura semântica (HTML)

| Tag | Uso na página |
| --- | --- |
| `<header>` | Título do filme e frase de apresentação |
| `<nav>` | Menu de navegação (Início, Sinopse, Personagens, Contato) |
| `<main>` | Conteúdo principal da página |
| `<section>` | Seção "Sobre o Filme" |
| `<article>` | Dois artigos: "Sinopse" e "Por que é o meu favorito" |
| `<aside>` | Barra lateral com "Sobre o Autor" e "Categorias" |
| `<footer>` | Rodapé com direitos autorais |

## 🎨 Estilização (CSS)

- **Paleta de cores** inspirada nos tons do filme: vermelho (`#A83232`), bege (`#F5F0E8`) e tons terrosos.
- **Layout com Flexbox** no `<main>`: a `<section>` ocupa 3 partes e a `<aside>` ocupa 1 parte do espaço, com `gap` entre elas.
- **Menu horizontal** com `display: inline-block` nos itens da lista.
- **Cards** com `border-radius` e `box-shadow` para destacar o conteúdo.
- **Responsividade**: abaixo de `700px` o layout vira uma coluna única e o menu passa a ser vertical (`@media (max-width: 700px)`).

## 🚀 Como executar

1. Baixe ou clone o repositório.
2. Mantenha `up.html` e `style.css` na mesma pasta.
3. Coloque a imagem do pôster na mesma pasta e ajuste o atributo `src` da tag `<img>` para o nome do arquivo (por exemplo, `src="poster-up.png"`).
4. Abra o arquivo `up.html` no navegador.

## 👤 Autor

**Daniel Mourão Martins**
Estudante de Análise e Desenvolvimento de Sistemas (ADS)

---

© 2026 Todos os direitos reservados.