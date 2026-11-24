var ola = "Ola mundo JS";

console.log(ola);
console.info(ola);
console.error(ola);

function log(valor) {
    console.log(valor);
}

// ---------------------------------------------------

var valor = 10;
log(typeof valor);

var palavra = "oi";
log(typeof palavra);

var meuObj = {};
log(typeof meuObj);

var meuArray = [];
log(typeof meuArray)

var nulo = null;
log(typeof nulo)

var indefinido;
log(typeof indefinido)

// ---------------------------------------------------

const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2);
log(n1 * n2);
log(n1 / n2);

// ---------------------------------------------------

log(n1 == n2);
log(n2 == valorNumericoStr);
log(n2 === valorNumericoStr);

log((n2 > n1 || n1 > n2) && 1 > 2);

const instituicao = "CEUB"

switch (instituicao) {
    case "CEUB":
        log("FACULDADE");
        break
    case "CEM10":
        log("ESCOLA");
        break
    case "CIL":
        log("ESCOLA DE LINGUAS");
        break
    default:
        log("Não encotrei o tipo");
        break
}













