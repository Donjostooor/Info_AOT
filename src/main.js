import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './firebase/index.js'
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import VueSlickCarousel from 'vue-slick-carousel';

const app = createApp(App)
app.use(router)
app.use(bootstrap)
app.use(VueSlickCarousel)
app.mount('#app')