// Exercice 7: Vérifier si un mot est un palindrome
function estPalindrome(mot){
    const motNettoye = mot.toLowerCase().replace(/[^a-z]/g, '');
const motInverse = motNettoye.split('').reverse().join('');
return motNettoye === motInverse;
}
const mots = ["Kayak", "Bonjour", "Aibohphobia", "Radar"];
mots.forEach(mot => {
if (estPalindrome(mot)) {
    console.log(mot + " est un palindrome");
} else { 
    console.log(mot + " n'est pas un palindrome");  
 }
 });