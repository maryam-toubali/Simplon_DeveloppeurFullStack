//1
let produits = [
  { nom: "Laptop", stock: 5, disponible() { return this.stock > 0 ? "En stock" : "Rupture"; } },
  { nom: "Téléphone", stock: 0, disponible() { return this.stock > 0 ? "En stock" : "Rupture"; } },
  { nom: "Tablette", stock: 3, disponible() { return this.stock > 0 ? "En stock" : "Rupture"; } }
];

produits.forEach(produit => {
  console.log(`${produit.nom} : ${produit.disponible()}`);
});
