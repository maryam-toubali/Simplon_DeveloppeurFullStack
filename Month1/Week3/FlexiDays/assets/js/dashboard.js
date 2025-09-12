// dashboard.js
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // employee daysOff
    const empRes = await axios.get(`${API_URL}/employees/1`);
    const emp = empRes.data;
    if (emp) {
      const soldeEl = document.getElementById('solde-conges');
      if (soldeEl) soldeEl.textContent = emp.daysOff ?? '--';
    }

    // requests for employee
    const reqs = (await axios.get(`${API_URL}/requests?employeeId=1&_sort=from&_order=desc`)).data;
    const enAttente = reqs.filter(r => r.status === 'En attente').length;
    const approuve = reqs.filter(r => r.status === 'Approuvé' || r.status === 'Approuve').length;
    document.getElementById('en-attente').textContent = enAttente;
    document.getElementById('approuvees').textContent = approuve;

    const recent = document.getElementById('recent-requests');
    recent.innerHTML = reqs.slice(0,5).map(r => `
      <div class="flex items-center justify-between border rounded p-3">
        <div>
          <div class="text-sm font-medium">${r.type}</div>
          <div class="text-xs text-slate-500">${r.from} → ${r.to}</div>
        </div>
        <div class="text-sm ${r.status === 'En attente' ? 'text-amber-600' : r.status === 'Approuvé' ? 'text-emerald-600' : 'text-red-600'}">${r.status}</div>
      </div>
    `).join('');

    // notifications
    const notifs = (await axios.get(`${API_URL}/notifications?_sort=id&_order=desc`)).data;
    const notifList = document.getElementById('notif-list');
    notifList.innerHTML = notifs.map(n => `<div class="text-sm text-slate-700">${n.message}</div>`).join('');

    // summary stats global
    const allReqs = (await axios.get(`${API_URL}/requests`)).data;
    const total = allReqs.length;
    const approved = allReqs.filter(r => r.status === 'Approuvé').length;
    const waiting = allReqs.filter(r => r.status === 'En attente').length;
    const summary = document.getElementById('summary-stats');
    if (summary) summary.textContent = `Total demandes: ${total} — Approuvées: ${approved} — En attente: ${waiting}`;
  } catch (err) {
    console.error('Erreur Dashboard', err);
  }
});
