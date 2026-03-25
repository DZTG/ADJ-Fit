# Alex Dea Jue — Fitness Coaching Website

A dark, minimal single-page fitness coaching website for Alex Dea Jue. Built as a POC with placeholder content.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. No environment variables are required for the POC.
4. Click **Deploy** — Vercel auto-detects Next.js.

---

## Swapping In Real Content

### Text & Copy
All copy lives directly in the component files under `/components/`. Each section is self-contained:

| Section | File |
|---|---|
| Navbar | `components/Navbar.tsx` |
| Hero | `components/Hero.tsx` |
| About | `components/About.tsx` |
| Services | `components/Services.tsx` |
| Testimonials | `components/Testimonials.tsx` |
| Apply / Contact | `components/Apply.tsx` |
| Footer | `components/Footer.tsx` |

### Images
All images currently use Unsplash placeholder URLs. Replace the `src` props on `<img>` tags with your own hosted image URLs (or place images in `/public` and use `/filename.jpg`).

**Hero background:** `components/Hero.tsx` — `backgroundImage` style on the overlay `div`.
**About photo:** `components/About.tsx` — `<img src="...">` in the left column.
**Testimonial avatars:** `components/Testimonials.tsx` — `avatar` field in the `testimonials` array.
**Before/After:** `components/Testimonials.tsx` — the two `<img>` tags in the before/after block.

### Contact Form (Formspree)
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy your form ID (e.g. `xpwzlrqk`).
3. In `components/Apply.tsx`, replace the placeholder URL:
   ```ts
   const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
   ```

### Stats
In `components/About.tsx`, update the `stats` array:
```ts
const stats = [
  { value: "150+", label: "Clients Coached" },
  { value: "5",    label: "Years Experience" },
  { value: "98%",  label: "Client Retention" },
];
```

### Social Links
In `components/Footer.tsx`, update the `href` values in the `socials` array to point to Alex's real profiles.

### Accent Color
The gold accent is `#c9a84c` (lighter: `#e4c06e`). To change it globally, find-and-replace those hex values across the `/components` and `app/globals.css` files.

---

## Project Structure

```
app/
  globals.css       # Global styles, CSS custom properties
  layout.tsx        # Root layout, Inter font, metadata
  page.tsx          # Assembles all sections

components/
  Navbar.tsx        # Sticky glass navbar + mobile menu
  Hero.tsx          # Full-viewport hero with background image
  About.tsx         # Two-column about section + stats
  Services.tsx      # Three service cards
  Testimonials.tsx  # Testimonial cards + before/after
  Apply.tsx         # Application form (Formspree)
  Footer.tsx        # One-line footer + social icons
```
