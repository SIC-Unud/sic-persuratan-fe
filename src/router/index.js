import { createRouter, createWebHistory } from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import TambahData from "@/popUp/TambahData.vue";
import EditData from "@/popUp/EditData.vue";
import ValidasiPopup from "@/components/ValidasiPopup.vue";
import ManajemenAksesView from "@/views/ManajemenAksesView.vue";
import DetailAksesView from "@/views/DetailAksesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard-layout",
      component: DashboardLayout,
    },
    {
      path: "/admin/manajemen-akses",
      name: "manajemen-akses",
      component: ManajemenAksesView,
      children: [
        {
          path: "tambah-data",
          name: "tambah-data",
          component: TambahData,
        },
        {
          path: "hapus-data",
          name: "hapus-data",
          component: ValidasiPopup,
        },
      ],
    },
    {
      path: "/admin/detail-akses",
      name: "detail-akses",
      component: DetailAksesView,
      children: [
        {
          path: "edit-data-akses",
          name: "edit-data-akses",
          component: EditData,
        },
        {
          path: "hapus-detail",
          name: "hapus-detail",
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

export default router;
