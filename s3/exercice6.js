// Exercice 6: Filtrer un tableau d'objets par une plage de dates
const donnees = [
    { id: 1, date: "2024-01-01", valeur: 100 },
    { id: 2, date: "2024-02-01", valeur: 200 },
    { id: 3, date: "2024-03-01", valeur: 300 },
    { id: 4, date: "2024-04-01", valeur: 400 },
    { id: 5, date: "2024-05-01", valeur: 500 },
];
function filtrerParPlageDeDates(donnees, dateDebut, dateFin) {
    const debut = new Date(dateDebut);
    const fin = new Date(dateFin)

    return donnees.filter(element => {
        const date = new Date(element.date);
        if (date >= debut && date <= fin) {
            console.log(date)
        }
    });
}
const dateDebut = "2024-02-01";
const dateFin = "2024-04-01";

filtrerParPlageDeDates(donnees, dateDebut, dateFin);