/* =========================
   SESSION AUTH (LOOP SAFE)
========================= */

(function () {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    const loggedIn = sessionStorage.getItem('user') === 'Shadow';

    // LOGIN PAGE
    if (page === 'login.html') {
        if (loggedIn) {
            window.location.replace('home.html');
        }
        return; // STOP EXECUTION
    }

    // INDEX PAGE (redirect to login)
    if (page === 'index.html' || page === '') {
        window.location.replace('login.html');
        return;
    }

    // ALL PROTECTED PAGES
    if (!loggedIn) {
        window.location.replace('login.html');
        return;
    }
})();

/* =========================
   ACCOUNT DROPDOWN
========================= */

function toggleDropdown() {
    const d = document.getElementById('account-dropdown');
    if (d) d.style.display = d.style.display === 'block' ? 'none' : 'block';
}

function logout() {
    sessionStorage.clear();
    window.location.replace('login.html');
}

/* =========================
   NAVIGATION (NO REDIRECTS)
========================= */

function go(page) {
    window.location.href = page;
}
