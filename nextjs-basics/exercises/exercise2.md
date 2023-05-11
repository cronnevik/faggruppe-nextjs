# Øvelse 2 - Optimalisering

## 2.1 Image komponent
I navbar vil linting gi en advarsel der hvor det er brukt en `<img>` tag. Advarselen er som følger: "Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images."

Oppgaven er enkel. Gjør som advarselen sier. Bytt ut `<img>` med `<Image />` komponenten fra Next. Bytte til `<Image />` krever at *height* og *width* blir oppgitt.

## 2.2 Metadata for sider
Akkurat nå har hver side en tittel (oppe i fanen) lik den url som benyttes for å nå siden. Eksempel på implementering av metadata finnes [her](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#examples).