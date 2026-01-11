import { MapPin, Home, Building2, CheckCircle2 } from "lucide-react";

const criteria = [
  {
    icon: MapPin,
    title: "Immobilien in NRW",
    description: "Fokus auf Ruhrgebiet & Muensterland",
  },
  {
    icon: Home,
    title: "Eigentumswohnungen",
    description: "Einzelne Wohneinheiten zur Kapitalanlage",
  },
  {
    icon: Building2,
    title: "Mehrfamilienhaeuser",
    description: "Komplette Objekte mit mehreren Einheiten",
  },
  {
    icon: CheckCircle2,
    title: "Wohnanlagen",
    description: "Groessere Wohnkomplexe und Portfolios",
  },
];

export default function Acquisition() {
  return (
    <section className="bg-white py-24 md:py-32" id="ankaufsprofil">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Ankaufsprofil
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Was suchen wir?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Wir konzentrieren uns auf Wohnimmobilien in Nordrhein-Westfalen. Der
            Objektzustand fliesst in unsere Gesamtbewertung ein &ndash; auch
            renovierungsbedürftige Immobilien sind für uns interessant.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item) => (
            <div
              key={item.title}
              className="group p-8 bg-neutral-50 transition-colors hover:bg-neutral-100"
            >
              <item.icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
              <h3 className="mt-6 font-medium tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
