var ola = "Olá, mundo js";
console.log(ola);
console.info("Ola, mundo js");
console.error("Ola")

function log (valor) {
    console.info(valor);
}

//tipos de variaveis 

var valor = 10;
log(typeof valor);

var palavra = "oi";
log(typeof palavra);

//objeto
var meuobj = {}
log(typeof meuobj);

var meuarray = []
log(typeof meuarray);

// Tipo de variavel nula e indefinida
var nulo = null;
log(typeof nulo);

var  indefinido;
log(typeof indefinido);



//Operações simples 

const n1 = 1;
const n2 = 5;
const valorNumerico = "5";

log (n1 + n2);
log (n1 * n2);
log (n1 / n2);

log (n1 == n2); // comparação de valor
log (n1 == valorNumerico); // comparação de valor
log (n1 === valorNumerico); //comparação de tipo e valor


log ((n2 > n1 || n1 > n2) && 1 > 2); //comparação de valor e tipo com operador lógico

const instituicao = "Ceub";

switch (instituicao) {
    case "CEM10":
        log("Escola de ensino");
        break;
    case "Cill":
        log("Escola de linguas");
        break;
    case "CEUB":
        log("FACULDADE");
        break;
    default:
        log("Não é uma instituição de ensino");
        break;
}