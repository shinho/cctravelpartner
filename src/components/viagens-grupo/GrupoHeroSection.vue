<template>
    <section class="relative w-full overflow-hidden bg-surface py-12 lg:py-20">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left Column: Positioning -->
          <div class="lg:col-span-7 flex flex-col space-y-6">
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
          <!-- Right Column: Editorial Image Trio -->
          <div class="lg:col-span-5 relative">
            <div class="grid grid-cols-12 gap-4">
              <!-- Main Tall Image -->
              <div class="col-span-8 overflow-hidden rounded shadow-xl group">
                <div class="relative h-[380px] lg:h-[480px] overflow-hidden">
                  <img alt="Rua histórica empedrada em Florença, Itália, sob a luz suave da manhã" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOecJILLeSh2Ozxe3HKyBtTLkHz-bniYWfZtIR1A6IAyjdaFlOfXgIU6whwUuyzkOLTvdXw20mnAMMIe5kT592zpqfD-aGHo3oX2TK_4cDjYK6fsqA4cu6Uz4p_JB6rar1gzVENphQQBbOfiO1DaRfKAxaIo4Agn3NvLnxDTdJj1pael2QthoAwKtEOE8mTjs_YT9nwtQTTI-9yH7xt7KkQ0R2FS4YyqXTBJANPVUfecgvWgWgj76DjTEtokGJ5FORqgjZwEZNvHg" />
                  <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-4 left-4 right-4 text-surface-container-lowest">
                    <span class="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed font-semibold">Juntos pelo Mundo</span>
                    <p class="font-headline-sm text-headline-sm font-light mt-0.5">Memórias que ficam para sempre</p>
                  </div>
                </div>
              </div>
              <!-- Vertical Stacked Side Images -->
              <div class="col-span-4 flex flex-col gap-4">
                <div class="relative h-[180px] lg:h-[230px] rounded overflow-hidden shadow-md group">
                  <img alt="Vista aérea de um resort privado nas Maldivas" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVyqs8O_4IaIjqV92njWRIvjqnAuL3TcC4i5LDVWkZkZRiCdapTGywRf6Bc4mNYzU2z5AnASRJUp7OnXwmvguYMm_cSZN8VBfv-oVR3AoaSKGSUtNXd0Wh6ts3wkJtt1ScSgHAu9qgauP_aX-EQKpLRGhkq9jVaY835sQIT6ZrHq1gPleqjK7K8S3cc0kun5MemH8N9DT7Gfx1cCj2FUAxa1wa7T7tkAdPCG3lGKia88ZA14uFaGtV1eVSvTqUJrEObNMjMcJDpzE" />
                  <div class="absolute inset-0 bg-primary/10"></div>
                  <div class="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm">
                    Praia
                  </div>
                </div>
                <div class="relative h-[184px] lg:h-[234px] rounded overflow-hidden shadow-md group">
                  <img alt="Dunas deslumbrantes ao pôr do sol com um acampamento de luxo" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkXpXrNx2_7oYVj7yPG9waxwGBmj2jhY3XOSmjdpajgTw3U_0vHEF7lcF8NDA5JIY5WIE9drocrnT5V3KsyBjH4RtabcHMQmswffegkYZVLd681FZrCmvw_gnzgDmqSAdd3H2xcL1JjBuZli8Emk6Q8Ea1c9UJZqhyxkOO64an1v-u5-oyxSBEf8DGy9esA0X2uS-NbWZ4PYwtJpmNGIex-lW0xM_gTZnHSPM889nbeJshCrs1KjHmLs-uN8S5WiFxcGnO0EbI5VQ" />
                  <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/50 to-transparent"></div>
                  <div class="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm">
                    Deserto
                  </div>
                </div>
              </div>
            </div>
            <!-- Decorative Floating Card -->
            <div class="hidden sm:flex absolute -bottom-6 left-8 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded shadow-xl items-center gap-3 max-w-xs">
              <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span class="material-symbols-outlined">groups</span>
              </div>
              <div>
                <p class="font-label-lg text-label-lg text-on-surface leading-snug">Grupos até 16 Pessoas</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">Um ambiente próximo e familiar.</p>
              </div>
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
