// Exercice 5: Créer une fonction de temporisation
function temporisation(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function exempleUtilisation() {
    console.log("Début de la temporisation");
    await temporisation(2000);
    console.log("Fin de la temporisation");
}
exempleUtilisation();