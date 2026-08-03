<template>
  <section class="relative py-section-gap px-margin-desktop overflow-hidden bg-background">
    <div class="absolute inset-0 arabic-ornament pointer-events-none"></div>
    <div class="max-w-[1280px] mx-auto text-center relative z-10">
      <div class="inline-block tracking-[0.2em] text-primary font-label-lg text-[11px] mb-8 uppercase">
        {{ eyebrow }}
      </div>
      <h1 class="font-headline-xl text-headline-xl text-on-surface mb-8 font-serif-light leading-tight">
        {{ title }}
      </h1>
      <div class="h-px w-24 bg-primary/30 mx-auto mb-12"></div>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
        {{ description }}
      </p>
      <div class="mt-16">
        <router-link
          class="inline-flex items-center gap-4 text-primary font-label-lg text-label-lg hover:gap-6 transition-all tracking-widest border-b border-primary/20 pb-1"
          to="/"
        >
          VOLTAR AO INÍCIO
          <span class="material-symbols-outlined text-[18px]">arrow_back</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: 'EM BREVE'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Esta página está em construção. Em breve encontrará aqui todo o conteúdo exclusivo.'
  }
})
</script>