// Exercice 7: Implémenter une fonction de réduction personnalisée
function reductionPersonalisee(tableau, fonctionReduc, valeurInitiale) {
    let accumulateur = valeurInitiale;
    for (let i =0; i < tableau.length; i++) {
        accumulateur = fonctionReduc(accumulateur, tableau[i], i, tableau)
    }
    return accumulateur;
}
const tableau = [1, 2, 3, 4, 5];
const somme = (accumulateur, valeurCourante) => accumulateur + valeurCourante;
const resultatSomme = reductionPersonalisee(tableau, somme, 0);
console.log(resultatSomme);