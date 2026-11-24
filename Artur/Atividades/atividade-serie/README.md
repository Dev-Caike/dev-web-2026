# Stranger Things — Arquivos de Hawkins

**Disciplina:** Desenvolvimento de Interfaces  
**Atividade:** Página sobre uma série usando HTML semântico e Bootstrap  
**Tema escolhido:** Stranger Things  
**Pasta de entrega:** `Artur/Atividades/atividade-serie`

## Descrição

Página web acadêmica de apresentação da série *Stranger Things*. O site conta com sinopse da história, personagens com atores, ficha técnica e uma galeria de imagens ilustrativas. A identidade visual utiliza tons escuros e vermelhos para remeter ao clima de mistério da série.

## Tecnologias e requisitos utilizados

| Requisito | Onde está no projeto |
| --- | --- |
| HTML5 semântico | `header`, `nav`, `main`, `section`, `article` e `footer` em `index.html` |
| Bootstrap via CDN | Link da folha CSS e script `bootstrap.bundle.min.js` (versão 5.3.9) em `index.html` |
| Grid responsivo | `container-xl`, `row`, `col-lg-7`, `col-lg-5`, `col-md-6`, `col-lg-4` e `g-4` |
| Componente Card | Três `article.card` na seção **Personagens** |
| Componente Breadcrumb | Navegação contextual no início da página com `ol.breadcrumb` |
| Componente Carousel | Galeria com três slides, indicadores, anterior/próximo e troca automática |
| Conteúdo real | Título da série, sinopse, elenco, personagens, criadores e número de temporadas |
| Imagens | Seis ilustrações JPG originais dentro da pasta `imagens` |

## Como abrir e testar

1. Extraia o ZIP da atividade.
2. Entre em `Artur/Atividades/atividade-serie`.
3. Abra `index.html` no navegador (Edge ou Chrome).
4. **Mantenha conexão com a internet**, pois o Bootstrap CSS e JavaScript são carregados por CDN, conforme solicitado na atividade.
5. Confira a barra de navegação e o breadcrumb no topo.
6. Role a página e veja os três cards de personagens.
7. Na galeria, clique nas setas do carrossel e nos indicadores para mudar de slide.
8. Se quiser, reduza a largura da janela para conferir o layout responsivo e o menu móvel.

Nenhum programa, Node.js, npm ou banco de dados é necessário para abrir a página.

## Estrutura de arquivos

```text
Artur/
└── Atividades/
    └── atividade-serie/
        ├── index.html
        ├── estilo.css
        ├── README.md
        └── imagens/
            ├── hawkins-noite.jpg
            ├── mundo-invertido.jpg
            ├── sinais-de-hawkins.jpg
            ├── personagem-onze.jpg
            ├── personagem-dustin.jpg
            └── personagem-joyce.jpg
```

## Entrega no GitHub

Repositório da turma: <https://github.com/fernandodx/dev-web-2026>

Envie a **pasta `atividade-serie`** dentro de `Artur/Atividades` na branch `atividade-filme-artur` do seu Fork `arturoliveira557/dev-web-2026`. Como o Pull Request #70 já está aberto, **não é necessário abrir outro**: basta adicionar esses arquivos à mesma branch, e o PR será atualizado automaticamente. Não envie arquivos ZIP, `node_modules`, `.DS_Store` nem arquivos temporários.

## Créditos e observações

- As ilustrações do projeto são **artes originais produzidas para esta atividade**, não imagens promocionais oficiais. Foram criadas para fins acadêmicos, com referência visual ao tema geral de mistério sobrenatural dos anos 1980.
- Informações gerais sobre a série e o elenco foram conferidas na [página oficial da Netflix](https://www.netflix.com/br/title/80057281) e no [guia de personagens Netflix Tudum](https://www.netflix.com/tudum/pt-br/artigos/elenco-e-personagens-de-stranger-things-5).
- Bootstrap é um projeto de terceiros: [documentação oficial do Bootstrap 5.3](https://getbootstrap.com/docs/5.3/).
- Este é um trabalho estudantil não oficial e não possui afiliação com Netflix.
