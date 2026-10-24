<template>
<section class="w-full bg-surface py-20 lg:py-28 relative">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left: Distinction & Pillars -->
          <div class="lg:col-span-7 space-y-8">
            <div>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block mb-2">Vantagens &amp; Diferenciação</span>
              <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Porque escolher os meus serviços?
              </h2>
              <p class="font-headline-sm text-headline-sm text-primary font-normal mt-2">
                A segurança e sofisticação de contar com um Travel Partner dedicado.
              </p>
            </div>
            <!-- Feature check-cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="benefit in benefits" :key="benefit.title" class="p-5 bg-surface-container-lowest rounded shadow-sm flex items-start gap-3.5">
                <span class="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <div>
                  <h4 class="font-label-lg text-label-lg text-on-surface mb-1">{{ benefit.title }}</h4>
                  <p class="font-body-md text-body-md text-on-surface-variant">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Right: Editorial Visual Statement with Quote & Data -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <div class="relative bg-surface-container-high p-8 lg:p-10 rounded shadow-md overflow-hidden">
              <span class="material-symbols-outlined text-primary/20 text-8xl absolute -top-4 -right-4 select-none">format_quote</span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block mb-3">Compromisso de Autoria</span>
              <p class="font-headline-sm text-headline-sm text-on-surface italic relative z-10 leading-relaxed mb-6">
                “Viajar é uma das maiores formas de enriquecimento pessoal. A minha missão é assegurar que esse processo decorra com deleite, elegância e absoluta paz de espírito.”
              </p>
              <div class="flex items-center gap-4 relative z-10 pt-4 border-t border-surface-variant">
                <div>
                  <h4 class="font-inknut text-headline-sm text-primary leading-none">Carla Coelho</h4>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Travel Designer &amp; Fundadora</p>
                </div>
              </div>
            </div>
            <!-- Trust metrics snippet -->
            <div class="bg-surface-container-lowest p-6 rounded shadow-sm grid grid-cols-2 gap-4">
              <div>
                <span class="font-headline-lg text-headline-lg text-primary block">100%</span>
                <span class="font-body-md text-body-md text-on-surface-variant">Itinerários Feitos à Medida</span>
              </div>
              <div>
                <span class="font-headline-lg text-headline-lg text-tertiary block">&lt; 24h</span>
                <span class="font-body-md text-body-md text-on-surface-variant">Resposta Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
const benefits = [
  { title: 'Atendimento próximo e personalizado', description: 'Relação direta e humanizada, adaptada à sua rotina e preferências de comunicação.' },
  { title: 'Planeamento adaptado às suas necessidades', description: 'Sem formatos genéricos. Roteiros desenhados exclusivamente em função do seu perfil.' },
  { title: 'Poupança de tempo na pesquisa e organização', description: 'Evite horas de buscas exaustivas. Receba apenas opções qualificadas e verificadas.' },
  { title: 'Acompanhamento durante todo o processo', description: 'Assistência permanente e proativa desde o rascunho inicial até ao regresso.' },
  { title: 'Recomendações pensadas para cada viajante', description: 'Dicas autênticas de gastronomia, recantos escondidos e logística inteligente.' },
  { title: 'Tranquilidade antes, durante e após a viagem', description: 'Em caso de imprevistos, alterações de voos ou dúvidas, há sempre quem resolva por si.' }
]
</script>
