<template>
  <div class="flex items-center gap-1" :aria-label="$t('common.language')">
    <button
      v-for="lang in langs"
      :key="lang.code"
      type="button"
      class="font-label-lg text-label-lg tracking-widest text-[11px] uppercase transition-colors"
      :class="currentLocale === lang.code ? 'text-primary font-medium' : 'text-on-surface-variant/70 hover:text-primary'"
      @click="setLocale(lang.code)"
    >
      {{ lang.label }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES } from '../i18n'

const { locale } = useI18n()

const langs = [
  { code: 'pt-PT', label: 'PT' },
  { code: 'en', label: 'EN' }
]

const currentLocale = computed(() => locale.value)

function setLocale(code) {
  locale.value = code
  window.localStorage.setItem('locale', code)
  document.documentElement.lang = code
}
</script>