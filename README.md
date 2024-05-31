# strajk-bowling

inlämningsuppgift 31/5

Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.
Acceptanskriterier:

- Användaren ska kunna välja ett datum från en kalender
- Användaren ska kunna välja en tid från en lista över tillgängliga tider
- Användaren ska kunna ange antal spelare
- Användaren ska kunna ange antal banor
- Användaren ska kunna se en sammanfattning av sin bokning innan hen går vidare

Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.
Acceptanskriterier:

- Användaren ska kunna lägga till en rad för varje spelare där skostorlek anges
- Skostorlek är obligatorisk för varje angiven spelare
- Användaren ska kunna se en sammanfattning av angivna skostorlekar innan hen går vidare

Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.
Acceptanskriterier:

- Användaren ska kunna ta bort ett fält för skostorlek med en enkel knapp
- När fältet tas bort ska övriga fält fortsatt vara desamma

Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).
Acceptanskriterier:

- När användaren skickar iväg reservationen ska systemet generera och visa ett unikt bokningsnummer
- Totalsumman för bokningen ska beräknas och visas baserat på antal spelare och banor (120 kr / person + 100 kr / bana)
- Användaren ska få en bekräftelsesida som visar bokningsnummer, totalsumma, datum, tid och antal spelare

Som användare vill jag kunna navigera tillbaka till bokningsvyn efter bekräftelse.
Acceptanskriterier:

- Bekräftelsesidan ska ha en tydlig knapp som tar användaren tillbaka till bokningsvyn
- Systemet ska tydligt indikera att bokningen är bekräftad och sparad innan användaren går från vyn
