# Interestelar — Desenvolvimento de Interfaces

Projeto de página web sobre o filme **Interestelar (Interstellar, 2014)**, desenvolvido para a atividade de **Desenvolvimento de Interfaces**.

## Objetivo

Criar uma página informativa e responsiva sobre um filme, utilizando HTML semântico, CSS em arquivo separado, variáveis CSS e recursos de layout como Flexbox e Grid.

## Conteúdo da página

- Nome do filme: **Interestelar**.
- Sinopse: um grupo de exploradores parte em busca de planetas capazes de abrigar a humanidade.
- Diretor: **Christopher Nolan**.
- Elenco principal: **Matthew McConaughey, Anne Hathaway, Jessica Chastain e Michael Caine**.
- Ano de lançamento: **2014**.
- Imagem de capa: **ilustração original**, salva dentro da pasta `imagens`.
- Seções complementares: temas principais e ficha técnica.

## Tecnologias e conceitos aplicados

**HTML5 semântico:** a página utiliza `<header>` para o cabeçalho, `<nav>` para o menu, `<main>` para o conteúdo principal, `<section>` para dividir os assuntos, `<article>` para organizar conteúdos individuais e `<footer>` para o rodapé. Também utiliza `<figure>`, `<figcaption>`, `<dl>`, `<dt>` e `<dd>`.

**CSS externo:** toda a aparência da página foi criada no arquivo `estilo.css`, separado de `index.html`.

**Variáveis CSS:** cores, fonte, tamanho máximo e espaçamentos foram definidos no seletor `:root` com propriedades como `--cor-fundo`, `--cor-destaque`, `--fonte-principal` e `--espaco-secao`.

**Flexbox:** utilizado na organização do cabeçalho, da navegação, dos cartões do elenco e do rodapé.

**CSS Grid:** utilizado no layout inicial da página, na sinopse, nos cartões temáticos, no elenco e na ficha técnica.

**Responsividade:** regras `@media` adaptam a interface para telas menores, como tablets e celulares.

## Estrutura dos arquivos

```text
Artur/
└── Atividades/
    └── atividade-filme/
        ├── index.html
        ├── estilo.css
        ├── README.md
        └── imagens/
            └── capa-interestelar.jpg
```

## Como executar

1. Baixe ou clone o repositório e abra a pasta `atividade-filme`.
2. Dê dois cliques em `index.html` para abrir no navegador.
3. A página não exige instalação de pacotes nem conexão com a internet.
4. Teste o menu, os links internos e o redimensionamento da janela.

## Checklist da atividade

- [x] Estrutura HTML semântica.
- [x] Arquivo `estilo.css` externo.
- [x] Variáveis CSS em `:root`.
- [x] Layout com Flexbox e Grid.
- [x] Título, sinopse, elenco, diretor e imagem de capa.
- [x] Imagem incluída na pasta do projeto.
- [x] README explicativo.
- [x] Nenhum arquivo desnecessário ou dependência externa.

## Entrega no GitHub

O conteúdo deve ser enviado para o **repositório da turma**, no caminho indicado pelo professor: `seuNome/Atividades/atividade-filme` (substituindo `seuNome` pela pasta correspondente ao aluno). Após enviar os arquivos para uma branch, abrir um **Pull Request** para a branch principal do repositório. Se já existir um PR da atividade, adicionar os arquivos à mesma branch em vez de abrir outro, conforme a orientação da atividade.

> **Observação:** a publicação no repositório e a abertura do Pull Request são feitas no GitHub; este arquivo apenas documenta o projeto.

## Créditos

Informações do filme: *Interestelar* (2014), direção de Christopher Nolan. A imagem `imagens/capa-interestelar.jpg` é uma **capa ilustrativa original** criada para fins educacionais e não é um cartaz oficial do filme.
