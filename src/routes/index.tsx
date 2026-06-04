import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-consultant.jpg";
import hcLogo from "@/assets/hc-logo.jpeg.asset.json";
import {
  FileText, Building2, Landmark, Receipt, Briefcase, ShieldCheck,
  FileSignature, Users, IdCard, BookUser, HeartPulse, ScrollText,
  Phone, Mail, MapPin, Clock, Check, ArrowRight,
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

const services = [
  { icon: FileText, title: "Personal Tax Preparation", desc: "Accurate income tax preparation for individuals and families." },
  { icon: Building2, title: "Business & Corporation Tax Filing", desc: "Corporation tax filing and business tax services done right." },
  { icon: Landmark, title: "IRS Tax Filing Assistance", desc: "Hands-on help with IRS forms, returns, and correspondence." },
  { icon: Receipt, title: "Monthly Sales Tax Filing", desc: "Stay current with state sales and monthly tax filing." },
  { icon: Briefcase, title: "Business Formation & Corporation Setup", desc: "Open your corporation or LLC with the proper paperwork." },
  { icon: ShieldCheck, title: "Business Compliance Support", desc: "Keep your business active, compliant, and audit-ready." },
  { icon: FileSignature, title: "Immigration Document Preparation", desc: "Careful preparation of immigration paperwork and forms." },
  { icon: ScrollText, title: "Asylum Applications", desc: "Assistance preparing asylum application documents." },
  { icon: IdCard, title: "Green Card Applications", desc: "Document preparation for green card applications." },
  { icon: BookUser, title: "Passport Assistance", desc: "Guidance and paperwork support for passport applications." },
  { icon: Users, title: "Family Petitions", desc: "Help organizing and preparing family petition documents." },
  { icon: HeartPulse, title: "Obamacare / Health Insurance", desc: "Enrollment support for marketplace health insurance plans." },
];

const nav = [
  { href: "#services", label: "Services" },
  { href: "#taxes", label: "Taxes" },
  { href: "#business", label: "Business" },
  { href: "#immigration", label: "Immigration" },
  { href: "#contact", label: "Contact" },
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
            <a href="#contact" className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90">
              Schedule
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                Trusted financial & filing services
              </div>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Professional Tax Preparation, Business Compliance & <span className="italic text-[var(--gold-deep)] font-serif">Immigration Services</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                HC Services Financial helps individuals, families, and business owners file taxes, stay compliant, and handle important financial and immigration paperwork with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                  <Phone className="mr-2 h-4 w-4 text-[var(--gold-deep)]" /> Call {PHONE_DISPLAY}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> IRS tax filing</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> Business compliance</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> Bilingual support</div>
              </div>
            </div>
            <div className="relative">
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
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)]">About</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Trusted Guidance for Taxes, Business & Family Documents
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              HC Services Financial provides reliable support for individuals, families, and business owners who need help with tax preparation, IRS tax filing, business compliance, immigration paperwork, and health insurance enrollment. Our goal is to make the process simple, organized, and stress-free.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)]">Services</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need, in one place</h2>
              <p className="mt-4 text-muted-foreground">From tax return preparation to immigration document preparation and health insurance enrollment.</p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group bg-card p-7 transition-colors hover:bg-secondary">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-foreground/5 text-[var(--gold-deep)] transition-colors group-hover:bg-foreground group-hover:text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Tax */}
        <section id="taxes" className="border-t border-border/60 bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-5 lg:py-28">
            <div className="lg:col-span-2">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)]">Primary Focus</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tax Preparation & IRS Filing Services</h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether you need help filing personal taxes, business taxes, corporation taxes, or IRS forms, HC Services Financial provides professional tax preparation services designed to help you stay organized, accurate, and compliant.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Personal tax filing","Business tax filing","IRS tax filing","Corporation tax filing","Income tax preparation","Tax return preparation","Tax filing assistance","Tax help & planning"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold-deep)]"><Check className="h-3 w-3" /></span>
                    {t}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-10 inline-flex items-center text-sm font-medium text-foreground underline-offset-4 hover:underline">
                Talk to a tax specialist <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Business */}
        <section id="business" className="border-t border-border/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)]">Business</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Business Setup & Compliance Support</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                From opening a corporation to filing monthly sales tax with the state, HC Services Financial helps business owners manage the important steps required to keep their business active and compliant.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Corporation setup","Business registration","Sales tax filing","Monthly tax filing","Business compliance","State tax filing","Business tax services","Ongoing support"].map((t) => (
                <div key={t} className="rounded-lg border border-border bg-card px-4 py-3 text-sm">{t}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Immigration */}
        <section id="immigration" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)]">Immigration</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Immigration Document Preparation</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              HC Services Financial assists with immigration-related document preparation, including asylum applications, green card applications, passport assistance, and family petitions.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Asylum applications","Green card applications","Passport assistance","Family petitions"].map((t) => (
                <div key={t} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm">
                  <Check className="h-4 w-4 text-[var(--gold-deep)]" />{t}
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-md border-l-2 border-[var(--gold)] bg-background px-4 py-3 text-xs italic text-muted-foreground">
              HC Services Financial provides document preparation assistance and is not a law firm.
            </p>
          </div>
        </section>

        {/* Health */}
        <section id="health" className="border-t border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)]">Health Insurance</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Obamacare & Health Insurance Enrollment</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Get assistance understanding and applying for health insurance options through Obamacare and marketplace health insurance plans.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)]">Why Choose Us</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why Choose HC Services Financial</h2>
              <p className="mt-4 text-muted-foreground">Trusted, personalized service for taxes, business, immigration, and health insurance.</p>
            </div>
            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
              {[
                "Experienced Tax Professionals",
                "Personal & Business Tax Experts",
                "Immigration Document Assistance",
                "Business Compliance Support",
                "Health Insurance Enrollment Assistance",
                "Personalized One-on-One Service",
                "Fast & Reliable Support",
                "Bilingual-friendly Communication",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-background p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold-deep)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-28">
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Need Help Filing Taxes or Organizing Your Business Documents?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Contact HC Services Financial today to schedule a consultation and get professional support with taxes, business compliance, immigration paperwork, or health insurance enrollment.
            </p>
            <a href="#contact" className="mt-10 inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href={`tel:${PHONE_TEL}`} className="mt-3 ml-3 inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 px-8 text-sm font-medium transition-colors hover:bg-foreground/5">
              <Phone className="mr-2 h-4 w-4 text-[var(--gold-deep)]" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/60 bg-card">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--gold-deep)]">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let's get your paperwork in order</h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Reach out to schedule a consultation. We'll walk you through the next steps with no pressure.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                  <Phone className="mr-2 h-4 w-4" /> Call {PHONE_DISPLAY}
                </a>
                <a href="mailto:" className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 px-6 text-sm font-medium transition-colors hover:bg-foreground/5">
                  <Mail className="mr-2 h-4 w-4" /> Send Message
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: "Phone", value: PHONE_DISPLAY },
                { icon: Mail, label: "Email", value: "[Add email]" },
                { icon: MapPin, label: "Location", value: "[Add city/state]" },
                { icon: Clock, label: "Business Hours", value: "[Add hours]" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-border bg-background p-5">
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
      <a
        href={`tel:${PHONE_TEL}`}
        className="fixed bottom-4 left-4 right-4 z-50 flex h-14 items-center justify-center gap-2 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 transition-opacity hover:opacity-90 md:hidden"
        aria-label={`Call ${PHONE_DISPLAY}`}
      >
        <Phone className="h-5 w-5 text-[var(--gold)]" />
        <span className="text-sm font-semibold">Call {PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}
