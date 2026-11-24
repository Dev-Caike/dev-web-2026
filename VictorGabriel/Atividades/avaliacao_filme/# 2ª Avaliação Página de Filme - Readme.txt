# 2ª Avaliação: Página de Filme - Velozes e Furiosos

Este repositório contém o projeto de uma página web dedicada ao filme "Velozes e Furiosos", desenvolvido como parte da avaliação da disciplina de Desenvolvimento de Interfaces. 

O objetivo deste projeto foi aplicar os conceitos fundamentais de HTML e CSS aprendidos em sala de aula



Abaixo está a descrição de como cada conceito exigido foi aplicado no projeto[cite: 6]:

*   **Estrutura com HTML Semântico**[cite: 6]: 
    O código do `index.html` foi construído utilizando as tags semânticas corretas para estruturar a página, incluindo `<header>` para o topo, `<main>` para o conteúdo central, `<section>` para separar a área de destaque e o elenco, `<article>` para o bloco de texto da sinopse e `<footer>` para o rodapé da página.

*   **Estilização com CSS Separado**[cite: 6]: 
    Toda a estilização visual foi feita num ficheiro externo chamado `estilo.css`, que foi devidamente vinculado ao `index.html` através da tag `<link>`.

*   **Variáveis CSS**[cite: 6]: 
    Foram definidas variáveis globais no seletor `:root` dentro do ficheiro CSS para padronizar as cores principais (fundo, texto, cor de destaque vermelho racing), famílias de fontes tipográficas e diferentes tamanhos de espaçamento (margins e paddings).

*   **Layout com Flexbox e Grid**[cite: 6]: 
    *   **Flexbox**: Utilizado na estruturação principal do conteúdo e na secção de destaque, permitindo que a imagem de capa e a sinopse fiquem perfeitamente alinhadas lado a lado em ecrãs maiores.
    *   **CSS Grid**: Utilizado na secção do "Elenco Principal" para criar uma grelha responsiva com colunas dinâmicas (usando `repeat` e `auto-fit`), organizando os cartões dos atores de forma alinhada.

*   **Conteúdo Inserido**[cite: 6]: 
    A página exibe de forma clara todos os dados obrigatórios:
    - Título do filme (Velozes e Furiosos).
    - Sinopse completa.
    - Elenco principal destacado em cartões.
    - Diretor e outras informações técnicas (ano e género).
    - Imagem de capa (póster) ilustrativa.

## 🛠️ Tecnologias Utilizadas
*   HTML5
*   CSS3 (Puro / Vanilla)