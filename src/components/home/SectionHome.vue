<template>
  <section
    data-testId="section-home"
    class="content content--sticky content--grid"
    :class="backgroundClass"
    :data-content-index="sectionIndex"
  >
    <div class="content__inner">
      <div v-if="imagePath || $slots.visual" class="content__img-wrap">
        <slot name="visual">
          <img class="content__img content__img--large content__img--left" :src="imagePath" alt="section">
        </slot>
      </div>
      <div class="content__text-wrap">
        <span v-if="eyebrow" class="content__eyebrow">{{ eyebrow }}</span>
        <h2 class="content__title">
          <i v-if="titleLead">{{ titleLead }}</i>{{ title }}
        </h2>
        <slot></slot>
        <slot name="routingNext"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  imagePath: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  titleLead: { type: String, default: '' },
  sectionIndex: { type: [String, Number], default: undefined },
  background: { type: String, default: 'bg-1' }
})

const backgroundClass = computed(() => props.background)
</script>

<style scoped>
.content {
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
}

.content--grid {
  display: grid;
  align-items: stretch;
  justify-items: stretch;
}

.content--sticky {
  will-change: filter, border-radius;
  background: var(--color-background, #f5f0e1);
}

.content__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
}

.content__img-wrap {
  display: flex;
  flex: 0 0 40%;
  align-items: center;
  justify-content: center;
  max-width: 40%;
  min-height: 0;
}

.content__img {
  width: 100%;
  height: auto;
  max-height: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.content__img--large {
  width: 100%;
  max-width: 500px;
}

.content__img--left {
  margin-right: 2rem;
}

.content__text-wrap {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
  overflow: hidden;
}

.content__eyebrow {
  color: var(--color-primary, #8c7851);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.content__title {
  margin: 0;
  color: var(--color-on-surface, #2d2a24);
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  line-height: 1.2;
  text-wrap: balance;
}

.content__title i {
  font-style: italic;
}

:slotted(.content__text) {
  max-width: 600px;
  margin: 0;
  color: var(--color-on-surface-variant, #6d5e40);
  font-size: 1rem;
  line-height: 1.6;
}

:slotted(.content__link) {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: var(--color-primary, #8c7851);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
  transition: gap 180ms ease;
}

.bg-1 {
  background: var(--color-background);
}

.bg-2 {
  background: var(--color-surface-container-low);
}

.bg-3 {
  background: var(--color-background);
}

.bg-4 {
  background: var(--color-tropical-lagoon);
}

.bg-5 {
  background: var(--color-background);
}

:slotted(.text-meta) {
  margin: 0.5rem 0 0;
  font-weight: 300;
}

:slotted(.content__link:hover) {
  gap: 0.75rem;
}

@media (min-width: 1025px) {
  .content--sticky {
    position: sticky;
    top: 0;
    height: 100vh;
    height: 100svh;
    min-height: 0;
    padding: 2rem;
    overflow: hidden;
  }

  .content__img-wrap,
  .content__img {
    height: 100%;
  }
}

@media (max-width: 1024px) {
  .content__inner {
    flex-direction: column;
    text-align: center;
  }

  .content__img-wrap {
    flex: 0 0 auto;
    max-width: 100%;
    margin: 0 auto;
  }

  .content__img--left {
    margin: 0 auto 1rem;
  }
}

@media (max-width: 640px) {
  .content {
    padding: 2rem 1rem;
  }

  .content__title {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
  }
}
</style>
