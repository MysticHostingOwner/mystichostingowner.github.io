// Authentication redirect using sessionStorage
if (!window.location.href.includes('login.html')) {
    if (sessionStorage.getItem('user') !== 'Shadow') {
        window.location.href = 'login.html';
    }
}

// Dropdown
function toggleDropdown() {
    const d = document.getElementById('account-dropdown');
    d.style.display = d.style.display === 'block' ? 'none' : 'block';
}
function changePassword() {
    alert('Change password not implemented');
}
function logout() {
    const page = document.getElementById('page-content');
    page.classList.add('slide-down');
    page.addEventListener('transitionend', () => {
        sessionStorage.removeItem('user');
        window.location.href = 'login.html';
    }, { once: true });
}

// Navigation slide
const order = ['home.html', 'whitelist.html', 'console.html'];
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const current = window.location.pathname.split('/').pop();
        const page = document.getElementById('page-content');
        page.classList.add(order.indexOf(target) > order.indexOf(current) ? 'slide-left' : 'slide-right');
        page.addEventListener('transitionend', () => { window.location.href = target; }, { once: true });
    });
});

// Slide in effect on page load
window.addEventListener('load', () => {
    const page = document.getElementById('page-content');
    const ref = document.referrer.split('/').pop();
    const current = window.location.pathname.split('/').pop();
    const refIndex = order.indexOf(ref);
    const currentIndex = order.indexOf(current);
    if (refIndex < currentIndex) page.classList.add('slide-in-right');
    else if (refIndex > currentIndex) page.classList.add('slide-in-left');
    else page.classList.add('slide-in-active');
    requestAnimationFrame(() => page.classList.add('slide-in-active'));
});
