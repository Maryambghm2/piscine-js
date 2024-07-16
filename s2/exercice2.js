// Exercice 1: Trouver le plus grand nombre dans un tableau
const tableau = [16, 23, 12, 70, 15];
let plusGrand = tableau[0];
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > plusGrand) {
        plusGrand = tableau[i];
    }
}
console.log("Le plus grand nombre dans le tableau est :", plusGrand)