# Foodtruckheaven.com

Statisk sida för foodtrucks i Sverige och Norge. Ingen byggsteg. Ingen egen domän är kopplad.

## Öppna

Publicerad på GitHub Pages:

https://jonathan67-1337.github.io/foodtruckheaven/

Lokalt:

```bash
cd /workspace/foodtruckheaven
python3 -m http.server 8766
```

Gå sedan till http://127.0.0.1:8766/ och stäng servern efteråt.

## Så funkar den

Startsidan har två knappar längst upp: **Foodtruck** (den som äger trucken) och **Besökare** / **Besøkere** (den som vill äta). Under dem ligger kartan för landet besökaren är i. Sverige ger svensk text, Norge ger norsk bokmål. Landet kan bytas uppe till höger.

Land gissas via ipwho.is, sedan språk eller tidszon. Misslyckas det visas Sverige.

Exempeltruckar är påhittade och finns inbakade så kartan inte är tom. En truck som läggs in sparas i webbläsarens localStorage och syns bara där, inte för andra besökare. Det finns ingen server att spara mot.

Ägaren anger namn, valfri bild, plats i ord, en punkt på kartan, och antingen en dag eller upp till 45 dagar framåt, plus öppettider.

Kartan är Leaflet med OpenStreetMap.

## Filer

- `index.html` — sidan
- `styles.css` — utseende
- `script.js` — karta, land och formulär
- `favicon.svg` — ikon
- `README.md` — den här filen
