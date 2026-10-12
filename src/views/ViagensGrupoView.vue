<template>
  <div class="flex flex-col w-full">
    <!-- Hero Section -->
    <section class="relative w-full overflow-hidden bg-surface py-12 lg:py-20">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left Column: Positioning -->
          <div class="lg:col-span-7 flex flex-col space-y-6">
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit">
              <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Experiências Partilhadas</span>
            </div>
            <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              Viagens de Grupo <span class="italic font-normal text-primary">Exclusivas</span>
            </h1>
            <p class="font-headline-sm text-headline-sm text-on-surface-variant font-light leading-snug">
              Experiências únicas para quem acredita que as melhores memórias são vividas em conjunto
            </p>
            <div class="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer" href="#destinos-grupo" @click.prevent="scrollToSection('destinos-grupo')">
                Descobrir as Viagens
                <span class="material-symbols-outlined ml-2 text-lg">arrow_downward</span>
              </a>
              <router-link class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container-high text-on-surface hover:bg-surface-container-highest px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors" to="/orcamento">
                Solicitar Orçamento
              </router-link>
            </div>
          </div>
          <!-- Right Column: Editorial Image Trio -->
          <div class="lg:col-span-5 relative">
            <div class="grid grid-cols-12 gap-4">
              <!-- Main Tall Image -->
              <div class="col-span-8 overflow-hidden rounded shadow-xl group">
                <div class="relative h-[380px] lg:h-[480px] overflow-hidden">
                  <img alt="Rua histórica empedrada em Florença, Itália, sob a luz suave da manhã" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOecJILLeSh2Ozxe3HKyBtTLkHz-bniYWfZtIR1A6IAyjdaFlOfXgIU6whwUuyzkOLTvdXw20mnAMMIe5kT592zpqfD-aGHo3oX2TK_4cDjYK6fsqA4cu6Uz4p_JB6rar1gzVENphQQBbOfiO1DaRfKAxaIo4Agn3NvLnxDTdJj1pael2QthoAwKtEOE8mTjs_YT9nwtQTTI-9yH7xt7KkQ0R2FS4YyqXTBJANPVUfecgvWgWgj76DjTEtokGJ5FORqgjZwEZNvHg" />
                  <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-4 left-4 right-4 text-surface-container-lowest">
                    <span class="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed font-semibold">Juntos pelo Mundo</span>
                    <p class="font-headline-sm text-headline-sm font-light mt-0.5">Memórias que ficam para sempre</p>
                  </div>
                </div>
              </div>
              <!-- Vertical Stacked Side Images -->
              <div class="col-span-4 flex flex-col gap-4">
                <div class="relative h-[180px] lg:h-[230px] rounded overflow-hidden shadow-md group">
                  <img alt="Vista aérea de um resort privado nas Maldivas" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVyqs8O_4IaIjqV92njWRIvjqnAuL3TcC4i5LDVWkZkZRiCdapTGywRf6Bc4mNYzU2z5AnASRJUp7OnXwmvguYMm_cSZN8VBfv-oVR3AoaSKGSUtNXd0Wh6ts3wkJtt1ScSgHAu9qgauP_aX-EQKpLRGhkq9jVaY835sQIT6ZrHq1gPleqjK7K8S3cc0kun5MemH8N9DT7Gfx1cCj2FUAxa1wa7T7tkAdPCG3lGKia88ZA14uFaGtV1eVSvTqUJrEObNMjMcJDpzE" />
                  <div class="absolute inset-0 bg-primary/10"></div>
                  <div class="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm">
                    Praia
                  </div>
                </div>
                <div class="relative h-[184px] lg:h-[234px] rounded overflow-hidden shadow-md group">
                  <img alt="Dunas deslumbrantes ao pôr do sol com um acampamento de luxo" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkXpXrNx2_7oYVj7yPG9waxwGBmj2jhY3XOSmjdpajgTw3U_0vHEF7lcF8NDA5JIY5WIE9drocrnT5V3KsyBjH4RtabcHMQmswffegkYZVLd681FZrCmvw_gnzgDmqSAdd3H2xcL1JjBuZli8Emk6Q8Ea1c9UJZqhyxkOO64an1v-u5-oyxSBEf8DGy9esA0X2uS-NbWZ4PYwtJpmNGIex-lW0xM_gTZnHSPM889nbeJshCrs1KjHmLs-uN8S5WiFxcGnO0EbI5VQ" />
                  <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/50 to-transparent"></div>
                  <div class="absolute bottom-2 left-2 bg-surface/90 backdrop-blur-sm px-2 py-1 rounded text-on-surface font-label-sm text-label-sm">
                    Deserto
                  </div>
                </div>
              </div>
            </div>
            <!-- Decorative Floating Card -->
            <div class="hidden sm:flex absolute -bottom-6 left-8 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded shadow-xl items-center gap-3 max-w-xs">
              <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0">
                <span class="material-symbols-outlined">groups</span>
              </div>
              <div>
                <p class="font-label-lg text-label-lg text-on-surface leading-snug">Grupos até 16 Pessoas</p>
                <p class="font-label-sm text-label-sm text-on-surface-variant">Um ambiente próximo e familiar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Quote & Narrative Section -->
    <section class="w-full bg-surface-container-low py-20 lg:py-28">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Lead Quote -->
        <div class="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <span class="material-symbols-outlined text-primary/40 text-6xl select-none block">format_quote</span>
          <p class="font-headline-sm text-headline-sm md:text-headline-xl text-on-surface italic font-light leading-relaxed">
            "Viajar em grupo é descobrir novos destinos, criar ligações genuínas e partilhar momentos que se tornam recordações para toda a vida."
          </p>
        </div>
        <!-- Narrative -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <p class="text-on-surface-variant font-body-lg text-body-lg">
            As minhas viagens de grupo são cuidadosamente concebidas para proporcionar experiências autênticas, enriquecedoras e inesquecíveis, permitindo que cada participante viaje com conforto, segurança e sem preocupações.
          </p>
          <p class="text-on-surface-variant font-body-lg text-body-lg">
            Cada programa é pensado ao detalhe, equilibrando os locais mais emblemáticos de cada destino com experiências genuínas, cultura local, gastronomia, momentos de convívio e tempo livre para desfrutar ao seu próprio ritmo.
          </p>
          <p class="text-on-surface-variant font-body-lg text-body-lg">
            Os grupos são reduzidos, promovendo um ambiente mais próximo e acolhedor, onde é fácil criar novas amizades e viver a viagem de uma forma mais personalizada.
          </p>
          <p class="text-on-surface-variant font-body-lg text-body-lg">
            Desde o momento da inscrição até ao regresso a casa, acompanho todo o processo para que apenas tenha de fazer uma coisa: aproveitar cada instante da aventura.
          </p>
        </div>
      </div>
    </section>

    <!-- O Que Pode Esperar Section -->
    <section class="w-full bg-surface py-20 lg:py-28" id="expectativas">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div class="space-y-3 max-w-2xl">
            <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">O Que Pode Esperar</span>
            <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              O que pode esperar das nossas viagens de grupo?
            </h2>
          </div>
          <div class="hidden md:flex items-center gap-2">
            <span class="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">{{ expectations.length }} Garantias</span>
            <span class="w-12 h-[1px] bg-outline-variant"></span>
          </div>
        </div>
        <!-- Expectations Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in expectations" :key="item" class="p-6 bg-surface-container-lowest rounded shadow-sm flex items-start gap-4 transition-all duration-300 hover:shadow-md">
            <span class="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5" style="font-variation-settings: 'FILL' 1;">check_circle</span>
            <h3 class="font-label-lg text-label-lg text-on-surface">{{ item }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Statement Banner Section -->
    <section class="w-full bg-tertiary-fixed py-14 lg:py-16">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 text-center lg:text-left">
          <!-- Side Labels -->
          <div class="hidden lg:flex items-center gap-4 shrink-0">
            <span class="w-16 h-[1px] bg-on-surface/30"></span>
            <span class="font-label-lg text-label-lg text-on-surface uppercase tracking-widest">Grupos Reduzidos</span>
          </div>
          <!-- Center Content -->
          <div class="max-w-3xl flex flex-col items-center gap-4">
            <span class="material-symbols-outlined text-primary text-3xl">flight</span>
            <p class="font-headline-sm text-headline-sm md:text-headline-xl text-on-surface font-light leading-snug">
              Porque algumas viagens visitam lugares. As melhores criam histórias, emoções e amizades que ficam para sempre.
            </p>
          </div>
          <div class="hidden lg:flex items-center gap-4 shrink-0">
            <span class="font-label-lg text-label-lg text-on-surface uppercase tracking-widest">Acompanhamento Próximo</span>
            <span class="w-16 h-[1px] bg-on-surface/30"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Como Funcionam Section -->
    <section class="w-full bg-surface-container-low py-20 lg:py-28" id="como-funcionam">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Section Header -->
        <div class="max-w-3xl mb-12 space-y-3">
          <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Como Funcionam</span>
          <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            Como funcionam as viagens de grupo?
          </h2>
        </div>
        <p class="max-w-4xl text-on-surface-variant font-body-lg text-body-lg mb-12">
          Cada viagem de grupo é preparada com dedicação e atenção aos detalhes, para que os participantes possam simplesmente desfrutar da experiência. Os itinerários foram pensados para combinar os locais mais emblemáticos com experiências autênticas, proporcionando uma imersão verdadeira na cultura e no estilo de vida de cada destino. Com grupos mais pequenos e um ambiente acolhedor, cada viagem torna-se uma oportunidade para criar memórias, partilhar momentos e estabelecer novas amizades.
        </p>
        <!-- Highlight Row -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Stat Card -->
          <div class="lg:col-span-4 bg-surface-container-lowest rounded shadow-sm p-8 flex flex-col items-center justify-center text-center">
            <span class="material-symbols-outlined text-primary text-3xl mb-4">groups</span>
            <p class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-none">16</p>
            <p class="font-label-lg text-label-lg text-on-surface mt-3">Pessoas por Grupo</p>
            <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">Máximo</p>
          </div>
          <!-- Q&A Card -->
          <div class="lg:col-span-8 bg-surface-container-lowest rounded shadow-sm p-8 border border-primary/10">
            <div class="flex items-start gap-4 mb-4">
              <span class="material-symbols-outlined text-primary text-2xl shrink-0">help</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface">Qual é o tamanho dos grupos?</h3>
            </div>
            <p class="text-on-surface-variant font-body-lg text-body-lg">
              Privilegiamos grupos reduzidos, com um máximo de 16 pessoas, acompanhadas por um líder de viagem experiente, para garantir uma experiência mais exclusiva e personalizada. Esta dimensão permite um maior conforto, uma dinâmica mais próxima entre os participantes e o acesso a experiências cuidadosamente selecionadas que valorizam a autenticidade de cada destino.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- As Nossas Viagens de Grupo: Continentes -->
    <section class="w-full bg-surface py-20 lg:py-28" id="destinos-grupo">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <!-- Section Header -->
        <div class="max-w-2xl mb-10 space-y-3">
          <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Destinos</span>
          <h2 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            As nossas viagens de grupo
          </h2>
          <p class="text-on-surface-variant font-body-lg text-body-lg">
            Escolha um continente para descobrir alguns dos destinos que fazem parte das nossas partidas.
          </p>
        </div>
        <!-- Continent Buttons -->
        <div class="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Continentes">
          <button
            v-for="cont in continents"
            :key="cont.name"
            class="px-6 py-3 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2"
            :class="activeContinent === cont.name ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'"
            role="tab"
            :aria-selected="activeContinent === cont.name"
            @click="activeContinent = cont.name"
          >
            <span class="material-symbols-outlined text-lg">public</span>
            {{ cont.name }}
            <span class="text-xs opacity-70">{{ cont.destinations.length }}</span>
          </button>
        </div>
        <!-- Destinations Panel -->
        <Transition name="panel-fade" mode="out-in">
          <div v-if="currentContinent" :key="activeContinent" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <!-- Continent Image -->
            <div class="lg:col-span-5 overflow-hidden rounded shadow-xl group relative h-[280px] lg:h-[340px]">
              <img :src="currentContinent.image" :alt="currentContinent.alt" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="font-label-sm text-label-sm tracking-widest uppercase text-tertiary-fixed font-semibold">{{ currentContinent.name }}</span>
                <p class="font-headline-sm text-headline-sm font-light text-surface-container-lowest mt-0.5">{{ currentContinent.subtitle }}</p>
              </div>
            </div>
            <!-- Destination Chips -->
            <div class="lg:col-span-7 space-y-6">
              <div class="flex flex-wrap gap-3">
                <span v-for="destino in currentContinent.destinations" :key="destino" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg border border-primary/10 hover:border-primary/40 transition-colors">
                  <span class="material-symbols-outlined text-primary text-lg">location_on</span>
                  {{ destino }}
                </span>
              </div>
              <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                {{ currentContinent.destinations.length }} destinos em destaque
              </p>
              <a class="inline-flex items-center gap-2 text-primary font-label-lg text-label-lg uppercase tracking-widest hover:gap-4 transition-all border-b border-primary/30 pb-1 cursor-pointer" href="mailto:concierge@carlacoelho.pt?subject=Informações%20sobre%20Viagens%20de%20Grupo">
                Pedir Informações
                <span class="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- A Próxima Grande Aventura CTA Section -->
    <section class="w-full bg-surface-container-low py-20 lg:py-28" id="contacto">
      <div class="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden p-8 sm:p-12 lg:p-16 relative">
          <!-- Subtle background gradient glow -->
          <div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none"></div>
          <div class="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-tertiary-fixed/20 blur-3xl pointer-events-none"></div>
          <div class="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-primary">
              <span class="material-symbols-outlined text-base">flight_takeoff</span>
              <span class="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Próxima Partida</span>
            </div>
            <!-- Punchline Highlight -->
            <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight leading-tight">
              A próxima grande <span class="italic text-primary">aventura</span> começa aqui
            </h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
              Parta à descoberta de destinos fascinantes através de viagens cuidadosamente planeadas, em grupos reduzidos e com acompanhamento próximo. Viva experiências genuínas, conheça pessoas inspiradoras e desfrute de cada momento sem preocupações.
            </p>
            <p class="font-headline-sm text-headline-sm text-primary italic max-w-xl mx-auto">
              Porque as melhores viagens não são apenas aquelas que nos levam a novos lugares, mas também aquelas que nos proporcionam memórias para a vida.
            </p>
            <!-- Action Container -->
            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <router-link class="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-10 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 shadow-md" to="/orcamento">
                <span class="material-symbols-outlined mr-2 text-xl">event_available</span>
                Reservar o Meu Lugar
              </router-link>
              <a class="w-full sm:w-auto inline-flex items-center justify-center bg-surface-container text-on-surface hover:bg-surface-container-high px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider transition-colors" href="mailto:concierge@carlacoelho.pt?subject=Informações%20sobre%20Viagens%20de%20Grupo">
                <span class="material-symbols-outlined mr-2 text-xl text-primary">mail</span>
                Pedir Informações
              </a>
            </div>
            <div class="pt-6 border-t border-surface-container flex flex-wrap items-center justify-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">groups</span>
                Grupos até 16 participantes
              </span>
              <span class="text-outline-variant">•</span>
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">badge</span>
                Líder de viagem experiente
              </span>
              <span class="text-outline-variant">•</span>
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">verified</span>
                Acompanhamento de ponta a ponta
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const expectations = [
  'Itinerários cuidadosamente planeados',
  'Experiências autênticas e diferenciadoras',
  'Acompanhamento próximo e personalizado',
  'Grupos reduzidos e ambiente familiar',
  'Equilíbrio entre atividades organizadas e tempo livre',
  'Segurança, conforto e tranquilidade durante toda a viagem'
]

const continents = [
  {
    name: 'África',
    subtitle: 'Safaris, desertos e culturas milenares',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXpXrNx2_7oYVj7yPG9waxwGBmj2jhY3XOSmjdpajgTw3U_0vHEF7lcF8NDA5JIY5WIE9drocrnT5V3KsyBjH4RtabcHMQmswffegkYZVLd681FZrCmvw_gnzgDmqSAdd3H2xcL1JjBuZli8Emk6Q8Ea1c9UJZqhyxkOO64an1v-u5-oyxSBEf8DGy9esA0X2uS-NbWZ4PYwtJpmNGIex-lW0xM_gTZnHSPM889nbeJshCrs1KjHmLs-uN8S5WiFxcGnO0EbI5VQ',
    alt: 'Dunas deslumbrantes ao pôr do sol com um acampamento de luxo',
    destinations: ['Marrocos', 'Egito', 'Quênia', 'Tanzânia', 'África do Sul', 'Namíbia']
  },
  {
    name: 'Ásia',
    subtitle: 'Tradições, sabores e paraísos tropicais',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVyqs8O_4IaIjqV92njWRIvjqnAuL3TcC4i5LDVWkZkZRiCdapTGywRf6Bc4mNYzU2z5AnASRJUp7OnXwmvguYMm_cSZN8VBfv-oVR3AoaSKGSUtNXd0Wh6ts3wkJtt1ScSgHAu9qgauP_aX-EQKpLRGhkq9jVaY835sQIT6ZrHq1gPleqjK7K8S3cc0kun5MemH8N9DT7Gfx1cCj2FUAxa1wa7T7tkAdPCG3lGKia88ZA14uFaGtV1eVSvTqUJrEObNMjMcJDpzE',
    alt: 'Vista aérea de um resort privado nas Maldivas',
    destinations: ['Japão', 'Maldivas', 'Indonésia', 'Vietname', 'Tailândia', 'Emirados Árabes']
  },
  {
    name: 'Europa',
    subtitle: 'História, arte e gastronomia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOecJILLeSh2Ozxe3HKyBtTLkHz-bniYWfZtIR1A6IAyjdaFlOfXgIU6whwUuyzkOLTvdXw20mnAMMIe5kT592zpqfD-aGHo3oX2TK_4cDjYK6fsqA4cu6Uz4p_JB6rar1gzVENphQQBbOfiO1DaRfKAxaIo4Agn3NvLnxDTdJj1pael2QthoAwKtEOE8mTjs_YT9nwtQTTI-9yH7xt7KkQ0R2FS4YyqXTBJANPVUfecgvWgWgj76DjTEtokGJ5FORqgjZwEZNvHg',
    alt: 'Rua histórica empedrada em Florença, Itália, sob a luz suave da manhã',
    destinations: ['Portugal', 'Itália', 'França', 'Grécia', 'Suíça', 'Espanha']
  },
  {
    name: 'Américas',
    subtitle: 'Natureza exuberante e cidades vibrantes',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1USIDJxh0KgdIVXTYSw95_3C5YVkrOU4j-rhiF1FDax7IouqyG75nxuj1nTFCJgwusbuo4IzKp0GKhkD0qHoev4JaHit_BiJ9KMymh6JBQavtAEFso3ZA3TeabAwWRrniYW_RjZE52itTM6D59kkwCIcRARE6v5wl1xD95JXoPXopStsdvkwyGg9uTPPYsAiAwpb3sN7iBoH-TrCvtkZOg6mZQzBFlQlq7wJIaNyU9moRyfz5lYY6BVHAw',
    alt: 'Resort de luxo com piscina infinita sobre o oceano ao pôr do sol',
    destinations: ['Brasil', 'México', 'Peru', 'Estados Unidos', 'Costa Rica', 'Argentina']
  }
]

const activeContinent = ref('África')
const currentContinent = computed(() => continents.find(c => c.name === activeContinent.value))

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.panel-fade-enter-from,
.panel-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>