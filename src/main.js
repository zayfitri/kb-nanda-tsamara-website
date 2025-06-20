// src/main.js
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// PASTIKAN INI ADA DAN TANPA TYPO
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

const app = createApp(App) 

app.use(router)

app.mount('#app')