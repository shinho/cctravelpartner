<template>
  <article class="service-card relative isolate flex select-none flex-col justify-between overflow-hidden rounded bg-surface-container-lowest shadow-sm">
    <div class="service-card__image absolute inset-x-0 top-0 -z-20 h-44 overflow-hidden">
      <img :src="service.image" :alt="service.imageAlt || service.title" class="service-card__photo h-full w-full object-cover" loading="lazy" decoding="async" />
    </div>
    <div class="service-card__overlay pointer-events-none absolute inset-0 -z-10 bg-white/65 opacity-0" aria-hidden="true"></div>
    <div>
      <div class="h-44" aria-hidden="true"></div>
      <div class="space-y-4 p-6">
        <div class="flex items-center justify-between">
          <div class="service-card__icon flex h-10 w-10 items-center justify-center rounded bg-surface-container text-primary">
            <span class="material-symbols-outlined text-xl" aria-hidden="true">{{ service.icon }}</span>
          </div>
          <span class="service-card__text font-label-sm text-label-sm font-semibold uppercase tracking-widest text-primary">{{ service.number }}</span>
        </div>
        <h3 class="service-card__text font-headline-sm text-headline-sm text-on-surface">{{ service.title }}</h3>
        <p class="service-card__text font-body-md text-body-md leading-relaxed text-on-surface-variant">{{ service.description }}</p>
      </div>
    </div>
    <div class="service-card__footer service-card__text flex items-center justify-between border-t border-surface-container px-6 pb-6 pt-4 text-on-surface-variant">
      <span class="font-label-sm text-label-sm uppercase tracking-wider">{{ service.tag }}</span>
      <span class="material-symbols-outlined text-lg" aria-hidden="true">north_east</span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.service-card {
  transition: box-shadow 200ms ease;
}

.service-card__image {
  transition: height 450ms cubic-bezier(0.2, 0, 0, 1);
}

.service-card__photo {
  transition: filter 450ms cubic-bezier(0.2, 0, 0, 1), transform 450ms cubic-bezier(0.2, 0, 0, 1);
}

.service-card__overlay {
  transition: opacity 300ms ease;
}

@media (hover: hover) and (pointer: fine) {
  .service-card:hover {
    @apply shadow-md;
  }

  .service-card:hover .service-card__image {
    height: 100%;
  }

  .service-card:hover .service-card__photo {
    filter: blur(5px);
    transform: scale(1.06);
  }

  .service-card:hover .service-card__overlay {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-card__image,
  .service-card__photo,
  .service-card__overlay,
  .service-card__text,
  .service-card__icon {
    transition: none;
  }
}
</style>
