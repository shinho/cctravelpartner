<template>
  <section class="relative isolate flex min-h-[720px] w-full items-center overflow-hidden py-12 lg:py-20">
    <img
      src="/assets/images/oportunidades/hero-oportunidade.png"
      alt=""
      aria-hidden="true"
      fetchpriority="high"
      class="absolute inset-0 -z-20 h-full w-full object-cover object-center"
    />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-surface/55 via-surface/25 to-transparent"></div>
    <div class="max-w-[1280px] mx-auto w-full px-margin-mobile md:px-margin-desktop">
      <div class="flex max-w-3xl flex-col space-y-6 rounded-lg bg-white/75 p-6 shadow-sm backdrop-blur-md sm:p-8 lg:p-10">
        <div class="inline-flex items-center gap-2.5 rounded-full bg-surface-container-high px-3.5 py-1.5 w-fit">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Oportunidade &amp; Paixão Por Viajar</span>
        </div>
        <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
          Transforma a tua paixão por viajar numa <span class="italic font-normal text-primary">oportunidade</span>.
        </h1>
        <div class="space-y-4 text-on-surface-variant font-body-lg text-body-lg">
          <p class="text-on-surface font-headline-sm text-headline-sm font-normal leading-snug">
            E se aquilo que mais gostas de fazer pudesse gerar um rendimento extra ou até uma nova carreira?
          </p>
          <p>
            Muitas pessoas adoram viajar, ajudar amigos a planear férias, descobrir novos destinos e partilhar experiências. Mas poucas imaginam que essa paixão pode transformar-se numa atividade flexível e gratificante.
          </p>
          <p>
            Foi precisamente isso que me levou a descobrir o mundo dos Travel Partners. Hoje ajudo outras pessoas a organizar viagens memoráveis e, ao mesmo tempo, tenho a oportunidade de desenvolver um projeto próprio, com liberdade para gerir o meu tempo e trabalhar a partir de onde quiser.
          </p>
        </div>
        <p class="font-headline-sm text-headline-sm text-primary italic pt-2">
          E a melhor parte? Tu também podes fazê-lo.
        </p>
        <div class="pt-2 flex flex-col items-center gap-4 sm:flex-row">
          <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer" href="#oportunidade" @click.prevent="scrollToSection('oportunidade')">
            Descobrir a Oportunidade
            <span class="material-symbols-outlined ml-2 text-lg">arrow_downward</span>
          </a>
          <a class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors" href="mailto:concierge@carlacoelho.pt?subject=Tenho%20Interesse%20na%20Oportunidade%20Travel%20Partner">
            Tenho Interesse
          </a>
        </div>
        <div class="flex items-center gap-3 rounded-md bg-surface-container-low/80 p-4 sm:w-fit">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-primary">
            <span class="material-symbols-outlined">public</span>
          </div>
          <div>
            <p class="font-label-sm text-label-sm uppercase tracking-wider text-primary">Nova Carreira</p>
            <p class="font-label-lg text-label-lg text-on-surface leading-snug">Trabalha de Onde Quiser</p>
            <p class="font-label-sm text-label-sm text-on-surface-variant">O teu ritmo, o teu destino. Flexibilidade para gerir o teu tempo.</p>
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
