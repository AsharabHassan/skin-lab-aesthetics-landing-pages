// JSON-LD structured data — ported from the live site's generator.
import { site, doctors, type DoctorId, type Page } from "../data/site";

const O = site.origin;
const abs = (path: string) => `${O}${path}`;
// Page URL: explicit canonical (home) or the matching main-site URL (landing pages).
const pageUrl = (p: Page): string => ((p as any).canonical ?? abs(p.route)).replace(/\/$/, "");

function physician(id: DoctorId) {
  const d = doctors[id];
  return {
    "@type": "Physician",
    "@id": `${O}/#dr-${id}`,
    name: d.name,
    description: d.description,
    image: abs(d.image),
    jobTitle: d.title,
    medicalSpecialty: "Dermatology",
    worksFor: { "@id": `${O}/#clinic` },
    affiliation: { "@id": `${O}/#clinic` },
  };
}

const organization = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${O}/#organization`,
  name: site.brandName,
  url: O,
  logo: { "@type": "ImageObject", url: `${O}/images/logo.png`, width: 600, height: 200 },
  sameAs: [site.social.instagram, site.social.facebook],
  contactPoint: [
    { "@type": "ContactPoint", telephone: site.primaryPhone, contactType: "reservations", areaServed: "PK", availableLanguage: ["English", "Urdu"] },
    { "@type": "ContactPoint", telephone: site.whatsapp.display, contactType: "customer service", contactOption: "WhatsApp", areaServed: "PK", availableLanguage: ["English", "Urdu"] },
  ],
});

const website = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${O}/#website`,
  url: O,
  name: site.brandName,
  publisher: { "@id": `${O}/#organization` },
  inLanguage: "en-PK",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${O}/?s={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
});

const clinic = () => ({
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${O}/#clinic`,
  name: site.brandName,
  alternateName: "Skinlab Aesthetics",
  url: O,
  telephone: site.primaryPhone,
  email: site.email,
  image: `${site.lpOrigin}/images/og-default.jpg`,
  logo: `${O}/images/logo.png`,
  priceRange: "$$",
  medicalSpecialty: ["Dermatology", "Aesthetic Medicine"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54810",
    addressCountry: "PK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.4628443, longitude: 74.383965 },
  hasMap: site.mapEmbedUrl,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "12:00", closes: "20:00" },
  ],
  areaServed: [
    { "@type": "City", name: "Lahore" },
    { "@type": "AdministrativeArea", name: "DHA Phase 4" },
    { "@type": "AdministrativeArea", name: "DHA Phase 5" },
    { "@type": "AdministrativeArea", name: "Defence" },
    { "@type": "AdministrativeArea", name: "Gulberg" },
    { "@type": "AdministrativeArea", name: "Cantt" },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
  physician: [physician("zonera"), physician("shanze"), physician("hamza"), physician("subheen")],
  parentOrganization: { "@id": `${O}/#organization` },
});

function breadcrumb(p: Page) {
  const items = [{ name: "Home", url: O }];
  if (p.slug !== "home") {
    // Dermatology landing pages sit under /dermatology; aesthetic treatment pages (they carry a canonical) do not.
    if (p.slug !== "dermatology" && !(p as any).canonical) items.push({ name: "Dermatology", url: abs("/dermatology") });
    items.push({ name: p.hero.h1, url: pageUrl(p) });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl(p)}/#breadcrumb`,
    itemListElement: items.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: t.url })),
  };
}

const webpage = (p: Page) => ({
  "@context": "https://schema.org",
  "@type": p.slug === "dermatology" || p.slug === "home" ? "WebPage" : "MedicalWebPage",
  "@id": `${pageUrl(p)}/#webpage`,
  url: pageUrl(p),
  name: p.title,
  description: p.metaDescription,
  inLanguage: "en-PK",
  isPartOf: { "@id": `${O}/#website` },
  about: { "@id": `${O}/#clinic` },
  primaryImageOfPage: { "@type": "ImageObject", url: `${site.lpOrigin}/images/og-default.jpg` },
  breadcrumb: { "@id": `${pageUrl(p)}/#breadcrumb` },
  lastReviewed: "2026-05-19",
  reviewedBy: { "@id": `${O}/#dr-shanze` },
});

const conditions: Record<string, { name: string; code: string; description: string }> = {
  "warts-removal": { name: "Common Warts (Verruca vulgaris)", code: "B07.9", description: "Benign epidermal proliferations caused by the human papillomavirus (HPV), most commonly on hands, feet, and face." },
  "genital-warts-removal": { name: "Anogenital (Venereal) Warts", code: "A63.0", description: "Sexually transmitted condyloma acuminata caused by certain HPV strains; appear as small skin-colored bumps or clusters on the genitals, anus, or mouth." },
  "verruca-removal": { name: "Plantar Warts (Verruca plantaris)", code: "B07.0", description: "HPV-induced warts on the soles of the feet, often painful due to pressure during walking." },
  "mole-removal": { name: "Melanocytic Nevus", code: "D22.9", description: "Common, generally benign skin growths composed of melanocytes; can appear anywhere on the body and rarely may indicate melanoma." },
  "skin-tag-removal": { name: "Acrochordon (Skin Tag)", code: "L91.8", description: "Benign, soft skin outgrowths composed of collagen and blood vessels; commonly found on the neck, underarms, eyelids, and groin." },
  "anal-skin-tag-removal": { name: "Perianal Skin Tags", code: "L91.8", description: "Harmless skin outgrowths near the anus that can cause irritation; often associated with prior hemorrhoids or fissures." },
};

function condition(p: Page) {
  const c = conditions[p.slug];
  if (!c) return null;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "@id": `${pageUrl(p)}/#condition`,
    name: c.name,
    description: c.description,
    code: { "@type": "MedicalCode", codingSystem: "ICD-10", codeValue: c.code },
    possibleTreatment: { "@id": `${pageUrl(p)}/#procedure` },
  };
}

const procedureNames: Record<string, string> = {
  "warts-removal": "Wart Removal",
  "genital-warts-removal": "Genital Wart Removal",
  "verruca-removal": "Verruca (Plantar Wart) Removal",
  "mole-removal": "Mole Removal",
  "skin-tag-removal": "Skin Tag Removal",
  "anal-skin-tag-removal": "Anal Skin Tag Removal",
};

function procedure(p: Page) {
  if (p.slug === "dermatology" || p.slug === "home") return null;
  const sig = p.signatureTreatments?.items.map((t: any) => `${t.title}: ${t.description}`) ?? [];
  const other = p.otherTreatments?.items.map((t: any) => `${t.title}: ${t.description}`) ?? [];
  const description = [p.hero.subtitle, ...sig, ...other].join(" ").slice(0, 1500);
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${pageUrl(p)}/#procedure`,
    name: procedureNames[p.slug] ?? p.hero.h1,
    description,
    url: pageUrl(p),
    procedureType: "PercutaneousProcedure",
    bodyLocation: "Skin",
    preparation: p.whatToExpect?.timeline.before.join(". "),
    howPerformed: p.whatToExpect?.timeline.during.join(". "),
    followup: p.whatToExpect?.timeline.after.join(". "),
    performer: { "@id": `${O}/#dr-shanze` },
    affiliatedClinic: { "@id": `${O}/#clinic` },
    indication: { "@id": `${pageUrl(p)}/#condition` },
  };
}

function services(p: Page) {
  const items = [...(p.signatureTreatments?.items ?? []), ...(p.otherTreatments?.items ?? [])];
  // Placeholder prices ("PKR XX,XXX") are not real offers, so no Offer is emitted for them.
  const price = (p.hero.priceFrom ?? "").replace(/[^\d]/g, "");
  return items.map((t: any, i: number) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl(p)}/#service-${i + 1}`,
    name: t.title,
    description: t.description,
    serviceType: "Dermatology",
    provider: { "@id": `${O}/#clinic` },
    areaServed: { "@type": "City", name: "Lahore" },
    ...(price ? { offers: { "@type": "Offer", priceCurrency: "PKR", price, availability: "https://schema.org/InStock" } } : {}),
  }));
}

function faq(p: Page) {
  if (!p.faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl(p)}/#faq`,
    mainEntity: p.faqs.map((f: any, i: number) => ({
      "@type": "Question",
      "@id": `${pageUrl(p)}/#faq-${i + 1}`,
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function schemaFor(p: Page) {
  return [organization(), website(), clinic(), webpage(p), breadcrumb(p), condition(p), procedure(p), faq(p), ...services(p)].filter(Boolean);
}
