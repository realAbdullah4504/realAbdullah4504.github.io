# Portfolio Website Architecture

## Overview
Single-page portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS v4. Data is sourced from a centralized `master-resume.json` file and rendered through modular section components.

## Tech Stack
- **Framework:** React 19
- **Language:** TypeScript ~6.0.2
- **Build Tool:** Vite 8 with `@vitejs/plugin-react`
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with CSS-based theme tokens
- **Icons:** Lucide React
- **Animations:** Motion (formerly Framer Motion)
- **Linting:** ESLint 10 with TypeScript ESLint, React Hooks, React Refresh
- **Font:** Inter (Google Fonts)

## Theme / Design System
Defined in `src/index.css` using Tailwind CSS v4 `@theme` directive.

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#0f172a` | Primary page background |
| `surface` | `#1e293b` | Alternating section backgrounds |
| `card` | `#1f2937` | Card/container backgrounds |
| `text-primary` | `#f8fafc` | Main headings and body text |
| `text-secondary` | `#cbd5e1` | Supporting text and descriptions |
| `text-muted` | `#94a3b8` | Subtle labels and metadata |
| `accent` | `#3b82f6` | Blue accent for CTAs, timelines, highlights |
| `success` | `#22c55e` | Success states |
| `warning` | `#f59e0b` | Warning states |
| `danger` | `#ef4444` | Danger states |
| `border` | `#334155` | Card and element borders |

### Typography
- **Font Family:** Inter (`var(--font-sans)`)
- **Headings:** `font-bold`
- **Body:** `font-normal`
- **Muted/Labels:** `font-medium`
- **Heading scale:** `text-4xl` for section titles, `text-5xl` / `text-7xl` for hero name

### Spacing
- **Sections:** `py-24`
- **Containers:** `px-6`
- **Grids:** `gap-6` to `gap-8`
- **Buttons:** `gap-4`

### Border Radius
- Consistent use of `rounded-2xl` for cards and containers
- `rounded-full` for badges and pills
- `rounded-xl` for smaller elements

### Shadows
- Subtle shadows only: `shadow-sm`, `shadow-md`, `shadow-lg`
- No heavy glow effects

### Buttons
- **Primary:** `bg-accent` / `text-white` / `rounded-2xl` / hover darker
- **Secondary:** `bg-transparent` / `border-border` / `text-text-secondary` / hover `bg-surface`

## File Architecture

```
portfolio-website/
├── index.html                     # Entry HTML with Inter font
├── package.json                   # Dependencies and scripts
├── vite.config.ts                 # Vite + React + Tailwind plugins
├── tailwind.config.js             # Tailwind v4 content paths
├── tsconfig.json                  # Project references
├── tsconfig.app.json              # App TS config
├── tsconfig.node.json             # Node/Vite config TS
├── eslint.config.js               # ESLint flat config
├── src/
│   ├── main.tsx                   # React mount
│   ├── App.tsx                    # Root layout: dark bg + section flow
│   ├── index.css                  # Global theme tokens + base styles
│   ├── layout/
│   │   ├── Navbar/
│   │   │   ├── index.tsx          # Sticky header + mobile menu + smooth scroll
│   │   │   ├── NavLinks.tsx       # Desktop navigation with active state
│   │   │   ├── MobileMenu.tsx     # Full-screen mobile overlay
│   │   │   └── ResumeButton.tsx   # Conditional CV download link
│   │   │
│   │   └── Footer/
│   │       ├── index.tsx          # Footer layout + back-to-top
│   │       ├── FooterLinks.tsx    # Quick links column
│   │       ├── SocialLinks.tsx    # Social profiles column
│   │       └── ContactInfo.tsx    # Email/phone/location column
│   │
│   ├── utils/
│   │   ├── animations.tsx         # FadeInSection, HoverCard, AnimatedButton
│   │   └── animation-variants.ts  # fadeInUp, cardHover, buttonHover variants
│   │
│   └── components/
│       ├── Hero/                  # Landing section
│       │   ├── index.tsx          # Section layout + CTA handlers
│       │   ├── HeroHeader.tsx     # Name + professional title
│       │   ├── HeroBadges.tsx     # Experience + location pills
│       │   ├── HeroPositioning.tsx # Positioning statement
│       │   ├── SocialLinks.tsx    # LinkedIn, GitHub, Portfolio, Email
│       │   └── CTAButtons.tsx     # Primary/secondary actions
│       │
│       ├── About/                 # Background section
│       │   ├── index.tsx
│       │   ├── ProfessionalSummary.tsx
│       │   ├── EngineeringAchievements.tsx
│       │   ├── Education.tsx
│       │   └── Certifications.tsx
│       │
│       ├── Capabilities/          # Services / capabilities grid
│       │   ├── index.tsx
│       │   ├── CapabilityCard.tsx
│       │   ├── ProjectTags.tsx
│       │   └── TechnologyTags.tsx
│       │
│       ├── CaseStudies/           # Featured projects
│       │   ├── index.tsx
│       │   ├── ProjectCard.tsx
│       │   ├── ComplexityBadge.tsx
│       │   ├── OutcomesList.tsx
│       │   └── TechStackTags.tsx
│       │
│       ├── Skills/                # Technical skills grid
│       │   ├── index.tsx
│       │   ├── SkillCategory.tsx
│       │   └── SkillTags.tsx
│       │
│       ├── Experience/            # Timeline
│       │   ├── index.tsx
│       │   ├── RoleCard.tsx
│       │   ├── ResponsibilitiesList.tsx
│       │   ├── FlagshipProjects.tsx
│       │   └── TechnologyTags.tsx
│       │
│       └── Contact/               # Contact CTAs
│           └── CTAButtons.tsx
```

## Section Breakdown

| Section | Component | Background | Purpose |
|---------|-----------|-----------|---------|
| Hero | `Hero` | `bg-gradient-to-b from-background to-surface` | Name, title, badges, positioning, socials, CTAs |
| About | `About` | `bg-surface` | Professional summary, achievements, education, certifications |
| Capabilities | `Capabilities` | `bg-background` | Engineering capability cards with supporting projects and tech |
| Case Studies | `CaseStudies` | `bg-surface` | Featured projects filtered by `portfolioPriority <= 4` |
| Skills | `Skills` | `bg-background` | Technical skills grouped by category |
| Experience | `Experience` | `bg-background` | Timeline of professional experience |
| Contact | `Contact` | `bg-surface` | Contact details, social profiles, CTA buttons |

## Data Flow
- All components import `master-resume.json` directly from `../../../../homepage/portfolio/master-resume.json`
- Data is treated as the single source of truth
- No backend or API layer; all content is static
- Components are purely presentational

## Styling Conventions
- Use semantic theme tokens (`bg-background`, `text-text-primary`, `border-border`, etc.) instead of raw Tailwind colors
- Cards use `bg-card border border-border rounded-2xl`
- Subtle hover states: `hover:shadow-md hover:-translate-y-1`
- Focus rings use `focus-visible:ring-accent`
- Alternating section backgrounds (`background` / `surface`) for visual rhythm

## Animations
Subtle motion courtesy of Motion. Philosophy: enhance usability without becoming the focus.

### Principles
- 70% clean typography and whitespace
- 20% thoughtful layout and visual hierarchy
- 10% subtle motion

### Patterns Used
- **FadeInSection** — Sections fade up (`opacity: 0 → 1`, `y: 16 → 0`) when they enter the viewport. Applied to all major sections.
- **Stagger** — Grid items in Capabilities, Case Studies, Skills, and Experience stagger in with `0.05s` delay increments.
- **HoverCard** — Cards gently scale to `1.02` and lift `4px` on hover.
- **Smooth Scrolling** — Navbar links use `scrollIntoView({ behavior: 'smooth' })`.
- **Nav Transitions** — Navigation links use Tailwind `transition-colors duration-200` for smooth color shifts.

### Avoided
- No bouncing, floating, or parallax
- No animated backgrounds or particles
- No long entrance animations

## Scripts
- `npm run dev` - Development server
- `npm run build` - TypeScript check + Vite build
- `npm run lint` - ESLint
- `npm run preview` - Preview production build
