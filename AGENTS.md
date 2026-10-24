## Notes
Always answer in English.

## Local Node.js / Volta Setup

On this Windows machine, set `VOLTA_HOME` in the current PowerShell session before running Node.js or npm commands. Volta is installed at `C:\Users\nelso\AppData\Local\Volta`.

```powershell
$env:VOLTA_HOME = 'C:\Users\nelso\AppData\Local\Volta'
npm run build
```

This setup has been verified with a successful production build. If a build reports `EPERM` while resolving project files (for example, `src/main.js`) in the restricted execution environment, retry with normal file access through the approved execution flow. Do not change application code or filesystem permissions to work around that environment restriction.

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

## AI Temp files
When agents need to create temp files create them at \temp-ai

Use @uimaker subagents for parallel development of tasks
Use @i18n.agent for translate and remove hardcoded text
