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
