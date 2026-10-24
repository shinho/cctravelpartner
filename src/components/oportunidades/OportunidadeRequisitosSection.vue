<template>
  <section data-testId="oportunidade-requisitos-section" class="w-full bg-surface py-20 lg:py-28">
    <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
      <!-- Section Header -->
      <div class="max-w-2xl mb-14 space-y-3">
        <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Sem Barreiras de Entrada</span>
        <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          E se fosse a tua vez?
        </h2>
      </div>
      <!-- Contrast Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <!-- Não precisas de -->
        <div class="p-8 bg-surface-container-low rounded shadow-sm">
          <div class="flex items-center gap-3 mb-6">
            <span class="material-symbols-outlined text-on-surface-variant text-2xl">close</span>
            <h3 class="font-headline-sm text-headline-sm text-on-surface">Não precisas de…</h3>
          </div>
          <ul class="space-y-4">
            <li v-for="item in notNeeded" :key="item" class="flex items-start gap-3 text-on-surface-variant font-body-lg text-body-lg">
              <span class="material-symbols-outlined text-on-surface-variant/60 text-xl shrink-0 mt-1">close</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <!-- Precisas apenas de -->
        <div class="p-8 bg-surface-container-lowest rounded shadow-sm border border-primary/10">
          <div class="flex items-center gap-3 mb-6">
            <span class="material-symbols-outlined text-primary text-2xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
            <h3 class="font-headline-sm text-headline-sm text-on-surface">Precisas apenas de…</h3>
          </div>
          <ul class="space-y-4">
            <li v-for="item in needed" :key="item" class="flex items-start gap-3 text-on-surface font-body-lg text-body-lg">
              <span class="material-symbols-outlined text-primary text-xl shrink-0 mt-1" style="font-variation-settings: 'FILL' 1;">check_circle</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <p class="max-w-3xl text-on-surface-variant font-body-lg text-body-lg">
        Com formação, acompanhamento e uma comunidade pronta a ajudar-te, poderás descobrir como transformar a tua paixão por viajar num projeto com potencial de crescimento.
      </p>
    </div>
  </section>
</template>
<script setup>
const { notNeeded, needed } = defineProps({
  notNeeded: { type: Array, required: true },
  needed: { type: Array, required: true }
})
</script>
