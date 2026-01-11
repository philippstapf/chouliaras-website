"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32" id="kontakt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Kontakt
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              Sprechen Sie uns an
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sie moechten Ihre Immobilie verkaufen oder haben Fragen zu unserem
              Ankaufsprofil? Wir freuen uns auf Ihre Nachricht.
            </p>

            <div className="mt-10 space-y-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">E-Mail:</span>{" "}
                info.chouliaras@immo
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Telefon:</span>{" "}
                +49 176 57 99 56 44
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Max"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Mustermann"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objectType">Objektart</Label>
                <Select id="objectType" name="objectType" required>
                  <option value="">Bitte waehlen</option>
                  <option value="eigentumswohnung">Eigentumswohnung</option>
                  <option value="mehrfamilienhaus">Mehrfamilienhaus</option>
                  <option value="gewerbe">Gewerbe</option>
                  <option value="sonstiges">Sonstiges</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">
                  Anschrift des Objekts{" "}
                  <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Strasse, PLZ, Ort"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nachricht / Preisvorstellung</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Ihre Nachricht an uns..."
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Nachricht senden
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Mit dem Absenden erklaeren Sie sich mit unserer{" "}
                <a href="/datenschutz" className="underline hover:text-foreground">
                  Datenschutzerklaerung
                </a>{" "}
                einverstanden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
