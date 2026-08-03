<template>
  <div>
    <!-- Section 1: Hero Carousel -->
    <section class="relative h-[90vh] w-full overflow-hidden">
      <div class="flex h-full carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="min-w-full h-full relative">
          <div class="absolute inset-0 bg-deep-onyx/30 z-10"></div>
          <img class="w-full h-full object-cover" :src="slide.image" :alt="slide.alt" />
        </div>
      </div>
      <div class="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-margin-mobile">
        <h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 max-w-4xl leading-tight font-serif-light">
          Exploração de Alto Nível: <br class="hidden md:block" /> O Mundo à Sua Medida
        </h1>
        <p class="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl font-light">
          Experiências de viagem exclusivas com curadoria especializada para quem procura o extraordinário.
        </p>
        <div class="flex gap-6">
          <router-link class="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 font-label-lg text-label-lg uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-deep-onyx transition-all duration-500" to="/destinos">
            Explorar Destinos
          </router-link>
          <router-link class="border border-white/30 text-white px-8 py-4 font-label-lg text-label-lg uppercase tracking-[0.2em] rounded-sm hover:bg-white/10 transition-all duration-500" to="/orcamento">
            Solicitar Orçamento
          </router-link>
        </div>
      </div>
      <!-- Carousel Nav -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-6">
        <button
          v-for="(slide, index) in slides"
          :key="'dot-' + index"
          class="rounded-full transition-all carousel-dot"
          :class="currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white'"
          :style="currentSlide === index ? { width: '12px', borderRadius: '2px' } : { width: '6px', borderRadius: '50%' }"
          @click="moveCarousel(index)"
        ></button>
      </div>
    </section>

    <!-- Section 2: Sobre Nós -->
    <section class="relative py-section-gap px-margin-desktop overflow-hidden bg-background" id="sobre-nos">
      <div class="absolute inset-0 arabic-ornament pointer-events-none"></div>
      <div class="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
        <div class="w-full md:w-1/2">
          <div class="inline-block tracking-[0.2em] text-primary font-label-lg text-[11px] mb-8 uppercase">
            NOSSO COMPROMISSO
          </div>
          <h2 class="font-headline-xl text-headline-xl text-on-surface mb-8 font-serif-light leading-tight">A Arte de Viajar com Propósito e Elegância</h2>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed font-light">
            Na Carla Coelho Viagens de Luxo, não vendemos apenas destinos; desenhamos memórias. Cada viagem é uma obra-prima única, meticulosamente planeada para refletir os seus desejos mais profundos e superar as suas expectativas mais elevadas.
          </p>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed font-light">
            A nossa agência nasceu da paixão pela descoberta e do compromisso inabalável com a excelência. Com uma rede global de parceiros exclusivos, garantimos acesso ao inacessível e conforto onde o luxo encontra a autenticidade.
          </p>
          <router-link class="inline-flex items-center gap-4 text-primary font-label-lg text-label-lg hover:gap-6 transition-all tracking-widest border-b border-primary/20 pb-1" to="/sobre-nos">
            CONHEÇA A NOSSA HISTÓRIA
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </router-link>
        </div>
        <div class="w-full md:w-1/2 grid grid-cols-2 gap-6">
          <div class="aspect-[4/5] bg-surface-dim overflow-hidden rounded-sm relative group shadow-2xl shadow-primary/5">
            <img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" :src="aboutImages[0]" alt="Luxury travel accessories on marble surface" />
          </div>
          <div class="aspect-[4/5] bg-surface-dim overflow-hidden rounded-sm mt-12 relative group shadow-2xl shadow-primary/5">
            <img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" :src="aboutImages[1]" alt="Boutique hotel lobby with minimalist architecture" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Destinos (Grid) -->
    <section class="py-section-gap px-margin-desktop bg-surface-container-low" id="destinos">
      <div class="max-w-[1280px] mx-auto">
        <div class="text-center mb-20">
          <h2 class="font-headline-xl text-headline-xl text-on-surface mb-6 font-serif-light">Destinos com Alma</h2>
          <div class="h-px w-24 bg-primary/30 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <router-link v-for="destino in destinos" :key="destino.name" class="group cursor-pointer block" :to="destino.path">
            <div class="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 border border-primary/5">
              <img class="w-full h-full object-cover sepia-[0.2] group-hover:sepia-0 transition-all duration-1000 group-hover:scale-105" :src="destino.image" :alt="destino.alt" />
              <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div class="absolute bottom-10 left-10 text-white">
                <h3 class="font-headline-sm text-headline-sm mb-2 font-serif-light">{{ destino.title }}</h3>
                <p class="font-label-sm text-label-sm uppercase tracking-[0.2em] opacity-80 font-light">{{ destino.subtitle }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section 4: Serviços Exclusivos -->
    <section class="relative py-section-gap px-margin-desktop overflow-hidden bg-background" id="servicos">
      <div class="absolute inset-0 arabic-ornament pointer-events-none opacity-5"></div>
      <div class="max-w-[1280px] mx-auto relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div class="max-w-xl">
            <h2 class="font-headline-xl text-headline-xl text-on-surface mb-6 font-serif-light">Onde a Distinção se Encontra com a Conveniência</h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant font-light">Elevamos a sua viagem a um nível superior com serviços premium desenhados para a sua total tranquilidade.</p>
          </div>
          <router-link class="border-b border-primary/40 pb-2 font-label-lg text-label-lg text-primary hover:text-on-surface transition-all tracking-[0.15em] uppercase text-[12px]" to="/servicos">
            VER TODOS OS SERVIÇOS
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <router-link v-for="servico in servicos" :key="servico.name" class="bg-surface-container-lowest/50 p-12 border border-primary/5 hover:border-primary/20 transition-all group rounded-sm backdrop-blur-sm block" :to="servico.path">
            <span class="material-symbols-outlined text-4xl mb-10 group-hover:-translate-y-1 transition-transform text-tropical-lagoon">{{ servico.icon }}</span>
            <h4 class="font-headline-sm text-headline-sm text-on-surface mb-6 font-serif-light">{{ servico.title }}</h4>
            <p class="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">{{ servico.description }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section 5: Oportunidades -->
    <section class="py-section-gap px-margin-desktop bg-tropical-lagoon" id="oportunidades">
      <div class="max-w-[1280px] mx-auto">
        <div class="mb-16">
          <h2 class="font-headline-xl text-headline-xl font-serif-light text-white">Oportunidades Únicas</h2>
          <p class="font-body-lg text-body-lg font-light mt-4 text-white/90">Momentos efémeros de luxo que não voltam a repetir-se.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-[650px]">
          <div class="md:col-span-2 md:row-span-2 relative overflow-hidden group border border-primary/5 rounded-sm">
            <img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 sepia-[0.1]" :src="oportunidades[0].image" :alt="oportunidades[0].alt" />
            <div class="absolute inset-0 bg-gradient-to-t from-deep-onyx/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-12 left-12 text-white max-w-sm">
              <div class="text-primary bg-background/90 px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase mb-6 inline-block rounded-full">ÚLTIMAS VAGAS</div>
              <h3 class="font-headline-lg text-headline-lg mb-6 font-serif-light leading-tight">{{ oportunidades[0].title }}</h3>
              <router-link class="inline-block bg-white text-deep-onyx px-8 py-3 font-label-lg text-label-lg rounded-sm hover:bg-primary hover:text-white transition-colors tracking-widest uppercase text-[11px]" :to="oportunidades[0].path">Reservar Agora</router-link>
            </div>
          </div>
          <div class="md:col-span-2 relative overflow-hidden group border border-primary/5 rounded-sm">
            <img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" :src="oportunidades[1].image" :alt="oportunidades[1].alt" />
            <div class="absolute inset-0 bg-deep-onyx/40"></div>
            <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center backdrop-blur-[2px]">
              <h4 class="font-headline-sm text-headline-sm mb-3 font-serif-light">{{ oportunidades[1].title }}</h4>
              <p class="font-body-md text-body-md opacity-80 mb-6 font-light">{{ oportunidades[1].description }}</p>
              <router-link class="text-white border-b border-white/40 pb-1 font-label-lg text-label-lg tracking-[0.2em] uppercase text-[11px] hover:border-white transition-colors" :to="oportunidades[1].path">SABER MAIS</router-link>
            </div>
          </div>
          <div class="md:col-span-1 relative overflow-hidden group border border-primary/5 flex items-center justify-center p-12 text-center rounded-sm bg-surface-container-lowest">
            <div>
              <h4 class="font-headline-sm text-headline-sm text-on-surface mb-4 font-serif-light">Newsletter Exclusive</h4>
              <p class="font-body-md text-body-md text-on-surface-variant mb-8 font-light">Receba ofertas secretas todas as semanas.</p>
              <input v-model="newsletterEmail" class="w-full bg-transparent border-b border-primary/30 pb-2 mb-6 focus:outline-none focus:border-primary transition-colors text-center font-light placeholder:text-primary/40" placeholder="O seu e-mail" type="email" />
              <button class="text-primary font-label-lg text-label-lg uppercase tracking-widest text-[11px] border-b border-primary/20 hover:border-primary transition-all" @click="subscribeNewsletter">Subscrever</button>
            </div>
          </div>
          <router-link class="md:col-span-1 relative overflow-hidden group border border-primary/5 rounded-sm block" :to="oportunidades[2].path">
            <img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" :src="oportunidades[2].image" :alt="oportunidades[2].alt" />
            <div class="absolute inset-0 bg-deep-onyx/30"></div>
            <div class="absolute bottom-8 left-8 text-white">
              <p class="font-label-sm text-label-sm uppercase tracking-[0.2em] mb-1 font-light opacity-80">Wellness</p>
              <h4 class="font-headline-sm text-headline-sm font-serif-light">{{ oportunidades[2].title }}</h4>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section 6: Testemunhos -->
    <section class="relative py-section-gap px-margin-desktop overflow-hidden bg-background">
      <div class="absolute inset-0 arabic-ornament pointer-events-none opacity-5"></div>
      <div class="max-w-[1280px] mx-auto text-center relative z-10">
        <span class="material-symbols-outlined text-primary/40 text-6xl mb-10">format_quote</span>
        <div class="max-w-4xl mx-auto italic font-headline-sm text-headline-sm text-on-surface leading-relaxed mb-16 font-serif-light font-light px-4">
          "A Carla e a sua equipa transformaram o nosso 20º aniversário de casamento numa aventura que superou todos os sonhos. A atenção aos detalhes e o acesso exclusivo que nos proporcionaram foram simplesmente inigualáveis."
        </div>
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 rounded-full overflow-hidden mb-6 border border-primary/20 p-1.5 bg-background">
            <img class="w-full h-full object-cover rounded-full filter grayscale-[0.3]" :src="testimonialImage" alt="Portrait of a sophisticated couple" />
          </div>
          <h5 class="font-label-lg text-label-lg text-on-surface tracking-widest uppercase text-[12px] mb-1">Ana & Ricardo Ferreira</h5>
          <p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.25em] font-light text-[10px]">Viajantes Frequentes</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
let carouselInterval = null

const slides = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVyqs8O_4IaIjqV92njWRIvjqnAuL3TcC4i5LDVWkZkZRiCdapTGywRf6Bc4mNYzU2z5AnASRJUp7OnXwmvguYMm_cSZN8VBfv-oVR3AoaSKGSUtNXd0Wh6ts3wkJtt1ScSgHAu9qgauP_aX-EQKpLRGhkq9jVaY835sQIT6ZrHq1gPleqjK7K8S3cc0kun5MemH8N9DT7Gfx1cCj2FUAxa1wa7T7tkAdPCG3lGKia88ZA14uFaGtV1eVSvTqUJrEObNMjMcJDpzE',
    alt: 'A breathtaking aerial view of a private tropical island resort in the Maldives'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXpXrNx2_7oYVj7yPG9waxwGBmj2jhY3XOSmjdpajgTw3U_0vHEF7lcF8NDA5JIY5WIE9drocrnT5V3KsyBjH4RtabcHMQmswffegkYZVLd681FZrCmvw_gnzgDmqSAdd3H2xcL1JjBuZli8Emk6Q8Ea1c9UJZqhyxkOO64an1v-u5-oyxSBEf8DGy9esA0X2uS-NbWZ4PYwtJpmNGIex-lW0xM_gTZnHSPM889nbeJshCrs1KjHmLs-uN8S5WiFxcGnO0EbI5VQ',
    alt: 'A romantic sunset dinner setting in the middle of a vast desert landscape'
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOecJILLeSh2Ozxe3HKyBtTLkHz-bniYWfZtIR1A6IAyjdaFlOfXgIU6whwUuyzkOLTvdXw20mnAMMIe5kT592zpqfD-aGHo3oX2TK_4cDjYK6fsqA4cu6Uz4p_JB6rar1gzVENphQQBbOfiO1DaRfKAxaIo4Agn3NvLnxDTdJj1pael2QthoAwKtEOE8mTjs_YT9nwtQTTI-9yH7xt7KkQ0R2FS4YyqXTBJANPVUfecgvWgWgj76DjTEtokGJ5FORqgjZwEZNvHg',
    alt: 'A historic cobblestone street in Florence, Italy, during the soft morning light'
  }
]

const aboutImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDi-O6EVwYn-5rlT2HFITO0n_zNP1_W55EihBtWOejfWitaAWdSCQgp1jCXrsuqn7hqLU6vEKV9TCAoOgt3-N0oDkH_l3CoOMJQQBpvKB5fdG-k3d2SyDNpXd7mBBovIcsPC9FaMAQfi2LPMJRAQfmlVdfw-RJwK8BESYkKlXDVAv3mBFyxOFw7UY_0xfrXcyIsfSQSuYW7t48nB9YGPvzhYM_gwT8upopT_-4E1TaZWHVitkm4YhoQEyBOGc2Ke7ErRkB4fbBbyKo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCsCbmN_DzWeuZ6cB6y2KU0RNKDH4_Z_QmD02lGi69tIsHJiM5d3-g9oHN0aYCCAdpmVgkX2jAZ4FUOt9cvnm6n4L4ErRbbZXF3qflZehwCu6yS1s_qEedT0ohGkhcMpec6BRZUAVy2NeGfJ9TkE9Mj5vxTQfN3W0i6qIRl8d4eods0nvALIswO4Mbfi3dp-z-JEH7SIha-CDvD5_hy0XjYJ9m3pHje6Qt-HmHVH4eRkdJlFF243IsWS8E15O-WY6SPNRx_-HDC9KM'
]

const destinos = [
  {
    name: 'praias',
    title: 'Praias Tropicais',
    subtitle: 'Refúgios Paradisíacos',
    path: '/destinos/praias-tropicais',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVyqs8O_4IaIjqV92njWRIvjqnAuL3TcC4i5LDVWkZkZRiCdapTGywRf6Bc4mNYzU2z5AnASRJUp7OnXwmvguYMm_cSZN8VBfv-oVR3AoaSKGSUtNXd0Wh6ts3wkJtt1ScSgHAu9qgauP_aX-EQKpLRGhkq9jVaY835sQIT6ZrHq1gPleqjK7K8S3cc0kun5MemH8N9DT7Gfx1cCj2FUAxa1wa7T7tkAdPCG3lGKia88ZA14uFaGtV1eVSvTqUJrEObNMjMcJDpzE',
    alt: 'Aerial view of a luxury tropical beach destination with white sand and clear blue water'
  },
  {
    name: 'desertos',
    title: 'Desertos Exóticos',
    subtitle: 'Mistérios do Oriente',
    path: '/destinos/desertos-exoticos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXpXrNx2_7oYVj7yPG9waxwGBmj2jhY3XOSmjdpajgTw3U_0vHEF7lcF8NDA5JIY5WIE9drocrnT5V3KsyBjH4RtabcHMQmswffegkYZVLd681FZrCmvw_gnzgDmqSAdd3H2xcL1JjBuZli8Emk6Q8Ea1c9UJZqhyxkOO64an1v-u5-oyxSBEf8DGy9esA0X2uS-NbWZ4PYwtJpmNGIex-lW0xM_gTZnHSPM889nbeJshCrs1KjHmLs-uN8S5WiFxcGnO0EbI5VQ',
    alt: 'Dramatic desert dunes at sunset with a luxury tent camp'
  },
  {
    name: 'cidades',
    title: 'Cidades Históricas',
    subtitle: 'Cultura e Tradição',
    path: '/destinos/cidades-historicas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOecJILLeSh2Ozxe3HKyBtTLkHz-bniYWfZtIR1A6IAyjdaFlOfXgIU6whwUuyzkOLTvdXw20mnAMMIe5kT592zpqfD-aGHo3oX2TK_4cDjYK6fsqA4cu6Uz4p_JB6rar1gzVENphQQBbOfiO1DaRfKAxaIo4Agn3NvLnxDTdJj1pael2QthoAwKtEOE8mTjs_YT9nwtQTTI-9yH7xt7KkQ0R2FS4YyqXTBJANPVUfecgvWgWgj76DjTEtokGJ5FORqgjZwEZNvHg',
    alt: 'Historical architecture of a European city at dusk'
  }
]

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
    description: 'Priority check-in, lounges exclusivos e convites para eventos restritos em qualquer parte do globo.',
    path: '/vip-concierge'
  }
]

const oportunidades = [
  {
    title: 'Inverno nos Alpes: Retiro em Chalé de Vidro',
    path: '/oportunidades/inverno-alpes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsilvUH6T7rjeNPt56x4I5KmlKA5MzZKD-QxCHxa0aBWL6GckMeJtt8bbyYbvn9SGfAkG_ioLLcuO2p5EaU-fmzWtC_RrhAXWL3J7fRbUXpS-tfhHkW3F68hF5RswUmjsfy9ZgpoE7z1N-pM2dyfNp2-E69Q87OWj2TBIDGwmivwoU5uEtReePI4_nsdezLaw9667bRLiXrpjisWJ1A3S9mD7kmO4bNoEZr6J7ck0axsVBPVOjtlYPlWKJqmjfejvUI0KIdnCF8c',
    alt: 'A wide-angle landscape of the Swiss Alps in winter with a luxury glass-walled chalet'
  },
  {
    title: 'Private Jet Experience',
    description: 'Voo exclusivo para o Mónaco com estadia VIP.',
    path: '/oportunidades/private-jet',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnKsArknnfG0fKiCi8ksPkC0MfLSz8Ebeg0d-XqCmKJhUo0utt6QRFy8h3QfNZJuxGfWs_dk6cemxVaoWvU-8m5ftfdeQwYkuJK8dXotGwp0z0Xq3UwlLVKZizv-CYKAr6td4VLtnNvh1IXa6SdyOmmXBfWWSgbtNdup118NVqyOpM8zbrOfszTXfxQa3x9oZkRMd7q9xrK6FtRBrpzEubP5oZFiGfGndW1YS82tsf_h23vGq6GWB8d9cg84EEPkJfKPcjig_26UI',
    alt: 'A high-end private jet interior with cream leather seats'
  },
  {
    title: 'Zen Kyoto',
    path: '/oportunidades/zen-kyoto',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgVkn1rPDxoepWN30PnTWkH_kaj7PUmFdC1UeX-wTTj9Y8JjxUZUPWmSaoIP8TqImy3e2CN8GTtqgsVI4VwytIYPlOA8Zlr7VIP9WLJHpfg6gxcIm6QmyHhPWsxn4AciZO1QL85XjGxCf7qngWC0QhVir9ZAL1RFJQrjDZcSMNmigH4NbfzRQdw-YtaN_stZMoShrT9KnC7SohCNdb1AWOZn2pcrPZjLHrBX8GnI-8PJZwl05lHme17NsXuYkkg5_14LniIlcTw',
    alt: 'A tranquil scene of a luxury spa treatment room overlooking a Japanese Zen garden'
  }
]

const testimonialImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDApaCcXYZ4JVFtzZlixYiLu1cF343FzRdacnubYXb4rSx5i11sWkqmvQ8jia-S-4X98Ng9z-ut4YCubhzwCbyMjJCUPGcfXbFMFLkoYh5Qs5LabLwWvy923w5IJujG6b9W-cu-jUZjtgpwa8JWzbgZJHxlb9AumpbVcQsEGETE89gEf9kO2Ox7Sa10Mn_VqPcvfnqXuGnbcAcj-WgLwHeB30PEj_Hd48JQgal5yZBnzRu-JuASw0nc4cNAlszVCCkaSXs7ufyK0e4'

const newsletterEmail = ref('')

function moveCarousel(index) {
  currentSlide.value = index
}

function subscribeNewsletter() {
  if (newsletterEmail.value) {
    alert('Obrigado por subscrever! Em breve receberá as nossas ofertas exclusivas.')
    newsletterEmail.value = ''
  }
}

onMounted(() => {
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 7000)
})

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
})
</script>