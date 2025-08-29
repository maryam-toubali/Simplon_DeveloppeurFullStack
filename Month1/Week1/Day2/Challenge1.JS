let orVoyageur = 100;
let joursVoyage = parseInt(prompt("Combien de jours le voyageur souhaite-t-il voyager ?"));

for (let jour = 1; jour <= joursVoyage; jour++) {
  console.log("Jour " + jour + " :");
  if (jour % 2 === 1) {
    if (orVoyageur >= 3) {
      orVoyageur -= 3;
    } else {
      console.log("Le voyageur n'a pas assez d'or. Il est expulsé !");
      console.log("Il a survécu " + (jour - 1) + " jours.");
      break;
    }
  } else {
    let taxe = Math.floor(orVoyageur / 2);
    orVoyageur -= taxe;
  }
  console.log("Il reste " + orVoyageur + " pièces d'or.");
}

if (orVoyageur > 0) {
  console.log("Le voyageur a terminé son voyage avec " + orVoyageur + " pièces d'or.");
}
