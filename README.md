k9-frontend-modules
================

Kildekode og publisering av npm-moduler til frontender i K9

# Komme i gang

Kjør `npm install` på rot. 
Mulig man midlertidig må slenge på `--legacy-peer-deps` pga en issue med peer dependencies i Storybook.

Kjør `npm run bootstrap` på rot for å hente dependencies og sette opp intern-dependencies i pakkene som er definert i `lerna.json`.

For å kjøre opp utviklingsmiljø i Storybook, kjør `npm run dev` på rot, etterfulgt av `npm run pkg-dev` for å kjøre opp Storybook-ene
til enkeltpakkene. Utviklingsmiljøet er satt opp med [Storybook Composition](https://storybook.js.org/docs/react/workflows/storybook-composition).

For å bygge pakkene, gjør `npm run build` på rot, ev. samme kommando lokalt på den enkelte modulen.

---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #sif-pleiepenger.
