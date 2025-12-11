---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

# Sprachen Übung

HTML & CSS

---

## HTML Teil

Erstelle ein neues HTML Dokument und lege die Metadaten im Head wie beim letzten mal fest. Suche dir anschließend 2 Sprachen aus und lege den `title` passend fest.
Baue danach den Body wie folgt auf. (Als Beispiel wurde hier Englisch und Deutsch ausgewählt)
  - Abschnitt (`div`)
    - Überschriftsebene 1: Deutsch Englisch
    - Überschriftsebene 2: Die Zahlen in Deutsch
    - Geordnete Liste mit den ersten 15 Zahlen in Deutsch

---

- Abschnitt (`div`)
  - Überschriftsebene 2: Die Zahlen in Englisch
  - Geordnete Liste mit den ersten 15 Zahlen in Deutsch
- Abschnitt (`div`)
  - Überschriftsebene 2: Wichtige Redewendungen in Deutsch
  - Ungeordnete Liste mit wichtigen Redewendungen (z.B. "Wie geht es dir")
- Abschnitt (`div`)
  - Überschriftsebene 2: Wichtige Redewendungen in Englisch
  - Ungeordnete Liste der gleichen Redewendungen in Deutsch, jetzt in Englisch

---

- Abschnitt (`div`)
  - Überschriftsebene 2: Kurze Geschichte in Deutsch
  - Eine Kurze Geschichte mit mehrere Paragraphen in Deutsch
- Abschnitt (`div`)
  - Überschriftsebene 2: Kurze Geschichte in Deutsch
  - Eine Kurze Geschichte mit mehrere Paragraphen in Deutsch

Wenn die Geschichte KI generiert ist, muss dies angegeben werden. Es darf auch eine Übersetzungssoftware verwendet werden. Wichtig ist, dass die Geschichte in einfacher Sprache geschrieben ist.

---

## CSS Teil

- Ändere für das gesamte Dokument die Schriftart.
- Gib dem Hintergrund eine deiner ausgewählten Farben.
- Entferne das padding und margin vom body.
- Gib anschließend den Überschriften passende Farben

```html
<style>
    body {
        font-family: NAME_DEINER_AUSGWÄHLTEN_SCHRIFTART;
        background-color: var(--background);
        padding: 0;
        margin: 0;
  }
</style>
```

---

### Wechselnde Hintergrundfarbe

Gib jedem zweiten Abschnitt (Überschrift + Weiteres Element) die gleiche Hintergrundfarbe und gib den Abschnitten etwas ``padding``.

```html
<style>
  .content {
    padding: 5rem;
  }
</style>
```

```html
<div class="content" style="background-color: FARBE">
  <h2>Ich bin eine Überschrift</h2>
  <p>Ich bin ein Absatz</p>
</div>
```

---

### Responsive Design

- Stelle sicher, dass sich das Bild abhängig von der Fenstergröße entweder neben oder unter dem Text befindet.
- Passe außerdem die Abstände zwischen den Elementen an, damit Text und Bild nicht mehr ganz am Rand erscheinen und zwischen Bild und Text ein Abstand existiert.

---

### Fixiertes Menu

Füge ein fixiertes Menü für die einzelnen Überschriften ein.

- Wenn du auf eine der Überschriften im Menü clickst solltest du direkt zum jeweiligen Abschnitt hüpfen.
  Tipp: Verwende dazu das `<a>` Element.
- Orientieren dich gegebenenfalls an diesem [Tutorial](https://www.w3schools.com/howto/howto_css_fixed_menu.asp).

