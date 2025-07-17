<template>
  <main class="font-jakarta-sans md:col-span-9 h-full min-h-[83vh] w-full">
    <div class="mx-2 flex items-center justify-between">
      <h2 class="text-2xl font-bold text-secondary">Detail Surat</h2>
      <button class="h-9 w-24 justify-end rounded-lg border-2 border-primary bg-white text-primary hidden md:block">
        Kembali
      </button>
    </div>

    <div class="mx-2 mt-7 md:grid md:grid-cols-2 gap-6 items-start">
      <!-- Kolom Kiri -->
      <div class="my-8 md:my-1 grid grid-rows gap-8 text-gray-500 text-xs md:text-sm">
        <div>
          <label>Nama Pengaju</label>
          <p class="text-lg font-medium text-secondary">I Wayan John Doe</p>
        </div>
        <div>
          <label>Sumber Surat</label>
          <p class="text-lg font-medium text-secondary">Surat Panitia Pelaksana</p>
        </div>
        <div>
          <label>Jenis Surat</label>
          <p class="text-lg font-medium text-secondary">Surat Permohonan Izin Kegiatan</p>
        </div>
        <div>
          <label>Nomor Surat</label>
          <p class="text-lg font-medium text-secondary">Nomor surat belum diberikan</p>
        </div>
        <div>
          <label>Tujuan Surat</label>
          <p class="text-lg font-medium text-secondary">Permohonan Izin</p>
        </div>
        <div>
          <label>Nama Kegiatan</label>
          <p class="text-lg font-medium text-secondary">Latihan Militer Wajib bagi Mahasiswa Baru</p>
        </div>
      </div>

      <!-- Kolom Kanan -->
      <div class="my-1 grid grid-rows gap-8 text-gray-500 text-xs md:text-sm">
        <div>
          <label>Tema Kegiatan</label>
          <p class="text-lg font-medium text-secondary">Militerisasi</p>
        </div>
        <div class="md:grid md:grid-cols-2 items-center gap-8">
          <div class="mb-7 md:mb-0">
            <label>Tanggal</label>
            <p class="text-lg font-medium text-secondary">14 Agustus 2025</p>
          </div>
          <div>
            <label>Pukul</label>
            <p class="text-lg font-medium text-secondary">8.00 - Pingsan</p>
          </div>
        </div>
        <div>
          <label>Tempat Kegiatan</label>
          <p class="text-lg font-medium text-secondary">Barak Universitas Udayana</p>
        </div>
        <div>
          <label>Status Kegiatan</label>
          <p class="text-lg font-medium text-secondary">Menunggu Diajukan</p>
        </div>
        <div>
          <label>Keterangan</label>
          <p class="text-lg font-medium text-secondary">Tidak ada keterangan</p>
        </div>
        <div>
          <label>Link Pendukung</label>
          <p class="text-lg font-medium text-secondary">Tidak ada link pendukung</p>
        </div>
      </div>
      <div class="my-5 mx-2 flex justify-end">
        <button class="h-9 w-24 rounded-lg border-2 border-primary bg-white text-primary md:hidden block">
          Kembali
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import NavItem from '@/components/NavItem.vue';

const isSidebarShowed = ref(false);

const sidebarClass = computed(() => {
  return isSidebarShowed.value ? 'translate-x-[100%]' : '';
});

function toggleSidebar() {
  isSidebarShowed.value = !isSidebarShowed.value;
}
</script>
