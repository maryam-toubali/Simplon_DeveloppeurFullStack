function extrairePairs(tab) {
  return tab.filter(n => n % 2 === 0);
}

function sommer(tab) {
  return tab.reduce((acc, val) => acc + val, 0);
}

function renverser(tab) {
  return tab.slice().reverse();
}

let tableau = [1, 2, 3, 4, 5, 6, 7];
let choix = prompt("Choisissez : pairs, somme, inverser");

if (choix === "pairs") {
  console.log("Résultat :", extrairePairs(tableau));
} else if (choix === "somme") {
  console.log("Résultat :", sommer(tableau));
} else if (choix === "inverser") {
  console.log("Résultat :", renverser(tableau));
} else {
  console.log("Choix invalide");
}
