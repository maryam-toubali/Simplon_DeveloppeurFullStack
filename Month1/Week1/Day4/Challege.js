let creatures = [
  { nom: "Draco", type: "Dragon", puissance: 90, magie: 70 },
  { nom: "Luma", type: "Elfe", puissance: 85, magie: 80 },
  { nom: "Goruk", type: "Gobelin", puissance: 75, magie: 60 },
  { nom: "Sylpha", type: "Fée", puissance: 80, magie: 90 }
];

function afficherCreatures(tab) {
  for (let i = 0; i < tab.length; i++) {
    console.log(`Créature: ${tab[i].nom}, Type: ${tab[i].type}, Puissance: ${tab[i].puissance}, Magie: ${tab[i].magie}`);
  }
}

function combattre(c1, c2) {
  if (c1.puissance > c2.puissance) return c1;
  if (c2.puissance > c1.puissance) return c2;
  if (c1.magie > c2.magie) return c1;
  if (c2.magie > c1.magie) return c2;
  return null;
}

afficherCreatures(creatures);

let resultats = {};
for (let i = 0; i < creatures.length; i++) {
  resultats[creatures[i].nom] = 0;
}

for (let i = 0; i < creatures.length - 1; i++) {
  let gagnant = combattre(creatures[i], creatures[i + 1]);
  if (gagnant) {
    console.log(`${creatures[i].nom} gagne contre ${creatures[i + 1].nom}`);
    resultats[gagnant.nom]++;
  } else {
    console.log(`${creatures[i].nom} et ${creatures[i + 1].nom} font égalité`);
  }
}

console.log("\nRésultats :", resultats);
