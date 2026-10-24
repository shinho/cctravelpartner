# Opportunities View Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the Opportunities page into section components following the group-travel page pattern and replace its remote hero image with a purpose-made local image.

**Architecture:** Keep `OportunidadesView.vue` as a compact page composer with the current section order and data arrays. Create six focused components under `src/components/oportunidades/`, passing arrays as props where the page owns reusable content. Generate a locally stored, editorial travel-planning hero image and use it as a full-bleed background behind a readable content panel.

**Tech Stack:** Vue 3 Composition API, Vue SFCs, Tailwind CSS, project image-generation workflow.

**Spec:** Approved short design in conversation: preserve current Portuguese copy, data, and links; follow the group-travel page's one-component-per-section organization; replace the remote jet photo with a generated local hero image.

## Global Constraints

- Preserve the existing Portuguese copy, contact destinations, section order, and navigation behavior.
- Follow the existing Vue and Tailwind patterns used by `ViagensGrupoView.vue` and its section components.
- Avoid changing files under any `core` folders; keep shared logic out of core.
- Store the generated image under `public/assets/images/oportunidades/` and reference it locally.

## Review Focus

- Hero copy remains readable over the generated image at mobile and desktop sizes; retain a translucent panel and ensure image framing works responsively.
- The hero scroll CTA still targets `#oportunidade` and preserves smooth scrolling.
- The section CTA links retain their current mail subject and `/contactos` route.
- Benefits and contrast lists render all current items after moving data to the page composer.
- The view imports each new component and builds without unresolved paths.

---

### Task 1: Create the Opportunities hero asset

**Files:**
- Create: `public/assets/images/oportunidades/hero-oportunidade.png`

**Interfaces:**
- Produces: local full-bleed editorial travel-planning image used by `OportunidadeHeroSection.vue`.

- [x] Generate a warm, premium editorial photograph of a woman travel advisor planning a journey at a sunlit desk with a map, notebook, and subtle travel details; compose the subject toward the right and keep the left half visually quiet for the hero panel. Avoid text, logos, visible brands, or private-jet imagery.
- [x] Save the image to the path above and confirm the file exists.

### Task 2: Extract section components and compose the view

**Files:**
- Create: `src/components/oportunidades/OportunidadeHeroSection.vue`
- Create: `src/components/oportunidades/OportunidadeHistoriaSection.vue`
- Create: `src/components/oportunidades/OportunidadeRequisitosSection.vue`
- Create: `src/components/oportunidades/OportunidadeBeneficiosSection.vue`
- Create: `src/components/oportunidades/OportunidadeMissaoSection.vue`
- Create: `src/components/oportunidades/OportunidadeCtaSection.vue`
- Modify: `src/views/OportunidadesView.vue`

**Interfaces:**
- `OportunidadeHeroSection` owns the hero copy, local background image, and smooth-scroll behavior.
- `OportunidadeHistoriaSection` owns the story section and quote card.
- `OportunidadeRequisitosSection` accepts `notNeeded` and `needed` string arrays.
- `OportunidadeBeneficiosSection` accepts `benefits` and `fillIconStyle`.
- `OportunidadeMissaoSection` owns the mission statement.
- `OportunidadeCtaSection` owns the final CTA and existing links.
- The view imports and renders the six components in the current order, retaining the existing content arrays.

- [x] Extract each current section without changing its copy, IDs, styling intent, or link destinations.
- [x] Implement the hero with a responsive, full-bleed local image and translucent content panel matching `GrupoHeroSection.vue`'s layout pattern.
- [x] Reduce `OportunidadesView.vue` to the section composer and data arrays.
- [x] Run the production build with `VOLTA_HOME` set to `C:\Users\nelso\AppData\Local\Volta`; resolve any build errors caused by the refactor.
- [x] Review the diff to confirm only the planned view, components, image, and plan file changed.
