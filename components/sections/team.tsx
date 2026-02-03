import Image from "next/image";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Evangelos Chouliaras",
    role: "Investor & Unternehmensberater",
    image: "/4850132a-14e0-406f-9034-2c16ffcfbe19.jpg",
    linkedin: "https://www.linkedin.com/in/evangelos-chouliaras-a6552452",
  },
  {
    name: "Alexandros Chouliaras",
    role: "Investor & Vertriebler",
    image: "/IMG_1158.JPG",
    linkedin: "https://www.linkedin.com/in/alexandros-chouliaras-a311b1341",
  },
];

export default function Team() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32" id="team">
      <div className="mx-auto max-w-6xl px-6">
        <div>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Team
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Die Gesellschafter
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          {team.map((member) => (
            <article
              key={member.name}
              className="group bg-white overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="font-serif text-xl font-medium tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.role}
                </p>

                <div className="mt-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 items-center justify-center gap-2 rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
