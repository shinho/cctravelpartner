<template>
  <section class="w-full bg-surface-container-low py-20 lg:py-28" id="contacto">
    <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
      <div class="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16 relative">
        <!-- Subtle background gradient glow -->
        <div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>
        <div class="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-tertiary-fixed/20 blur-3xl pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-primary">
            <span class="material-symbols-outlined text-base">flight_takeoff</span>
            <span class="font-label-sm text-label-sm uppercase tracking-widest font-semibold">O Teu Próximo Capítulo</span>
          </div>
          <!-- Punchline Highlight -->
          <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
            Pronto para descobrir <span class="italic text-primary">mais?</span>
          </h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Se gostas de viajar, conhecer pessoas e procuras uma oportunidade diferente, talvez este seja o momento de explorares um caminho que nunca tinhas considerado.
          </p>
          <p class="font-headline-sm text-headline-sm text-primary italic max-w-xl mx-auto">
            Quem sabe se a tua próxima viagem não será o início da tua próxima aventura profissional?
          </p>
          <!-- Action Container -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-10 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md" href="mailto:concierge@carlacoelho.pt?subject=Tenho%20Interesse%20na%20Oportunidade%20Travel%20Partner">
              <span class="material-symbols-outlined mr-2 text-xl">send</span>
              Tenho Interesse
            </a>
            <a class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container text-on-surface hover:bg-surface-container-high px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors" href="mailto:contact@carlacoelho.com">
              <span class="material-symbols-outlined mr-2 text-xl text-primary">call</span>
              Falar Comigo
            </a>
          </div>
          <div class="pt-6 border-t border-surface-container flex flex-wrap items-center justify-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-primary text-base">verified</span>
              Sem compromisso
            </span>
            <span class="text-outline-variant">•</span>
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-primary text-base">schedule</span>
              Resposta em menos de 24 horas
            </span>
            <span class="text-outline-variant">•</span>
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-primary text-base">handshake</span>
              Acompanhamento personalizado
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
