import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function SellCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/Foto 01.02.25, 13 27 55.jpg"
          alt="Immobilie Herner Straße"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl">
            Sie wollen Ihre Immobilie verkaufen?
          </h2>

          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Wir sind stets auf der Suche nach neuen Investitionsmöglichkeiten.
            Kontaktieren Sie uns für ein unverbindliches Gespräch.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <a
              href="mailto:info.chouliaras@immo"
              className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-base">info.chouliaras@immo</span>
            </a>

            <a
              href="tel:+4917657995644"
              className="inline-flex items-center gap-3 text-white hover:text-white/80 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-base">+49 176 57 99 56 44</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
