var e={id:`bohr`,name:`Bohr`,leitfrage:`Warum leuchtet Wasserstoff nur in ganz bestimmten Farben?`,minuten:12,merksaetze:[`Bohr: Das Elektron kreist nur auf bestimmten Bahnen. Ihre Radien wachsen mit n².`,`Zu jeder Bahn gehört eine feste Energie: E = −13,6 eV / n². Außen ist sie am höchsten.`,`Springt das Elektron nach unten, sendet das Atom ein Photon aus. Dessen Energie ist genau der Unterschied der beiden Stufen.`,`Darum besteht das Licht von Wasserstoff aus einzelnen Linien. Warum nur diese Bahnen erlaubt sind, erklärt Bohr nicht.`],grund:{modell:`atom`,bild:`bahn`},schritte:[{titel:`Das Atom`,blick:`schraeg`,start:{n:1,weite:2,beschriftung:!0},auftrag:{text:`Das ist ein Wasserstoffatom, wie Niels Bohr es sich 1913 vorgestellt hat: in der Mitte der Kern, darum kreist ein einzelnes Elektron wie ein Planet um die Sonne. Dreh die Szene mit der Maus oder dem Finger und sieh dir alles an.`,bedienung:[],erledigt:(e,t)=>t.gedreht},aufloesung:{text:`Das Bild ist gewaltig vergrößert. Die Bahn hat einen Radius von 0,053 nm, das ist etwa ein Zwanzigmillionstel Millimeter. Der Kern wäre in diesem Maßstab unsichtbar klein. Der Schirm im Hintergrund fängt gleich das Licht auf, das das Atom aussendet.`,ausfuehrlich:{titel:`Das Problem mit dem Planetenbild`,html:`
            <p>Um 1911 wusste man: Ein Atom hat einen winzigen, positiv geladenen Kern, und
            darum bewegen sich negativ geladene Elektronen. Der Vergleich mit Sonne und
            Planeten lag nahe, denn auch hier zieht die Mitte an.</p>
            <p>Das Bild hat aber einen Haken. Ein Elektron, das im Kreis läuft, wird ständig
            abgelenkt, also beschleunigt. Nach den Gesetzen der Elektrizität strahlt eine
            beschleunigte Ladung Energie ab. Das Elektron müsste also immer langsamer werden
            und in einem Bruchteil einer Sekunde in den Kern stürzen. Atome gäbe es dann nicht.</p>
            <p>Niels Bohr löste das 1913 mit einer kühnen Forderung: Auf bestimmten Bahnen
            strahlt das Elektron einfach nicht. Warum, konnte er nicht sagen. Das Modell
            erklärte aber auf einen Schlag die Farben, in denen Wasserstoff leuchtet.</p>`}}},{titel:`Erlaubte Bahnen`,blick:`oben`,start:{n:1,weite:5},frage:{text:`Ein Planet kann in jedem beliebigen Abstand um die Sonne kreisen. Gilt das auch für das Elektron im Atom?`,antworten:[`Ja, jeder Abstand ist möglich`,`Nein, nur ganz bestimmte Abstände`,`Nein, es gibt nur einen einzigen Abstand`],richtig:1},auftrag:{text:`Setz das Elektron nacheinander auf die Bahnen 1 bis 5 und vergleiche die Radien.`,bedienung:[`stufen`,`anzeigeBahn`],erledigt:(e,t)=>t.besucht.length>=4},aufloesung:{text:`Nur bestimmte Bahnen sind erlaubt. Ihre Radien wachsen mit dem Quadrat der Nummer n: 1, 4, 9, 16, 25 mal der kleinste Radius a₀ = 0,053 nm. Dazwischen gibt es nichts. Die Nummer n heißt Hauptquantenzahl.`,ausfuehrlich:{titel:`Bohrs Forderungen`,html:`
            <p>Bohr stellte zwei Forderungen auf. Man nennt sie Postulate, weil sie nicht
            hergeleitet, sondern vorausgesetzt werden.</p>
            <h3>1. Es gibt erlaubte Bahnen</h3>
            <p>Das Elektron kann nur auf bestimmten Kreisbahnen laufen. Auf ihnen strahlt es
            keine Energie ab. Für die Radien gilt:</p>
            <p class="formel"><i>r</i><sub><i>n</i></sub> = <i>n</i>² · <i>a</i>₀ &nbsp; mit &nbsp; <i>a</i>₀ = 0,053 nm</p>
            <p><i>a</i>₀ heißt Bohrscher Radius.</p>
            <h3>2. Licht entsteht beim Sprung</h3>
            <p>Wechselt das Elektron von einer Bahn auf eine tiefere, gibt das Atom die
            Energiedifferenz als Licht ab. Das kommt in den nächsten Schritten.</p>`}}},{titel:`Energiestufen`,blick:`schraeg`,start:{n:1,weite:4},frage:{text:`Auf welcher Bahn hat das Elektron die meiste Energie?`,antworten:[`Auf der innersten`,`Auf der äußersten`,`Auf allen gleich viel`],richtig:1},auftrag:{text:`Geh die Bahnen durch und lies die Energie ab. Die Leiste „Energie“ zeigt, wie weit die Stufen auseinanderliegen.`,bedienung:[`stufen`,`anzeigeBahn`],erledigt:(e,t)=>t.besucht.length>=3&&t.besucht.includes(4)},aufloesung:{text:`Außen ist die Energie am höchsten. Sie ist negativ, weil das Elektron an den Kern gebunden ist: Man muss Energie hineinstecken, um es loszureißen. Auf Bahn n beträgt sie E = −13,6 eV / n². Nach oben rücken die Stufen immer enger zusammen.`,ausfuehrlich:{titel:`Elektronenvolt und negative Energie`,html:`
            <p>Ein Elektronenvolt (eV) ist die Energie, die ein Elektron gewinnt, wenn es eine
            Spannung von einem Volt durchläuft. Das ist winzig: 1 eV = 1,6 · 10<sup>−19</sup> J.
            Für Atome ist es das passende Maß.</p>
            <table>
              <tr><th>Bahn <i>n</i></th><th>Energie</th></tr>
              <tr><td>1</td><td>−13,6 eV</td></tr>
              <tr><td>2</td><td>−3,40 eV</td></tr>
              <tr><td>3</td><td>−1,51 eV</td></tr>
              <tr><td>4</td><td>−0,85 eV</td></tr>
              <tr><td>5</td><td>−0,54 eV</td></tr>
            </table>
            <p>Null bedeutet: Das Elektron ist gerade eben frei und ruht weit weg vom Kern.
            Alles darunter ist gebunden. Um das Elektron von Bahn 1 ganz abzulösen, braucht
            man also 13,6 eV. Das heißt Ionisierungsenergie.</p>
            <p>Die Bahn 1 heißt Grundzustand, alle höheren heißen angeregte Zustände.</p>`}}},{titel:`Der Sprung`,blick:`schraeg`,start:{n:3,weite:3},frage:{text:`Das Elektron ist auf Bahn 3 und fällt auf Bahn 2. Dort hat es weniger Energie. Wo bleibt der Rest?`,antworten:[`Er verschwindet`,`Er wird als Licht abgestrahlt`,`Der Kern nimmt ihn auf`],richtig:1},auftrag:{text:`Lass das Elektron von Bahn 3 auf Bahn 2 springen und beobachte, was zum Schirm fliegt.`,bedienung:[`stufen`,`anzeigeSprung`],erledigt:(e,t)=>t.spruenge.includes(`3-2`)},aufloesung:{text:`Beim Sprung nach unten sendet das Atom ein Lichtteilchen aus, ein Photon. Es trägt genau den Energieunterschied der beiden Bahnen, hier 1,89 eV. Zu dieser Energie gehört rotes Licht mit 656 nm. Nach oben springt das Elektron nur, wenn das Atom genau diese Energie aufnimmt.`,ausfuehrlich:{titel:`Von der Energie zur Farbe`,html:`
            <p>Die Energie eines Photons hängt von der Frequenz <i>f</i> seines Lichts ab:</p>
            <p class="formel"><i>E</i> = <i>h</i> · <i>f</i></p>
            <p><i>h</i> ist die Planck-Konstante. Mit <i>f</i> = <i>c</i> / <i>λ</i>
            (Lichtgeschwindigkeit durch Wellenlänge) wird daraus:</p>
            <p class="formel"><i>λ</i> = <i>h</i> · <i>c</i> / <i>E</i></p>
            <p>Praktisch für Atome: <i>h</i> · <i>c</i> = 1240 eV · nm. Für den Sprung von
            Bahn 3 auf Bahn 2:</p>
            <p class="formel">Δ<i>E</i> = −1,51 eV − (−3,40 eV) = 1,89 eV</p>
            <p class="formel"><i>λ</i> = 1240 eV · nm / 1,89 eV = <b>656 nm</b></p>
            <p>Viel Energie bedeutet kurze Wellenlänge (blau, ultraviolett), wenig Energie
            lange Wellenlänge (rot, infrarot).</p>
            <p>Umgekehrt kann ein Atom ein Photon verschlucken und das Elektron damit nach
            oben heben. Das klappt nur, wenn die Energie des Photons genau zu einem Sprung
            passt.</p>`}}},{titel:`Das Spektrum`,blick:`schraeg`,start:{n:5,weite:5},frage:{text:`Springt das Elektron von Bahn 4 statt von Bahn 3 auf Bahn 2, wird mehr Energie frei. Welche Farbe hat das Licht dann?`,antworten:[`Dasselbe Rot`,`Blaugrün`,`Ein dunkleres Rot`],richtig:1},auftrag:{text:`Erzeuge drei verschiedene farbige Linien auf dem Schirm. Farbig wird es nur bei Sprüngen, die auf Bahn 2 enden. Probier auch aus, wo Sprünge auf Bahn 1 landen.`,bedienung:[`stufen`,`anzeigeSprung`,`spektrumLeeren`],erledigt:(e,t)=>t.linien.length>=3},aufloesung:{text:`Jeder Sprung ergibt eine Linie an einer festen Stelle. Die Sprünge auf Bahn 2 liegen im Sichtbaren: rot, blaugrün, violett. Sprünge auf Bahn 1 setzen viel mehr Energie frei und landen im Ultravioletten, Sprünge auf Bahn 3 im Infraroten. Genau diese Linien misst man an leuchtendem Wasserstoffgas.`,ausfuehrlich:{titel:`Der Fingerabdruck der Atome`,html:`
            <p>Die sichtbaren Linien des Wasserstoffs heißen Balmer-Serie, nach dem Schweizer
            Lehrer Johann Balmer. Er fand 1885 eine Formel für ihre Wellenlängen, ohne zu
            wissen, woher sie kommen. Bohrs Modell lieferte 28 Jahre später die Erklärung.</p>
            <table>
              <tr><th>Sprung</th><th>Energie</th><th>Wellenlänge</th><th>Farbe</th></tr>
              <tr><td>3 → 2</td><td>1,89 eV</td><td>656 nm</td><td>rot</td></tr>
              <tr><td>4 → 2</td><td>2,55 eV</td><td>486 nm</td><td>blaugrün</td></tr>
              <tr><td>5 → 2</td><td>2,86 eV</td><td>434 nm</td><td>violett</td></tr>
              <tr><td>2 → 1</td><td>10,2 eV</td><td>122 nm</td><td>ultraviolett</td></tr>
              <tr><td>4 → 3</td><td>0,66 eV</td><td>1875 nm</td><td>infrarot</td></tr>
            </table>
            <p>Jedes chemische Element hat seine eigenen Energiestufen und damit sein eigenes
            Linienmuster. Daran erkennt man, woraus ein leuchtendes Gas besteht, sogar bei
            Sternen. Das Verfahren heißt Spektralanalyse.</p>`}}},{titel:`Was Bohr nicht erklärt`,blick:`schraeg`,start:{n:2,weite:3},frage:{text:`Bohrs Modell sagt die Linien des Wasserstoffs richtig voraus. Erklärt es auch, warum gerade diese Bahnen erlaubt sind?`,antworten:[`Ja, das folgt aus der Anziehung des Kerns`,`Nein, Bohr hat es gefordert, ohne es zu begründen`],richtig:1},aufloesung:{text:`Bohr hat die erlaubten Bahnen gefordert, begründen konnte er sie nicht. Offen bleibt auch, warum ein kreisendes Elektron dort nicht abstrahlt. Das Modell rechnet richtig, aber es erklärt nicht. Die Erklärung kommt im nächsten Kapitel: Das Elektron ist keine kreisende Kugel.`,ausfuehrlich:{titel:`Wo das Modell an seine Grenzen kommt`,html:`
            <ul>
              <li>Es passt nur für Atome mit einem einzigen Elektron. Schon bei Helium
              stimmen die Linien nicht mehr.</li>
              <li>Es sagt nicht, warum manche Linien heller sind als andere.</li>
              <li>Es kann die chemische Bindung nicht erklären.</li>
              <li>Eine scharfe Bahn würde bedeuten, dass man Ort und Geschwindigkeit des
              Elektrons gleichzeitig genau kennt. Das ist nach heutigem Wissen grundsätzlich
              unmöglich (Unschärferelation).</li>
            </ul>
            <p>Trotzdem steht das Modell zu Recht im Lehrplan: Die Energiestufen und die
            Entstehung der Linien stimmen. Falsch ist nur das Bild von der Kreisbahn.</p>`}}}]},t={id:`welle`,name:`Welle`,leitfrage:`Warum sind nur bestimmte Bahnen erlaubt?`,minuten:10,merksaetze:[`Jedes Teilchen hat eine Wellenlänge: λ = h / (m · v). Im Atom ist das Elektron eine Welle um den Kern.`,`Die Welle bleibt nur bestehen, wenn sie sich schließt: 2 · π · r = n · λ. Das ergibt genau Bohrs Bahnen.`,`Es ist eine stehende Welle. Nichts kreist, also wird auch nichts abgestrahlt.`,`Eine Bahn gibt es nicht. Es gibt nur die Wahrscheinlichkeit, das Elektron an einem Ort zu finden (Orbital).`],grund:{modell:`atom`,bild:`welle`},schritte:[{titel:`Das Elektron als Welle`,blick:`schraeg`,start:{bild:`bahn`,n:3,weite:3},frage:{text:`Im Doppelspalt-Versuch bilden einzelne Elektronen Streifen, als wären sie Wellen. Was könnte das für das Elektron im Atom bedeuten?`,antworten:[`Nichts, im Atom ist es ein Teilchen auf einer Bahn`,`Auch im Atom verhält es sich wie eine Welle`,`Im Atom gibt es gar kein Elektron`],richtig:1},auftrag:{text:`Schalte das Bild von „Bahn“ auf „Welle“ um und vergleiche die beiden.`,bedienung:[`bildBahnWelle`,`stufen`],erledigt:e=>e.bild===`welle`},aufloesung:{text:`Louis de Broglie schlug 1924 vor: Jedes Teilchen hat eine Wellenlänge, λ = h / (m · v). Dann kreist im Atom keine Kugel, sondern um den Kern liegt eine Welle. Das Band zeigt sie: Es schwingt auf und ab, und an manchen Stellen bleibt es immer in Ruhe.`,ausfuehrlich:{titel:`Die Wellenlänge eines Teilchens`,html:`
            <p class="formel"><i>λ</i> = <i>h</i> / (<i>m</i> · <i>v</i>)</p>
            <p><i>h</i> ist die Planck-Konstante, <i>m</i> die Masse und <i>v</i> die
            Geschwindigkeit des Teilchens. Das Produkt <i>m</i> · <i>v</i> heißt Impuls. Die
            Wellenlänge nennt man De-Broglie-Wellenlänge oder Materiewellenlänge.</p>
            <table>
              <tr><th>Was</th><th>Wellenlänge</th></tr>
              <tr><td>Elektron auf der ersten Bohrschen Bahn</td><td>0,33 nm</td></tr>
              <tr><td>Fußball beim Schuss (0,43 kg, 30 m/s)</td><td>5 · 10<sup>−35</sup> m</td></tr>
            </table>
            <p>Beim Elektron ist die Wellenlänge so groß wie das Atom selbst. Deshalb bestimmt
            sie dort alles. Beim Fußball ist sie unmessbar klein, deshalb merkt man im Alltag
            nichts von Materiewellen.</p>
            <p>De Broglies Idee war zunächst reine Vermutung. Drei Jahre später wurde sie
            bestätigt: Elektronen, die an einem Kristall gestreut werden, ergeben ein
            Interferenzmuster.</p>`}}},{titel:`Passt die Welle?`,blick:`schraeg`,start:{probe:!0,radius:5.6,weite:4},frage:{text:`Die Welle läuft einmal um den Kern herum. Was muss gelten, damit sie bestehen bleibt?`,antworten:[`Nichts, jede Welle bleibt bestehen`,`Nach einem Umlauf muss sie genau auf ihren eigenen Anfang treffen`,`Sie muss möglichst kurz sein`],richtig:1},auftrag:{text:`Das ist eine Probebahn, deren Radius du frei wählen kannst. Der helle Strich zeigt die Lücke zwischen Anfang und Ende der Welle. Verändere den Radius und such zwei Stellen, an denen sich die Welle schließt.`,bedienung:[`radius`],erledigt:(e,t)=>t.passend.length>=2},aufloesung:{text:`Die Welle schließt sich nur, wenn eine ganze Zahl von Wellenlängen auf den Umfang passt: 2 · π · r = n · λ. Das gelingt genau bei den Radien 1, 4, 9, 16 · a₀, also auf Bohrs Bahnen. Was Bohr fordern musste, ergibt sich aus dem Wellenbild von selbst.`,ausfuehrlich:{titel:`Warum sich eine offene Welle auslöscht`,html:`
            <p>Schließt sich die Welle nicht, trifft sie nach jedem Umlauf versetzt auf sich
            selbst. Nach vielen Umläufen liegt an jeder Stelle mal ein Berg und mal ein Tal
            übereinander, und alles hebt sich auf. Das ist dieselbe Auslöschung wie in den
            dunklen Streifen des Doppelspalts.</p>
            <p>Bestehen bleibt nur eine Welle, die nach einem Umlauf genau in sich selbst
            übergeht:</p>
            <p class="formel">2 · π · <i>r</i> = <i>n</i> · <i>λ</i></p>
            <h3>Woher kommen die Radien?</h3>
            <p>Je weiter außen das Elektron ist, desto langsamer wäre es auf einer Kreisbahn
            und desto länger ist seine Wellenlänge. Rechnet man das mit der Anziehung des
            Kerns durch, passen auf eine Bahn mit Radius <i>r</i> genau</p>
            <p class="formel">√(<i>r</i> / <i>a</i>₀)</p>
            <p>Wellenlängen. Eine ganze Zahl <i>n</i> kommt nur heraus, wenn
            <i>r</i> = <i>n</i>² · <i>a</i>₀ ist. Das sind Bohrs Radien, und <i>n</i> ist die
            Zahl der Wellenlängen auf dem Umfang.</p>`}}},{titel:`Stehende Welle`,blick:`schraeg`,start:{n:3,weite:4},frage:{text:`Die Welle hat sich geschlossen. Läuft bei ihr noch etwas um den Kern herum?`,antworten:[`Ja, die Wellenberge laufen im Kreis`,`Nein, sie schwingt auf der Stelle; Berge und ruhende Stellen bleiben, wo sie sind`],richtig:1},auftrag:{text:`Sieh dir die Zustände 1 bis 4 an. Zähle jeweils die Stellen, die immer in Ruhe bleiben; sie heißen Knoten und sind dunkel gezeichnet. Mit „Anhalten“ oben kannst du das Bild einfrieren.`,bedienung:[`stufen`],erledigt:(e,t)=>t.besucht.length>=3},aufloesung:{text:`Es ist eine stehende Welle, wie auf einer Gitarrensaite: Sie schwingt, aber nichts wandert. Im Zustand n hat sie 2 · n Knoten. Damit löst sich auch das Rätsel aus dem ersten Kapitel: Wo nichts kreist, wird nichts abgestrahlt. Der Zustand ist stabil.`,ausfuehrlich:{titel:`Stehende Wellen`,html:`
            <p>Zupfst du eine Gitarrensaite an, laufen Wellen zu den Enden, werden dort
            zurückgeworfen und überlagern sich mit sich selbst. Übrig bleibt ein Muster, das
            auf der Stelle schwingt: An manchen Punkten bewegt sich die Saite gar nicht
            (Knoten), dazwischen schwingt sie am stärksten (Bäuche).</p>
            <p>Eine Saite kann nicht beliebig schwingen. Es passen nur ganze Bäuche darauf.
            Deshalb hat sie einen Grundton und einzelne Obertöne, aber nichts dazwischen.</p>
            <p>Beim Elektron im Atom ist es genauso: Nur bestimmte stehende Wellen sind
            möglich, und zu jeder gehört eine feste Energie. Das ist der Grund, warum die
            Energie im Atom in Stufen vorkommt. Man sagt, sie ist gequantelt.</p>`}}},{titel:`Wo ist das Elektron?`,blick:`schraeg`,start:{bild:`wolke`,n:1,weite:2},frage:{text:`Man misst sehr oft, wo sich das Elektron im Grundzustand gerade befindet. Was kommt heraus?`,antworten:[`Immer genau der Abstand der ersten Bohrschen Bahn`,`Jedes Mal ein anderer Ort; zusammen ergeben sie eine Wolke`,`Jeder Ort im Raum ist gleich wahrscheinlich`],richtig:1},auftrag:{text:`Miss den Ort ein paarmal einzeln, dreh dann die Rate hoch und warte auf 800 Messungen. Der Ring zeigt zum Vergleich die erste Bohrsche Bahn.`,bedienung:[`messen`,`messrate`,`messzahl`],erledigt:(e,t)=>t.messungen>=800},aufloesung:{text:`Jede Messung findet das Elektron an einem anderen Ort. Eine Bahn gibt es nicht. Was bleibt, ist eine Wahrscheinlichkeit: Die Wolke ist dort dicht, wo die Welle stark ist. Am häufigsten liegt der Abstand beim Bohrschen Radius, aber längst nicht immer. Solche Wolken heißen Orbitale.`,ausfuehrlich:{titel:`Vom Ring zur Wolke`,html:`
            <p>Die Welle auf dem Ring aus den letzten Schritten ist ein Zwischenschritt. Sie
            stammt von de Broglie (1924) und denkt sich die Welle noch entlang einer Bahn.</p>
            <p>Erwin Schrödinger fand 1926 die Gleichung, die die Welle des Elektrons im
            ganzen Raum um den Kern beschreibt. Ihre Lösungen sind stehende Wellen in drei
            Richtungen. Sie liefern dieselben Energiestufen wie Bohr, aber ohne Bahnen.</p>
            <p>Die Regel für die Messung ist dieselbe wie beim Doppelspalt: Das Quadrat der
            Welle an einem Ort gibt an, wie wahrscheinlich man das Elektron dort findet. Die
            Simulation würfelt jede Messung nach dieser Verteilung.</p>
            <p>Im Grundzustand ist der wahrscheinlichste Abstand vom Kern genau der Bohrsche
            Radius. Bohr lag also nicht daneben, er hat nur aus einer Wahrscheinlichkeit eine
            feste Bahn gemacht.</p>
            <p>Im freien Labor kannst du auch die Wolken der Zustände 2 und 3 messen. Sie
            haben Schalen, zwischen denen das Elektron fast nie gefunden wird.</p>`}}}]},n={id:`topf`,name:`Potentialtopf`,leitfrage:`Wie rechnet man mit einer eingesperrten Welle?`,minuten:14,merksaetze:[`Im Potentialtopf der Breite L passen nur stehende Wellen mit λ = 2 · L / n.`,`Daraus folgt die Energie: E = h² · n² / (8 · m · L²). Sie wächst mit n² und fällt mit 1 / L².`,`Den Zustand n = 0 gibt es nicht: Ein eingesperrtes Elektron ist nie ganz in Ruhe.`,`Das Quadrat der Welle ist die Aufenthaltswahrscheinlichkeit. An den Knoten findet man das Elektron nie.`],grund:{modell:`topf`,bild:`welle`,n:1,breiteNm:1},schritte:[{titel:`Der Potentialtopf`,blick:`seite`,start:{beschriftung:!0},frage:{text:`Ein Elektron ist zwischen zwei Wänden eingesperrt, die es nicht durchdringen kann. Als Welle muss es an beiden Wänden null sein, wie eine Saite, die an beiden Enden festgehalten wird. Welche Wellen passen hinein?`,antworten:[`Jede beliebige Wellenlänge`,`Nur solche, bei denen eine ganze Zahl halber Wellenlängen in den Topf passt`,`Nur eine einzige`],richtig:1},auftrag:{text:`Schalte die Zustände 1 bis 4 durch und sieh dir an, wie viele Bäuche die Welle jeweils hat.`,bedienung:[`stufen`,`anzeigeTopf`],erledigt:(e,t)=>t.besucht.length>=3},aufloesung:{text:`In einen Topf der Breite L passen nur Wellen mit λ = 2 · L / n. Im Zustand n hat die Welle n Bäuche. Der Potentialtopf ist das einfachste Modell für ein gebundenes Elektron: Statt um einen Kern ist es auf einer Strecke eingesperrt. Deshalb heißt er linear.`,ausfuehrlich:{titel:`Warum dieses Modell?`,html:`
            <p>Im Atom zieht der Kern das Elektron an, und zwar umso stärker, je näher es
            kommt. Die Welle dazu auszurechnen, ist schwierig. Der Potentialtopf vereinfacht
            so weit wie möglich:</p>
            <ul>
              <li>Das Elektron bewegt sich nur entlang einer Linie.</li>
              <li>Innerhalb des Topfs wirkt keine Kraft auf es.</li>
              <li>An den Wänden kommt es nicht vorbei, egal wie viel Energie es hat. Man
              spricht vom Topf mit unendlich hohen Wänden.</li>
            </ul>
            <p>Das Wort „Potential“ meint die Energie, die das Elektron allein durch seinen
            Ort hätte. Im Topf ist sie null, in den Wänden unendlich groß. Zeichnet man das
            auf, sieht es aus wie ein Topf im Querschnitt.</p>
            <p>So einfach das Modell ist, es zeigt das Wesentliche: Wer eine Welle einsperrt,
            bekommt Energiestufen. Und es passt erstaunlich gut auf lang gestreckte
            Moleküle, in denen sich Elektronen entlang einer Kette bewegen können.</p>`}}},{titel:`Energie im Topf`,blick:`seite`,frage:{text:`Vom Zustand 1 zum Zustand 2 halbiert sich die Wellenlänge. Was passiert mit der Energie des Elektrons?`,antworten:[`Sie verdoppelt sich`,`Sie vervierfacht sich`,`Sie halbiert sich`],richtig:1},auftrag:{text:`Lies die Energie für die Zustände 1, 2 und 3 ab und vergleiche. Achte auch auf die Leiste „Energie“.`,bedienung:[`stufen`,`anzeigeTopf`],erledigt:(e,t)=>[1,2,3].every(e=>t.besucht.includes(e))},aufloesung:{text:`Die Energie wächst mit n²: 1, 4, 9, 16 mal die Energie des Grundzustands. Als Formel: E = h² · n² / (8 · m · L²). Anders als beim Atom rücken die Stufen nach oben auseinander. Und den Zustand n = 0 gibt es nicht: Ein eingesperrtes Elektron ist nie ganz in Ruhe.`,ausfuehrlich:{titel:`Die Herleitung in vier Zeilen`,html:`
            <p>1. In den Topf passen <i>n</i> halbe Wellenlängen:</p>
            <p class="formel"><i>λ</i> = 2 · <i>L</i> / <i>n</i></p>
            <p>2. Zur Wellenlänge gehört nach de Broglie ein Impuls <i>p</i> = <i>m</i> · <i>v</i>:</p>
            <p class="formel"><i>p</i> = <i>h</i> / <i>λ</i> = <i>n</i> · <i>h</i> / (2 · <i>L</i>)</p>
            <p>3. Im Topf wirkt keine Kraft, das Elektron hat nur Bewegungsenergie:</p>
            <p class="formel"><i>E</i> = ½ · <i>m</i> · <i>v</i>² = <i>p</i>² / (2 · <i>m</i>)</p>
            <p>4. Einsetzen:</p>
            <p class="formel"><i>E</i><sub><i>n</i></sub> = <i>h</i>² · <i>n</i>² / (8 · <i>m</i> · <i>L</i>²)</p>
            <p>Zum Rechnen ist die Abkürzung <i>h</i>² / (8 · <i>m</i>) = 0,376 eV · nm²
            praktisch. Dabei ist <i>m</i> die Masse des Elektrons, und <i>L</i> wird in
            Nanometern eingesetzt.</p>
            <h3>Warum nicht n = 0?</h3>
            <p>Bei <i>n</i> = 0 wäre die Welle überall null. Dann gäbe es gar kein Elektron
            im Topf. Die kleinste mögliche Energie gehört zu <i>n</i> = 1 und heißt
            Nullpunktsenergie.</p>`}}},{titel:`Die Breite des Topfs`,blick:`seite`,start:{n:2},frage:{text:`Der Topf wird breiter gemacht. Was passiert mit den Energiestufen?`,antworten:[`Sie rücken zusammen`,`Sie rücken auseinander`,`Sie bleiben gleich`],richtig:0},auftrag:{text:`Verstelle die Breite des Topfs in beide Richtungen und beobachte Welle und Energie.`,bedienung:[`breite`,`anzeigeTopf`],erledigt:e=>Math.abs(e.breiteNm-1)>=.4},aufloesung:{text:`Breiterer Topf, längere Welle, weniger Energie: E fällt mit 1 / L². Je mehr Platz ein Elektron hat, desto enger liegen seine Energiestufen beieinander. Halb so breit bedeutet viermal so viel Energie.`,ausfuehrlich:{titel:`Farbstoffe als Potentialtopf`,html:`
            <p>In manchen Molekülen können sich Elektronen entlang einer langen Kette aus
            Kohlenstoffatomen frei bewegen. An den Enden der Kette ist Schluss. Das ist ein
            Potentialtopf, dessen Breite <i>L</i> die Länge der Kette ist.</p>
            <p>Trifft Licht auf das Molekül, kann ein Elektron auf eine höhere Stufe springen.
            Das Molekül verschluckt dabei genau das Licht, dessen Photonen die passende
            Energie haben.</p>
            <ul>
              <li>Kurze Kette: weite Stufen, es wird ultraviolettes Licht verschluckt. Der
              Stoff sieht farblos aus.</li>
              <li>Längere Kette: engere Stufen, es wird blaues Licht verschluckt. Übrig
              bleibt Gelb und Orange, wie beim Farbstoff der Karotte (β-Carotin).</li>
            </ul>
            <p>Mit der Formel für den Potentialtopf lässt sich aus der Länge eines solchen
            Moleküls seine Farbe abschätzen.</p>`}}},{titel:`Licht aus dem Topf`,blick:`seite`,start:{n:2},frage:{text:`Das Elektron springt von Zustand 2 auf Zustand 1 und sendet dabei Licht aus. Wie ändert sich dieses Licht, wenn der Topf schmaler ist?`,antworten:[`Es wird langwelliger, also röter`,`Es wird kurzwelliger, also blauer`,`Es bleibt gleich`],richtig:1},auftrag:{text:`Lass das Elektron von 2 auf 1 springen und sieh nach, wo das Licht auf dem Schirm landet. Stell es dann wieder auf 2, ändere die Breite und such eine, bei der das Licht sichtbar ist.`,bedienung:[`breite`,`stufen`,`anzeigeSprung`],erledigt:(e,t)=>t.linien.length>=1},aufloesung:{text:`Beim Sprung von 2 auf 1 wird das Dreifache der Grundzustandsenergie frei. Bei L = 1 nm sind das 1,13 eV, also Infrarot. Im schmaleren Topf liegen die Stufen weiter auseinander: Bei etwa 0,6 bis 0,8 nm ist das Licht sichtbar, darunter ultraviolett.`}},{titel:`Wo ist das Elektron?`,blick:`schraeg`,start:{n:2},frage:{text:`Das Elektron ist im Zustand 2. Wo findet man es bei einer Ortsmessung so gut wie nie?`,antworten:[`An den Wänden und genau in der Mitte`,`Nur an den Wänden`,`Nirgends, es ist überall gleich wahrscheinlich`],richtig:0},auftrag:{text:`Dreh die Rate hoch und warte auf 600 Messungen. Blende danach die Aufenthaltswahrscheinlichkeit ein und vergleiche sie mit den Punkten.`,bedienung:[`messen`,`messrate`,`messzahl`,`dichte`],erledigt:(e,t)=>t.messungen>=600&&e.dichteSichtbar},aufloesung:{text:`Wo die Welle einen Knoten hat, findet man das Elektron nie. Wo sie am stärksten ausschlägt, am häufigsten. Die Aufenthaltswahrscheinlichkeit ist das Quadrat der Welle. Das ist dieselbe Regel wie beim Doppelspalt: Die Welle sagt, wie wahrscheinlich ein Treffer ist.`,ausfuehrlich:{titel:`Welle und Wahrscheinlichkeit`,html:`
            <p>Die Welle des Elektrons schreibt man mit dem griechischen Buchstaben ψ (Psi)
            und nennt sie Wellenfunktion. Für den Potentialtopf ist sie eine Sinuskurve.</p>
            <p>Die Welle selbst kann man nicht messen. Messen kann man nur, wo das Elektron
            ist, und das Ergebnis ist jedes Mal zufällig. Fest liegt nur die Verteilung
            vieler Messungen, und die folgt dem Quadrat der Welle, ψ².</p>
            <p>Deshalb ist die Wahrscheinlichkeit nie negativ, auch wenn die Welle gerade nach
            unten ausschlägt. Und deshalb gibt es im Zustand 2 in der Mitte einen Ort, an dem
            man das Elektron nie findet, obwohl es links und rechts davon häufig ist. Für
            eine kleine Kugel, die hin und her fliegt, wäre das unmöglich. Für eine stehende
            Welle ist es selbstverständlich.</p>`}}},{titel:`Rechnen: Grundzustand`,blick:`seite`,start:{breiteNm:.5,n:1},rechnung:{text:`Ein Elektron ist in einem Potentialtopf der Breite L = 0,50 nm eingesperrt. Wie groß ist seine Energie im Grundzustand (n = 1)? Rechne mit h² / (8 · m) = 0,376 eV · nm².`,einheit:`eV`,loesung:1.5,stellen:2,hinweis:`E = h² · n² / (8 · m · L²), mit der Abkürzung also E = 0,376 eV · nm² · n² / L². Denk daran, L zu quadrieren.`,rechenweg:`
          <p class="formel"><i>E</i> = <i>h</i>² · <i>n</i>² / (8 · <i>m</i> · <i>L</i>²)</p>
          <p class="formel"><i>E</i> = 0,376 eV · nm² · 1² / (0,50 nm)²</p>
          <p class="formel"><i>E</i> = 0,376 eV · nm² / 0,25 nm² = <b>1,50 eV</b></p>`},aufloesung:{text:`E = 0,376 eV · nm² / (0,50 nm)² = 1,50 eV. Zum Vergleich: Im doppelt so breiten Topf von 1,0 nm wären es nur 0,376 eV.`}},{titel:`Rechnen: Licht aus dem Topf`,blick:`seite`,start:{breiteNm:.5,n:2},rechnung:{text:`Im selben Topf (L = 0,50 nm, Grundzustand 1,50 eV) springt das Elektron von n = 2 auf n = 1. Welche Wellenlänge hat das Licht, das dabei entsteht? Rechne mit h · c = 1240 eV · nm.`,einheit:`nm`,loesung:275,stellen:0,hinweis:`Die Energie wächst mit n²: Zustand 2 hat 4 · 1,50 eV. Frei wird der Unterschied zum Zustand 1. Dann λ = h · c / ΔE.`,rechenweg:`
          <p class="formel"><i>E</i>₂ = 4 · 1,50 eV = 6,00 eV</p>
          <p class="formel">Δ<i>E</i> = 6,00 eV − 1,50 eV = 4,50 eV</p>
          <p class="formel"><i>λ</i> = <i>h</i> · <i>c</i> / Δ<i>E</i> = 1240 eV · nm / 4,50 eV = <b>275 nm</b></p>`},aufloesung:{text:`ΔE = 4 · 1,50 eV − 1,50 eV = 4,50 eV, also λ = 1240 eV · nm / 4,50 eV = 275 nm. Das ist ultraviolettes Licht. Ein so kurzes Molekül wäre farblos.`}},{titel:`Rechnen: zurück zum Wasserstoff`,blick:`schraeg`,start:{modell:`atom`,bild:`bahn`,n:4,weite:4},rechnung:{text:`Im Wasserstoffatom springt das Elektron von Bahn 4 auf Bahn 2. Welche Wellenlänge hat das Licht? Rechne mit E = −13,6 eV / n² und h · c = 1240 eV · nm.`,einheit:`nm`,loesung:486,stellen:0,hinweis:`Rechne zuerst die beiden Energien aus: E₄ = −13,6 eV / 16 und E₂ = −13,6 eV / 4. Frei wird der Unterschied. Dann λ = h · c / ΔE.`,rechenweg:`
          <p class="formel"><i>E</i>₄ = −13,6 eV / 16 = −0,85 eV</p>
          <p class="formel"><i>E</i>₂ = −13,6 eV / 4 = −3,40 eV</p>
          <p class="formel">Δ<i>E</i> = −0,85 eV − (−3,40 eV) = 2,55 eV</p>
          <p class="formel"><i>λ</i> = 1240 eV · nm / 2,55 eV = <b>486 nm</b></p>`},aufloesung:{text:`ΔE = −0,85 eV − (−3,40 eV) = 2,55 eV, also λ = 1240 eV · nm / 2,55 eV = 486 nm. Das ist die blaugrüne Linie des Wasserstoffs. Damit kannst du aus Energiestufen die Farbe von Licht berechnen, im Atom wie im Potentialtopf.`}}]},r=.0529,i=1239.84,a=.37603;function o(e){return-13.606/(e*e)}function s(e){return e*e}function c(e){return i/e}function l(e,t){let n=o(e)-o(t);return{energieEv:n,wellenlaengeNm:c(n)}}function u(e){return e<380?`ultraviolett`:e<450?`violett`:e<485?`blau`:e<510?`blaugrün`:e<565?`grün`:e<590?`gelb`:e<625?`orange`:e<=750?`rot`:`infrarot`}function d(e){return e>=380&&e<=750}function f(e){return Math.sqrt(e)}function p(e,t){return a*e*e/(t*t)}function m(e,t){return 2*t/e}function h(e,t){return Math.SQRT2*Math.sin(e*Math.PI*t)}function g(e,t){let n=h(e,t);return n*n}function _(e,t=Math.random){for(let n=0;n<200;n++){let n=t();if(t()*2<=g(e,n))return n}return .5/e}function v(e,t){if(t<0)return 0;if(e===1)return 4*t*t*Math.exp(-2*t);if(e===2)return t*t*(2-t)**2*Math.exp(-t)/8;let n=27-18*t+2*t*t;return 4*t*t*n*n*Math.exp(-2*t/3)/19683}var y=[0,9,22,40],b=[];function x(e){if(b[e]===void 0){let t=0;for(let n=0;n<=y[e];n+=.01)t=Math.max(t,v(e,n));b[e]=t}return b[e]}function S(e,t=Math.random){let n=Math.min(3,Math.max(1,Math.round(e))),r=x(n);for(let e=0;e<500;e++){let e=t()*y[n];if(t()*r<=v(n,e))return e}return n*n}export{e as _,c as a,g as c,m as d,f,t as g,n as h,d as i,p as l,S as m,o as n,s as o,_ as p,u as r,l as s,r as t,h as u};