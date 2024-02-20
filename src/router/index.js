import { createRouter, createWebHistory } from 'vue-router'
// import components
import Home from '/src/view/HomeView.vue'
import ContentView from '/src/view/ContentView.vue'
import VAContent from '/src/view/ViewAllContent.vue'
import VAVideo from '/src/view/ViewAllVideo.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //View
        { path: '/', name: 'home', component: Home },
        { path: '/Content/:tags/:title', name: 'content', component: ContentView },
        { path: '/Content/ViewAll', name: 'vacontent', component: VAContent },
        { path: '/Video/ViewAll', name: 'vavideo', component: VAVideo },

    ]
})
export default router

