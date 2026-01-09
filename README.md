# Søkesnirk

PWA for å bygge avanserte søkestrenger med operatorer for ulike søkeplattformer.

## Funksjoner

- Bygg søkestrenger med plattformspesifikke operatorer
- Støtte for flere plattformer: Google, GitHub, Scholar, PubMed, Nasjonalbiblioteket, Wayback Machine, Shodan
- Kopier ferdig søkestreng til utklippstavlen
- Tooltips med forklaring på hver operator
- Responsivt design
- Fungerer offline (PWA)

## Installasjon

```bash
npm install
npm run dev
```

## Bruk

1. Velg plattform fra menyen
2. Fyll inn verdier i operatorfeltene
3. Se søkestrengen bygges i sanntid
4. Kopier søkestrengen og lim inn i valgt søkemotor

## Plattformer

| Kategori | Plattformer |
|----------|-------------|
| Søkemotorer | Google |
| Kode | GitHub |
| Akademisk | Google Scholar, PubMed |
| Arkiver | Nasjonalbiblioteket, Wayback Machine |
| Sikkerhet | Shodan |

## Teknologi

- React 19
- TypeScript
- Vite
- CSS Modules
- Service Worker for offline-støtte

## Lisens

MIT
