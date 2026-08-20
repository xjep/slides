## Das Host-/Device-System bei USB

USB arbeitet grundsätzlich mit zwei Rollen:

- **Host:** steuert die Verbindung, erkennt angeschlossene Geräte und organisiert den Datenverkehr. Typische Hosts sind PCs, Laptops, Smartphones im Host-Modus oder Spielekonsolen.
- **Device:** wird vom Host erkannt und stellt eine Funktion bereit. Beispiele sind USB-Sticks, Mäuse, Tastaturen, Drucker, Webcams und externe Festplatten.

Ein USB-Device kann normalerweise nicht selbstständig eine Verbindung zum Host aufbauen. Der Host liefert die grundlegende Steuerung und fragt das Device regelmäßig nach Daten oder Statusinformationen ab.

Ein **USB-Hub** erweitert einen Anschluss. Er ist gegenüber dem Computer ein Device, stellt aber für die daran angeschlossenen Geräte zusätzliche Host-Anschlüsse bereit. Dadurch können mehrere Geräte über einen Anschluss betrieben werden.

## Die wichtigsten USB-Steckertypen

| Steckertyp | Typisches Aussehen und Einsatz | Übliche Rolle |
|---|---|---|
| **USB Typ A** | Flacher, rechteckiger Stecker; häufig an PCs, Ladegeräten, Fernsehern und Hubs | Meist Host-Seite |
| **USB Typ B** | Fast quadratischer Stecker mit abgeschrägten oberen Ecken; häufig an Druckern und größeren Geräten | Meist Device-Seite |
| **Mini-USB** | Kleiner, trapezförmiger Stecker; ältere Kameras, Navigationsgeräte und MP3-Player | Device-Seite |
| **Micro-USB** | Sehr flacher, kleiner Stecker; ältere Smartphones, Controller und kleine Elektronik | Device-Seite |
| **USB Typ C** | Kleiner, abgerundeter, symmetrischer Stecker; moderne Computer, Smartphones und Zubehör | Host- oder Device-Seite |

### USB Typ A

USB-A ist der klassische rechteckige Anschluss. Er befindet sich typischerweise am **Host**, also zum Beispiel am Computer.

Ein Kabel mit USB-A an einer Seite und einem anderen Stecker an der anderen Seite verbindet meist:

```text
Computer mit USB-A  →  USB-Gerät
```

USB-A-Stecker sind nicht symmetrisch und passen nur in einer Richtung hinein. Ein Anschluss kann USB 2.0, USB 3.x oder verschiedene Stromstärken unterstützen. Die Form allein sagt daher nicht immer etwas über die Geschwindigkeit aus.

### USB Typ B

USB-B ist vor allem von Druckern bekannt. Der größere, fast quadratische Stecker kommt normalerweise in das Gerät, während die USB-A-Seite in den Computer gesteckt wird:

```text
Computer mit USB-A  →  Drucker mit USB-B
```

Es gibt mehrere Varianten:

- **Standard-B:** der klassische große Druckeranschluss
- **Mini-B:** bei älteren Kameras und Geräten
- **Micro-B:** bei älteren Smartphones und vielen USB-2.0-Geräten
- **Micro-B USB 3.0:** breiter Micro-USB-Anschluss, häufig bei älteren externen Festplatten

### Mini-USB

Mini-USB ist ein älterer, kleinerer Anschluss. Er wurde unter anderem bei Digitalkameras, Navigationsgeräten und älteren MP3-Playern verwendet.

Mini-USB war hauptsächlich ein Geräteanschluss. Die entsprechende Host-Seite war meist USB-A am Computer.

### Micro-USB

Micro-USB war lange der Standardanschluss für Android-Smartphones, Bluetooth-Lautsprecher, Controller und andere kleine Geräte.

Typischer Aufbau:

```text
USB-A am Ladegerät oder Computer  →  Micro-USB am Gerät
```

Micro-USB ist ebenfalls nicht symmetrisch und kann nur in einer Orientierung eingesteckt werden. Die verbreitete Variante unterstützt USB 2.0. Bei externen Festplatten gab es außerdem einen breiteren **Micro-B-USB-3.0-Anschluss**, der zusätzliche Kontakte für höhere Übertragungsraten besitzt.

Mit **USB OTG** konnten manche Smartphones über Micro-USB auch als Host arbeiten. Dafür war häufig ein spezielles OTG-Kabel oder ein OTG-Adapter erforderlich.

### USB Typ C

USB-C ist der moderne, symmetrische Anschluss. Er kann in beiden Richtungen eingesteckt werden und ist an Smartphones, Laptops, Tablets, Monitoren, Dockingstationen und Ladegeräten verbreitet.

Im Gegensatz zu USB-A und USB-B legt die Form von USB-C die Rolle nicht fest. Je nach Verbindung kann ein USB-C-Gerät als Host oder als Device arbeiten:

```text
Laptop mit USB-C  →  Smartphone
Laptop: Host      →  Smartphone: Device
```

Oder:

```text
Smartphone mit USB-C  →  USB-Stick
Smartphone: Host      →  USB-Stick: Device
```

Bei zwei USB-C-Geräten wird über elektrische Signale und gegebenenfalls USB Power Delivery ausgehandelt, welches Gerät welche Rolle übernimmt. Dabei können neben den Datenrollen auch die Rollen für die Stromversorgung festgelegt werden. Ein Gerät kann also Strom liefern, während das andere ihn aufnimmt.

USB-C sagt allerdings allein noch nicht, welche Funktionen unterstützt werden. Je nach Gerät und Kabel können verfügbar sein:

- USB 2.0 oder USB 3.x
- sehr hohe Datenraten
- Laden mit höherer Leistung
- Bildübertragung, etwa DisplayPort
- Thunderbolt
- USB4

Ein USB-C-Anschluss kann daher äußerlich gleich aussehen, aber deutlich unterschiedliche Fähigkeiten besitzen.

## USB-Kabel und Adapter

Ein Kabel verbindet die Rollen normalerweise passend miteinander:

```text
Host-Anschluss  →  Device-Anschluss
USB-A           →  USB-B
USB-A           →  Micro-USB
USB-C           →  USB-C
```

Bei USB-C zu USB-C wird die Rollenverteilung elektronisch ausgehandelt. Bei USB-A zu USB-C ist die USB-A-Seite in der Praxis meist am Host, während USB-C am Gerät steckt.

Adapter verändern hauptsächlich die mechanische Anschlussform. Sie machen aus einem Anschluss aber nicht automatisch einen vollwertigen Host-Anschluss. Ob beispielsweise ein Smartphone einen USB-Stick über einen USB-C-Adapter verwenden kann, hängt davon ab, ob es den USB-Host-Betrieb unterstützt.

Kurz zusammengefasst: **Der Host steuert die Verbindung, das Device wird gesteuert.** USB-A und USB-B weisen häufig auf eine typische Rollenverteilung hin, während USB-C für beide Rollen verwendet werden kann.