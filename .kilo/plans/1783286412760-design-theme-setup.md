# Portfolio Website Theme Implementation

## Goal
Apply the user's specified design theme to the portfolio website using Tailwind CSS v4 CSS-based configuration.

## Design Theme

**Style:**
- Modern, Minimal, Professional, Enterprise quality
- Content-first, Technical, Elegant

**Color Palette (chosen: Option A - Blue accent):**
- Background Primary: `#0F172A` (Slate 900)
- Surface: `#1E293B` (Slate 800)
- Card: `#1F2937` (Gray 800)
- Text Primary: `#F8FAFC` (Slate 50)
- Text Secondary: `#CBD5E1` (Slate 300)
- Text Muted: `#94A3B8` (Slate 400)
- **Accent: `#3B82F6` (Blue 500)** - Option A chosen per user recommendation
- Success: `#22C55E`
- Warning: `#F59E0B`
- Danger: `#EF4444`
- Border: `#334155` (Slate 700)

**Typography:**
- Font: Inter
- Headings: `font-bold`
- Body: `font-normal`
- Muted text: `font-medium`

**Spacing:**
- Section padding: `py-24`
- Container padding: `px-6`
- Card gaps: `gap-8`
- Button gaps: `gap-4`

**Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`

**Border Radius:** `rounded-xl` or `rounded-2xl` (consistent across project)

**Buttons:**
- Primary: Blue background, White text, Rounded, Hover slightly darker
- Secondary: Transparent, Border, Hover background

## Implementation Plan

### Step 1: Update `src/index.css`
Add Inter font import and define custom theme tokens using Tailwind CSS v4 `@theme` directive with CSS custom properties matching the color palette above.

### Step 2: Update `index.html`
Add Inter font from Google Fonts in the `<head>`.

### Step 3: Update `src/App.tsx`
Add semantic HTML structure with:
- Dark background wrapper
- Container with proper padding
- Section-based layout with `py-24` spacing

### Step 4: Update components
Apply consistent theme classes to existing components:
- Use `bg-slate-900` for page background
- Use `text-slate-50`, `text-slate-300`, `text-slate-400` for text hierarchy
- Use `text-blue-500` for accent elements
- Use `border-slate-700` for borders
- Use `rounded-2xl` for cards and containers

### Step 5: Update `tailwind.config.js`
Ensure content paths and plugins align with Tailwind v4. Remove unused v3-specific settings if any.

## Files to Modify
- `index.html` - Font import
- `src/index.css` - Theme definition
- `src/App.tsx` - Layout structure
- `src/components/*` - Theme class application

## Validation
- Run `npm run dev` and visually verify the theme
- Run `npm run build` to ensure no build errors
- Run `npm run lint` to ensure no lint errors
