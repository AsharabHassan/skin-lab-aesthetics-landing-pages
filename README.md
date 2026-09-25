# Skin Lab Aesthetics — landing pages (redesign)

Static Astro rebuild of `lp.skinlabaesthetics.pk`: the 7 original landing pages (same URLs, copy, GoHighLevel
webhooks and GTM container `GTM-P6MWZWW9`) plus a new home page at `/` targeting "best aesthetic clinic Lahore".

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # outputs static site to dist/
npm run preview   # serve dist/ locally
```

## Deploy (Netlify)

Connect this folder (or drag `dist/` into Netlify). `netlify.toml` sets the build command, sends
unknown paths to `/` (the home page), and adds cache headers.

## Where things live

| What | File |
|---|---|
| Page copy (7 landing pages) | `src/data/pages.json` |
| Home page copy, prices, treatments, FAQs | `src/data/home.ts` |
| Clinic details, doctors, reviews, webhooks, gallery | `src/data/site.ts` |
| Page template / section order | `src/pages/[slug].astro` |
| Colours, fonts, buttons | `src/styles/global.css` |
| Booking form (webhook POST + `form_submit` dataLayer event) | `src/components/BookingForm.astro` |
| Google structured data (JSON-LD) | `src/lib/schema.ts` |

## Tracking

- `gtm.formSubmit` still fires on the form, so the existing Google Ads conversion tags keep working.
- `form_submit` is pushed only after GoHighLevel accepts the lead.
- New: `whatsapp_click` and `phone_click` dataLayer events (with `linkLocation`) on every WhatsApp/call link —
  add GTM triggers for them to start counting these leads.

## Home page — to do before launch

- **Webhook:** the home form posts to the *dermatology* GoHighLevel webhook with `slug: "home"`. Create a dedicated
  webhook in GoHighLevel and set `webhooks.home` in `src/data/site.ts`.
- **Google Ads conversion:** GTM has no conversion tag for `https://lp.skinlabaesthetics.pk/`. Add one (the
  `form_submit` dataLayer event fires only after a successful submission — the best trigger).
- **Prices** come from skinlabaesthetics.pk/pricing — keep `src/data/home.ts` in sync when prices change.
