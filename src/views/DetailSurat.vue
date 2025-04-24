<template>
  <div class="grid grid-cols-12 gap-4 relative lg:static">
    <nav
      class="flex flex-col gap-2 items-center col-span-2 bg-white w-full h-screen p-4 lg:static absolute -left-full transition-all duration-200"
      :class="sidebarClass">
      <i class="bi bi-x-lg absolute top-0 left-2 translate-y-1/2 text-3xl text-secondary cursor-pointer lg:hidden"
        @click="toggleSidebar"></i>
      <RouterLink to="/">
        <img src="/sic-logo.png" class="w-40 my-4" alt="Logo SIC">
      </RouterLink>
      <div class="p-4 shadow-none hover:shadow-2xl rounded-md w-full bg-white transition-all duration-[250ms]">
        <RouterLink to="#" class="font-bold font-jakarta-sans"><i class="bi bi-pencil mr-4"></i>Ajukan Surat
        </RouterLink>
      </div>
      <NavItem icon="bi-file-earmark-fill" text="Manajemen Surat" />
      <NavItem icon="bi-person-gear" text="Manajemen Akses" />
      <div class="p-4 rounded-md w-full hover:bg-danger group transition-all duration-200">
        <RouterLink to="#" class="text-danger font-jakarta-sans group-hover:text-white">
          <i class="bi bi-box-arrow-right mr-4"></i>
          Keluar
        </RouterLink>
      </div>
    </nav>
    <div class="container font-inter col-span-12 lg:col-span-10 lg:pr-4">
      <header class="w-full mt-4 flex justify-between lg:justify-end bg-white rounded-lg p-4">
        <div class="lg:hidden">
          <i class="bi bi-list text-3xl text-secondary cursor-pointer" @click="toggleSidebar"></i>
        </div>
        <div class="flex items-center">
          <div class="mr-4">
            <h2 class="font-bold text-xl text-secondary">I Wayan John Doe</h2>
            <p class="text-end text-secondary text-sm">Sekretaris</p>
          </div>
          <img src="/default.png" alt="default profile picture" class="w-12">
        </div>
      </header>
      <main class="md:col-span-9">
        <div class="container bg-white rounded-lg p-4 my-4 h-[87dvh]">
          <div class="mx-2 flex items-center justify-between">
            <h2 class="text-secondary text-2xl font-bold items-start justify-start">Detail Surat</h2>
            <button class=" justify-end w-24 h-9 rounded-lg border-2 bg-white border-primary text-primary">Kembali</button>
          </div>
          <div class="grid grid-cols-2 gap-6 mt-7 mx-2 items-start">
            <div class="flex flex-col space-y-8 justify-start">
              <div>
                <label class="text-gray-500 text-sm mb-1">Nama Pengaju</label>
                <p class="font-medium text-lg text-secondary">I Wayan John Doe</p>
              </div>
              <div>
                <label class="text-gray-500 text-sm mb-1">Sumber Surat</label>
                <p class="font-medium text-lg text-secondary">Surat Panitia Pelaksana</p>
              </div>
              <div>
                <label class="text-gray-500 text-sm mb-1">Jenis Surat</label>
                <p class="font-medium text-lg text-secondary">Surat Permohonan Izin Kegiatan</p>
              </div>
              <div>
                <label class="text-gray-500 text-sm mb-1">Nomor Surat</label>
                <p class="font-medium text-lg text-secondary">Nomor surat belum diberikan</p>
              </div>
              <div>
                <label class="text-gray-500 text-sm mb-1">Tujuan Surat</label>
                <p class="font-medium text-lg text-secondary">Permohonan Izin</p>
              </div>
              <div>
                <label class="text-gray-500 text-sm mb-1">Nama Kegiatan</label>
                <p class="font-medium text-lg text-secondary">Latihan Militeris Wajib bagi Mahasiswa Baru</p>
              </div>
            </div>

            <div class="flex flex-col space-y-8 justify-start">
              <div>
                <label class="text-gray-500 text-sm mb-1">Tema Kegiatan</label>
                <p class="font-medium text-lg text-secondary">Militerisasi</p>
              </div>
              <div class="flex items-center gap-24">
                <div>
                  <label class="text-gray-500 text-sm mb-1">Tanggal</label>
                  <p class="font-medium text-lg text-secondary">14 Agustus 2025</p>
                </div>
                <div>
                  <label class="text-gray-500 text-sm mb-1">Pukul</label>
                  <p class="font-medium text-lg text-secondary">8.00 - Pingsan</p>
                </div>
              </div>              
              <div>
                <label class="text-gray-500 text-sm mb-1">Tempat Kegiatan</label>
                <p class="font-medium text-lg text-secondary">Barak Universitas Udayana</p>
              </div>
              <div>
                <label class="text-gray-500 text-sm mb-1">Status Kegiatan</label>
                <p class="font-medium text-lg text-secondary">Menunggu Diajukan</p>
              </div>
              <div>
                <label class="text-gray-500 text-sm mb-1">Keterangan</label>
                <p class="font-medium text-lg text-secondary">Tidak ada keterangan</p>
              </div>
              <div>
                <label class="text-gray-500 text-sm mb-1">Link Pendukung</label>
                <p class="font-medium text-lg text-secondary">Tidak ada link pendukung</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import NavItem from '@/components/NavItem.vue'

const isSidebarShowed = ref(false);

const sidebarClass = computed(() => {
  return isSidebarShowed.value ? 'translate-x-[100%]' : '';
});

function toggleSidebar() {
  isSidebarShowed.value = !isSidebarShowed.value;
}
</script>