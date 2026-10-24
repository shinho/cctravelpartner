<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader v-if="!isContinentDetail" />
    <main class="flex-grow">
      <router-view />
    </main>
    <SiteFooter v-if="!isContinentDetail" />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isContinentDetail = computed(() => route.name === 'viagens-grupo-detalhe')
</script>
