# Qualitativer Angebotsvergleich / Nutzwertanalyse

Die Nutzwertanalyse ist ein Verfahren zur Bewertung von Zielgrößen und kann für den Angebotsvergleich durch qualitative Kriterien genutzt werden und ist meist auch synonym zu behandeln.

## Ablauf Nutzwertanalyse

1. Entscheidungsalternativen festlegen
2. Bewertungskriterien definieren
3. Gewichtungsskala festlegen (z.B. 0-100% oder Punkte oder Schulnoten)
4. Bewertungskriterien gewichten
5. Bewertung durchführen
6. Gewichteten Teilnutzwert berechnen (Punkt auf der Skala \* Gewichtung)
7. Gesamtnutzen je Alternative summieren
8. Entscheidung anhand der Gesamtnutzen bestimmen

## Vor- und Nachteile

**Vorteile**

- Transparenz
- Nachvollziehbar
- Begründbar
- Qualitativer Vergleich (anstatt rein monetär)

**Nachteile**

- Subjektivität
- Mögliche unvollständige Handlungsalternativen
- Bei hoher Anzahl an Handlungsalternativen zeitaufwändig und arbeitsintensiv

## Typische Bewertungskriterien

Kosten:

- Anschaffungs- / Lizenzkosten
- Betriebskosten
- Implementierungs- / Einführungskosten
- Schulungskosten

Technik:

- Funktionsumfang
- Performance / Skalierbarkeit
- Sicherheit / Datenschutz
- Kompatibilität / Schnittstellen
- Plattformunterstützung
- Updateverhalten / Wartbarkeit

Benutzer & Betrieb

- Benutzerfreundlichkeit
- Einarbeitungsaufwand
- Administrierbarkeit

Anbieter

- Support & Reaktionszeiten
- Dokumentation & Community
- Stabilität / Reputation
- Referenzen / Marktreife
- Lieferzeit / verfügbarkeit

Zukunftssicher

- Erweiterbarkeit / Modularität
- Roadmap & Entwicklungsaktivität
- Vendor Lock-in Risiko

## Beispiel: Auswahl eines Ticketsystems

Entscheidungsalternativen bestimmen:

| **Jira** | **Trello** | **YouTrack** |
| -------- | ---------- | ------------ |

Bewertungskriterien bestimmen:

| **Kriterium**           | **Jira** | **Trello** | **YouTrack** |
| ----------------------- | -------- | ---------- | ------------ |
| Preis                   |          |            |              |
| Funktion                |          |            |              |
| Benutzerfreundlichkeit  |          |            |              |
| Support & Dokumentation |          |            |              |
| Integration             |          |            |              |

Gewichtungsskala festlegen:

1 (schlecht) bis 4 (gut)

Bewertungskriterien gewichten:

| **Kriterium**           | **Gewichtung** | **Jira** | **Trello** | **YouTrack** |
| ----------------------- | -------------- | -------- | ---------- | ------------ |
| Preis                   | 30%            |          |            |              |
| Funktion                | 25%            |          |            |              |
| Benutzerfreundlichkeit  | 20%            |          |            |              |
| Support & Dokumentation | 15%            |          |            |              |
| Integration             | 10%            |          |            |              |
| **Gesamntnutzwert**     | 100%           |          |            |              |

Bewertung durchführen:

| **Kriterium**           | **Gewichtung** | **Jira** | **Trello** | **YouTrack** |
| ----------------------- | -------------- | -------- | ---------- | ------------ |
| Preis                   | 30%            | 2        | 4          | 3            |
| Funktion                | 25%            | 4        | 2          | 3            |
| Benutzerfreundlichkeit  | 20%            | 2        | 4          | 3            |
| Support & Dokumentation | 15%            | 4        | 2          | 3            |
| Integration             | 10%            | 4        | 3          | 3            |
| **Gesamntnutzwert**     | 100%           |          |            |              |

Gewichteten Teilnutzwert berechnen:

| **Kriterium**           | **Gewichtung** | **Jira** |     | **Trello** |     | **YouTrack** |      |
| ----------------------- | -------------- | -------- | --- | ---------- | --- | ------------ | ---- |
| Preis                   | 30%            | 2        | 0,6 | 4          | 1,2 | 3            | 0,9  |
| Funktion                | 25%            | 4        | 1,0 | 2          | 0,5 | 3            | 0,75 |
| Benutzerfreundlichkeit  | 20%            | 2        | 0,4 | 4          | 0,8 | 3            | 0,6  |
| Support & Dokumentation | 15%            | 4        | 0,6 | 2          | 0,3 | 3            | 0,45 |
| Integration             | 10%            | 4        | 0,4 | 3          | 0,3 | 3            | 0,3  |
| **Gesamntnutzwert**     | 100%           |          |     |            |     |              |      |

Gesamtnutzen je Alternative summieren:

| **Kriterium**           | **Gewichtung** | **Jira** |     | **Trello** |     | **YouTrack** |      |
| ----------------------- | -------------- | -------- | --- | ---------- | --- | ------------ | ---- |
| Preis                   | 30%            | 2        | 0,6 | 4          | 1,2 | 3            | 0,9  |
| Funktion                | 25%            | 4        | 1,0 | 2          | 0,5 | 3            | 0,75 |
| Benutzerfreundlichkeit  | 20%            | 2        | 0,4 | 4          | 0,8 | 3            | 0,6  |
| Support & Dokumentation | 15%            | 4        | 0,6 | 2          | 0,3 | 3            | 0,45 |
| Integration             | 10%            | 4        | 0,4 | 3          | 0,3 | 3            | 0,3  |
| **Gesamntnutzwert**     | 100%           |          | 3,0 |            | 3,1 |              | 3,0  |

Entscheidung anhand der Gesamtnutzen bestimmen:

Trello gewinnt knapp vor Jira und YouTrack.
