<template>
    <section data-testId="grupo-expectativas-section" class="w-full bg-surface py-20 lg:py-28" id="expectativas">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="space-y-3 max-w-2xl">
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">O Que Pode Esperar</span>
            <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              O que pode esperar das nossas viagens de grupo?
            </h2>
          </div>
          <div class="hidden md:flex items-center gap-2">
            <span class="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">{{ expectations.length }} Garantias</span>
            <span class="w-12 h-[1px] bg-outline-variant"></span>
          </div>
        </div>
        <!-- Expectations Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in expectations" :key="item" class="p-6 bg-surface-container-lowest rounded shadow-sm flex items-start gap-4 transition-all duration-300 hover:shadow-md">
            <span class="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5" style="font-variation-settings: 'FILL' 1;">check_circle</span>
            <h3 class="font-label-lg text-label-lg text-on-surface">{{ item }}</h3>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup>
defineProps({ expectations: { type: Array, required: true } })
</script>
