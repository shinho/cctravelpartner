<template>
  <SectionHome title-lead="Testemunhos" title="" section-index="4" background="bg-5">
          <template #visual>
            <span class="material-symbols-outlined content__quote-icon">format_quote</span>
          </template>
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
        </SectionHome>
</template>

<script setup>
import SectionHome from './SectionHome.vue'

const testimonialImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDApaCcXYZ4JVFtzZlixYiLu1cF343FzRdacnubYXb4rSx5i11sWkqmvQ8jia-S-4X98Ng9z-ut4YCubhzwCbyMjJCUPGcfXbFMFLkoYh5Qs5LabLwWvy923w5IJujG6b9W-cu-jUZjtgpwa8JWzbgZJHxlb9AumpbVcQsEGETE89gEf9kO2Ox7Sa10Mn_VqPcvfnqXuGnbcAcj-WgLwHeB30PEj_Hd48JQgal5yZBnzRu-JuASw0nc4cNAlszVCCkaSXs7ufyK0e4'
</script>

<style scoped>
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

@media (max-width: 640px) {
  .testimonial__text { font-size: 1.1rem; }
}
.content__quote-icon {
  color: var(--color-primary);
  font-size: 3rem;
  opacity: 0.4;
}
</style>
