# Nelpify – portfolio- en verkoopwebsite voor een Shopify freelancer

Statische one-pagesite (HTML/CSS/JS, geen build nodig). Open `index.html` in je browser of host de map bij Netlify, Vercel, GitHub Pages of Cloudflare Pages.

## Aanpassen vóór livegang

Zoek in de bestanden naar deze plekken:

| Wat | Waar |
|---|---|
| Merknaam/logo | `index.html` (`Nelpify`, `.logo__mark`) |
| E-mailadres | `index.html` (`hallo@jouwdomein.nl`) en `FORM_EMAIL` in `script.js` |
| Formulier-endpoint (Formspree/Getform e.d.) | `FORM_ENDPOINT` in `script.js` (leeg = mailto-fallback) |
| Voorbeeldcijfers in de hero (`+38%`, `0,9s`) | `index.html` – vervang door eigen, aantoonbare cijfers |
| Portfolio-cases | sectie `#werk`; vervang de gradient-vlakken (`.c1`–`.c3` in `styles.css`) door screenshots |
| Reviews | sectie `#reviews` – **alleen echte reviews plaatsen** |
| Prijzen/pakketten | sectie `#pakketten` |
| KvK/BTW | footer |
| Kleuren | CSS-variabelen bovenaan `styles.css` |

Tip: voeg later een `og:image`, Google Analytics en een privacyverklaring/algemene voorwaarden toe.
