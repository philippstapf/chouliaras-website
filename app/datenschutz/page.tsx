import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Chouliaras",
  description: "Datenschutzerklaerung der Chouliaras Vermietungs eGbR",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Zurueck zur Startseite
        </Link>

        <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          Datenschutzerklaerung
        </h1>

        <div className="mt-12 prose prose-neutral max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persoenlich identifiziert
            werden koennen. Ausfuehrliche Informationen zum Thema Datenschutz entnehmen
            Sie unserer unter diesem Text aufgefuehrten Datenschutzerklaerung.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich fuer die Datenerfassung auf dieser Website?</strong>
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten koennen Sie dem Abschnitt &bdquo;Hinweis zur verantwortlichen
            Stelle&ldquo; in dieser Datenschutzerklaerung entnehmen.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
            <br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
            Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
            (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>
          <p>
            <strong>Wofuer nutzen wir Ihre Daten?</strong>
            <br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
            zu gewaehrleisten. Andere Daten koennen zur Analyse Ihres Nutzerverhaltens
            verwendet werden. Sofern ueber die Website Vertraege geschlossen oder angebahnt
            werden koennen, werden die uebermittelten Daten auch fuer Vertragsangebote,
            Bestellungen oder sonstige Auftragsanfragen verarbeitet.
          </p>
          <p>
            <strong>Welche Rechte haben Sie bezueglich Ihrer Daten?</strong>
            <br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft ueber Herkunft, Empfaenger
            und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
            ausserdem ein Recht, die Berichtigung oder Loeschung dieser Daten zu verlangen.
            Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, koennen Sie diese
            Einwilligung jederzeit fuer die Zukunft widerrufen. Ausserdem haben Sie das Recht,
            unter bestimmten Umstaenden die Einschraenkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
            Beschwerderecht bei der zustaendigen Aufsichtsbehoerde zu.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3>Externes Hosting</h3>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
            Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei
            kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die
            ueber eine Website generiert werden, handeln.
          </p>
          <p>
            Das externe Hosting erfolgt zum Zwecke der Vertragserfuellung gegenueber unseren
            potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
            einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
            durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfuellung
            seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf
            diese Daten befolgen.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persoenlichen Daten sehr
            ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
            den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklaerung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten
            erhoben. Personenbezogene Daten sind Daten, mit denen Sie persoenlich
            identifiziert werden koennen. Die vorliegende Datenschutzerklaerung erlaeutert,
            welche Daten wir erheben und wofuer wir sie nutzen. Sie erlaeutert auch, wie
            und zu welchem Zweck das geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenuebertragung im Internet (z.B. bei der
            Kommunikation per E-Mail) Sicherheitsluecken aufweisen kann. Ein lueckenloser
            Schutz der Daten vor dem Zugriff durch Dritte ist nicht moeglich.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle fuer die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Chouliaras Vermietungs eGbR (GsR 30)
            <br />
            Herner Strasse 49
            <br />
            45657 Recklinghausen
          </p>
          <p>
            Telefon: +49 176 57 99 56 44
            <br />
            E-Mail: info@chouliaras-immobilien.de
          </p>
          <p>
            Verantwortliche Stelle ist die natuerliche oder juristische Person, die allein
            oder gemeinsam mit anderen ueber die Zwecke und Mittel der Verarbeitung von
            personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.Ae.) entscheidet.
          </p>

          <h3>Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklaerung keine speziellere Speicherdauer
            genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
            fuer die Datenverarbeitung entfaellt. Wenn Sie ein berechtigtes Loeschersuchen
            geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden
            Ihre Daten geloescht, sofern wir keine anderen rechtlich zulaessigen Gruende
            fuer die Speicherung Ihrer personenbezogenen Daten haben (z.B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
            Loeschung nach Fortfall dieser Gruende.
          </p>

          <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h3>
          <p>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
            personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw.
            Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9
            Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdruecklichen Einwilligung
            in die Uebertragung personenbezogener Daten in Drittstaaten erfolgt die
            Datenverarbeitung ausserdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
            Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen
            in Ihr Endgeraet (z.B. via Device-Fingerprinting) eingewilligt haben, erfolgt
            die Datenverarbeitung zusaetzlich auf Grundlage von Paragraph 25 Abs. 1 TDDDG. Die
            Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfuellung
            oder zur Durchfuehrung vorvertraglicher Massnahmen erforderlich, verarbeiten
            wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
            verarbeiten wir Ihre Daten, sofern diese zur Erfuellung einer rechtlichen
            Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
            Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses
            nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Ueber die jeweils im Einzelfall
            einschlaegigen Rechtsgrundlagen wird in den folgenden Absaetzen dieser
            Datenschutzerklaerung informiert.
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgaenge sind nur mit Ihrer ausdruecklichen Einwilligung
            moeglich. Sie koennen eine bereits erteilte Einwilligung jederzeit widerrufen.
            Die Rechtmaessigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt
            vom Widerruf unberuehrt.
          </p>

          <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Faellen</h3>
          <p>
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
            ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRUENDEN, DIE SICH AUS IHRER
            BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN
            DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FUER EIN AUF DIESE BESTIMMUNGEN
            GESTUETZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
            VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLAERUNG. WENN SIE
            WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN
            NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KOENNEN ZWINGENDE SCHUTZWUERDIGE
            GRUENDE FUER DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
            FREIHEITEN UEBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
            AUSUEBUNG ODER VERTEIDIGUNG VON RECHTSANSPRUECHEN (WIDERSPRUCH NACH ART. 21
            ABS. 1 DSGVO).
          </p>

          <h3>Beschwerderecht bei der zustaendigen Aufsichtsbehoerde</h3>
          <p>
            Im Falle von Verstoessen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehoerde, insbesondere in dem Mitgliedstaat
            ihres gewoehnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
            mutmasslichen Verstosses zu. Das Beschwerderecht besteht unbeschadet
            anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>

          <h3>Recht auf Datenportabilitaet</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
            Erfuellung eines Vertrags automatisiert verarbeiten, an sich oder an einen
            Dritten in einem gaengigen, maschinenlesbaren Format aushaendigen zu lassen.
            Sofern Sie die direkte Uebertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>

          <h3>Auskunft, Berichtigung und Loeschung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht
            auf unentgeltliche Auskunft ueber Ihre gespeicherten personenbezogenen Daten,
            deren Herkunft und Empfaenger und den Zweck der Datenverarbeitung und ggf. ein
            Recht auf Berichtigung oder Loeschung dieser Daten. Hierzu sowie zu weiteren
            Fragen zum Thema personenbezogene Daten koennen Sie sich jederzeit an uns wenden.
          </p>

          <h3>Recht auf Einschraenkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschraenkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen. Hierzu koennen Sie sich jederzeit an uns wenden. Das Recht
            auf Einschraenkung der Verarbeitung besteht in folgenden Faellen:
          </p>
          <ul>
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
              bestreiten, benoetigen wir in der Regel Zeit, um dies zu ueberpruefen. Fuer die
              Dauer der Pruefung haben Sie das Recht, die Einschraenkung der Verarbeitung
              Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmaessig
              geschah/geschieht, koennen Sie statt der Loeschung die Einschraenkung der
              Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benoetigen, Sie sie jedoch
              zur Ausuebung, Verteidigung oder Geltendmachung von Rechtsanspruechen
              benoetigen, haben Sie das Recht, statt der Loeschung die Einschraenkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss
              eine Abwaegung zwischen Ihren und unseren Interessen vorgenommen werden.
              Solange noch nicht feststeht, wessen Interessen ueberwiegen, haben Sie das
              Recht, die Einschraenkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </li>
          </ul>
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschraenkt haben,
            duerfen diese Daten - von ihrer Speicherung abgesehen - nur mit Ihrer
            Einwilligung oder zur Geltendmachung, Ausuebung oder Verteidigung von
            Rechtsanspruechen oder zum Schutz der Rechte einer anderen natuerlichen oder
            juristischen Person oder aus Gruenden eines wichtigen oeffentlichen Interesses
            der Europaeischen Union oder eines Mitgliedstaats verarbeitet werden.
          </p>

          <h3>SSL- bzw. TLS-Verschluesselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgruenden und zum Schutz der Uebertragung
            vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie
            an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschluesselung. Eine
            verschluesselte Verbindung erkennen Sie daran, dass die Adresszeile des
            Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem
            Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschluesselung aktiviert ist, koennen die Daten, die
            Sie an uns uebermitteln, nicht von Dritten mitgelesen werden.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind
            kleine Datenpakete und richten auf Ihrem Endgeraet keinen Schaden an. Sie werden
            entweder voruebergehend fuer die Dauer einer Sitzung (Session-Cookies) oder
            dauerhaft (permanente Cookies) auf Ihrem Endgeraet gespeichert. Session-Cookies
            werden nach Ende Ihres Besuchs automatisch geloescht. Permanente Cookies bleiben
            auf Ihrem Endgeraet gespeichert, bis Sie diese selbst loeschen oder eine
            automatische Loeschung durch Ihren Webbrowser erfolgt.
          </p>
          <p>
            Cookies koennen von uns (First-Party-Cookies) oder von Drittunternehmen stammen
            (sog. Third-Party-Cookies). Third-Party-Cookies ermoeglichen die Einbindung
            bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten
            (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p>
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch
            notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren
            wuerden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere
            Cookies koennen zur Auswertung des Nutzerverhaltens oder zu Werbezwecken
            verwendet werden.
          </p>
          <p>
            Cookies, die zur Durchfuehrung des elektronischen Kommunikationsvorgangs, zur
            Bereitstellung bestimmter, von Ihnen erwuenschter Funktionen (z.B. fuer die
            Warenkorbfunktion) oder zur Optimierung der Website (z.B. Cookies zur Messung
            des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage
            von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
            angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der
            Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten
            Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von
            Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
            erfolgt die Verarbeitung ausschliesslich auf Grundlage dieser Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO und Paragraph 25 Abs. 1 TDDDG); die Einwilligung ist
            jederzeit widerrufbar.
          </p>
          <p>
            Sie koennen Ihren Browser so einstellen, dass Sie ueber das Setzen von Cookies
            informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von
            Cookies fuer bestimmte Faelle oder generell ausschliessen sowie das automatische
            Loeschen der Cookies beim Schliessen des Browsers aktivieren. Bei der
            Deaktivierung von Cookies kann die Funktionalitaet dieser Website eingeschraenkt
            sein.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so
            genannten Server-Log-Dateien, die Ihr Browser automatisch an uns uebermittelt.
            Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenfuehrung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen.
          </p>
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch
            fehlerfreien Darstellung und der Optimierung seiner Website - hierzu muessen
            die Server-Log-Files erfasst werden.
          </p>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
            aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
            zwecks Bearbeitung der Anfrage und fuer den Fall von Anschlussfragen bei uns
            gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO, sofern Ihre Anfrage mit der Erfuellung eines Vertrags zusammenhaengt
            oder zur Durchfuehrung vorvertraglicher Massnahmen erforderlich ist. In allen
            uebrigen Faellen beruht die Verarbeitung auf unserem berechtigten Interesse an
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
            lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
            diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie
            uns zur Loeschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
            der Zweck fuer die Datenspeicherung entfaellt (z.B. nach abgeschlossener
            Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen - insbesondere
            Aufbewahrungsfristen - bleiben unberuehrt.
          </p>
          <p>
            Fuer die Verarbeitung der Kontaktformulardaten nutzen wir den Dienst Formspree
            (Formspree, Inc., 1769 Williams Hwy, Suite 314, Grants Pass, Oregon 97527, USA).
            Formspree verarbeitet die uebermittelten Daten in unserem Auftrag. Die Daten
            werden dabei auf Servern in den USA gespeichert. Formspree hat sich zur
            Einhaltung der EU-Datenschutzstandards verpflichtet. Weitere Informationen
            finden Sie in der Datenschutzerklaerung von Formspree unter:{" "}
            <a
              href="https://formspree.io/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              https://formspree.io/legal/privacy-policy/
            </a>
          </p>

          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage
            inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage)
            zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO, sofern Ihre Anfrage mit der Erfuellung eines Vertrags zusammenhaengt
            oder zur Durchfuehrung vorvertraglicher Massnahmen erforderlich ist. In allen
            uebrigen Faellen beruht die Verarbeitung auf unserem berechtigten Interesse an
            der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
            lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
            diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Die von Ihnen an uns per Kontaktanfragen uebersandten Daten verbleiben bei uns,
            bis Sie uns zur Loeschung auffordern, Ihre Einwilligung zur Speicherung
            widerrufen oder der Zweck fuer die Datenspeicherung entfaellt (z.B. nach
            abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche
            Bestimmungen - insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberuehrt.
          </p>

          <h2>5. Ihre Rechte als betroffene Person</h2>
          <p>
            Als betroffene Person haben Sie folgende Rechte:
          </p>
          <ul>
            <li>
              <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestaetigung
              darueber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet
              werden. Ist dies der Fall, so haben Sie ein Recht auf Auskunft ueber diese
              personenbezogenen Daten und auf die in Art. 15 DSGVO im Einzelnen aufgefuehrten
              Informationen.
            </li>
            <li>
              <strong>Recht auf Berichtigung:</strong> Sie haben das Recht, unverzueglich
              die Berichtigung Sie betreffender unrichtiger personenbezogener Daten und
              ggf. die Vervollstaendigung unvollstaendiger Daten zu verlangen (Art. 16 DSGVO).
            </li>
            <li>
              <strong>Recht auf Loeschung:</strong> Sie haben das Recht, zu verlangen, dass
              Sie betreffende personenbezogene Daten unverzueglich geloescht werden, sofern
              einer der in Art. 17 DSGVO im Einzelnen aufgefuehrten Gruende zutrifft.
            </li>
            <li>
              <strong>Recht auf Einschraenkung der Verarbeitung:</strong> Sie haben das
              Recht, die Einschraenkung der Verarbeitung zu verlangen, wenn eine der in
              Art. 18 DSGVO aufgefuehrten Voraussetzungen gegeben ist.
            </li>
            <li>
              <strong>Recht auf Datenportabilitaet:</strong> Sie haben das Recht, die Sie
              betreffenden personenbezogenen Daten in einem strukturierten, gaengigen und
              maschinenlesbaren Format zu erhalten und diese Daten einem anderen
              Verantwortlichen zu uebermitteln (Art. 20 DSGVO).
            </li>
            <li>
              <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gruenden, die
              sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung
              Sie betreffender personenbezogener Daten Widerspruch einzulegen (Art. 21 DSGVO).
            </li>
            <li>
              <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer
              Aufsichtsbehoerde zu beschweren, wenn Sie der Ansicht sind, dass die
              Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO
              verstoesst (Art. 77 DSGVO).
            </li>
          </ul>

          <h2>6. Aktualitaet und Aenderung dieser Datenschutzerklaerung</h2>
          <p>
            Diese Datenschutzerklaerung ist aktuell gueltig und hat den Stand Februar 2025.
          </p>
          <p>
            Durch die Weiterentwicklung unserer Website und Angebote darueber oder aufgrund
            geaenderter gesetzlicher beziehungsweise behoerdlicher Vorgaben kann es notwendig
            werden, diese Datenschutzerklaerung zu aendern. Die jeweils aktuelle
            Datenschutzerklaerung kann jederzeit auf dieser Website von Ihnen abgerufen
            und ausgedruckt werden.
          </p>
        </div>
      </div>
    </div>
  );
}
