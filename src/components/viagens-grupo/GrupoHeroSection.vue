<template>
    <section class="relative isolate w-full overflow-hidden bg-surface py-12 lg:py-20">
      <img src="/assets/images/groups/hero-group-vacation.png" alt="" aria-hidden="true" fetchpriority="high" class="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 items-center">
          <!-- Left Column: Positioning -->
          <div class="flex max-w-3xl flex-col space-y-6 rounded-lg bg-white/60 p-6 shadow-sm backdrop-blur-md sm:p-8">
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Experiências Partilhadas</span>
            </div>
            <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              Viagens de Grupo <span class="italic font-normal text-primary">Exclusivas</span>
            </h1>
            <p class="font-headline-sm text-headline-sm text-on-surface-variant font-light leading-snug">
              Experiências únicas para quem acredita que as melhores memórias são vividas em conjunto
            </p>
            <div class="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer" href="#destinos-grupo" @click.prevent="scrollToSection('destinos-grupo')">
                Descobrir as Viagens
                <span class="material-symbols-outlined ml-2 text-lg">arrow_downward</span>
              </a>
              <router-link class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors" to="/orcamento">
                Solicitar Orçamento
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script setup>
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
