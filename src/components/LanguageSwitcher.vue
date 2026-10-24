<template>
  <div
    data-testId="language-switcher"
    class="inline-flex items-center gap-1 rounded-full border border-outline/40 bg-surface-container-low p-1"
    role="group"
    :aria-label="$t('common.language')"
  >
    <button
      v-for="lang in langs"
      :key="lang.code"
      type="button"
      class="min-h-9 min-w-10 rounded-full px-2 font-label-lg text-label-sm tracking-widest uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :class="locale === lang.code ? 'bg-primary text-on-primary font-semibold shadow-sm' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'"
      :aria-pressed="locale === lang.code"
      @click="setLocale(lang.code)"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES } from '../i18n'

const { locale } = useI18n()

const localeLabels = {
  'pt-PT': 'PT',
  en: 'EN'
}
const langs = SUPPORTED_LOCALES.map(code => ({ code, label: localeLabels[code] ?? code }))

function setLocale(code) {
  locale.value = code
  window.localStorage.setItem('locale', code)
  document.documentElement.lang = code
}
</script>
