<template>
<section class="relative w-full overflow-hidden bg-surface py-12 lg:py-20">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Grid layout: Text Narrative + Editorial Image Trio -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left Column: Storytelling & Positioning -->
          <div class="lg:col-span-6 flex flex-col space-y-6">
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
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer" href="#catalogo" @click.prevent="scrollToSection('catalogo')">
                Explorar Serviços
                <span class="material-symbols-outlined ml-2 text-lg">arrow_downward</span>
              </a>
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors cursor-pointer" href="#contacto" @click.prevent="scrollToSection('contacto')">
                Falar Connosco
              </a>
            </div>
          </div>
          <!-- Right Column: Editorial Visual Showcase -->
          <div class="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <!-- Main Dominant Image (Luxury cliffside pool / sunset) -->
            <div class="col-span-8 overflow-hidden rounded shadow-xl group">
              <div class="relative h-[380px] lg:h-[480px] overflow-hidden">
                <img alt="Resort de luxo com piscina infinita sobre o oceano ao pôr do sol" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1USIDJxh0KgdIVXTYSw95_3C5YVkrOU4j-rhiF1FDax7IouqyG75nxuj1nTFCJgwusbuo4IzKp0GKhkD0qHoev4JaHit_BiJ9KMymh6JBQavtAEFso3ZA3TeabAwWRrniYW_RjZE52itTM6D59kkwCIcRARE6v5wl1xD95JXoPXopStsdvkwyGg9uTPPYsAiAwpb3sN7iBoH-TrCvtkZOg6mZQzBFlQlq7wJIaNyU9moRyfz5lYY6BVHAw" />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-surface-container-lowest">
                  <span class="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed font-semibold">Tailor-Made Escapes</span>
                  <p class="font-headline-sm text-headline-sm font-light mt-0.5">Roteiros desenhados ao seu ritmo</p>
                </div>
              </div>
            </div>
            <!-- Vertical Stacked Side Images -->
            <div class="col-span-4 flex flex-col gap-4">
              <div class="relative h-[180px] lg:h-[230px] rounded overflow-hidden shadow-md group">
                <img alt="Vilas suspensas sobre águas cristalinas num atol tropical nas Maldivas" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1UuOvQ34wvJQMZMnBCK-PayDWaMB-Sx2ha0y0Y9eiDk2ZbwymC8KS7rDxsDwlGMBPzCJcwbPzZerdpl8INsf7dhGpWYkGgQ_uzVGAju3kwoFfq0SMviwZ9xkaqWejUyGVFqak6Ui3zKdqD8JWENQ-ktvnyrygIdf0aTDCFxC0_Gwy_ZYVUj0UXXL4ktmSxw-0Ht0ZnEFL-h2NAv2mAlzt-CjHhEkjbZvlMNy48PL8LluW0k9D80b61BJaA" />
                <div class="absolute inset-0 bg-primary/10"></div>
                <div class="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm">
                  Lagoon
                </div>
              </div>
              <div class="relative h-[184px] lg:h-[234px] rounded overflow-hidden shadow-md group">
                <img alt="Acampamento de luxo no deserto dourado ao entardecer sob luz suave" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1XzjK3ggi-eNcjuNiBc2Y-W9SkKNiLyWloOMYeZJyf-nrJYrZPo3XPd6yWVBCY8KgPo0HbhxeWhi2Cd9mH5inE40Aa_PY68Bn3LRoz3aMfaKgL9zeiFTpGW9cy-8USCKSYhtzCOQUqZrXMe7BFLpUqTON898xyjSlQ6ddbMM2AnLHAc9XTTDkyyWlH2cIzEbvPvkerX337Wden8tHSaktfiseQ5Rm3p9IXciR2DhJuThkMnpg1RVCskSyA" />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/50 to-transparent"></div>
                <div class="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm">
                  Deserto
                </div>
              </div>
            </div>
            <!-- Decorative Floating Card -->
            <div class="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded shadow-xl items-center gap-3 max-w-xs">
              <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span class="material-symbols-outlined">workspace_premium</span>
              </div>
              <div>
                <p class="font-label-lg text-label-lg text-on-surface leading-snug">Curadoria Sem Compromissos</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">Acesso a fornecedores e parceiros de excelência.</p>
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
