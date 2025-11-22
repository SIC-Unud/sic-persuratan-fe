<template>
    <div class="relative" ref="dropdownRef">
        <!----button-->
        <button @click="toggleDropdown" class="flex justify-center items-center gap-1 mr-2.5 mt-2">
            <svg width="21" height="21" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 6.5H7.5M5.5 6.5H2.5M18.5 16.5H7.5M5.5 16.5H2.5M13.5 11.5H2.5M18.5 11.5H15.5M6.5 4.5C6.76522 4.5 7.01957 4.60536 7.20711 4.79289C7.39464 4.98043 7.5 5.23478 7.5 5.5V7.5C7.5 7.76522 7.39464 8.01957 7.20711 8.20711C7.01957 8.39464 6.76522 8.5 6.5 8.5C6.23478 8.5 5.98043 8.39464 5.79289 8.20711C5.60536 8.01957 5.5 7.76522 5.5 7.5V5.5C5.5 5.23478 5.60536 4.98043 5.79289 4.79289C5.98043 4.60536 6.23478 4.5 6.5 4.5ZM6.5 14.5C6.76522 14.5 7.01957 14.6054 7.20711 14.7929C7.39464 14.9804 7.5 15.2348 7.5 15.5V17.5C7.5 17.7652 7.39464 18.0196 7.20711 18.2071C7.01957 18.3946 6.76522 18.5 6.5 18.5C6.23478 18.5 5.98043 18.3946 5.79289 18.2071C5.60536 18.0196 5.5 17.7652 5.5 17.5V15.5C5.5 15.2348 5.60536 14.9804 5.79289 14.7929C5.98043 14.6054 6.23478 14.5 6.5 14.5ZM14.5 9.5C14.7652 9.5 15.0196 9.60536 15.2071 9.79289C15.3946 9.98043 15.5 10.2348 15.5 10.5V12.5C15.5 12.7652 15.3946 13.0196 15.2071 13.2071C15.0196 13.3946 14.7652 13.5 14.5 13.5C14.2348 13.5 13.9804 13.3946 13.7929 13.2071C13.6054 13.0196 13.5 12.7652 13.5 12.5V10.5C13.5 10.2348 13.6054 9.98043 13.7929 9.79289C13.9804 9.60536 14.2348 9.5 14.5 9.5Z" stroke="#1A365D" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h1 class="font-jakarta-sans font-bold text-secondary">Filter</h1>
        </button>

        <div v-if="isDropdownOpen" class="absolute top-full mt-3 right-0 z-20 origin-top-left">
            <!-- Arrow -->
            <div class="absolute top-0 right-5 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-dark rotate-45 z-10">
            </div>
            <!-- Dropdown -->
            <div class="pt-2 w-56 rounded-lg shadow-lg border border-dark bg-white overflow-hidden">
                <ul class="py-1">
                    <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Menunggu Diajukan</button>
                    <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Sedang Diajukan</button>
                    <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Sudah Diajukan</button>
                    <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Ditolak</button>
                    <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Dibatalkan</button>
                </ul>
            </div>
        </div>
    </div>        


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// State untuk mengontrol visibilitas dropdown
const isDropdownOpen = ref(false);
// Ref untuk elemen utama komponen (untuk deteksi klik di luar)
const dropdownRef = ref(null);

// Definisikan event yang akan dikirim ke komponen induk
const emit = defineEmits(['filter-selected']);

// Fungsi untuk membuka/menutup dropdown
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

// Fungsi untuk menutup dropdown saat klik di luar area komponen
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};


onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

</script>