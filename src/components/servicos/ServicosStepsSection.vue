<template>
<section class="w-full bg-surface-container-low py-16">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div v-for="step in steps" :key="step.number" class="p-6 bg-surface-container-lowest rounded shadow-sm">
            <span class="font-display-lg-mobile text-display-lg-mobile text-primary font-bold block mb-2">{{ step.number }}</span>
            <h4 class="font-label-lg text-label-lg text-on-surface uppercase tracking-wider mb-2">{{ step.title }}</h4>
            <p class="font-body-md text-body-md text-on-surface-variant">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
const steps = [
  { number: '01', title: 'Consulta Inicial', description: 'Partilha de ideias, datas pretendidas, perfil dos viajantes e ambição orçamental.' },
  { number: '02', title: 'Proposta Curada', description: 'Apresentação de soluções sob medida com rotas, hotéis selecionados e estimativas claras.' },
  { number: '03', title: 'Ajuste & Reserva', description: 'Afinação ao pormenor, confirmação de reservas e emissão de documentação consolidada.' },
  { number: '04', title: 'Acompanhamento', description: 'Suporte e linha direta durante todo o percurso até ao regresso a casa.' }
]
</script>
