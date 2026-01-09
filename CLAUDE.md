# Søkesnirk

PWA for å bygge søkestrenger med avanserte operatorer for ulike plattformer.

## Teknisk stack

- React 19 med TypeScript
- Vite 7
- CSS Modules
- PWA med Service Worker

## Kommandoer

```bash
npm run dev      # Start utviklingsserver
npm run build    # Produksjonsbuild
npm run lint     # Kjør ESLint
npm run preview  # Forhåndsvis build
```

## Prosjektstruktur

```
src/
├── components/
│   ├── Layout/          # Header, meny, layout
│   ├── QueryBuilder/    # Hovedfunksjonalitet
│   └── ui/              # Gjenbrukbare komponenter
├── data/
│   ├── operators.ts     # Operatorer per plattform
│   └── platforms.ts     # Plattformkonfigurasjon
├── hooks/               # Custom hooks
├── pages/               # Sidekomponenter
├── styles/              # Global CSS
└── types/               # TypeScript-typer
```

## Plattformer

Støtter operatorer for:
- Google (søkemotor)
- GitHub (kode)
- Google Scholar, PubMed (akademisk)
- Nasjonalbiblioteket, Wayback Machine (arkiver)
- Shodan (sikkerhet)

## Konvensjoner

- Norsk UI-tekst
- Ingen eksterne ikonbibliotek (egne SVG-ikoner i Icons.tsx)
- Floating label-mønster i skjemafelt
- Tooltip med hover-delay på operatorfelt
