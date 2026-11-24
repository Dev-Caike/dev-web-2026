var ola = "Olá, mundo JS!";
//Se precisar comentar
console.log(ola);
console.info(ola);
console.error(ola);

function logar(valor) {
    console.info(valor);
}

//Tipos de variaveis

var valor = 10;
log(typeof valor);

valor palavras = "Olá, mundo JS!";
log(typeof palavras);

var meuObjeto = {};
log(typeof meuObjeto);

var meuArray = [];
log(typeof meuArray);

var nulo = null;
log(typeof nulo);

var indefinido;
log(typeof indefinido);

//Operações
const n1 = 1;
const n2 = 2;
const valorNumericoStr = "5";

log(n1 + n2);
log(n1 * n2);
log(n1/n2);

//Operaçôes logicas 

log(n1==n2);
log(n2 == valorNumericoStr);
log(n2 === valorNumericoStr);

log((n2 > n1) && (n1 > n2) && (1 > 2));

const instituicao = "CEUB"

switch (instituicao) {
    case "CEM10":
        log("Escola");
        break;
    case "CIL":
         log("ESCOLA DE LINGUAS");
        break;  
    case "CEUB":
        log("FACULDADE");
        break;
    default:
        log("Não sei");
}