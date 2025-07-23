import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManajemenSuratView from '@/views/ManajemenAksesView.vue'
import ManajemenAksesView from '@/views/ManajemenAksesView.vue'
import TambahData from '@/popUp/TambahData.vue'
import EditData from '@/popUp/EditData.vue'
import ValidasiPopup from '@/popUp/ValidasiPopup.vue'
import DetailAkses from '@/layout/DetailAkses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "manajemen-surat",
      component: ManajemenSuratView,
    },
    {
      path: "/admin/manajemen-akses",
      name: "manajemen-akses",
      component: ManajemenAksesView,
      children: [
        {
          path: "/tambah-data",
          name: "tambah-data",
          component: TambahData,
        },
        {
          path: "/detail-akses",
          name: "detail-akses",
          component: DetailAkses,
          children: [
            {
              path: "/edit-data-akses",
              name: "edit-data-akses",
              component: EditData,
            },
          ],
        },
        {
          path: "/hapus-data",
          name: "hapus-data",
          component: ValidasiPopup,
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});


export default router
