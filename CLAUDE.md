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
│   ├── operators/       # Operatorer per plattform (én fil per plattform)
│   └── platforms.ts     # Plattformkonfigurasjon
├── hooks/               # Custom hooks
├── pages/               # Sidekomponenter
├── styles/              # Global CSS
└── types/               # TypeScript-typer
```

## Plattformer og Query Languages

Organisert etter query language:
- Boolean: PubMed
- CQL: Confluence
- Google Dorks: Google, Google Scholar
- JQL: Jira
- KQL: Azure Monitor
- Lucene: Nasjonalbiblioteket, GitHub
- Shodan: Shodan
- URL-basert: Wayback Machine

## Konvensjoner

- Norsk UI-tekst
- Ingen eksterne ikonbibliotek (egne SVG-ikoner i Icons.tsx)
- Floating label-mønster i skjemafelt
- Tooltip med hover-delay på desktop, tap-to-show på mobil
- WCAG 2.2 AA: 44px touch targets, 4.5:1 kontrast
- iOS safe area support for notch/home indicator
