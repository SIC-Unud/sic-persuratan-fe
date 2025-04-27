import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManajemenSuratView from '@/views/ManajemenSuratView.vue'
import PopUpHapus from '@/views/PopUpHapus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'manajemen-surat',
      component: ManajemenSuratView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/popup-hapus',
      name: 'popup-hapus',
      component: PopUpHapus
    }
  ]
})

export default router
