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


# Grundrechnungsartenrechner

Übung 2

---

## Grundrechnungsartenrechner

- Schreibe ein Programm in Python, welches **zwei Zahlen**, sowie **ein Zeichen** als Input bekommt.
- Abhängig davon, ob es sich dabei um ein **+**,**-**,**\*** oder **/** handelt, soll entweder eine **Addition**, **Subtraktion**, **Multiplikation** oder **Division** durchgeführt werden.

---

#### Beispiele

<div class="console">
Sag mir eine Zahl <i>4</i> <br>
Sag mir noch eine Zahl <i>7</i> <br>
Welche Grundrechnungsart (+,-,*,/) soll ich durchführen? <i>+</i> 

Dein Ergebnis lautet 11
</div>

<div class="console">
Sag mir eine Zahl <i>30</i> <br>
Sag mir noch eine Zahl <i>10</i> <br>
Welche Grundrechnungsart (+,-,*,/) soll ich durchführen? <i>*</i> 

Dein Ergebnis lautet 3
</div>

---

### Bonus

Es gibt Bonuspunkte, wenn auf die Division durch 0 eingegangen wird.

#### Beispiel

<div class="console">
Sag mir eine Zahl <i>4</i> <br>
Sag mir noch eine Zahl <i>0</i> <br>
Welche Grundrechnungsart (+,-,*,/) soll ich durchführen? <i>/</i> 

Durch 0 kann man nicht dividieren!
</div>
