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
      <div class="frame__copy">
        <div class="frame__heading">
          <h1 class="frame__title tracking-tight">{{ hero.title }}</h1>
          <p class="frame__eyebrow">{{ hero.eyebrow }}</p>
        </div>
        <div class="frame__content">
          <p class="text-large">{{ hero.description }}</p>
          <div class="frame__buttons">
            <router-link class="btn btn--primary" to="/destinos">{{
              hero.destinationsLabel
            }}</router-link>
            <a class="btn btn--secondary" href="mailto:contact@carlacoelho.com">{{
              hero.quoteLabel
            }}</a>
          </div>
        </div>
      </div>
      <HomeCarouselNav
        :slides="slides"
        :current-slide="currentSlide"
        @select="moveCarousel"
      />
    </header>

    <!-- Intro section -->
    <HomeHighlightSection
      :eyebrow="introHighlight.eyebrow"
      :title-lead="introHighlight.titleLead"
      :title="introHighlight.title"
      :description="introHighlight.description"
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
      :eyebrow="outroHighlight.eyebrow"
      :title-lead="outroHighlight.titleLead"
      :title="outroHighlight.title"
      :description="outroHighlight.description"
      variant="outro"
    >
      <template #action>
        <a class="btn btn--outline" href="mailto:contact@carlacoelho.com"
          >Solicitar Orçamento</a
        >
      </template>
    </HomeHighlightSection>

    <!-- Footer -->
    <footer class="frame frame--footer">
      <p class="frame__author">
        <span>Carla Coelho Viagens de Luxo</span>
        <span
          ><a href="mailto:contact@carlacoelho.com"
            >contact@carlacoelho.com</a
          ></span
        >
      </p>
    </footer>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from "vue";
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";
import { useHomeStore } from "../stores/home";
import HomeAboutSection from "../components/home/HomeAboutSection.vue";
import HomeHighlightSection from "../components/home/HomeHighlightSection.vue";
import HomeDestinationsSection from "../components/home/HomeDestinationsSection.vue";
import HomeServicesSection from "../components/home/HomeServicesSection.vue";
import HomeOpportunitiesSection from "../components/home/HomeOpportunitiesSection.vue";
import HomeTestimonialsSection from "../components/home/HomeTestimonialsSection.vue";
import HomeCarouselNav from "../components/home/HomeCarouselNav.vue";

const currentSlide = ref(0);
const { tm } = useI18n();
const hero = computed(() => tm("home.hero"));
const introHighlight = computed(() => tm("home.highlights.intro"));
const outroHighlight = computed(() => tm("home.highlights.outro"));
let carouselInterval = null;
let scrollMedia = null;

const { slides } = storeToRefs(useHomeStore());

function moveCarousel(index) {
  currentSlide.value = index;
}

// Initialize GSAP ScrollTrigger animations
function initScrollAnimations() {
  nextTick(() => {
    // Check if GSAP is loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.warn(
        "GSAP or ScrollTrigger not loaded. Falling back to basic animations.",
      );
      return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Only the pinned/stacked layout uses fixed-height sections, so the
    // scroll animation is scoped to the same breakpoint as the sticky CSS.
    scrollMedia = gsap.matchMedia();

    scrollMedia.add("(min-width: 1025px)", () => {
      const contentElements = gsap.utils.toArray(".content--sticky");
      const totalContentElements = contentElements.length;

      // Consistent starting state for every sticky section
      contentElements.forEach((el) => {
        gsap.set(el, {
          filter: "brightness(100%)",
          scale: 1,
          borderRadius: 0,
        });
      });

      // As each section gets covered by the next one, dim, shrink and round it
      contentElements.forEach((el, position) => {
        const isLast = position === totalContentElements - 1;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          })
          .to(
            el,
            {
              ease: "none",
              filter: isLast ? "none" : "brightness(50%)",
              scale: 0.95,
              borderRadius: 40,
            },
            0,
          );
      });
    });

    // Refresh ScrollTrigger after images load
    const images = document.querySelectorAll(".content__img");
    let loadedImages = 0;

    images.forEach((img) => {
      if (img.complete) {
        incrementLoaded();
      } else {
        img.addEventListener("load", incrementLoaded);
        img.addEventListener("error", incrementLoaded);
      }
    });

    function incrementLoaded() {
      loadedImages++;
      if (loadedImages === images.length) {
        ScrollTrigger.refresh();
      }
    }
  });
}

onMounted(() => {
  // Initialize scroll animations
  initScrollAnimations();

  // Start carousel
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, 7000);
});

onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }

  // Clean up ScrollTrigger / matchMedia
  if (scrollMedia) {
    scrollMedia.revert();
    scrollMedia = null;
  }

  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
});
</script>

<style scoped>
/* Load GSAP and other libraries from CDN */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap");

/* Base styles */
main {
  min-height: 100vh;
  position: relative;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
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

.frame__copy {
  position: absolute;
  inset: auto 0 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 38vh;
  padding: clamp(1.25rem, 3vw, 2rem) 1rem 9%;
  color: var(--color-on-surface, #24221e);
}

.frame__heading {
  position: relative;
  z-index: 2;
  margin-bottom: 0.5rem;
}

.frame__title {
  font-family: "Inknut", serif;
  font-size: clamp(1.5rem, 6vw, 24rem);
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  color: white;
}

.frame__title i {
  font-style: italic;
}

.text-meta {
  font-size: 1rem;
  color: var(--color-on-surface-variant, #514d45);
  margin: 0.5rem 0 0;
  font-weight: 300;
}

.text-large {
  font-size: clamp(0.95rem, 1.5vw, 1.2rem);
  line-height: 1.5;
  max-width: 620px;
  margin: 0 auto;
  color: white;
  opacity: 0.75;
}

.frame__content {
  position: relative;
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.875rem;
}

.frame__buttons {
  display: flex;
  gap: 0.75rem;
  z-index: 2;
}

:deep(.btn) {
  display: inline-block;
  padding: 0.625rem 1.1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.7rem;
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

:deep(.btn--secondary) {
  color: var(--color-on-surface, #24221e);
  border-color: rgba(36, 34, 30, 0.35);
  background: rgba(255, 255, 255, 0.3);
}

:deep(.btn--secondary:hover) {
  background: rgba(255, 255, 255, 0.65);
  border-color: rgba(36, 34, 30, 0.6);
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

.frame__eyebrow {
  color: white;
  font-family: "Inknut", serif;
  font-size: clamp(0.75rem, 1.5vw, 3rem);
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
  .frame--header {
    padding: 1rem;
  }
  .frame__copy {
    min-height: 45vh;
    padding: 1.25rem 1rem 4.5rem;
  }
  .frame__buttons {
    flex-direction: column;
    gap: 0.5rem;
  }
  :deep(.btn) {
    width: 100%;
    max-width: 300px;
  }
}
</style>
