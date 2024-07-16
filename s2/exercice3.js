// Exercice 3: Filtrer les nombres pairs d'un tableau
const tableau = [1, 5, 8, 10, 15, 23, 54, 100];
const nombresPairs = tableau.filter(nombre => nombre % 2 === 0);
console.log("Le nombres de pairs dans le tableau est de :", nombresPairs)