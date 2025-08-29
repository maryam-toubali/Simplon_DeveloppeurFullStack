function majusculesAlternées(mot) {
  let resultat = "";
  for (let i = 0; i < mot.length; i++) {
    resultat += i % 2 === 0 ? mot[i].toUpperCase() : mot[i].toLowerCase();
  }
  return resultat;
}

function remplacerVoyelles(mot, symbole) {
  let voyelles = "aeiouAEIOU";
  let resultat = "";
  for (let i = 0; i < mot.length; i++) {
    resultat += voyelles.includes(mot[i]) ? symbole : mot[i];
  }
  return resultat;
}

function inverserMot(mot) {
  return mot.split("").reverse().join("");
}

let mot = prompt("Entrez un mot :");
let choix = prompt("Choisissez : majuscules, voyelles, inverser");

if (choix === "majuscules") {
  console.log("Résultat :", majusculesAlternées(mot));
} else if (choix === "voyelles") {
  let symbole = prompt("Entrez un symbole pour remplacer les voyelles :");
  console.log("Résultat :", remplacerVoyelles(mot, symbole));
} else if (choix === "inverser") {
  console.log("Résultat :", inverserMot(mot));
} else {
  console.log("Choix invalide");
}
