---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

<style>
  :root {
  --boxcolor: oklch(0.879 0.169 91.605);
  },
  img[alt~="rightbound"] {
    margin-top: -180px;
    height: 500px;
    /* margin-right: -60px; */
    }
</style>

# HTML

_Martin Kleindienst_

<!--_paginate: false -->

---

## Allgemeines

<div style='float:right'>

  ![rightbound](images/html_logo.svg)

</div>

- **H**yper**t**ext **M**arkup **L**anguage
- Erstveröffentlichung: 1992
- Aktuelle Version:
HTML 5.2 (14.12.2017)
- Dateiendungen: .html .htm
- **Leerzeichen und Zeilenumbrüche werden nicht ausgewertet!**
- Kommentare werden mit `<!--` zum Öffnen und `-->` zum Schließen erstellt.

<!-- _footer: https://pixabay.com/vectors/file-format-type-extension-cutout-7084006/ -->

---

### Die ersten Zeichen von jedem HTML Dokument

``` html
<!DOCTYPE html>
<html>











</html>
```

---

### Das "head" Element

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewpoint" content="width=device-width, initial-scale=1.0"/>
    <title>Big Brother Award</title>
    <!-- usw. Beispielsweise wird hier auch das externe CSS eingebunden -->
    <!-- aber dazu später mehr -->
  </head>



</html>
```

---

### Das "style" Element

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewpoint" content="width=device-width, initial-scale=1.0"/>
    <title>Big Brother Award</title>
  </head>
  <style>
    /* Hier wäre Platz für "Internal CSS". Aber dazu auch später mehr */
  </style>

</html>
```

---

### Das "body" Element

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewpoint" content="width=device-width, initial-scale=1.0"/>
    <title>Big Brother Award</title>
  </head>
  <style>
    /* Hier wäre Platz für "Internal CSS". Aber dazu auch später mehr */
  </style>
  <body>
    <!-- Hier kommt dann der Content rein -->
  </body>
</html>
```

---

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewpoint" content="width=device-width, initial-scale=1.0"/>
    <title>Big Brother Award</title>
  </head>
  <body>
    <h1>Der Big Brother Award</h1>
    <p>
      Der Big Brother Award zeichnet Personen und
      Institutionen aus, die in besonders negativer Weise
      zur Einschränkung der Privatsphäre und der
      Grundrechte in der digitalen Welt beigetragen haben.
    </p>
  </body>
<html>
```

---

#### Was kann man nun damit machen?

<style scoped>
  footer {
  margin-bottom: 0px;
  height: 120px;
  }
</style>

- Wir erinnern uns an Word vs. Zip
- Wie wäre es wenn wir hier auch ausprobieren, dass .txt Dokument in .html (oder .htm) umzubenennen.

  <div style="display: flex; align-items: center; justify-content: center">
    <div style="margin: 0 10px">
      <img src="images/txt_logo.svg" alt="txt logo" width="300">
    </div>
    <svg style="width: 100px; height: 100px; fill: #455a64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
      <path d="M 0 3.25 H 11 l -3 -3.25 h 2 l 4 4 l -4 4 h -2 l 3 -3.25 H 0 Z"/>
    </svg>
    <div style="margin: 0 10px">
      <img src="images/html_logo.svg" alt="html logo" width="300">
    </div>
  </div>

<!-- _footer: https://pixabay.com/vectors/file-format-type-extension-doc-7054984/ </br> https://pixabay.com/vectors/file-format-type-extension-cutout-7084006/
-->

---

## Arbeitsauftrag [1]

Erstelle ein HTML Dokument mit folgenden Vorgaben

- Lege die Metadaten wie besprochen fest
- Gib dem Dokument den Titel: `DEIN_VORNAME`'s `GERICHT`

Strukturiere das Dokument wie folgt:

1. Überschriftsebene 1: `DEIN_VORNAME`'s `GERICHT`
2. Füge ein offen lizenziertes Symbolbild für dein Gericht ein.

<!-- _footer: https://unsplash.com/,  https://pixabay.com/ und https://www.pexels.com/ sind gute Bilderquellen
-->

---

## Arbeitsauftrag [2]

3. Überschriftsebene 2: Zutaten
4. Ungeordnete Liste aus den Zutaten
5. Überschriftsebene 2: Zeit
6. Gib die Gesamtzeit an.
7. Gib die Zubereitungszeit an.
8. Überschriftsebene 2: Arbeitsschritte

---

## Arbeitsauftrag [3]

10. Formuliere die Arbeitsschritte in Form einer geordneten Liste.
11. Überschriftsebene 3: Tipps
12. Verfasse einen kurzen Text mit Tipps zum Rezept
13. Hebe die wichtigsten Textstellen fett bzw. kursiv hervor.

Speichere das Dokument unter dem folgenden Namen ab:

`DEIN_NACHNAME`_gericht.html

Zur Recherche empfiehlt sich die folgende Website: <https://www.w3schools.com/html/default.asp>

<!-- footer: "" -->

---

## Gibt's nicht was besseres zum Arbeiten?

<style scoped>
  footer {
  margin-bottom: 0px;
  height: 120px;
  }
</style>

<div style="height: 90px;"></div>

<div style="display: flex">
  <div style="flex: 1; text-align: center">
    <h4>Visual Studio </br> Code</h4>
    <img src="images/vscode.svg" alt="VSCode logo" width="150" style="display: block; margin: 0 auto;">
  </div>
  <div style="flex: 1.6; text-align: center;">
    <h4>Visual Studio Code </br> Live Preview Extension</h4>
    <img src="images/live_preview.png" alt="Live Preview Extension logo" width="150" style="display: block; margin: 0 auto;">
  </div>
</div>

<!-- _footer: https://code.visualstudio.com/brand </br> https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server
-->

---

## Zusatzauftrag

14. Bette ein passendes Youtube Video unter der Liste mit den Arbeitsschritten ein.

Tipp: Rufen das YouTube-Video auf. Unter "Teilen" gibt es die Option "Einbetten".

## Musterlösung

<https://youtu.be/o9nrYCr3re0>