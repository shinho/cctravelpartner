<template>
  <div class="frame__nav">
    <button
      v-for="(slide, index) in slides"
      :key="`dot-${index}`"
      class="nav-dot"
      :class="{ 'nav-dot--active': currentSlide === index }"
      :aria-label="`Mostrar imagem ${index + 1}: ${slide.alt}`"
      :aria-current="currentSlide === index ? 'true' : undefined"
      @click="$emit('select', index)"
    >
      <span class="sr-only">Mostrar imagem {{ index + 1 }}</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  slides: {
    type: Array,
    required: true
  },
  currentSlide: {
    type: Number,
    required: true
  }
})

defineEmits(['select'])
</script>

<style scoped>
.frame__nav {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 2;
}

.nav-dot {
  display: grid;
  width: 44px;
  height: 44px;
  padding: 0;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}

.nav-dot::before {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.55);
  content: '';
  transition: width 180ms ease, border-radius 180ms ease, background-color 180ms ease;
}

.nav-dot--active::before {
  width: 24px;
  border-radius: 4px;
  background: #fff;
}

.nav-dot:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .frame__nav { bottom: 1rem; }
}
</style>
