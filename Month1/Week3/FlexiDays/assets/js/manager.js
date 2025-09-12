// manager.js
document.addEventListener('DOMContentLoaded', async () => {
  try {
    let all = (await axios.get(`${API_URL}/requests?_sort=from&_order=desc`)).data;
    const container = document.getElementById('liste-manager');
    const filterStatus = document.getElementById('filter-status');
    const filterEmployee = document.getElementById('filter-employee');
    const apply = document.getElementById('applyFilters');

    function render(list) {
      container.innerHTML = list.map(d => `
        <div id="m-${d.id}" class="border rounded p-4 bg-white card">
          <div class="flex items-start gap-3">
            <img src="assets/img/avatar.png" class="w-10 h-10 rounded-full" />
            <div class="flex-1">
              <div class="font-semibold">${d.employeeName} <span class="text-xs text-slate-400">#${d.employeeId}</span></div>
              <div class="text-sm text-slate-500">${d.type} — ${d.from} → ${d.to}</div>
            </div>
            <div class="text-sm ${d.status === 'En attente' ? 'text-amber-600' : d.status === 'Approuvé' ? 'text-emerald-600' : 'text-red-600'}">${d.status}</div>
          </div>
          <div class="mt-3 flex gap-2">
            ${d.status === 'En attente' ? `<button data-id="${d.id}" data-act="approve" class="actBtn px-3 py-1 bg-emerald-600 text-white rounded text-sm">Approuver</button>
            <button data-id="${d.id}" data-act="deny" class="actBtn px-3 py-1 bg-red-600 text-white rounded text-sm">Refuser</button>` : `<button class="px-3 py-1 border rounded text-sm">Voir</button>`}
          </div>
        </div>
      `).join('');

      // attach action handlers
      document.querySelectorAll('.actBtn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = e.currentTarget.getAttribute('data-id');
          const act = e.currentTarget.getAttribute('data-act');
          const newStatus = act === 'approve' ? 'Approuvé' : 'Refusé';
          if (!confirm(`Confirmer: ${newStatus} ?`)) return;
          try {
            await axios.patch(`${API_URL}/requests/${id}`, { status: newStatus });
            // update local list
            const item = all.find(x => x.id == id);
            if (item) item.status = newStatus;
            // reapply filters to refresh view
            apply.click();
          } catch (err) {
            console.error('Erreur updateStatut', err);
            alert('Impossible de changer le statut.');
          }
        });
      });
    }

    // initial render
    render(all);

    // filters handler
    apply.addEventListener('click', () => {
      const st = filterStatus.value;
      const emp = filterEmployee.value.trim().toLowerCase();
      const filtered = all.filter(d => {
        if (st && d.status !== st) return false;
        if (emp && !(d.employeeName || '').toLowerCase().includes(emp)) return false;
        return true;
      });
      render(filtered);
    });
  } catch (err) {
    console.error('Erreur Manager', err);
  }
});
