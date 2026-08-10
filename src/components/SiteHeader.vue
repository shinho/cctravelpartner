<template>
  <header class="docked full-width top-0 sticky z-50 bg-background/95 backdrop-blur-md border-b border-heritage-gold/10">
    <nav class="flex justify-between items-center w-full px-margin-desktop h-20 max-w-[1280px] mx-auto">
      <router-link class="flex items-center gap-4" to="/">
        <img alt="Carla Coelho" class="h-14 w-auto object-contain brightness-75" src="/assets/logo_img.png" />
        <div class="flex flex-col">
          <span class="text-headline-sm font-headline-sm text-primary tracking-wide">Carla Coelho</span>          
          <span class="text-label-sm font-label-sm text-on-surface-variant tracking-wide">Travel Partner</span>
        </div>
      </router-link>
      <div class="hidden md:flex gap-10">
        <router-link class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" to="/sobre-nos">Sobre Nós</router-link>
        <router-link class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" to="/destinos">Destinos</router-link>
        <router-link class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" to="/servicos">Serviços</router-link>
        <router-link class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" to="/viagens-grupo">Viagens de Grupo</router-link>
        <router-link class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors" to="/oportunidades">Oportunidades</router-link>
      </div>
      <!-- <router-link class="bg-primary text-white font-label-lg text-label-lg px-6 py-3 rounded-sm active:scale-95 transition-all hover:brightness-110 uppercase tracking-widest text-[12px]" to="/disponibilidade">
        Check Availability
      </router-link> -->
    </nav>
  </header>
</template>

<script setup>
</script>