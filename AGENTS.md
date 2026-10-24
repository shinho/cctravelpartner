## Notes
Always answer in English.

## Technology Stack

**Core Framework & Build Tool**
- Vue 3 (Composition API) — `^3.4.21`
- Vite — `^5.2.0` (dev server on port 3000)
- Language: JavaScript (ES modules, `"type": "module"`)

**State, Routing & i18n**
- Pinia — `^2.3.1` (global state management)
- Vue Router — `^4.3.0`
- Vue I18n — `^11.4.8` (locale: `pt-PT`)

**Styling**
- Tailwind CSS — `^3.4.3` (utility-first, darkMode: class)
- PostCSS — `^8.4.38` with Autoprefixer — `^10.4.19`
- `@tailwindcss/forms` — `^0.5.7`
- `@tailwindcss/container-queries` — `^0.1.1`
- Custom design tokens in `tailwind.config.js` (colors, spacing, borderRadius, fontFamily, fontSize)

**Fonts**
- Cormorant Garamond (headlines/display)
- Hanken Grotesk (body/label)
- Material Symbols Outlined (icons)

**Animations & UX**
- GSAP + ScrollTrigger (animations)
- Lenis (smooth scrolling)

**Project Conventions**
- Avoid changing files under any of the `\core` folders unless absolutely necessary. Prefer moving that logic to composables.
- Use composables for reusable logic.
- Use Pinia stores for shared/reusable state.
- Create reusable components for grouped elements and patterns.

## UI Development Guidelines
- Prioritize usability, accessibility, and aesthetics in all designs.
- Ensure that the interface is intuitive and easy to navigate.
- Maintain consistency in design elements across the application.
- Use color, typography, and spacing effectively to enhance readability.
- Test designs with real users whenever possible to gather feedback.
- Stay updated with the latest design trends and best practices.
- Avoid changing files under any of the \core folders unless absolutely necessary. Prefer moving that logic to composables.

**Reusability**

- Design components and patterns should be reusable across different parts of the application to maintain consistency and reduce development effort.
- Always prefer creating component for grouped elements and patterns to promote reusability and maintainability. (i.e., if you are creating a <section>, consider making it a reusable component)
- Create a library of reusable components and patterns to streamline the design process and ensure consistency across the application.
- Create a Pinia store for managing reusable state and shared data across components to enhance maintainability and consistency.