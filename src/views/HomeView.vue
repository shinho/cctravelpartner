<template>
  <main class="sticky-sections-demo">
    <!-- Header Section -->
    <header class="frame frame--header" :style="{ backgroundImage: `url(${slides[0].image})` }">
      <div class="frame__overlay"></div>
      <div class="frame__heading">
        <h1 class="frame__title">Carla Coelho Viagens de Luxo</h1>
        <p class="text-meta">Exploração de Alto Nível: O Mundo à Sua Medida</p>
      </div>
      <div class="frame__content">
        <p class="text-large">Experiências de viagem exclusivas com curadoria especializada para quem procura o extraordinário.</p>
        <div class="frame__buttons">
          <router-link class="btn btn--primary" to="/destinos">Explorar Destinos</router-link>
          <router-link class="btn btn--secondary" to="/orcamento">Solicitar Orçamento</router-link>
        </div>
      </div>
      <!-- Carousel Nav -->
      <div class="frame__nav">
        <button
          v-for="(slide, index) in slides"
          :key="'dot-' + index"
          class="nav-dot"
          :class="{ 'nav-dot--active': currentSlide === index }"
          @click="moveCarousel(index)"
        ></button>
      </div>
    </header>

    <!-- Intro section -->
    <div class="content content--highlight content--intro">
      <p class="text-large">Na Carla Coelho Viagens de Luxo, não vendemos apenas destinos; desenhamos memórias.</p>
    </div>

    <!-- Wrap - contains all sticky sections -->
    <div class="wrap">
      <!-- Section 1: Sobre Nós -->
      <div class="content content--sticky content--grid bg-1" data-content-index="0">
        <div class="content__inner">
          <div class="content__img-wrap">
            <img class="content__img content__img--large content__img--left" :src="aboutImages[0]" alt="Luxury travel accessories">
          </div>
          <div class="content__text-wrap">
            <span class="text-meta uppercase tracking-widest text-xs">Nosso Compromisso</span>
            <h2 class="content__title"><i>A Arte de Viajar</i> com Propósito e Elegância</h2>
            <p class="content__text content__text--left text-meta">Na Carla Coelho Viagens de Luxo, não vendemos apenas destinos; desenhamos memórias. Cada viagem é uma obra-prima única, meticulosamente planeada para refletir os seus desejos mais profundos e superar as suas expectativas mais elevadas.</p>
            <p class="content__text content__text--left text-meta">A nossa agência nasceu da paixão pela descoberta e do compromisso inabalável com a excelência. Com uma rede global de parceiros exclusivos, garantimos acesso ao inacessível e conforto onde o luxo encontra a autenticidade.</p>
            <router-link class="content__link" to="/sobre-mim">
              CONHEÇA A NOSSA HISTÓRIA →
            </router-link>
          </div>
        </div>
      </div>

      <!-- Section 2: Destinos -->
      <div class="content content--sticky content--grid bg-2" data-content-index="1">
        <div class="content__inner">
          <div class="content__img-wrap">
            <img class="content__img content__img--large content__img--left" :src="destinos[0].image" alt="Praias Tropicais">
          </div>
          <div class="content__text-wrap">
            <h2 class="content__title"><i>Destinos</i> com Alma</h2>
            <p class="content__text content__text--left text-meta">Experiências únicas em locais extraordinários. Cada destino é cuidadosamente seleccionado para oferecer o melhor do luxo e autenticidade.</p>
            <div class="content__grid">
              <router-link v-for="destino in destinos" :key="destino.name" class="content__card" :to="destino.path">
                <img :src="destino.image" :alt="destino.alt" />
                <div class="content__card-overlay">
                  <h3>{{ destino.title }}</h3>
                  <p>{{ destino.subtitle }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Serviços -->
      <div class="content content--sticky content--grid bg-3" data-content-index="2">
        <div class="content__inner">
          <div class="content__img-wrap">
            <img class="content__img content__img--large content__img--left" :src="aboutImages[1]" alt="Boutique hotel lobby">
          </div>
          <div class="content__text-wrap">
            <h2 class="content__title"><i>Onde a Distinção</i> se Encontra com a Conveniência</h2>
            <p class="content__text content__text--left text-meta">Elevamos a sua viagem a um nível superior com serviços premium desenhados para a sua total tranquilidade.</p>
            <div class="content__services">
              <router-link v-for="servico in servicos" :key="servico.name" class="service-card" :to="servico.path">
                <span class="material-symbols-outlined">{{ servico.icon }}</span>
                <h4>{{ servico.title }}</h4>
                <p>{{ servico.description }}</p>
              </router-link>
            </div>
            <router-link class="content__link" to="/servicos">VER TODOS OS SERVIÇOS →</router-link>
          </div>
        </div>
      </div>

      <!-- Section 4: Oportunidades -->
      <div class="content content--sticky content--grid bg-4" data-content-index="3">
        <div class="content__inner">
          <div class="content__img-wrap">
            <img class="content__img content__img--large content__img--left" :src="oportunidades[0].image" alt="Alpes">
          </div>
          <div class="content__text-wrap">
            <h2 class="content__title"><i>Oportunidades</i> Únicas</h2>
            <p class="content__text content__text--left text-meta">Momentos efémeros de luxo que não voltam a repetir-se.</p>
            <div class="content__opportunities">
              <div class="opportunity-card opportunity-card--large">
                <img :src="oportunidades[0].image" alt="Inverno nos Alpes" />
                <div class="opportunity-card__content">
                  <span class="tag">ÚLTIMAS VAGAS</span>
                  <h3>{{ oportunidades[0].title }}</h3>
                  <router-link :to="oportunidades[0].path" class="btn btn--small">Reservar Agora</router-link>
                </div>
              </div>
              <div class="opportunity-card opportunity-card--medium">
                <img :src="oportunidades[1].image" alt="Private Jet" />
                <div class="opportunity-card__content">
                  <h4>{{ oportunidades[1].title }}</h4>
                  <p>{{ oportunidades[1].description }}</p>
                  <router-link :to="oportunidades[1].path" class="content__link">SABER MAIS →</router-link>
                </div>
              </div>
              <div class="opportunity-card opportunity-card--small">
                <img :src="oportunidades[2].image" alt="Zen Kyoto" />
                <div class="opportunity-card__content">
                  <span class="tag">Wellness</span>
                  <h4>{{ oportunidades[2].title }}</h4>
                </div>
              </div>
              <div class="opportunity-card opportunity-card--small bg-light">
                <div class="newsletter-form">
                  <h4>Newsletter Exclusive</h4>
                  <p>Receba ofertas secretas todas as semanas.</p>
                  <input v-model="newsletterEmail" type="email" placeholder="O seu e-mail" />
                  <button @click="subscribeNewsletter">Subscrever</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 5: Testemunhos -->
      <div class="content content--sticky content--grid bg-5" data-content-index="4">
        <div class="content__inner">
          <div class="content__img-wrap">
            <span class="material-symbols-outlined content__quote-icon">format_quote</span>
          </div>
          <div class="content__text-wrap">
            <h2 class="content__title"><i>Testemunhos</i></h2>
            <p class="content__text content__text--left text-meta">O que os nossos clientes dizem sobre as suas experiências excepcionais.</p>
            <div class="testimonial">
              <p class="testimonial__text">"A Carla e a sua equipa transformaram o nosso 20º aniversário de casamento numa aventura que superou todos os sonhos. A atenção aos detalhes e o acesso exclusivo que nos proporcionaram foram simplesmente inigualáveis."</p>
              <div class="testimonial__author">
                <img :src="testimonialImage" alt="Ana & Ricardo Ferreira" />
                <div>
                  <h4>Ana & Ricardo Ferreira</h4>
                  <p>Viajantes Frequentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Outro section -->
    <div class="content content--highlight content--outro">
      <p class="text-large">Pronto para começar a sua próxima aventura? Entre em contacto e deixe-nos criar a sua experiência de viagem perfeita.</p>
    </div>

    <!-- Footer -->
    <footer class="frame frame--footer">
      <p class="frame__author"><span>Carla Coelho Viagens de Luxo</span> <span><a href="mailto:contact@carlacoelho.com">contact@carlacoelho.com</a></span></p>
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const currentSlide = ref(0)
let carouselInterval = null
let lenis = null
const newsletterEmail = ref('')

const slides = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVyqs8O_4IaIjqV92njWRIvjqnAuL3TcC4i5LDVWkZkZRiCdapTGywRf6Bc4mNYzU2z5AnASRJUp7OnXwmvguYMm_cSZN8VBfv-oVR3AoaSKGSUtNXd0Wh6ts3wkJtt1ScSgHAu9qgauP_aX-EQKpLRGhkq9jVaY835sQIT6ZrHq1gPleqjK7K8S3cc0kun5MemH8N9DT7Gfx1cCj2FUAxa1wa7T7tkAdPCG3lGKia88ZA14uFaGtV1eVSvTqUJrEObNMjMcJDpzE',
    alt: 'A breathtaking aerial view of a private tropical island resort in the Maldives'
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVyqs8O_4IaIjqV92njWRIvjqnAuL3TcC4i5LDVWkZkZRiCdapTGywRf6Bc4mNYzU2z5AnASRJUp7OnXwmvguYMm_cSZN8VBfv-oVR3AoaSKGSUtNXd0Wh6ts3wkJtt1ScSgHAu9qgauP_aX-EQKpLRGhkq9jVaY835sQIT6ZrHq1gPleqjK7K8S3cc0kun5MemH8N9DT7Gfx1cCj2FUAxa1wa7T7tkAdPCG3lGKia88ZA14uFaGtV1eVSvTqUJrEObNMjMcJDpzE'
  },
  {
    name: 'desertos',
    title: 'Desertos Exóticos',
    subtitle: 'Mistérios do Oriente',
    path: '/destinos/desertos-exoticos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXpXrNx2_7oYVj7yPG9waxwGBmj2jhY3XOSmjdpajgTw3U_0vHEF7lcF8NDA5JIY5WIE9drocrnT5V3KsyBjH4RtabcHMQmswffegkYZVLd681FZrCmvw_gnzgDmqSAdd3H2xcL1JjBuZli8Emk6Q8Ea1c9UJZqhyxkOO64an1v-u5-oyxSBEf8DGy9esA0X2uS-NbWZ4PYwtJpmNGIex-lW0xM_gTZnHSPM889nbeJshCrs1KjHmLs-uN8S5WiFxcGnO0EbI5VQ'
  },
  {
    name: 'cidades',
    title: 'Cidades Históricas',
    subtitle: 'Cultura e Tradição',
    path: '/destinos/cidades-historicas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOecJILLeSh2Ozxe3HKyBtTLkHz-bniYWfZtIR1A6IAyjdaFlOfXgIU6whwUuyzkOLTvdXw20mnAMMIe5kT592zpqfD-aGHo3oX2TK_4cDjYK6fsqA4cu6Uz4p_JB6rar1gzVENphQQBbOfiO1DaRfKAxaIo4Agn3NvLnxDTdJj1pael2QthoAwKtEOE8mTjs_YT9nwtQTTI-9yH7xt7KkQ0R2FS4YyqXTBJANPVUfecgvWgWgj76DjTEtokGJ5FORqgjZwEZNvHg'
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
    description: 'Priority check-in, lounges exclusivos e convites para eventos restritos.',
    path: '/vip-concierge'
  }
]

const oportunidades = [
  {
    title: 'Inverno nos Alpes: Retiro em Chalé de Vidro',
    path: '/oportunidades/inverno-alpes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsilvUH6T7rjeNP56x4I5KmlKA5MzZKD-QxCHxa0aBWL6GckMeJtt8bbyYbvn9SGfAkG_ioLLcuO2p5EaU-fmzWtC_RrhAXWL3J7fRbUXpS-tfhHkW3F68hF5RswUmjsfy9ZgpoE7z1N-pM2dyfNp2-E69Q87OWj2TBIDGwmivwoU5uEtReePI4_nsdezLaw9667bRLiXrpjisWJ1A3S9mD7kmO4bNoEZr6J7ck0axsVBPVOjtlYPlWKJqmjfejvUI0KIdnCF8c',
    alt: 'A wide-angle landscape of the Swiss Alps in winter with a luxury glass-walled chalet'
  },
  {
    title: 'Private Jet Experience',
    description: 'Voo exclusivo para o Mónaco com estadia VIP.',
    path: '/oportunidades/private-jet',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnKsArknnfG0fKiCi8ksPkC0MfLSz8Ebeg0d-XqCmKJhUo0utt6QRFy8h3QfNZJuxGfWs_dk6cemxVaoWvU-8m5ftfdeQwYkuJK8dXotGwp0z0Xq3UwlLVKZizv-CYKAr6td4VLtnNvh1IXa6SdyOmmXBfWWSgbtNdup118NVqyOpM8zbrOfszTXfxQa3x9oZkRMd7q9xrK6FtRBrpzEubP5oZFiGfGndW1YS82tsf_h23vGq6GWB8d9cg84EEPkJfKPcjig_26UI'
  },
  {
    title: 'Zen Kyoto',
    path: '/oportunidades/zen-kyoto',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgVkn1rPDxoepWN30PnTWkH_kaj7PUmFdC1UeX-wTTj9Y8JjxUZUPWmSaoIP8TqImy3e2CN8GTtqgsVI4VwytIYPlOA8Zlr7VIP9WLJHpfg6gxcIm6QmyHhPWsxn4AciZO1QL85XjGxCf7qngWC0QhVir9ZAL1RFJQrjDZcSMNmigH4NbfzRQdw-YtaN_stZMoShrT9KnC7SohCNdb1AWOZn2pcrPZjLHrBX8GnI-8PJZwl05lHme17NsXuYkkg5_14LniIlcTw'
  }
]

const testimonialImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDApaCcXYZ4JVFtzZlixYiLu1cF343FzRdacnubYXb4rSx5i11sWkqmvQ8jia-S-4X98Ng9z-ut4YCubhzwCbyMjJCUPGcfXbFMFLkoYh5Qs5LabLwWvy923w5IJujG6b9W-cu-jUZjtgpwa8JWzbgZJHxlb9AumpbVcQsEGETE89gEf9kO2Ox7Sa10Mn_VqPcvfnqXuGnbcAcj-WgLwHeB30PEj_Hd48JQgal5yZBnzRu-JuASw0nc4cNAlszVCCkaSXs7ufyK0e4'

function moveCarousel(index) {
  currentSlide.value = index
}

function subscribeNewsletter() {
  if (newsletterEmail.value) {
    alert('Obrigado por subscrever! Em breve receberá as nossas ofertas exclusivas.')
    newsletterEmail.value = ''
  }
}

// Initialize GSAP ScrollTrigger animations
function initScrollAnimations() {
  nextTick(() => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded. Falling back to basic animations.')
      return
    }
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Get all sticky sections
    const contentElements = document.querySelectorAll('.content--sticky')
    const totalContentElements = contentElements.length
    
    // Set default styles
    contentElements.forEach((el) => {
      gsap.set(el, {
        filter: 'brightness(50%)',
        scale: 0.95,
        borderRadius: 0
      })
    })
    
    // Animate each section on scroll
    contentElements.forEach((el, position) => {
      const isLast = position === totalContentElements - 1
      
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          invalidateOnRefresh: true
        }
      })
      .to(el, {
        ease: 'none',
        filter: isLast ? 'none' : 'brightness(100%)',
        scale: 1,
        borderRadius: isLast ? 0 : 40,
        opacity: 1
      }, 0)
    })
    
    // Refresh ScrollTrigger after images load
    const images = document.querySelectorAll('.content__img')
    let loadedImages = 0
    
    images.forEach(img => {
      if (img.complete) {
        incrementLoaded()
      } else {
        img.addEventListener('load', incrementLoaded)
        img.addEventListener('error', incrementLoaded)
      }
    })
    
    function incrementLoaded() {
      loadedImages++
      if (loadedImages === images.length) {
        ScrollTrigger.refresh()
      }
    }
  })
}

// Initialize Lenis smooth scrolling
function initSmoothScrolling() {
  nextTick(() => {
    // Check if Lenis is loaded
    if (typeof Lenis === 'undefined') {
      console.warn('Lenis not loaded. Using native scrolling.')
      return
    }
    
    lenis = new Lenis({
      lerp: 0.2,
      smoothWheel: true
    })
    
    lenis.on('scroll', () => ScrollTrigger.update())
    
    const scrollFn = (time) => {
      lenis.raf(time)
      requestAnimationFrame(scrollFn)
    }
    
    requestAnimationFrame(scrollFn)
  })
}

onMounted(() => {
  // Initialize smooth scrolling
  initSmoothScrolling()
  
  // Initialize scroll animations
  initScrollAnimations()
  
  // Start carousel
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 7000)
})

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
  
  // Clean up Lenis
  if (lenis) {
    lenis.destroy()
  }
  
  // Clean up ScrollTrigger
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>

<style scoped>
/* Load GSAP and other libraries from CDN */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

/* Base styles */
main {
  min-height: 100vh;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Frame styles */
.frame {
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

.frame--header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
}

.frame--header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.frame__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.frame__heading {
  position: relative;
  z-index: 2;
  margin-bottom: 1rem;
}

.frame__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  color: #fff;
}

.frame__title i {
  font-style: italic;
}

.text-meta {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0 0;
  font-weight: 300;
}

.text-large {
  font-size: clamp(1.2rem, 3vw, 2rem);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
}

.frame__content {
  position: relative;
  z-index: 2;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.frame__nav {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 2;
}

.nav-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-dot.nav-dot--active {
  width: 14px;
  background: #fff;
  border-radius: 2px;
}

.frame__buttons {
  display: flex;
  gap: 1rem;
  z-index: 2;
}

.btn {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.5s ease;
  cursor: pointer;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn--primary {
  background: #fff;
  color: var(--color-deep-onyx);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn--primary:hover {
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-deep-onyx);
}

.btn--small {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  background: #fff;
  color: var(--color-deep-onyx);
  border: none;
  margin-top: 1rem;
}

.btn--small:hover {
  background: rgba(255, 255, 255, 0.9);
}

.frame--footer {
  padding: 2rem;
  background: var(--color-background);
  color: var(--color-on-surface);
  text-align: center;
}

.frame__author {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-on-surface-variant);
  font-size: 0.875rem;
}

.frame__author a {
  color: var(--color-primary);
  text-decoration: none;
}

.frame__author a:hover {
  text-decoration: underline;
}

/* Content styles */
.content {
  padding: 4rem 2rem;
  position: relative;
  min-height: 100vh;
}

.content--highlight {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content--intro {
  background: var(--color-background);
  color: var(--color-on-surface);
}

.content--outro {
  background: var(--color-background);
  color: var(--color-on-surface);
}

.wrap {
  position: relative;
}

.content--sticky {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  will-change: filter, transform, border-radius;
}

.content--grid {
  display: grid;
}

.content__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.content__img-wrap {
  flex: 0 0 40%;
  max-width: 40%;
}

.content__img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-height: 80vh;
}

.content__img--large {
  width: 100%;
  max-width: 500px;
}

.content__img--left {
  margin-right: 2rem;
}

.content__text-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  color: var(--color-on-surface);
}

.content__title i {
  font-style: italic;
}

.content__text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-on-surface-variant);
  max-width: 600px;
}

.content__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  transition: gap 0.3s ease;
}

.content__link:hover {
  gap: 0.75rem;
}

.content__quote-icon {
  font-size: 3rem;
  color: var(--color-primary);
  opacity: 0.4;
}

/* Background colors for sticky sections */
.bg-1 {
  background: var(--color-background);
}

.bg-2 {
  background: var(--color-surface-container-low);
}

.bg-3 {
  background: var(--color-background);
}

.bg-4 {
  background: var(--color-tropical-lagoon);
}

.bg-5 {
  background: var(--color-background);
}

.bg-light {
  background: var(--color-surface-container-lowest);
}

/* Content grids */
.content__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.content__card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 3/4;
  cursor: pointer;
  transition: transform 0.5s ease;
}

.content__card:hover {
  transform: scale(1.02);
}

.content__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.content__card:hover img {
  transform: scale(1.05);
  filter: sepia(0);
}

.content__card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.content__card:hover .content__card-overlay {
  opacity: 1;
}

.content__card-overlay h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  margin: 0 0 0.25rem;
}

.content__card-overlay p {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

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

/* Opportunities grid */
.content__opportunities {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}

.opportunity-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-primary);
  border-opacity: 0.1;
  cursor: pointer;
  min-height: 200px;
}

.opportunity-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.opportunity-card:hover img {
  transform: scale(1.05);
}

.opportunity-card--large {
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
}

.opportunity-card--medium {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
}

.opportunity-card--small {
  grid-column: span 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.opportunity-card__content {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: #fff;
}

.opportunity-card--medium .opportunity-card__content {
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
  justify-content: center;
  text-align: center;
}

.opportunity-card__content .tag {
  display: inline-block;
  background: var(--color-background);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  align-self: flex-start;
}

.opportunity-card__content h3,
.opportunity-card__content h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

.opportunity-card__content p {
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.8;
  margin: 0 0 1rem;
}

/* Newsletter form */
.newsletter-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  color: var(--color-on-surface);
}

.newsletter-form h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  margin: 0;
}

.newsletter-form p {
  font-size: 0.9rem;
  color: var(--color-on-surface-variant);
  margin: 0;
}

.newsletter-form input {
  width: 100%;
  max-width: 250px;
  padding: 0.75rem 0;
  border: none;
  border-bottom: 1px solid var(--color-primary);
  border-opacity: 0.3;
  background: transparent;
  color: var(--color-on-surface);
  font-size: 0.9rem;
  outline: none;
  transition: border-opacity 0.3s ease;
}

.newsletter-form input::placeholder {
  color: var(--color-primary);
  opacity: 0.4;
}

.newsletter-form input:focus {
  border-opacity: 1;
}

.newsletter-form button {
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: border-opacity 0.3s ease;
  border-bottom: 1px solid var(--color-primary);
  border-opacity: 0.2;
}

.newsletter-form button:hover {
  border-opacity: 1;
}

/* Testimonial */
.testimonial {
  margin-top: 2rem;
}

.testimonial__text {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-style: italic;
  line-height: 1.6;
  color: var(--color-on-surface);
  max-width: 800px;
  margin: 0 auto 2rem;
}

.testimonial__author {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

.testimonial__author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--color-primary);
  border-opacity: 0.2;
  padding: 2px;
  filter: grayscale(30%);
}

.testimonial__author h4 {
  font-size: 0.875rem;
  margin: 0;
  color: var(--color-on-surface);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.testimonial__author p {
  font-size: 0.75rem;
  margin: 0;
  color: var(--color-on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .content__inner {
    flex-direction: column;
    text-align: center;
  }
  
  .content__img-wrap {
    flex: 0 0 auto;
    max-width: 100%;
    margin: 0 auto;
  }
  
  .content__img--left {
    margin: 0 auto 1rem;
  }
  
  .content__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .content__services {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .content__opportunities {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
  
  .opportunity-card--large,
  .opportunity-card--medium {
    grid-column: span 1;
    grid-row: auto;
  }
  
  .opportunity-card--small {
    grid-column: span 1;
  }
  
  .content__opportunities {
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .content {
    padding: 2rem 1rem;
  }
  
  .frame--header {
    padding: 1rem;
  }
  
  .frame__nav {
    bottom: 1rem;
  }
  
  .frame__buttons {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .content__grid {
    grid-template-columns: 1fr;
  }
  
  .content__services {
    grid-template-columns: 1fr;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .testimonial__text {
    font-size: 1.1rem;
  }
  
  .content__opportunities {
    grid-template-columns: 1fr;
  }
  
  .opportunity-card--large,
  .opportunity-card--medium,
  .opportunity-card--small {
    grid-column: span 1;
  }
  
  .content__title {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
  }
}
</style>
