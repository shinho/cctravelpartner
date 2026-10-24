<template>
  <SectionHome image-path="https://lh3.googleusercontent.com/aida-public/AB6AXuCsCbmN_DzWeuZ6cB6y2KU0RNKDH4_Z_QmD02lGi69tIsHJiM5d3-g9oHN0aYCCAdpmVgkX2jAZ4FUOt9cvnm6n4L4ErRbbZXF3qflZehwCu6yS1s_qEedT0ohGkhcMpec6BRZUAVy2NeGfJ9TkE9Mj5vxTQfN3W0i6qIRl8d4eods0nvALIswO4Mbfi3dp-z-JEH7SIha-CDvD5_hy0XjYJ9m3pHje6Qt-HmHVH4eRkdJlFF243IsWS8E15O-WY6SPNRx_-HDC9KM" image-alt="Boutique hotel lobby" title-lead="Onde a Distinção" title=" se Encontra com a Conveniência" section-index="2" background="bg-3">
          <p class="content__text content__text--left text-meta">Elevamos a sua viagem a um nível superior com serviços premium desenhados para a sua total tranquilidade.</p>
          <div class="content__services">
            <router-link v-for="servico in servicos" :key="servico.name" class="service-card" :to="servico.path">
              <span class="material-symbols-outlined">{{ servico.icon }}</span>
              <h4>{{ servico.title }}</h4>
              <p>{{ servico.description }}</p>
            </router-link>
          </div>
          <template #routingNext>
            <router-link class="content__link" to="/servicos">VER TODOS OS SERVIÇOS →</router-link>
          </template>
        </SectionHome>
</template>

<script setup>
import SectionHome from './SectionHome.vue'

const servicos = [
  {
    name: 'consultadoria',
    icon: 'concierge',
    title: 'Consultoria Personalizada',
    description: 'Atendimento dedicado para desenhar cada detalhe da sua jornada com base no seu perfil exclusivo.',
    path: '/consultadoria'
  },
  {
    name: 'roteiros',
    icon: 'map',
    title: 'Roteiros Privados',
    description: 'Acesso a experiências fora do circuito comercial, com guias especializados e total privacidade.',
    path: '/roteiros'
  },
  {
    name: 'vip',
    icon: 'diamond',
    title: 'Acesso VIP',
    description: 'Priority check-in, lounges exclusivos e convites para eventos restritos.',
    path: '/vip-concierge'
  }
]
</script>

<style scoped>
/* Services grid */
.content__services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.service-card {
  background: var(--color-surface-container-lowest);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--color-primary);
  border-opacity: 0.1;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-on-surface);
  text-decoration: none;
}

.service-card:hover {
  border-opacity: 0.3;
  transform: translateY(-4px);
}

.service-card .material-symbols-outlined {
  font-size: 2.5rem;
  color: var(--color-tropical-lagoon);
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.service-card:hover .material-symbols-outlined {
  transform: translateY(-4px);
}

.service-card h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
}

.service-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-on-surface-variant);
}

@media (max-width: 1024px) {
  .content__services { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .content__services { grid-template-columns: 1fr; }
  .service-card { padding: 1.5rem; }
}
</style>
