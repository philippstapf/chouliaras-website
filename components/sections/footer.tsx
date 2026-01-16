import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium tracking-tight">
              Chouliaras Vermietungs eGbR
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              GsR 30
              <br />
              Herner Straße 49
              <br />
              45657 Recklinghausen
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium tracking-tight">
              Gesellschafter
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evangelos Chouliaras
              <br />
              Alexandros Chouliaras
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium tracking-tight">
              Rechtliches
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/impressum"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Chouliaras Vermietungs eGbR. Alle
            Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
