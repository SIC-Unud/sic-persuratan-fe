import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManajemenSuratView from '@/views/AdminManajemenSuratView.vue'
import DetailSuratView from '@/views/DetailSuratView.vue'
import UpdateSuratView from '@/views/UpdateSuratView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/admin/surat',
      name: 'manajemen-surat',
      component: ManajemenSuratView,
    },
    {
      path: '/admin/surat/:id',
      name: 'admin-detail-surat',
      component: DetailSuratView,
      // meta: { requiresAdmin: true }
    },
    {
      path: '/admin/surat/:id/update-surat',
      name: 'admin-update-surat',
      component: UpdateSuratView,
      // meta: { requiresAdmin: true }
    }
  ]
})

// // Middleware untuk proteksi rute
// router.beforeEach((to, from, next) => {
//   const roleId = parseInt(localStorage.getItem('role_id') || '0')

//   // Jika user sudah login dan mencoba ke /login lagi, arahkan sesuai role
//   if (to.path === '/login' && roleId) {
//     if (roleId === 1) return next('/admin/surat')
//     return next('/surat')
//   }

//   // Proteksi akses admin
//   if (to.meta.requiresAdmin && roleId !== 1) return next('/login')

//   next()
// })

export default router