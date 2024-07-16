// Exercice 7: Table de multiplication
let tableSize = 5;
for (let i = 1; i <= tableSize; i++) {
 let row = '';
for (let j = 1; j <= tableSize; j++){
row+= (i * j) + '\t';
}
console.log(row);
}

