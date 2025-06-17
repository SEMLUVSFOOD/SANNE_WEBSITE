# Sanne Project – WordPress Custom Plugin & Front-End Tabs

## Over dit project

Voor Sanne heb ik een interactieve WordPress-plugin gebouwd, waarin je zelf makkelijk content kan beheren via de standaard WordPress editor. De plugin maakt gebruik van visuele elementen zoals sticky notes en schuivende tabbladen, geïnspireerd op haar papieren prototypes en schetsen.

De tabs werken met een **custom plugin** die content uit gewone WordPress-pagina’s ophaalt. Daardoor kan alles aangepast worden zonder technische kennis.

---

## Wat zit erin?

- 🎯 Tabs die van links of onder in beeld schuiven
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
```

> 🔗 De `slug` is de URL-slug van een bestaande WordPress-pagina. De plugin haalt automatisch de content op van die pagina.

---

## Installatie

1. Maak een `.zip` van de pluginmap met:
   - `sanne-project.php`
   - `script.js`
   - `styles.css`
   - Optioneel: `/fonts/` map met custom fonts

2. In WordPress:
   - Ga naar **Plugins > Nieuwe plugin > Plugin uploaden**
   - Upload de `.zip` en klik op **Activeren**

3. Voeg de gewenste shortcode(s) toe aan een pagina via de editor.

4. Zorg ervoor dat de pagina’s waar je de content uit wilt halen gepubliceerd zijn.

---

## Credits

**Ontwikkeling:** Sem Sannen  
**In opdracht van:** Sanne  
Design en features op basis van schetsen, papieren prototypes en feedback uit meerdere iteraties.

---
