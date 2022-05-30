import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss'
import router from './components/routes'

createApp(App).use(router).mount('#app')
