var e={id:`formel`,name:`Formel`,leitfrage:`Wie rechnet man aus, wo die Streifen liegen?`,minuten:10,merksaetze:[`Wegunterschied bei weit entferntem Schirm: $Δs = d · sin α$.`,`Helle Streifen bei $Δs = k · λ$, dunkle bei $Δs = (k + ½) · λ$.`,`Abstand zweier benachbarter heller Streifen: $Δy = λ · L / d$.`,`Vor dem Rechnen alle Größen in Meter umrechnen.`],grund:{darstellung:`welle`,lichtAn:!0,spalt2Offen:!0,laeuft:!0},schritte:[{titel:`Der Wegunterschied`,blick:`oben`,start:{markeSichtbar:!0,marke:0,laeuft:!1},frage:{text:`Die Marke wandert von der Mitte des Schirms nach außen. Was passiert mit dem Wegunterschied zwischen den beiden Wegen?`,antworten:[`Er wird größer`,`Er wird kleiner`,`Er bleibt gleich`],richtig:0},auftrag:{text:`Schieb die Marke langsam von der Mitte bis zum zweiten hellen Streifen daneben. Beobachte das farbige Stück am längeren Weg.`,bedienung:[`marke`],erledigt:(e,t)=>t.markeWeite>=1.9},aufloesung:{text:`Je schräger die Wege laufen, desto größer der Wegunterschied Δs. Ist der Schirm weit weg, laufen beide Wege fast parallel unter dem Winkel α, und es gilt $Δs = d · sin α$.`,ausfuehrlich:{titel:`Woher kommt Δs = d · sin α?`,html:`
            
<svg viewBox="0 0 420 230" role="img" aria-label="Skizze: Von zwei Spalten im Abstand d laufen zwei parallele Wege unter dem Winkel alpha schräg nach oben. Das Lot vom oberen Spalt auf den unteren Weg schneidet dort das Stück Delta s ab.">
  <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
    <path d="M60 20V118M60 142V178M60 202V225" stroke-width="5"/>
    <path d="M60 160H400" stroke-dasharray="4 6" opacity=".55"/>
    <path d="M60 130L360 21M60 190L360 81"/>
    <path d="M60 130L79.3 183" stroke-dasharray="3 4"/>
    <path d="M110 160A50 50 0 0 0 107 143" />
    <path d="M60 148A18 18 0 0 0 66 147" />
  </g>
  <path d="M60 190L79.3 183" stroke="var(--licht)" stroke-width="5" stroke-linecap="round"/>
  <g fill="currentColor" font-size="15" font-family="Cambria Math, Cambria, Georgia, serif" font-style="italic">
    <text x="36" y="165">d</text>
    <text x="118" y="155">α</text>
    <text x="66" y="212" fill="var(--licht)">Δs</text>
    <text x="268" y="92">zum Schirm</text>
  </g>
</svg>
            <p>Im echten Versuch ist der Schirm tausendfach weiter weg, als die Spalte
            auseinanderliegen. Die beiden Wege zu einem Schirmpunkt sind dann praktisch parallel.
            Beide laufen unter demselben Winkel <i>α</i> zur Mittelachse.</p>
            <p>Fällt man vom oberen Spalt das Lot auf den unteren Weg, entsteht ein kleines
            rechtwinkliges Dreieck. Seine längste Seite ist der Spaltabstand <i>d</i>, und der
            Winkel am oberen Spalt ist wieder <i>α</i>. Die Seite gegenüber ist das Stück, um das
            der untere Weg länger ist:</p>
            <p class="formel">$Δs = d · sin α$</p>`}}},{titel:`Hell und dunkel`,blick:`oben`,start:{markeSichtbar:!0,marke:0,laeuft:!1},frage:{text:`Bei welchem Wegunterschied Δs entsteht ein heller Streifen? (k steht für 0, 1, 2, 3 …)`,antworten:[`$Δs = k · λ$`,`$Δs = (k + ½) · λ$`,`Bei jedem Wegunterschied`],richtig:0},aufloesung:{text:`Hell ist es, wenn der Wegunterschied ein ganzes Vielfaches der Wellenlänge ist: $Δs = k · λ$. Dunkel bei $Δs = (k + ½) · λ$. Mit dem Schritt davor gilt für die hellen Streifen also $d · sin α = k · λ$.`,ausfuehrlich:{titel:`Die Bedingungen für hell und dunkel`,html:`
            <p class="formel">hell: &nbsp; $d · sin α = k · λ$</p>
            <p class="formel">dunkel: &nbsp; $d · sin α = (k + ½) · λ$</p>
            <p>Die Zahl <i>k</i> heißt Ordnung. <i>k</i> = 0 ist der helle Streifen in der Mitte,
            <i>k</i> = 1 der erste daneben, und so weiter.</p>
            <p>Diese Gleichungen gelten für jeden Doppelspalt und auch für Schall- oder
            Wasserwellen. Um daraus die Lage auf dem Schirm zu bekommen, fehlt nur noch der
            Zusammenhang zwischen dem Winkel <i>α</i> und dem Ort auf dem Schirm.</p>`}}},{titel:`Vom Winkel zum Schirm`,blick:`schirm`,frage:{text:`Ein Streifen liegt im Abstand y von der Schirmmitte, der Schirm steht im Abstand L. Für kleine Winkel gilt $sin α ≈ tan α = y / L$. Wo liegt der k-te helle Streifen?`,antworten:[`$y = k · λ · L / d$`,`$y = k · λ · d / L$`,`$y = k · d · L / λ$`],richtig:0},aufloesung:{text:`Aus $d · sin α = k · λ$ und $sin α ≈ y / L$ folgt $y = k · λ · L / d$. Der Abstand zwischen zwei benachbarten hellen Streifen ist deshalb $Δy = λ · L / d$.`,formel:!0,ausfuehrlich:{titel:`Die Herleitung in einem Stück`,html:`
            <p>1. Wegunterschied bei fast parallelen Wegen:</p>
            <p class="formel">$Δs = d · sin α$</p>
            <p>2. Heller Streifen, wenn der Wegunterschied ein Vielfaches der Wellenlänge ist:</p>
            <p class="formel">$d · sin α = k · λ$</p>
            <p>3. Der Winkel ist klein, deshalb darf man den Sinus durch den Tangens ersetzen:</p>
            <p class="formel">$sin α ≈ tan α = y / L$</p>
            <p>4. Einsetzen und nach <i>y</i> auflösen:</p>
            <p class="formel">$y_k = k · λ · L / d$</p>
            <p>5. Von einem hellen Streifen zum nächsten wächst <i>k</i> um 1:</p>
            <p class="formel">$Δy = λ · L / d$</p>
            <p>Die Näherung in Schritt 3 ist im echten Versuch sehr gut: Der Winkel zum ersten
            Streifen beträgt nur Bruchteile eines Grads.</p>`}}},{titel:`Rechnen: Streifenabstand`,blick:`schirm`,werte:{wellenlaengeNm:600,spaltabstandMm:.2,schirmabstandM:2},rechnung:{text:`Oranges Licht mit λ = 600 nm fällt auf einen Doppelspalt mit d = 0,20 mm. Der Schirm steht L = 2,0 m entfernt. Wie groß ist der Abstand Δy zwischen zwei hellen Streifen?`,einheit:`mm`,loesung:6,stellen:1,hinweis:`Nimm $Δy = λ · L / d$ und rechne zuerst alles in Meter um: $600 nm = 600 · 10⁻⁹ m$, $0,20 mm = 0,20 · 10⁻³ m$.`,rechenweg:`
          <p class="formel">$Δy = λ · L / d$</p>
          <p class="formel">$Δy = 600 · 10⁻⁹ m · 2,0 m / (0,20 · 10⁻³ m)$</p>
          <p class="formel">$Δy = 6,0 · 10⁻³ m = **6,0 mm**$</p>`},aufloesung:{text:`$Δy = 600 · 10⁻⁹ m · 2,0 m / (0,20 · 10⁻³ m) = 6,0 mm$. Die Simulation ist auf diese Werte eingestellt.`}},{titel:`Rechnen: Wellenlänge`,blick:`schirm`,start:{massSichtbar:!0},werte:{wellenlaengeNm:500,spaltabstandMm:.25,schirmabstandM:2.5},rechnung:{text:`So wird die Wellenlänge von Licht gemessen: Bei d = 0,25 mm und L = 2,5 m liegen die hellen Streifen Δy = 5,0 mm auseinander. Welche Wellenlänge λ hat das Licht?`,einheit:`nm`,loesung:500,stellen:0,hinweis:`Stell die Formel nach λ um: $λ = Δy · d / L$. Rechne in Metern und wandle am Ende in Nanometer um ($1 m = 10⁹ nm$).`,rechenweg:`
          <p class="formel">$λ = Δy · d / L$</p>
          <p class="formel">$λ = 5,0 · 10⁻³ m · 0,25 · 10⁻³ m / 2,5 m$</p>
          <p class="formel">$λ = 5,0 · 10⁻⁷ m = **500 nm**$</p>`},aufloesung:{text:`$λ = Δy · d / L = 5,0 · 10⁻³ m · 0,25 · 10⁻³ m / 2,5 m = 500 nm$. Das ist blaugrünes Licht, wie in der Simulation zu sehen.`}},{titel:`Rechnen: Spaltabstand`,blick:`schirm`,start:{massSichtbar:!0},werte:{wellenlaengeNm:650,spaltabstandMm:.3,schirmabstandM:3},rechnung:{text:`Ein roter Laser mit λ = 650 nm erzeugt auf einem Schirm in L = 3,0 m Entfernung Streifen im Abstand Δy = 6,5 mm. Wie weit liegen die beiden Spalte auseinander?`,einheit:`mm`,loesung:.3,stellen:2,hinweis:`Stell die Formel nach d um: $d = λ · L / Δy$. Rechne in Metern und wandle am Ende in Millimeter um.`,rechenweg:`
          <p class="formel">$d = λ · L / Δy$</p>
          <p class="formel">$d = 650 · 10⁻⁹ m · 3,0 m / (6,5 · 10⁻³ m)$</p>
          <p class="formel">$d = 3,0 · 10⁻⁴ m = **0,30 mm**$</p>`},aufloesung:{text:`$d = λ · L / Δy = 650 · 10⁻⁹ m · 3,0 m / (6,5 · 10⁻³ m) = 0,30 mm$. Damit kannst du jede der vier Größen aus den anderen drei berechnen.`}}]},t=.001,n={wellenlaengeNm:550,spaltabstandMm:.2,spaltbreiteMm:.04,schirmabstandM:2},r={wellenlaengeNm:{min:400,max:700,schritt:5},spaltabstandMm:{min:.1,max:.4,schritt:.01},spaltbreiteMm:{min:.02,max:.08,schritt:.005},schirmabstandM:{min:1,max:3,schritt:.05}};function i(e,n){return{wellenlaenge:e.wellenlaengeNm*t,spaltabstand:e.spaltabstandMm*15,spaltbreite:e.spaltbreiteMm*15,schirmabstand:e.schirmabstandM*4,spalt1Offen:!0,spalt2Offen:n.spalt2Offen,detektor:n.detektor}}function a(e){let t=e.wellenlaengeNm*1e-9,n=e.spaltabstandMm*.001;return t*e.schirmabstandM/n*1e3}function o(){return a({wellenlaengeNm:r.wellenlaengeNm.max,spaltabstandMm:r.spaltabstandMm.min,spaltbreiteMm:n.spaltbreiteMm,schirmabstandM:r.schirmabstandM.max})}var s=[`Sie werden breiter`,`Sie werden schmaler`,`Sie bleiben gleich`],c={id:`wellen`,name:`Wellen`,leitfrage:`Warum entstehen hinter zwei Spalten viele Streifen?`,minuten:12,merksaetze:[`Hinter einem schmalen Spalt läuft eine Welle in alle Richtungen auseinander. Das heißt Beugung.`,`Die Wellen aus zwei Spalten überlagern sich. Das heißt Interferenz: Berg auf Berg wird hell, Berg auf Tal dunkel.`,`Entscheidend ist der Wegunterschied. Ganze Wellenlängen ergeben hell, halbe dunkel.`,`Die Streifen werden breiter bei größerer Wellenlänge, größerem Schirmabstand und kleinerem Spaltabstand.`],grund:{darstellung:`welle`,lichtAn:!0,spalt2Offen:!0,laeuft:!0},schritte:[{titel:`Der Aufbau`,blick:`schraeg`,start:{lichtAn:!1,spalt2Offen:!1,beschriftung:!0},auftrag:{text:`Gleich kommt Licht aus der Lichtquelle, trifft auf eine Wand mit zwei schmalen Spalten und fällt dahinter auf den Schirm. Einer der Spalte ist noch mit einer Blende abgedeckt. Dreh die Szene mit der Maus oder dem Finger und sieh dir alles an.`,bedienung:[],erledigt:(e,t)=>t.gedreht},aufloesung:{text:`Das Bild ist stark vergrößert. Im echten Versuch liegen die Spalte nur Bruchteile eines Millimeters auseinander, und der Schirm steht ein paar Meter entfernt. Die Regler zeigen später die echten Werte.`,ausfuehrlich:{titel:`Warum das Bild nicht maßstabsgetreu ist`,html:`
            <p>Sichtbares Licht hat eine Wellenlänge von etwa 400 bis 700 Nanometern. Ein Nanometer
            ist ein Millionstel Millimeter. Die Spalte liegen rund 0,2 mm auseinander, der Schirm
            steht etwa 2 m entfernt.</p>
            <p>Würde man das maßstabsgetreu zeichnen, wäre die Wand mit den Spalten ein Punkt und
            die Wellen wären unsichtbar fein. Deshalb ist hier jede Größe für sich vergrößert.</p>
            <p>Was trotzdem stimmt: Verdoppelst du später einen Regler, ändert sich das Bild genau
            so, wie es sich im echten Versuch ändern würde.</p>`}}},{titel:`Ein Spalt`,blick:`schraeg`,start:{lichtAn:!1,spalt2Offen:!1},frage:{text:`Gleich fällt Licht auf die Wand. Nur ein Spalt ist offen. Was zeigt der Schirm dahinter?`,antworten:[`Einen schmalen hellen Strich, so breit wie der Spalt`,`Einen breiten hellen Fleck`,`Nichts, der Spalt ist zu schmal`],richtig:1},auftrag:{text:`Licht breitet sich als Welle aus. Hier ist es gezeichnet wie Wasserwellen, mit Bergen und Tälern. Schalte das Licht ein und sieh zu, was hinter dem Spalt passiert.`,bedienung:[`licht`],erledigt:(e,t)=>t.lichtAmSchirm},aufloesung:{text:`Hinter dem Spalt läuft die Welle in alle Richtungen auseinander. Das heißt Beugung. Deshalb ist der helle Fleck auf dem Schirm viel breiter als der Spalt.`,ausfuehrlich:{titel:`Beugung: Warum die Welle um die Ecke läuft`,html:`
            <p>Vor der Wand läuft die Welle als gerade Front. Die Wand hält sie auf, nur im Spalt
            kommt ein kleines Stück durch.</p>
            <p>Dieses kleine Stück verhält sich wie ein Stein, der ins Wasser fällt: Von ihm geht
            eine neue, kreisförmige Welle aus. Der Physiker Christiaan Huygens hat das schon im
            17. Jahrhundert so beschrieben: Jeder Punkt einer Welle ist Ausgangspunkt einer neuen
            Kreiswelle.</p>
            <p>Je schmaler der Spalt im Vergleich zur Wellenlänge ist, desto stärker läuft die
            Welle dahinter auseinander. Im freien Labor kannst du das mit dem Regler
            „Spaltbreite" ausprobieren.</p>
            <p>Teilchen wie Sandkörner würden das nicht tun. Sie flögen geradeaus und ergäben
            einen schmalen Strich.</p>`}}},{titel:`Der zweite Spalt`,blick:`schraeg`,start:{spalt2Offen:!1},frage:{text:`Jetzt wird die Blende weggeschoben, beide Spalte sind offen. Was zeigt der Schirm dann?`,antworten:[`Zwei helle Flecken nebeneinander`,`Denselben Fleck wie vorher, nur doppelt so hell`,`Mehrere helle und dunkle Streifen`],richtig:2},auftrag:{text:`Öffne den zweiten Spalt und beobachte den Schirm und die Wasserfläche.`,bedienung:[`spalt2`],erledigt:e=>e.spalt2Offen},aufloesung:{text:`Es entstehen Streifen. An manchen Stellen ist es jetzt dunkler als mit nur einem Spalt, obwohl mehr Licht durchkommt. Das geht nur mit Wellen und heißt Interferenz.`,ausfuehrlich:{titel:`Interferenz: Mehr Licht, und trotzdem dunkel`,html:`
            <p>Von jedem Spalt geht eine Kreiswelle aus. Hinter der Wand laufen die beiden Wellen
            übereinander. Wo zwei Wellenberge zusammentreffen, wird der Berg doppelt so hoch. Wo
            ein Berg auf ein Tal trifft, heben sie sich auf, und das Wasser bleibt ruhig.</p>
            <p>Sieh dir die Wasserfläche an: Zwischen den Bahnen mit hohen Wellen liegen ruhige
            Bahnen. Jede ruhige Bahn endet am Schirm in einem dunklen Streifen, jede bewegte in
            einem hellen.</p>
            <h3>Warum sind die äußeren Streifen schwächer?</h3>
            <p>Jeder einzelne Spalt beleuchtet den Schirm so wie im Schritt davor: in der Mitte
            hell, nach außen schwächer. Die Streifen können nur dort hell sein, wo überhaupt
            Licht ankommt. Deshalb werden sie nach außen blasser.</p>
            <h3>Was heißt „doppelt so hoch"?</h3>
            <p>In der Mitte eines hellen Streifens ist die Welle doppelt so hoch wie mit einem
            Spalt. Die Helligkeit wächst mit dem Quadrat der Wellenhöhe, dort ist es also viermal
            so hell. Dafür fehlt das Licht in den dunklen Streifen. Insgesamt kommt genau doppelt
            so viel Licht an, es ist nur anders verteilt.</p>`}}},{titel:`Warum Streifen?`,blick:`oben`,start:{markeSichtbar:!0,marke:0,laeuft:!1},frage:{text:`An jeder Stelle des Schirms kommen zwei Wellen an, eine von jedem Spalt. Was trifft an einer dunklen Stelle aufeinander?`,antworten:[`Wellenberg auf Wellenberg`,`Wellenberg auf Wellental`,`Dort kommt gar keine Welle an`],richtig:1},auftrag:{text:`Das Bild ist angehalten. Die zwei Linien zeigen die Wege von den Spalten zur Marke. Schieb die Marke auf einen dunklen Streifen und dann auf den nächsten hellen. Achte auf das farbige Stück: Um so viel ist ein Weg länger.`,bedienung:[`marke`],erledigt:(e,t)=>t.markeDunkel&&t.markeHell&&t.markeWeite>.9},aufloesung:{text:`Zu einem dunklen Streifen ist ein Weg eine halbe Wellenlänge länger. Die eine Welle kommt dort mit einem Berg an, die andere mit einem Tal, und sie löschen sich aus. Ist der Unterschied null oder eine ganze Wellenlänge, trifft Berg auf Berg: hell.`,ausfuehrlich:{titel:`Der Wegunterschied entscheidet`,html:`
            <p>Beide Wellen starten gleichzeitig mit einem Berg an ihrem Spalt. Ob sie am Schirm
            im Gleichtakt ankommen, hängt nur davon ab, wie viel länger der eine Weg ist. Dieser
            Unterschied heißt Wegunterschied, im Schulbuch oft Gangunterschied.</p>
            <table>
              <tr><th>Wegunterschied</th><th>Es trifft</th><th>Am Schirm</th></tr>
              <tr><td>0</td><td>Berg auf Berg</td><td>hell (Maximum)</td></tr>
              <tr><td>$½$ Wellenlänge</td><td>Berg auf Tal</td><td>dunkel (Minimum)</td></tr>
              <tr><td>1 Wellenlänge</td><td>Berg auf Berg</td><td>hell</td></tr>
              <tr><td>$1½$ Wellenlängen</td><td>Berg auf Tal</td><td>dunkel</td></tr>
              <tr><td>2 Wellenlängen</td><td>Berg auf Berg</td><td>hell</td></tr>
            </table>
            <p>In der Mitte des Schirms sind beide Wege gleich lang. Deshalb ist die Mitte immer
            hell. Je weiter man zur Seite geht, desto größer wird der Unterschied.</p>
            <p>Der Knopf „Anhalten" oben ist gerade eingedrückt. Drückst du ihn noch einmal,
            läuft die Welle weiter.</p>`}}},{titel:`Spaltabstand`,blick:`schirm`,start:{massSichtbar:!0},frage:{text:`Die beiden Spalte rücken näher zusammen. Was passiert mit den Streifen auf dem Schirm?`,antworten:s,richtig:0},auftrag:{text:`Verstelle den Spaltabstand in beide Richtungen und beobachte die Streifen. Die Klammer über dem Schirm misst den Abstand von einem hellen Streifen zum nächsten.`,bedienung:[`spaltabstand`,`streifen`],erledigt:(e,t,n)=>Math.abs(e.werte.spaltabstandMm-n.werte.spaltabstandMm)>=.05},aufloesung:{text:`Kleinerer Spaltabstand, breitere Streifen. Liegen die Spalte eng beieinander, sind die beiden Wege fast gleich lang. Man muss auf dem Schirm weiter zur Seite gehen, bis ein Weg eine ganze Wellenlänge länger ist.`}},{titel:`Wellenlänge`,blick:`schirm`,start:{massSichtbar:!0},werte:{wellenlaengeNm:450},frage:{text:`Die Farbe von Licht ist seine Wellenlänge. Blaues Licht hat kurze Wellen, rotes längere. Was passiert mit den Streifen, wenn das Licht von Blau nach Rot wechselt?`,antworten:s,richtig:0},auftrag:{text:`Verstelle die Wellenlänge von Blau bis Rot und beobachte die Streifen.`,bedienung:[`wellenlaenge`,`streifen`],erledigt:(e,t,n)=>Math.abs(e.werte.wellenlaengeNm-n.werte.wellenlaengeNm)>=80},aufloesung:{text:`Größere Wellenlänge, breitere Streifen. Bei langen Wellen muss der Wegunterschied größer sein, bis wieder Berg auf Berg trifft. Also liegen die hellen Streifen weiter auseinander.`,ausfuehrlich:{titel:`Farbe und Wellenlänge`,html:`
            <table>
              <tr><th>Farbe</th><th>Wellenlänge etwa</th></tr>
              <tr><td>Violett</td><td>400 nm</td></tr>
              <tr><td>Blau</td><td>450 nm</td></tr>
              <tr><td>Grün</td><td>530 nm</td></tr>
              <tr><td>Gelb</td><td>580 nm</td></tr>
              <tr><td>Rot</td><td>650 nm</td></tr>
            </table>
            <p>Mit dem Doppelspalt lässt sich die Wellenlänge von Licht messen: Man misst den
            Abstand der Streifen, den Spaltabstand und den Schirmabstand und rechnet zurück. So
            hat Thomas Young um 1800 als Erster gezeigt, dass Licht eine Welle ist, und zugleich
            seine Wellenlänge bestimmt.</p>
            <p>Weißes Licht enthält alle Farben. Jede Farbe erzeugt Streifen in ihrem eigenen
            Abstand, deshalb haben die Streifen bei weißem Licht bunte Ränder.</p>`}}},{titel:`Schirmabstand`,blick:`schraeg`,start:{massSichtbar:!0},werte:{schirmabstandM:1.5},frage:{text:`Der Schirm wird weiter von der Wand weggeschoben. Was passiert mit den Streifen?`,antworten:s,richtig:0},auftrag:{text:`Verstelle den Schirmabstand und beobachte, wie die hellen Bahnen im Wasser auf den Schirm treffen.`,bedienung:[`schirmabstand`,`streifen`],erledigt:(e,t,n)=>Math.abs(e.werte.schirmabstandM-n.werte.schirmabstandM)>=.5},aufloesung:{text:`Größerer Schirmabstand, breitere Streifen. Die hellen Bahnen laufen von den Spalten aus wie ein Fächer auseinander. Je weiter hinten der Schirm steht, desto weiter liegen sie dort auseinander.`}},{titel:`Alles zusammen`,blick:`schirm`,start:{massSichtbar:!0},werte:{spaltabstandMm:.25},auftrag:{text:`Jetzt hast du alle drei Regler. Stell die Streifen so breit wie möglich ein.`,bedienung:[`wellenlaenge`,`spaltabstand`,`schirmabstand`,`streifen`],erledigt:e=>a(e.werte)>=.85*o()},aufloesung:{text:`Breite Streifen entstehen bei großer Wellenlänge, großem Schirmabstand und kleinem Spaltabstand. Als Formel: $Streifenabstand = Wellenlänge · Schirmabstand / Spaltabstand$.`,formel:!0}}]},l={id:`teilchen`,name:`Teilchen`,leitfrage:`Was passiert, wenn nur einzelne Teilchen fliegen?`,minuten:8,merksaetze:[`Jedes Teilchen trifft den Schirm an genau einer Stelle. Wo, ist Zufall.`,`Viele Treffer zusammen ergeben dieselben Streifen wie die Welle, auch wenn die Teilchen einzeln fliegen.`,`Die Welle gibt an, wie wahrscheinlich ein Treffer an jeder Stelle ist.`,`Misst man, durch welchen Spalt ein Teilchen geht, verschwinden die Streifen.`],grund:{darstellung:`teilchen`,lichtAn:!0,spalt2Offen:!0,laeuft:!0},schritte:[{titel:`Ein Teilchen nach dem anderen`,blick:`schraeg`,frage:{text:`Die Quelle wird so schwach gestellt, dass sie nur noch einzelne Teilchen abgibt, zum Beispiel einzelne Elektronen oder einzelne Lichtteilchen. Wo landen die ersten zehn auf dem Schirm?`,antworten:[`Alle an derselben Stelle in der Mitte`,`In zwei Häufchen, eines hinter jedem Spalt`,`Verstreut, ohne erkennbare Ordnung`],richtig:2},auftrag:{text:`Schieß zehn Teilchen einzeln ab und sieh dir an, wo sie landen.`,bedienung:[`schuss`,`treffer`],erledigt:(e,t)=>t.treffer>=10},aufloesung:{text:`Jedes Teilchen hinterlässt genau einen Punkt. Wo er landet, lässt sich nicht vorhersagen. Nach zehn Treffern ist noch kein Muster zu erkennen.`,ausfuehrlich:{titel:`Was hier anders gezeichnet ist als bei der Welle`,html:`
            <p>Am Schirm kommt nie „ein bisschen Teilchen" an. Es gibt immer einen ganzen Treffer
            an genau einer Stelle. Das ist der Teilchen-Anteil an der Geschichte.</p>
            <p>Achte darauf, dass das Teilchen vor der Wand verblasst und erst als Punkt auf dem
            Schirm wieder auftaucht. Das ist Absicht: Was zwischen Quelle und Schirm geschieht,
            hat niemand beobachtet. Eine durchgezogene Flugbahn zu zeichnen, hieße etwas zu
            behaupten, das man nicht weiß.</p>
            <p>Solche Versuche gibt es wirklich, mit einzelnen Lichtteilchen (Photonen), mit
            Elektronen und sogar mit großen Molekülen aus vielen hundert Atomen.</p>`}}},{titel:`Viele Teilchen`,blick:`schirm`,frage:{text:`Es fliegt weiter immer nur ein Teilchen auf einmal. Was zeigt der Schirm nach ein paar tausend Treffern?`,antworten:[`Zwei breite Haufen, einen hinter jedem Spalt`,`Eine gleichmäßig gesprenkelte Fläche`,`Streifen wie bei der Welle`],richtig:2},auftrag:{text:`Dreh die Rate hoch und warte, bis 2000 Teilchen angekommen sind.`,bedienung:[`rate`,`treffer`],erledigt:(e,t)=>t.treffer>=2e3},aufloesung:{text:`Aus einzelnen, zufälligen Treffern entstehen dieselben Streifen wie bei der Welle. Dabei war immer nur ein Teilchen unterwegs. Es gab kein zweites, mit dem es sich hätte überlagern können.`,ausfuehrlich:{titel:`Das Rätsel des Doppelspalts`,html:`
            <p>Wären die Teilchen kleine Kugeln, flöge jede durch einen der beiden Spalte, und
            auf dem Schirm entstünden zwei Haufen. Streifen dürfte es nicht geben.</p>
            <p>Es gibt sie aber, und zwar auch dann, wenn die Teilchen einzeln und mit großem
            zeitlichem Abstand fliegen. Jedes einzelne Teilchen „weiß" also von beiden Spalten.</p>
            <p>Der Physiker Richard Feynman nannte den Doppelspalt deshalb den Versuch, der das
            ganze Geheimnis der Quantenphysik in sich trägt.</p>`}}},{titel:`Welle und Teilchen`,blick:`schirm`,start:{rate:250},frage:{text:`Wo das einzelne Teilchen landet, ist Zufall. Gibt es trotzdem Stellen, an denen es so gut wie nie landet?`,antworten:[`Nein, es kann überall gleich gut landen`,`Ja, mitten in den dunklen Streifen der Welle`,`Ja, genau in der Mitte des Schirms`],richtig:1},auftrag:{text:`Blende das Wellenbild ein und vergleiche es mit den Treffern.`,bedienung:[`wellenbild`,`rate`,`treffer`],erledigt:(e,t)=>e.wellenbild&&t.treffer>=800},aufloesung:{text:`Die Welle gibt an, wie wahrscheinlich ein Treffer an jeder Stelle ist. Wo sie hell ist, landen viele Teilchen, wo sie dunkel ist, fast keine. Das einzelne Teilchen bleibt Zufall, die Verteilung vieler Teilchen nicht.`,ausfuehrlich:{titel:`Die Welle als Wahrscheinlichkeit`,html:`
            <p>In der Quantenphysik beschreibt man ein Teilchen durch eine Welle. Diese Welle
            läuft durch beide Spalte und überlagert sich dahinter, genau wie im Kapitel „Wellen".</p>
            <p>Die Helligkeit der Welle an einer Stelle ist die Wahrscheinlichkeit, das Teilchen
            dort zu finden. Die Simulation würfelt jeden Treffer genau nach dieser Verteilung.
            Deshalb passt das Punktemuster nach vielen Treffern auf die Streifen.</p>
            <p>Das ist der Kern des Welle-Teilchen-Dualismus: Unterwegs verhält es sich wie eine
            Welle, beim Auftreffen wie ein Teilchen.</p>`}}},{titel:`Welcher Spalt?`,blick:`schraeg`,start:{rate:4},frage:{text:`An den Spalten wird jetzt ein Detektor aufgestellt. Er misst bei jedem Teilchen, durch welchen Spalt es geht. Was passiert mit den Streifen?`,antworten:[`Sie bleiben, wie sie sind`,`Sie werden schärfer`,`Sie verschwinden`],richtig:2},auftrag:{text:`Schalte den Detektor ein. Sieh dir ein paar einzelne Teilchen an, dreh dann die Rate hoch und warte auf 2000 Treffer.`,bedienung:[`detektor`,`rate`,`treffer`],erledigt:(e,t)=>e.detektor&&t.treffer>=2e3},aufloesung:{text:`Die Streifen sind weg, übrig bleibt ein breiter Fleck. Sobald feststeht, durch welchen Spalt ein Teilchen ging, gibt es keine zwei Wege mehr, die sich überlagern könnten.`,ausfuehrlich:{titel:`Messen verändert das Ergebnis`,html:`
            <p>Mit Detektor siehst du jedes Teilchen durch einen bestimmten Spalt fliegen, und
            seine Bahn ist durchgezogen gezeichnet. Der Weg ist jetzt bekannt.</p>
            <p>Der Preis dafür: Das Teilchen verhält sich so, als wäre nur dieser eine Spalt offen
            gewesen. Auf dem Schirm addieren sich die breiten Flecken der beiden einzelnen Spalte,
            ohne Streifen.</p>
            <p>Das liegt nicht an einem ungeschickt gebauten Detektor. Es ist grundsätzlich so:
            Die Information, welcher Weg genommen wurde, und das Streifenmuster schließen
            einander aus. Man kann nur eines von beiden haben.</p>`}}},{titel:`Alles zusammen`,blick:`schirm`,start:{rate:300},auftrag:{text:`Schalte den Detektor ein und wieder aus und sieh dir an, wie sich das Bild jedes Mal neu aufbaut.`,bedienung:[`detektor`,`rate`,`treffer`],erledigt:(e,t)=>t.detektorWechsel>=2&&t.treffer>=500},aufloesung:{text:`Einzelne Teilchen landen zufällig, viele zusammen ergeben die Streifen der Welle. Misst man den Weg, verschwinden die Streifen. Licht und Materie sind weder nur Welle noch nur Teilchen.`}}]};function u(e){let t=[],n=[[1,e.spaltabstand/2,e.spalt1Offen],[2,-e.spaltabstand/2,e.spalt2Offen]];for(let[r,i,a]of n)if(a)for(let n=0;n<6;n++){let a=(n+.5)/6-.5;t.push({z:i+a*e.spaltbreite,spalt:r})}return t}function d(e,t,n,r){let i=2*Math.PI/e.wellenlaenge,a=0,o=0;for(let s of u(e)){if(r!==`alle`&&s.spalt!==r)continue;let e=Math.hypot(t,n-s.z),c=1/(6*Math.sqrt(Math.max(e,1e-9)));a+=c*Math.cos(i*e),o+=c*Math.sin(i*e)}return{re:a,im:o}}function f(e,t){if(e.detektor){let n=d(e,e.schirmabstand,t,1),r=d(e,e.schirmabstand,t,2);return n.re*n.re+n.im*n.im+r.re*r.re+r.im*r.im}let n=d(e,e.schirmabstand,t,`alle`);return n.re*n.re+n.im*n.im}function p(e,t){let n=d(e,e.schirmabstand,t,1),r=d(e,e.schirmabstand,t,2),i=n.re*n.re+n.im*n.im,a=r.re*r.re+r.im*r.im;return i+a>0?i/(i+a):.5}function m(e,t,n){let r=f({...e,spalt1Offen:!0,spalt2Offen:!0,detektor:!1},0),i=new Float32Array(n);for(let a=0;a<n;a++){let o=-t/2+t*a/(n-1);i[a]=f(e,o)/r}return i}function h(e,t){return(_(e,t,2)-_(e,t,1))/e.wellenlaenge}function g(e,t,n){if(t===0)return 0;if(h(e,n)<t)return null;let r=0,i=n;for(let n=0;n<50;n++){let n=(r+i)/2;h(e,n)<t?r=n:i=n}return(r+i)/2}function _(e,t,n){let r=n===1?e.spaltabstand/2:-e.spaltabstand/2;return Math.hypot(e.schirmabstand,t-r)}function v(e,t,n=Math.random){let r=0;for(let t of e)r+=t;let i=n()*r,a=e.length-1;for(let t=0;t<e.length;t++)if(i-=e[t],i<=0){a=t;break}let o=t/(e.length-1);return-t/2+(a+n()-.5)*o}export{_ as a,l as c,n as d,i as f,u as i,c as l,e as m,m as n,h as o,a as p,g as r,v as s,p as t,r as u};