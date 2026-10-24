<template>
  <section data-testId="oportunidade-beneficios-section" class="w-full bg-surface-container-low py-20 lg:py-28" id="oportunidade">
    <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="space-y-3 max-w-2xl">
          <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Vantagens &amp; Possibilidades</span>
          <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            O que poderás encontrar nesta oportunidade?
          </h2>
        </div>
        <div class="hidden md:flex items-center gap-2">
          <span class="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">{{ benefits.length }} Motivos</span>
          <span class="w-12 h-[1px] bg-outline-variant"></span>
        </div>
      </div>
      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="benefit in benefits" :key="benefit.title" class="p-6 bg-surface-container-lowest rounded shadow-sm flex items-start gap-4 transition-all duration-300 hover:shadow-md" :class="benefit.wide ? 'sm:col-span-2 lg:col-span-3' : ''">
          <span class="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5" :style="benefit.wide ? null : fillIconStyle">{{ benefit.icon }}</span>
          <div>
            <h3 class="font-label-lg text-label-lg text-on-surface mb-1">{{ benefit.title }}</h3>
            <p v-if="benefit.note" class="font-body-md text-body-md text-on-surface-variant">{{ benefit.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { benefits, fillIconStyle } = defineProps({
  benefits: { type: Array, required: true },
  fillIconStyle: { type: Object, required: true }
})
</script>
