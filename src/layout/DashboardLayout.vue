<template>
  <div class="flex">
    <nav class="flex-grow flex flex-col gap-2 items-center bg-white h-screen p-4 w-[300px]">
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
    <div class="container m-4 font-inter">
      <header class="w-full flex items-center justify-end bg-white rounded-lg p-4">
        <div class="mr-4">
          <h2 class="font-bold text-xl text-secondary">I Wayan John Doe</h2>
          <p class="text-end text-secondary text-sm">Sekretaris</p>
        </div>
        <img src="/default.png" alt="default profile picture" class="w-12">
      </header>
      <main class="md:col-span-9">
        <div class="container bg-white rounded-lg p-4 mt-4">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import NavItem from '@/components/NavItem.vue'
</script>