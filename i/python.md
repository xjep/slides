---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
---

<style>
pre code {
  font-size: 40px;
}
</style>

# Python Grundlagen

Variablen, Funktionen, Operatoren und Verzweigungen

---

# Variablen

Eine Variable speichert einen Wert.

```python
name = "John_Doe"
alter = 15
```

- `name` speichert einen Text
- `alter` speichert eine Zahl

Variablen helfen uns, Informationen später wiederzuverwenden.

---

# Datentypen in Python

| Datentyp | Beispiel |
|---|---|
| Integer | `4` |
| Float | `4.5` |
| String | `"Hallo"` |
| Boolean | `True` oder `False` |

**Achtung:** String steht immer unter Anführungszeichen!

---

# Integer (ganze Zahlen)

```python
ganzzahl = 4

print("Die Variable ganzzahl hat den Wert", ganzzahl)
print("Der Datentyp ist", type(ganzzahl))
```

### Ausgabe

```text
Die Variable ganzzahl hat den Wert 4
Der Datentyp ist <class 'int'>
```

---

# Float (Kommazahlen)

```python
kommazahl = 4.5

print("Die Variable kommazahl hat den Wert", kommazahl)
print("Der Datentyp ist", type(kommazahl))
```

### Ausgabe

```text
Die Variable kommazahl hat den Wert 4.5
Der Datentyp ist <class 'float'>
```

---

# String (Text)

```python
text = "vier"

print("Die Variable text hat den Wert", text)
print("Der Datentyp ist", type(text))
```

**Wichtig:** Strings stehen immer in Anführungszeichen:


---

# Boolean (Wahrheitswerte)

```python
licht_an = False

print("Die Variable licht_an hat den Wert", licht_an)
print("Der Datentyp ist", type(licht_an))
```

Ein Boolean kann nur zwei Werte haben:

- `True`
- `False`

---

# Die Funktion `print()`

Mit `print()` können Werte im Terminal ausgegeben werden.

```python
print("Hallo Welt")
```

Auch Variablen können ausgegeben werden:

```python
name = "Anna"

print("Hallo", name)
```

---

# Die Funktion `input()`

Mit `input()` kann der Benutzer etwas eingeben.

```python
name = input("Wie heißt du? ")

print("Hallo", name)
```

### Achtung

`input()` liefert immer einen String zurück.

---

# Die Funktion `int()`

```python
six = input()
seven = input()

sixseven = print(six + seven)

six = int(six)
seven = int(seven)
thirteen = print(six + seven)
```

---

# Grundrechnungsarten

```python
x = 12
y = 4

print("Die Summe von", x, "und", y, "ist", x+y)
print("Die Differenz von", x, "und", y, "ist", x-y)
print("Das Produkt von", x, "und", y, "ist", x*y)
print("Der Quotient von", x, "und", y, "ist", x/y)

```

---

# Rest beim Dividieren

Der `%`-Operator berechnet den Rest einer Division.

```python
dividend = 17
divisor = 5

rest = dividend % divisor

print(rest)
```

---

# Vergleichsoperatoren

Vergleiche liefern immer:

- `True`
- `False`

## Achtung!

In Python schreibt man `True` und `False` groß!
Es gibt aber auch Sprachen, wo true und false klein geschrieben werden. Bsp: JavaScript

---

# Beispiele für Vergleiche

```python

x = int(input("Tell me x: "))
y = int(input("Tell me y: "))


print("It is", x < y, "that x is smaller as y.")
print("It is", x > y, "that x is bigger as y.")
print("It is", x == y, "that x is the same as y.")
print("It is", x != y, "that x is not the same as y.")
print("It is", x <= y, "that x is smaller or the same as y.")
print("It is", x >= y, "that x is bigger or the same as y.")
```

---

<style scoped>
pre code {
  font-size: 25px;
}
</style>

# Verzweigungen

Mit `if` kann ein Programm Entscheidungen treffen.

```python
licht_an = True
if licht_an:
    print("Das Licht ist an.")
```

```python
user_input = input("Ist das Licht an? Ja/Nein ")

if user_input == "Ja":
    print("Es ist hell.")

if user_input == "Nein":
    print("Es ist dunkel.")
```

---

<style scoped>
pre code {
  font-size: 28px;
}
</style>

# Typischer Programmablauf

```text
1. Eingabe erhalten
2. Daten verarbeiten
3. Ergebnis ausgeben
```

Beispiel:

```python
alter = input("Wie alt bist du? ")

alter = int(alter) + 1

print("Nächstes Jahr bist du", alter)
print("Der Datentyp von alter ist", type(alter))
```

---

<style scoped>
pre code {
  font-size: 28px;
}
</style>

# Häufige Fehler

## Strings vergessen

```python
name = Hallo    # falsch
name = "Hallo"  # richtig
```

</br>

## `=` und `==` verwechseln

```python
x = 5      # Wert zuweisen
x == 5     # vergleichen (würde True zurückgeben)
```

