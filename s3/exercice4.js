// Exercice 4: Aplatir un tableau de tableaux
const tableauDeTableaux = [1, [2, [3, [4, [5, ]]]]];
const aplatiProf1 = tableauDeTableaux.flat();
console.log(aplatiProf1);


const aplatiInf = tableauDeTableaux.flat(Infinity);

console.log(aplatiInf);