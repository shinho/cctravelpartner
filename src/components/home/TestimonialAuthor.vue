<template>
  <div class="testimonial__author">
    <img :src="image" :alt="imageAlt" width="128" height="128" />
    <div>
      <h4>{{ name }}</h4>
      <p>{{ label }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<style scoped>
.testimonial__author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.testimonial__author img {
  width: 128px;
  height: 128px;
  box-sizing: border-box;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--color-primary);
  padding: 2px;
  filter: grayscale(30%);
}

.testimonial__author h4 {
  font-size: 0.875rem;
  margin: 0;
  color: var(--color-on-surface);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-wrap: balance;
}

.testimonial__author p {
  font-size: 0.75rem;
  margin: 0.375rem 0 0;
  color: var(--color-on-surface-variant);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
</style>
