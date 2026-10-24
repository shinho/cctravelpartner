import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: () => ({
    slides: [
      {
        image: '/assets/images/home/maldives-island.png',
        alt: 'Vista aérea de uma ilha privada nas Maldivas, com villas sobre uma lagoa turquesa'
      },
      {
        image: '/assets/images/home/desert-dinner.png',
        alt: 'Jantar à luz das velas entre as dunas do deserto ao pôr do sol'
      },
      {
        image: '/assets/images/home/florence-morning.png',
        alt: 'Rua histórica de Florença iluminada pela luz suave da manhã'
      },
      {
        image: '/assets/images/home/swiss-alps.png',
        alt: 'Chalet junto a um lago cristalino rodeado pelos Alpes suíços'
      },
      {
        image: '/assets/images/home/african-safari.png',
        alt: 'Elefantes junto a um lago na savana africana ao pôr do sol'
      }
    ]
  })
})
