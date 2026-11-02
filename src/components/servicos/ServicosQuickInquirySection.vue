<template>
<section data-testId="servicos-quick-inquiry-section" class="w-full bg-surface py-12">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="bg-surface-container p-6 lg:p-8 rounded flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-1">
            <h4 class="font-headline-sm text-headline-sm text-on-surface">Procura um serviço específico?</h4>
            <p class="font-body-md text-body-md text-on-surface-variant">Selecione uma modalidade para solicitar esclarecimentos rápidos com a nossa equipa.</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <a v-for="chip in quickChips" :key="chip" class="px-4 py-2 rounded bg-surface-container-lowest hover:bg-primary hover:text-on-primary transition-colors font-label-sm text-label-sm uppercase tracking-wider text-on-surface cursor-pointer" :href="`/contacto?topic=${encodeURIComponent(chip)}`">
              {{ chip }}
            </a>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const quickChips = tm('inquiry.serviceTopics')
</script>

