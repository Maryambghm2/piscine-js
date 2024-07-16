// Exercice 5: Compter les occurrences d'une lettre dans une chaîne
const chaine = "Hello World";
function compterOccurencesLettres(str) {
    const occurrences = {};
    for (const char of str) {
        if (char.match(/[a-z]/i)) {
            const lettre = char.toLowerCase();
            if (occurrences[lettre]) {
                occurrences[lettre]++;
            } else {
                occurrences[lettre] = 1;
            }
        }
    }
    return occurrences;
}
const resultats = compterOccurencesLettres(chaine);
console.log(resultats);