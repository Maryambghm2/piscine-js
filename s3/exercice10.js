// Exercice 10: Exécuter des promesses en série
function promesseAttente(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}
const delais = [1000, 2000, 500, 3000];
async function executerPromessesEnSerie() {
    for (let delai of delais) {
        const resultat = await promesseAttente(delai);
        console.log(`Promesse résolue après ${resultat} millisecondes`);
    }
    console.log("Toutes les promesses ont été exécutées en série.");
}
executerPromessesEnSerie();