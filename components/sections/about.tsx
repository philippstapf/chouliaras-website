export default function About() {
  return (
    <section className="bg-white py-24 md:py-32" id="ueber-uns">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Ueber uns
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Wer sind wir?
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Wir sind zwei Brueder und bauen seit 2018 einen langfristigen
              Immobilienbestand in NRW auf.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Wir vermieten unsere Immobilien so, dass sie den besten Nutzen
              für deren Bewohner und Betreiber bieten.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Von herausragender Bedeutung ist für uns eine gute Beziehung zu
              unseren Mietern und deren Anliegen jederzeit schnellstmoeglich zu
              loesen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
