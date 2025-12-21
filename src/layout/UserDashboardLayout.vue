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
        <RouterLink to="/ajukan-surat" class="font-bold font-jakarta-sans"><i class="bi bi-pencil mr-4"></i>Ajukan Surat
        </RouterLink>
      </div>
      <NavItem icon="bi-file-earmark-fill" text="Manajemen Surat" to="/surat" :isActive="$route.path === '/surat'"/>
      <div class="p-4 rounded-md w-full hover:bg-danger group transition-all duration-200">
        <button @click="handleLogout" class="text-danger font-jakarta-sans group-hover:text-white">
          <i class="bi bi-box-arrow-right mr-4"></i>
          Keluar
        </button>
      </div>
    </nav>

    <div class="container font-inter col-span-12 lg:col-span-10 lg:pr-4">
      <header class="w-full mt-4 flex justify-between lg:justify-end bg-white lg:rounded-3xl p-4">
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
        <div class="container bg-white md:rounded-lg p-4 md:mt-4">
          <router-view />
        </div>
      </main>

    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import NavItem from '@/components/NavItem.vue'
import router from '@/router'; 
import { logout } from '@/service/AuthAPI.js';

const route = useRoute();

const isSidebarShowed = ref(false);

const sidebarClass = computed(() => {
  return isSidebarShowed.value ? 'translate-x-[100%]' : '';
});

function toggleSidebar() {
  isSidebarShowed.value = !isSidebarShowed.value;
}

async function handleLogout() {
  try {
    await logout()
  } catch (e) {
    console.warn('Logout API gagal, lanjut FE logout')
  } finally {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    router.push('/login')
  }
}
</script>