<template>
  <div data-testId="white-card" class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
    <div class="relative bg-surface-container-lowest rounded-xl p-8 sm:p-14 shadow-md overflow-hidden text-center max-w-4xl mx-auto">
      <div class="absolute -top-10 -left-10 text-heritage-gold/15 pointer-events-none select-none">
        <span class="material-symbols-outlined text-9xl">format_quote</span>
      </div>
      <span class="font-label-lg text-label-lg text-terracotta uppercase tracking-widest block mb-4">{{ title }}</span>
      <blockquote class="font-headline-xl text-headline-xl text-deep-onyx mb-6 leading-tight">
        {{ quote }}
      </blockquote>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
})
</script>
