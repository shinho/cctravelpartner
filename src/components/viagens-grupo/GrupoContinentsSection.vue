<template>
    <section class="w-full bg-surface py-20 lg:py-28" id="destinos-grupo">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Section Header -->
        <div class="max-w-2xl mb-14 lg:mb-20 space-y-3">
          <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Destinos</span>
          <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            As nossas viagens de grupo
          </h2>
          <p class="text-on-surface-variant font-body-lg text-body-lg">
            Escolha um continente para descobrir alguns dos destinos que fazem parte das nossas partidas.
          </p>
        </div>

        <!-- Continent Tablist -->
        <div id="continentes" class="continents-controls flex flex-wrap gap-3 mb-14 lg:mb-20 scroll-mt-28" role="tablist" aria-label="Continentes">
          <button
            v-for="cont in continents"
            :key="cont.name"
            role="tab"
            aria-selected="false"
            @click="selectContinent(cont)"
            class="px-6 py-3 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
          >
            <span class="material-symbols-outlined text-lg">public</span>
            {{ cont.name }}
          </button>
        </div>
        <!-- Selection panel: continent image + destination chips -->
        <div v-if="currentContinent" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <!-- Continent Image -->
            <div class="lg:col-span-5 overflow-hidden rounded shadow-xl group relative h-[280px] lg:h-[340px]">
              <img :src="currentContinent.image" :alt="currentContinent.alt" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style="view-transition-name: continent-hero" />
              <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed font-semibold">{{ currentContinent.name }}</span>
                <p class="font-headline-sm text-headline-sm font-light text-surface-container-lowest mt-0.5">{{ currentContinent.subtitle }}</p>
              </div>
            </div>
            <!-- Destination Chips -->
            <div class="lg:col-span-7 space-y-6">
              <div class="flex flex-wrap gap-3">
                <span v-for="destino in currentContinent.destinations" :key="destino" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg border border-primary/10 hover:border-primary/40 transition-colors">
                  <span class="material-symbols-outlined text-primary text-lg">location_on</span>
                  {{ destino }}
                </span>
              </div>
              <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                {{ currentContinent.destinations.length }} destinos em destaque
              </p>
              <a class="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg uppercase tracking-widest hover:gap-4 transition-all border-b border-primary/30 pb-1 cursor-pointer" href="mailto:concierge@carlacoelho.pt?subject=Informações%20sobre%20Viagens%20de%20Grupo">
                Pedir Informações
                <span class="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>

      </div>
    </section>
</template>
<script setup>
import { ref, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { continents } from '../../data/continents'

const router = useRouter()
const activeContinent = ref('África')
const currentContinent = computed(() => continents.find((continent) => continent.name === activeContinent.value))

function selectContinent(continent) {
  const path = `/viagens-grupo/${continent.slug}?from=continentes`
  if (document.startViewTransition) {
    document.startViewTransition(async () => {
      await router.push(path)
      await nextTick()
    })
  } else {
    router.push(path)
  }
}
</script>
