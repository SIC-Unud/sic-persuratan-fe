<template>
  <DashboardLayout>
    <div>
      

      <form class="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
        <div class="col-span-full flex justify-between items-center">
          <div>
            <h2 class="font-inter-sans text-xl font-bold text-content text-[28px]">
            Detail Surat
          </h2>
          </div>

          <div class="flex justify-between">
            <div class="hidden md:flex justify-end gap-2 bg-white">
              <RouterLink to="/admin/surat/${$route.params.id}" class="px-4 py-2 bg-white text-primary text-xl font-bold rounded-xl border border-primary hover:shadow-xl transition">
                Batal
              </RouterLink>
              <button to="#" class="px-6 py-2 bg-primary text-white text-xl font-bold rounded-xl hover:shadow-xl transition">
                Simpan
              </button>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-base font-normal text-content">Nama Pengaju</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Nama pengaju">
        </div>
        <div>
          <label class="block text-base font-normal text-content">Tema Kegiatan</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Tema kegiatan">
        </div>

        <div>
          <label class="block text-base font-normal text-content">Sumber Surat</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Sumber surat">
        </div>
        <div class="flex gap-6">
          <div class="flex flex-col w-full">
            <label class="text-base font-normal text-content mb-1">Tanggal</label>
            <input type="date" class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Tanggal">
          </div>
          <div class="flex flex-col w-full">
            <label class="text-base font-normal text-content mb-1">Pukul</label>
            <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Pukul">
          </div>
        </div>

        <div>
          <label class="block text-base font-normal text-content">Jenis Surat</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Jenis surat">
        </div>
        <div>
          <label class="block text-base font-normal text-content">Tempat Kegiatan</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Nama gedung, ruangan">
        </div>

        <div>
          <label class="block text-base font-normal text-content">Nomor Surat</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Nomor surat">
        </div>
        <div>
          <label class="block text-base font-normal text-content">Status Surat</label>
          <select class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2">
              <option value="Menunggu Diajukan">Menunggu Diajukan</option>
              <option value="Sedang Diajukan">Sedang Diajukan</option>
              <option value="Berhasil Diajukan">Berhasil Diajukan</option>
              <option value="Ditolak">Ditolak</option>
              <option value="Dibatalkan">Dibatalkan</option>
            </select>
        </div>

        <div>
          <label class="block text-base font-normal text-content">Tujuan Surat</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Tujuan">
        </div>
        <div>
          <label class="block text-base font-normal text-content">Keterangan</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Keterangan">
        </div>

        <div>
          <label class="block text-base font-normal text-content">Nama Kegiatan</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Nama kegiatan">
        </div>
        <div>
          <label class="block text-base font-normal text-content">Link pendukung</label>
          <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
          placeholder="Link">
        </div>
        <div class="grid-end-auto flex md:hidden justify-end gap-3 bg-white py-6">
          <button class="text-center px-4 py-2 bg-white text-primary text-xl font-bold rounded-xl border border-primary hover:shadow-xl transition">
            Kembali
          </button>
          <button class="text-center px-4 py-2 bg-primary text-white text-xl font-bold rounded-xl hover:shadow-xl transition">
            Simpan
          </button>
        </div>
      </form>
      
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue';
import NavItem from '@/components/NavItem.vue'
import { RouterLink } from 'vue-router';

</script>
