// Exercice 1: Somme des éléments d'un tableau
const tableau = [10, 22, 37, 45, 59];

let tab = 0;

for (let i = 0; i < tableau.length; i++) {
    tab += tableau[i];
}
console.log("La somme des éléments du tableau est :", tab)