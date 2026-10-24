<template>
  <main class="sticky-sections-demo">
    <!-- Header Section -->
    <header class="frame frame--header">
      <div class="frame__bg" aria-hidden="true">
        <div
          v-for="(slide, index) in slides"
          :key="'bg-' + index"
          class="frame__bg-layer"
          :class="{ 'frame__bg-layer--active': currentSlide === index }"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>
      </div>
      <div class="frame__overlay" aria-hidden="true"></div>
      <div class="frame__heading">
        <h1 class="frame__title">Carla Coelho Viagens de Luxo</h1>
        <p class="frame__eyebrow">Exploração de Alto Nível: O Mundo à Sua Medida</p>
      </div>
      <div class="frame__content">
        <p class="text-large">Experiências de viagem exclusivas com curadoria especializada para quem procura o extraordinário.</p>
        <div class="frame__buttons">
          <router-link class="btn btn--primary" to="/destinos">Explorar Destinos</router-link>
          <router-link class="btn btn--secondary" to="/orcamento">Solicitar Orçamento</router-link>
        </div>
      </div>
      <HomeCarouselNav :slides="slides" :current-slide="currentSlide" @select="moveCarousel" />
    </header>

    <!-- Intro section -->
    <HomeHighlightSection
      eyebrow="O Nosso Propósito"
      title-lead="Não vendemos apenas destinos;"
      title=" desenhamos memórias."
      description="Cada viagem é uma obra-prima única, meticulosamente planeada para refletir os seus desejos mais profundos e superar as suas expectativas mais elevadas."
    />

    <!-- Wrap - contains all sticky sections -->
    <div class="wrap">
      <!-- Section 1: Sobre Nós -->
      <HomeAboutSection />

      <HomeDestinationsSection />

      <HomeServicesSection />

      <HomeOpportunitiesSection />

      <HomeTestimonialsSection />
    </div>

    <!-- Outro section -->
    <HomeHighlightSection
      eyebrow="Vamos Planear"
      title-lead="Pronto para começar"
      title=" a sua próxima aventura?"
      description="Entre em contacto e deixe-nos criar a sua experiência de viagem perfeita."
      variant="outro"
    >
      <template #action>
        <router-link class="btn btn--outline" to="/orcamento">Solicitar Orçamento</router-link>
      </template>
    </HomeHighlightSection>

    <!-- Footer -->
    <footer class="frame frame--footer">
      <p class="frame__author"><span>Carla Coelho Viagens de Luxo</span> <span><a href="mailto:contact@carlacoelho.com">contact@carlacoelho.com</a></span></p>
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import HomeAboutSection from '../components/home/HomeAboutSection.vue'
import HomeHighlightSection from '../components/home/HomeHighlightSection.vue'
import HomeDestinationsSection from '../components/home/HomeDestinationsSection.vue'
import HomeServicesSection from '../components/home/HomeServicesSection.vue'
import HomeOpportunitiesSection from '../components/home/HomeOpportunitiesSection.vue'
import HomeTestimonialsSection from '../components/home/HomeTestimonialsSection.vue'
import HomeCarouselNav from '../components/home/HomeCarouselNav.vue'

const currentSlide = ref(0)
let carouselInterval = null
let lenis = null
let scrollMedia = null

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

function moveCarousel(index) {
  currentSlide.value = index
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

    // Only the pinned/stacked layout uses fixed-height sections, so the
    // scroll animation is scoped to the same breakpoint as the sticky CSS.
    scrollMedia = gsap.matchMedia()

    scrollMedia.add('(min-width: 1025px)', () => {
      const contentElements = gsap.utils.toArray('.content--sticky')
      const totalContentElements = contentElements.length

      // Consistent starting state for every sticky section
      contentElements.forEach((el) => {
        gsap.set(el, {
          filter: 'brightness(100%)',
          scale: 1,
          borderRadius: 0
        })
      })

      // As each section gets covered by the next one, dim, shrink and round it
      contentElements.forEach((el, position) => {
        const isLast = position === totalContentElements - 1

        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: '+=100%',
            scrub: true
          }
        })
        .to(el, {
          ease: 'none',
          filter: isLast ? 'none' : 'brightness(50%)',
          scale: 0.95,
          borderRadius: 40
        }, 0)
      })
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
    lenis = null
  }
  
  // Clean up ScrollTrigger / matchMedia
  if (scrollMedia) {
    scrollMedia.revert()
    scrollMedia = null
  }
  
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

.frame__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.frame__bg-layer {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.2s ease;
}

.frame__bg-layer--active {
  opacity: 1;
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

.frame__buttons {
  display: flex;
  gap: 1rem;
  z-index: 2;
}

:deep(.btn) {
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

:deep(.btn:hover) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

:deep(.btn--primary) {
  background: #fff;
  color: var(--color-deep-onyx);
  border-color: rgba(255, 255, 255, 0.3);
}

:deep(.btn--primary:hover) {
  background: rgba(255, 255, 255, 0.9);
  color: var(--color-deep-onyx);
}

:deep(.btn--small) {
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  background: #fff;
  color: var(--color-deep-onyx);
  border: none;
  margin-top: 1rem;
}

:deep(.btn--small:hover) {
  background: rgba(255, 255, 255, 0.9);
}

:deep(.btn--outline) {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
  margin-top: 1.5rem;
  backdrop-filter: none;
}

:deep(.btn--outline:hover) {
  background: var(--color-primary);
  color: var(--color-surface-container-lowest);
  border-color: var(--color-primary);
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

.wrap {
  position: relative;
}

@media (max-width: 640px) {
  .frame--header { padding: 1rem; }
  .frame__buttons { flex-direction: column; gap: 0.5rem; }
  :deep(.btn) { width: 100%; max-width: 300px; }
}

</style>
