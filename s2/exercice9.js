// Exercice 9: Calculer l'âge à partir d'une date de naissance
function calculerAge(dateNaissance) {
    const dateNaissanceObj = new Date(dateNaissance);
    const dateActuelle = new Date();
    let age = dateActuelle.getFullYear() - dateNaissanceObj.getFullYear();
    const moisActuel = dateActuelle.getMonth();
    const jourActuel = dateActuelle.getDate();
    const moisNaissance = dateNaissanceObj.getMonth();
    const jourNaissance = dateNaissanceObj.getDate();

    if (moisActuel < moisNaissance || (moisActuel === moisNaissance && jourActuel < jourNaissance)) {
        age--;
    }
    return age;
}
const dateNaissance = "1995-07-18";
const age = calculerAge(dateNaissance);
console.log("Age : ", age);