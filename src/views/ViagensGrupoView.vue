<template>
  <div class="flex flex-col w-full">
    <GrupoHeroSection />
    <GrupoNarrativeSection />
    <GrupoExpectationsSection :expectations="expectations" />
    <GrupoStatementSection />
    <GrupoHowItWorksSection />
    <GrupoContinentsSection />
    <GrupoCtaSection />
  </div>
</template>

<script setup>
import GrupoHeroSection from '../components/viagens-grupo/GrupoHeroSection.vue'
import GrupoNarrativeSection from '../components/viagens-grupo/GrupoNarrativeSection.vue'
import GrupoExpectationsSection from '../components/viagens-grupo/GrupoExpectationsSection.vue'
import GrupoStatementSection from '../components/viagens-grupo/GrupoStatementSection.vue'
import GrupoHowItWorksSection from '../components/viagens-grupo/GrupoHowItWorksSection.vue'
import GrupoContinentsSection from '../components/viagens-grupo/GrupoContinentsSection.vue'
import GrupoCtaSection from '../components/viagens-grupo/GrupoCtaSection.vue'

const expectations = [
  'Itinerários cuidadosamente planeados',
  'Experiências autênticas e diferenciadoras',
  'Acompanhamento próximo e personalizado',
  'Grupos reduzidos e ambiente familiar',
  'Equilíbrio entre atividades organizadas e tempo livre',
  'Segurança, conforto e tranquilidade durante toda a viagem'
]
</script>
