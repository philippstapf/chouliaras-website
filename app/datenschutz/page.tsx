import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Chouliaras",
  description: "Datenschutzerklärung der Chouliaras Vermietungs eGbR",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-stone-900 text-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white transition-colors mb-8"
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
            Zurück zur Startseite
          </Link>
          <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Datenschutzerklärung
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="grid gap-16">
          {/* 1. Datenschutz auf einen Blick */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white text-sm font-semibold">
                1
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-900">
                Datenschutz auf einen Blick
              </h2>
            </div>

            <div className="space-y-8 pl-14">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Allgemeine Hinweise
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber,
                  was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                  Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Datenerfassung auf dieser Website
                </h3>
                <div className="space-y-4">
                  <div className="bg-stone-50 rounded-lg p-5">
                    <p className="font-medium text-stone-900 mb-2">
                      Wer ist verantwortlich für die Datenerfassung?
                    </p>
                    <p className="text-stone-600 text-sm">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den
                      Websitebetreiber. Dessen Kontaktdaten können Sie dem
                      Abschnitt „Hinweis zur verantwortlichen Stelle" entnehmen.
                    </p>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-5">
                    <p className="font-medium text-stone-900 mb-2">
                      Wie erfassen wir Ihre Daten?
                    </p>
                    <p className="text-stone-600 text-sm">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                      diese mitteilen (z.B. über ein Kontaktformular). Andere
                      Daten werden automatisch beim Besuch der Website erfasst
                      (technische Daten wie Internetbrowser, Betriebssystem oder
                      Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-5">
                    <p className="font-medium text-stone-900 mb-2">
                      Wofür nutzen wir Ihre Daten?
                    </p>
                    <p className="text-stone-600 text-sm">
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie
                      Bereitstellung der Website zu gewährleisten. Andere Daten
                      können zur Bearbeitung Ihrer Anfragen verwendet werden.
                    </p>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-5">
                    <p className="font-medium text-stone-900 mb-2">
                      Welche Rechte haben Sie?
                    </p>
                    <p className="text-stone-600 text-sm">
                      Sie haben jederzeit das Recht auf Auskunft, Berichtigung
                      oder Löschung Ihrer Daten. Bei Fragen können Sie sich
                      jederzeit an uns wenden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* 2. Hosting */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white text-sm font-semibold">
                2
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-900">
                Hosting
              </h2>
            </div>

            <div className="space-y-4 pl-14">
              <p className="text-stone-700 leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern des
                Hosters gespeichert. Hierbei kann es sich um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten handeln.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* 3. Allgemeine Hinweise */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white text-sm font-semibold">
                3
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-900">
                Allgemeine Hinweise und Pflichtinformationen
              </h2>
            </div>

            <div className="space-y-8 pl-14">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Hinweis zur verantwortlichen Stelle
                </h3>
                <div className="bg-stone-900 text-white rounded-lg p-6">
                  <p className="font-medium text-lg mb-1">
                    Chouliaras Vermietungs eGbR (GsR 30)
                  </p>
                  <p className="text-stone-300">
                    Herner Straße 49
                    <br />
                    45657 Recklinghausen
                  </p>
                  <div className="mt-4 pt-4 border-t border-stone-700">
                    <p className="text-stone-300">
                      E-Mail:{" "}
                      <a
                        href="mailto:info@chouliaras-immobilien.de"
                        className="text-white hover:underline"
                      >
                        info@chouliaras-immobilien.de
                      </a>
                    </p>
                    <p className="text-stone-300">
                      Telefon:{" "}
                      <a
                        href="tel:+4917657995644"
                        className="text-white hover:underline"
                      >
                        +49 176 57 99 56 44
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Speicherdauer
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                  Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                  Daten bei uns, bis der Zweck für die Datenverarbeitung
                  entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend
                  machen oder eine Einwilligung widerrufen, werden Ihre Daten
                  gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
                  für die Speicherung haben.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Widerruf Ihrer Einwilligung
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                  ausdrücklichen Einwilligung möglich. Sie können eine bereits
                  erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                  Widerruf unberührt.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Beschwerderecht bei der Aufsichtsbehörde
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                  ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere
                  in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                  Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  SSL- bzw. TLS-Verschlüsselung
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                  Sie daran, dass die Adresszeile des Browsers von „http://" auf
                  „https://" wechselt und an dem Schloss-Symbol in Ihrer
                  Browserzeile.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* 4. Datenerfassung auf dieser Website */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white text-sm font-semibold">
                4
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-900">
                Datenerfassung auf dieser Website
              </h2>
            </div>

            <div className="space-y-8 pl-14">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Cookies
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies
                  sind kleine Datenpakete und richten auf Ihrem Endgerät keinen
                  Schaden an. Sie werden entweder vorübergehend für die Dauer
                  einer Sitzung (Session-Cookies) oder dauerhaft (permanente
                  Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden
                  nach Ende Ihres Besuchs automatisch gelöscht.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Server-Log-Dateien
                </h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr
                  Browser automatisch an uns übermittelt:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                    Browsertyp und -version
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                    Betriebssystem
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                    Referrer URL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                    Hostname
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                    Uhrzeit der Anfrage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                    IP-Adresse
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Kontaktformular
                </h3>
                <div className="space-y-4">
                  <p className="text-stone-700 leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                    werden Ihre Angaben aus dem Anfrageformular inklusive der von
                    Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                    Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne
                    Ihre Einwilligung weiter.
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art.
                    6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                    eines Vertrags zusammenhängt oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich ist.
                  </p>

                  {/* Formspree Info Box */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-4">
                    <div className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-amber-900 mb-1">
                          Formspree
                        </p>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          Für die Verarbeitung der Kontaktformulardaten nutzen
                          wir den Dienst{" "}
                          <strong>Formspree</strong> (Formspree, Inc., 1769
                          Williams Hwy, Suite 314, Grants Pass, Oregon 97527,
                          USA). Die Daten werden auf Servern in den USA
                          gespeichert. Formspree hat sich zur Einhaltung der
                          EU-Datenschutzstandards verpflichtet.
                        </p>
                        <a
                          href="https://formspree.io/legal/privacy-policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-900 text-sm mt-2 underline underline-offset-2"
                        >
                          Datenschutzerklärung von Formspree
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Anfrage per E-Mail oder Telefon
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
                  Anfrage inklusive aller daraus hervorgehenden personenbezogenen
                  Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns
                  gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
                  Ihre Einwilligung weiter.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* 5. Ihre Rechte */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white text-sm font-semibold">
                5
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-900">
                Ihre Rechte als betroffene Person
              </h2>
            </div>

            <div className="pl-14">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-stone-200 rounded-lg p-5">
                  <p className="font-medium text-stone-900 mb-1">
                    Auskunftsrecht
                  </p>
                  <p className="text-stone-600 text-sm">
                    Art. 15 DSGVO – Recht auf Bestätigung und Auskunft über Ihre
                    Daten
                  </p>
                </div>
                <div className="border border-stone-200 rounded-lg p-5">
                  <p className="font-medium text-stone-900 mb-1">
                    Recht auf Berichtigung
                  </p>
                  <p className="text-stone-600 text-sm">
                    Art. 16 DSGVO – Berichtigung unrichtiger oder
                    Vervollständigung unvollständiger Daten
                  </p>
                </div>
                <div className="border border-stone-200 rounded-lg p-5">
                  <p className="font-medium text-stone-900 mb-1">
                    Recht auf Löschung
                  </p>
                  <p className="text-stone-600 text-sm">
                    Art. 17 DSGVO – Löschung Ihrer Daten unter bestimmten
                    Voraussetzungen
                  </p>
                </div>
                <div className="border border-stone-200 rounded-lg p-5">
                  <p className="font-medium text-stone-900 mb-1">
                    Recht auf Einschränkung
                  </p>
                  <p className="text-stone-600 text-sm">
                    Art. 18 DSGVO – Einschränkung der Verarbeitung Ihrer Daten
                  </p>
                </div>
                <div className="border border-stone-200 rounded-lg p-5">
                  <p className="font-medium text-stone-900 mb-1">
                    Recht auf Datenübertragbarkeit
                  </p>
                  <p className="text-stone-600 text-sm">
                    Art. 20 DSGVO – Erhalt Ihrer Daten in maschinenlesbarem
                    Format
                  </p>
                </div>
                <div className="border border-stone-200 rounded-lg p-5">
                  <p className="font-medium text-stone-900 mb-1">
                    Widerspruchsrecht
                  </p>
                  <p className="text-stone-600 text-sm">
                    Art. 21 DSGVO – Widerspruch gegen die Verarbeitung Ihrer
                    Daten
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* 6. Aktualität */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white text-sm font-semibold">
                6
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-900">
                Aktualität dieser Datenschutzerklärung
              </h2>
            </div>

            <div className="pl-14">
              <p className="text-stone-700 leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand{" "}
                <strong>Februar 2025</strong>. Durch die Weiterentwicklung
                unserer Website oder aufgrund geänderter gesetzlicher Vorgaben
                kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                Die jeweils aktuelle Fassung kann jederzeit auf dieser Website
                abgerufen werden.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Link */}
      <div className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Link
            href="/impressum"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
          >
            Zum Impressum
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
