# 🌐 FlexiDays

FlexiDays est une application web de gestion des congés conçue pour les employés et les managers.
Elle permet de visualiser, demander et gérer facilement les jours de congés.

---

## Fonctionnalités

- **Dashboard**
  - Solde de congés restant
  - Résumé des demandes (approuvées, en attente, refusées)
  - Notifications importantes (carousel)

- **Mes congés**
  - Liste des demandes avec statut
  - Boutons pour modifier ou annuler si autorisé

- **Demande de congé**
  - Formulaire (dates, type, justification)
  - Validation et envoi simulé

- **Administration**
  - Aperçu global des demandes de tous les employés
  - Actions : approuver ou refuser
  - Statistiques récapitulatives

---

## Technologies utilisées

- **HTML5** → structure sémantique
- **CSS3 / TailwindCSS** → mise en page responsive
- **Bootstrap 5** (optionnel) → pour composants réutilisables
- **JavaScript (main.js)** → interactions simples

---

## Structure du projet

flexidays/
│
├── index.html → Dashboard
├── mes-conges.html → Mes congés
├── demande-conge.html → Nouvelle demande
├── administration.html → Gestion RH
│
├── components/ → Navbar + Footer
├── assets/css/style.css → Styles personnalisés
├── assets/js/main.js → Interactions JS
└── assets/img/ → Logos, avatars, icônes