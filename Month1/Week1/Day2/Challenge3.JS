let mot = prompt("Entrez un mot secret :");
let motTransforme = "";
let voyelles = "aeiouAEIOU";

for (let i = 0; i < mot.length; i++) {
  let lettre = mot[i];
  if (voyelles.includes(lettre)) {
    motTransforme += "*";
  } else {
    motTransforme += (i % 2 === 0) ? lettre.toUpperCase() : lettre.toLowerCase();
  }
}

console.log("Mot secret transformé : " + motTransforme);
