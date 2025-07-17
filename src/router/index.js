// filepath: c:\Users\Surya\OneDrive\ドキュメント\tsssurr\user-detail-surat\src\router\index.js
import { createRouter, createWebHistory } from 'vue-router'
import DetailSurat from '@/views/DetailSurat.vue'
import AboutView from '@/views/AboutView.vue'
import ManajemenSuratView from '@/views/ManajemenSuratView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/detail-surat',
      name: 'detail-surat',
      component: DetailSuratView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/manajemen-surat',
      name: 'manajemen-surat',
      component: ManajemenSuratView
    },
  ]
})

export default router
