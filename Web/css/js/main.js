// Počkáme, až se plně načte HTML dokument
document.addEventListener('DOMContentLoaded', () => {
    
    // Vybereme naše prvky
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('primary-navigation');

    // Posluchač události na kliknutí
    menuToggle.addEventListener('click', () => {
        // Zjistíme současný stav (Přístupnost)
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Přepneme hodnotu pro čtečky obrazovky
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Přepneme třídy pro vizuální změnu (zobrazení menu a animaci burgeru)
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

});