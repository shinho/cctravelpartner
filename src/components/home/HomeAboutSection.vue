<template>
  <SectionHome
    :image-path="aboutSection.image"
    :image-alt="aboutSection.imageAlt"
    :eyebrow="aboutSection.eyebrow"
    :title-lead="aboutSection.titleLead"
    :title="aboutSection.titleRest"
    section-index="0"
    background="bg-1"
  >
    <p v-for="paragraph in aboutSection.paragraphs" :key="paragraph" class="content__text content__text--left text-meta">
      {{ paragraph }}
    </p>
    <template #routingNext>
      <router-link class="content__link" :to="aboutSection.link.to">
        {{ aboutSection.link.label }} →
      </router-link>
    </template>
  </SectionHome>
</template>

<script setup>
import SectionHome from './SectionHome.vue'
import { useAboutSection } from '../../composables/useAboutSection'

const { aboutSection } = useAboutSection()
</script>
