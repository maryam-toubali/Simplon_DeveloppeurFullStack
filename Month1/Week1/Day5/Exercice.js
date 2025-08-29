let personne = {
  nom: "Toubali",
  prenom: "Maryam",
  age: 27
};
console.log(personne);

personne.ville = "Casablanca";
console.log(personne);

personne.age = 30;
console.log(personne);

delete personne.prenom;
console.log(personne);

let etudiants = [
  { nom: "Ali", note: 12 },
  { nom: "Omar", note: 9 },
  { nom: "Lina", note: 15 }
];
console.log(etudiants);

etudiants.forEach(etudiant => console.log(etudiant.nom));

etudiants.forEach(etudiant => {
  if (etudiant.nom === "Ali") {
    etudiant.note += 5;
  }
});
console.log(etudiants);

etudiants.push({ nom: "Sara", note: 18 });
console.log(etudiants);

etudiants = etudiants.filter(etudiant => etudiant.nom !== "Omar");
console.log(etudiants);

const calculerMoyenne = (tab) => {
  let total = 0;
  tab.forEach(e => total += e.note);
  return total / tab.length;
};
console.log("Moyenne:", calculerMoyenne(etudiants));

const trouverEtudiant = (tab, nom) => tab.find(e => e.nom === nom);
console.log("Cherche Ali:", trouverEtudiant(etudiants, "Ali"));

const etudiantsAdmis = (tab) => tab.filter(e => e.note >= 10);
console.log("Admis:", etudiantsAdmis(etudiants));

const augmenterNotes = (tab, x) => tab.map(e => ({
  ...e,
  note: e.note + x
}));
console.log("Notes augmentées de 2:", augmenterNotes(etudiants, 2));

let annuaire = [
  { nom: "Ali", prenom: "Karim", tel: "0600000001" },
  { nom: "Sara", prenom: "Ben", tel: "0600000002" },
  { nom: "Omar", prenom: "Hassan", tel: "" }
];

annuaire.forEach(contact => console.log(contact.tel));

const mettreAJourTel = (nom, nouveauTel) => {
  let contact = annuaire.find(c => c.nom === nom);
  if (contact) {
    contact.tel = nouveauTel;
  }
};
mettreAJourTel("Omar", "0600000003");
console.log(annuaire);

annuaire = annuaire.filter(c => c.tel && c.tel.trim() !== "");
console.log("Annuaire nettoyé:", annuaire);
