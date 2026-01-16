import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Chouliaras",
  description: "Datenschutzerklärung der Chouliaras Vermietungs eGbR",
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
          Zurück zur Startseite
        </Link>

        <h1 className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-12 prose prose-neutral max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            {/* Inhalt wird vom Kunden ergänzt */}
          </p>

          <h2>2. Hosting</h2>
          <p>
            {/* Inhalt wird vom Kunden ergänzt */}
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            {/* Inhalt wird vom Kunden ergänzt */}
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            Chouliaras Vermietungs eGbR (GsR 30)
            <br />
            Herner Straße 49
            <br />
            45657 Recklinghausen
          </p>
          <p>
            Telefon: +49 176 57 99 56 44
            <br />
            E-Mail: info.chouliaras@immo
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Cookies</h3>
          <p>
            {/* Inhalt wird vom Kunden ergänzt */}
          </p>

          <h3>Kontaktformular</h3>
          <p>
            {/* Inhalt wird vom Kunden ergänzt */}
          </p>

          <h2>5. Ihre Rechte</h2>
          <p>
            {/* Inhalt wird vom Kunden ergänzt */}
          </p>
        </div>
      </div>
    </div>
  );
}
