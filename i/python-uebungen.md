---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
style: |
  .console {
    background: #1e1e1e;
    color: #d4d4d4;
    border-radius: 6px;
    padding: 18px 22px;
    font-family: Consolas, "Courier New", monospace;
    font-size: 22px;
    line-height: 1.5;
    border: 1px solid #333;
  }
---


# Python Übungen

Schaltjahr ermitteln & Quadratische Gleichungen lösen

---

## Übung 1: Schaltjahr ermitteln

Schreibt ein Programm in Python, dass:

1. nach einem Jahr fragt.
2. überprüft, ob es ein Schaltjahr ist.
3. das Ergebnis (`Schaltjahr`/`kein Schaltjahr`) ausgibt.

---

# Beispiele

```text
Sag mir ein Jahr: 2000

Das eingegebene Jahr ist ein Schaltjahr.
```

```text
Sag mir ein Jahr: 2001

Das eingegebene Jahr ist kein Schaltjahr.
```

---

## Übung 2: Quadratische Gleichung lösen

Schreibt ein Programm in Python, welches eine quadratische Gleichung der folgen Form löst:

```text
x² + p x + q = 0
```


Das Programm soll folgende Fälle unterscheiden:

- Zwei reelle Lösungen
- Eine reelle Lösung
- Keine reelle Lösung

---

#### Beispiele

<div class="console">
<span class="blue">x² + p x + q = 0</span>

p = -2  
q = 1

<br>

<span class="green">x = 1</span>
</div>

<br>

<div class="console">
<span class="blue">x² + p x + q = 0</span>

p = 1  
q = 2

<span class="yellow">
In diesem Fall gibt es keine reelle Lösung!
</span>
</div>

</br>

---

#### Beispiele

<div class="console">
<span class="blue">x² + p x + q = 0</span>

p = 0  
q = -1

<br>

<span class="green">x₁ = 1</span>  
<span class="green">x₂ = -1</span>
</div>

#### Nützliche Funktionen

| Funktion | Beschreibung |
|---|---|
| round(`ZAHL`,`ANZAHL STELLEN`) | Runden einer Zahl |
| sqrt(`ZAHL`) | Bilden der Quadratwurzel einer Zahl |
