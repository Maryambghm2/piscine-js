// Exercice 8: Recherche dans un tableau
let array = [10, 20, 30, 40, 50];
let num = 10;

// Utilisez une boucle for pour rechercher l'élément
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
        found = true;
        console.log("Élément trouvé à l'index " + i);
        break;
    }
}

if (!found) {
    console.log("Élément non trouvé");
}