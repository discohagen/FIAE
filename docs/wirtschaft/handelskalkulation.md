# Quantitativer Angebotsvergleich / Handelskalkulation

Der Quantitative Angebotsvergleich nutzt feste, monetäre Zahlenwerte als Entscheidungskriterien. Dazu nutzt man Schritte oder Arten der Handelskalkulation. Diese wird wiederum nicht nur für den Angebotsvergleich sondern auch für andere Analysen von monetären Aspekten im Unternehmen genutzt.

Die Handelskalkulation besteht aus drei Teilkalkulationen und kann in unterschiedliche Richtungen durchgeführt werden.

Generell sind Preise in der Handelskalkulation in netto.

## Bezugskalkulation

Die Bezugskalkulation ermittelt den Bezugspreis, also die tatsächlichen Kosten für den Einkauf einer Ware. Da die Bezugskalkulation den Bezug von Waren abdeckt reicht diese oft schon aus um einen quantitativen Angebotsvergleich durchzuführen.

|     |                            |                                                                                                                                |
| --- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| =   | Listeneinkaufspreis        | Gelisteter Preis des Verkäufers ohne Nachlässe                                                                                 |
| -   | Lieferrabatt               | Prozentualer oder absoluter Nachlass für die Lieferung                                                                         |
| =   | Zieleinkaufspreis          | Preis nach Abzug des Lieferrabatts. Ziel bedeutet hier die Zahlung zum Zahlungsziel                                            |
| -   | Lieferskonto               | Nachlass für Zahlung innerhalb einer kurzen Frist und bevor Zahlungsziel                                                       |
| =   | Bareinkaufspreis           | Tatsächlicher Warenpreis. Bar bedeutet hier die Zahlung falls man die Ware vor Ort und sofort zahlt aber nicht zwingend in bar |
| +   | Bezugskosten               | Alle zusätzlichen Kosten für die Lieferung (z.B. Frachtkosten, Transportversicherung, Verpackung, Zölle)                       |
| =   | Bezugspreis/Einstandspreis | Tatsächlichen Kosten für den Einkauf einer Ware                                                                                |

--8<-- "docs/wirtschaft/handelskalkulatoren/bezugskosten.html"

**Beispiel**

|     |                            |     |                  |         |
| --- | -------------------------- | --- | ---------------- | ------- |
| =   | Listeneinkaufspreis        |     |                  | 500,00€ |
| -   | Lieferrabatt               | 10% | $10\% * 500,00€$ | 50,00€  |
| =   | Zieleinkaufspreis          |     |                  | 450,00€ |
| -   | Lieferskonto               | 2%  | $2\% * 450,00€$  | 9,00€   |
| =   | Bareinkaufspreis           |     |                  | 441,00€ |
| +   | Bezugskosten               |     |                  | 30,00€  |
| =   | Bezugspreis/Einstandspreis |     |                  | 471,00€ |

## Selbstkostenkalkulation

Die Selbstkostenkalkulation ermittelt den Betrag aller Kosten vor einem Gewinn. Dafür müssen auf den Bezugspreis alle Handlungskosten aufaddiert werden. Handlungskosten sind dabei alle Kosten, welche nicht direkt einem einzelnen Produkt zugeordnet werden können, aber trotzdem im Unternehmen anfallen (z.B. Kosten für Lagerung, Personal, Verwaltung und Vertrieb). Diese sind meistens eine prozentuale Pauschale bzw. das Verhältnis von Handlungskosten insgesamt zu Warenaufwänden in einer Periode.

$$
Handlungskostenzuschlag = \frac{Handlungskosten gesamt * 100\%}{Wareneinsatz gesamt}
$$

|     |                            |                                                                              |
| --- | -------------------------- | ---------------------------------------------------------------------------- |
| =   | Bezugspreis/Einstandspreis | Tatsächlichen Kosten für den Einkauf einer Ware                              |
| +   | Handlungskosten            | Kosten, welche nicht direkt einem einzelnen Produkt zugeordnet werden können |
| =   | Selbstkosten               | Kosten vor einem Gewinn                                                      |

--8<-- "docs/wirtschaft/handelskalkulatoren/selbstkosten.html"

**Beispiel**

|     |                            |     |                  |         |
| --- | -------------------------- | --- | ---------------- | ------- |
| =   | Bezugspreis/Einstandspreis |     |                  | 471,00€ |
| +   | Handlungskosten            | 15% | $15\% * 471,00€$ | 70,65€  |
| =   | Selbstkosten               |     |                  | 541,65€ |

## Verkaufskalkulation

Die Verkaufskalkulation ermittelt den Verkaufspreis unter Berücksichtigung von Gewinn und Nachlässen für den Kunden.

|     |                             |                                                                                                                                                                       |
| --- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| =   | Selbstkosten                | Kosten vor einem Gewinn                                                                                                                                               |
| +   | Gewinn                      | Absolute oder prozentuale Pauschale                                                                                                                                   |
| =   | Barverkaufspreis            | Preis für den Kunden ohne Nachlässe                                                                                                                                   |
| +   | Kundenskonto                | Prozentualer Nachlass für Zahlung innerhalb einer kurzen Frist. **Achtung!** Das Kundenskonto bezieht sich auf den Zielverkaufspreis und nicht den Barverkaufspreis   |
| =   | Zielverkaufspreis           | Preis zu dem die Ware auf Rechnung verkauft wird                                                                                                                      |
| +   | Kundenrabatt                | Absoluter oder Prozentualer Nachlass für den Kunden **Achtung!** Der Kundenrabatt bezieht sich auf den Listenverkauspreis (netto) und nicht auf den Zielverkaufspreis |
| =   | Listenverkaufspreis (netto) | Gelisteter Preis für den Kunden                                                                                                                                       |

**Achtung!**

Kundenskonto und Kundenrabatt beziehen sich auf die nachstehenden Ergebnisse und nicht wie sonst in der Kalkulation auf die vorherigen Ergebnisse, weil diese für die Kundensicht konzipiert sind.

Es gilt:

$$
Zielverkaufspreis = Barverkaufspreis + \frac{Barverkaufspreis * Kundenskonto}{100\% - Kundenskonto}
$$

und:

$$
Listenverkaufspreis = Zielverkaufspreis + \frac{Zielverkaufspreis * Kundenrabatt}{100\% - Kundenrabatt}
$$

Der Listenverkaufspreis ist in netto angegeben. Um den Listenverkaufspreis in brutto zu bekommen addiert man die Umsatzsteuer (allgemein 19% und ermäßigt 7%).

--8<-- "docs/wirtschaft/handelskalkulatoren/verkaufskosten.html"

**Beispiel**

|     |                             |     |                                     |         |
| --- | --------------------------- | --- | ----------------------------------- | ------- |
| =   | Selbstkosten                |     |                                     | 541,65€ |
| +   | Gewinn                      | 10% | $10\%*541,65€$                      | 54,17€  |
| =   | Barverkaufspreis            |     |                                     | 595,82€ |
| +   | Kundenskonto                | 2%  | $\frac{595,82€ * 2\%}{100\% - 2\%}$ | 12,16€  |
| =   | Zielverkaufspreis           |     |                                     | 607,98€ |
| +   | Kundenrabatt                | 5%  | $\frac{607,98€ * 5\%}{100\% - 5\%}$ | 31,99€  |
| =   | Listenverkaufspreis (netto) |     |                                     | 639,97€ |

Mit einer Umsatzsteuer von 19% ($19\% * 639,97€ = 121,59€$) ergibt sich ein Listenverkaufspreis (brutto) von 761,56€.

## Vollständige Handelskalkulation vorwärts

Die vollständige Handelskalkulation vorwärts beinhaltet die Bezugs-, Selbstkosten- und Verkaufskalkulation und beginnt mit dem Listeneinkaufspreis um den Listenverkaufspreis zu ermitteln. Diese Kalkulation wird verwendet um bei fixem Einkaufspreis einen Verkaufspreis für den Kunden zu ermitteln.

|     |                             |
| --- | --------------------------- |
| =   | Listeneinkaufspreis         |
| -   | Lieferrabatt                |
| =   | Zieleinkaufspreis           |
| -   | Lieferskonto                |
| =   | Bareinkaufspreis            |
| +   | Bezugskosten                |
| =   | Bezugspreis                 |
| +   | Handlungskosten             |
| =   | Selbstkosten                |
| +   | Gewinn                      |
| =   | Barverkaufspreis            |
| +   | Kundenskonto                |
| =   | Zielverkaufspreis           |
| +   | Kundenrabatt                |
| =   | Listenverkaufspreis (netto) |

--8<-- "docs/wirtschaft/handelskalkulatoren/vorwaerts.html"

**Beispiel**

|     |                             |     |                                     |         |
| --- | --------------------------- | --- | ----------------------------------- | ------- |
| =   | Listeneinkaufspreis         |     |                                     | 500,00€ |
| -   | Lieferrabatt                | 10% | $10\% * 500,00€$                    | 50,00€  |
| =   | Zieleinkaufspreis           |     |                                     | 450,00€ |
| -   | Lieferskonto                | 2%  | $2\% * 450,00€$                     | 9,00€   |
| =   | Bareinkaufspreis            |     |                                     | 441,00€ |
| +   | Bezugskosten                |     |                                     | 30,00€  |
| =   | Bezugspreis                 |     |                                     | 471,00€ |
| +   | Handlungskosten             | 15% | $15\% * 471,00€$                    | 70,65€  |
| =   | Selbstkosten                |     |                                     | 541,65€ |
| +   | Gewinn                      | 10% | $10\%*541,65€$                      | 54,17€  |
| =   | Barverkaufspreis            |     |                                     | 595,82€ |
| +   | Kundenskonto                | 2%  | $\frac{595,82€ * 2\%}{100\% - 2\%}$ | 12,16€  |
| =   | Zielverkaufspreis           |     |                                     | 607,98€ |
| +   | Kundenrabatt                | 5%  | $\frac{607,98€ * 5\%}{100\% - 5\%}$ | 31,99€  |
| =   | Listenverkaufspreis (netto) |     |                                     | 639,97€ |

Mit einer Umsatzsteuer von 19% ($19\% * 639,97€ = 121,59€$) ergibt sich ein Listenverkaufspreis (brutto) von 761,56€.

## Vollständige Handelskalkulation rückwärts

Die vollständige Handelskalkulation rückwärts beinhaltet alle Teilkalkulationen, aber beginnt mit einem fixen Listenverkaufspreis und versucht dadurch den maximalen Listeneinkaufspreis zu bestimmen, mit dem man die Ware einkaufen darf.

**Achtung!**

Die Bezüge der Operationen drehen sich um.

--8<-- "docs/wirtschaft/handelskalkulatoren/rueckwaerts.html"

**Beispiel**

|     |                             |     |                                         |           |
| --- | --------------------------- | --- | --------------------------------------- | --------- |
| =   | Listenverkaufspreis (netto) |     |                                         | 1.200,00€ |
| -   | Kundenrabatt                | 8%  | $8\% * 1.200,00€$                       | 96,00€    |
| =   | Zielverkaufspreis           |     |                                         | 1.104,00€ |
| -   | Kundenskonto                | 3%  | $3\% * 1.100,69€$                       | 33,12€    |
| =   | Barverkaufspreis            |     |                                         | 1.070,88€ |
| -   | Gewinn                      | 12% | $\frac{1.070,88€ * 12\%}{100\% - 12\%}$ | 146,03€   |
| =   | Selbstkosten                |     |                                         | 924,85€   |
| -   | Handlungskosten             | 20% | $\frac{924,85€ * 20\%}{100\% - 20\%}$   | 154,14€   |
| =   | Bezugspreis                 |     |                                         | 770,71€   |
| -   | Bezugskosten                |     |                                         | 45,00€    |
| =   | Bareinkaufspreis            |     |                                         | 725,71€   |
| +   | Lieferskonto                | 2%  | $\frac{725,71€ * 2\%}{100\% - 2\%}$     | 14,81€    |
| =   | Zieleinkaufspreis           |     |                                         | 740,52€   |
| +   | Lieferrabatt                | 15% | $\frac{740,52€ * 15\%}{100\% - 15\%}$   | 130,68€   |
| =   | Listeneinkaufspreis         |     |                                         | 871,20€   |

## Differenzkalkulation

Die Differenzkalkulation ermittelt den maximal möglichen Gewinn bei fixen Listeneinkaufs- und Listenverkaufspreis. Dafür führt man die Vorwärtskalkulation bis zu den Selbstkosten und die Rückwärtskalkulation bis zum Barverkaufspreis durch und berechnet dann die Differenz aus Barverkaufspreis und Selbstkosten.

--8<-- "docs/wirtschaft/handelskalkulatoren/differenz.html"
