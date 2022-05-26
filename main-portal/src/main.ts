import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app'
import App from './App.vue'
import router from './router'
import './styles/index.css'

microApp.start()
createApp(App).use(router).mount('#app')
