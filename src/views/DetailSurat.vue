<template>
  <DashboardLayout>
    <div>
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-secondary font-inter-sans text-xl font-bold text-content text-[28px]">
          Detail Surat
        </h2>
        </div>

        <div class="flex justify-between">
          <div class="hidden md:flex justify-end gap-2 bg-white">
            <RouterLink to="#" class="px-4 py-2 bg-white text-primary text-xl font-bold rounded-xl border border-primary hover:shadow-xl transition">
              Kembali
            </RouterLink>
            <RouterLink to="#" class="px-6 py-2 bg-primary text-white text-xl font-bold rounded-xl hover:shadow-xl transition">
              Update
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
        <div class="w-full">
          <label class="block text-base font-normal text-content">Nama Pengaju</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Deyas</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Tema Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Lomba</p>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Sumber Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Surat Panitia Pelaksana</p>
          </div>
        </div>
        <div class="flex gap-6">
          <div class="flex flex-col w-full">
            <label class="text-base font-normal text-content mb-1">Tanggal</label>
            <div class="p-3 bg-white rounded-md">
              <p class="font-medium text-black">1 Oktober 2023</p>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <label class="text-base font-normal text-content mb-1">Pukul</label>
            <div class="p-3 bg-white rounded-md">
              <p class="font-medium text-black">08.00 - Selesai</p>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Jenis Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Surat Permohonan Izin Kegiatan</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Tempat Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Gedung BG 1.1</p>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Nomor Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-gray-200">Nomor surat belum ditentukan</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Status Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Menunggu Diajukan</p>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Tujuan Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Permohonan izin</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Keterangan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-gray-200">Tidak ada keterangan</p>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Nama Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">SICKHATON</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Link pendukung</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-gray-200">Tidak ada link pendukung</p>
          </div>
        </div>
      </div> 
      <div class="flex md:hidden justify-end gap-3 bg-white py-6">
        <RouterLink to="#" class="text-center px-4 py-2 bg-white text-primary text-xl font-bold rounded-xl border border-primary hover:shadow-xl transition">
          Kembali
        </RouterLink>
        <RouterLink to="#" class="text-center px-4 py-2 bg-primary text-white text-xl font-bold rounded-xl hover:shadow-xl transition">
          Update
        </RouterLink>
      </div>     
    </div>
  </DashboardLayout>

</template>

<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue';
import NavItem from '@/components/NavItem.vue'

</script>