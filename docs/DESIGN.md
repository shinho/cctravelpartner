---
name: High-End Exploration
colors:
  surface: '#fefccf'
  surface-dim: '#dedcb1'
  surface-bright: '#fefccf'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f6c9'
  surface-container: '#f2f0c4'
  surface-container-high: '#eceabe'
  surface-container-highest: '#e6e5b9'
  on-surface: '#1d1d03'
  on-surface-variant: '#544437'
  inverse-surface: '#323214'
  inverse-on-surface: '#f5f3c7'
  outline: '#877365'
  outline-variant: '#dac2b2'
  surface-tint: '#904d00'
  primary: '#8c4b00'
  on-primary: '#ffffff'
  primary-container: '#af6005'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77c'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#00685f'
  on-tertiary: '#ffffff'
  tertiary-container: '#008379'
  on-tertiary-container: '#f4fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc2'
  primary-fixed-dim: '#ffb77c'
  on-primary-fixed: '#2e1500'
  on-primary-fixed-variant: '#6d3900'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#61f9e9'
  tertiary-fixed-dim: '#3adccc'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#fefccf'
  on-background: '#1d1d03'
  surface-variant: '#e6e5b9'
  deep-onyx: '#0D0C22'
  paper-cream: '#FFFDD0'
  terracotta: '#CC7722'
  tropical-lagoon: '#40E0D0'
  heritage-gold: '#D4AF37'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built for a premium travel experience, balancing the ruggedness of high-end exploration with the refined polish of enterprise-grade hospitality. The aesthetic follows a **Modern Corporate** approach infused with **Minimalist** luxury, utilizing heavy whitespace and a disciplined grid to convey trustworthiness and timeless elegance. 

Subtle Portuguese and Arabic geometric patterns serve as low-opacity decorative ornaments in the background, bridging the cultural heritage of the brand with the global nature of luxury travel. The UI should feel airy and expansive, evoking the sensation of looking out over a vast horizon.

Key visual principles:
- **Heritage Modernism:** Classic serif typography paired with ultra-clean technical layouts.
- **Architectural Structure:** Use of rigid alignments and clear spatial hierarchy to project stability.
- **Selective Vibrant Accents:** Keeping the core experience neutral and legible (Cream/Ochre) while using tropical highlights (Turquoise) specifically for high-conversion actions or "bucket list" destinations.

## Colors

The palette is anchored in earthy, sophisticated tones. **Ochre** acts as the primary driver for brand recognition, representing the sun-drenched landscapes of Portugal and global expeditions. **Gold** is reserved for status indicators, premium tiering, and subtle highlights. 

**Cream** is the foundational surface color, replacing pure white to provide a softer, more "literary" feel that reduces eye strain and feels more high-end. **Turquoise** is used sparingly as a high-contrast accent to signify interactive elements, tropical packages, or "live" status updates. **Deep Onyx** provides the necessary contrast for text and structural borders.

## Typography

The typography strategy employs a "High-Low" pairing. **Playfair Display** provides the editorial authority required for luxury travel storytelling, used for large headings and impactful pull-quotes. **Hanken Grotesk** serves as the functional workhorse—a sharp, contemporary sans-serif that ensures high legibility for itineraries, pricing data, and technical details.

For PT-PT localization, ensure that line heights are generous enough to accommodate diacritics on uppercase characters (e.g., Á, Ç). Labels should often use increased letter spacing and uppercase styling to provide a modern, navigational feel.

## Layout & Spacing

This design system utilizes a **Fixed Grid** on desktop (12 columns, 1280px max-width) and a **Fluid Grid** on mobile (4 columns). The spacing rhythm is based on an 8px base unit, but emphasizes large "breathing rooms" between sections (120px+) to maintain an ultra-premium feel.

Layout logic:
- **Desktop:** Center-aligned container with wide margins to frame the content like a high-end magazine.
- **Mobile:** Full-bleed imagery with safe-area margins (16px) for interactive elements.
- **Reflow:** Side-by-side editorial layouts (Image + Text) on desktop stack vertically on mobile, with the image always leading the narrative.

## Elevation & Depth

To maintain a clean, enterprise-grade look, the design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Use subtle shifts in the Cream palette to define depth. For example, a card might be `#FFFFFF` (pure white) against a `#FFFDD0` (cream) background.
- **Borders:** Use 1px solid strokes in `#0D0C22` at 10% opacity for card definitions and input fields. 
- **Focus States:** High-contrast 2px borders using the Ochre primary color are used for accessibility and focus navigation.
- **Overlays:** When modals are required, use a high-blur (20px) backdrop with a 40% opacity "Deep Onyx" scrim to keep the focus on the content.

## Shapes

The shape language is **Soft** but disciplined. By using a `0.25rem` (4px) base radius, the UI feels approachable without losing its professional, "architectural" edge. 

- **Primary Buttons:** Utilize the standard `rounded` (4px) setting to maintain a serious, enterprise feel.
- **Images:** Photography of destinations should use `rounded-lg` (8px) to soften the edges of the "window" into the world.
- **Decorative Elements:** Geometric ornaments (Arabic/Portuguese patterns) should remain sharp-edged to preserve their mathematical precision.

## Components

### Buttons
- **Primary:** Ochre background, Cream text. Sharp, 4px corners. No shadows.
- **Secondary:** Transparent background, 1px Heritage Gold border, Gold text.
- **Action:** Turquoise background for "Book Now" or "Check Availability" to draw immediate attention.

### Input Fields & Selects
- Use a "Minimalist Ledger" style: A simple bottom border or a very light 4px rounded frame. 
- Placeholder text in a lightened Onyx. 
- Labels always sit above the field in `label-lg` style.

### Cards
- Travel package cards should feature high-resolution imagery with a subtle gradient overlay at the bottom for legibility.
- Content is padded with `24px` (gutter) internally.
- Use the 1px low-contrast outline to define the card boundary.

### Navigation & Menus
- Top-tier navigation uses `label-lg` for a clean, spaced-out look.
- Active states are indicated by a 2px Ochre underline rather than color shifts, maintaining a classic look.

### Itinerary Lists
- Vertical timelines using thin Gold lines to connect daily activities.
- High-contrast typography helps differentiate times, locations, and descriptions.