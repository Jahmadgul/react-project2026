# Allshop — React Webshop

En webshop byggd med React som hämtar produkter från DummyJSON API.

## Installation

1. Klona repot

2. Gå in i projektmappen:
```bash
   cd REPO-NAMN
```
3. Installera beroenden:
```bash
   npm install
```
4. Starta projektet:
```bash
   npm run dev
```
5. Öppna webbläsaren och gå till `http://localhost:5173`

## Funktioner

- Produktlista med alla produkter hämtade från DummyJSON API
- Produktsida med detaljerad information om varje produkt
- Kundvagn med möjlighet att lägga till, ta bort och ändra antal
- Checkout-sida med ordersammanfattning och orderbekräftelse

## Debounce

Debounce är implementerat i checkout på + och - knapparna för att ändra kvantitet. När användaren klickar snabbt flera gånger väntar appen 300ms efter sista klicket innan kvantiteten uppdateras. Detta förhindrar onödiga uppdateringar vid snabbklick. Implementationen använder `useRef` och `setTimeout`.

## Felhantering med try...catch

Alla fetch-anrop i `useEffect` är inlindade i try...catch. Om ett anrop misslyckas visas ett felmeddelande för användaren istället för att appen kraschar. `finally` säkerställer att laddningsindikatorn alltid stängs av oavsett om anropet lyckades eller misslyckades.
