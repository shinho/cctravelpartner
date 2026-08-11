import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/css/main.css'

document.documentElement.lang = i18n.global.locale.value

createApp(App).use(router).use(i18n).mount('#app')