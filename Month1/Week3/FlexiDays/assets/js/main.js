// main.js - global functions (navbar/aside data + footer dynamic if page != dashboard)
const API_URL = "http://localhost:3000";

async function loadGlobal() {
  try {
    // employee basic info
    const empRes = await axios.get(`${API_URL}/employees/1`);
    const emp = empRes.data;
    if (emp) {
      const nameEl = document.getElementById('user-name');
      const roleEl = document.getElementById('user-role');
      if (nameEl) nameEl.textContent = emp.name;
      if (roleEl) roleEl.textContent = emp.role || 'Employé';
    }
    // settings
    const sRes = await axios.get(`${API_URL}/settings`);
    const s = sRes.data;
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

// loadFooter: only insert footer on non-dashboard pages
async function loadFooterDynamic() {
  // If path is index.html or root, skip footer
  const path = window.location.pathname;
  if (path.endsWith('/') || path.includes('index.html')) return;
  const footerEl = document.getElementById('footer');
  if (!footerEl) return;
  try {
    const res = await axios.get(`${API_URL}/settings`);
    const s = res.data;
    footerEl.innerHTML = `
      <footer class="bg-gray-900 text-gray-300 py-10 mt-10">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 footer-grid">
          <div>
            <h3 class="text-white font-bold mb-4">À propos</h3>
            <p class="text-sm">FlexiDays aide les employés et RH à gérer les congés facilement.</p>
          </div>
          <div>
            <h3 class="text-white font-bold mb-4">Accès rapide</h3>
            <ul class="space-y-2">
              <li><a href="mes-conges.html" class="">Mes congés</a></li>
              <li><a href="manager.html" class="">Administration</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-bold mb-4">Réseaux sociaux</h3>
            <ul class="flex gap-4">
              <li><a href="#" class="">Facebook</a></li>
              <li><a href="#" class="">Twitter</a></li>
              <li><a href="#" class="">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-bold mb-4">Contact</h3>
            <p class="text-sm">📧 ${s.rh_email}</p>
            <p class="text-sm">📍 ${s.company_address}</p>
          </div>
        </div>
        <div class="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
          © 2025 FlexiDays. Tous droits réservés.
        </div>
      </footer>
    `;
  } catch (err) {
    console.error('Erreur chargement footer', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadGlobal();
  loadFooterDynamic();

  // mobile aside toggle (simple)
  const btn = document.getElementById('mobileMenuBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const aside = document.querySelector('aside');
      if (!aside) return;
      aside.classList.toggle('hidden');
    });
  }

  // highlight active link in sidebar
  const links = document.querySelectorAll('aside a');
  links.forEach(a => {
    if (a.href === window.location.href || window.location.pathname.includes(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
});
