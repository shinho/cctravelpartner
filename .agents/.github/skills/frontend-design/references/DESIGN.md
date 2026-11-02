# ResultEntry UI Design Reference

This document describes the design system that is implemented by the ResultEntry Vue 3 and Vuetify UI. The theme files under `UI/src/models/core/configs/vuetifyTheme/` are the source of truth for color values. Keep this document aligned with those files and with the consuming components.

## Product Character

ResultEntry is a data-entry and laboratory workflow application. The interface is operational rather than editorial: it favors clear hierarchy, compact controls, strong selection states, readable labels, and predictable feedback over decorative presentation.

The application supports two selectable themes:

- `alsLightTheme` is the default theme: pale blue-gray surfaces, dark navy text, blue primary actions, teal secondary/command accents, and lime success feedback.
- `alsDarkTheme` is the dark theme: deep navy surfaces, light blue text ramps, blue actions, aqua command accents, and lime success feedback.

Theme registration is handled in `UI/src/plugins/vuetify.ts`. Do not invent a third palette in a component. Use a named theme token instead.

## Implementation Rules

- Use Vuetify components and the named theme colors whenever a component already exists for the interaction.
- Use the numbered ramps for state and contrast, rather than hard-coded color values.
- Preserve the semantic distinction between `primary`, `secondary`, `command`, `bright`, `success`, `warning`, and `error`.
- `terciary` is intentionally documented with its current spelling because existing components consume that token. New code should prefer a corrected alias only after the theme and all consumers are migrated together.
- The current system does not define a branded font family, display type scale, gradient system, or marketing-style hero treatment. Use the existing application typography and Vuetify sizing unless a feature introduces a separately approved specification.
- Favor compact, responsive layouts. Controls must remain usable at the configured Vuetify breakpoints (`sm: 660`, `md: 1200`, `lg: 1640`, `xl: 1920`, `xxl: 2560`).

## Color Tokens

### Shared Structural Tokens

| Token | Light | Dark | Current use |
|---|---|---|---|
| `alsBlue` | `#004cab` | `#004cab` | Product blue reference |
| `surface` | `#ffffff` | `#0D1929` | Main component surfaces |
| `surfaceText` | `#1c2023` | `#ffffff` | Text on `surface` |
| `surfaceDark` | `#000f2d` | `#000f2d` | Dark icon/button surfaces |
| `surfaceBright` | `#fff` | not defined | Bright light surface |
| `surfaceDarkText` | `#ffffff` | `#ffffff` | Text on dark surfaces |

### Light Theme: `alsLightTheme`

| Family | Values in ascending token order |
|---|---|
| `background` | `#f6f8fa`, `background10 #f7f9fa`, `background20 #f8f9fb`, `background30 #f9fafb`, `background40 #fafbfc`, `background50 #fbfcfd` |
| `background100-800` | `#f4f6f8`, `#f2f4f7`, `#eff1f5`, `#edf0f4`, `#e4e9ef`, `#dbe1e9`, `#d2dae4`, `#c9d3de` |
| `primary` | `#667f91` |
| `primary100-900` | `#00020b`, `#00061b`, `#000f2d`, `#002254`, `#00367e`, `#004cab`, `#245fb5`, `#3e71be`, `#5a83c7` |
| `neutral100-1000` | `#e8f0f7`, `#ccd8e1`, `#b3c2cd`, `#99abb9`, `#8095a5`, `#667f91`, `#4d697c`, `#335268`, `#1a3c54`, `#002640` |
| `secondary100-900` | `#d6e9ee`, `#acd2dd`, `#82bccd`, `#53a6bc`, `#0090ab`, `#006a7e`, `#004554`, `#00242d`, `#00070b` |
| `terciary` | `#9dbff2` |
| `accent100-900` | `#90ab00`, `#9ab438`, `#a5bc55`, `#afc56d`, `#bacd83`, `#c5d698`, `#d1dead`, `#dce6c2`, `#f3f7eb` |
| `command` | `#247965` |
| `command100-900` | `#2e967e`, `#39b497`, `#44d2b1`, `#50f2cc`, `#6cf4d1`, `#82f5d6`, `#95f7db`, `#a7f8e0`, `#b7fae5` |
| `contrast100-900` | `#9e8827`, `#bea331`, `#debf3b`, `#ffdc45`, `#ffe061`, `#ffe478`, `#ffe88c`, `#ffeb9e`, `#ffefaf` |
| `contrast` | `#806e1e` |
| `success` | `#8ee219` |
| `success100-900` | `#568c0b`, `#68a810`, `#7bc414`, `#9ae648`, `#a5e964`, `#b1ec7b`, `#bcef90`, `#c7f2a4`, `#d3f5b7` |
| `bright100-900` | `#041831`, `#0a3262`, `#0f4b94`, `#1464c5`, `#197DF7`, `#4495f8`, `#70aefa`, `#9cc7fb`, `#c7dffd` |
| `error` | `#CB0020` |
| `error100-500` | `#960015`, `#b0001a`, `#d43739`, `#dc534f`, `#e36c65` |
| `warning` | `#EB6405` |
| `warning100-500` | `#ae4803`, `#cc5604`, `#ef7636`, `#f38651`, `#f69669` |

### Dark Theme: `alsDarkTheme`

| Family | Values in ascending token order |
|---|---|
| `background` | `#000b1a`, `background10 #000e1f`, `background20 #001123`, `background30 #001427`, `background40 #00172b`, `background50 #001a2f` |
| `background100-900` | `#102440`, `#162a45`, `#1c2f4a`, `#22354f`, `#273a54`, `#2d3f59`, `#33455e`, `#394a63`, `#3e5068` |
| `primary100-900` | `#f1f9ff`, `#d6ebff`, `#bbdeff`, `#9fd1ff`, `#73bcff`, `#63a3de`, `#45739e`, `#365d80`, `#284763` |
| `neutral100-900` | `#1c2023`, `#384147`, `#54616b`, `#70828f`, `#8da3b3`, `#a2b4c1`, `#b8c5cf`, `#cdd7de`, `#e3e8ec` |
| `secondary` | `#284763` |
| `secondary100-900` | `#365d80`, `#45739e`, `#548bbe`, `#63a3de`, `#73bcff`, `#82c3ff`, `#91caff`, `#9fd1ff`, `#add8ff` |
| `terciary` | `#0f4b94` |
| `accent` | `#82944A` |
| `command100-900` | `#b7fae5`, `#a7f8e0`, `#95f7db`, `#82f5d6`, `#6cf4d1`, `#50f2cc`, `#44d2b1`, `#39b497`, `#2e967e` |
| `success` | `#8ee219` |
| `success100-900` | `#568c0b`, `#68a810`, `#7bc414`, `#9ae648`, `#a5e964`, `#b1ec7b`, `#bcef90`, `#c7f2a4`, `#d3f5b7` |
| `bright100-900` | `#c7dffd`, `#9cc7fb`, `#70aefa`, `#4495f8`, `#197DF7`, `#1464c5`, `#0f4b94`, `#0a3262`, `#041831` |
| `contrast` | `#ffd700` |
| `successDimmed`, `successDark` | `#67A312` |
| `neutralLight` | `#3D5B80` |
| `error` | `#CB0020` |
| `errorBright` | `#ff5252` |
| `warning` | `#EB6405` |

## Semantic Usage

| Interaction or state | Implemented token pattern | Examples in the UI |
|---|---|---|
| Primary action | `primary200` | `PrimaryButton`, selected result/editor actions |
| Secondary action | `secondary600` with `variant="outlined"` | `SecondaryButton`, cancel actions |
| Command or confirm action | `command500` | `CommandButton`, add actions, selector confirmation |
| Active/bright progress or emphasis | `bright300-500` | Progress bars, toggles, loading indicators |
| Panel and control surfaces | `background100-300` | Sheets, headers, selector rows, overlays |
| Primary text | `primary200` or `surfaceText` | Labels, headings, field display text |
| Muted text and icons | `neutral200-600` | Tooltips, inactive controls, metadata |
| Success | `success`, `success200-500` | Loaded/validated states and positive feedback |
| Warning | `warning`, `warning200-500` | Required markers and warning tooltips |
| Error | `error`, `error200-500`, `errorBright` | Validation, alert icons, error feedback |
| Alternate visibility/state toggle | `contrast100-500` | Show/hide toggler states |

Use the ramp deliberately: lighter values generally provide foreground emphasis in light mode, while the dark theme reverses the visual direction of several ramps. Always verify text contrast in both themes.

## Implemented Components

### Buttons

- `PrimaryButton` uses `primary200`, small sizing by default, optional Material Design icon, and Vuetify loading/disabled states. Button content uses the `surface` color.
- `SecondaryButton` uses `secondary600` with an outlined variant. Its label uses `secondary600` and optional icons use `secondary200`.
- `CommandButton` and `AddButton` use `command500` for affirmative workflow actions.
- `BackButton`, `RefreshButton`, and `ClearButton` use background ramp values for low-emphasis utility actions.
- Icon-only actions use the existing icon button components and must retain an accessible label or tooltip.

### Sheets, Cards, and Panels

Use `v-sheet`, `v-card`, and layout wrappers to establish workflow regions. Existing components commonly use `rounded`, `pa-1`, `mb-1`/`mb-2`, and low elevation. Do not introduce large decorative cards or nested card stacks. Use `background200/300` for separation and `neutral` or `surface` for readable content areas.

### Selectors and Breadcrumbs

Selectors are dense, horizontal workflow controls. The level selector uses a 52px breadcrumb rail, 44px item geometry, `background200` as the rail, `secondary200` for items, and `primary200` for item text and hover emphasis. Selected confirmation uses a `command500` circular control with `primary200` icon/text.

Keep selector rows keyboard accessible, horizontally scrollable when necessary, and visually distinct in disabled, hover, selected, and loading states.

### Feedback and Loading

- Use Vuetify progress components with `primary`, `primary200`, or `bright500` according to the existing neighboring component.
- Use `success` ramps for completed validation/loading states.
- Use `warning` and `error` tokens for required fields, validation, and destructive feedback; do not substitute accent or contrast colors.
- Skeletons and placeholders use background ramp values so they recede without becoming invisible.

## Layout and Density

- The app uses a practical, information-dense layout for forms, selectors, result editors, sidebars, menus, and command footers.
- Use Vuetify spacing utilities and the existing 4px/8px utility rhythm. Prefer the smallest spacing that preserves scanability and touch usability.
- Preserve the existing responsive thresholds and the 16px scrollbar assumption configured in Vuetify.
- Keep primary content readable beside navigation and command regions; avoid fixed-width content that breaks at `sm` and `md`.
- Use elevation sparingly. Separation should usually come from surface tokens, borders, spacing, or a low elevation rather than shadow-heavy decoration.

## Typography and Iconography

The themes do not define typography tokens or custom font families. Use the application and Vuetify defaults, with hierarchy expressed through existing Vuetify text utilities, size props, weight, and spacing. Do not add a marketing display font or a new global type scale as part of a component change.

The UI uses Material Design Icons through `@mdi/font`. Prefer the existing `mdi-*` icon vocabulary, use outlined icons where the component already does so, and keep icon sizes aligned with the neighboring control. Icons should communicate state or action and should not replace a required text label without an accessible name.

## Accessibility Checklist

- Check foreground/background contrast in both `alsLightTheme` and `alsDarkTheme`.
- Preserve visible focus states and keyboard operation for buttons, selectors, menus, and form fields.
- Pair icon-only controls with `aria-label`, tooltip, or equivalent accessible text.
- Do not communicate success, warning, or error by color alone; retain the existing icon or text feedback.
- Keep disabled controls visually distinct but readable.

## Quick Reference

```ts
// Primary workflow action
<v-btn color="primary200" />

// Secondary outlined action
<v-btn color="secondary600" variant="outlined" />

// Command/confirm action
<v-btn color="command500" />

// Panel surface
<v-sheet color="background200" />

// Error and warning feedback
<v-icon color="error" />
<v-icon color="warning200" />
```

When a new visual requirement does not fit these tokens, update the theme contract first and then document the new semantic role here. Avoid adding one-off colors inside feature components.
