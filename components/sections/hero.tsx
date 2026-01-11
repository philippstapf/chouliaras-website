export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <blockquote className="space-y-8">
          <p className="font-serif text-2xl leading-relaxed tracking-tight text-foreground md:text-3xl lg:text-4xl xl:text-5xl">
            &bdquo;Immobilien sind für uns nicht nur eine Form der Anlage,
            sondern sie stellen für uns eine Leidenschaft dar &ndash;
          </p>
          <p className="font-serif text-2xl leading-relaxed tracking-tight text-foreground md:text-3xl lg:text-4xl xl:text-5xl">
            Wir wollen Raum mit Leben füllen.&ldquo;
          </p>
          <footer className="pt-8">
            <cite className="not-italic text-base text-muted-foreground md:text-lg">
              Evangelos &amp; Alexandros Chouliaras
            </cite>
          </footer>
        </blockquote>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Mehr erfahren</span>
          <svg
            className="h-5 w-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
