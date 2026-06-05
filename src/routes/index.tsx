import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

type Lang = "en" | "es";

const translations = {
  en: {
    navAbout: "About", navTax: "Tax", navBusiness: "Business", navImmigration: "Immigration", navHealth: "Health", navContact: "Contact",
    heroBadge: "Trusted financial & filing services",
    heroTitle1: "Professional Tax Preparation, Business Compliance & ",
    heroTitleAccent: "Immigration Services",
    heroDesc: "At HC Services Financial, we believe every family and business deserves trusted guidance when it comes to taxes, immigration, and financial services. We take the time to understand your unique needs and provide personalized support every step of the way. Whether you're filing taxes, starting a business, handling immigration paperwork, or enrolling in health insurance, we're here to make the process simple, clear, and stress-free.",
    btnCall: "Call", btnWhatsApp: "WhatsApp",
    trust1: "IRS tax filing", trust2: "Business compliance", trust3: "Bilingual support",
    heroImgAlt: "Tax preparation documents and financial paperwork with elegant gold accents",
    aboutLabel: "About",
    aboutTitle: "Trusted Guidance for Taxes, Business & Family Documents",
    aboutDesc: "HC Services Financial provides reliable support for individuals, families, and business owners who need help with tax preparation, IRS tax filing, business compliance, immigration paperwork, and health insurance enrollment. Our goal is to make the process simple, organized, and stress-free.",
    taxLabel: "Tax Services",
    taxTitle: "Tax Preparation & IRS Filing",
    taxDesc: "Personal, business, and corporation tax filing handled with care. We help you stay organized, accurate, and compliant — from income tax returns to IRS correspondence and monthly sales tax filing.",
    bizLabel: "Business Services",
    bizTitle: "Business Setup & Compliance",
    bizDesc: "From opening your corporation or LLC to ongoing compliance support, we guide business owners through the steps required to stay active, registered, and audit-ready.",
    immLabel: "Immigration Services",
    immTitle: "Immigration Document Preparation",
    immDesc: "Careful preparation of green card applications, asylum applications, family petitions, and passport paperwork.",
    immDisclaimer: "HC Services Financial provides document preparation assistance and is not a law firm.",
    healthLabel: "Health Insurance",
    healthTitle: "Health Insurance Assistance",
    healthDesc: "Enrollment support for Obamacare and marketplace health insurance plans, with clear guidance on the right coverage for you and your family.",
    whyLabel: "Why Choose Us",
    whyTitle: "Trusted, personal, and bilingual",
    why1: "Experienced tax professionals",
    why2: "Personalized one-on-one service",
    why3: "Bilingual support",
    why4: "Fast, reliable & confidential",
    contactLabel: "Contact",
    contactTitle: "Let's get your paperwork in order",
    contactDesc: "Reach out by phone or WhatsApp. We'll walk you through the next steps with no pressure.",
    contactPhone: "Phone", contactEmail: "Email", contactLocation: "Location", contactHours: "Hours",
    contactLocationVal: "[Add city/state]", contactHoursVal: "[Add hours]",
    footerRights: "All rights reserved.",
    footerTagline: "Tax preparation · Business compliance · Immigration documents · Health insurance",
    stickyCall: "Call", stickyWhatsApp: "WhatsApp",
  },
  es: {
    navAbout: "Nosotros", navTax: "Impuestos", navBusiness: "Negocios", navImmigration: "Inmigración", navHealth: "Salud", navContact: "Contacto",
    heroBadge: "Servicios financieros y de trámites de confianza",
    heroTitle1: "Preparación Profesional de Impuestos, Cumplimiento de Negocios y ",
    heroTitleAccent: "Servicios de Inmigración",
    heroDesc: "En HC Services Financial creemos que cada familia y cada negocio merece orientación confiable en temas de impuestos, inmigración y servicios financieros. Nos tomamos el tiempo para entender sus necesidades y le brindamos atención personalizada en cada paso. Ya sea que necesite declarar impuestos, abrir un negocio, preparar documentos de inmigración o inscribirse en un seguro médico, estamos aquí para que el proceso sea sencillo, claro y sin estrés.",
    btnCall: "Llamar", btnWhatsApp: "WhatsApp",
    trust1: "Declaración de impuestos", trust2: "Cumplimiento de negocios", trust3: "Atención bilingüe",
    heroImgAlt: "Documentos de preparación de impuestos y papelería financiera con detalles dorados",
    aboutLabel: "Nosotros",
    aboutTitle: "Orientación Confiable en Impuestos, Negocios y Documentos Familiares",
    aboutDesc: "HC Services Financial ofrece apoyo confiable a personas, familias y dueños de negocio que necesitan ayuda con la preparación de impuestos, declaración ante el IRS, cumplimiento de negocios, trámites de inmigración e inscripción a seguros médicos. Nuestro objetivo es que el proceso sea simple, ordenado y sin estrés.",
    taxLabel: "Servicios de Impuestos",
    taxTitle: "Preparación de Impuestos y Declaración al IRS",
    taxDesc: "Preparamos con cuidado impuestos personales, de negocio y de corporación. Le ayudamos a mantenerse organizado, preciso y al día — desde declaraciones de ingresos hasta correspondencia con el IRS y declaraciones mensuales de ventas.",
    bizLabel: "Servicios para Negocios",
    bizTitle: "Apertura y Cumplimiento de Negocios",
    bizDesc: "Desde abrir su corporación o LLC hasta el apoyo continuo de cumplimiento, guiamos a los dueños de negocio en los pasos necesarios para mantenerse activos, registrados y listos para cualquier auditoría.",
    immLabel: "Servicios de Inmigración",
    immTitle: "Preparación de Documentos de Inmigración",
    immDesc: "Preparación cuidadosa de solicitudes de residencia, solicitudes de asilo, peticiones familiares y trámites de pasaporte.",
    immDisclaimer: "HC Services Financial brinda asistencia en la preparación de documentos y no es una firma de abogados.",
    healthLabel: "Seguro Médico",
    healthTitle: "Asistencia con Seguro Médico",
    healthDesc: "Apoyo para inscribirse en Obamacare y planes del mercado de seguros médicos, con orientación clara para elegir la cobertura adecuada para usted y su familia.",
    whyLabel: "Por Qué Elegirnos",
    whyTitle: "Confiables, personales y bilingües",
    why1: "Profesionales de impuestos con experiencia",
    why2: "Atención personalizada uno a uno",
    why3: "Atención bilingüe",
    why4: "Rápidos, confiables y confidenciales",
    contactLabel: "Contacto",
    contactTitle: "Pongamos sus documentos en orden",
    contactDesc: "Contáctenos por teléfono o WhatsApp. Le guiamos en los próximos pasos sin compromiso.",
    contactPhone: "Teléfono", contactEmail: "Correo", contactLocation: "Ubicación", contactHours: "Horario",
    contactLocationVal: "[Agregar ciudad/estado]", contactHoursVal: "[Agregar horario]",
    footerRights: "Todos los derechos reservados.",
    footerTagline: "Preparación de impuestos · Cumplimiento de negocios · Documentos de inmigración · Seguro médico",
    stickyCall: "Llamar", stickyWhatsApp: "WhatsApp",
  },
} as const;

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);
  const changeLang = (l: Lang) => {
    setLang(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  const t = translations[lang];
  const nav = [
    { href: "#about", label: t.navAbout },
    { href: "#taxes", label: t.navTax },
    { href: "#business", label: t.navBusiness },
    { href: "#immigration", label: t.navImmigration },
    { href: "#health", label: t.navHealth },
    { href: "#contact", label: t.navContact },
  ];
  const whyChoose = [t.why1, t.why2, t.why3, t.why4];
  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center rounded-full border border-foreground/15 bg-background/60 p-0.5 text-xs ${className}`}>
      <button onClick={() => changeLang("en")} aria-pressed={lang === "en"} className={`rounded-full px-2.5 py-1 font-medium transition-colors ${lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>EN</button>
      <button onClick={() => changeLang("es")} aria-pressed={lang === "es"} className={`rounded-full px-2.5 py-1 font-medium transition-colors ${lang === "es" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>ES</button>
    </div>
  );
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
          <div className="flex items-center gap-5">
            <LangToggle />
            <a href={`tel:${PHONE_TEL}`} className="hidden items-center gap-2 text-sm font-medium transition-colors hover:opacity-70 sm:inline-flex">
              <Phone className="h-4 w-4 text-[var(--gold-deep)]" /> {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="transition-opacity hover:opacity-70">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
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
              {t.heroBadge}
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t.heroTitle1}<span className="italic text-[var(--gold-deep)] font-serif">{t.heroTitleAccent}</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.85] text-muted-foreground sm:text-xl">
              {t.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                <Phone className="mr-2 h-4 w-4" /> {t.btnCall} {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                <MessageCircle className="mr-2 h-3.5 w-3.5 text-[#25D366]" /> {t.btnWhatsApp} {PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> {t.trust1}</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> {t.trust2}</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--gold-deep)]" /> {t.trust3}</div>
            </div>
            <div className="relative mt-16 w-full max-w-4xl">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-[oklch(0.95_0.04_85)] to-transparent" />
              <img
                src={heroImage}
                alt={t.heroImgAlt}
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
            <p className="mb-4 uppercase tracking-[0.2em] text-base">{t.aboutLabel}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.aboutDesc}
            </p>
          </div>
        </section>

        {/* Tax Services */}
        <section id="taxes" className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.taxLabel}</p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.taxTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.taxDesc}
            </p>
          </div>
        </section>

        {/* Business Services */}
        <section id="business" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.bizLabel}</p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.bizTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.bizDesc}
            </p>
          </div>
        </section>

        {/* Immigration Services */}
        <section id="immigration" className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.immLabel}</p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
              <FileSignature className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.immTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.immDesc}
            </p>
            <p className="mx-auto mt-8 max-w-md text-xs italic text-muted-foreground">
              {t.immDisclaimer}
            </p>
          </div>
        </section>

        {/* Health Insurance */}
        <section id="health" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.healthLabel}</p>
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
              <HeartPulse className="h-5 w-5" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.healthTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.healthDesc}
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.whyLabel}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.whyTitle}</h2>
            <ul className="mx-auto mt-10 grid max-w-xl gap-4 text-left sm:grid-cols-2">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold-deep)]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.contactLabel}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.contactDesc}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                <Phone className="mr-2 h-4 w-4" /> {t.btnCall} {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 px-6 text-sm font-medium transition-colors hover:bg-foreground/5">
                <MessageCircle className="mr-2 h-3.5 w-3.5 text-[#25D366]" /> {t.btnWhatsApp}
              </a>
            </div>
            <div className="mx-auto mt-14 grid max-w-2xl gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: t.contactPhone, value: PHONE_DISPLAY },
                { icon: Mail, label: t.contactEmail, value: "hcservicesfinancial@gmail.com" },
                { icon: MapPin, label: t.contactLocation, value: t.contactLocationVal },
                { icon: Clock, label: t.contactHours, value: t.contactHoursVal },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-border bg-background p-5 text-left">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                    <Icon className="h-3.5 w-3.5 text-[var(--gold-deep)]" /> {label}
                  </div>
                  <p className="mt-2 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center md:hidden">
              <LangToggle />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={hcLogo.url} alt="" width={20} height={20} className="h-5 w-5 rounded-full" />
            <p>© {new Date().getFullYear()} HC Services Financial. {t.footerRights}</p>
          </div>
          <p>{t.footerTagline}</p>
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
          <span className="text-sm font-semibold">{t.stickyCall}</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background text-foreground shadow-lg shadow-foreground/20 transition-colors hover:bg-foreground/5"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          <span className="text-sm font-semibold">{t.stickyWhatsApp}</span>
        </a>
      </div>
    </div>
  );
}
