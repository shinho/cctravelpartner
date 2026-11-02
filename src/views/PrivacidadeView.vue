<template>
  <main data-testId="privacidade-view" class="mx-auto min-h-screen max-w-4xl px-margin-mobile py-16 md:px-margin-desktop lg:py-24">
    <p class="mb-3 font-label-sm uppercase tracking-widest text-primary">{{ t('privacy.eyebrow') }}</p>
    <h1 class="mb-8 font-headline-xl text-headline-xl text-on-surface">{{ t('privacy.title') }}</h1>
    <div class="space-y-5 font-body-lg leading-relaxed text-on-surface-variant">
      <p>{{ t('privacy.intro') }}</p>
      <h2 class="pt-4 font-headline-md text-headline-md text-on-surface">{{ t('privacy.inquiriesTitle') }}</h2>
      <p>{{ t('privacy.inquiries') }}</p>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
