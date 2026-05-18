---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
style: |
  pre code .hljs-number {
    color: #ffc400 !important;
    font-weight: bold;
  }
# style: |
#   pre {
#     background: #3d4661;
#   }
---

<style>
pre code {
  font-size: 25px;
}
</style>

# Python Grundlagen **Teil 2**

Verzweigungen (fortgeschritten) & Schleifen

---

<!-- header: Verzweigungen -->

## Verzweigungen

#### Rückblick:

```python
user_input = input("Ist das Licht an? Ja/Nein ")

if user_input == "Ja":
    print("Es ist hell.")

if user_input == "Nein":
    print("Es ist dunkel.")
```

Geht das nicht eleganter?

---

### Verzweigung mit if/else

Wenn entweder das eine, oder das andere passieren soll:

```python
user_input = input("Ist das Licht an? Ja/Nein ")

if user_input == "Ja":
    print("Es ist hell.")
else:
    print("Es ist dunkel.")
```

---

### Verzweigung mit if/elif/else

Wenn es mehr als 2 Möglichkeiten gibt:

```python
user_input = int(input("Sag mir eine Zahl "))

if user_input > 5:
    print("Deine Zahl ist größer als 5.")
elif user_input < 5:
    print("Deine Zahl ist kleiner als 5.")
else:
    print("Deine Zahl ist 5.")
```

---

<!-- header: Schleifen -->

## Schleifen

Statt 

```python
print("Hallo")
print("Hallo")
print("Hallo")
print("Hallo")
```

kann man auch

```python
for i in range(4):
    print("Hallo")
```

schreiben.

---

<!-- header: while-Schleife -->

## While Schleife

```python
zahl = 1

while zahl <= 5:
    print(zahl)
    zahl = zahl + 1
```

Solange die Bedingung wahr ist, wird der Code durchgeführt.

---

### Achtung: Endlosschleife

```python
zahl = 1

while zahl <= 5:
    print(zahl)
```

- *Problem:* Die Variable `zahl` verändert sich nicht.
- Die Bedingung bleibt immer wahr.
- Das Programm endet nicht!

---

### (einfaches) Anwendungsbeispiel

```python
passwort = ""

while passwort != "geheim":
    passwort = input("Passwort eingeben: ")

print("Zugriff erlaubt.")
```

Die Schleife endet erst, wenn das richtige Passwort eingegeben wurde.

(in der Praxis ist eine Passwortüberprüfung (*hoffentlich*) deutlich komplizierter.)

---

<!-- header: for-Schleifen -->

## `for`-Schleife

Mit der `for`-Schleife kann man etwas eine bestimmte Anzahl oft wiederholen.

```python
for i in range(5):
    print(i)
```

erzeugt

```python
0, 1, 2, 3, 4
```

**Achtung:** Die Zählung beginnt bei 0!

---

## `for`-Schleife mit Start und Endwert

Man kann den Startwert auch selbst festlegen.

```python
for i in range(3, 8):
    print(i)
```

erzeugt

```python
3, 4, 5, 6, 7
```

**Beachte:** Der letzte Wert wird nie mitgezählt. (*Abbruchbedingung*)

---

## `for`-Schleife mit Schrittgröße

Man kann die Schrittgröße auch selbst festlegen.

```python
for i in range(0, 11, 2):
    print(i)
```

erzeugt

```python
0, 2, 4, 6, 8, 10
```

---

<!-- header: Spezielle for-Schleifen -->

## Schleifen mit Texten

```python
wort = "Python"

for buchstabe in wort:
    print(buchstabe)
```

Die Schleife geht Zeichen für Zeichen durch den Text.

---

## Schleifen mit Listen

```python
farben = ["Rot", "Blau", "Grün"]

for farbe in farben:
    print(farbe)
```

*Was eine Liste ist besprechen wir später.*

---

<!-- header: "" -->

## Zusammenfassung

### while

- läuft solange eine Bedingung wahr ist
- Hier muss man aufpassen, dass es zu keiner Endlosschleife kommt.

### for

- läuft eine bestimmte Anzahl oft
- oder über Elemente einer Liste/Textes