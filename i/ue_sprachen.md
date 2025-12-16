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
  - Ein Bild, welches zur Geschichte dazu passt
- Abschnitt (`div`)
  - Überschriftsebene 2: Kurze Geschichte in Deutsch
  - Eine Kurze Geschichte mit mehrere Paragraphen in Deutsch
  - Ein Bild, welches zur Geschichte dazu passt.

Wenn die Geschichte KI generiert ist, muss dies angegeben werden. Es darf auch eine Übersetzungssoftware verwendet werden. Wichtig ist, dass die Geschichte in einfacher Sprache geschrieben ist.

---

## CSS Teil

Zu Beginn legen wir eine Farbpalette fest. Die Farben sollen selbst gewählt werden. [Diese Seite](https://www.realtimecolors.com/) ist dazu hilfreich.

```html
<style>
  :root {
    --text: rgb(255, 255, 255);
    --heading: rgba(88, 77, 77);
    --backgroundGerman: rgb(11, 14, 23);;
    --backgroundEnglish: rgb(144, 158, 208);

    /* Es können gerne mehr als 4 Farben erstellt werden */
  }
</style>
```


---

### Body

- Ändere für das gesamte Dokument die Schriftart. [Tipp](https://www.cdnfonts.com/)
- Setze eine deiner Farben als Hintergrundfarbe fest.
- Setze eine deiner Farben als Textfarbe fest.
- Entferne das margin vom body.

### Headings

Gib den Überschriften eine andere Farbe als die eben festgelegte Textfarbe.

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
<div class="content" style="background-color: --backgroundEnglish">
  <h2>I am a heading</h2>
  <p>I am a paragraph</p>
</div>
```

---

### Wellen zwischen den Abschnitten

[Siehe dazu](using_haikei_waves.html)

### Responsive Design

- Die Bilder sollen sich an der Fensterbreite anpassen.
- Stelle außerdem sicher, dass sich die Bilder abhängig von der Fenstergröße entweder neben oder unter dem Text befinden. (Hier brauchst du z.B. eine Flex Box)
- Passe außerdem die Abstände zwischen den Elementen an, damit Text und Bild nicht mehr ganz am Rand erscheinen und zwischen Bild und Text ein Abstand existiert.

---

### Fixiertes Menu

Füge ein fixiertes Menü für die einzelnen Überschriften ein.

- Wenn du auf eine der Überschriften im Menü clickst solltest du direkt zum jeweiligen Abschnitt hüpfen.
  Tipp: Verwende dazu das `<a>` Element.
- Orientieren dich gegebenenfalls an diesem [Tutorial](https://www.w3schools.com/howto/howto_css_fixed_menu.asp).

