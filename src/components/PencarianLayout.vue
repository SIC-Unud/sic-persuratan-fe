<template>
    <div class="relative border-2 border-secondary rounded-full flex items-center justify-center transition-all duration-300 ease-in-out" :class="isExpanded ? 'w-[312px] h-10' : 'w-10 h-10'">
        <i class="bi bi-search absolute left-3 z-10 cursor-pointer text-Secondary" @click="expandSearch"></i>
        <input type="text" class="w-full h-full bg-transparent pl-10 pr-4 focus:outline-none text-secondary" :class="{'opacity-100': isExpanded, 'opacity-0 cursor-default': !isExpanded}" placeholder="Ketik di sini" @blur="collapseSearch" @keyup.enter="performSearch" v-model="searchQuery" ref="inputRef" @focus="expandSearch">
        </input>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';

//untuk membuka searchbar
const isExpanded = ref(false);


// Fungsi untuk membuka search bar
function expandSearch() {
  isExpanded.value = true;
}

//fungsi langsung fokus
watch(isExpanded, (isNowExpanded) => {
  if (isNowExpanded) {
    // nextTick memastikan elemen input sudah ada di DOM sebelum difokuskan
    nextTick(() => {
      inputRef.value.focus();
    });
  }
});

// Fungsi untuk menutup search bar (saat input kehilangan fokus)
function collapseSearch() {
  // Hanya tutup jika tidak ada teks di dalamnya
    isExpanded.value = false;
}

</script>