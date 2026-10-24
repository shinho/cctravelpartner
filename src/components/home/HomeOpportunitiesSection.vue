<template>
  <SectionHome :image-path="oportunidades[0].image" image-alt="Alpes" title-lead="Oportunidades" title=" Únicas" section-index="3" background="bg-4">
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
        </SectionHome>
</template>

<script setup>
import { ref } from 'vue'
import SectionHome from './SectionHome.vue'

const oportunidades = [
  {
    title: 'Inverno nos Alpes: Retiro em Chalé de Vidro',
    path: '/oportunidades/inverno-alpes',
    image: '/assets/images/alpes.png',
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
    image: '/assets/images/oportunities/zen-kyoto.png',
    alt: 'A tranquil Kyoto temple garden with a reflective pond, autumn maples, and a wooden pavilion'
  }
]

const newsletterEmail = ref('')

function subscribeNewsletter() {
  if (newsletterEmail.value) {
    alert('Obrigado por subscrever! Em breve receberá as nossas ofertas exclusivas.')
    newsletterEmail.value = ''
  }
}
</script>

<style scoped>
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

@media (max-width: 1024px) {
  .content__opportunities { grid-template-columns: 1fr 1fr; grid-template-rows: auto auto; gap: 1rem; }
  .opportunity-card--large, .opportunity-card--medium { grid-column: span 1; grid-row: auto; }
  .opportunity-card--small { grid-column: span 1; }
}

@media (max-width: 640px) {
  .content__opportunities { grid-template-columns: 1fr; }
  .opportunity-card--large, .opportunity-card--medium, .opportunity-card--small { grid-column: span 1; }
}
.bg-light {
  background: var(--color-surface-container-lowest);
}
</style>
