// Exercice 8: Fusionner deux tableaux et supprimer les doublons
const tab1 = [0, 7, 16, 22, 502];
const tab2 = [2, 16, 22, 503];
const tableauFusionne = [...new Set([...tab1, ...tab2])];
console.log("Tableau fusionné sans doublons :", tableauFusionne)