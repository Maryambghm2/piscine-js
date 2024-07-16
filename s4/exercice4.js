// Exercice 4: Création d'une fonction de debounce
function debounce(fonction, delai) {
    let timerId;

return function(...args) {
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
        fonction.apply(this,args);
        timerId = null;
    }, delai);
};
}
function traitementRecherche(motCle){
    console.log(`Recherche pour :  ${motCle}`);
}
const debounceDelais = debounce(traitementRecherche, 300);

debounceDelais("JavaScript");
debounceDelais("React");
debounceDelais("Node.js");