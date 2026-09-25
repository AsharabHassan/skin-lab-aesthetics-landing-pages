// Treatment landing pages carried over from skinlabaesthetics.pk (WordPress) — copy is verbatim from the
// source pages, with only obvious errors corrected (each marked "fixed:"). Prices are the source pages' own.
// Before/afters: the source pages' images, minus two AI-generated (Google ImageFX) images and one carrying
// another clinic's @harleystreetmedic watermark. Where that left a page short, existing Skin Lab results are used.
import { site } from "./site";

export type Block =
  | { type: "intro"; id?: string; eyebrow: string; title: string; paras: string[]; list?: { k?: string; v: string }[]; image?: { src: string; alt: string }; cta?: string }
  | { type: "features"; id?: string; eyebrow: string; title: string; lead?: string; items: { title: string; text: string }[]; note?: string; quote?: string; video?: string; cta?: string; numbered?: boolean }
  | { type: "protocol"; id?: string; eyebrow: string; title: string; lead?: string; explainer?: { title: string; text: string }; steps: { title: string; text: string }[]; note?: string; offer?: { badge: string; title: string; text: string }; cta?: string }
  | { type: "treatments"; id?: string; eyebrow: string; title: string; lead?: string; items: { title: string; price?: string; paras: string[]; feels?: string; bullets?: string[]; bulletsLabel?: string; groups?: { label: string; list: string[] }[] }[]; outro?: string; cta?: string }
  | { type: "comparison"; id?: string; eyebrow: string; title: string; columns: string[]; rows: { label: string; cells: string[] }[] }
  | { type: "prices"; id?: string; eyebrow: string; title: string; lead?: string; tables: { title: string; rows: { name: string; price: string; note?: string }[] }[]; bullets?: string[]; cta?: string }
  | { type: "priceBand"; id?: string; title: string; cta: string }
  | { type: "checklist"; id?: string; eyebrow: string; title: string; lead?: string; subhead?: string; items: { k?: string; v: string }[]; closing?: string; quote?: string; cta?: string };

export type TreatmentPage = {
  slug: string;
  route: string;
  canonical: string;
  title: string;
  metaDescription: string;
  formOption: string;
  hero: { label: string; h1: string; subtitle: string; offer?: string; badges?: string[]; cta?: string };
  form: { title?: string; intro?: string };
  stats?: { value: string; label: string }[];
  gallery: { images: string[]; lead: string };
  heroPhoto: { src: string; alt: string; pos: string; w: number; h: number };
  nav: { name: string; href: string }[];
  blocks: Block[];
  steps?: { title?: string; lead?: string; items?: { title: string; body: string; tag?: string }[]; note?: string; cta?: string };
  doctors: string[];
  teamTitle?: string;
  teamLead?: string;
  faqs: { question: string; answer: string }[];
  clinicSpecialty: string;
  // Kept so shared components (schema, footer) can treat these like the other landing pages.
  faqsSectionTitle?: string;
};

const WP = site.origin;
const gal = (f: string) => `/images/gallery/${f}.webp`;
const res = (f: string) => `/images/results/${f}.webp`;
const stats = (tech: [string, string]) => [
  { value: "10,000+", label: "Successful Treatments" },
  { value: "20+ Years", label: "Of Cosmetic Dermatology Expertise" },
  { value: tech[0], label: tech[1] },
  { value: "Affordable", label: "Pricing Options" },
];
const ALL_DOCTORS = ["shanze", "hamza", "subheen"];
const FORM_INTRO = "Take the first step toward smooth and glowing skin by booking your consultation now.";
const COMMITMENT: Block = {
  type: "checklist",
  eyebrow: "Why Skin Lab",
  title: "Experience the Skin Lab Aesthetics Difference in Lahore",
  lead: "Choosing the right clinic for your aesthetic needs is crucial. At Skin Lab Aesthetics, we stand apart through our commitment to scientific integrity, personalized care, and visible results, all delivered within a professional and welcoming environment right here in Lahore.",
  subhead: "Our Commitment to You:",
  items: [
    { k: "Expertise You Can Trust", v: "Our team consists of highly trained and certified skincare practitioners with deep knowledge of skin physiology and advanced aesthetic treatments relevant to Lahore’s population." },
    { k: "Cutting-Edge Technology", v: "We invest in proven, state-of-the-art devices (like advanced IPL systems and HydraFacial MD®) to ensure safe, effective, and comfortable treatments." },
    { k: "Truly Personalized Care", v: "Your consultation isn’t just a formality. It’s a comprehensive assessment where we listen to your concerns, analyze your skin type, and co-create a treatment plan tailored specifically for you. No cookie-cutter approaches here." },
    { k: "Focus on Education", v: "We believe in empowering our clients. We’ll explain the science behind your recommended treatment, what to expect, and how to maintain your results." },
    { k: "Safety & Ethics First", v: "We adhere strictly to the highest standards of safety and hygiene, and follow all ethical marketing guidelines applicable in Pakistan. Your well-being is our top priority." },
    { k: "The Value of Your Consultation", v: "This is your opportunity to get expert advice from a professional, understand your options clearly, and ask all your questions – with absolutely no obligation to proceed with treatment." },
  ],
};

export const treatmentPages: Record<string, TreatmentPage> = {
  "laser-hair-removal": {
    slug: "laser-hair-removal",
    route: "/laser-hair-removal",
    canonical: `${WP}/permanent-laser-hair-removal/`,
    title: "Permanent Laser Hair Removal in Lahore | Soprano Titanium | Skin Lab Aesthetics",
    metaDescription: "Pain-free, skin-safe laser hair removal with Soprano Titanium™ — Lahore’s #1 choice for all skin tones. 90% hair reduction in 6-8 sessions at Skin Lab Aesthetics, DHA Phase 4.",
    formOption: "Laser Hair Removal",
    hero: {
      label: "Soprano Titanium™ Laser Hair Removal",
      h1: "Say Goodbye to Unwanted Hair Forever",
      subtitle: "Pain-free, skin-safe laser hair removal with Soprano Titanium™ — Lahore’s #1 choice for all skin tones.",
      badges: ["FDA Approved", "All Skin Tones Safe", "Virtually Painless"],
      cta: "Start Your Journey",
    },
    form: { title: "Start Your Hair-Free Journey", intro: "Book your laser consultation today" },
    stats: stats(["Gold Standard", "Soprano Titanium Laser"]),
    gallery: { images: ["laser-chest", "laser-underarm-2", "laser-legs"].map(gal), lead: "Browse our gallery of stunning before-and-after photos showcasing the natural-looking results you can expect from our expert Laser Hair treatments." },
    heroPhoto: { src: "/images/photos/laser-clinic.webp", alt: "Laser hair removal at Skin Lab Aesthetics", pos: "50% 40%", w: 400, h: 700 },
    nav: [
      { name: "Real Results", href: "#gallery" },
      { name: "Technology", href: "#technology" },
      { name: "Prices", href: "#prices" },
      { name: "Expertise", href: "#team" },
      { name: "FAQ", href: "#faq" },
    ],
    blocks: [
      {
        type: "features",
        id: "technology",
        eyebrow: "Soprano Titanium™",
        title: "The Soprano Titanium Difference: Why We Outperform Every Laser",
        lead: "Advanced triple-wavelength technology that’s pain-free, skin-safe, and delivers permanent results for all skin tones.",
        items: [
          { title: "Triple Power Trio Clustered Diode", text: "3 wavelengths (755nm/810nm/1064nm) → 100% coverage for all hair/skin types" },
          { title: "Zero Pain SHR™ Technology", text: "Pain-free ‘in-motion’ technique → No snaps or zaps" },
          { title: "Cool Comfort ICE Plus™ Cooling", text: "Sapphire-cooled comfort → Zero burns" },
          { title: "Proven Safe Gold Standard Results", text: "FDA-approved for permanent hair reduction on all skin tones" },
        ],
        video: "dJWn8xbU5xg",
      },
      {
        type: "comparison",
        eyebrow: "Laser Comparison",
        title: "How Soprano Titanium Compares",
        columns: ["Soprano Titanium (Our Choice)", "Traditional Nd:YAG Laser", "Traditional Alexandrite Laser", "IPL (Intense Pulsed Light)"],
        rows: [
          { label: "Technology", cells: ["Trio Clustered Diode (755, 810, 1064nm)", "Single Wavelength (1064nm)", "Single Wavelength (755nm)", "Broad Spectrum Light (Non-laser)"] },
          { label: "Pain Level", cells: ["Virtually Painless", "Moderate to High (\"Rubber-band snap\")", "High (\"Rubber-band snap\")", "Moderate to High"] },
          { label: "Safety for South Asian Skin", cells: ["Highest Safety. Ideal for all skin tones (I-VI). Minimal risk of burns or pigmentation.", "Safe for darker skin, but more painful and less effective on fine hair.", "High Risk for darker skin tones. Can cause burns & pigmentation.", "Very Risky. Not recommended for tanned or darker skin tones."] },
          { label: "Treatment Speed", cells: ["Fastest. Large spot size and SHR™ motion technique cover large areas quickly.", "Slower due to single-shot method.", "Slower treatment times.", "Slow and less precise."] },
          { label: "Effectiveness", cells: ["Highly Effective on all hair types (fine, thick, light, dark).", "Effective on thick, dark hair.", "Effective on light skin/dark hair only.", "Least effective; requires more sessions."] },
        ],
      },
      {
        type: "features",
        eyebrow: "Treatment Areas",
        title: "Every Area. Flawless Results.",
        items: [
          { title: "Face & Neck", text: "Upper lip, chin, sideburns, full face" },
          { title: "Upper Body", text: "Underarms, chest, back, shoulders" },
          { title: "Lower Body", text: "Bikini, Brazilian, legs, feet" },
        ],
        note: "Specialized settings calibrated for each treatment zone",
      },
      {
        type: "prices",
        id: "prices",
        eyebrow: "Transparent Pricing",
        title: "Laser Hair Removal Pricing",
        tables: [
          {
            title: "Female",
            rows: [
              { name: "Full Arms", price: "Rs 10,000" },
              { name: "Under Arms", price: "Rs 6,000" },
              { name: "Full Legs", price: "Rs 12,000" },
              { name: "Under Legs", price: "Rs 6,000" },
              { name: "Full Face", price: "Rs 5,000" },
              { name: "Full Face & Neck", price: "Rs 7,500" },
              { name: "Forehead", price: "Rs 2,500" },
              { name: "Chin", price: "Rs 2,500" },
              { name: "Side Burns", price: "Rs 2,500" },
              { name: "Cheeks", price: "Rs 2,500" },
              { name: "Jawline", price: "Rs 2,500" },
              { name: "Upper Lip", price: "Rs 1,500" },
              { name: "Upper Lip & Neck", price: "Rs 3,000" },
              { name: "Bikini", price: "Rs 6,000" },
              { name: "Face, Under Arms, Bikini", price: "Rs 15,000" },
              { name: "Full Body (1 Session)", price: "Rs 25,000", note: "Special Price · Standard price for single sessions: 40,000" },
            ],
          },
          {
            title: "Male",
            rows: [
              { name: "Full Arms", price: "Rs 15,000" },
              { name: "Under Arms", price: "Rs 9,000" },
              { name: "Full Legs", price: "Rs 18,000" },
              { name: "Full Face", price: "Rs 7,500" },
              { name: "Full Face & Neck", price: "Rs 11,250" },
              { name: "Forehead", price: "Rs 3,000" },
              { name: "Chin", price: "Rs 3,000" },
              { name: "Side Burns", price: "Rs 3,000" },
              { name: "Jawline", price: "Rs 3,000" },
              { name: "Cheeks", price: "Rs 3,000" },
              { name: "Upper Lip", price: "Rs 2,250" },
              { name: "Upper Lip & Neck", price: "Rs 4,500" },
              { name: "Under Legs", price: "Rs 9,000" },
              { name: "Face, Under Arms, Under Legs", price: "Rs 22,500" },
              { name: "Full Body", price: "Rs 30,000", note: "Special Price · Standard price for single sessions: 50,000" },
            ],
          },
        ],
        cta: "Schedule Your Consultation",
      },
    ],
    steps: {
      title: "Your 3-Step Path to Permanent Smoothness",
      lead: "From consultation to silky-smooth results, experience the gold standard in laser hair removal",
      items: [
        { title: "Consultation", body: "Skin mapping & personalized treatment plan", tag: "30-minute assessment" },
        { title: "Treatment", body: "Cooled applicator glides → 30-60 mins comfort", tag: "Pain-free sessions" },
        { title: "Results", body: "90% hair reduction in 6-8 sessions", tag: "Permanent smoothness" },
      ],
      cta: "Start Your Journey",
    },
    doctors: ALL_DOCTORS,
    teamTitle: "Meet Our Expert Dermatologist",
    faqs: [
      { question: "What does the treatment feel like?", answer: "Most clients describe the sensation as a gentle warming. Thanks to the SHR™ technology and ICE Plus™ cooling, the Soprano Titanium is significantly more comfortable than other lasers." },
      { question: "How many sessions will I need?", answer: "Most clients achieve optimal results after 6-8 sessions, though this can vary based on hair thickness, color, and the treatment area. The Soprano Titanium's efficiency often leads to more effective results in fewer sessions compared to other machines." },
      { question: "Is it truly safe for my skin tone?", answer: "Absolutely. The Soprano Titanium is FDA-approved and clinically proven to be the safest laser hair removal method for all skin types, including the darker skin tones (Fitzpatrick types IV-VI) common in South Asia. Its gradual heating method and multiple wavelengths minimize the risk of pigmentation changes." },
      { question: "Are the results permanent?", answer: "Yes. Laser hair removal provides permanent hair reduction. Once a hair follicle is destroyed, it cannot regrow. Most clients enjoy years of smooth, hair-free skin, with some requiring a minor touch-up session every few years for any new hair growth." },
      { question: "How should I prepare for my session?", answer: "Avoid sun exposure, tanning beds, and waxing/plucking the area for at least four weeks before treatment. You should shave the area 24 hours prior to your appointment." },
    ],
    clinicSpecialty: "laser hair removal",
  },

  pigmentation: {
    slug: "pigmentation",
    route: "/pigmentation",
    canonical: `${WP}/pigmentation-4/`,
    title: "Pigmentation Treatment in Lahore | LumiGlow Restore™ | Skin Lab Aesthetics",
    metaDescription: "Target stubborn dark spots & uneven tone with Skin Lab Aesthetics’ LumiGlow Restore Protocol in DHA Lahore. New client offer: signature treatment from 10,000 PKR.",
    formOption: "Pigmentation",
    hero: {
      label: "Pigmentation Treatment · DHA Lahore",
      offer: "NEW CLIENT OFFER: Signature Treatment From 10,000 PKR (Originally 20,000 PKR)",
      h1: "Reveal Your Radiance",
      // fixed: "Skin Lab Aesthetic’s" → "Skin Lab Aesthetics’"
      subtitle: "Target stubborn dark spots & uneven tone with Skin Lab Aesthetics’ LumiGlow Restore Protocol",
      badges: ["Qualified Professionals", "Safety-Focused Process", "Proven Results"],
      cta: "Book now",
    },
    form: { intro: "Take the first step toward smooth and glowing skin by booking your in-clinic consultation now." },
    gallery: { images: ["pigmentation-cheek", "pigmentation-face"].map(gal), lead: "Browse our gallery of stunning before-and-after photos showcasing the natural-looking results you can expect from our expert 3-Step Pigmentation treatments." },
    heroPhoto: { src: "/images/photos/glow.webp", alt: "Even, radiant skin after pigmentation treatment", pos: "50% 25%", w: 600, h: 1050 },
    nav: [
      { name: "Real Results", href: "#gallery" },
      { name: "Protocol", href: "#protocol" },
      { name: "Why Us", href: "#why" },
      { name: "Results", href: "#benefits" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Pigmentation Solutions",
        // fixed: "Skin Lab Aesthetic" → "Skin Lab Aesthetics"
        title: "Advanced Pigmentation Solutions at Skin Lab Aesthetics",
        paras: ["Tired of uneven skin tone, dark spots, or stubborn pigmentation? At Skin Lab Aesthetics in DHA Lahore, we understand the desire for clear, luminous skin. Our expertly crafted treatments target the root causes of hyperpigmentation, helping you achieve a visibly brighter, more even complexion. Discover the confidence that comes with flawless skin."],
      },
      {
        type: "protocol",
        id: "protocol",
        eyebrow: "Skin Lab Signature",
        title: "The Revolutionary 3-Step LumiGlow Restore™ Protocol",
        lead: "Synergistic science for maximum pigment reduction and skin transformation",
        explainer: { title: "What is the \"LumiGlow Restore\" Protocol?", text: "This comprehensive treatment plan is scientifically formulated to address various forms of hyperpigmentation, including melasma, post-inflammatory hyperpigmentation (PIH), sun spots, and uneven skin tone." },
        steps: [
          { title: "Chemical Peel", text: "Gentle exfoliation removes dead skin cells and prepares the skin for deeper treatment" },
          { title: "Microneedling", text: "Collagen boost through controlled micro-injuries stimulates natural skin regeneration" },
          { title: "Exosome Therapy", text: "Advanced regeneration technology delivers powerful healing factors for optimal results" },
        ],
        cta: "Book now",
      },
      {
        type: "checklist",
        id: "why",
        eyebrow: "Why Skin Lab",
        title: "Why Choose Skin Lab Aesthetics?",
        lead: "We combine cutting-edge technology with personalized care to deliver exceptional results that restore your skin’s natural radiance.",
        items: [
          { k: "Expertly Designed Protocols", v: "Our “LumiGlow Restore” treatment is a signature protocol developed based on scientific evidence and a deep understanding of skin physiology, especially for the skin types prevalent in DHA Lahore." },
          { k: "Qualified Professionals", v: "Our team consists of skilled and experienced aesthetic practitioners who are committed to your safety and satisfaction." },
          { k: "Personalized Approach", v: "We believe that every skin is unique. Your treatment journey begins with a thorough consultation to assess your specific concerns and tailor the protocol to your individual needs." },
          { k: "Focus on Safety", v: "We prioritize your skin’s health. Our protocols, including pre- and post-treatment care, are designed to minimize risks, particularly that of post-inflammatory hyperpigmentation." },
          { k: "Advanced Technology & Products", v: "We utilize medical-grade devices and high-quality, scientifically validated products, including carefully selected chemical peels and advanced exosome formulations." },
          // fixed: removed a duplicated trailing fragment ("exceptional results that restore your skin’s natural radiance.")
          { k: "Commitment to Results", v: "We aim to deliver visible improvements in your skin’s clarity, tone, and texture, helping you achieve your aesthetic goals." },
        ],
        quote: "Every treatment is customized to your unique skin type and concerns, ensuring optimal safety and maximum results.",
      },
      {
        type: "features",
        id: "benefits",
        eyebrow: "The Results",
        title: "Real Transformations, Real Confidence",
        lead: "Experience visible improvements that go beyond surface-level changes",
        numbered: true,
        items: [
          { title: "Brighter, Even Tone", text: "Our protocol specifically targets excess melanin production to fade stubborn dark spots, sun damage, and melasma. Through controlled exfoliation and pigment-inhibiting technology, we eliminate existing discoloration while preventing new pigment clusters from forming. You'll see visible fading of uneven patches and achieve a harmonious complexion free from blotchiness." },
          { title: "Smoother Texture", text: "The treatment stimulates your skin's natural collagen factories to rebuild its foundation from within. As fresh collagen fibers form and surface cell turnover accelerates, rough patches smooth out and pores appear refined. You'll feel noticeably softer, silkier skin with improved resilience and suppleness." },
          { title: "Reduced Fine Lines", text: "Collagen regeneration doesn't just improve texture - it naturally plumps and supports thinning skin. As new collagen networks strengthen the dermal structure, fine lines around the eyes, mouth, and forehead gradually soften. This creates a subtly firmer, more youthful appearance without altering facial expressions." },
          { title: "Luminous Glow", text: "We optimize your skin's light-reflecting properties through deep cellular renewal and hydration. By removing dull surface layers and enhancing microcirculation, we reveal your skin's natural luminosity. The result is a healthy, lit-from-within glow that transcends surface-level shine." },
        ],
      },
    ],
    doctors: [],
    faqs: [],
    clinicSpecialty: "pigmentation treatment",
  },

  "nail-fungus": {
    slug: "nail-fungus",
    route: "/nail-fungus",
    canonical: `${WP}/nail-fungus/`,
    title: "Laser Nail Fungus Removal in Lahore | Skin Lab Aesthetics",
    metaDescription: "Say goodbye to nail fungus with advanced laser therapy at Skin Lab Aesthetics, DHA Lahore. Safe, pain-free treatment for toenail and fingernail fungus, from Rs 1,500.",
    formOption: "Nail Fungus",
    hero: {
      label: "Laser Nail Fungus Removal",
      h1: "Say Goodbye to Nail Fungus with Advanced Laser Therapy",
      // fixed: "teleconsultation" → "in-clinic consultation"
      subtitle: "At Skin Lab Aesthetics, we understand the discomfort and embarrassment that nail fungus can cause. Whether it’s affecting your toenails or fingernails, our innovative laser treatments can help you regain healthy, beautiful nails. Experience the joy of healthy, smooth nails. Schedule your in-clinic consultation with our Skin Consultant and discover the path to a smoother, more confident you.",
    },
    form: { intro: FORM_INTRO },
    stats: stats(["Cutting-Edge", "Technology for Nail Fungus Removal"]),
    gallery: { images: ["nail-fungus-1", "nail-fungus-2", "nail-fungus-3"].map(gal), lead: "Browse our gallery of stunning before-and-after photos showcasing the natural-looking results you can expect from our expert Nail Fungus treatments." },
    heroPhoto: { src: "/images/photos/toe-nail-fungus.webp", alt: "Laser nail fungus treatment on the toes", pos: "50% 50%", w: 389, h: 420 },
    nav: [
      { name: "Real Results", href: "#gallery" },
      { name: "Treatment", href: "#treatments" },
      { name: "Details", href: "#details" },
      { name: "Expertise", href: "#team" },
      { name: "FAQ", href: "#faq" },
    ],
    blocks: [
      {
        type: "intro",
        id: "details",
        eyebrow: "Seeking Relief from Nail Fungus in Lahore?",
        title: "Understanding Fungal Nail Infections",
        paras: [
          "Fungal nail infections occur when microscopic organisms called dermatophytes invade the nail bed. These fungi thrive in warm, moist environments, often entering through tiny cracks in the nail or surrounding skin. This leads to various symptoms, including:",
        ],
        list: [
          { k: "Discoloration", v: "Nails can turn white, yellow, or brown" },
          { k: "Thickening and crumbling", v: "The nail becomes brittle and prone to breakage" },
          { k: "Separation from the nail bed", v: "The nail may lift or detach from the underlying tissue" },
          { k: "Foul odor", v: "In severe cases, a distinctive odor might be present" },
        ],
        image: { src: "/images/photos/nail-fungus-feet.webp", alt: "Toenails affected by fungal infection" },
      },
      {
        type: "intro",
        eyebrow: "Seeking Relief",
        title: "Seeking Relief from Nail Fungus in Lahore?",
        paras: ["If you suspect a fungal nail infection, it’s crucial to seek professional help. Traditional treatments like topical medications can be slow and ineffective, often requiring extended use with limited success rates. Laser treatment for nail fungus, on the other hand, offers a safe, effective, and lasting solution."],
        cta: "Schedule Your In Clinic Consultation",
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Skin Lab Signature",
        title: "Explore Our Signature Laser Nail Fungus Removal Treatment",
        items: [
          {
            title: "Laser Nail Fungus Removal",
            price: "Starts from Rs 1,500",
            paras: ["Our clinic offers a cutting-edge laser treatment as a safe and effective solution for both toenail and fingernail fungus. This non-invasive procedure utilizes precise laser energy to target the fungus directly, eliminating it at its source."],
            bulletsLabel: "Benefits of Laser Nail Fungus Removal:",
            bullets: [
              "Faster results: Compared to traditional methods, laser treatment provides visible improvements in weeks",
              "Pain-free and comfortable: The procedure is minimally invasive and generally well-tolerated",
              "Minimal side effects: Laser treatment boasts a high safety profile with minimal risk of side effects",
              "Improved nail appearance: Successfully treated nails can return to a healthy, clear appearance",
            ],
          },
        ],
        outro: "Don’t let nail fungus limit you. Schedule a consultation today to learn more about our advanced laser treatment and experience the freedom of healthy, beautiful nails again!",
        cta: "Get Started With a Consultation",
      },
      { type: "priceBand", title: "Nail Fungus Removal Starts from Rs1500", cta: "Schedule Your In Clinic Consultation" },
      {
        type: "intro",
        eyebrow: "Your Treatment Journey",
        title: "What to Expect During a Laser Treatment",
        paras: ["Your treatment journey includes:"],
        list: [
          { k: "Preparation", v: "Your nails will be cleaned and trimmed to enhance treatment effectiveness." },
          { k: "Laser Application", v: "The laser targets affected nails, typically causing only a warm sensation." },
          { k: "Multiple Sessions", v: "Most patients require several sessions, with your healthcare provider advising on the right number." },
          { k: "Post-Treatment Care", v: "You can return to your daily routine immediately, with no need for bandages or special care." },
        ],
        image: { src: "/images/photos/finger-nail-fungus.webp", alt: "Fungal infection on a fingernail" },
        cta: "Book in Clinic Consultation",
      },
      { ...COMMITMENT, cta: "Book Consultation" },
    ],
    doctors: ALL_DOCTORS,
    teamTitle: "Meet Our Expert Dermatologist", // fixed: "Epert"
    faqs: [
      { question: "How long does nail fungus Removal typically take?", answer: "Treatment can take several months, up to a year in some cases, to completely clear the infection. This is because the medications need time to grow out with the new, healthy nail but with laser treatment you can see results within 3 months." },
      { question: "Is laser nail fungus removal painful?", answer: "Most people find laser nail fungus removal to be relatively comfortable. The procedure typically causes only a mild warming sensation." },
      { question: "How many laser treatments will I need for toenail fungus?", answer: "The number of laser treatments needed to address toenail fungus can vary depending on factors like the severity of the infection. Our Skin Consultant will create a personalized treatment plan for you after a thorough assessment." },
      // fixed: "At Harley Street Medics" → "At Skin Lab Aesthetics"; "online consultations" → "in-clinic consultation"
      { question: "What is the cost of laser treatment for fungal nail infection in Lahore?", answer: "At Skin Lab Aesthetics, we offer competitive pricing for laser treatment of fungal nail infections and will be discussed in your in-clinic consultation" },
      { question: "How does fungal toe laser treatment work?", answer: "Fungal toe laser treatment utilizes targeted laser energy to penetrate the nail and reach the underlying fungal infection. The laser heats and destroys the fungal cells without damaging the surrounding healthy tissue." },
      { question: "When should I see a doctor about nail fungus?", answer: "If you suspect you have nail fungus, it's important to see a doctor or dermatologist for proper diagnosis and treatment. Skin Lab Aesthetics offer both toe nail fungus removal as well as Finger nail fungus removal with the latest laser technology. Early intervention can prevent the infection from worsening and ensure faster recovery. Additionally, if you have diabetes, a weakened immune system, or experience any pain or discomfort from the infected nail, seeking medical attention is crucial." },
      { question: "Can nail fungus be permanently cured?", answer: "While treatment can effectively remove the existing infection, there's always a chance of recurrence, especially with certain risk factors like weakened immunity or continued exposure to moist environments. Following preventative measures like maintaining good foot hygiene and wearing proper footwear can significantly reduce the risk of future infections." },
    ],
    clinicSpecialty: "laser nail fungus removal",
  },

  "acne-scar-removal": {
    slug: "acne-scar-removal",
    route: "/acne-scar-removal",
    canonical: `${WP}/acne-scar-removal/`,
    title: "Acne Scar Removal in Lahore | Smooth Canvas Protocol | Skin Lab Aesthetics",
    metaDescription: "Advanced acne scar removal that truly works. Specialized treatments for ice pick, boxcar, rolling scars & hyperpigmentation at Skin Lab Aesthetics Lahore. 50% off: from 15,000 PKR.",
    formOption: "Acne Scar Removal",
    hero: {
      label: "Acne Scar Removal · Lahore",
      h1: "Reclaim Your Smooth Skin",
      subtitle: "Advanced Acne Scar Removal That Truly Works. Specialized treatments for ice pick, boxcar, rolling scars & hyperpigmentation at Skin Lab Aesthetics Lahore",
      badges: ["Scar-Focused Expertise", "FDA/CE Technology", "Proven Results"],
      cta: "Book In Clinic Consultation",
    },
    form: { title: "Begin with a Professional Assessment", intro: "Start your journey to smoother skin with a personalized consultation · Secure & Confidential" },
    gallery: { images: ["acne-scar-face", "acne-scar-body"].map(gal), lead: "Browse our gallery of stunning before-and-after photos showcasing the natural-looking results you can expect from our expert 4-Step Scar treatments." },
    heroPhoto: { src: "/images/photos/acne.webp", alt: "Acne scar treatment consultation", pos: "50% 30%", w: 600, h: 1050 },
    nav: [
      { name: "Real Results", href: "#gallery" },
      { name: "Protocol", href: "#protocol" },
      { name: "Why Us", href: "#why" },
      { name: "Results", href: "#benefits" },
    ],
    blocks: [
      {
        type: "protocol",
        id: "protocol",
        eyebrow: "Skin Lab Signature",
        title: "The Revolutionary 'Smooth Canvas' Protocol",
        lead: "Comprehensive scar revision through proven combination therapy",
        offer: { badge: "Exclusive Introductory Offer", title: "50% OFF Comprehensive Scar Revision", text: "Signature Treatment From 15,000 PKR (Originally 30,000 PKR)" },
        steps: [
          { title: "Microneedling", text: "Collagen induction therapy stimulates natural healing and rebuilds damaged tissue structure" },
          { title: "Targeted Subcision", text: "Release fibrous bands beneath scars to allow natural tissue elevation and smoothing" },
          { title: "Advanced Peels", text: "Professional-grade exfoliation removes damaged layers and improves texture uniformity" },
          { title: "Recovery Serum", text: "Growth factor infusion accelerates healing and maximizes treatment effectiveness" },
        ],
        note: "Optimal results in 3-6 sessions",
        cta: "Book In Clinic Consultation",
      },
      {
        type: "features",
        id: "why",
        eyebrow: "Why Skin Lab",
        // fixed: "Skin Lab Aesthetic" → "Skin Lab Aesthetics"
        title: "Why Choose Skin Lab Aesthetics?",
        lead: "We combine cutting-edge scar revision technology with personalized care to deliver exceptional results that restore your skin’s natural smoothness.",
        items: [
          { title: "Scar-Focused Expertise", text: "Specialized training in acne scar revision techniques" },
          { title: "Combination Therapy", text: "Multi-modal approach for maximum effectiveness" },
          { title: "FDA/CE Technology", text: "Medical-grade equipment with proven safety records" },
          { title: "Lasting Results", text: "Permanent improvement with proper treatment protocol" },
          { title: "Honest Expectations", text: "Realistic timelines and transparent outcome discussions" },
          { title: "Full Support System", text: "Comprehensive aftercare and follow-up programs" },
        ],
        quote: "Every scar treatment is customized to your unique skin type and scar pattern, ensuring optimal safety and maximum improvement in texture and appearance.",
      },
      {
        type: "features",
        id: "benefits",
        eyebrow: "The Results",
        title: "Your Clear Path to Smoother Skin",
        lead: "Experience visible improvements that restore your skin’s natural texture and confidence",
        numbered: true,
        items: [
          { title: "Smoother Texture", text: "Significant reduction in scar depth and improved skin uniformity" },
          { title: "Refined Pores", text: "Minimized appearance of enlarged pores and improved skin clarity" },
          { title: "Reduced Indentations", text: "Elevation of depressed scars and smoothing of uneven surface" },
          { title: "Natural Confidence", text: "Restored skin appearance that enhances your natural beauty" },
        ],
      },
    ],
    doctors: [],
    faqs: [],
    clinicSpecialty: "acne scar revision",
  },

  "advanced-facials": {
    slug: "advanced-facials",
    route: "/advanced-facials",
    canonical: `${WP}/advanced-facials/`,
    title: "Advanced Facials in Lahore | HydraFacial, Carbon Laser & PhotoFacial | Skin Lab Aesthetics",
    metaDescription: "Unlock your most radiant skin in Lahore with HydraFacial, Carbon Laser and PhotoFacial treatments at Skin Lab Aesthetics, DHA Phase 4. Facials start from Rs5000.",
    formOption: "Hydra Facial",
    hero: {
      label: "Advanced Facials · Lahore",
      h1: "Unlock Your Most Radiant Skin in Lahore | Advanced Facials at Skin Lab Aesthetics",
      subtitle: "Discover the science of beautiful skin with our expertly delivered HydraFacial, Carbon Laser, and PhotoFacial treatments. Book your no-obligation consultation today and let our Lahore-based specialists guide you towards achieving your healthiest, most luminous complexion.",
    },
    form: { intro: FORM_INTRO },
    stats: stats(["Cutting-Edge", "Technology for Facial Glows"]),
    // The source page's two before/afters are AI-generated, so these are real Skin Lab facial-skin results.
    gallery: { images: [res("complexion-2026"), res("skin-texture")], lead: "Browse our gallery of stunning before-and-after photos showcasing the natural-looking results you can expect from our expert Facial treatments." },
    heroPhoto: { src: "/images/photos/carbon-facial.webp", alt: "Carbon laser facial at Skin Lab Aesthetics", pos: "50% 25%", w: 600, h: 1050 },
    nav: [
      { name: "Real Results", href: "#gallery" },
      { name: "Treatments", href: "#treatments" },
      { name: "Why Us", href: "#why" },
      { name: "Expertise", href: "#team" },
      { name: "FAQ", href: "#faq" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Your Skin, Your City",
        title: "Is Your Skin Reflecting the Vibrancy of Lahore?",
        paras: ["Living in a dynamic city like Lahore can be exciting, but factors like sun exposure, pollution, and a busy lifestyle can take a toll on your skin, leading to concerns like dullness, uneven texture, pigmentation, acne breakouts, or premature aging. At Skin Lab Aesthetics, we understand these challenges. We offer targeted, effective solutions designed to restore your skin’s health and reveal its natural radiance, helping you look and feel your best."],
        image: { src: "/images/photos/hydra-facial.webp", alt: "HydraFacial treatment at Skin Lab Aesthetics" },
        cta: "Schedule Your In Clinic Consultation",
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Skin Lab Signature",
        title: "Explore Our Signature Facial Treatments",
        lead: "Each treatment is carefully selected for its proven results and performed by our trained specialists here in Lahore. Find the perfect match for your skin goals below.",
        items: [
          {
            title: "HydraFacial: The Ultimate Cleanse, Hydration & Glow Experience",
            paras: ["Experience the globally celebrated HydraFacial, a unique multi-step system delivering unparalleled results. It utilizes patented Vortex-Fusion® technology to deeply cleanse pores, gently exfoliate dead skin cells, extract impurities without irritation, and simultaneously infuse potent serums rich in antioxidants, peptides, and hyaluronic acid. It’s more than just a facial; it’s a comprehensive skin health treatment."],
            feels: "Most clients describe a gentle suction sensation during cleansing and extraction, followed by cool hydration. It’s generally a relaxing and comfortable experience.",
            bulletsLabel: "Key Benefits:",
            bullets: [
              "Instantly reveals a smoother, brighter, noticeably hydrated glow.",
              "Effectively diminishes blackheads, whiteheads, and pore congestion.",
              "Deeply nourishes and plumps the skin, reducing the look of fine lines.",
              "Highly versatile – suitable for almost all skin types, tones, and ages, including sensitive skin.",
              "Achieve immediate, visible results with absolutely zero downtime – perfect before any event!",
            ],
          },
          {
            title: "Carbon Laser Facial (Hollywood Peel): Minimize Pores & Reveal Flawless Texture",
            paras: ["Discover the transformative power of the Carbon Laser Facial, often called the “Hollywood Peel” for its red-carpet-ready results. A thin layer of medical-grade carbon lotion is applied, which penetrates deep into the pores. Laser energy is then used to gently heat and vaporize the carbon particles, taking dead skin cells, excess oil, and impurities with them. This process also stimulates collagen production deep within the skin."],
            feels: "You may feel a mild warmth or slight tingling sensation as the laser passes over the skin. The vaporization of carbon creates audible snapping sounds. Discomfort is typically minimal.",
            bulletsLabel: "Key Benefits:",
            bullets: [
              "Significantly reduces enlarged pores and improves skin texture.",
              "Effectively targets stubborn acne, blackheads, and post-acne discoloration.",
              "Reduces superficial hyperpigmentation and evens out skin tone.",
              "Stimulates collagen synthesis for firmer, smoother, more youthful skin over time.",
              "A non-invasive treatment offering noticeable refinement with minimal to no downtime.",
            ],
          },
          {
            title: "PhotoFacial (IPL): Target Pigmentation, Redness & Signs of Aging",
            paras: ["Reclaim a clearer, brighter, and more youthful complexion with our advanced PhotoFacial treatment, utilizing Intense Pulsed Light (IPL) technology. This non-invasive procedure delivers precise light energy pulses that penetrate the skin and are absorbed by targeted chromophores – melanin (pigment) and hemoglobin (blood vessels). This gently heats and breaks down unwanted pigment and reduces redness, while also stimulating collagen renewal."],
            feels: "Patients often describe the sensation as a quick snap, similar to a rubber band flicking against the skin, accompanied by warmth. A cooling gel is typically applied for comfort.",
            bulletsLabel: "Key Benefits:",
            bullets: [
              "Effectively fades age spots, sun spots, freckles, and other forms of hyperpigmentation.",
              "Reduces facial redness, rosacea symptoms, and broken capillaries.",
              "Improves overall skin tone clarity and texture for a smoother appearance.",
              "Stimulates collagen production, helping to reduce fine lines and wrinkles.",
              "Achieve noticeable skin rejuvenation with minimal downtime (some temporary redness may occur).",
            ],
          },
        ],
        cta: "Get Started With a Consultation",
      },
      { type: "priceBand", title: "Facials Starts from Rs5000", cta: "Schedule Your Consultation" },
      { ...COMMITMENT, id: "why", cta: "Book a Consultation" },
    ],
    doctors: ALL_DOCTORS,
    teamTitle: "Meet Our Expert Dermatologist", // fixed: "Epert"
    faqs: [
      // fixed: "he best" → "The best"; "The free consultation" → "Your consultation" (consultations are Rs 3,000)
      { question: "Which facial treatment is best for my specific skin concern (e.g., acne, aging, dullness)?", answer: "The best treatment depends entirely on your individual skin type, concerns, and goals. HydraFacial is great for general hydration and cleansing, Carbon Laser excels at pore refinement and acne scars, while PhotoFacial targets pigmentation and redness. Your consultation is the perfect opportunity for our experts to assess your skin and recommend the most effective option for you." },
      { question: "Are these facial treatments painful? What is the downtime?", answer: "Most patients find these treatments quite tolerable. HydraFacial is generally painless. Carbon Laser may feel like mild warmth or tingling. PhotoFacial can feel like quick snaps. We prioritize your comfort. Downtime is minimal to none for HydraFacial and Carbon Laser. PhotoFacial might involve temporary redness for a few hours to a day. We'll discuss specifics during your consultation." },
      { question: "How many sessions will I need to see results?", answer: "While you might see immediate improvement after just one HydraFacial (like enhanced glow), treatments like Carbon Laser and PhotoFacial often require a series of sessions (typically 3-6, spaced weeks apart) for optimal, lasting results, especially for concerns like significant pigmentation or scarring. Your personalized plan will outline the recommended number of sessions." },
      { question: "What actually happens during the consultation?", answer: "It's a 15-20 minute session with one of our trained specialists. We'll discuss your skin concerns, goals, medical history, visually assess your skin, explain suitable treatment options, answer your questions, and outline potential costs and next steps – all with no obligation to book a treatment." },
      // fixed: "While this consultation is online" → consultations are in-clinic
      { question: "Where is Skin Lab Aesthetics located in Lahore?", answer: "Our clinic address is 85 CC-A Commercial, Sector DD, Phase 4, DHA Lahore. Your consultation takes place in-clinic, and we're conveniently located should you decide to proceed with treatments." },
      { question: "Are your practitioners qualified and certified?", answer: "Absolutely. Our team comprises highly trained and certified skincare professionals with extensive experience in aesthetic treatments. We prioritize ongoing education to stay updated on the latest techniques and safety protocols." },
    ],
    clinicSpecialty: "advanced facial",
  },

  "hair-loss-treatment": {
    slug: "hair-loss-treatment",
    route: "/hair-loss-treatment",
    canonical: `${WP}/hair-loss-treatment/`,
    title: "Hair Loss Treatment in Lahore | PRP & Exosome Therapy | Skin Lab Aesthetics",
    metaDescription: "Regrow your hair in weeks with no surgery. Non-surgical PRP and exosome hair loss treatments for men and women at Skin Lab Aesthetics, DHA Lahore, from Rs15000.",
    formOption: "Hair Loss Treatment",
    hero: {
      label: "Non-Surgical Hair Restoration",
      h1: "Regrow Your Hair in Weeks - No Surgery Needed",
      // fixed: "Book teleconsultation" → "Book your in-clinic consultation"
      subtitle: "Losing your hair can make you feel self-conscious and affect your self-esteem. But surgery isn’t the only option for restoring your locks. At Skin Lab Aesthetics, we offer two innovative hair loss treatments that can help you regain your full head of hair. Unlock the secrets to smooth, healthy skin. Book your in-clinic consultation with our dermatologist",
    },
    form: { intro: FORM_INTRO },
    stats: stats(["Cutting-Edge", "Technology for Hair Loss"]),
    gallery: { images: ["hair-loss-crown", "hair-loss-scalp", "hair-loss-parting"].map(gal), lead: "Browse our gallery of stunning before-and-after photos showcasing the natural-looking results you can expect from our expert Hair Loss treatments." },
    heroPhoto: { src: "/images/photos/hair-scalp-exam.webp", alt: "Dermatologist examining the scalp for hair loss", pos: "30% 40%", w: 1440, h: 743 },
    nav: [
      { name: "Real Results", href: "#gallery" },
      { name: "Treatments", href: "#treatments" },
      { name: "Why Us", href: "#why" },
      { name: "Expertise", href: "#team" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Hair Loss Treatment in Lahore",
        title: "Don't Let Hair Loss Dim Your Shine Lahore?",
        paras: ["Hair loss doesn’t have to define you. Schedule a consultation today and discover how our non-surgical hair restoration treatments can help you achieve the thicker, healthier, and more voluminous hair you deserve. Unlock the secrets to smooth, healthy skin. Book your consultation with our dermatologist today"],
        image: { src: "/images/photos/hair-loss.webp", alt: "Hair loss treatment at Skin Lab Aesthetics" },
        cta: "Schedule Your Consultation",
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Skin Lab Signature",
        title: "Explore Our Signature Exosome Therapy",
        lead: "Each treatment is carefully selected for its proven results and performed by our trained specialists here in Lahore. Find the perfect match for your skin goals below.",
        items: [
          {
            title: "PRP (Platelet-rich plasma):",
            paras: ["PRP (Platelet-rich plasma) treatment involves concentrating a patient’s own platelets to promote healing and regeneration in various tissues, often used for injuries, pain management, and even aesthetic applications like hair growth and skin rejuvenation"],
          },
        ],
        cta: "Get Started With a Consultation",
      },
      { type: "priceBand", title: "Hair Loss Treatment Starts from Rs15000", cta: "Schedule Your In Clinic Consultation" },
      {
        type: "checklist",
        id: "why",
        eyebrow: "Non-Surgical",
        title: "Why Choose Our Non-Surgical Hair Treatments in Lahore",
        items: [
          { v: "Leverage your body’s natural healing abilities" },
          { v: "Non-invasive, minimal side effects" },
          { v: "Customized for your unique needs" },
          { v: "Boost hair growth at the root cause" },
          { v: "Effective for both men and women" },
        ],
        closing: "Exosome therapy can treat various types of hair loss problems and is suitable for both men and women. We customize your dosage and frequency based on your individual needs. Many patients see a noticeable improvement after 4-6 sessions.",
        cta: "Book Consultation",
      },
    ],
    doctors: ALL_DOCTORS,
    teamTitle: "Meet Our Expert Dermatologist", // fixed: "Epert"
    faqs: [],
    clinicSpecialty: "non-surgical hair restoration",
  },

  "skin-whitening": {
    slug: "skin-whitening",
    route: "/skin-whitening",
    canonical: `${WP}/skin-whitening-2/`,
    title: "Skin Whitening in Lahore | Glow PhotoFacial & Glutathione | Skin Lab Aesthetics",
    metaDescription: "Achieve visibly lighter, even-toned skin with Skin Lab Aesthetics. Advanced, medical-grade skin whitening solutions supervised by certified dermatologists in Lahore, from Rs16500.",
    formOption: "Skin Whitening",
    hero: {
      label: "Skin Whitening · Lahore",
      h1: "Reveal Your Radiant Glow: Safe & Effective Skin Whitening in Lahore",
      subtitle: "Achieve visibly lighter, even-toned skin with Skin Lab Aesthetics. We offer advanced, medical-grade skin whitening solutions supervised by certified dermatologists. Our internationally recognized protocols are adapted for Pakistani skin types, targeting hyperpigmentation, sun damage, and dullness safely and effectively.",
    },
    form: { intro: "Take the first step toward smooth and glowing skin by booking your In Clinic consultation now." },
    stats: stats(["Cutting-Edge", "Technology for Skin Whitening"]),
    // One source before/after is AI-generated; it is replaced with a real Skin Lab complexion result.
    gallery: { images: [gal("whitening-texture"), res("complexion-2026")], lead: "Browse our gallery of stunning before-and-after photos showcasing the natural-looking results you can expect from our expert Skin Whitening treatments." },
    heroPhoto: { src: "/images/photos/radiant-skin.webp", alt: "Radiant, even-toned skin", pos: "30% 30%", w: 1440, h: 763 },
    nav: [
      { name: "Real Results", href: "#gallery" },
      { name: "Treatments", href: "#treatments" },
      { name: "Why Us", href: "#why" },
      { name: "Expertise", href: "#team" },
      { name: "FAQ", href: "#faq" },
    ],
    blocks: [
      {
        type: "intro",
        eyebrow: "Uneven Skin Tone",
        title: "Tired of Uneven Skin Tone & Stubborn Dark Spots?",
        paras: ["Many factors, from sun exposure to genetics, can lead to unwanted pigmentation and a dull complexion. Finding safe and truly effective solutions specifically suited for Pakistani skin can be challenging. Skin Lab Aesthetics offers the solution: Medically proven treatments combining advanced technology with potent, safe ingredients, all under expert dermatological care."],
        image: { src: "/images/photos/glow.webp", alt: "Even, glowing skin" },
        cta: "Schedule Your In Clinic Consultation",
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Skin Lab Signature",
        title: "Explore Our Signature Treatments",
        lead: "Experience Lahore’s most advanced skin brightening protocols, tailored to your unique needs:",
        items: [
          {
            title: "The Glow PhotoFacial System",
            paras: ["(NIR PhotoFacial + Medical Glutathione Peel)", "Transform your complexion with our cutting-edge combination therapy. This 3-stage professional whitening process targets:"],
            groups: [
              { label: "Targets", list: ["Stubborn hyperpigmentation", "Uneven skin texture", "Sun damage & age spots", "Dull, tired-looking complexion"] },
              { label: "How it Works", list: [
                "NIR (Near Infrared) Technology: Penetrates deep into dermal layers, stimulating collagen and targeting melanin clusters that cause dark spots.",
                "Glutathione Antioxidant Peel: A medical-grade formulation with 98% pure glutathione inhibits the enzyme responsible for melanin production (tyrosinase).",
                "Post-Treatment Nourishment: We infuse your skin with a customized serum containing Vitamin C and Alpha Arbutin to enhance and lock in your results.",
              ] },
              { label: "Visible Results", list: ["Expect skin 2-3 shades lighter after the first session.", "Achieve up to 50% reduction in pigmentation.", "Notice a beautiful glow within 24 hours."] },
            ],
          },
          {
            title: "Full Body Whitening Injections",
            paras: ["(WHO-Compliant Glutathione Protocol)", "Achieve a naturally brighter and even skin tone from head to toe with our safe and effective IV Glutathione therapy."],
            bulletsLabel: "Key Features:",
            bullets: [
              "Pharmaceutical-Grade Glutathione: Ensuring purity and potency.",
              "Safe IV Administration: Performed by licensed and experienced nurses.",
              "Personalized Dosage: Calculated by dermatologists based on your specific needs.",
              "Safety First: Real-time vital monitoring during every session.",
            ],
          },
        ],
        cta: "Get Started With a Consultation",
      },
      { type: "priceBand", title: "Skin Whitening Starts from Rs16500", cta: "Schedule Your In Clinic Consultation" },
      {
        type: "features",
        id: "why",
        eyebrow: "Why Skin Lab",
        title: "Why Choose Skin Lab Aesthetics?",
        items: [
          { title: "Internationally Recognized Standards", text: "We adopt protocols certified by the IACD (International Academy of Cosmetic Dermatology) and utilize equipment meeting stringent EU medical device regulations. Our injectable treatments strictly follow WHO safety guidelines, ensuring international standards of care adapted perfectly for local Pakistani skin types." },
          { title: "Expert-Led Care", text: "Your treatments are administered only by certified dermatologists and aesthetic medicine specialists trained in leading techniques (including South Korea). Our team also includes on-staff nutritionists for holistic care advice." },
          { title: "Science-Backed Results", text: "We rely on clinically proven technologies like NIR and pharmaceutical-grade ingredients like Glutathione. Our methods are designed for measurable improvements and optimal safety." },
        ],
        cta: "Book In Clinic Consultation",
      },
    ],
    doctors: ALL_DOCTORS,
    teamTitle: "Meet Our Expert Dermatologist", // fixed: "Epert"
    faqs: [
      { question: "How long do the skin whitening results last?", answer: "With proper maintenance and sun protection, our combination therapies can provide lasting lightening of the treated areas. We typically recommend annual touch-up sessions to maintain your desired radiance." },
      { question: "Are these treatments safe for sensitive skin?", answer: "Our NIR technology used in the Glow PhotoFacial is non-abrasive and generally well-tolerated by all skin types, including sensitive skin. We always conduct a consultation and can perform pre-treatment patch tests if needed to ensure compatibility and safety." },
    ],
    clinicSpecialty: "skin whitening",
  },

  "dermal-fillers": {
    slug: "dermal-fillers",
    route: "/dermal-fillers",
    canonical: `${WP}/dermal-fillers/`,
    title: "Dermal Fillers in Lahore | From PKR 20,000 | Skin Lab Aesthetics",
    metaDescription: "Rediscover your youthful glow with natural-looking hyaluronic acid dermal fillers at Skin Lab Aesthetics, DHA Lahore — lips, cheeks, under-eyes, jawline and more, starting from just PKR 20,000.",
    formOption: "Dermal Fillers",
    hero: {
      label: "Hyaluronic Acid Dermal Fillers",
      h1: "Rediscover Your Youthful Glow. London Expertise, Lahore Prices.",
      subtitle: "Look and feel your absolute best. Our Harley Street-trained aestheticians deliver stunning, natural-looking results with dermal fillers, starting from just PKR 20,000.",
      badges: [
        "Transparent Pricing: No hidden costs, just honest value.",
        "Harley Street Trained: World-class expertise, right here in Lahore.",
        "Natural-Looking Results: We enhance your beauty, not change it.",
        "FDA-Approved Fillers: Your safety is our highest priority.",
      ],
    },
    form: { intro: "Take the first step toward smooth and glowing skin by booking your in-clinic consultation now." },
    stats: stats(["Cutting-Edge", "Technology for Dermal Fillers"]), // fixed: "FIllers"
    gallery: { images: ["lip-filler", "anti-wrinkle"].map(gal), lead: "Browse our gallery of stunning before-and-after photos showcasing the natural-looking results you can expect from our expert Dermal Fillers treatments." },
    heroPhoto: { src: "/images/photos/lip-filler-stock.webp", alt: "Lip filler treatment", pos: "50% 40%", w: 600, h: 1050 },
    nav: [
      { name: "Real Results", href: "#gallery" },
      { name: "Treatments", href: "#treatments" },
      { name: "Prices", href: "#prices" },
      { name: "Expertise", href: "#team" },
    ],
    blocks: [
      {
        type: "features",
        eyebrow: "Signs of Ageing",
        title: "Are Fine Lines and Lost Volume Hiding the Real You?",
        lead: "As we age, our skin naturally loses collagen and hyaluronic acid, the building blocks of a firm, youthful complexion. This can lead to:",
        items: [
          { title: "Tired-looking eyes", text: "no matter how much you sleep" },
          { title: "Deepening smile lines", text: "(nasolabial folds) that make you look older than you feel." },
          { title: "Hollowed cheeks", text: "that create a sunken, aged appearance" },
          { title: "Softening jawline", text: "the appearance of jowls" },
          { title: "Thinning lips", text: "that have lost their natural shape and volume" },
        ],
        quote: "It’s not about vanity; it’s about feeling confident in your own skin. Imagine looking in the mirror and seeing a face that reflects your inner energy and spirit. That’s the confidence we restore.",
      },
      {
        type: "protocol",
        eyebrow: "How Fillers Work",
        title: "The Secret to Ageless Skin: Hyaluronic Acid Fillers", // fixed: stray quote mark
        lead: "Dermal fillers are not about creating a “fake” or “frozen” look. At Skin Lab Aesthetics, we use them as an art form. Our fillers are injectable treatments made from Hyaluronic Acid (HA), a substance your body produces naturally. How do they work? We strategically and precisely place the gel-like HA filler into specific areas of your skin. This instantly:",
        steps: [
          { title: "Restores Lost Volume", text: "Plumping up hollow areas and lifting the skin." },
          { title: "Smooths Out Wrinkles", text: "Literally “filling in” deep-set lines and folds from beneath." },
          { title: "Contours & Defines", text: "Sculpting and enhancing your natural features for better balance and symmetry." },
        ],
        note: "The result is a subtle, natural-looking lift and rejuvenation that can take years off your appearance in a single session",
      },
      {
        type: "treatments",
        id: "treatments",
        eyebrow: "Tailored To You",
        title: "Customized Treatments for Your Unique Beauty",
        lead: "Every face is unique. We don’t believe in a one-size-fits-all approach. During your consultation, we will design a personalized treatment plan to achieve your specific aesthetic goals.",
        items: [
          { title: "Under-Eye & Tear Trough Fillers", price: "Starting from PKR 25,000", paras: ["Refresh Tired Eyes: Say goodbye to dark circles and hollows that make you look perpetually exhausted. Our delicate tear trough treatment restores volume to the under-eye area, creating a smoother, brighter, and more rested appearance instantly."] },
          // fixed: double full stop
          { title: "Cheek Fillers", price: "Starting from PKR 20,000 per syringe", paras: ["Restore Youthful Volume: High cheekbones are a hallmark of youth. Our cheek filler treatment lifts and contours the mid-face, correcting age-related volume loss and providing a subtle, beautiful lift to the entire face."] },
          { title: "Jawline & Jowl Fillers", price: "Starting from PKR 25,000", paras: ["Define and Sculpt Your Jawline: Get the sharp, defined jawline you’ve always wanted. Our jawline contouring treatment tightens the skin, reduces the appearance of jowls, and creates a more youthful, elegant profile."] },
          { title: "Non-Surgical Nose Reshaping", price: "Starting from PKR 30,000", paras: ["The ‘Liquid Rhinoplasty’: Not ready for surgery? Our nose filler treatment can smooth out bumps on the bridge, lift the nasal tip, and improve the overall symmetry of your nose in under 30 minutes, with no downtime."] },
          { title: "Lip Fillers", price: "Starting from PKR 20,000", paras: ["Perfect Your Pout: Whether you desire subtle definition or a noticeable boost in volume, our lip filler treatments are tailored to you. We enhance your natural lip shape, correct asymmetry, and smooth out fine lines for beautifully hydrated lips."] },
          { title: "Marionette Line Fillers (Anti-Wrinkle)", price: "Starting from PKR 20,000", paras: ["Erase Sad Lines: Marionette lines, which run from the corners of the mouth downwards, can create a sad or angry look. We use precision-placed fillers to soften these folds, restoring a happier, more approachable expression"] },
        ],
      },
      {
        type: "prices",
        id: "prices",
        eyebrow: "Transparent Pricing",
        title: "Affordable Excellence. No Surprises.",
        lead: "We believe world-class aesthetic treatments should be accessible. Our transparent pricing ensures you know exactly what to expect.",
        tables: [],
        bullets: [
          "Dermal Fillers: Starting from PKR 20,000 per syringe.",
          "Final Price: Determined by the type of filler and amount required, which will be confirmed during your consultation.",
        ],
        cta: "Schedule Your Consultation",
      },
    ],
    steps: {
      title: "A Simple, Comfortable, and Rewarding Process",
      lead: "Ready to take the first step? Booking and attending your In Clinic consultation is straightforward:",
      items: [{ title: "Your Consultation", body: "You’ll meet with our Harley Street-trained expert to discuss your goals. We’ll assess your facial anatomy and design a personalized treatment plan, explaining the process and costs transparently." }],
    },
    doctors: ALL_DOCTORS,
    teamTitle: "Meet Your Aestheticians: The Harley Street Standard of Care",
    teamLead: "Your face deserves the best. At Skin Lab Aesthetics, our clinical team is led by experts who have undergone rigorous training and certification through our exclusive collaboration with Harley Street, London’s most prestigious medical district. This means you receive care that meets the highest international standards of safety, technique, and artistry.",
    faqs: [],
    clinicSpecialty: "dermal filler",
  },
};

export const treatmentOrder = ["laser-hair-removal", "advanced-facials", "dermal-fillers", "pigmentation", "skin-whitening", "acne-scar-removal", "hair-loss-treatment", "nail-fungus"];

// The three skin pages link to each other at the top, as on the source site.
export const skinCluster = ["skin-whitening", "acne-scar-removal", "pigmentation"];
export const shortLabels: Record<string, string> = {
  "laser-hair-removal": "Laser Hair Removal",
  "advanced-facials": "Advanced Facials",
  "dermal-fillers": "Dermal Fillers",
  pigmentation: "Pigmentation",
  "skin-whitening": "Skin Whitening",
  "acne-scar-removal": "Acne Scar Removal",
  "hair-loss-treatment": "Hair Loss",
  "nail-fungus": "Nail Fungus",
};

// The source pages' Google reviews widget: "Excellent, based on 21 reviews", showing these eight.
export const reviewSummary = "Excellent • Based on 21 Google Reviews";
export const extraReview = { name: "Shahbaz Amin", date: "1 year ago", content: "I had took my 4th session of whitening drips, i am so satisfied and after 4th session i feel glow on my body. very cooperative doctors especially Dr Hamza he guide me very well Great experience 100% recommended....", initials: "SA" };

// Treatment Interest options on each page's form (the source forms' lists, de-duplicated).
const COMMON_OPTIONS = ["Hydra Facial", "Carbon Laser Facial", "Photo Facial", "Laser Hair Removal", "Hair Loss Treatment", "Skin Whitening", "Acne", "Dark Circles"];
export const formOptions = (p: TreatmentPage) => [...new Set([p.formOption, ...COMMON_OPTIONS, "Consultation"])];
