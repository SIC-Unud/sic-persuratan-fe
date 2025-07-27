<template>
  <DashboardLayout>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Daftar Surat</h2>
      <table class="min-w-full table-auto border border-gray-300 bg-white shadow">
        <thead class="bg-gray-100">
          <tr>
            <th class="p-3 text-left">Nama Pengaju</th>
            <th class="p-3 text-left">Tema</th>
            <th class="p-3 text-left">Tanggal</th>
            <th class="p-3 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="surat in suratList"
            :key="surat.id"
            class="border-t hover:bg-gray-50"
          >
            <td class="p-3">{{ surat.namaPengaju }}</td>
            <td class="p-3">{{ surat.temaKegiatan }}</td>
            <td class="p-3">{{ surat.tanggal }}</td>
            <td class="p-3">
              <RouterLink :to="`/admin/surat/${surat.id}`" class="text-primary underline">Lihat Detail</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue'
import { suratList } from '@/data/suratList.js'
</script>
