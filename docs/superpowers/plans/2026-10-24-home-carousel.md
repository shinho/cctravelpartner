# Home carousel implementation plan

**Goal:** Five generated local travel images and a Pinia home store.
**Architecture:** Register Pinia in main.js; expose slides from useHomeStore and consume with storeToRefs in HomeView. Keep carousel selection and timing local.
**Approved design:** Maldives, desert dinner, Florence, Swiss Alps, and African safari landscape photographs.

- [x] Generate and inspect five images; copy into public/assets/images/home.
- [x] Install Pinia 2, register it, and move slide data to src/stores/home.js.
- [x] Verify five nonempty image assets, reactive store access, production build, and scoped diff.

Keep unrelated existing changes intact. This data extraction has no new behavior requiring a test suite; use build and asset checks.

