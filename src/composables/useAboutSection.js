import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useAboutSection() {
  const { tm } = useI18n()
  const section = {
    image: '/assets/images/aboutus/luxuryacessories.png',
    link: { to: '/sobre-mim' }
  }

  return {
    aboutSection: computed(() => ({
      ...section,
      ...tm('home.aboutSection'),
      link: {
        ...tm('home.aboutSection.link'),
        to: section.link.to
      }
    }))
  }
}
