<template>
    <DashboardLayout>
      <div>
        <div class="flex justify-between">
          <div>
            <h2 class="font-inter-sans text-xl font-bold text-content text-[28px]">
            Detail Surat
          </h2>
          </div>
  
          <div class="flex justify-between">
            <div class="flex gap-2">
              <RouterLink to="#" class="px-4 py-2 bg-white text-primary text-xl font-jakarta-sans font-bold rounded-xl border border-solid border-primary border-1px hover:shadow-xl transition">Kembali</RouterLink>
              <RouterLink to="#" class="px-4 py-2 bg-primary text-white text-xl font-jakarta-sans font-bold rounded-xl hover:shadow-xl transition">Simpan</RouterLink>
            </div>
          </div>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <input class="w-full p-2 border border-solid border-gray-300 border-1px rounded-lg gap-2"
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
        </div>
      </div>
    </DashboardLayout>
  </template>
  
  <script setup>
  import DashboardLayout from '@/layout/DashboardLayout.vue';
  import NavItem from '@/components/NavItem.vue'
  
  </script>