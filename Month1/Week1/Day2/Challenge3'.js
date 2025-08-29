function doubleur(n) {
  return n * 2;
}

function pairOuImpair(n) {
  return n % 2 === 0 ? n + 10 : n - 5;
}

function mystere(n) {
  return n < 20 ? n * n : Math.floor(n / 2);
}

let n = parseInt(prompt("Entrez un nombre :"));
let choix = prompt("Choisissez : doubleur, pair, mystere");

if (choix === "doubleur") {
  console.log("Résultat :", doubleur(n));
} else if (choix === "pair") {
  console.log("Résultat :", pairOuImpair(n));
} else if (choix === "mystere") {
  console.log("Résultat :", mystere(n));
} else {
  console.log("Choix invalide");
}
