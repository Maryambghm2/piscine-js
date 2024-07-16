// Exercice 1: Supprimer les éléments falsy d'un tableau
const tableau = [0, 1, false, 2, "", 3, null, 4, undefined, 5, NaN, 6];
const tableauNettoye = tableau.filter(Boolean);
console.log("Tableau nettoyé : ", tableauNettoye); 