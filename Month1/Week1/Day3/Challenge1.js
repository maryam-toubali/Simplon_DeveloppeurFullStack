let cles = 3;

for (let tentative = 1; tentative <= 10; tentative++) {
  if (tentative % 2 !== 0) {
    cles += 2;
    console.log(`Tentative ${tentative} : le joueur gagne 2 clés → total : ${cles}`);
  } else {
    cles -= 1;
    console.log(`Tentative ${tentative} : le joueur perd 1 clé → total : ${cles}`);
  }

  if (cles >= 10) {
    console.log(`🎉 Bravo, la porte s’est ouverte avec ${cles} clés !`);
    break;
  }
}

if (cles < 10) {
  console.log(`😢 Dommage, le joueur n’a pas réussi et il lui reste ${cles} clés.`);
}
