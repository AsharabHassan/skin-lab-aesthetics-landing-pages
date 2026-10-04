// Home page — "Best Aesthetic Clinic in Lahore".
// Facts (prices, devices, credentials) are taken from skinlabaesthetics.pk (pricing, laser, fillers, about pages).
import { site } from "./site";

export const home = {
  slug: "home",
  route: "/",
  canonical: `${site.lpOrigin}/`,
  title: "Best Aesthetic Clinic in Lahore | Skin Lab Aesthetics, DHA Phase 4",
  metaDescription:
    "Looking for the best aesthetic clinic in Lahore? Skin Lab Aesthetics in DHA Phase 4 offers doctor-led thread lifts, dermal fillers, pigmentation treatment, Soprano Titanium laser hair removal and skin rejuvenation. Book on WhatsApp.",
  hero: {
    label: "Aesthetic & Dermatology Clinic · DHA Phase 4",
    h1: "The Best Aesthetic Clinic in Lahore for Natural, Doctor‑Led Results",
    subtitle:
      "Where London's excellence meets Lahore's trust. Every treatment is planned by qualified dermatologists — with medical-grade technology and transparent prices.",
  },
  stats: [
    { value: "10,000+", label: "Successful Treatments" },
    { value: "11+ Years", label: "Consultant Dermatology Experience" },
    { value: "3", label: "Specialist Doctors" },
    { value: "I–VI", label: "Laser-Safe for All Skin Tones" },
  ],
  doctors: ["zonera", "shanze", "subheen", "hamza"],
  faqsSectionTitle: "Choosing an Aesthetic Clinic in Lahore: Your Questions Answered",
  faqs: [
    {
      question: "Which is the best aesthetic clinic in Lahore?",
      answer:
        "Choose a clinic where doctors plan your treatment, technology is medical-grade and prices are transparent. Skin Lab Aesthetics in DHA Phase 4 is led by Consultant Dermatologist Dr. Shanze Shafique (11+ years) and rated 4.9/5 on Google.",
    },
    {
      question: "How much does a HydraFacial cost in Lahore?",
      answer:
        "HydraFacial Rs 8,000 · Glow Hydra Facial (12 steps) Rs 7,500 · OxyGeneo Hydra Glow Facial Rs 20,000.",
    },
    {
      question: "Is laser hair removal safe for darker skin tones?",
      answer:
        "Yes. Our Soprano Titanium™ laser is FDA-approved for permanent hair reduction on all skin tones (I–VI). Most clients need 6–8 sessions.",
    },
    {
      question: "How long do dermal fillers last?",
      answer:
        "Hyaluronic acid fillers last 6 to 18 months. Treatment takes 20–40 minutes, and fillers start from Rs 25,000.",
    },
    {
      question: "Are treatments supervised by doctors?",
      answer:
        "Yes. Every patient starts with a doctor's consultation. Injectables and medical treatments are done by our physicians.",
    },
    {
      question: "What happens at a consultation?",
      answer:
        "An in-clinic consultation with a doctor covers examination, diagnosis and a treatment plan, with no pressure to proceed.",
    },
    {
      question: "Where is the clinic and what are your timings?",
      answer:
        "85 CC-A Commercial, Sector DD, Phase 4, DHA Lahore. Open Monday to Saturday, 12 PM – 8 PM. Call or WhatsApp 0325 555 2088.",
    },
    {
      question: "Which areas of Lahore do you serve?",
      answer:
        "We're easy to reach from DHA, Defence, Gulberg and Cantt, with patients visiting from across Lahore.",
    },
  ],
};

export const homeNav = [
  { name: "Signature", href: "#signature" },
  { name: "Treatments", href: "#treatments" },
  { name: "Prices", href: "#prices" },
  { name: "Results", href: "#gallery" },
  { name: "Doctors", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

export const homeTreatmentOptions = [
  "Consultation",
  "Thread Lift",
  "Dermal Fillers",
  "Pigmentation",
  "Laser Hair Removal",
  "Rejuvenation Treatments",
  "HydraFacial & Advanced Facials",
  "Anti-Wrinkle Injections",
  "Acne & Acne Scars",
  "Skin Whitening",
  "Hair Loss (PRP / Exosome)",
  "IV Drips",
  "Moles, Warts & Skin Tags",
];

// USPs as stated on skinlabaesthetics.pk.
export const usps = [
  "London-Standard Expertise",
  "Specialists Certified",
  "Advanced Technology",
  "Personalized Aesthetic Care",
  "Client-Centered Approach",
  "Affordable Excellence",
];

export const bestClinic = {
  title: "What Makes the Best Aesthetic Clinic in Lahore?",
  lead: "Six things to check before you book — and how we measure up.",
  points: [
    { title: "Doctor-led, not salon-led", text: "Every plan starts with a consultation with one of our three doctors." },
    { title: "Medical-grade technology", text: "Soprano Titanium™ laser, HydraFacial and OxyGeneo systems." },
    { title: "Safe for Pakistani skin tones", text: "FDA-approved laser for all skin types (I–VI)." },
    { title: "Transparent pricing", text: "Prices published up front and confirmed at your consultation." },
    { title: "Natural-looking results", text: "Subtle enhancement — never overdone." },
    { title: "Clean, calm and on time", text: "Rated 4.9/5 on Google, with patients praising hygiene and short waits." },
  ],
};

// Featured treatments — detailed blocks.
// Stock photos (lip-filler-stock, cheek-filler-stock) are from Pexels (free licence): photos 34775440 and 34775441.
// Laser, fillers and pigmentation facts come from skinlabaesthetics.pk. Thread lift and rejuvenation are listed on the
// main site's treatment menu without detail pages, so their copy is general and prices are "at consultation".
export type Featured = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  listLabel: string;
  list: string[];
  facts: { label: string; value: string }[];
  price: string;
  priceNote?: string;
  photo: { src: string; pos: string; cutout?: boolean };
  result?: string;
  formOption: string;
};
export const featured: Featured[] = [
  {
    id: "thread-lift",
    eyebrow: "Non-Surgical Lift",
    title: "Thread Lift",
    intro:
      "Dissolvable medical threads lift and tighten sagging skin — a non-surgical alternative to a facelift.",
    listLabel: "Ideal for",
    list: ["Jawline & jowls", "Mid-face & cheeks", "Brows", "Neck"],
    facts: [
      { label: "Procedure", value: "Non-surgical, under local anaesthetic" },
      { label: "Downtime", value: "Minimal — mild swelling or tenderness" },
      { label: "Results", value: "Visible lift that improves as collagen builds" },
    ],
    price: "Price at consultation",
    photo: { src: "/images/photos/thread-lift.webp", pos: "50% 50%", cutout: true },
    formOption: "Thread Lift",
  },
  {
    id: "dermal-fillers",
    eyebrow: "Hyaluronic Acid",
    title: "Dermal Fillers",
    intro:
      "Hyaluronic acid fillers restore volume and enhance your features — so you look like you, only refreshed.",
    listLabel: "Treatment areas",
    list: ["Lips", "Cheeks", "Under-eye (tear trough)", "Jawline & jowls", "Nose (non-surgical)", "Marionette lines"],
    facts: [
      { label: "Treatment time", value: "20–40 minutes" },
      { label: "Downtime", value: "Minor swelling or redness for a day or two" },
      { label: "Results last", value: "6 to 18 months" },
    ],
    price: "From Rs 25,000",
    priceNote: "Final price depends on the filler type and amount needed",
    photo: { src: "/images/photos/lip-filler-stock.webp", pos: "50% 40%" },
    formOption: "Dermal Fillers",
  },
  {
    id: "pigmentation",
    eyebrow: "Melasma & Dark Spots",
    title: "Pigmentation Treatment",
    intro:
      "Peels, laser or targeted serums for dark spots, uneven tone and melasma — chosen by our doctors for your skin.",
    listLabel: "Treats",
    list: ["Melasma", "Dark spots & sun damage", "Post-acne marks", "Uneven skin tone"],
    facts: [
      { label: "Sessions", value: "Visible results after 3–5 sessions" },
      { label: "Downtime", value: "Mild redness or peeling for a few days" },
      { label: "Aftercare", value: "Daily sun protection is essential" },
    ],
    price: "Rs 20,000 / session",
    priceNote: "4 sessions Rs 70,000 · Signature session Rs 30,000",
    photo: { src: "/images/photos/glow.webp", pos: "50% 25%" },
    result: "/images/results/pigment-laser-2026.webp",
    formOption: "Pigmentation",
  },
  {
    id: "laser-hair-removal",
    eyebrow: "Soprano Titanium™",
    title: "Laser Hair Removal",
    intro:
      "Virtually painless Soprano Titanium™ laser, FDA-approved for permanent hair reduction on all skin tones.",
    listLabel: "Popular areas",
    list: ["Face, upper lip & chin", "Underarms", "Arms & legs", "Bikini", "Full body packages"],
    facts: [
      { label: "Sessions", value: "6–8 for up to 90% reduction" },
      { label: "Feels like", value: "A gentle warming — no snaps or zaps" },
      { label: "Skin types", value: "Safe for all skin tones (I–VI)" },
    ],
    price: "From Rs 1,500",
    priceNote: "Full body Rs 25,000 / session (offer) · +50% for men",
    photo: { src: "/images/photos/laser-clinic.webp", pos: "50% 40%" },
    result: "/images/results/laser-underarm.webp",
    formOption: "Laser Hair Removal",
  },
  {
    id: "rejuvenation",
    eyebrow: "Anti-Ageing",
    title: "Rejuvenation Treatments",
    intro:
      "Refresh tired, dull or ageing skin with doctor-planned in-clinic treatments and a home skincare routine.",
    listLabel: "Options include",
    list: ["PRP facial rejuvenation", "Exosome therapy", "HIFU skin tightening", "Photo facial", "Chemical peels", "NAD+ anti-ageing immunity booster"],
    facts: [
      { label: "Approach", value: "A plan tailored to your skin and goals" },
      { label: "Best for", value: "Fine lines, dullness, texture & laxity" },
      { label: "Care", value: "In-clinic treatments plus home skincare" },
    ],
    price: "From Rs 7,500",
    priceNote: "Other options priced at consultation",
    photo: { src: "/images/photos/laser-treatment.webp", pos: "50% 40%" },
    formOption: "Rejuvenation Treatments",
  },
];

// `href` links a card to its treatment page; `itemLinks` turns individual list items into links.
export type Treatment = { title: string; photo: string; pos: string; text: string; from?: string; items: string[]; links?: { label: string; href: string }[]; href?: string; itemLinks?: Record<string, string> };
export const treatments: Treatment[] = [
  {
    title: "Advanced Facials",
    photo: "/images/photos/carbon-facial.webp",
    pos: "50% 25%",
    text: "Medicated facials to cleanse, hydrate and brighten.",
    items: ["HydraFacial", "Glow HydraFacial", "OxyGeneo Hydra Glow Facial", "Photo Facial", "Carbon Laser Facial"],
    href: "/advanced-facials",
  },
  {
    title: "Laser Hair Removal",
    photo: "/images/photos/laser-clinic.webp",
    pos: "50% 40%",
    text: "Virtually painless Soprano Titanium™, safe for all skin tones.",
    from: "Rs 1,500",
    items: ["Face & upper lip", "Underarms", "Arms & legs", "Bikini", "Full body packages"],
    href: "/laser-hair-removal",
  },
  {
    title: "Injectables & Anti-Ageing",
    photo: "/images/photos/cheek-filler-stock.webp",
    pos: "50% 30%",
    text: "Fillers, anti-wrinkle injections and lifting treatments.",
    from: "Rs 25,000",
    items: ["Lip, cheek & jawline fillers", "Under-eye (tear trough)", "Anti-wrinkle injections", "Thread lift & HIFU", "PRP & exosome facial rejuvenation"],
    itemLinks: { "Lip, cheek & jawline fillers": "/dermal-fillers", "Under-eye (tear trough)": "/dermal-fillers" },
  },
  {
    title: "Skin Concerns",
    photo: "/images/photos/acne.webp",
    pos: "50% 30%",
    text: "Doctor-designed plans for acne, scars and pigmentation.",
    from: "Rs 15,000",
    items: ["Acne treatment", "Acne scar treatment", "Pigmentation", "Skin whitening", "Dark circles"],
    itemLinks: { "Acne scar treatment": "/acne-scar-removal", Pigmentation: "/pigmentation", "Skin whitening": "/skin-whitening" },
  },
  {
    title: "Hair Restoration",
    photo: "/images/photos/hair-loss.webp",
    pos: "50% 35%",
    text: "Treatments to stimulate regrowth, based on a proper diagnosis.",
    from: "Rs 15,000",
    items: ["Hair PRP", "PRP plus mesotherapy", "Exosome hair therapy", "Hair transplant"],
    href: "/hair-loss-treatment",
  },
  {
    title: "Glow & Wellness Drips",
    photo: "/images/photos/glow.webp",
    pos: "50% 25%",
    text: "IV nutrient therapy for radiance and wellness.",
    from: "Rs 25,000",
    items: ["Skin whitening drips", "Enhanced skin whitening drips", "NAD+ anti-ageing immunity booster"],
  },
  {
    title: "Medical Dermatology",
    photo: "/images/photos/mole-exam.webp",
    pos: "50% 30%",
    text: "Safe removal of skin growths, with laser options.",
    items: [],
    links: [
      { label: "Warts Removal", href: "/warts-removal" },
      { label: "Verruca Removal", href: "/verruca-removal" },
      { label: "Mole Removal", href: "/mole-removal" },
      { label: "Skin Tag Removal", href: "/skin-tag-removal" },
      { label: "Genital Warts Removal", href: "/genital-warts-removal" },
      { label: "Anal Skin Tag Removal", href: "/anal-skin-tag-removal" },
      { label: "Nail Fungus Removal", href: "/nail-fungus" },
    ],
  },
];

export const technology = [
  {
    name: "Soprano Titanium™",
    title: "Laser hair removal for every skin tone",
    text: "Three wavelengths in one laser, FDA-approved for skin types I–VI.",
    bullets: ["Virtually painless", "Up to 90% reduction in 6–8 sessions"],
  },
  {
    name: "HydraFacial & OxyGeneo",
    title: "Facials that deliver an instant glow",
    text: "Cleanse, exfoliate and hydrate in one treatment.",
    bullets: ["Glow HydraFacial and OxyGeneo upgrades"],
  },
];

// Popular prices from skinlabaesthetics.pk/pricing.
export const prices: { group: string; rows: { name: string; price: string; note?: string }[] }[] = [
  {
    group: "Facials",
    rows: [
      { name: "Glow Hydra Facial (12 steps)", price: "Rs 7,500" },
      { name: "Signature Facial", price: "Rs 15,000" },
      { name: "Photo Facial", price: "Rs 7,500" },
      { name: "Carbon Laser Facial", price: "Rs 8,500" },
      { name: "Chemical Peel", price: "Rs 10,000" },
      { name: "HydraFacial (face or neck)", price: "Rs 8,000" },
      { name: "OxyGeneo Hydra Glow Facial", price: "Rs 20,000" },
    ],
  },
  {
    group: "Laser Hair Removal",
    rows: [
      { name: "Upper lip", price: "Rs 1,500" },
      { name: "Full face", price: "Rs 5,000" },
      { name: "Underarms", price: "Rs 8,000" },
      { name: "Full legs", price: "Rs 12,000" },
      { name: "Full body (1 session)", price: "Rs 25,000", note: "Offer · was Rs 40,000" },
    ],
  },
  {
    group: "Injectables & Skin",
    rows: [
      { name: "Dermal fillers", price: "From Rs 25,000" },
      { name: "Acne treatment", price: "Rs 15,000" },
      { name: "Acne scar treatment", price: "Rs 20,000" },
      { name: "Pigmentation (1 session)", price: "Rs 20,000" },
      { name: "Hair PRP (1 session)", price: "Rs 15,000" },
    ],
  },
];

export const homeResults = [
  "/images/results/rejuvenation.webp",
  "/images/results/pigment-laser-2026.webp",
  "/images/results/under-eye-2026.webp",
  "/images/results/complexion-2026.webp",
  "/images/results/hands-2026.webp",
  "/images/results/laser-underarm.webp",
  "/images/results/skin-texture.webp",
  "/images/results/hair-prp.webp",
];
