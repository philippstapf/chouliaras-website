"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const FORMSPREE_ID = "mbdkbodo";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
              Sie möchten Ihre Immobilie verkaufen oder haben Fragen zu unserem
              Ankaufsprofil? Wir freuen uns auf Ihre Nachricht.
            </p>

            <div className="mt-10 space-y-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">E-Mail:</span>{" "}
                info@chouliaras-immobilien.de
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Telefon:</span>{" "}
                +49 176 57 99 56 44
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10">
            {status === "success" ? (
              <div className="flex h-full items-center justify-center py-16">
                <div className="text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                    <svg
                      className="h-6 w-6 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-medium">
                    Nachricht gesendet
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei
                    Ihnen.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-sm underline text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    <option value="">Bitte wählen</option>
                    <option value="eigentumswohnung">Eigentumswohnung</option>
                    <option value="mehrfamilienhaus">Mehrfamilienhaus</option>
                    <option value="wohnanlage">Wohnanlage</option>
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
                    placeholder="Straße, PLZ, Ort"
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

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500 cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                    Ich habe die{" "}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      className="underline hover:text-foreground"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und bin mit der Verarbeitung meiner Daten einverstanden.
                  </label>
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive text-center">
                    Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie
                    es erneut oder schreiben Sie uns direkt an
                    info@chouliaras-immobilien.de.
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
