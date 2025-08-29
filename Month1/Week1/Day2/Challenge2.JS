let fontaine = 0;
let personnes = parseInt(prompt("Combien de personnes vont jeter une pièce ?"));

for (let i = 1; i <= personnes; i++) {
  fontaine += 1;
  fontaine *= 2;
  if (fontaine % 7 === 0) {
    fontaine = Math.floor(fontaine / 2);
  }
  console.log("Après la personne " + i + ", la fontaine contient " + fontaine + " pièces.");
}

console.log("Total final de pièces dans la fontaine : " + fontaine);
