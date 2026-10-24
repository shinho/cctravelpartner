import { computed } from 'vue'

export function useAboutSection() {
  const section = {
    eyebrow: 'Nosso Compromisso',
    titleLead: 'A Arte de Viajar',
    titleRest: ' com Propósito e Elegância',
    image: '/assets/images/aboutus/luxuryacessories.png',
    imageAlt: 'Luxury travel accessories',
    paragraphs: [
      'Na Carla Coelho Viagens de Luxo, não vendemos apenas destinos; desenhamos memórias. Cada viagem é uma obra-prima única, meticulosamente planeada para refletir os seus desejos mais profundos e superar as suas expectativas mais elevadas.',
      'A nossa agência nasceu da paixão pela descoberta e do compromisso inabalável com a excelência. Com uma rede global de parceiros exclusivos, garantimos acesso ao inacessível e conforto onde o luxo encontra a autenticidade.'
    ],
    link: { label: 'Conheça a nossa história', to: '/sobre-mim' }
  }

  return {
    aboutSection: computed(() => section)
  }
}
