// Počkáme, až se plně načte HTML dokument
document.addEventListener('DOMContentLoaded', () => {
    
// --- Minihra: Ulov Teema ---
    const bushes = document.querySelectorAll('.bush');
    const teemos = document.querySelectorAll('.teemo');
    const scoreDisplay = document.getElementById('score');
    const timeDisplay = document.getElementById('time');
    const startBtn = document.getElementById('startGame');
    const messageDisplay = document.getElementById('game-message');
    
    // Pojistka: pokud na stránce není minihra, zbytek kódu se přeskočí
    if (!startBtn) return;

    const WIN_SCORE = 10; 
    let lastBush;
    let timeUp = false;
    let score = 0;
    let countdown;

    // Funkce pro generování náhodného času
    function randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    // Funkce pro výběr náhodného křoví
    function randomBush(bushes) {
        const idx = Math.floor(Math.random() * bushes.length);
        const bush = bushes[idx];
        if (bush === lastBush) return randomBush(bushes);
        lastBush = bush;
        return bush;
    }

    // Funkce pro vyskočení a schování Teema
    function peep() {
        const time = randomTime(500, 1000); // Rychlost vyskakování
        const bush = randomBush(bushes);
        const teemo = bush.querySelector('.teemo');
        
        teemo.classList.add('up');
        
        setTimeout(() => {
            teemo.classList.remove('up');
            if (!timeUp) peep();
        }, time);
    }

    // Funkce pro spuštění hry
    function startGame() {
        scoreDisplay.textContent = 0;
        score = 0;
        timeUp = false;
        let timeLeft = 15;
        timeDisplay.textContent = timeLeft;
        startBtn.disabled = true;
        
        messageDisplay.textContent = `Cíl: Ulov alespoň ${WIN_SCORE} Teemů!`;
        messageDisplay.className = 'game-message'; 
        
        peep(); 
        
        countdown = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(countdown);
                timeUp = true;
                startBtn.disabled = false;
                startBtn.textContent = 'Hrát znovu';

                if (score >= WIN_SCORE) {
                    messageDisplay.textContent = `VÍTĚZSTVÍ! Ulovil jsi jich ${score}. Runeterra je v bezpečí!`;
                    messageDisplay.classList.add('message-win');
                } else {
                    messageDisplay.textContent = `PROHRA! Ulovil jsi jich jen ${score}. Teemo tě oslepil!`;
                    messageDisplay.classList.add('message-lose');
                }
            }
        }, 1000);
    }

    // Funkce pro zasažení Teema
    function whack(e) {
        if (!e.isTrusted) return; // Ochrana proti podvádění přes konzoli
        score++;
        this.classList.remove('up'); // Teemo se schová
        scoreDisplay.textContent = score;
    }

    // Napojení událostí (Tohle ti tam chybělo úplně!)
    teemos.forEach(teemo => teemo.addEventListener('click', whack));
    startBtn.addEventListener('click', startGame);

    // Nastavení pozorovatele
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Pokud prvek vstoupí do viditelné části obrazovky (viewportu)
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Přidá třídu pro zobrazení
                observer.unobserve(entry.target);     // Přestane prvek sledovat (animace proběhne jen jednou)
            }
        });
    }, 
    {
        root: null,
        threshold: 0.15, // Efekt se spustí, když je vidět alespoň 15 % prvku
        rootMargin: "0px"
    });

    // Spuštění pozorovatele pro všechny prvky s třídou .reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
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
// --- Padající Magie (Optimalizovaný Particle System) ---
    function createSpark() {
        // Kontrola přístupnosti: Pokud má uživatel vypnuté animace, JS nic negeneruje (šetříme výkon)
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const container = document.getElementById('magic-sparks');
        if (!container) return; // Pojistka

        const spark = document.createElement('div');
        spark.classList.add('spark');

        // Náhodná pozice zleva (0% až 100% šířky obrazovky)
        spark.style.left = Math.random() * 100 + 'vw';
        
        // Náhodná délka pádu (od 2 do 5 sekund), ať každá letí jinak rychle
        const duration = Math.random() * 3 + 2;
        spark.style.animationDuration = duration + 's';

        container.appendChild(spark);

        // VÝKON: Odstranění elementu z HTML, jakmile dopadne (Garbage Collection)
        setTimeout(() => {
            spark.remove();
        }, duration * 1000);
    }

    // Vytvoříme novou jiskru každých 300 milisekund
    setInterval(createSpark,200);