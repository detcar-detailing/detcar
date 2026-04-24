import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import "./Datenschutz.css";

const Datenschutz = () => {
  return (
    <div className="mb-24 flex flex-col justify-start p-5 !pt-20 font-medium text-myColor-lightGray md:p-10">
      <h1 className="text-xl font-bold text-myColor-orange md:text-3xl">
        Datenschutzerklärung
      </h1>
      <Accordion
        type="single"
        collapsible
        className="mt-4 w-full max-w-[1200px] md:mt-6"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="accordion-trigger">
            1. Datenschutz auf einen Blick
          </AccordionTrigger>
          <AccordionContent className="text-myColor-lightGray md:pl-4">
            <h2 className="header-2">Allgemeine Hinweise</h2>

            <p className="paragraph">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h2 className="header-2">Datenerfassung auf dieser Website</h2>

            <h3 className="header-3">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>

            <p className="paragraph">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Hinweis zur Verantwortlichen Stelle“ in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <h3 className="header-3">Wie erfassen wir Ihre Daten?</h3>

            <p className="paragraph">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben.
            </p>

            <p className="paragraph">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT- Systeme erfasst. Das sind vor
              allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>

            <h3 className="header-3">Wofür nutzen wir Ihre Daten?</h3>

            <p className="paragraph">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h3 className="header-3">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h3>

            <p className="paragraph">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>

            <p className="paragraph">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>

            <h2 className="header-2">
              Analyse-Tools und Tools von Drittanbietern
            </h2>

            <p className="paragraph">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen.
            </p>

            <p className="paragraph">
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie
              in der folgenden Datenschutzerklärung.
            </p>

            <h3 className="header-3">Google Analytics</h3>

            <p className="paragraph">
              Diese Website nutzt Funktionen des Webanalysedienstes Google
              Analytics. Anbieter ist die Google Ireland Limited („Google“),
              Gordon House, Barrow Street, Dublin 4, Irland. <br />
              Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten
              der Websitebesucher zu analysieren. Hierbei erhält der
              Websitebetreiber verschiedene Nutzungsdaten, wie z. B.
              Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und
              Herkunft des Nutzers. Diese Daten werden dem jeweiligen Endgerät
              des Users zugeordnet. Eine Zuordnung zu einer User-ID erfolgt
              nicht. <br />
              Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und
              Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google
              Analytics verschiedene Modellierungsansätze, um die erfassten
              Datensätze zu ergänzen und setzt Machine-Learning-Technologien bei
              der Datenanalyse ein. <br />
              Google Analytics verwendet Technologien, die die Wiedererkennung
              des Nutzers zum Zwecke der Analyse des Nutzerverhaltens
              ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von
              Google erfassten Informationen über die Benutzung dieser Website
              werden in der Regel an einen Server von Google in den USA
              übertragen und dort gespeichert. <br />
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
              Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TTDSG. Die Einwilligung ist jederzeit widerrufbar. <br />
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:{" "}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                className="link"
              >
                https://privacy.google.com/businesses/controllerterms/mccs/.
              </a>
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="accordion-trigger">
            2. Hosting
          </AccordionTrigger>
          <AccordionContent>
            <p className="paragraph">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h2 className="header-2">Externes Hosting</h2>

            <p className="paragraph">
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
              IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
              Daten, die über eine Website generiert werden, handeln.
            </p>

            <p className="paragraph">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
              gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs.
              1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die
              Speicherung von Cookies oder den Zugriff auf Informationen im
              Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
              TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>

            <p className="paragraph">
              Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
              verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
              erforderlich ist und unsere Weisungen in Bezug auf diese Daten
              befolgen.
            </p>

            <p className="paragraph">Wir setzen folgende(n) Hoster ein:</p>

            <p className="paragraph">
              Vercel Inc. <br /> 440 N Barranca Avenue #4133 <br /> Covina, CA
              91723 <br />
              United States
            </p>

            <h2 className="header-2">Auftragsverarbeitung</h2>

            <p className="paragraph">
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur
              Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
              es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
              der gewährleistet, dass dieser die personenbezogenen Daten unserer
              Websitebesucher nur nach unseren Weisungen und unter Einhaltung
              der DSGVO verarbeitet.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="accordion-trigger">
            3. Allgemeine Hinweise und Pflichtinformationen
          </AccordionTrigger>
          <AccordionContent>
            <h2 className="header-2">Datenschutz</h2>

            <p className="paragraph">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <p className="paragraph">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>

            <p className="paragraph">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.
              B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>

            <h2 className="header-2">Hinweis zur verantwortlichen Stelle</h2>

            <p className="paragraph">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>

            <p className="paragraph">Max Mustermann</p>

            <p className="paragraph">
              Telefon: +49 123 42678910 <br /> E-Mail: det.car.de@gmail.com
            </p>

            <p className="paragraph">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h2 className="header-2">Speicherdauer</h2>

            <p className="paragraph">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer-
              oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
              Fall erfolgt die Löschung nach Fortfall dieser Gründe.
            </p>

            <h2 className="header-2">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
              auf dieser Website
            </h2>

            <p className="paragraph">
              Sofern Sie in die Datenverarbeitung eingewilligt haben,
              verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
              besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
              werden. Im Falle einer ausdrücklichen Einwilligung in die
              Übertragung personenbezogener Daten in Drittstaaten erfolgt die
              Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
              DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
              Zugriff auf Informationen in Ihr Endgerät (z. B. via
              Device-Fingerprinting) eingewilligt haben, erfolgt die
              Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG.
              Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
              Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6
              Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten,
              sofern diese zur Erfüllung einer rechtlichen Verpflichtung
              erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
              Die Datenverarbeitung kann ferner auf Grundlage unseres
              berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
              Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird
              in den folgenden Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h2 className="header-2">Empfänger von personenbezogenen Daten</h2>

            <p className="paragraph">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
              verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
              eine Übermittlung von personenbezogenen Daten an diese externen
              Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
              externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
              verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden),
              wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f
              DSGVO an der Weitergabe haben oder wenn eine sonstige
              Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
              Auftragsverarbeitern geben wir personenbezogene Daten unserer
              Kunden nur auf Grundlage eines gültigen Vertrags über
              Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
              Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung
              geschlossen.
            </p>

            <h2 className="header-2">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h2>

            <p className="paragraph">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h2 className="header-2">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
              sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h2>

            <p className="paragraph">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
              ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN,
              DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
              VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN;
              DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
              PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
              VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
              WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
              PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
              KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN
              ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
              VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1
              DSGVO).
            </p>

            <p className="paragraph">
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG
              ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN
              DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
              ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS
              PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG
              STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
              ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
              (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>

            <h2 className="header-2">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h2>

            <p className="paragraph">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h2 className="header-2">Recht auf Datenübertragbarkeit</h2>

            <p className="paragraph">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h2 className="header-2">Auskunft, Berichtigung und Löschung</h2>

            <p className="paragraph">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit an uns wenden.
            </p>

            <h2 className="header-2">
              Recht auf Einschränkung der Verarbeitung
            </h2>

            <p className="paragrap">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen:
            </p>

            <ul className="ml-8">
              <li className="list-disc">
                <p className="paragraph">
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                  personenbezogenen Daten bestreiten, benötigen wir in der Regel
                  Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben
                  Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </p>
              </li>
              <li className="list-disc">
                <p className="paragraph">
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten
                  unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                  die Einschränkung der Datenverarbeitung verlangen.
                </p>
              </li>
              <li className="list-disc">
                <p className="paragraph">
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                  Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung
                  von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                  Löschung die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </p>
              </li>
              <li className="list-disc">
                <p className="paragraph">
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                  haben, muss eine Abwägung zwischen Ihren und unseren
                  Interessen vorgenommen werden. Solange noch nicht feststeht,
                  wessen Interessen überwiegen, haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                  zu verlangen.
                </p>
              </li>
            </ul>

            <p className="paragraph">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
              abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person oder
              aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>

            <h2 className="header-2">SSL- bzw. TLS-Verschlüsselung</h2>

            <p className="paragraph">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS- Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>

            <p className="paragraph">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="accordion-trigger">
            4. Datenerfassung auf dieser Website
          </AccordionTrigger>
          <AccordionContent>
            <h2 className="header-2">Cookies</h2>

            <p className="paragraph">
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies
              sind kleine Datenpakete und richten auf Ihrem Endgerät keinen
              Schaden an. Sie werden entweder vorübergehend für die Dauer einer
              Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
              Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres
              Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem
              Endgerät gespeichert, bis Sie diese selbst löschen oder eine
              automatische Löschung durch Ihren Webbrowser erfolgt.
            </p>

            <p className="paragraph">
              Cookies können von uns (First-Party-Cookies) oder von
              Drittunternehmen stammen (sog. Third-Party- Cookies).
              Third-Party-Cookies ermöglichen die Einbindung bestimmter
              Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z.
              B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>

            <p className="paragraph">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
              nicht funktionieren würden (z. B. die Warenkorbfunktion oder die
              Anzeige von Videos). Andere Cookies können zur Auswertung des
              Nutzerverhaltens oder zu Werbezwecken verwendet werden.
            </p>

            <p className="paragraph">
              Cookies, die zur Durchführung des elektronischen
              Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
              erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
              Optimierung der Website (z. B. Cookies zur Messung des
              Webpublikums) erforderlich sind (notwendige Cookies), werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine
              andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat
              ein berechtigtes Interesse an der Speicherung von notwendigen
              Cookies zur technisch fehlerfreien und optimierten Bereitstellung
              seiner Dienste. Sofern eine Einwilligung zur Speicherung von
              Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
              wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
              dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
              TDDDG); die Einwilligung ist jederzeit widerrufbar.
            </p>

            <p className="paragraph">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>

            <p className="paragraph">
              Welche Cookies und Dienste auf dieser Website eingesetzt werden,
              können Sie dieser Datenschutzerklärung entnehmen.
            </p>

            <h2 className="header-2">Server-Log-Dateien</h2>

            <p className="paragraph">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log- Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>

            <ul className="ml-8">
              <li className="list-disc">
                <p className="paragraph">Browsertyp und Browserversion</p>
              </li>
              <li className="list-disc">
                <p className="paragraph">verwendetes Betriebssystem</p>
              </li>
              <li className="list-disc">
                <p className="paragraph">Referrer URL</p>
              </li>
              <li className="list-disc">
                <p className="paragraph">Hostname des zugreifenden Rechners</p>
              </li>
              <li className="list-disc">
                <p className="paragraph">Uhrzeit der Serveranfrage</p>
              </li>
              <li className="list-disc">
                <p className="paragraph">IP-Adresse</p>
              </li>
            </ul>

            <p className="paragraph">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>

            <p className="paragraph">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
              an der technisch fehlerfreien Darstellung und der Optimierung
              seiner Website – hierzu müssen die Server-Log-Files erfasst
              werden.
            </p>

            <h2 className="header-2">Kontaktformular</h2>

            <p className="paragraph">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <p className="paragraph">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>

            <p className="paragraph">
              Zur Bereitstellung unseres Kontaktformulars verwenden wir den
              Dienst EmailJS. EmailJS ermöglicht uns, Kontaktanfragen effizient
              zu verwalten und zu bearbeiten. Die von Ihnen im Kontaktformular
              eingegebenen Daten werden an EmailJS übermittelt und auf deren
              Servern gespeichert.
            </p>

            <p className="paragraph">
              Die Nutzung von EmailJS erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Wir haben ein berechtigtes Interesse an der
              schnellen und effizienten Bearbeitung Ihrer Anfragen. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>

            <p className="paragraph">
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              EmailJS:{" "}
              <a
                href="https://www.emailjs.com/legal/privacy-policy/"
                className="link"
              >
                https://www.emailjs.com/legal/privacy-policy/
              </a>
              .
            </p>

            <p className="paragraph">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten
              verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
              Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h2 className="header-2">
              Anfrage per E-Mail, Telefon oder Telefax
            </h2>

            <p className="paragraph">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <p className="paragraph">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>

            <p className="paragraph">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten
              verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
              Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="accordion-trigger">
            5. Plugins und Tools
          </AccordionTrigger>
          <AccordionContent>
            <h2 className="header-2">Google Fonts</h2>

            <p className="paragraph">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Google Fonts, die von Google bereitgestellt werden.
              Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in
              ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>

            <p className="paragraph">
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung
              zu den Servern von Google aufnehmen. Hierdurch erlangt Google
              Kenntnis darüber, dass über Ihre IP-Adresse diese Website
              aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
              ein berechtigtes Interesse an der einheitlichen Darstellung des
              Schriftbildes auf seiner Website. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und §
              25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von
              Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
              (z. B. Device- Fingerprinting) im Sinne des TDDDG umfasst. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>

            <p className="paragraph">
              Wenn Ihr Browser Google Fonts nicht unterstützt, wird eine
              Standardschrift von Ihrem Computer genutzt.
            </p>

            <p className="paragraph">
              Weitere Informationen zu Google Fonts finden Sie unter
              <span>
                {" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  className="link"
                >
                  https://developers.google.com/fonts/faq
                </a>
              </span>{" "}
              und in der Datenschutzerklärung von Google:
              <span>
                {" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  className="link"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
              </span>
              .
            </p>

            <p className="paragraph">
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
              Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen
              zwischen der Europäischen Union und den USA, der die Einhaltung
              europäischer Datenschutzstandards bei Datenverarbeitungen in den
              USA gewährleisten soll. Jedes nach dem DPF zertifizierte
              Unternehmen verpflichtet sich, diese Datenschutzstandards
              einzuhalten. Weitere Informationen hierzu erhalten Sie vom
              Anbieter unter folgendem Link:
            </p>
            <a
              href="https://www.dataprivacyframework.gov/participant/5780"
              className="link"
            >
              https://www.dataprivacyframework.gov/participant/5780
            </a>

            <h2 className="header-2">Google Maps</h2>

            <p className="paragraph">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
              Google Ireland Limited („Google“), Gordon House, Barrow Street,
              Dublin 4, Irland. Mit Hilfe dieses Dienstes können wir
              Kartenmaterial auf unserer Website einbinden.
            </p>

            <p className="paragraph">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
              IP-Adresse zu speichern. Diese Informationen werden in der Regel
              an einen Server von Google in den USA übertragen und dort
              gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
              diese Datenübertragung. Wenn Google Maps aktiviert ist, kann
              Google zum Zwecke der einheitlichen Darstellung der Schriftarten
              Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr
              Browser die benötigten Web Fonts in ihren Browsercache, um Texte
              und Schriftarten korrekt anzuzeigen.
            </p>

            <p className="paragraph">
              Die Nutzung von Google Maps erfolgt im Interesse einer
              ansprechenden Darstellung unserer Online- Angebote und an einer
              leichten Auffindbarkeit der von uns auf der Website angegebenen
              Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
              Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG,
              soweit die Einwilligung die Speicherung von Cookies oder den
              Zugriff auf Informationen im Endgerät des Nutzers (z. B.
              Device-Fingerprinting) im Sinne des TDDDG umfasst. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>

            <p className="paragra">
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:
              <span>
                <br />{" "}
                <a
                  href="https://privacy.google.com/businesses/gdprcontrollerterms/"
                  className="link"
                >
                  https://privacy.google.com/businesses/gdprcontrollerterms/{" "}
                </a>
              </span>{" "}
              und
              <br />
              <span>
                <a
                  href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
                  className="link"
                >
                  https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                </a>
                .
              </span>
            </p>

            <p className="paragraph">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von Google: <br />
              <span>
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  className="link"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </span>
            </p>

            <p className="paragraph">
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
              Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen
              zwischen der Europäischen Union und den USA, der die Einhaltung
              europäischer Datenschutzstandards bei Datenverarbeitungen in den
              USA gewährleisten soll. Jedes nach dem DPF zertifizierte
              Unternehmen verpflichtet sich, diese Datenschutzstandards
              einzuhalten. Weitere Informationen hierzu erhalten Sie vom
              Anbieter unter folgendem Link:
              <br />{" "}
              <span>
                <a
                  href="https://www.dataprivacyframework.gov/participant/5780"
                  className="link"
                >
                  https://www.dataprivacyframework.gov/participant/5780
                </a>
                .
              </span>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Datenschutz;
