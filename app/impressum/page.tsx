import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Chouliaras",
  description: "Impressum der Chouliaras Vermietungs eGbR",
};

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="mt-12 prose prose-neutral max-w-none">
          <h2>Angaben gemaess &sect; 5 TMG</h2>
          <p>
            Chouliaras Vermietungs eGbR (GsR 30)
            <br />
            Herner Strasse 49
            <br />
            45657 Recklinghausen
          </p>

          <h2>Gesellschafter</h2>
          <p>
            Evangelos Chouliaras
            <br />
            Alexandros Chouliaras
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 176 57 99 56 44
            <br />
            E-Mail: info.chouliaras@immo
          </p>

          <h2>Haftungsausschluss</h2>
          <p>
            {/* Inhalt wird vom Kunden ergaenzt */}
          </p>

          <h2>Urheberrecht</h2>
          <p>
            {/* Inhalt wird vom Kunden ergaenzt */}
          </p>
        </div>
      </div>
    </div>
  );
}
