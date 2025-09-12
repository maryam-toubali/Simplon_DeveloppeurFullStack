// demande.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-demande');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const justification = document.getElementById('justification').value;

    if (!type || !from || !to) {
      alert('Remplissez tous les champs requis.');
      return;
    }

    try {
      const payload = {
        employeeId: 1,
        employeeName: 'Salma Hardacré',
        type, from, to, justification,
        status: 'En attente'
      };
      await axios.post(`${API_URL}/requests`, payload);
      alert('Demande envoyée !');
      window.location.href = 'mes-conges.html';
    } catch (err) {
      console.error('Erreur envoi demande', err);
      alert('Impossible d’envoyer la demande.');
    }
  });
});
