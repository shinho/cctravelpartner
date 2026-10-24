<template>
<section class="w-full bg-surface py-20 lg:py-28" id="catalogo">
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
          <div v-for="service in services" :key="service.number" class="bg-surface-container-lowest rounded shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div>
              <div class="overflow-hidden h-44 w-full relative">
                <img :src="service.image" :alt="service.title" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-6 space-y-4">
                <div class="flex items-center justify-between">
                  <div class="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span class="material-symbols-outlined text-xl">{{ service.icon }}</span>
                  </div>
                  <span class="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">{{ service.number }}</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface">{{ service.title }}</h3>
                <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
            <div class="px-6 pb-6 pt-4 border-t border-surface-container flex items-center justify-between text-on-surface-variant group-hover:text-primary transition-colors">
              <span class="font-label-sm text-label-sm uppercase tracking-wider">{{ service.tag }}</span>
              <span class="material-symbols-outlined text-lg">north_east</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
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
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XwtFBGHiaNsrh5LZKe-U5fCT4fsi7RQLAkEYAX69C8DZcdjnUYve5sLod2DZBnXJUXr6cXH0Eg2pegcdpohFadezHyh1TTwkjKxux5yQ2nOnlwDu-g8wokFXGwww1jLp49sVMn94aHp_J3MyZ7oguuMc8zua6Kqu9JZl9Avieu6qUknOk4Hxa8msHrzZPp9eHY8-DyPO8WncMWSPe8bZqbJw3mmCTdUPCs-4djI0mqAdASpmSq1Hk-Ahg'
  },
  {
    number: '04',
    title: 'Transfers',
    icon: 'airport_shuttle',
    tag: 'Pontualidade & Conforto',
    description: 'Organização de transfers privados ou partilhados entre aeroportos, hotéis, estações e outros pontos de interesse, garantindo maior conforto e comodidade durante toda a viagem.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XKLxVolfyRbfpRwHblUxEI3N7ivNlomBnE-zovHBy-vajCkB3ymfVpmqjgh5RWtCvhjs5E1UoGR1OGpIbtrWTIfsCCOtdcjpuLwayqN9z1X7gjwcAHyot4iPCU0SOc7UuZXym9wWCF4KETUk7NOSljvYD6ISaSH6cMds0qMmy8dsMKKDDEXONBdbcGyupGb8LV1QSuIsk3L-hqjy3uXCN0-ZABf3lK-5VKL_cMYvQ3q9Fm6ShqooXmPzc'
  },
  {
    number: '05',
    title: 'Aluguer de Viaturas',
    icon: 'directions_car',
    tag: 'Mobilidade Sem Surpresas',
    description: 'Apoio na escolha e reserva do veículo ideal para explorar o destino ao seu ritmo, com soluções adaptadas às suas necessidades e ao tipo de viagem.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VsZkpitdBv46Zw496yFmsmM7u_lPSGcyoj3lECGXUvu8SFVIdl4xPDRSzHbYyqauWVf5_ROiHBbVYyMM8HxkB-kUOjbqewrq_V7XbiGvkYSMe998l0oBG8jdpQn06v2hgzDVpPPaQpOECBaXuD1ROjhSar6ZAFeFLU3TjqGdthvpbu4FBCHI6aG9wyOA2g_4j8hHDUWyNm6_C_UOjNDIaDvWqWlrEbcVDVCnqhCalIjKyvcZoE_vTA-w'
  },
  {
    number: '06',
    title: 'Road Trips Personalizadas',
    icon: 'explore',
    tag: 'Rotas Cénicas & Segredos',
    description: 'Criação de roteiros detalhados para quem gosta da liberdade de descobrir vários locais numa única viagem. Itinerários cuidadosamente planeados com percursos, sugestões de paragens, alojamentos e experiências imperdíveis.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WGx7FEky1owI1B7O-jLSl3VndIihLoWGfZIr0LB64hMQSBO57NuTm7FvZxRgTcmcHBYIUGmnzsiOHZnfIzSj5nEkibZW6Lxh4WIjslx6ayyJaDz3vVbw0n8VibAd8HpBQTbWIjxzuhq2lgWpA-BLnLc9HpwveVXBgmZg6wpTogphZ-GFo_HFTpNWcxElMundE-NKdC7cZ_IWraz_QDXRfZKjeDLvrjq2Abj4g7isBXq9S4Ai_ATHJBqJs'
  },
  {
    number: '07',
    title: 'Viagens Multidestino',
    icon: 'public',
    tag: 'Logística Integrada',
    description: 'Quer visitar várias cidades ou países na mesma viagem? Eu trato de toda a logística, combinando transportes, alojamentos e experiências para que possa aproveitar ao máximo cada destino.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VVcWF8aLlAIOwq01CA_rpBMQhCt7hTQ3g6zm8XZExNVroUVLsmNtucT6sgzzGhEpT76GfkeEVmbb1nj1H1u9eGjGLieMUI80VZLvx3daoxzLo9wnxoARLY-_CM-KvIuQvZdDlCY7MJgrInoJdKZUGFKfNkwvYqiSieWnO6aIkka3QgDe9G0zqNxs25AtCSgu9vAp0gdKNSU8gWnjTtD7N-EwDXDjUSLjvuBw3Pszo_svKUJrItMZWFyU4'
  },
  {
    number: '08',
    title: 'Planeamento Personalizado',
    icon: 'design_services',
    tag: 'Alfaiataria de Viagens',
    description: 'Cada viajante é diferente e cada viagem deve refletir isso. Desenvolvo propostas e itinerários personalizados de acordo com os seus interesses, orçamento, objetivos e tempo disponível.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XebZtqhnqZtOyo5hqRFXCkOJNmsodhcMjOxMr0R-jsBL39e-e1n1W10zv8VfW9O0MnOycs5KUKDHfNr8x7glzJaV8UknKaQsLyVq69avtXagvHRsybYjyNiVptYxq4qFz6Ma2MWWHglLY2zu61kGMdv_HHQpS9nx3NCkOmouKW7rVU0Ut5rLgFWNRuQPGt9D-KVxtVk_cJj6mZY3msIsH_sEUxSoIgonzC71fxsEhDLwPRqDOaeWgZBEE'
  },
  {
    number: '09',
    title: 'Pacotes Completos',
    icon: 'luggage',
    tag: 'Chave na Mão',
    description: 'Soluções completas para quem prefere ter tudo organizado num único serviço. Voos, alojamento, transfers, atividades e outros detalhes planeados para uma experiência sem preocupações.',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XzjK3ggi-eNcjuNiBc2Y-W9SkKNiLyWloOMYeZJyf-nrJYrZPo3XPd6yWVBCY8KgPo0HbhxeWhi2Cd9mH5inE40Aa_PY68Bn3LRoz3aMfaKgL9zeiFTpGW9cy-8USCKSYhtzCOQUqZrXMe7BFLpUqTON898xyjSlQ6ddbMM2AnLHAc9XTTDkyyWlH2cIzEbvPvkerX337Wden8tHSaktfiseQ5Rm3p9IXciR2DhJuThkMnpg1RVCskSyA'
  }
]

</script>

