let nombres = [12, 7, 19, 3, 25, 7, 3];

let plusGrand = Math.max(...nombres);
let plusPetit = Math.min(...nombres);

let somme = 0;
for (let i = 0; i < nombres.length; i++) {
  somme += nombres[i];
}

let chiffreRecherche = 7;
let occurrences = 0;
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === chiffreRecherche) occurrences++;
}

console.log("=== Rapport d'Enquête ===");
console.log("Nombres suspects : " + nombres);
console.log("Nombre le plus grand : " + plusGrand);
console.log("Nombre le plus petit : " + plusPetit);
console.log("Somme totale : " + somme);
console.log("Occurrences de " + chiffreRecherche + " : " + occurrences);

if (somme % 2 === 0) {
  console.log("Enquête résolue");
} else {
  console.log("Encore des mystères à élucider..");
}
