//1
let noms = [];
console.log(`Départ : ${noms}`);

noms.push("Youssef");
console.log(`Après ajout : ${noms}`);

noms.push("Khadija", "Rachid");
console.log(`Après autres ajouts : ${noms}`);

noms.pop();
console.log(`Après suppression du dernier : ${noms}`);

//2
let personnes = ["Fatima", "Omar", "Samir"];
console.log(`Départ : ${personnes}`);

personnes.unshift("Amina");
console.log(`Après ajout au début : ${personnes}`);

personnes.shift();
console.log(`Après suppression du premier : ${personnes}`);

//3
let nombres = [1, 2, 3, 4, 5];
let doubles = nombres.map(n => n * 2);
console.log(`Nombres doublés : ${doubles}`);

//4
let valeurs = [10, 15, 20, 25, 30];
let sup20 = valeurs.filter(n => n > 20);
console.log(`Supérieurs à 20 : ${sup20}`);

//5
let fruits = ["pomme", "orange", "figue", "dattes"];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));

//6
let liste = [5, 10, 15, 20];
let somme = liste.reduce((acc, n) => acc + n, 0);
console.log(`Somme totale : ${somme}`);

//7
let amis = ["Hicham", "Naima", "Said", "Latifa"];
amis.splice(2, 1, "Hamza");
console.log(`Après remplacement : ${amis}`);

//8
let suite = [1, 2, 3, 4, 5, 6];
let extrait = suite.slice(2, 5);
console.log(`Extrait : ${extrait}`);

//9
let fruits2 = ["grenade", "orange", "dattes"];

if (fruits2.includes("dattes")) {
  console.log("Dattes est dans le tableau ✅");
} else {
  console.log("Dattes n'est pas dans le tableau ❌");
}
