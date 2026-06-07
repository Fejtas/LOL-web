# League of Legends: Průvodce světem Runeterry

**Předmět:** Webové technologie (2. ročník)  
**Autor:** Jiří Fejtek  
**Živý web (Deployment):** [https://fejtas.github.io/LOL-web/](https://fejtas.github.io/LOL-web/)  
**Termín odevzdání:** 7. červen 2026  

---

## 📄 Úvod

Tento projekt vznikl jako ročníková práce v rámci předmětu Webové technologie pro 2. ročník. Cílem bylo vytvořit komplexní, plně optimalizovanou a moderní webovou prezentaci na libovolné téma s využitím čistých technologií a bez použití jakýchkoliv externích CSS nebo JS frameworků (jako jsou React, Vue, Angular, Bootstrap či Tailwind CSS). Hlavním záměrem projektu je prokázat hlubokou znalost vývoje "pod kapotou" (under the hood).

Jako téma byla zvolena celosvětově úspěšná hra **League of Legends**, konkrétně interaktivní průvodce světem Runeterry, jejími šampiony a regiony. Součástí webu je responzivní navigace, pokročilé vizuální animace a interaktivní vestavěná minihra. Celé řešení striktně splňuje přísné standardy v oblastech optimalizace výkonu, přístupnosti (WCAG), SEO a integrace sociálních sítí.

---

## 🛠️ Použité technologie & Vývojové prostředí

* **HTML5:** Sémantické tagování struktury dokumentu podle nejnovějších specifikací W3C.
* **CSS3:** Flexbox a CSS Grid pro moderní rozvržení prvků, CSS custom variables (proměnné), klíčové animace (`@keyframes`) a responzivní Media Queries.
* **Vanilla JavaScript (ES6+):** Moderní skriptování bez externích knihoven (asynchronní časovače, manipulace s DOM, API `IntersectionObserver`).
* **Vývojové prostředí (IDE):** Visual Studio Code (verze 1.90+).
* **Použitá rozšíření:** *Live Server* (pro simulaci lokálního webového serveru na protokolu `http://`, čímž se eliminují CORS restrikce u lokálních skriptů).
* **AI Nástroje:** Využití velkých jazykových modelů pro generování textového obsahu, návrh bezpečné architektury částicového systému a konzultace UI/UX.

---

## 📁 Adresářová struktura

Projekt udržuje striktní a přehledné rozdělení produkčních souborů. V zájmu optimalizace výkonu byly CSS proměnné sloučeny přímo do hlavního stylopisu, aby se snížil počet HTTP požadavků:

```text
LOL-web/
│
├── index.html          # Hlavní sémantický HTML5 dokument stránky
├── robots.txt          # Instrukce pro vyhledávací roboty a odkaz na sitemapu
├── sitemap.xml         # XML mapa stránek pro indexaci vyhledávači
├── README.md           # Tato vyčerpávající technická dokumentace projektu
│
├── css/
│   └── style.css       # Kompletní stylopis (obsahuje :root proměnné, layouty i animace)
│
├── js/
│   └── main.js         # Aplikační logika (hamburger menu, scroll reveal, efekty, minihra)
│
└── assets/
    └── img/            # Složka pro optimalizované grafické podklady
        ├── lol-logo.png # Logo hry v hlavičce
        ├── jinx.webp    # Vertikální splash art šampiona
        ├── yasuo.webp   # Vertikální splash art šampiona
        ├── ahri.webp    # Vertikální splash art šampiona
        ├── demacia.webp # Horizontální scenérie regionu
        ├── noxus.webp   # Horizontální scenérie regionu
        └── teemo.webp   # Grafický podklad pro vestavěnou minihru

AI Deník: Tvorba webu a spolupráce s umělou inteligencí
Během vývoje tohoto projektu byla jako technický asistent a konzultant využita umělá inteligence (Google Gemini). Níže je uveden seznam klíčových promptů a konkrétní popis toho, co AI do projektu přinesla a jak pomohla splnit technické specifikace zadání:

Prompt: "Vybereme téma udělal bych to na téma league of legends"

Přínos AI: Návrh základní sémantické HTML5 struktury a okamžité vyřešení SEO (meta tagy) a Open Graph protokolů. AI také vygenerovala základní sadu CSS proměnných inspirovaných oficiálním designovým manuálem hry (barevná paleta Hextech).

Prompt: "Muzu to dat do stejneho csska?" (Při dotazu na sloučení variables.css a style.css)

Přínos AI: Odborná konzultace ohledně optimalizace výkonu (Performance). AI potvrdila a doporučila sloučení obou souborů, čímž se reálně snížil počet HTTP požadavků při načítání stránky. Tento krok měl přímý pozitivní dopad na skóre v Google Lighthouse.

Prompt: "Co s tim" (Doplněno o screenshot chyb ERR_FILE_NOT_FOUND a CORS v konzoli prohlížeče)

Přínos AI: Debugování kódu a vysvětlení bezpečnostních restrikcí moderních prohlížečů (problém protokolu file:///). AI mě krok za krokem navedla k instalaci a spuštění rozšíření Live Server ve VS Code, čímž byl zároveň splněn bod zadání týkající se správného lokálního zprovoznění.

Prompt: "Pomuzes mi z tema obrazkama" a "Nefunguje mi to" (Při nasazování grafiky do Gridu)

Přínos AI: Asistence s formáty obrázků a řešení chybějících souborů. AI pomohla odhalit chyby v relativních cestách a nesoulad mezi reálnou příponou souboru na disku (např. .png) a očekávaným formátem .webp v kódu, čímž zajistila správné vykreslení rozvržení stránky.

Prompt: "Jeste bych udelal nejake efekty jako treba padajici spely"

Přínos AI: Návrh a implementace pokročilého částicového systému na pozadí pomocí Vanilla JS a čistého CSS. AI vyřešila dva kritické problémy: správu paměti (aby se web nesekal, JS automaticky odstraňuje spelly z DOMu po jejich dopadu) a Přístupnost (animace se automaticky skryjí přes @media (prefers-reduced-motion) pro uživatele s citlivostí na pohyb).

Prompt: "Nezkusime tam udelat treba jeste nejakou mensi minihru" a "Dáme tam nejakou kdyz nedokazes vcas dostat vsechny a jinou kdyz to dokazes?"

Přínos AI: Kompletní asistence při programování interaktivní minihry "Ulov Teema" čistě v JavaScriptu (bez knihoven). AI navrhla herní smyčku, časovač, logiku výhry/prohry a implementovala pokročilé ARIA atributy (aria-live="polite" a aria-live="assertive"), aby čtečky obrazovky dokázaly nevidomým hráčům správně hlásit skóre a výsledek hry.
