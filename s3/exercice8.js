// Exercice 8: Trier un tableau d'objets par plusieurs propriétés
let student = [
    { name: "James", age: 20, city: "Paris" },
    { name: "Sam", age: 35, city: "Lisbonne" },
    { name: "Lina", age: 27, city: "Madrid" },
];

function trierParPlusieursProprietes(tableau, proprietes) {
    return tableau.sort((a, b) => {
        for (let propriete of proprietes) {
            let compare = a[propriete].toString().localeCompare(b[propriete].toString());
            if (compare !== 0) {
                return compare;
            }
        }
            return 0;
    });
}


console.log(student);