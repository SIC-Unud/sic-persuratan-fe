<template>
  <DashboardLayout>
    <DetailAkses></DetailAkses>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from "@/layout/DashboardLayout.vue";
import ManagementAkses from "@/layout/ManagementAkses.vue";
import DetailAkses from "@/layout/DetailAkses.vue";
import TambahData from "@/popUp/TambahData.vue";
import EditData from "@/popUp/EditData.vue";
import ValidasiPopup from "@/components/ValidasiPopup.vue";
import PencarianLayout from "@/components/PencarianLayout.vue";
import FilterLayout from "@/components/FilterLayout.vue";
import router from "@/router";
</script>
