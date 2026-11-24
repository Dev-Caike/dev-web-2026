# Em Busca da Felicidade (2006)

Página web sobre o filme **Em Busca da Felicidade** (*The Pursuit of Happyness*), desenvolvida como primeira atividade da disciplina de Desenvolvimento de Interfaces do curso de Análise e Desenvolvimento de Sistemas (ADS).

## Sobre o projeto

A página apresenta informações sobre o filme de forma organizada e responsiva, usando apenas HTML e CSS. O conteúdo é dividido nas seguintes seções:

- **Apresentação:** capa do filme, título, gênero, ano, duração e frase de destaque.
- **Sinopse:** resumo da história de Chris Gardner.
- **Ficha técnica:** título original, direção, roteiro, gênero, país e duração.
- **Elenco:** cartões com os principais atores e seus personagens.
- **Curiosidades:** fatos sobre o título, a história real e a participação especial.

## Tecnologias utilizadas

- HTML5 com tags semânticas (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)
- CSS3 com variáveis personalizadas (`:root`)
- CSS Grid e Flexbox para os layouts
- Media queries para responsividade
- Fontes Bitter e Work Sans (Google Fonts)

## Estrutura de arquivos

```
.
├── index.html
├── Estilo.css
├── capa.jpg
└── README.md
```

## Como executar

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```
   cd seu-repositorio
   ```
3. Abra o arquivo `index.html` em qualquer navegador.

## Recursos de CSS aplicados

- Menu de navegação fixo no topo com links de âncora para cada seção
- Layout da seção principal em duas colunas com `grid`, adaptado para uma coluna em telas pequenas
- Cartões com `flex-wrap` para elenco e curiosidades
- Seções com fundos alternados para separar o conteúdo
- Estilo de foco visível para acessibilidade
- Rolagem suave entre as seções

## Autor

- **Nome:** Carlos Alberto dos Santos Neto
- **Turma:** ADS Noturno
- **Disciplina:** Desenvolvimento de Interfaces

## Aviso

Esta página foi criada para fins educacionais. Todos os direitos do filme pertencem aos seus detentores.
