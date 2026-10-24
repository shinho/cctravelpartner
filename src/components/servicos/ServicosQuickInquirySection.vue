<template>
<section class="w-full bg-surface py-12">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="bg-surface-container p-6 lg:p-8 rounded flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-1">
            <h4 class="font-headline-sm text-headline-sm text-on-surface">Procura um serviço específico?</h4>
            <p class="font-body-md text-body-md text-on-surface-variant">Selecione uma modalidade para solicitar esclarecimentos rápidos com a nossa equipa.</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button v-for="chip in quickChips" :key="chip.label" class="px-4 py-2 rounded bg-surface-container-lowest hover:bg-primary hover:text-on-primary transition-colors font-label-sm text-label-sm uppercase tracking-wider text-on-surface cursor-pointer" type="button" @click="selectService(chip.service)">
              {{ chip.label }}
            </button>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>

</script>

