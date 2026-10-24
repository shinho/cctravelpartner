<template>
  <section  data-testId="home-highlight-section" class="content content--highlight" :class="variantClass">
    <div class="highlight__inner">
      <span v-if="eyebrow" class="highlight__eyebrow">{{ eyebrow }}</span>
      <h2 class="highlight__statement">
        <i v-if="titleLead">{{ titleLead }}</i>{{ title }}
      </h2>
      <span class="highlight__divider" aria-hidden="true"></span>
      <p class="highlight__text">{{ description }}</p>
      <slot name="action"></slot>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  eyebrow: { type: String, default: '' },
  titleLead: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  variant: { type: String, default: 'intro', validator: value => ['intro', 'outro'].includes(value) }
})

const variantClass = computed(() => `content--${props.variant}`)
</script>

<style scoped>
.content {
  position: relative;
  min-height: 100vh;
  padding: 4rem 2rem;
  background: var(--color-background, #f5f0e1);
  color: var(--color-on-surface, #2d2a24);
}

.content--highlight {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content--intro {
  background-image: radial-gradient(rgba(140, 120, 81, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}

.highlight__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
}

.highlight__eyebrow {
  color: var(--color-primary, #8c7851);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.highlight__statement {
  margin: 0;
  color: var(--color-on-surface, #2d2a24);
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 3.5vw, 3rem);
  font-weight: 400;
  line-height: 1.25;
  text-wrap: balance;
}

.highlight__statement i {
  font-style: italic;
}

.highlight__divider {
  width: 64px;
  height: 1px;
  margin: 0.5rem 0;
  background: var(--color-primary, #8c7851);
  opacity: 0.35;
}

.highlight__text {
  max-width: 620px;
  margin: 0;
  color: var(--color-on-surface-variant, #6d5e40);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
}
</style>
