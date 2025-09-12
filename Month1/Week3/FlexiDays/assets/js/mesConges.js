// mesConges.js
document.addEventListener('DOMContentLoaded', async () => {
  try {
    let demandes = (await axios.get(`${API_URL}/requests?employeeId=1&_sort=from&_order=desc`)).data;
    const container = document.getElementById('liste-demandes');
    if (!container) return;

    function render() {
      container.innerHTML = demandes.map(d => `
        <div id="req-${d.id}" class="flex items-center justify-between border rounded p-3 card">
          <div>
            <div class="font-medium">${d.type}</div>
            <div class="text-xs text-slate-500">${d.from} → ${d.to}</div>
            <div class="text-xs text-slate-400">${d.justification || ''}</div>
          </div>
          <div class="flex flex-col items-end gap-2">
            <div class="${d.status === 'En attente' ? 'text-amber-600' : d.status === 'Approuvé' ? 'text-emerald-600' : 'text-red-600'}">${d.status}</div>
            ${d.status === 'En attente' ? `<button data-id="${d.id}" class="annulerBtn px-3 py-1 bg-red-600 text-white rounded text-sm">Annuler</button>` : ''}
          </div>
        </div>
      `).join('');

      // attach handlers
      document.querySelectorAll('.annulerBtn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          if (!confirm('Confirmer l’annulation ?')) return;
          try {
            await axios.delete(`${API_URL}/requests/${id}`);
            // update local array and DOM
            demandes = demandes.filter(x => x.id != id);
            const el = document.getElementById(`req-${id}`);
            if (el) el.remove();
          } catch (err) {
            console.error('Erreur annulation', err);
            alert('Impossible d’annuler, réessayez.');
          }
        });
      });
    }

    render();

    // recap
    const recap = document.getElementById('recap-stats');
    if (recap) {
      const enAttente = demandes.filter(d => d.status === 'En attente').length;
      const appr = demandes.filter(d => d.status === 'Approuvé').length;
      recap.innerHTML = `Solde restant: <strong id="solde-inline">--</strong><br>Approuvés: ${appr} — En attente: ${enAttente}`;
      const emp = (await axios.get(`${API_URL}/employees/1`)).data;
      if (emp) document.getElementById('solde-inline').textContent = emp.daysOff;
    }
  } catch (err) {
    console.error('Erreur Mes Congés', err);
  }
});
