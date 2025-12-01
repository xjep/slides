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
    margin-top: -10px;
    height: 400px;
    }
</style>

# Haikei Waves verwenden

Martin Kleindienst

---

## Was ist Haikei

- [Haikei](https://app.haikei.app/) ist eine Website zum Erstellen von PNGs und Vektorgrafiken.
- Abgesehen von weniger [Ausnahmen](https://haikei.app/pricing/) kann Haikei dabei frei und sogar kommerziell für Webseiten verwendet werden.
- In diesem Foliensatz sehen wir uns an, wie wir Haikei nutzen können, um (wie in [diesem](https://lakshmigraha-ed.webflow.io/) Beispiel) Wellen als übergänge zwischen Abschnitten einer Website erstellen zu können.

---

## Design auswählen

Zunächst müssen wir uns einmal auf ein Design festlegen und dieses als SVG herunterladen.

![rightbound](images/using_haikei_waves/haikei.jpg)

---

## Bild im Projektordner abspeichern & öffnen

<div style="display:flex; align-items:center; gap:20px;">

<div style="flex:1;">
<ul>
  <li>Als nächstes müssen wir das Bild in unserem Projektordner abspeichern.</li>
  <li>Nun lässt sich das Bild direkt in VS Code bearbeiten.</li>
  <li>Eventuell muss dabei aber der Modus auf "Source Text" geändert werden.</li>
</ul>
</div>

<div style="flex:1; text-align:right;">
<img alt="VS Code Screenshot" src="images/using_haikei_waves/reopen_as_source_text.png" width="650">
</div>

</div>

---

## Code formatieren

<div style="display:flex; align-items:center; gap:20px;">

<div style="flex:1;">
Es empfiehlt sich den Code durch

- Rechtsklick
- Format Document

zu formatieren.
</div>

<div style="flex:1; text-align:right;">
<img alt="VS Code Screenshot" src="images/using_haikei_waves/format_document.png" width="650">
</div>

</div>

---

## Previewer installieren

Außerdem sollten wir uns eine Extension wie z.B. `Svg Preview` installieren, damit wir direkt sehen, was wir gerade am Bild ändern.

![VS Code Screenshot](images/using_haikei_waves/svg_preview.png)

---

## Pfad nach oben schieben

Durch das Verändern der viewBox und dem Entfernen von `width` und `height` können wir die Welle weiter nach oben schieben und damit das Bild niedriger machen.

![VS Code Screenshot](images/using_haikei_waves/viewBox.png)

---

## Hintergrund "verschieben"

Außerdem müssen wir den Hintergrund verkleinern in dem wir das `rect` Element bearbeiten.

![VS Code Screenshot](images/using_haikei_waves/background.png)

---

## Source Code kopieren

Nun können wir den Code in unsere vorbereitete HTML Datei an den gewünschten Stellen hineinkopieren und evtl. auch die Farben anpassen.
