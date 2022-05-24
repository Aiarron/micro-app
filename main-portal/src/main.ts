import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app'
import App from './App.vue'
import router from './router'

microApp.start()
createApp(App).use(router).mount('#app')
