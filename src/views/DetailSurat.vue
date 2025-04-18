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
            <RouterLink to="#" class="px-4 py-2 bg-primary text-white text-xl font-jakarta-sans font-bold rounded-xl hover:shadow-xl transition">Update</RouterLink>
          </div>
        </div>
      </div>

      <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-base font-normal text-content">Nama Pengaju</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Deyas</p>
          </div>
        </div>
        <div>
          <label class="block text-base font-normal text-content">Tema Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Lomba</p>
          </div>
        </div>

        <div>
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

        <div>
          <label class="block text-base font-normal text-content">Jenis Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Surat Permohonan Izin Kegiatan</p>
          </div>
        </div>
        <div>
          <label class="block text-base font-normal text-content">Tempat Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Gedung BG 1.1</p>
          </div>
        </div>

        <div>
          <label class="block text-base font-normal text-content">Nomor Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-gray-200">Nomor surat belum ditentukan</p>
          </div>
        </div>
        <div>
          <label class="block text-base font-normal text-content">Status Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Menunggu Diajukan</p>
          </div>
        </div>

        <div>
          <label class="block text-base font-normal text-content">Tujuan Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">Permohonan izin</p>
          </div>
        </div>
        <div>
          <label class="block text-base font-normal text-content">Keterangan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-gray-200">Tidak ada keterangan</p>
          </div>
        </div>

        <div>
          <label class="block text-base font-normal text-content">Nama Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">SICKHATON</p>
          </div>
        </div>
        <div>
          <label class="block text-base font-normal text-content">Link pendukung</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-gray-200">Tidak ada link pendukung</p>
          </div>
          
        </div>
      </form>

      
    </div>
  </DashboardLayout>

</template>

<script setup>
import DashboardLayout from '@/layout/DashboardLayout.vue';
import NavItem from '@/components/NavItem.vue'

</script>