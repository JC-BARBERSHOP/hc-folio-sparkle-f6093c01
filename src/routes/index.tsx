import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-consultant.jpg";
import hcLogo from "@/assets/hc-logo.jpeg.asset.json";
import {
  FileText, Briefcase, FileSignature, HeartPulse,
  Phone, Mail, MapPin, Clock, Check, MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HC Services Financial | Tax Preparation, IRS Filing & Immigration Services" },
      { name: "description", content: "Professional tax preparation, IRS tax filing, personal & business taxes, LLC formation, immigration document preparation, green card assistance, and health insurance enrollment. Call (646) 620-2960." },
      { name: "keywords", content: "tax preparation, IRS tax filing, personal taxes, business taxes, corporate taxes, immigration services, green card assistance, family petitions, business compliance, LLC formation, health insurance enrollment, Obamacare" },
      { property: "og:title", content: "HC Services Financial | Tax Preparation, IRS Filing & Immigration Services" },
      { property: "og:description", content: "Professional tax preparation, IRS filing, business compliance, immigration document preparation, and Obamacare enrollment. Call (646) 620-2960." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hcLogo.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "HC Services Financial",
        image: hcLogo.url,
        telephone: "+1-646-620-2960",
        description: "Tax preparation, IRS tax filing, business compliance, immigration document preparation, and health insurance enrollment.",
        areaServed: "United States",
        serviceType: ["Tax Preparation", "IRS Tax Filing", "Business Compliance", "Immigration Document Preparation", "Health Insurance Enrollment"],
      }),
    }],
  }),
  component: Index,
});

const PHONE_DISPLAY = "(646) 620-2960";
const PHONE_TEL = "+16466202960";
const WHATSAPP_URL = "https://wa.me/16466202960";

const nav = [
  { href: "#about", label: "About" },
  { href: "#taxes", label: "Tax" },
  { href: "#business", label: "Business" },
  { href: "#immigration", label: "Immigration" },
  { href: "#health", label: "Health" },
  { href: "#contact", label: "Contact" },
];

const whyChoose = [
  "Experienced tax professionals",
  "Personalized one-on-one service",
  "Bilingual support",
  "Fast, reliable & confidential",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased scroll-smooth pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={hcLogo.url} alt="HC Services Financial logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-1 ring-foreground/10" />
            <span className="hidden text-sm font-semibold tracking-wide sm:block">HC Services Financial</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:${PHONE_TEL}`} className="hidden items-center gap-2 rounded-md border border-foreground/15 px-3 py-2 text-sm font-medium transition-colors hover:bg-foreground/5 sm:inline-flex">
              <Phone className="h-4 w-4 text-[var(--gold-deep)]" /> {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90">
              <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center lg:py-28">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              Trusted financial & filing services
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Professional Tax Preparation, Business Compliance & <span className="italic text-[var(--gold-deep)] font-serif">Immigration Services</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.85] text-muted-foreground sm:text-xl">
              At HC Services Financial, we believe every family and business deserves trusted guidance when it comes to taxes, immigration, and financial services. We take the time to understand your unique needs and provide personalized support every step of the way. Whether you're filing taxes, starting a business, handling immigration paperwork, or enrolling in health insurance, we're here to make the process simple, clear, and stress-free.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                <Phone className="mr-2 h-4 w-4" /> Call {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                <MessageCircle className="mr-2 h-3.5 w-3.5 text-[#25D366]" /> WhatsApp {PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> IRS tax filing</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> Business compliance</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> Bilingual support</div>
            </div>
            <div className="relative mt-16 w-full max-w-4xl">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[oklch(0.95_0.04_85)] to-transparent" />
              <img
                src={heroImage}
                alt="Tax preparation documents and financial paperwork with elegant gold accents"
                width={1536}
                height={1280}
                className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-[0_30px_60px_-30px_oklch(0.2_0.01_60/0.25)]"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
            <p className="mb-4 uppercase tracking-[0.2em] text-base">About</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Trusted Guidance for Taxes, Business & Family Documents
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              HC Services Financial provides reliable support for individuals, families, and business owners who need help with tax preparation, IRS tax filing, business compliance, immigration paperwork, and health insurance enrollment. Our goal is to make the process simple, organized, and stress-free.
            </p>
          </div>
        </section>

        {/* Tax Services */}
        <section id="taxes" className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">Tax Services</p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tax Preparation & IRS Filing</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Personal, business, and corporation tax filing handled with care. We help you stay organized, accurate, and compliant — from income tax returns to IRS correspondence and monthly sales tax filing.
            </p>
          </div>
        </section>

        {/* Business Services */}
        <section id="business" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">Business Services</p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Business Setup & Compliance</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From opening your corporation or LLC to ongoing compliance support, we guide business owners through the steps required to stay active, registered, and audit-ready.
            </p>
          </div>
        </section>

        {/* Immigration Services */}
        <section id="immigration" className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">Immigration Services</p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
              <FileSignature className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Immigration Document Preparation</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Careful preparation of green card applications, asylum applications, family petitions, and passport paperwork.
            </p>
            <p className="mx-auto mt-8 max-w-md text-xs italic text-muted-foreground">
              HC Services Financial provides document preparation assistance and is not a law firm.
            </p>
          </div>
        </section>

        {/* Health Insurance */}
        <section id="health" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">Health Insurance</p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
              <HeartPulse className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Health Insurance Assistance</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Enrollment support for Obamacare and marketplace health insurance plans, with clear guidance on the right coverage for you and your family.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">Why Choose Us</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Trusted, personal, and bilingual</h2>
            <ul className="mx-auto mt-10 grid max-w-xl gap-4 text-left sm:grid-cols-2">
              {whyChoose.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold-deep)]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">Contact</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let's get your paperwork in order</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Reach out by phone or WhatsApp. We'll walk you through the next steps with no pressure.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                <Phone className="mr-2 h-4 w-4" /> Call {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 px-6 text-sm font-medium transition-colors hover:bg-foreground/5">
                <MessageCircle className="mr-2 h-3.5 w-3.5 text-[#25D366]" /> WhatsApp
              </a>
            </div>
            <div className="mx-auto mt-14 grid max-w-2xl gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: "Phone", value: PHONE_DISPLAY },
                { icon: Mail, label: "Email", value: "hcservicesfinancial@gmail.com" },
                { icon: MapPin, label: "Location", value: "[Add city/state]" },
                { icon: Clock, label: "Hours", value: "[Add hours]" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-border bg-background p-5 text-left">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                    <Icon className="h-3.5 w-3.5 text-[var(--gold-deep)]" /> {label}
                  </div>
                  <p className="mt-2 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={hcLogo.url} alt="" width={20} height={20} className="h-5 w-5 rounded-full" />
            <p>© {new Date().getFullYear()} HC Services Financial. All rights reserved.</p>
          </div>
          <p>Tax preparation · Business compliance · Immigration documents · Health insurance</p>
        </div>
      </footer>

      {/* Sticky mobile call button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-2 md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 transition-opacity hover:opacity-90"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="h-5 w-5 text-[var(--gold)]" />
          <span className="text-sm font-semibold">Call</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background text-foreground shadow-lg shadow-foreground/20 transition-colors hover:bg-foreground/5"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
