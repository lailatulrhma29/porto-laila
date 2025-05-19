import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
AOS.init()
createApp(App).use(router).mount('#app')