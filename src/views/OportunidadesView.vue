<script setup>
import OportunidadeBeneficiosSection from '../components/oportunidades/OportunidadeBeneficiosSection.vue'
import OportunidadeCtaSection from '../components/oportunidades/OportunidadeCtaSection.vue'
import OportunidadeHeroSection from '../components/oportunidades/OportunidadeHeroSection.vue'
import OportunidadeHistoriaSection from '../components/oportunidades/OportunidadeHistoriaSection.vue'
import OportunidadeMissaoSection from '../components/oportunidades/OportunidadeMissaoSection.vue'
import OportunidadeRequisitosSection from '../components/oportunidades/OportunidadeRequisitosSection.vue'

const notNeeded = [
  'ter experiência em turismo.',
  'abandonar a tua atividade atual.',
  'ser especialista em viagens.',
]

const needed = [
  'vontade de aprender.',
  'gosto por comunicar com pessoas.',
  'ambição para construir algo teu.',
]

const fillIconStyle = { fontVariationSettings: '\'FILL\' 1' }

const benefits = [
  { title: 'Flexibilidade para gerir o teu horário', icon: 'schedule' },
  { title: 'Possibilidade de trabalhar a partir de qualquer lugar', icon: 'public' },
  { title: 'Formação contínua e acompanhamento', icon: 'school' },
  { title: 'Desenvolvimento pessoal e profissional', icon: 'trending_up' },
  { title: 'Integração numa equipa dinâmica e inspiradora', icon: 'groups' },
  { title: 'Rendimento complementar ou construção de uma atividade a tempo inteiro', icon: 'payments' },
  {
    title: 'A oportunidade de fazer parte da indústria das viagens',
    icon: 'flight_takeoff',
    wide: true,
    note: 'Entra num setor que transforma sonhos em memórias — e a tua paixão em profissão.',
  },
]
</script>

<template>
  <div data-testId="oportunidades-view" class="flex flex-col w-full">
    <OportunidadeHeroSection />
    <OportunidadeHistoriaSection />
    <OportunidadeRequisitosSection :not-needed="notNeeded" :needed="needed" />
    <OportunidadeBeneficiosSection :benefits="benefits" :fill-icon-style="fillIconStyle" />
    <OportunidadeMissaoSection />
    <OportunidadeCtaSection />
  </div>
</template>
