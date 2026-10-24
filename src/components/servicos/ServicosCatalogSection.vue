<template>
<section data-testId="servicos-catalogo-section" class="w-full bg-surface py-20 lg:py-28" id="catalogo">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="space-y-3 max-w-2xl">
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">O Que Oferecemos</span>
            <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Catálogo Integral de Serviços
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              Soluções independentes ou integradas num plano holístico, concebidas com elevado rigor para atender às suas aspirações.
            </p>
          </div>
          <div class="hidden md:flex items-center gap-2">
            <span class="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">{{ services.length }} Serviços Especializados</span>
            <span class="w-12 h-[1px] bg-outline-variant"></span>
          </div>
        </div>
        <!-- 9 Services Grid (3x3 Editorial Layout) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard v-for="service in services" :key="service.number" :service="service" />
        </div>
      </div>
    </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'

const services = [
  {
    number: '01',
    title: 'Voos',
    icon: 'flight',
    tag: 'Gestão e Tarifas',
    description: 'Encontre as melhores opções de voos para o seu destino, com aconselhamento personalizado, comparação de alternativas e pesquisa das ligações mais adequadas às suas necessidades.',
    image: '/assets/images/plane.jpg'
  },
  {
    number: '02',
    title: 'Alojamentos',
    icon: 'hotel',
    tag: 'Hotéis de Charme & Resorts',
    description: 'Seleção de hotéis, apartamentos, resorts e alojamentos exclusivos, cuidadosamente escolhidos de acordo com o seu orçamento, preferências e estilo de viagem.',
    image: '/assets/images/alojamento.jpg'
  },
  {
    number: '03',
    title: 'Atividades e Experiências',
    icon: 'local_activity',
    tag: 'Acesso Privilegiado',
    description: 'Sugestões e reservas de experiências únicas para tornar a sua viagem ainda mais especial: visitas guiadas, excursões, experiências gastronómicas, atividades culturais, aventuras ao ar livre e muito mais.',
    image: '/assets/images/services/experiences.png',
    imageAlt: 'Passeio de caiaque entre falésias e águas turquesa'
  },
  {
    number: '04',
    title: 'Transfers',
    icon: 'airport_shuttle',
    tag: 'Pontualidade & Conforto',
    description: 'Organização de transfers privados ou partilhados entre aeroportos, hotéis, estações e outros pontos de interesse, garantindo maior conforto e comodidade durante toda a viagem.',
    image: '/assets/images/services/transfers.png',
    imageAlt: 'Viatura de transfer privado à chegada ao aeroporto'
  },
  {
    number: '05',
    title: 'Aluguer de Viaturas',
    icon: 'directions_car',
    tag: 'Mobilidade Sem Surpresas',
    description: 'Apoio na escolha e reserva do veículo ideal para explorar o destino ao seu ritmo, com soluções adaptadas às suas necessidades e ao tipo de viagem.',
    image: '/assets/images/services/car-rental.png',
    imageAlt: 'Automóvel de aluguer num miradouro junto ao Atlântico'
  },
  {
    number: '06',
    title: 'Road Trips Personalizadas',
    icon: 'explore',
    tag: 'Rotas Cénicas & Segredos',
    description: 'Criação de roteiros detalhados para quem gosta da liberdade de descobrir vários locais numa única viagem. Itinerários cuidadosamente planeados com percursos, sugestões de paragens, alojamentos e experiências imperdíveis.',
    image: '/assets/images/services/road-trips.png',
    imageAlt: 'Estrada panorâmica ao longo da costa portuguesa'
  },
  {
    number: '07',
    title: 'Viagens Multidestino',
    icon: 'public',
    tag: 'Logística Integrada',
    description: 'Quer visitar várias cidades ou países na mesma viagem? Eu trato de toda a logística, combinando transportes, alojamentos e experiências para que possa aproveitar ao máximo cada destino.',
    image: '/assets/images/services/multi-destination.png',
    imageAlt: 'Viagem de comboio junto a um lago e montanhas alpinas'
  },
  {
    number: '08',
    title: 'Planeamento Personalizado',
    icon: 'design_services',
    tag: 'Alfaiataria de Viagens',
    description: 'Cada viajante é diferente e cada viagem deve refletir isso. Desenvolvo propostas e itinerários personalizados de acordo com os seus interesses, orçamento, objetivos e tempo disponível.',
    image: '/assets/images/services/travel-planning.png',
    imageAlt: 'Mapa, caderno e bússola para planear uma viagem personalizada'
  },
  {
    number: '09',
    title: 'Pacotes Completos',
    icon: 'luggage',
    tag: 'Chave na Mão',
    description: 'Soluções completas para quem prefere ter tudo organizado num único serviço. Voos, alojamento, transfers, atividades e outros detalhes planeados para uma experiência sem preocupações.',
    image: '/assets/images/services/complete-packages.png',
    imageAlt: 'Mala de viagem num terraço de resort com vista para o mar'
  }
]

</script>

