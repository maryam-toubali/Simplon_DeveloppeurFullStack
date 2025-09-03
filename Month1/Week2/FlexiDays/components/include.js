function loadHTML(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error('Erreur chargement:', err));
}

// Charger navbar et footer
loadHTML('navbar', 'components/navbar.html');
loadHTML('footer', 'components/footer.html');
