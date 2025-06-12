/* Menu fixo */
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (!toggleButton || !menu) {
        console.warn('Elementos do menu não encontrados! Verifique as classes no HTML.');
        return;
    }

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    const menuItems = document.querySelectorAll('.menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
});