// Toggle del menú hamburguesa
const menuToggle = document.querySelector('#menu-toggle');
const nav = document.querySelector('#primary-nav');
const icon = document.querySelector('#hamburger-icon');

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    icon.textContent = isOpen ? '✕' : '☰';
});

// Año y fecha dinámicos en el footer
document.querySelector('#currentyear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;