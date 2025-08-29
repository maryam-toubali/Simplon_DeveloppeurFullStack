let noms = ["Thor", "Athena", "Hercule"];

let heros = noms.map(nom => {
  return {
    nom: nom,
    force: Math.round(Math.random() * 10) + 1,  // force entre 1 et 11
    vie: Math.round(Math.random() * 30) + 20    // vie entre 20 et 50
  };
});

console.log("Voici les héros au départ :", heros);

function combat(hero1, hero2) {
  console.log(`\nCombat entre ${hero1.nom} et ${hero2.nom} !`);
  while (hero1.vie > 0 && hero2.vie > 0) {
    hero2.vie -= hero1.force;
    hero1.vie -= hero2.force;
    console.log(`${hero1.nom} (vie: ${hero1.vie}) vs ${hero2.nom} (vie: ${hero2.vie})`);
  }

  if (hero1.vie > 0) {
    console.log(`${hero1.nom} gagne avec ${hero1.vie} points de vie restants !`);
    return hero1;
  } else {
    console.log(`${hero2.nom} gagne avec ${hero2.vie} points de vie restants !`);
    return hero2;
  }
}

let champion = heros[0];
for (let i = 1; i < heros.length; i++) {
  champion = combat(champion, heros[i]);
}

console.log(`\nLe grand champion est ${champion.nom} avec ${champion.vie} points de vie !`);
