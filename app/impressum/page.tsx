import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Chouliaras",
  description: "Impressum der Chouliaras Vermietungs eGbR",
};

export default function Impressum() {
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
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:gap-16">
          {/* Angaben gemäß TMG */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Angaben gemäß § 5 TMG
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-stone-900 leading-relaxed">
                Chouliaras Vermietungs eGbR (GsR 30)
                <br />
                Herner Straße 49
                <br />
                45657 Recklinghausen
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Vertreten durch */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Vertreten durch
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-stone-900 leading-relaxed">
                Evangelos Chouliaras
                <br />
                Alexandros Chouliaras
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Kontakt */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Kontakt
              </h2>
            </div>
            <div className="md:col-span-2 space-y-2">
              <p className="text-lg text-stone-900">
                <span className="text-stone-500">E-Mail:</span>{" "}
                <a
                  href="mailto:info@chouliaras-immobilien.de"
                  className="hover:text-stone-600 transition-colors underline underline-offset-4"
                >
                  info@chouliaras-immobilien.de
                </a>
              </p>
              <p className="text-lg text-stone-900">
                <span className="text-stone-500">Tel:</span>{" "}
                <a
                  href="tel:+4917657995644"
                  className="hover:text-stone-600 transition-colors"
                >
                  +49 176 57 99 56 44
                </a>
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Registereintrag */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Registereintrag
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-stone-900 leading-relaxed">
                Eingetragen im Gesellschaftsregister
                <br />
                <span className="text-stone-500">Registernummer:</span> GsR 30
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Verantwortlich für den Inhalt */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Verantwortlich für den Inhalt
                <br />
                <span className="normal-case text-stone-400">
                  nach § 18 Abs. 2 MStV
                </span>
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-stone-900 leading-relaxed">
                Evangelos Chouliaras
                <br />
                Herner Straße 49
                <br />
                45657 Recklinghausen
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* EU-Streitschlichtung */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                EU-Streitschlichtung
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-stone-700 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 underline underline-offset-4 hover:text-stone-600 transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-stone-700 leading-relaxed">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Verbraucherstreitbeilegung */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Verbraucherstreitbeilegung
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-stone-700 leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Haftung für Inhalte */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Haftung für Inhalte
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-stone-700 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Haftung für Links */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Haftung für Links
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-stone-700 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </div>
          </section>

          <hr className="border-stone-200" />

          {/* Urheberrecht */}
          <section className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Urheberrecht
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-stone-700 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Link */}
      <div className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Link
            href="/datenschutz"
            className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
          >
            Zur Datenschutzerklärung
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
