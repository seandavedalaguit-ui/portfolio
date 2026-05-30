# Portfolio (bryllim.com-style)

A clean, section-based portfolio built with **Next.js 14**, **Tailwind CSS**, and **shadcn-style** UI components. Structure and layout are inspired by [bryllim.com](https://bryllim.com/).

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn-style components**: Button, Card, Badge (CVA + Radix Slot where needed)
- **Lucide React** for icons

## Get started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit **`src/data/site.ts`** to set:

- Name, location, tagline
- Email, Calendly, blog, social links
- Hero badges
- About copy
- Experience timeline
- Tech stack (frontend / backend / devops)
- Projects, certifications, recommendations
- Memberships and footer

Sections are built from this data, so you can keep the layout and only change content.

## Structure

- `src/app/` – layout and pages (home, tech-stack, projects, certifications)
- `src/components/sections/` – Hero, About, Experience, TechStack, Projects, Certifications, Recommendations, Gallery, Footer
- `src/components/ui/` – Button, Card, Badge (shadcn-style)
- `src/data/site.ts` – single place for all copy and links

## Build

```bash
npm run build
npm start
```
