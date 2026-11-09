// New landing pages added 9 Nov 2026 for Google Ads (Aesthetic Clinic campaign) — services the clinic confirmed it offers.
// Facts: HIFU prices and the RS 3,000 doctor consultation come from skinlabaesthetics.pk/pricing. Every other price is
// confirmed at consultation, so no price is invented here. No before/after gallery is shown (no verified Skin Lab results yet).
import type { TreatmentPage } from "./treatments";

const LP = "https://lp.skinlabaesthetics.pk";
const DOCTORS = ["zonera", "shanze", "hamza", "subheen"];
const stats = (tech: [string, string]) => [
  { value: "10,000+", label: "Successful Treatments" },
  { value: "20+ Years", label: "Of Cosmetic Dermatology Expertise" },
  { value: tech[0], label: tech[1] },
  { value: "Transparent", label: "Pricing at Consultation" },
];
const NAV = [
  { name: "Treatments", href: "#treatments" },
  { name: "Prices", href: "#prices" },
  { name: "Expertise", href: "#team" },
  { name: "FAQs", href: "#faq" },
];
const CONSULT_PRICES = (label: string) => ({
  type: "prices" as const,
  id: "prices",
  eyebrow: "Transparent Pricing",
  title: "Clear Prices, Confirmed Before You Start",
  lead: `Every ${label} plan is built around your skin, so the final price depends on the area and number of sessions. Your doctor confirms it in writing at your consultation, before any treatment.`,
  tables: [{ title: "Consultation", rows: [{ name: "In-clinic consultation with a doctor", price: "Rs 3,000" }] }],
  bullets: [
    "Your treatment price is confirmed at consultation, with no hidden costs.",
    "No obligation to go ahead on the day.",
  ],
  cta: "Book Your Consultation",
});
const WHY = {
  type: "checklist" as const,
  eyebrow: "Why Skin Lab",
  title: "Doctor-Led Aesthetics in DHA Phase 4, Lahore",
  items: [
    { k: "Doctor-led", v: "Every plan is made by a qualified doctor after examining your skin." },
    { k: "Harley Street standards", v: "Our team trains to the standards of our Harley Street, London collaboration." },
    { k: "Honest advice", v: "If a treatment is not right for you, we will tell you — and suggest what is." },
    { k: "Clear pricing", v: "You know the full price before treatment starts." },
  ],
  cta: "Book Your Consultation",
};
const BASE_FAQS = [
  { question: "Where is Skin Lab Aesthetics?", answer: "85 CC-A Commercial, Sector DD, Phase 4, DHA Lahore." },
  { question: "How much is a consultation?", answer: "An in-clinic consultation with a doctor is Rs 3,000. It covers an examination, your options and a written price." },
];

export const extraPages: Record<string, TreatmentPage> = {
  "skin-tightening": {
    slug: "skin-tightening",
    route: "/skin-tightening",
    canonical: `${LP}/skin-tightening`,
    title: "HIFU Skin Tightening in Lahore | Full Face Rs 35,000 | Skin Lab Aesthetics",
    metaDescription: "Non-surgical skin tightening in DHA Lahore: HIFU, thread lift and dermal fillers, planned by doctors. Full face HIFU Rs 35,000. Book your consultation.",
    formOption: "HIFU Skin Tightening",
    hero: {
      label: "HIFU & Non-Surgical Lifting",
      h1: "Lift and Tighten Without Surgery — HIFU Skin Tightening in Lahore",
      subtitle: "Sagging jawline, double chin or loose neck skin? Our doctors use HIFU, thread lifts and dermal fillers to lift and tighten skin with no surgery and little downtime. Full face HIFU Rs 35,000.",
      badges: ["Full face HIFU Rs 35,000", "Doctor-planned treatment", "No surgery, little downtime", "DHA Phase 4, Lahore"],
    },
    form: { intro: "Tell us which area bothers you and our team will call you back to book your consultation." },
    stats: stats(["HIFU", "Ultrasound Skin Tightening"]),
    gallery: { images: [], lead: "" },
    heroPhoto: { src: "/images/photos/radiant-skin.webp", alt: "Firm, lifted skin", pos: "30% 30%", w: 1920, h: 1080 },
    nav: NAV,
    blocks: [
      {
        type: "features",
        eyebrow: "Signs of Laxity",
        title: "Is Your Skin Losing Its Firmness?",
        lead: "From our late 20s, collagen production slows. Over time this shows as:",
        items: [
          { title: "Softer jawline", text: "and the start of jowls" },
          { title: "Double chin", text: "or loose skin under the chin" },
          { title: "Lines on the neck", text: "and crepey skin" },
          { title: "Heavy brows", text: "and hooded eyelids" },
        ],
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Your Options",
        title: "Our Skin Tightening Treatments",
        lead: "Your doctor recommends the right treatment, or combination, after examining your skin.",
        items: [
          { title: "HIFU (High-Intensity Focused Ultrasound)", price: "Full face Rs 35,000", paras: ["Focused ultrasound heats the deeper layers of the skin to stimulate new collagen, giving a gradual lift over the following weeks. No needles or cuts."] },
          { title: "Thread Lift", price: "Price at consultation", paras: ["Dissolvable threads lift sagging cheeks, jowls and brows straight away, and boost collagen as they dissolve."] },
          { title: "Dermal Fillers", price: "From Rs 25,000", paras: ["Hyaluronic acid fillers restore lost volume in the cheeks, jawline and under-eyes for a lifted, refreshed look."] },
        ],
      },
      {
        type: "prices",
        id: "prices",
        eyebrow: "Transparent Pricing",
        title: "HIFU Prices",
        lead: "Thread lift is priced at consultation. Dermal fillers start from Rs 25,000.",
        tables: [{
          title: "HIFU Skin Tightening",
          rows: [
            { name: "Full Face HIFU", price: "Rs 35,000" },
            { name: "Face & Neck Combo", price: "Rs 50,000" },
            { name: "Jawline HIFU", price: "Rs 20,000" },
            { name: "Double Chin HIFU", price: "Rs 25,000" },
            { name: "Neck HIFU", price: "Rs 25,000" },
            { name: "Brow Lift & Eye Area", price: "Rs 25,000" },
            { name: "Body HIFU", price: "Rs 30,000" },
          ],
        }],
        bullets: ["In-clinic consultation with a doctor: Rs 3,000."],
        cta: "Book Your Consultation",
      },
      WHY,
    ],
    doctors: DOCTORS,
    faqs: [
      { question: "When will I see HIFU results?", answer: "Some tightening can show straight away, but the main lift builds over 2 to 3 months as new collagen forms." },
      { question: "Is there downtime?", answer: "Most people return to normal activities the same day. Mild redness or tenderness usually settles within a few days." },
      ...BASE_FAQS,
    ],
    clinicSpecialty: "skin tightening",
  },

  "thread-lift": {
    slug: "thread-lift",
    route: "/thread-lift",
    canonical: `${LP}/thread-lift`,
    title: "Thread Lift in Lahore | Non-Surgical Facelift | Skin Lab Aesthetics",
    metaDescription: "Doctor-led thread lift in DHA Lahore. Dissolvable threads lift the cheeks, jawline and brows without surgery. Book your consultation.",
    formOption: "Thread Lift",
    hero: {
      label: "Thread Lift",
      h1: "A Visible Lift Without Surgery — Thread Lift in Lahore",
      subtitle: "Dissolvable medical threads lift sagging cheeks, jowls and brows, and keep stimulating collagen as they dissolve. A non-surgical alternative to a facelift, planned by our doctors.",
      badges: ["Non-surgical facelift", "Dissolvable threads", "Doctor-performed", "DHA Phase 4, Lahore"],
    },
    form: { intro: "Book your consultation and our doctor will check whether a thread lift suits you." },
    stats: stats(["PDO", "Dissolvable Lifting Threads"]),
    gallery: { images: [], lead: "" },
    heroPhoto: { src: "/images/photos/thread-lift.webp", alt: "Thread lift treatment", pos: "50% 50%", w: 498, h: 768 },
    nav: NAV,
    blocks: [
      {
        type: "protocol",
        eyebrow: "How It Works",
        title: "How a Thread Lift Lifts Your Face",
        lead: "Fine, dissolvable threads are placed under the skin through a few small entry points, using local anaesthetic.",
        steps: [
          { title: "Immediate lift", text: "The threads gently lift and reposition sagging skin." },
          { title: "Collagen boost", text: "As the threads dissolve, they stimulate new collagen for firmer skin." },
          { title: "Natural result", text: "You still look like you — just fresher and more lifted." },
        ],
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Treatment Areas",
        title: "Where a Thread Lift Helps",
        items: [
          { title: "Cheeks & mid-face", price: "Price at consultation", paras: ["Lifts flattened cheeks and softens deep smile lines."] },
          { title: "Jawline & jowls", price: "Price at consultation", paras: ["Redefines the jawline and lifts early jowls."] },
          { title: "Brows", price: "Price at consultation", paras: ["Raises heavy brows for a more open look."] },
          { title: "Neck", price: "Price at consultation", paras: ["Tightens loose skin under the chin and on the neck."] },
        ],
      },
      CONSULT_PRICES("thread lift"),
      WHY,
    ],
    doctors: DOCTORS,
    faqs: [
      { question: "How long does a thread lift last?", answer: "Results usually last 12 to 18 months, depending on the threads used and your skin." },
      { question: "Is there downtime?", answer: "Expect mild swelling or bruising for a few days. Most people return to work within 1 to 2 days." },
      ...BASE_FAQS,
    ],
    clinicSpecialty: "thread lift",
  },

  microneedling: {
    slug: "microneedling",
    route: "/microneedling",
    canonical: `${LP}/microneedling`,
    title: "Microneedling & RF Microneedling in Lahore | Skin Lab Aesthetics",
    metaDescription: "Microneedling and RF microneedling (Morpheus8) in DHA Lahore for acne scars, open pores, fine lines and skin texture. Doctor-led. Book your consultation.",
    formOption: "Microneedling",
    hero: {
      label: "Microneedling & RF Microneedling",
      h1: "Smoother, Firmer Skin with Microneedling in Lahore",
      subtitle: "For acne scars, open pores, fine lines and uneven texture. Our doctors use medical microneedling and RF microneedling (Morpheus8) to trigger your skin's own repair and collagen.",
      badges: ["Acne scars & open pores", "RF microneedling available", "Doctor-led", "DHA Phase 4, Lahore"],
    },
    form: { intro: "Tell us your main skin concern and we will call you back to book your consultation." },
    stats: stats(["RF", "Microneedling Technology"]),
    gallery: { images: [], lead: "" },
    heroPhoto: { src: "/images/photos/glow.webp", alt: "Smooth, even skin texture", pos: "50% 25%", w: 600, h: 1050 },
    nav: NAV,
    blocks: [
      {
        type: "features",
        eyebrow: "What It Treats",
        title: "Concerns Microneedling Can Improve",
        items: [
          { title: "Acne scars", text: "rolling, boxcar and shallow ice-pick scars" },
          { title: "Open pores", text: "and rough, uneven texture" },
          { title: "Fine lines", text: "and early loss of firmness" },
          { title: "Stretch marks", text: "and dull, tired-looking skin" },
        ],
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Your Options",
        title: "Microneedling Treatments We Offer",
        items: [
          { title: "Medical Microneedling", price: "Price at consultation", paras: ["Tiny controlled micro-channels stimulate collagen and help serums work deeper. Ideal for texture, pores and mild scarring."] },
          { title: "RF Microneedling (Morpheus8)", price: "Price at consultation", paras: ["Microneedling combined with radiofrequency heat for deeper remodelling — for acne scars, firmness and jawline definition."] },
          { title: "Microneedling with PDRN or exosomes", price: "Price at consultation", paras: ["Regenerative serums applied during treatment to support healing and glow."] },
        ],
      },
      CONSULT_PRICES("microneedling"),
      WHY,
    ],
    doctors: DOCTORS,
    faqs: [
      { question: "How many sessions will I need?", answer: "Most people need 3 to 6 sessions about 4 weeks apart. Your doctor will advise after examining your skin." },
      { question: "Does microneedling hurt?", answer: "A numbing cream is applied first, so most people feel only mild prickling." },
      ...BASE_FAQS,
    ],
    clinicSpecialty: "microneedling",
  },

  "skin-boosters": {
    slug: "skin-boosters",
    route: "/skin-boosters",
    canonical: `${LP}/skin-boosters`,
    title: "Skin Boosters in Lahore | Profhilo, PDRN, Exosomes | Skin Lab Aesthetics",
    metaDescription: "Skin boosters in DHA Lahore: Profhilo, PDRN (polynucleotides) and exosome therapy for hydration, glow and fine lines. Doctor-led. Book your consultation.",
    formOption: "Skin Boosters",
    hero: {
      label: "Skin Boosters",
      h1: "Deep Hydration and a Natural Glow — Skin Boosters in Lahore",
      subtitle: "Dull, dehydrated skin or fine lines? Skin boosters such as Profhilo, PDRN (polynucleotides) and exosome therapy improve skin quality from within, without changing your features.",
      badges: ["Profhilo", "PDRN / polynucleotides", "Exosome therapy", "Doctor-administered"],
    },
    form: { intro: "Book your consultation and our doctor will recommend the right booster for your skin." },
    stats: stats(["Injectable", "Skin Quality Treatments"]),
    gallery: { images: [], lead: "" },
    heroPhoto: { src: "/images/photos/glow.webp", alt: "Hydrated, glowing skin", pos: "50% 25%", w: 600, h: 1050 },
    nav: NAV,
    blocks: [
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Your Options",
        title: "Skin Boosters We Offer",
        lead: "Your doctor chooses the booster, or combination, that suits your skin and goals.",
        items: [
          { title: "Profhilo", price: "Price at consultation", paras: ["A high-concentration hyaluronic acid that spreads under the skin to hydrate and improve firmness. Usually 2 sessions a month apart."] },
          { title: "PDRN / Polynucleotides", price: "Price at consultation", paras: ["Regenerative injections that support repair — popular for under-eye skin, texture and early ageing."] },
          { title: "Exosome Therapy", price: "Price at consultation", paras: ["Regenerative exosomes for glow, texture and recovery, often combined with microneedling."] },
          { title: "Hyaluronic Skin Boosters", price: "Price at consultation", paras: ["Fine hyaluronic acid injections for deep, long-lasting hydration and a dewy finish."] },
        ],
      },
      CONSULT_PRICES("skin booster"),
      WHY,
    ],
    doctors: DOCTORS,
    faqs: [
      { question: "Are skin boosters the same as fillers?", answer: "No. Fillers add volume and shape. Skin boosters improve hydration and quality across the skin without changing your features." },
      { question: "How soon will I see results?", answer: "Skin often looks more hydrated within days, with the full effect after the course is complete." },
      ...BASE_FAQS,
    ],
    clinicSpecialty: "skin booster",
  },

  "tattoo-removal": {
    slug: "tattoo-removal",
    route: "/tattoo-removal",
    canonical: `${LP}/tattoo-removal`,
    title: "Laser Tattoo Removal in Lahore | Skin Lab Aesthetics",
    metaDescription: "Laser tattoo removal in DHA Lahore with Q-switched and pico laser technology. Doctor-led assessment and a clear session plan. Book your consultation.",
    formOption: "Tattoo Removal",
    hero: {
      label: "Laser Tattoo Removal",
      h1: "Fade or Remove Unwanted Tattoos with Laser in Lahore",
      subtitle: "Our doctors use Q-switched and pico laser technology to break tattoo ink into tiny particles that your body clears naturally — session by session.",
      badges: ["Q-switched & pico laser", "Black and coloured inks", "Doctor-led", "DHA Phase 4, Lahore"],
    },
    form: { intro: "Send us your details and we will call you back to book your tattoo assessment." },
    stats: stats(["Q-Switch", "& Pico Laser Technology"]),
    gallery: { images: [], lead: "" },
    heroPhoto: { src: "/images/photos/laser-treatment.webp", alt: "Laser treatment at Skin Lab Aesthetics", pos: "50% 40%", w: 600, h: 1050 },
    nav: NAV,
    blocks: [
      {
        type: "protocol",
        eyebrow: "How It Works",
        title: "How Laser Tattoo Removal Works",
        steps: [
          { title: "Assessment", text: "Your doctor checks the size, colours and age of the tattoo and your skin type." },
          { title: "Laser sessions", text: "Short laser pulses shatter the ink. Each session fades the tattoo further." },
          { title: "Natural clearance", text: "Your body removes the ink particles between sessions, usually 6 to 8 weeks apart." },
        ],
        note: "Most tattoos need several sessions. Your doctor gives you an honest estimate at the assessment.",
      },
      CONSULT_PRICES("tattoo removal"),
      WHY,
    ],
    doctors: DOCTORS,
    faqs: [
      { question: "How many sessions do I need?", answer: "It depends on the ink, colours and size. Many tattoos need 5 to 10 sessions; your doctor will estimate this at your assessment." },
      { question: "Can coloured tattoos be removed?", answer: "Black ink responds best. Some colours fade more slowly; we will explain what to expect for your tattoo." },
      ...BASE_FAQS,
    ],
    clinicSpecialty: "tattoo removal",
  },

  "ingrown-toenail": {
    slug: "ingrown-toenail",
    route: "/ingrown-toenail",
    canonical: `${LP}/ingrown-toenail`,
    title: "Ingrown Toenail Treatment in Lahore | Skin Lab Aesthetics",
    metaDescription: "Ingrown toenail treatment in DHA Lahore: doctor assessment, treatment of infection and minor nail procedures to stop it coming back. Book your consultation.",
    formOption: "Ingrown Toenail",
    hero: {
      label: "Ingrown Toenail Treatment",
      h1: "Painful Ingrown Toenail? Get It Treated Properly in Lahore",
      subtitle: "Our doctors relieve the pain, treat any infection and, where needed, perform a minor nail procedure under local anaesthetic so the problem does not keep coming back.",
      badges: ["Doctor assessment", "Local anaesthetic", "Treats recurring ingrown nails", "DHA Phase 4, Lahore"],
    },
    form: { intro: "Tell us about your nail and we will call you back to book an appointment." },
    stats: stats(["Minor", "Nail Procedures"]),
    gallery: { images: [], lead: "" },
    heroPhoto: { src: "/images/photos/toe-nail-fungus.webp", alt: "Toenail examination", pos: "50% 50%", w: 947, h: 1021 },
    nav: NAV,
    blocks: [
      {
        type: "features",
        eyebrow: "Signs",
        title: "When to See a Doctor",
        items: [
          { title: "Pain and swelling", text: "at the side of the nail" },
          { title: "Redness or pus", text: "which can mean infection" },
          { title: "It keeps coming back", text: "after trimming at home" },
          { title: "Diabetes or poor circulation", text: "where foot problems need prompt care" },
        ],
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Treatment",
        title: "How We Treat Ingrown Toenails",
        items: [
          { title: "Assessment & infection care", price: "Consultation Rs 3,000", paras: ["Your doctor examines the nail and treats any infection."] },
          { title: "Partial nail removal", price: "Price at consultation", paras: ["The ingrowing edge is removed under local anaesthetic, with fast relief."] },
          { title: "Treatment for recurring nails", price: "Price at consultation", paras: ["For nails that keep ingrowing, the nail edge can be treated so it does not grow back into the skin."] },
        ],
      },
      WHY,
    ],
    doctors: DOCTORS,
    faqs: [
      { question: "Is the procedure painful?", answer: "The toe is numbed with local anaesthetic first, so you should not feel pain during the procedure." },
      { question: "How long is recovery?", answer: "Most people walk out of the clinic and return to normal activities within a few days." },
      ...BASE_FAQS,
    ],
    clinicSpecialty: "ingrown toenail",
  },
};

export const extraOrder = ["skin-tightening", "thread-lift", "microneedling", "skin-boosters", "tattoo-removal", "ingrown-toenail"];
export const extraLabels: Record<string, string> = {
  "skin-tightening": "HIFU Skin Tightening",
  "thread-lift": "Thread Lift",
  microneedling: "Microneedling",
  "skin-boosters": "Skin Boosters",
  "tattoo-removal": "Tattoo Removal",
  "ingrown-toenail": "Ingrown Toenail",
};
