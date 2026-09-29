# Foodtruckheaven.com

Statisk sida för foodtrucks i Sverige och Norge. Ingen byggsteg. Ingen egen domän är kopplad. Inga påhittade trucks.

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

Startsidan har två knappar längst upp: **Foodtruck** och **Besökare** (på norska: **Besøkere**). Under dem ligger kartan för landet besökaren är i. Sverige ger svensk text, Norge ger norsk bokmål. Landet kan bytas uppe till höger.

Land gissas via ipwho.is, sedan språk eller tidszon. Misslyckas det visas Sverige.

Kartan är tom tills någon lägger in en truck. En inlagd truck sparas i webbläsarens localStorage och syns bara där, inte för andra besökare. Texten i `text/sv.md` beskriver hur det ska fungera när en truck är inlagd: namn, bilder, plats och öppettider, inget annat.

Ägaren anger namn, valfri bild, plats i ord, en punkt på kartan, och antingen en dag eller upp till 45 dagar framåt, plus öppettider.

Kartan är Leaflet med OpenStreetMap.

## Filer

- `index.html` — sidan
- `styles.css` — utseende
- `script.js` — karta, land och formulär
- `text/sv.md` — svensk text, utan påhittade trucks
- `favicon.svg` — ikon
- `README.md` — den här filen
