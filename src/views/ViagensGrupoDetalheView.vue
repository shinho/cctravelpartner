<template>
  <div class="fixed inset-0 z-[100] flex flex-col bg-surface overflow-y-auto">
    <!-- Full-screen continent detail: 40% hero image | 60% countries -->
    <section class="relative w-full flex-grow bg-surface">
      <div class="w-full min-h-screen">
        <div class="grid grid-cols-1 lg:grid-cols-[40vw_60vw] lg:gap-0 min-h-screen">
          <!-- Left 40%: continent hero image (full height) -->
          <div class="relative overflow-hidden h-[42vh] min-h-[280px] lg:h-screen lg:min-h-0">
            <button
              @click="goBack"
              aria-label="Fechar destinos do continente"
              class="absolute top-6 left-6 z-20 w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur flex items-center justify-center text-on-surface transition-all hover:bg-primary hover:text-on-primary"
            >
              <span class="material-symbols-outlined">close</span>
            </button>
            <div class="absolute inset-0 w-full h-full">
              <img
                :src="continent.image"
                :alt="continent.alt"
                class="w-full h-full object-cover object-center"
                style="view-transition-name: continent-hero"
              />
              <div class="absolute bottom-8 left-8 right-8 text-surface-container-lowest">
                <span class="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed font-semibold block opacity-90">{{ continent.name }}</span>
                <h3 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">{{ continent.subtitle }}</h3>
              </div>
            </div>
          </div>

          <!-- Right 60%: content + countries as image boxes -->
          <div class="continent-content p-6 sm:p-10 lg:p-10 xl:p-14 flex flex-col min-h-[58vh] lg:h-screen lg:min-h-0 lg:overflow-y-auto bg-surface text-center lg:text-left">
            <div class="mx-auto lg:mx-0 w-full max-w-3xl flex flex-col space-y-3 lg:space-y-4">
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">{{ continent.name }}</span>
              <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">{{ continent.name }}</h2>
              <p class="font-headline-sm text-headline-sm text-on-surface-variant font-light leading-relaxed">{{ continent.subtitle }}</p>
              <p class="font-body-lg text-body-lg text-on-surface-variant mt-4 lg:mt-6">
                Explore cada destino através das nossas partidas em grupo, com acompanhamento próximo e experiências pensadas para serem partilhadas.
              </p>
            </div>

            <div class="mt-8 lg:mt-10 w-full">
              <div class="flex items-end justify-between gap-4 mb-5">
                <span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block">Destinos em destaque</span>
                <span class="font-label-sm text-label-sm text-outline">{{ continent.countries.length }} destinos</span>
              </div>
              <div class="grid grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
                <article
                  v-for="(country, countryIndex) in continent.countries"
                  :key="country.slug"
                  class="country-card group relative overflow-hidden rounded-xl shadow-sm aspect-[1.35/1] min-h-[145px] bg-surface-container-high ring-1 ring-on-surface/5"
                  :style="{ '--card-index': countryIndex }"
                >
                  <img
                    :src="country.image"
                    :alt="country.alt"
                    class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/85 via-deep-onyx/5 to-transparent"></div>
                  <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 lg:p-4 text-left">
                    <div class="min-w-0">
                      <h3 class="font-headline-sm text-headline-sm text-white leading-tight truncate">{{ country.name }}</h3>
                      <p class="mt-1 font-label-sm text-label-sm text-white/75">{{ country.trips }} viagens em grupo</p>
                    </div>
                    <span aria-hidden="true" class="material-symbols-outlined shrink-0 text-white/90 transition-transform duration-300 group-hover:translate-x-1">arrow_outward</span>
                  </div>
                </article>
              </div>
            </div>

            <a
              class="mt-10 lg:mt-14 inline-flex items-center justify-center lg:justify-start gap-2 text-primary font-label-lg text-label-lg uppercase tracking-widest hover:gap-4 transition-all border-b border-primary/30 pb-1 cursor-pointer"
              :href="`mailto:concierge@carlacoelho.pt?subject=Informações%20sobre%20Viagens%20de%20Grupo%20-%20${encodeURIComponent(continent.name)}`"
            >
              Pedir Informações sobre {{ continent.name }}
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { nextTick } from 'vue'
import { continents } from '../data/continents'

const route = useRoute()
const router = useRouter()

const continent = computed(() =>
  continents.find((c) => c.slug === route.params.continent)
)

function goBack() {
  const update = () => router.push({
    name: 'viagens-grupo',
    query: { from: 'continentes' },
    hash: '#continentes'
  })
  if (document.startViewTransition) {
    document.startViewTransition(async () => {
      await update()
      await nextTick()
    })
  } else {
    update()
  }
}
</script>
