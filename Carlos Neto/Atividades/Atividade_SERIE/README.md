# Dexter: Ressurreição (2025–2026)

Página web sobre a série **Dexter: Ressurreição** (*Dexter: Resurrection*), criada com **HTML semântico** e **Bootstrap 5** (via CDN) como atividade da disciplina de desenvolvimento web.

- **Aluno:** Carlos Alberto Dos Santos Neto
- **Turma:** ADS Noturno
- **Série escolhida:** Dexter: Ressurreição (Showtime / Paramount+)

## Sobre a página

A página apresenta a série que continua a história de *Dexter: New Blood*. Ela traz:

- **Apresentação** com a capa, o título e uma frase de abertura;
- **Sinopse** e ficha da série (criação, estreia, temporadas e onde assistir);
- **Carousel** de destaques com imagens da série;
- **Cards** do elenco principal (personagens);
- **Cards** de episódios da 1ª temporada.

A interface usa as cores do pôster da série: azul vibrante e vermelho.

## Estrutura do projeto

```
dexter/
├── index.html       # estrutura da página (HTML semântico + classes Bootstrap)
├── estilo.css       # cores e fontes da série, por cima do Bootstrap
├── capa.jpg         # capa (pôster) da série
├── destaque1.jpg    # imagem do carousel (slide 1)
├── destaque2.jpg    # imagem do carousel (slide 2)
└── README.md        # este arquivo
```

## Requisitos da atividade

| Requisito | Como foi atendido |
|---|---|
| **HTML semântico** | Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>` e `<footer>` |
| **Bootstrap via CDN** | CSS e JS do Bootstrap 5.3.3 carregados pelo jsDelivr. Layout com grid (`container`, `row`, `col-*`, `row-cols-*`) e classes utilitárias (`g-4`, `py-5`, `text-center`, `h-100`, etc.) |
| **Card** | 6 cards de personagens do elenco e 3 cards de episódios, com conteúdo real da série |
| **Breadcrumb** | Navegação "Início / Séries / Dexter: Ressurreição" no topo da página |
| **Carousel** | Carrossel do Bootstrap com 2 slides de imagens, indicadores e botões anterior/próximo |
| **Conteúdo** | Título, sinopse, elenco principal e imagens da série |

## Componentes do Bootstrap utilizados

- **Navbar** com menu recolhível em telas pequenas
- **Breadcrumb**
- **Carousel** (com indicadores e controles)
- **Card** (corpo, título, texto e rodapé)
- **Grid** responsivo e botões

## Como executar

1. Baixe ou clone o repositório.
2. Mantenha todos os arquivos **na mesma pasta**.
3. Abra o `index.html` no navegador (dois cliques ou "Open with Live Server" no VS Code).

> O Bootstrap e as fontes (Anton e Barlow) são carregados da internet. É preciso estar conectado para ver a página completa.

## Tecnologias

- HTML5
- CSS3
- [Bootstrap 5.3.3](https://getbootstrap.com/) (CDN)
- Google Fonts

## Créditos

Pôster, imagens e informações da série pertencem à Showtime / Paramount+ e aos seus respectivos detentores. Este projeto tem fins exclusivamente educacionais.
