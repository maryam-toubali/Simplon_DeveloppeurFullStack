function carre(n) {
  return n * n;
}

function miroir(texte) {
  return texte.split("").reverse().join("");
}

function balance(a, b) {
  return a > b ? a : b;
}

let choix = prompt("Choisissez : carre, miroir, balance");

if (choix === "carre") {
  let n = parseInt(prompt("Entrez un nombre :"));
  console.log("Résultat :", carre(n));
} else if (choix === "miroir") {
  let texte = prompt("Entrez un texte :");
  console.log("Résultat :", miroir(texte));
} else if (choix === "balance") {
  let a = parseInt(prompt("Entrez le premier nombre :"));
  let b = parseInt(prompt("Entrez le deuxième nombre :"));
  console.log("Résultat :", balance(a, b));
} else {
  console.log("Choix invalide");
}
