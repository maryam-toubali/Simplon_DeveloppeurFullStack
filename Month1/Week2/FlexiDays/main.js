// main.js
// API_URL est défini inline dans chaque HTML file before script include
async function loadGlobal() {
  try {
    // employee basic
    const empRes = await axios.get(`${API_URL}/employees/1`);
    const emp = empRes.data;
    if (emp) {
      const nameEl = document.getElementById('user-name');
      const roleEl = document.getElementById('user-role');
      if (nameEl) nameEl.textContent = emp.name;
      if (roleEl) roleEl.textContent = emp.role || 'Employé';
    }

    // settings (footer / aside)
    const s = (await axios.get(`${API_URL}/settings`)).data;
    if (s) {
      const a = document.getElementById('company-address');
      const b = document.getElementById('rh-email');
      const a2 = document.getElementById('company-address2');
      const b2 = document.getElementById('rh-email2');
      if (a) a.textContent = s.company_address;
      if (b) b.textContent = `📧 ${s.rh_email}`;
      if (a2) a2.textContent = s.company_address;
      if (b2) b2.textContent = `📧 ${s.rh_email}`;
    }
  } catch (err) {
    console.error('Erreur loadGlobal', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadGlobal();

  // mobile menu toggle (very simple)
  const btn = document.getElementById('mobileMenuBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const aside = document.querySelector('aside');
      if (!aside) return;
      aside.classList.toggle('hidden');
    });
  }
});
