// Exercice 10: Convertir une chaîne de caractères en camelCase
function enCamelCase(chaine) {
    return chaine
        .split(/[\s-_]+/)
        .map((mot, index) => {
            if (index === 0) {
                return mot.toLowerCase();
            }
            return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
        })
        .join("");
}
const exemple1 = "convertir chaine de caractère";
const exemple2 = "convertir_chaine-de-caractère";
const exemple3 = "Convertir-Chaine_De_Caractère";
console.log(enCamelCase(exemple1));
console.log(enCamelCase(exemple2));
console.log(enCamelCase(exemple3));