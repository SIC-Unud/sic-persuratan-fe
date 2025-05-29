import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManajemenSuratView from '@/views/ManajemenSuratView.vue'
import DetailSuratView from '@/views/DetailSuratView.vue'
import UpdateSuratView from '@/views/UpdateSuratView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        const roleId = parseInt(localStorage.getItem('role_id') || '0')
        if (roleId === 1) return '/admin/surat'
        return '/surat'
      }
    },
    {
      path: '/surat',
      name: 'manajemen-surat',
      component: ManajemenSuratView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/admin/surat',
      component: ManajemenSuratView,
      meta: { requiresAdmin: true },
      children: [
        {
              path: ':id',
              component: DetailSuratView,
              children: [
                {
                  path: 'update-surat',
                  name: 'admin-update-surat',
                  component: UpdateSuratView
                }
              ]
            }
          ]
        },
      ]
    },
  )

router.beforeEach((to, from, next) => {
  const roleId = parseInt(localStorage.getItem('role_id') || '0')

  if (to.path === '/login' && roleId) {
    if (roleId === 1) return next('/admin/surat')
    return next('/surat')
  }

  if (to.meta.requiresAdmin && roleId !== 1) return next('/login')

  next()
})

export default router
