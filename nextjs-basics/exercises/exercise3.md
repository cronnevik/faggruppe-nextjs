# Øvelse 3 - Dynamisk Routing

## 3.1 Start av profil Side for hver ansatt
For å kunne lage en profil side, trenger vi først en liste av de ansatte som man kan klikke videre fra. Under *ressurser/konsulenter/konsulenter.component.tsx*. finner du en komponent som gjengir de 12 første (alfabetisk) ansatte i Ulriken Consulting. Kopier denne over til components folderen under app, slik som i øvelse 1. 

Under siden for våre ansatte, sett inn denne komponenten slik:
`<Konsulenter itemLink='/vare-ansatte' konsulenter={KonsulentData} />`
der itemLink er den routen du valgte for siden, mens konsulenter linkes til *ressurser/konsulenter/konsulenter.data.ts*.

Verifiser at listen vises. Klikk deretter på en av konsulentene. En url med konsulent id blir trigget. En generisk 404 side vil vises. Opprett deretter et dynamisk segment under routen for våre konsulenter med *id* som parameter ([se her](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#typescript) for eksempel). Du står fritt til å lage siden slik du ønsker, men print gjerne ut id'en på siden for å verifisere at den kommer inn som props gjennom komponenten. Denne skal brukes videre i neste del om data henting.

Gå tilbake til listen. Åpne opp nettverks fanen i DevTools. Før musepekeren over en av de ansatte og se hva som skjer.