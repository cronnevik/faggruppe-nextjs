# Øvelse 1

## 1.1 Opprette de hovedsidene vi ønsker på siden
Definer segmentene og opprett en side (page.tsx) for hver segment. Det må eksistere en *page.tsx* dersom segmentet skal være tilgjengelig.

Ut ifra Ulriken sin nåværende hjemmeside er det de følgende elementene:
-	«Hva vi leverer»
-	«Jobbe hos oss»
-	«Våre ansatte»
-	«Kontakt oss»

Husk å navngi hver komponent med et logisk navn (default er "Page" i eksemplene).

Returner gjerne en tekst for å verifisere at riktig side blir lastet.

Se [Nextjs sin dokumentasjon](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) om routing for tips til oppsett

## 1.2 Lage layout for hovedsiden 
Layout.tsx filen under *app* er den såkalte "root layouten". 

Her skal vi opprette en navigasjonsbar og en footer som skal vises for hver enkelt underside.

Det kan være fint å lage egne komponenter for disse. For organiseringen sin del så opprett en mappe (under "app" mappen) med navnet "Components" <br>
Her kan man opprette komponenter slik man ville gjort det i React. Disse vil ikke blir tilgjengeligort som en del av routingen, gitt at man bruker andre navn enn "page.*".

Dette prosjektet er konfigurert med [*tailwindcss*](https://tailwindcss.com/) ettersom det kommer ut av boksen med Nextjs. 
Vi kan derfor bruke ferdig stylede [UI elementer](https://tailwindui.com/components/#product-application-ui) til å lage en navbar og footer. De elementene som ikke er markert med hengelås er åpen for bruk. Den første navigasjons komponenten [her](https://tailwindui.com/components/application-ui/navigation/navbars) benyttes i denne øvelsen og en modifisert utgave finner du under *ressurser/navbar.tsx*. Kopier denne inn i den opprettede "Components" mappen og bruk denne komponenten i layouten. Helt øverst i *navbar.tsx* står det "use client". Vi kommer tilbake hva dette betyr i en senere. I navigasjons objektet (rad 6) la du definere stiene til routingen du lagde under under forrige oppgave (1.1).

## 1.3 Linker og navigasjon
I navbar.tsx komponenten, opprettes linkes det ved hjelp av helt standard `<a>` tag. Det fungerer, men nextjs har en egen innebygd Link komponent som "prefetches" sider i bakgrunnen. Det gir en raskere og mer smooth overgang mellom sidene.

Byt ut ``<a>`` tagen med Next sin Link komponent.