import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hcLogo from "@/assets/hc-logo-new.jpg.asset.json";
import workspaceImage from "@/assets/professional-workspace.jpg.asset.json";
import {
  Calculator, Globe, FileCheck, HeartPulse,
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
    navAbout: "About", navServices: "Services", navWhy: "Why Us", navContact: "Contact",
    heroTagline: "IMMIGRATION  |  INCOME TAX SERVICES  |  HEALTH INSURANCE",
    heroNotary: "NOTARY PUBLIC",
    heroDesc: "At HC Services Financial, we provide trusted tax preparation and accounting support for individuals, families, and business owners. We also assist with immigration document preparation, health insurance enrollment, and important financial paperwork. Our goal is to make every process clear, organized, and stress-free while providing personalized guidance you can trust.",
    btnCall: "Call", btnWhatsApp: "WhatsApp",
    heroTrustLine: "Remote Services Available • In-Office Appointments by Request",
    contactRemote: "Remote Services Available • Miami Area Appointments by Request",
    aboutLabel: "About",
    aboutTitle: "HC Services Financial",
    aboutP1: "At HC Services Financial, we provide trusted tax preparation and accounting support for individuals, families, and business owners. We also assist with immigration paperwork, health insurance enrollment, and important financial documents. Most services can be completed remotely through phone, WhatsApp, email, and secure document sharing, with in-office appointments available by request.",
    aboutP2: "We understand that many clients prefer convenience and flexibility, which is why most of our services can be completed remotely. Whether you're located in Miami or elsewhere, we can assist you through phone, email, WhatsApp, and secure document sharing, making the process simple and efficient from the comfort of your home or office.",
    aboutP3: "For clients who prefer face-to-face assistance, in-office appointments are also available by appointment.",
    aboutP4: "Our goal is to make every process clear, organized, and stress-free while providing the personalized attention and professional guidance you deserve.",
    aboutWhyTitle: "Why Clients Choose Us",
    aboutWhy1: "Most services available remotely",
    aboutWhy2: "In-person appointments available",
    aboutWhy3: "Personalized one-on-one assistance",
    aboutWhy4: "English and Spanish support",
    aboutWhy5: "Fast and responsive communication",
    aboutWhy6: "Professional guidance you can trust",
    servicesLabel: "Services",
    servicesTitle: "Our Services",
    servicesSubtitle: "Professional support for individuals, families, and businesses — available remotely or by appointment.",
    svcTaxTitle: "Tax Services",
    svcTaxDesc: "Professional tax and accounting services for individuals, families, self-employed professionals, and businesses.",
    svcTaxItems: ["Personal Income Tax Returns", "Corporate Tax Returns", "Sales Tax Filing", "Accounting & Bookkeeping Services", "Corporation Formation (New Business Setup)", "Corporate Renewals & Annual Filings", "ITIN Applications"],
    svcNotaryTitle: "Notary Public Services",
    svcNotaryDesc: "Official document certification and notary services for personal and business needs.",
    svcNotaryItems: ["Notarizations", "Document Certifications", "Letters & Affidavits", "General Notary Services"],
    svcImmTitle: "Immigration Document Preparation",
    svcImmDesc: "Professional assistance with immigration paperwork preparation and document processing.",
    svcImmItems: ["Family Petitions", "Green Card Renewals", "Removal of Conditions on Residence", "Work Permit Applications", "Work Permit Renewals", "Adjustment of Status Applications", "Asylum Applications", "Certified Translations", "Document Notarizations"],
    svcImmDisclaimer: "HC Services Financial provides immigration document preparation assistance and is not a law firm. Legal representation is not provided.",
    svcHealthTitle: "Health Insurance",
    svcHealthDesc: "Assistance with health insurance enrollment and coverage options for individuals and families.",
    svcHealthItems: ["Affordable Care Act (ObamaCare) Enrollment", "Health Insurance Applications", "Coverage Renewals", "Family Health Insurance Assistance"],
    whyLabel: "Why Choose Us",
    whyTitle: "Trusted, personal, and bilingual",
    why1: "Experienced tax professionals",
    why2: "Personalized one-on-one service",
    why3: "Bilingual support",
    why4: "Fast, reliable & confidential",
    contactLabel: "Contact",
    contactTitle: "Let's get your paperwork in order",
    contactDesc: "Reach out by phone or WhatsApp. We'll walk you through the next steps with no pressure.",
    contactPhone: "Phone", contactEmail: "Email", contactLocation: "Location", contactHours: "Hours", contactFax: "Fax", contactAddress: "Address",
    contactLocationVal: "Miami, FL Area", contactHoursVal: "Monday – Friday\n9:00 AM – 5:00 PM", contactLocationSub: "Serving Miami-Dade County and surrounding areas.",
    contactAddressVal: "7601 E Treasure Dr\nMiami Beach, FL 33141",
    contactFaxVal: "(305) 834-4241",
    footerRights: "All rights reserved.",
    footerTagline: "Tax preparation · Business compliance · Immigration documents · Health insurance",
    stickyCall: "Call", stickyWhatsApp: "WhatsApp",
  },
  es: {
    navAbout: "Nosotros", navServices: "Servicios", navWhy: "Por Qué Nosotros", navContact: "Contacto",
    heroTagline: "INMIGRACIÓN  |  SERVICIOS DE IMPUESTOS  |  SEGURO MÉDICO",
    heroNotary: "NOTARÍA PÚBLICA",
    heroDesc: "En HC Services Financial, brindamos preparación de impuestos y apoyo contable confiable para personas, familias y dueños de negocio. También ayudamos con la preparación de documentos de inmigración, inscripción a seguros médicos y documentación financiera importante. Nuestro objetivo es hacer cada proceso claro, organizado y sin estrés, brindándole orientación personalizada en la que puede confiar.",
    btnCall: "Llamar", btnWhatsApp: "WhatsApp",
    heroTrustLine: "Servicios Remotos Disponibles • Citas en Oficina Bajo Solicitud",
    contactRemote: "Servicios Remotos Disponibles • Citas en el Área de Miami Bajo Solicitud",
    aboutLabel: "Nosotros",
    aboutTitle: "HC Services Financial",
    aboutP1: "En HC Services Financial, brindamos preparación de impuestos y apoyo contable confiable para personas, familias y dueños de negocio. También ayudamos con trámites de inmigración, inscripción a seguros médicos y documentos financieros importantes. La mayoría de los servicios se pueden completar de forma remota por teléfono, WhatsApp, correo electrónico y compartición segura de documentos, con citas en oficina disponibles bajo solicitud.",
    aboutP2: "Entendemos que muchos clientes prefieren comodidad y flexibilidad, por eso la mayoría de nuestros servicios se pueden completar de forma remota. Ya sea que se encuentre en Miami o en cualquier otro lugar, podemos atenderle por teléfono, correo electrónico, WhatsApp y compartición segura de documentos, haciendo el proceso simple y eficiente desde la comodidad de su hogar u oficina.",
    aboutP3: "Para los clientes que prefieren atención cara a cara, también ofrecemos citas en oficina previa cita.",
    aboutP4: "Nuestro objetivo es hacer cada proceso claro, organizado y sin estrés, brindándole la atención personalizada y la orientación profesional que usted merece.",
    aboutWhyTitle: "Por Qué Nos Eligen Nuestros Clientes",
    aboutWhy1: "La mayoría de servicios disponibles de forma remota",
    aboutWhy2: "Citas presenciales disponibles",
    aboutWhy3: "Atención personalizada uno a uno",
    aboutWhy4: "Atención en inglés y español",
    aboutWhy5: "Comunicación rápida y atenta",
    aboutWhy6: "Orientación profesional en la que puede confiar",
    servicesLabel: "Servicios",
    servicesTitle: "Nuestros Servicios",
    servicesSubtitle: "Apoyo profesional para personas, familias y negocios — disponible de forma remota o con cita.",
    svcTaxTitle: "Servicios de Impuestos",
    svcTaxDesc: "Servicios profesionales de impuestos y contabilidad para personas, familias, profesionales independientes y negocios.",
    svcTaxItems: ["Declaraciones de Impuestos Personales", "Declaraciones de Impuestos Corporativos", "Presentación de Impuestos sobre Ventas", "Contabilidad y Teneduría de Libros", "Formación de Corporaciones (Nuevos Negocios)", "Renovaciones Corporativas y Presentaciones Anuales", "Solicitudes de ITIN"],
    svcNotaryTitle: "Servicios de Notario Público",
    svcNotaryDesc: "Certificación oficial de documentos y servicios notariales para necesidades personales y de negocios.",
    svcNotaryItems: ["Notarizaciones", "Certificaciones de Documentos", "Cartas y Declaraciones Juradas", "Servicios Generales de Notario"],
    svcImmTitle: "Preparación de Documentos de Inmigración",
    svcImmDesc: "Asistencia profesional con la preparación de documentos de inmigración y procesamiento de trámites.",
    svcImmItems: ["Peticiones Familiares", "Renovaciones de Tarjeta de Residencia", "Remoción de Condiciones de Residencia", "Solicitudes de Permiso de Trabajo", "Renovaciones de Permiso de Trabajo", "Solicitudes de Ajuste de Estatus", "Solicitudes de Asilo", "Traducciones Certificadas", "Notarizaciones de Documentos"],
    svcImmDisclaimer: "HC Services Financial brinda asistencia en la preparación de documentos de inmigración. No somos un bufete de abogados y no ofrecemos representación legal.",
    svcHealthTitle: "Seguro Médico",
    svcHealthDesc: "Asistencia con la inscripción a seguros médicos y opciones de cobertura para personas y familias.",
    svcHealthItems: ["Inscripción al Affordable Care Act (ObamaCare)", "Solicitudes de Seguro Médico", "Renovaciones de Cobertura", "Asistencia Familiar con Seguro Médico"],
    whyLabel: "Por Qué Elegirnos",
    whyTitle: "Confiables, personales y bilingües",
    why1: "Profesionales de impuestos con experiencia",
    why2: "Atención personalizada uno a uno",
    why3: "Atención bilingüe",
    why4: "Rápidos, confiables y confidenciales",
    contactLabel: "Contacto",
    contactTitle: "Pongamos sus documentos en orden",
    contactDesc: "Contáctenos por teléfono o WhatsApp. Le guiamos en los próximos pasos sin compromiso.",
    contactPhone: "Teléfono", contactEmail: "Correo", contactLocation: "Ubicación", contactHours: "Horario", contactFax: "Fax", contactAddress: "Dirección",
    contactLocationVal: "Área de Miami, FL", contactHoursVal: "Lunes – Viernes\n9:00 AM – 5:00 PM", contactLocationSub: "Atendemos el Condado de Miami-Dade y áreas cercanas.",
    contactAddressVal: "7601 E Treasure Dr\nMiami Beach, FL 33141",
    contactFaxVal: "(305) 834-4241",
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
    { href: "#services", label: t.navServices },
    { href: "#why", label: t.navWhy },
    { href: "#contact", label: t.navContact },
  ];
  const serviceCategories = [
    { icon: Calculator, title: t.svcTaxTitle, desc: t.svcTaxDesc, items: t.svcTaxItems },
    { icon: Globe, title: t.svcImmTitle, desc: t.svcImmDesc, items: t.svcImmItems, disclaimer: t.svcImmDisclaimer },
    { icon: HeartPulse, title: t.svcHealthTitle, desc: t.svcHealthDesc, items: t.svcHealthItems },
    { icon: FileCheck, title: t.svcNotaryTitle, desc: t.svcNotaryDesc, items: t.svcNotaryItems },
  ];
  const whyChoose = [t.why1, t.why2, t.why3, t.why4];
  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div className={`inline-flex items-center rounded-full border border-foreground/15 bg-background/60 p-0.5 text-xs ${className}`}>
      <button onClick={() => changeLang("en")} aria-pressed={lang === "en"} className={`rounded-full px-2 py-0.5 font-medium transition-colors sm:px-2.5 sm:py-1 ${lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>EN</button>
      <button onClick={() => changeLang("es")} aria-pressed={lang === "es"} className={`rounded-full px-2 py-0.5 font-medium transition-colors sm:px-2.5 sm:py-1 ${lang === "es" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>ES</button>
    </div>
  );
  return (
    <div className="min-h-screen bg-background text-foreground antialiased scroll-smooth pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-1.5 sm:gap-3">
            <img src={hcLogo.url} alt="HC Services Financial logo" width={48} height={48} className="h-12 w-12 rounded-full object-cover ring-1 ring-foreground/10" />
            <span className="whitespace-nowrap text-xs font-semibold tracking-tight sm:text-base sm:tracking-wide">HC Services Financial</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3 sm:gap-5">
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
          <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center lg:py-28">
            <div className="mb-14 flex flex-col items-center">
              <img
                src={hcLogo.url}
                alt="HC Services Financial logo"
                width={256}
                height={256}
                decoding="async"
                loading="eager"
                className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28 [image-rendering:auto]"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
              <h2 className="mt-2 text-xl font-extrabold uppercase tracking-[0.1em] sm:text-3xl sm:tracking-[0.18em]">
                HC Services Financial
              </h2>
              <p className="mt-2 text-xs font-medium tracking-[0.2em] text-muted-foreground sm:text-sm">
                {t.heroTagline}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] sm:text-sm">
                {t.heroNotary}
              </p>
            </div>
            <p className="max-w-2xl text-lg leading-[1.85] text-muted-foreground sm:text-xl">
              {t.heroDesc}
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-[var(--gold-deep)]" />
              <span>{t.heroTrustLine}</span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" /> {t.btnWhatsApp} {PHONE_DISPLAY}
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                <Phone className="mr-2 h-4 w-4 text-[var(--gold-deep)]" /> {t.btnCall} {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* Professional image */}
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg shadow-foreground/5">
              <img
                src={workspaceImage.url}
                alt="Professional tax preparer reviewing income tax forms, immigration documents, and financial paperwork at a warmly lit desk"
                width={1920}
                height={1080}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-36">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.aboutLabel}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.aboutTitle}
            </h2>
            <div className="mx-auto mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP4}</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight">{t.aboutWhyTitle}</h3>
              <ul className="mx-auto mt-8 grid max-w-xl gap-4 text-left sm:grid-cols-2">
                {[t.aboutWhy1, t.aboutWhy2, t.aboutWhy3, t.aboutWhy4, t.aboutWhy5, t.aboutWhy6].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold-deep)]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border/60">
          <div className="mx-auto max-w-5xl px-6 py-[7.5rem] text-center lg:py-44">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.servicesLabel}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.servicesTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t.servicesSubtitle}
            </p>
            <div className="mx-auto mt-14 grid max-w-4xl gap-6 text-left sm:grid-cols-2">
              {serviceCategories.map((s) => (
                <div key={s.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-[var(--gold-deep)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold-deep)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {"disclaimer" in s && s.disclaimer && (
                    <p className="mt-4 rounded-lg bg-foreground/5 p-3 text-xs italic leading-relaxed text-muted-foreground">
                      {s.disclaimer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why" className="border-t border-border/60 bg-card">
          <div className="mx-auto max-w-3xl px-6 py-[7.5rem] text-center lg:py-44">
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
        <section id="contact" className="border-t border-border/60">
          <div className="mx-auto max-w-3xl px-6 py-[7.5rem] text-center lg:py-44">
            <p className="mb-4 uppercase tracking-[0.2em] text-base text-[var(--gold-deep)]">{t.contactLabel}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t.contactDesc}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90">
                <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" /> {t.btnWhatsApp} {PHONE_DISPLAY}
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center justify-center rounded-md border border-foreground/15 px-6 text-sm font-medium transition-colors hover:bg-foreground/5">
                <Phone className="mr-2 h-4 w-4 text-[var(--gold-deep)]" /> {t.btnCall} {PHONE_DISPLAY}
              </a>
            </div>
            <div className="mx-auto mt-14 grid max-w-2xl gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-5 text-left">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-[var(--gold-deep)]" /> {t.contactAddress}
                </div>
                <p className="mt-2 text-sm font-medium whitespace-pre-line">{t.contactAddressVal}</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 text-left">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Phone className="h-3.5 w-3.5 text-[var(--gold-deep)]" /> {t.contactPhone}
                </div>
                <p className="mt-2 text-sm font-medium">{PHONE_DISPLAY}</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 text-left">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Phone className="h-3.5 w-3.5 text-[var(--gold-deep)]" /> {t.contactFax}
                </div>
                <p className="mt-2 text-sm font-medium">{t.contactFaxVal}</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 text-left">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Mail className="h-3.5 w-3.5 text-[var(--gold-deep)]" /> {t.contactEmail}
                </div>
                <a href="mailto:HCSERVICESFINANCIAL@GMAIL.COM" className="mt-2 block text-sm font-medium hover:opacity-70 transition-opacity">HCSERVICESFINANCIAL@GMAIL.COM</a>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 text-left">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-[var(--gold-deep)]" /> {t.contactHours}
                </div>
                <p className="mt-2 text-sm font-medium whitespace-pre-line">{t.contactHoursVal}</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 text-left">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-[var(--gold-deep)]" /> {t.contactLocation}
                </div>
                <p className="mt-2 text-sm font-medium">{t.contactLocationVal}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.contactLocationSub}</p>
                <p className="mt-2 text-xs font-medium text-[var(--gold-deep)]">{t.contactRemote}</p>
              </div>
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
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 transition-opacity hover:opacity-90"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
          <span className="text-sm font-semibold">{t.stickyWhatsApp}</span>
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background text-foreground shadow-lg shadow-foreground/20 transition-colors hover:bg-foreground/5"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="h-5 w-5 text-[var(--gold-deep)]" />
          <span className="text-sm font-semibold">{t.stickyCall}</span>
        </a>
      </div>
    </div>
  );
}
