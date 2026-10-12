<template>
  <!-- Mobile Backdrop: outside the header, which has backdrop-filter (creates a containing block for fixed descendants) -->
  <Transition name="backdrop-fade">
    <div v-if="isMenuOpen" class="md:hidden fixed inset-0 top-20 bg-deep-onyx/40 z-40" @click="closeMenu"></div>
  </Transition>
  <header class="docked full-width top-0 sticky z-50 bg-background/95 backdrop-blur-md border-b border-heritage-gold/10">
    <nav class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-[1280px] mx-auto">
      <router-link class="flex items-center gap-4" to="/">
        <img alt="Carla Coelho" class="h-14 w-auto object-contain brightness-75" src="/assets/logo_img.png" />
        <div class="flex flex-col">
          <span class="text-headline-sm font-headline-sm text-primary tracking-wide">Carla Coelho</span>          
          <span class="text-label-sm font-label-sm text-on-surface-variant tracking-wide">Travel Partner</span>
        </div>
      </router-link>
      <!-- Desktop Nav: horizontal on tablet/desktop -->
      <div class="hidden md:flex items-center gap-10">
        <router-link v-for="item in navItems" :key="item.to" class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" :to="item.to">{{ $t(item.labelKey) }}</router-link>
      </div>
      <!-- Right Group: Language Switcher + Hamburger -->
      <div class="flex items-center gap-3 md:gap-4">
        <LanguageSwitcher />
        <button
          type="button"
          class="md:hidden p-2 -mr-2 text-on-surface hover:text-primary transition-colors cursor-pointer"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="material-symbols-outlined text-3xl">{{ isMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
      <!-- <router-link class="bg-primary text-white font-label-lg text-label-lg px-6 py-3 rounded-sm active:scale-95 transition-all hover:brightness-110 uppercase tracking-widest text-[12px]" to="/disponibilidade">
        Check Availability
      </router-link> -->
    </nav>

    <!-- Mobile Menu Panel -->
    <Transition name="menu-fade">
      <div v-if="isMenuOpen" id="mobile-menu" class="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-heritage-gold/10 shadow-xl">
        <div class="flex flex-col px-margin-mobile py-2">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors py-4 border-b border-heritage-gold/10 last:border-b-0"
            :to="item.to"
            @click="closeMenu"
          >
            {{ $t(item.labelKey) }}
          </router-link>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { to: '/sobre-mim', labelKey: 'nav.sobre' },
  { to: '/destinos', labelKey: 'nav.destinos' },
  { to: '/servicos', labelKey: 'nav.servicos' },
  { to: '/viagens-grupo', labelKey: 'nav.viagensGrupo' },
  { to: '/oportunidades', labelKey: 'nav.oportunidades' }
]

function closeMenu() {
  isMenuOpen.value = false
}

// Close the menu on navigation (link tap, back/forward, etc.)
watch(() => route.fullPath, closeMenu)

// Close the menu on Escape
function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 0.2s ease;
}
.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>