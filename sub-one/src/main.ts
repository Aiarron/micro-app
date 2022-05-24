import './public-path'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router'

declare global {
  interface Window {
    __MICRO_APP_BASE_ROUTE__: string
  }
}


const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes
})

createApp(App).use(router).mount('#app')
