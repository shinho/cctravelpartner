<template>
  <SectionHome title-lead="Testemunhos" title="" section-index="4" background="bg-5">
    <template #visual>
      <TestimonialAuthor
        :image="testimonialImage"
        image-alt="Casal a sorrir numa viagem junto ao Mediterrâneo"
        name="Ana & Ricardo Ferreira"
        label="Viajantes Frequentes"
      />
    </template>
    <p class="content__text content__text--left text-meta">O que os nossos clientes dizem sobre as suas experiências excepcionais.</p>
    <div class="testimonial">
      <p class="testimonial__text">"A Carla e a sua equipa transformaram o nosso 20º aniversário de casamento numa aventura que superou todos os sonhos. A atenção aos detalhes e o acesso exclusivo que nos proporcionaram foram simplesmente inigualáveis."</p>
    </div>
  </SectionHome>
</template>
<script setup>
import SectionHome from './SectionHome.vue'
import TestimonialAuthor from './TestimonialAuthor.vue'

const testimonialImage = '/assets/images/testimonials/anniversary-couple.png'
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

@media (max-width: 640px) {
  .testimonial__text { font-size: 1.1rem; }
}
</style>
