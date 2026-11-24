var ola ="Olá, mundo JS";
// Se precisar Comentar
console.log(ola);
console.info(ola);
console.error(ola);

function log(valor) {
    console.info(valor);
}

//tipo variável

var valor = 10;
log(typeof valor);

var palavra = "Oi";
log(typeof palavra);

var meuObj = {};
log(typeof meuObj);

var meuArray = [];
log(typeof meuArray);

var nulo = null;
log(typeof nulo);

var indefinido;
log(typeof indefinido);


//Operações simples
const n1 = 1;
const n2 = 5;
const valorNumerocosrt = "5";

log(n1 + n2);
log(n1 * n2);
log(n1 / n2);


log(n1 == n2);
log(n1 == valorNumerocosrt);


log((n2 > n1 || n1 < n2) && (n1 == 1));

const instituicao = "CEUB";

switch (instituicao) {
    case "CEUB":
        log("FACULDADE");
        break;
    case "CEM10":
        log("ESCOLA");
        break;
    case "CIL":
        log("ESCOLA DE LÍNGUAS");
        break;
    default:
        log("NÃO encontreo o tipo");
}


