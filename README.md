# k9-frontend-modules er migrert til https://github.com/navikt/k9-saksbehandling-frontend



# k9-frontend-modules (gammelt repo)

Kildekode og publisering av npm-moduler til frontender i K9

# Komme i gang

Kjør `npm install` på rot.
Mulig man midlertidig må slenge på `--legacy-peer-deps` pga en issue med peer dependencies i Storybook.

Kjør `npm run bootstrap` på rot for å hente dependencies og sette opp intern-dependencies i pakkene som er definert i `lerna.json`.

For å kjøre opp utviklingsmiljø i Storybook, kjør `npm run dev` på rot, etterfulgt av `npm run pkg-dev` for å kjøre opp Storybook-ene
til enkeltpakkene. Utviklingsmiljøet er satt opp med [Storybook Composition](https://storybook.js.org/docs/react/workflows/storybook-composition).

Storybook-ene kan også kjøres opp hver for seg ved å kjøre `npm run storybook` i de aktuelle pakkene (pr nå `packages/ui/react-components` og `packages/ui/web-components`).

For å bygge pakkene, gjør `npm run build` på rot, ev. samme kommando lokalt på den enkelte modulen.

## Publisering av moduler

Det er ikke satt opp noen automatisk publisering av npm-moduler gjennom CI eller lignende. Dette må derfor gjøres manuelt.

Hver npm-pakke har sitt eget build-script i en package.json, som kan kjøres for å lage et nytt bygg under `/dist`-mappa på rot av den aktuelle pakken. Når det er gjort kan man bumpe versjonsnummer i `package.json` og gjøre `npm publish` fra rot av den aktuelle pakken for å publisere den nye versjonen.

Eksempel på publisering av @navikt/k9-form-utils:

1. `cd ./packages/util/form-utils`
2. Gjør eventuelle endringer og bump versjon i `package.json`
3. `npm run build`
4. `npm publish`

### Autentisering

Pakkene publiseres på GitHub Package Registry, og krever derfor at man har satt opp lokal `npm` med en PAT (Personal Access Token) med `write:packages`-tilgang, med en bruker som har tilgang til å publisere pakker på repoet. GitHub har dokumentert oppsett [her](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package).

TLDR er å opprette en GitHub PAT med kun write:packages-tilgang, enable SSO, og putte det i en egen ~/.npmrc-fil slik:

```
//npm.pkg.github.com/:_authToken=<token>
```

Merk at dette _ikke_ skal sjekkes inn i versjonskontroll.

---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #sif-pleiepenger.
