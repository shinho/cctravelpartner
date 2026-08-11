import { createI18n } from 'vue-i18n'
import ptPT from './locales/pt-PT'
import en from './locales/en'

/**
 * Supported locales. The first entry is the default/fallback.
 */
export const SUPPORTED_LOCALES = ['pt-PT', 'en']

const DEFAULT_LOCALE = 'pt-PT'

/**
 * Reads a previously stored locale from localStorage and validates it
 * against the supported list. Falls back to the browser language when
 * available, otherwise to the default locale.
 */
function resolveInitialLocale() {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem('locale') : null
  if (stored && SUPPORTED_LOCALES.includes(stored)) {
    return stored
  }

  const browser = typeof navigator !== 'undefined' ? navigator.language : ''
  if (browser && SUPPORTED_LOCALES.includes(browser)) {
    return browser
  }
  if (browser && browser.startsWith('pt')) {
    return 'pt-PT'
  }

  return DEFAULT_LOCALE
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: resolveInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    'pt-PT': ptPT,
    en
  }
})

export default i18n