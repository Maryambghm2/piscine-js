// Exercice 4: Trouver un élément dans un tableau d'objets
const mesFilms = [
    { id: 1, nom: "Titanic" },
    { id: 2, nom: "Prison Break" },
    { id: 3, nom: "Avatar" },
    { id: 4, nom: "Paulette" }
]
const nomProduitCherche = 2
const produitTrouve = mesFilms.find(produit => produit.id === nomProduitCherche)

if (produitTrouve) {
    console.log("Produit trouvé :", produitTrouve);
} else {
    console.log("Produit introuvable");
}