/* Main JS */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme Toggle
    const themeToggles = document.querySelectorAll('.theme-toggle'); // Select all toggles (desktop & mobile)
    const body = document.body;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcons(newTheme);
        });
    });

    function updateIcons(theme) {
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (!icon) return;

            if (theme === 'dark') {
                icon.classList.remove('bi-moon-stars');
                icon.classList.add('bi-sun');
            } else {
                icon.classList.remove('bi-sun');
                icon.classList.add('bi-moon-stars');
            }
        });
    }

    // 2. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            if (backToTopBtn) backToTopBtn.style.display = 'block';
        } else {
            if (backToTopBtn) backToTopBtn.style.display = 'none';
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Active Link Highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});
