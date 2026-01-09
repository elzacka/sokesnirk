# Søkesnirk

**[Åpne Søkesnirk](https://elzacka.github.io/sokesnirk/)**

PWA for å bygge avanserte søkestrenger med operatorer for ulike søkeplattformer.

Ulike plattformer bruker ulik søkesyntaks. Søkesnirk hjelper deg å:

- Velge riktig syntaks basert på hvor du søker
- Finne informasjon effektivt og presist
- Lære avanserte søkeoperatorer gjennom bruk

## Funksjoner

- Bygg søkestrenger med plattformspesifikke operatorer
- Støtte for flere plattformer og query languages
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
4. Kopier søkestrengen og lim inn i valgt plattform

## Plattformer og Query Languages

| Query Language | Plattformer                          |
| -------------- | ------------------------------------ |
| Boolean        | PubMed                               |
| CQL            | Confluence                           |
| Google Dorks   | Google, Google Scholar               |
| JQL            | Jira                                 |
| KQL            | Azure Monitor                        |
| Lucene         | Nasjonalbiblioteket, GitHub          |
| Shodan         | Shodan                               |
| URL-basert     | Wayback Machine                      |

## Teknologi

| Pakke | Versjon |
|-------|---------|
| React | 19.2.3 |
| TypeScript | 5.9.3 |
| Vite | 7.3.1 |
| ESLint | 9.21.0 |

- CSS Modules
- Service Worker for offline-støtte

## Lisens

MIT
