<template>
  <div class="flex flex-col w-full">
    <!-- Top Subtle Ornament & Hero Section -->
    <section class="relative w-full overflow-hidden bg-surface py-12 lg:py-20">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Grid layout: Text Narrative + Editorial Image Trio -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left Column: Storytelling & Positioning -->
          <div class="lg:col-span-6 flex flex-col space-y-6">
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Curadoria &amp; Serviços Sob Medida</span>
            </div>
            <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              Cada viagem é única.<br />
              <span class="italic font-normal text-primary">O planeamento também.</span>
            </h1>
            <div class="space-y-4 text-on-surface-variant font-body-lg text-body-lg">
              <p>
                Quer esteja a planear uma escapadinha de fim de semana, umas férias em família, uma aventura entre amigos ou a viagem com que sempre sonhou, estou aqui para o ajudar a encontrar as melhores soluções e a criar uma experiência à sua medida.
              </p>
              <p>
                Desde a escolha do destino até aos detalhes finais, acompanho-o em todas as fases da organização para que viaje com confiança, tranquilidade e sem preocupações.
              </p>
            </div>
            <!-- Trust Badges Bar -->
            <div class="pt-4 grid grid-cols-3 gap-3">
              <div class="bg-surface-container-lowest p-4 rounded shadow-sm flex flex-col">
                <span class="material-symbols-outlined text-primary text-2xl mb-1">supervised_user_circle</span>
                <span class="font-label-lg text-label-lg text-on-surface">Apoio 1:1</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Dedicado &amp; Exclusivo</span>
              </div>
              <div class="bg-surface-container-lowest p-4 rounded shadow-sm flex flex-col">
                <span class="material-symbols-outlined text-primary text-2xl mb-1">tune</span>
                <span class="font-label-lg text-label-lg text-on-surface">À Medida</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Soluções Únicas</span>
              </div>
              <div class="bg-surface-container-lowest p-4 rounded shadow-sm flex flex-col">
                <span class="material-symbols-outlined text-primary text-2xl mb-1">verified_user</span>
                <span class="font-label-lg text-label-lg text-on-surface">Zero Receios</span>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Tranquilidade Total</span>
              </div>
            </div>
            <div class="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer" href="#catalogo" @click.prevent="scrollToSection('catalogo')">
                Explorar Serviços
                <span class="material-symbols-outlined ml-2 text-lg">arrow_downward</span>
              </a>
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors cursor-pointer" href="#contacto" @click.prevent="scrollToSection('contacto')">
                Falar Connosco
              </a>
            </div>
          </div>
          <!-- Right Column: Editorial Visual Showcase -->
          <div class="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <!-- Main Dominant Image (Luxury cliffside pool / sunset) -->
            <div class="col-span-8 overflow-hidden rounded shadow-xl group">
              <div class="relative h-[380px] lg:h-[480px] overflow-hidden">
                <img alt="Resort de luxo com piscina infinita sobre o oceano ao pôr do sol" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1USIDJxh0KgdIVXTYSw95_3C5YVkrOU4j-rhiF1FDax7IouqyG75nxuj1nTFCJgwusbuo4IzKp0GKhkD0qHoev4JaHit_BiJ9KMymh6JBQavtAEFso3ZA3TeabAwWRrniYW_RjZE52itTM6D59kkwCIcRARE6v5wl1xD95JXoPXopStsdvkwyGg9uTPPYsAiAwpb3sN7iBoH-TrCvtkZOg6mZQzBFlQlq7wJIaNyU9moRyfz5lYY6BVHAw" />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/60 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-surface-container-lowest">
                  <span class="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed font-semibold">Tailor-Made Escapes</span>
                  <p class="font-headline-sm text-headline-sm font-light mt-0.5">Roteiros desenhados ao seu ritmo</p>
                </div>
              </div>
            </div>
            <!-- Vertical Stacked Side Images -->
            <div class="col-span-4 flex flex-col gap-4">
              <div class="relative h-[180px] lg:h-[230px] rounded overflow-hidden shadow-md group">
                <img alt="Vilas suspensas sobre águas cristalinas num atol tropical nas Maldivas" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1UuOvQ34wvJQMZMnBCK-PayDWaMB-Sx2ha0y0Y9eiDk2ZbwymC8KS7rDxsDwlGMBPzCJcwbPzZerdpl8INsf7dhGpWYkGgQ_uzVGAju3kwoFfq0SMviwZ9xkaqWejUyGVFqak6Ui3zKdqD8JWENQ-ktvnyrygIdf0aTDCFxC0_Gwy_ZYVUj0UXXL4ktmSxw-0Ht0ZnEFL-h2NAv2mAlzt-CjHhEkjbZvlMNy48PL8LluW0k9D80b61BJaA" />
                <div class="absolute inset-0 bg-primary/10"></div>
                <div class="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm">
                  Lagoon
                </div>
              </div>
              <div class="relative h-[184px] lg:h-[234px] rounded overflow-hidden shadow-md group">
                <img alt="Acampamento de luxo no deserto dourado ao entardecer sob luz suave" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1XzjK3ggi-eNcjuNiBc2Y-W9SkKNiLyWloOMYeZJyf-nrJYrZPo3XPd6yWVBCY8KgPo0HbhxeWhi2Cd9mH5inE40Aa_PY68Bn3LRoz3aMfaKgL9zeiFTpGW9cy-8USCKSYhtzCOQUqZrXMe7BFLpUqTON898xyjSlQ6ddbMM2AnLHAc9XTTDkyyWlH2cIzEbvPvkerX337Wden8tHSaktfiseQ5Rm3p9IXciR2DhJuThkMnpg1RVCskSyA" />
                <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/50 to-transparent"></div>
                <div class="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm">
                  Deserto
                </div>
              </div>
            </div>
            <!-- Decorative Floating Card -->
            <div class="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded shadow-xl items-center gap-3 max-w-xs">
              <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span class="material-symbols-outlined">workspace_premium</span>
              </div>
              <div>
                <p class="font-label-lg text-label-lg text-on-surface leading-snug">Curadoria Sem Compromissos</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">Acesso a fornecedores e parceiros de excelência.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Separation & Editorial Statement Banner -->
    <section class="w-full bg-surface-container-low py-10">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <span class="material-symbols-outlined text-primary text-3xl shrink-0">flight_takeoff</span>
          <p class="font-headline-sm text-headline-sm text-on-surface leading-tight">
            Da idealização à aterragem: o seu universo de viagens em mãos experientes.
          </p>
        </div>
        <div class="flex items-center gap-6 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider shrink-0">
          <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-tertiary text-base">check_circle</span> Acompanhamento 24/7</span>
          <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-tertiary text-base">check_circle</span> Apoio Contínuo</span>
        </div>
      </div>
    </section>

    <!-- Catálogo de Serviços Section -->
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

    <!-- Interactive Quotation / Workflow Step Overview -->
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

    <!-- Porque Escolher os Meus Serviços Section -->
    <section class="w-full bg-surface py-20 lg:py-28 relative">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left: Distinction & Pillars -->
          <div class="lg:col-span-7 space-y-8">
            <div>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block mb-2">Vantagens &amp; Diferenciação</span>
              <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Porque escolher os meus serviços?
              </h2>
              <p class="font-headline-sm text-headline-sm text-primary font-normal mt-2">
                A segurança e sofisticação de contar com um Travel Partner dedicado.
              </p>
            </div>
            <!-- Feature check-cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="benefit in benefits" :key="benefit.title" class="p-5 bg-surface-container-lowest rounded shadow-sm flex items-start gap-3.5">
                <span class="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                <div>
                  <h4 class="font-label-lg text-label-lg text-on-surface mb-1">{{ benefit.title }}</h4>
                  <p class="font-body-md text-body-md text-on-surface-variant">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Right: Editorial Visual Statement with Quote & Data -->
          <div class="lg:col-span-5 flex flex-col gap-6">
            <div class="relative bg-surface-container-high p-8 lg:p-10 rounded shadow-md overflow-hidden">
              <span class="material-symbols-outlined text-primary/20 text-8xl absolute -top-4 -right-4 select-none">format_quote</span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block mb-3">Compromisso de Autoria</span>
              <p class="font-headline-sm text-headline-sm text-on-surface italic relative z-10 leading-relaxed mb-6">
                “Viajar é uma das maiores formas de enriquecimento pessoal. A minha missão é assegurar que esse processo decorra com deleite, elegância e absoluta paz de espírito.”
              </p>
              <div class="flex items-center gap-4 relative z-10 pt-4 border-t border-surface-variant">
                <div>
                  <h4 class="font-headline-sm text-headline-sm text-primary leading-none">Carla Coelho</h4>
                  <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Travel Designer &amp; Fundadora</p>
                </div>
              </div>
            </div>
            <!-- Trust metrics snippet -->
            <div class="bg-surface-container-lowest p-6 rounded shadow-sm grid grid-cols-2 gap-4">
              <div>
                <span class="font-headline-lg text-headline-lg text-primary block">100%</span>
                <span class="font-body-md text-body-md text-on-surface-variant">Itinerários Feitos à Medida</span>
              </div>
              <div>
                <span class="font-headline-lg text-headline-lg text-tertiary block">&lt; 24h</span>
                <span class="font-body-md text-body-md text-on-surface-variant">Resposta Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Punchline & Luxury Call To Action Section -->
    <section class="w-full bg-surface-container-low py-20 lg:py-28" id="contacto">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16 relative">
          <!-- Subtle background gradient glow -->
          <div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>
          <div class="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-tertiary-fixed/20 blur-3xl pointer-events-none"></div>
          <div class="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-primary">
              <span class="material-symbols-outlined text-base">luggage</span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Simplicidade &amp; Sofisticação</span>
            </div>
            <!-- Punchline Highlight -->
            <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              “O seu único trabalho será fazer as malas.<br />
              <span class="italic text-primary">Eu trato do resto.”</span>
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Dê o primeiro passo para a sua próxima grande viagem. Conte-me as suas preferências e deixe a complexidade connosco.
            </p>
            <!-- Action Container -->
            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-10 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md" href="mailto:concierge@carlacoelho.pt?subject=Pedido%20de%20Proposta%20Personalizada">
                <span class="material-symbols-outlined mr-2 text-xl">send</span>
                Pedir Proposta Personalizada
              </a>
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container text-on-surface hover:bg-surface-container-high px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors" href="tel:+351210998765">
                <span class="material-symbols-outlined mr-2 text-xl text-primary">call</span>
                Falar com a Carla Coelho
              </a>
            </div>
            <div class="pt-6 border-t border-surface-container flex flex-wrap items-center justify-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">verified</span>
                Consultoria sob medida
              </span>
              <span class="text-outline-variant">•</span>
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">schedule</span>
                Resposta personalizada em menos de 24 horas
              </span>
              <span class="text-outline-variant">•</span>
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">lock</span>
                Confidencialidade assegurada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Quick Inquiry Drawer (Mini interactive filter helper) -->
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
  </div>
</template>

<script setup>
const steps = [
  {
    number: '01',
    title: 'Consulta Inicial',
    description: 'Partilha de ideias, datas pretendidas, perfil dos viajantes e ambição orçamental.'
  },
  {
    number: '02',
    title: 'Proposta Curada',
    description: 'Apresentação de soluções sob medida com rotas, hotéis selecionados e estimativas claras.'
  },
  {
    number: '03',
    title: 'Ajuste & Reserva',
    description: 'Afinação ao pormenor, confirmação de reservas e emissão de documentação consolidada.'
  },
  {
    number: '04',
    title: 'Acompanhamento',
    description: 'Suporte e linha direta durante todo o percurso até ao regresso a casa.'
  }
]

const benefits = [
  {
    title: 'Atendimento próximo e personalizado',
    description: 'Relação direta e humanizada, adaptada à sua rotina e preferências de comunicação.'
  },
  {
    title: 'Planeamento adaptado às suas necessidades',
    description: 'Sem formatos genéricos. Roteiros desenhados exclusivamente em função do seu perfil.'
  },
  {
    title: 'Poupança de tempo na pesquisa e organização',
    description: 'Evite horas de buscas exaustivas. Receba apenas opções qualificadas e verificadas.'
  },
  {
    title: 'Acompanhamento durante todo o processo',
    description: 'Assistência permanente e proativa desde o rascunho inicial até ao regresso.'
  },
  {
    title: 'Recomendações pensadas para cada viajante',
    description: 'Dicas autênticas de gastronomia, recantos escondidos e logística inteligente.'
  },
  {
    title: 'Tranquilidade antes, durante e após a viagem',
    description: 'Em caso de imprevistos, alterações de voos ou dúvidas, há sempre quem resolva por si.'
  }
]

const quickChips = [
  { label: 'Voos', service: 'Voos e Conexões' },
  { label: 'Alojamento', service: 'Hotéis e Resorts' },
  { label: 'Road Trip', service: 'Road Trip Personalizada' },
  { label: 'Pacote Global', service: 'Pacote Completo Chave-na-Mão' }
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function selectService(serviceName) {
  const subject = encodeURIComponent('Pedido de Informação: ' + serviceName)
  const body = encodeURIComponent('Olá Carla,\n\nGostaria de obter mais informações sobre o serviço de ' + serviceName + '.\n\nObrigado!')
  window.location.href = 'mailto:concierge@carlacoelho.pt?subject=' + subject + '&body=' + body
}

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