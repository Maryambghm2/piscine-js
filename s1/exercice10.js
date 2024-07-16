// Exercice 10: Calculer la factorielle d'un nombre
function factorial(n) {
if ( n === 0 || n === 1){
return 1;
} else {
    return n * factorial(n - 1);
}
}

let num = 2;

let result = factorial(num);
console.log("La factorielle de " + num + " est : " + result);