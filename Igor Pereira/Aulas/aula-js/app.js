var ola = "Olá, mundo JS";

console.log(ola);
console.info(ola);
console.error(ola);

function log(valor) {
    console.info(valor);
}

var valor = 10;
log(typeof valor);

var palavra = "oi";
log(typeof palavra);

var meuObj = {};
log(typeof meuObj);

var meuArray = [];
log(typeof meuArray);

var nulo = null;
log(typeof nulo);

var indefinido;
log(typeof indefinido);


const n1 = 1;
const n2 = 5;
const ValorNumericoStr = "5";

log(n1 + n2);
log(n1 * n2);
log(n1 / n2);


log(n1 == n2);
log(n2 == ValorNumericoStr);
log(n2 === ValorNumericoStr);