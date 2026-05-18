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


# Quadratische Gleichungen lösen

Übung 4

---

## Quadratische Gleichung lösen

Schreibe ein Programm in Python, welches eine quadratische Gleichung der folgen Form löst:

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
x² + p x + q = 0

p = -2  
q = 1

<br>

x = 1
</div>

<br>

<div class="console">
x² + p x + q = 0

p = 1  
q = 2

In diesem Fall gibt es keine reelle Lösung!

</div>

</br>

---

#### Beispiele

<div class="console">
x² + p x + q = 0

p = 0  
q = -1

<br>

x₁ = 1
x₂ = -1
</div>

#### Nützliche Funktionen

| Funktion | Beschreibung |
|---|---|
| round(`ZAHL`,`ANZAHL STELLEN`) | Runden einer Zahl |
| sqrt(`ZAHL`) | Bilden der Quadratwurzel einer Zahl |
