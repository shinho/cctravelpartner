<template>
<section class="relative isolate w-full overflow-hidden bg-surface py-12 lg:py-20">
      <img src="/assets/images/services/hero-coast-background.png" alt="" aria-hidden="true" fetchpriority="high" class="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 items-center">
          <!-- Left Column: Storytelling & Positioning -->
          <div class="flex max-w-3xl flex-col space-y-6 rounded-lg bg-white/60 p-6 shadow-sm backdrop-blur-md sm:p-8">
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Curadoria &amp; Serviços Sob Medida</span>
            </div>
            <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              Cada viagem é única.<br />
              <span class="italic font-normal text-primary">O planeamento também.</span>
            </h1>
            <div class="space-y-4 text-on-surface-variant font-body-lg text-body-lg">
              <p>
                Quer esteja a planear uma escapadinha de fim de semana, umas férias em família, uma aventura entre amigos ou a viagem com que sempre sonhou, estou aqui para o ajudar a encontrar as melhores soluções e a criar uma experiência à sua medida.
              </p>
              <p>
                Desde a escolha do destino até aos detalhes finais, acompanho-o em todas as fases da organização para que viaje com confiança, tranquilidade e sem preocupações.
              </p>
            </div>
            <!-- Trust Badges Bar -->
            <div class="pt-4 grid grid-cols-3 gap-3">
              <div class="bg-surface-container-lowest p-4 rounded shadow-sm flex flex-col">
                <span class="material-symbols-outlined text-primary text-2xl mb-1">supervised_user_circle</span>
                <span class="font-label-lg text-label-lg text-on-surface">Apoio 1:1</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Dedicado &amp; Exclusivo</span>
              </div>
              <div class="bg-surface-container-lowest p-4 rounded shadow-sm flex flex-col">
                <span class="material-symbols-outlined text-primary text-2xl mb-1">tune</span>
                <span class="font-label-lg text-label-lg text-on-surface">À Medida</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Soluções Únicas</span>
              </div>
              <div class="bg-surface-container-lowest p-4 rounded shadow-sm flex flex-col">
                <span class="material-symbols-outlined text-primary text-2xl mb-1">verified_user</span>
                <span class="font-label-lg text-label-lg text-on-surface">Zero Receios</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Tranquilidade Total</span>
              </div>
            </div>
            <div class="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors duration-300 shadow-md cursor-pointer" href="#catalogo" @click.prevent="scrollToSection('catalogo')">
                Explorar Serviços
                <span class="material-symbols-outlined ml-2 text-lg">arrow_downward</span>
              </a>
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors cursor-pointer" href="#contacto" @click.prevent="scrollToSection('contacto')">
                Falar Connosco
              </a>
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
