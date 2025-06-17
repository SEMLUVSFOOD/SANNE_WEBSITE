# Sanne Project – WordPress Custom Plugin & Front-End Tabs

## Over dit project

Voor Sanne is een interactieve WordPress-site gebouwd, waarin zij zelf makkelijk content kan beheren via de standaard WordPress editor. De site maakt gebruik van visuele elementen zoals sticky notes en schuivende tabbladen, geïnspireerd op haar papieren prototypes en schetsen.

De tabs werken met een **custom plugin** die content uit gewone WordPress-pagina’s ophaalt. Daardoor kan alles aangepast worden zonder technische kennis.

---

## Wat zit erin?

- 🎯 Tabs die van links, rechts of onder in beeld schuiven
- 🧠 Sticky notes met typ-effect bij hover
- 📄 Content volledig beheerbaar vanuit de WP admin (tekst, afbeeldingen, tabellen, etc.)
- 🌍 NL/EN switch mogelijk (werkt o.a. met GTranslate)
- 📱 Werkt ook goed op mobiel
- 🎨 Projecten hebben kleurcodes en een speelse skeuomorfe stijl

---

## Pluginstructuur

### Pluginbestand: `sanne-project.php`

Deze plugin:

- Laadt de JS (`script.js`) en CSS (`styles.css`)
- Registreert shortcodes voor het toevoegen van tabs

### Shortcodes

Gebruik de volgende shortcodes om tabs aan je pagina toe te voegen:

```php
[sanne_tab slug="slug-van-de-pagina"]        // Tab onderaan
[sanne_tab_left slug="slug-van-de-pagina"]   // Linker tab
[sanne_tab_left_secondary slug="slug"]       // Tweede linker tab (optioneel)
