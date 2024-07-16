// Exercice 2: Regrouper des éléments d'un tableau par propriété
const personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Jack", age: 20 },
    { nom: "Eva", age: 32 },
    { nom: "Sonia", age: 20 },
    { nom: "Leya", age: 25 },
];

function regrouperPar(tableau, propriete) {
    return tableau.reduce((acc, obj) => {
        const cle = obj[propriete];
        if (!acc[cle]) {
            acc[cle] = [];
        }
        acc[cle].push(obj);
        return acc;
    }, {});
}
const personneParAge = regrouperPar(personnes, "age");
console.log(personneParAge);
