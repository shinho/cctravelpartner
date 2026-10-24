import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre-mim',
    name: 'sobre-mim',
    component: () => import('../views/SobreMimView.vue')
  },
  {
    path: '/destinos',
    name: 'destinos',
    component: () => import('../views/DestinosView.vue')
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: () => import('../views/ServicosView.vue')
  },
  {
    path: '/viagens-grupo',
    name: 'viagens-grupo',
    component: () => import('../views/ViagensGrupoView.vue')
  },
  {
    path: '/viagens-grupo/:continent',
    name: 'viagens-grupo-detalhe',
    component: () => import('../views/ViagensGrupoDetalheView.vue')
  },
  {
    path: '/oportunidades',
    name: 'oportunidades',
    component: () => import('../views/OportunidadesView.vue')
  },
  {
    path: '/consultadoria',
    name: 'consultadoria',
    component: () => import('../views/ConsultadoriaView.vue')
  },
  {
    path: '/roteiros',
    name: 'roteiros',
    component: () => import('../views/RoteirosView.vue')
  },
  {
    path: '/privacidade',
    name: 'privacidade',
    component: () => import('../views/PrivacidadeView.vue')
  },
  {
    path: '/termos',
    name: 'termos',
    component: () => import('../views/TermosView.vue')
  },
  {
    path: '/destinos/praias-tropicais',
    name: 'praias-tropicais',
    component: () => import('../views/destinos/PraiasTropicaisView.vue')
  },
  {
    path: '/destinos/desertos-exoticos',
    name: 'desertos-exoticos',
    component: () => import('../views/destinos/DesertosExoticosView.vue')
  },
  {
    path: '/destinos/cidades-historicas',
    name: 'cidades-historicas',
    component: () => import('../views/destinos/CidadesHistoricasView.vue')
  },
  {
    path: '/oportunidades/inverno-alpes',
    name: 'inverno-alpes',
    component: () => import('../views/oportunidades/InvernoAlpesView.vue')
  },
  {
    path: '/oportunidades/private-jet',
    name: 'private-jet',
    component: () => import('../views/oportunidades/PrivateJetView.vue')
  },
  {
    path: '/oportunidades/zen-kyoto',
    name: 'zen-kyoto',
    component: () => import('../views/oportunidades/ZenKyotoView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, top: 0, behavior: 'instant' }
    } else {
      return { top: 0, behavior: 'instant' }
    }
  }
})

export default router
