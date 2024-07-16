// Exercice 3: Filtrage avec des expressions régulières
const texte = "Le soleil brille aujourd'hui.";
const contientSoleilOuLune = /soleil|lune/.test(texte);
console.log(contientSoleilOuLune);