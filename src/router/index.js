import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RutasVue from '@/views/RutasVue.vue'
import InfoRutasView from '@/views/InfoRutasView.vue'


const routes = [
  {
    path: '/s',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'rutas',
    component: RutasVue
  },
  {
    path: '/info',
    name: 'inforutas',
    component: InfoRutasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
