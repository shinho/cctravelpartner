<template>
  <SectionHome :image-path="destinos[0].image" image-alt="Praias Tropicais" title-lead="Destinos" title=" com Alma" section-index="1" background="bg-2">
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
        </SectionHome>
</template>

<script setup>
import SectionHome from './SectionHome.vue'

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
</script>

<style scoped>
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

@media (max-width: 1024px) {
  .content__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .content__grid { grid-template-columns: 1fr; }
}
</style>
