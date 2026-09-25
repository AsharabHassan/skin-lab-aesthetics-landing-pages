// Brand, clinic and shared content — carried over verbatim from the live site.
import pagesJson from "./pages.json";

export const site = {
  brandName: "Skin Lab Aesthetics",
  brandShort: "Skin Lab",
  tagline: "Lahore's Premier Skin Clinic",
  origin: "https://skinlabaesthetics.pk",
  lpOrigin: "https://lp.skinlabaesthetics.pk",
  gtmId: "GTM-P6MWZWW9",
  address: {
    line1: "85 CC-A Commercial",
    line2: "Sector DD, Phase 4",
    city: "DHA Lahore",
    country: "Pakistan",
    full: "85 CC-A Commercial, Sector DD, Phase 4, DHA Lahore",
  },
  phones: ["0325 555 2088", "0325 555 2089"],
  primaryPhone: "0325 555 2088",
  whatsapp: {
    number: "+923255552088",
    display: "0325 555 2088",
    link: "https://wa.me/923255552088",
  },
  email: "hello@skinlabaesthetics.pk",
  hours: { weekdays: "Mon - Sat: 12:00 PM - 08:00 PM", sunday: "Sunday: Closed" },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2305220043327!2d74.383965!3d31.462844299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4769b8d2a40afe7%3A0x73414e2223c437a2!2sSkinLab%20Aesthetics!5e0!3m2!1sen!2sus!4v1779166355857!5m2!1sen!2sus",
  mapLink: "https://www.google.com/maps/search/?api=1&query=SkinLab+Aesthetics+DHA+Phase+4+Lahore",
  social: {
    instagram: "https://www.instagram.com/skinlabaesthetics/",
    facebook: "https://www.facebook.com/skinlabaesthetics/",
  },
  footerCopy:
    "The finest dermatological and aesthetic treatments tailored to your specific skin needs are our speciality at Skinlab Aesthetics. Our clinic provides state-of-the-art procedures to help you attain the healthy, radiant skin you deserve, from sophisticated cosmetic solutions to professional skin care.",
  consultFee: "PKR 3,000",
};

export const telHref = `tel:${site.primaryPhone.replace(/\s+/g, "")}`;

export type DoctorId = "shanze" | "hamza" | "subheen";
export const doctors: Record<DoctorId, { id: DoctorId; name: string; title: string; description: string; image: string }> = {
  shanze: {
    id: "shanze",
    name: "Dr. Shanze Shafique",
    title: "Consultant Dermatologist",
    description:
      "Dr. Shanze Shafique is a consultant dermatologist with over 11 years of experience in the diagnosis and management of a wide range of dermatologic conditions, including infectious and inflammatory skin diseases. She has particular expertise in the treatment of acne, post-inflammatory hyperpigmentation, acne scarring, and melasma. In addition to her clinical dermatology practice, Dr. Shanze Shafique has received training from the American Academy of Aesthetic Medicine. Her approach to aesthetic dermatology emphasizes subtle, natural, and harmonious results. She offers comprehensive anti-aging programs that integrate evidence-based aesthetic treatments with personalized at-home skincare regimens. Through her practice, Dr. Shanze Shafique remains dedicated to delivering individualized care that prioritizes both the health and appearance of her patients' skin.",
    image: "/images/doctors/dr-shanze.webp",
  },
  hamza: {
    id: "hamza",
    name: "Dr. Hamza",
    title: "Aesthetic Physician",
    description:
      "Dr. Hamza, a distinguished graduate of Shalamar Medical College, is a trusted name in aesthetic medicine at Skinlab Aesthetics. With a meticulous eye for detail and a commitment to excellence, he specializes in delivering sophisticated, natural-looking results tailored to each client's unique features. Dr. Hamza combines advanced medical knowledge with a deep understanding of beauty and harmony, ensuring every treatment experience is both luxurious and transformative.",
    image: "/images/doctors/dr-hamza.webp",
  },
  subheen: {
    id: "subheen",
    name: "Dr. Subheen Fatima",
    title: "Dermatologist & Aesthetic Physician",
    description:
      "Dr. Subheen Fatima is a qualified dermatologist and aesthetic physician at Skinlab Aesthetics in Lahore who combines clinical expertise with specialized training to provide personalized skin care. Her expertise spans acne treatment, hair regenerative therapies, laser procedures, injectables, skin brightening, mole removal, and customized rejuvenation plans, all delivered with an emphasis on safe, natural-looking results and patient comfort.",
    image: "/images/doctors/dr-subheen.webp",
  },
};

// GoHighLevel inbound webhooks — one per landing page (unchanged from live).
const HOOK = "https://services.leadconnectorhq.com/hooks/uq3SxqCcKKGzpX95TcVO/webhook-trigger/";
export const webhooks: Record<string, string> = {
  dermatology: HOOK + "Hi5Xy2f9mUADzvmWa4Vz",
  "warts-removal": HOOK + "yQPB5lgcUEPTn8g2ftwC",
  "genital-warts-removal": HOOK + "VvtOyieZBGqponYVI75g",
  "verruca-removal": HOOK + "gfpgrk5AOhcgCm7hVIY0",
  "mole-removal": HOOK + "4wsm5j8xXE4kSWkJYgek",
  "skin-tag-removal": HOOK + "UvSLt7Dh3yeUEgMFkMGB",
  "anal-skin-tag-removal": HOOK + "FZZl4KqtAzZTFI9Idziu",
  home: HOOK + "I6QYFdOrWmWY9WlOx8eR",
  "laser-hair-removal": HOOK + "MXH9pPo7wuOmp0objybo",
  "advanced-facials": HOOK + "1a7c39d5-8de5-4aae-be2b-cd71aebde6b0",
  "dermal-fillers": HOOK + "bZU3hpjV7W3FhGFYw1eG",
  pigmentation: HOOK + "Srs2f63qvqfnZdlwXYL0",
  "skin-whitening": HOOK + "QZYYTQmr7g6d5b1lHnmO",
  "acne-scar-removal": HOOK + "L2ck0cpB4lwyC7q8cAqH",
  "hair-loss-treatment": HOOK + "X8veDw1A3QpqkC46WopL",
  "nail-fungus": HOOK + "6XpUtgQhnZOrexRWoNi1",
};

// Form "Treatment Interest" options.
export const treatmentNames: Record<string, string> = {
  dermatology: "Dermatology Consultation",
  "warts-removal": "Warts Removal",
  "genital-warts-removal": "Genital Warts Removal",
  "verruca-removal": "Verruca Removal",
  "mole-removal": "Mole Removal",
  "skin-tag-removal": "Skin Tag Removal",
  "anal-skin-tag-removal": "Anal Skin Tag Removal",
};

// Footer labels.
export const footerLabels: Record<string, string> = {
  dermatology: "Dermatology",
  "warts-removal": "Warts",
  "genital-warts-removal": "Genital Warts",
  "verruca-removal": "Verruca",
  "mole-removal": "Moles",
  "skin-tag-removal": "Skin Tags",
  "anal-skin-tag-removal": "Anal Skin Tags",
};

// Sibling-treatment switcher shown at the top of treatment pages.
export const clusters: string[][] = [
  ["warts-removal", "verruca-removal", "genital-warts-removal"],
  ["mole-removal", "skin-tag-removal", "anal-skin-tag-removal"],
];
export const clusterLabels: Record<string, string> = {
  "warts-removal": "Warts Removal",
  "verruca-removal": "Verruca Removal",
  "genital-warts-removal": "Genital Warts Removal",
  "mole-removal": "Mole Removal",
  "skin-tag-removal": "Skin Tag Removal",
  "anal-skin-tag-removal": "Anal Skin Tag Removal",
};

const g = (f: string) => `/images/gallery/${f}.webp`;
// Foot (plantar) wart results: verruca-type warts on the soles.
const footWarts = ["warts-2-1-1", "Varuca", "varuca-2", "varuca-3"].map(g);
// Live-site results plus newer Skin Lab before/afters from skinlabaesthetics.pk.
// Only use images without third-party watermarks (some main-site images are @harleystreetmedic results).
// Each page shows only results for its own body area: wart-1 is the genital-area result, warts-1 is hands,
// and there are no anal-area results (neck/eyelid skin tags are not shown on that page).
export const gallery: Record<string, string[]> = {
  "warts-removal": [g("warts-1"), ...footWarts, g("sole-warts-2026")],
  "genital-warts-removal": [g("wart-1")],
  "verruca-removal": [...["plantar-wart-2026", "sole-warts-2026"].map(g), ...footWarts],
  "mole-removal": [...["mole", "mole-2", "mole-3", "mole-4", "mole-5", "mole-nose-2026", "mole-cheek"].map(g)],
  "skin-tag-removal": [...["tag-1", "tag-2"].map(g), g("skin-tag-face-2026")],
};

// Hero photo per page (real photos from skinlabaesthetics.pk). `pos` is the CSS object-position.
export const heroPhotos: Record<string, { src: string; alt: string; pos: string; w: number; h: number }> = {
  home: { src: "/images/photos/hydra-facial.webp", alt: "HydraFacial treatment at Skin Lab Aesthetics", pos: "45% 30%", w: 600, h: 1050 },
  dermatology: { src: "/images/photos/clinic-storefront.webp", alt: "Skin Lab Aesthetics clinic, DHA Phase 4, Lahore", pos: "50% 18%", w: 631, h: 1128 },
  "warts-removal": { src: "/images/photos/wart-exam.webp", alt: "Dermatologist examining a skin growth", pos: "50% 50%", w: 600, h: 1050 },
  // Intimate-area pages use a discreet photo of the clinic rather than a treatment photo of another body area.
  "genital-warts-removal": { src: "/images/photos/clinic-storefront.webp", alt: "Skin Lab Aesthetics clinic, DHA Phase 4, Lahore", pos: "50% 18%", w: 631, h: 1128 },
  "verruca-removal": { src: "/images/photos/verruca-exam.webp", alt: "Clinician examining a verruca on the foot", pos: "50% 60%", w: 600, h: 1050 },
  "mole-removal": { src: "/images/photos/mole-exam.webp", alt: "Mole assessment by a dermatologist", pos: "50% 35%", w: 600, h: 1050 },
  "skin-tag-removal": { src: "/images/photos/skin-tag-neck.webp", alt: "Skin tag on the neck", pos: "50% 40%", w: 600, h: 1050 },
  "anal-skin-tag-removal": { src: "/images/photos/clinic-storefront.webp", alt: "Skin Lab Aesthetics clinic, DHA Phase 4, Lahore", pos: "50% 18%", w: 631, h: 1128 },
};

// Photos for the eight treatment cards on /dermatology (same order as its whatIs.points).
export const hubCardPhotos: { src: string; pos: string }[] = [
  { src: "/images/photos/verruca-exam.webp", pos: "50% 62%" },
  { src: "/images/photos/skin-tag-neck.webp", pos: "50% 45%" },
  { src: "/images/photos/cyst.webp", pos: "50% 40%" },
  { src: "/images/photos/acne.webp", pos: "50% 30%" },
  { src: "/images/photos/mole-exam.webp", pos: "50% 30%" },
  { src: "/images/photos/hydra-facial.webp", pos: "50% 30%" },
  { src: "/images/photos/hair-loss.webp", pos: "50% 35%" },
  { src: "/images/photos/glow.webp", pos: "50% 25%" },
];

// Cut-out condition images for the "What is…" sections.
export const conditionImages: Record<string, string> = {
  "warts-removal": "/images/conditions/wart.webp",
  "genital-warts-removal": "/images/conditions/genital.webp",
  "verruca-removal": "/images/conditions/verruca.webp",
  "mole-removal": "/images/conditions/mole.webp",
  "skin-tag-removal": "/images/conditions/skintag.webp",
  "anal-skin-tag-removal": "/images/conditions/analskintag.webp",
};

export const steps = [
  { title: "Request Your Spot", body: "Fill out the secure form below with your basic details and preferred treatment interest (if known). It takes less than a minute!" },
  { title: "Schedule Your Session", body: "Our friendly team will contact you (usually via phone or WhatsApp) to find a convenient time for your consultation." },
  { title: "Meet Your Specialist (IN Clinic)", body: "During your dedicated 15-20 minute session, you'll chat directly with one of our Lahore-based skincare experts. We'll discuss your skin history, concerns, goals, and visually assess your skin." },
  { title: "Receive Personalized Recommendations", body: "Based on the consultation, we'll explain the most suitable treatment options for you, outline the expected benefits, answer your questions, and provide guidance on the next steps if you choose to proceed. There's absolutely no pressure." },
];

export const reviews = [
  { name: "Makhdoom Javed", date: "1 year ago", content: "I went for my cheeks filler at SkinLab Aesthetic which is located in Dha phase 4 I had a wonderful experience with Dr Subheen she did very good job I was little confuse before treatment after that I m totally satisfied she is amazing 100% recommended.", initials: "MJ" },
  { name: "Mirza adil", date: "1 year ago", content: "I had Exosome Therapy done by Dr. Subheen at SkinLab Aesthetics, thats was my 3 session and the results have been incredible! My hairs is growing back stronger and healthier than ever. This treatment exceeded my expectations. Dr Subheen and her skilled team done truly tremendous job. highly recommended for hair treatment.", initials: "MA" },
  { name: "Naila Noor", date: "1 year ago", content: "I've got photofacial from Skinlab aethetics and I'm fully obsessed with the outstanding results.. Staff Josphine is so professional, their hand zone and hygiene was too good, My skin is glowing and I'm fully happy.. Highly recommended", initials: "NN" },
  { name: "Fatima Arshad", date: "1 year ago", content: "I had a wonderful experience with Dr Subheen at Skinlab Aesthetics I went for their dark circle treatment i took 4 sessions and had a visible effect after the 4 sessions. My dark circles lightened by 70-80% and my lower eyelid skin improved significantly. 100% recommended", initials: "FA" },
  { name: "Umer Rafique", date: "1 year ago", content: "I've visited Skinlab twice and had a great experience both times. The staff is responsible and professional, and appointments are handled smoothly without long waiting times. The clinic maintains a clean and hygienic environment, which adds to the overall comfort. Highly recommended!", initials: "UR" },
  { name: "Mishii Mehar", date: "1 year ago", content: "Got my hydra facial which is done by staff josphine she is very knowledgeable and professional. She explain me every single step before she applying anything and amazing results Really great experience.", initials: "MM" },
  { name: "Humaira Shahbaz", date: "1 year ago", content: "Had chance to visit SkinLab Aesthetics for my full body laser hair removal this was my 3rd session great experience and i very thankful to Dr subheen Fatima and Therapist Sania. Neat and clean environment and yes they are really professional highly recommended.", initials: "HS" },
];

export const finalCta: Record<string, { lead: string; bonus: string }> = {
  home: { lead: "Ready to look and feel your best? Book your in-clinic consultation with our doctors in DHA Phase 4. We will assess your skin, talk through your goals and create a personalised treatment plan, with absolutely no pressure.", bonus: "Skin Care Guide" },
  dermatology: { lead: "Ready to transform your skin and feel your best? Book your consultation with our expert dermatology team. We'll assess your skin concerns, discuss tailored treatment options, and create a personalized plan to help you achieve healthy, radiant skin.", bonus: "Skin Care Guide" },
  "warts-removal": { lead: "Ready to remove warts and feel your best? Book your consultation with our expert team. We'll assess your needs, discuss options like laser wart removal, and provide our exclusive Wart Removal Guide packed with tips.", bonus: "Wart Removal Guide" },
  "genital-warts-removal": { lead: "Ready to remove genital warts and reclaim your confidence? Book your discreet consultation with our expert team. We'll assess your needs, discuss options like laser genital wart removal, and provide our exclusive Genital Warts Guide packed with tips.", bonus: "Genital Warts Guide" },
  "verruca-removal": { lead: "Ready to remove verrucas and walk comfortably again? Book your consultation with our expert team. We'll assess your needs, discuss options like laser verruca removal, and provide our exclusive Verruca Removal Guide packed with tips.", bonus: "Verruca Removal Guide" },
  "mole-removal": { lead: "Ready to remove unwanted moles and feel your best? Book your consultation with our expert team. We'll assess your needs, discuss options like laser mole removal, and provide our exclusive Mole Removal Guide packed with tips.", bonus: "Mole Removal Guide" },
  "skin-tag-removal": { lead: "Ready to remove skin tags and feel your best? Book your consultation with our expert team. We'll assess your needs, discuss options like laser skin tag removal, and provide our exclusive Skin Tag Guide packed with tips.", bonus: "Skin Tag Guide" },
  "anal-skin-tag-removal": { lead: "Ready to remove anal skin tags and reclaim your comfort? Book your discreet consultation with our expert team. We'll assess your needs, discuss options like laser anal skin tag removal, and provide our exclusive Skin Tag Guide packed with tips.", bonus: "Skin Tag Guide" },
};

// "How it develops" copy — the stage labels from the live site's interactive 3D model,
// now shown as a static, lightweight stage diagram.
type Stage = { label: string; title: string; text: string };
const stage = (label: string, title: string, text: string): Stage => ({ label, title, text });
export const conditionStages: Record<string, { name: string; stages: Stage[] }> = {
  general: {
    name: "Wart",
    stages: [
      stage("Stage 1", "HPV Infection", "Virus enters via micro-abrasion"),
      stage("Stage 2", "Hyperkeratosis", "Rapid excess keratin production"),
      stage("Stage 3", "Angiogenesis", "Blood supply hijacked by wart"),
      stage("Final Stage", "Established Wart", ""),
    ],
  },
  genital: {
    name: "Genital Wart",
    stages: [
      stage("Stage 1", "HPV Infection", "Virus enters via micro-abrasion"),
      stage("Stage 2", "Cluster Formation", "Rapid excess keratin production"),
      stage("Stage 3", "Vascularization", "Blood supply hijacked by wart"),
      stage("Final Stage", "Genital Warts", ""),
    ],
  },
  verruca: {
    name: "Verruca",
    stages: [
      stage("Stage 1", "HPV Infection", "Virus enters via micro-abrasion"),
      stage("Stage 2", "Inward Growth", "Pressure forces growth inward"),
      stage("Stage 3", "Vascular Thrombosis", "Black dots (clotted vessels) appear"),
      stage("Final Stage", "Plantar Verruca", ""),
    ],
  },
  skintag: {
    name: "Skin Tag",
    stages: [
      stage("Stage 1", "Skin Friction", "Collagen fibers loosen"),
      stage("Stage 2", "Friction & Rubbing", "Skin rubbing creates excess growth"),
      stage("Stage 3", "Collagen Buildup", "Loose collagen gets trapped"),
      stage("Final Stage", "Benign Fibroma", ""),
    ],
  },
};
export const stageType = (slug: string) =>
  ({ "verruca-removal": "verruca", "genital-warts-removal": "genital", "skin-tag-removal": "skintag", "anal-skin-tag-removal": "skintag" } as Record<string, string>)[slug] ?? "general";

export const abcde = [
  { letter: "A", label: "Asymmetry", desc: "One side does not match the other" },
  { letter: "B", label: "Border", desc: "Edges are ragged, notched, or blurred" },
  { letter: "C", label: "Color", desc: "Pigment is uneven (brown, black, tan, red)" },
  { letter: "D", label: "Diameter", desc: "Size is increasing or >6mm" },
  { letter: "E", label: "Evolution", desc: "Mole is changing shape, size, or color" },
];

export type Page = (typeof pagesJson)[keyof typeof pagesJson] & Record<string, any>;
export const pages = pagesJson as unknown as Record<string, Page>;
export const pageOrder = ["dermatology", "warts-removal", "genital-warts-removal", "verruca-removal", "mole-removal", "skin-tag-removal", "anal-skin-tag-removal"];

// Split copy that uses blank lines as paragraph breaks.
export const paras = (s: string | undefined) => (s ?? "").split(/\n\s*\n/).map((t) => t.trim()).filter(Boolean);
