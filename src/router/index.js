import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import AdminLayout from '@/layout/DashboardLayout.vue'
import UserLayout from '@/layout/UserDashboardLayout.vue'

import AdminManajemenSuratView from '@/views/admin/AdminManajemenSuratView.vue'
import DetailSuratView from '@/views/admin/AdminDetailSuratView.vue'
import UpdateSuratView from '@/views/admin/UpdateSuratView.vue'
import ManajemenAksesView from '@/views/admin/ManajemenAksesView.vue'
import DetailAksesView from '@/views/admin/DetailAksesView.vue'
import TambahData from "@/components/TambahData.vue"
import EditData from "@/components/EditData.vue"
import ValidasiPopup from "@/components/ValidasiPopup.vue"

import AjukanSurat from '@/views/user/ajukanSurat.vue'
import ManajemenSuratView from '@/views/user/ManajemenSuratView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    // USER AREA
    {
      path: '/',
      component: UserLayout,
      children: [
        {
          path: 'surat',
          name: 'surat',
          component: ManajemenSuratView,
        },
        {
          path: 'ajukan-surat',
          component: AjukanSurat,
        }
      ]
    },

    // ADMIN AREA
    {
      path: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true, adminOnly: true },
      children: [
        {
          path: 'surat',
          name: 'admin-manajemen-surat',
          component: AdminManajemenSuratView,
        },
        {
          path: 'ajukan-surat',
          name: 'admin-ajukan-surat',
          component: AjukanSurat,
        },
        {
          path: 'surat/:id',
          name: 'admin-detail-surat',
          component: DetailSuratView,
        },
        {
          path: 'surat/:id/update-surat',
          name: 'admin-update-surat',
          component: UpdateSuratView,
        },

        {
          path: 'manajemen-akses',
          name: 'manajemen-akses',
          component: ManajemenAksesView,
          children: [
            {
              path: 'tambah-data',
              name: 'tambah-data',
              component: TambahData,
            },
            {
              path: 'hapus-data',
              name: 'hapus-data',
              component: ValidasiPopup,
            },
          ],
        },

        {
          path: 'detail-akses/:id',
          name: 'detail-akses',
          component: DetailAksesView,
          children: [
            {
              path: 'edit-data-akses',
              name: 'edit-data-akses',
              component: EditData,
            },
            {
              path: 'hapus-detail',
              name: 'hapus-detail',
              component: ValidasiPopup,
            },
          ],
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const roleId = Number(localStorage.getItem('role'))

  const isAdmin = [1,2,3,4,5].includes(roleId)
  const isUser  = roleId === 6

  //Belum login tapi masuk halaman protected
  if (to.meta.requiresAuth && !token) {
    return next('/login')
  }

  //Bukan admin tapi masuk admin area
  if (to.meta.adminOnly && !isAdmin) {
    return next('/')
  }

  //Sudah login tapi buka /login
  if (to.path === '/login' && token) {
    if (isAdmin) return next('/admin/surat')
    if (isUser) return next('/')
  }

  next()
})

export default router