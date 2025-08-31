<template id="manajemen-akses">
    <!-- Tombol Tambah data -->
     <div>
        <RouterLink
        to="/admin/manajemen-akses/tambah-data"
        class="flex justify-self-end py-2 px-6 bg-primary rounded-xl gap-2 text-white"
        >
        Tambah Data
        </RouterLink>
        <router-view></router-view>
    </div>
    
    <div class="md:flex md:justify-between md:pt-3 hidden">
        <!-- tampilan -->
        <div class="flex gap-2">
            <label>Tampilkan</label>
            <!-- select -->
            <div>
                <select @change="changeEntries" :value="entriesPerPage" id="opsi">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <label>entri</label>
        </div>

        <!-- cari dan filter -->
         <div class="flex gap-3.5 mr-0">
            <!-- search bar -->
            <PencarianLayout></PencarianLayout>
             <!-- filter -->
            <FilterLayout></FilterLayout>
         </div>
    </div>

    <div>
    <!-- header tabel -->
    <table class="w-full md:table-auto md:mt-5 mt-16">
      <!-- table head -->
      <thead class="border-t-2 font-bold text-secondary w-full">
        <tr class="grid md:grid-cols-12 grid-cols-5 py-3">
          <td class="text-left justify-self-start pl-4">No</td>
          <td class="flex md:col-span-8 col-span-3 items-center">
            <h1 class="mr-3">Nama Kegiatan</h1>
            <!-- ikon sort -->
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99992 15V3.414L1.70692 5.707C1.51832 5.88916 1.26571 5.98995 1.00352 5.98767C0.741321 5.9854 0.490509 5.88023 0.3051 5.69482C0.119692 5.50941 0.0145236 5.2586 0.0122452 4.9964C0.00996676 4.7342 0.110761 4.4816 0.292919 4.293L4.29292 0.292999C4.48045 0.105528 4.73475 0.000213623 4.99992 0.000213623C5.26508 0.000213623 5.51939 0.105528 5.70692 0.292999L9.70692 4.293C9.88908 4.4816 9.98987 4.7342 9.98759 4.9964C9.98531 5.2586 9.88014 5.50941 9.69474 5.69482C9.50933 5.88023 9.25852 5.9854 8.99632 5.98767C8.73412 5.98995 8.48152 5.88916 8.29292 5.707L5.99992 3.414V15C5.99992 15.2652 5.89456 15.5196 5.70703 15.7071C5.51949 15.8946 5.26514 16 4.99992 16C4.7347 16 4.48035 15.8946 4.29281 15.7071C4.10528 15.5196 3.99992 15.2652 3.99992 15Z"
                fill="#1A365D"
              />
            </svg>
          </td>
          <td class="md:col-span-3 md:justify-self-center">Aksi</td>
        </tr>
      </thead>

      <!-- table body -->
      <tbody>
        <!-- baris dinamis -->
        <tr
          v-for="(item, index) in paginatedData"
          :key="item.id"
          class="grid border-t-2 md:grid-cols-12 grid-cols-5 py-3"
        >
          <td
            class="text-left justify-self-start pl-8 font-inter text-xs md:text-base font-medium"
          >
            {{ (currentPage - 1) * entriesPerPage + index + 1 }}
          </td>
          <td
            class="flex md:col-span-8 col-span-3 justify-self-start text-xs md:text-base font-medium font-jakarta-sans"
          >
            {{ item.nama }}
          </td>
          <td
            class="md:col-span-3 justify-self-center flex justify-center gap-4 md:pl-8"
          >
            <RouterLink :to="{ name: 'detail-akses', params: { id: item.id } }">
              <!-- ikon detail -->
              <svg
                class="w-full lg:h-[30px] h-6"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9.75C23.685 9.75 28.755 12.945 31.23 18C28.755 23.055 23.685 26.25 18 26.25C12.315 26.25 7.245 23.055 4.77 18C7.245 12.945 12.315 9.75 18 9.75ZM18 6.75C10.5 6.75 4.095 11.415 1.5 18C4.095 24.585 10.5 29.25 18 29.25C25.5 29.25 31.905 24.585 34.5 18C31.905 11.415 25.5 6.75 18 6.75ZM18 14.25C20.07 14.25 21.75 15.93 21.75 18C21.75 20.07 20.07 21.75 18 21.75C15.93 21.75 14.25 20.07 14.25 18C14.25 15.93 15.93 14.25 18 14.25ZM18 11.25C14.28 11.25 11.25 14.28 11.25 18C11.25 21.72 14.28 24.75 18 24.75C21.72 24.75 24.75 21.72 24.75 18C24.75 14.28 21.72 11.25 18 11.25Z"
                  fill="#63A8E7"
                />
              </svg>
            </RouterLink>
            <RouterLink :to="`/admin/manajemen-akses/hapus-data/${item.id}`">
              <!-- ikon hapus -->
              <svg
                class="w-full lg:h-[30px] h-6"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 13.5V28.5H12V13.5H24ZM21.75 4.5H14.25L12.75 6H7.5V9H28.5V6H23.25L21.75 4.5ZM27 10.5H9V28.5C9 30.15 10.35 31.5 12 31.5H24C25.65 31.5 27 30.15 27 28.5V10.5Z"
                  fill="#D72638"
                />
              </svg>
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- opsi bawah -->
  <div class="flex justify-between border-t-2">
    <!-- menampilkan -->
    <div class="md:m-4 md:mt-6 m-2">
      <h1
        class="font-jakarta-sans font-medium md:text-xl text-xs/[28px] text-secondary"
      >
        Menampilkan
        <span class="text-primary font-jakarta-sans">{{
          paginatedData.length
        }}</span>
        dari
        <span class="text-primary font-jakarta-sans">{{
          filteredData.length
        }}</span>
        entri
      </h1>
    </div>

    <!-- pagination -->
    <div
      class="flex items-center md:m-5 md:mr-3 m-3 space-x-0 border md:rounded-lg rounded-[4px] border-primary overflow-hidden text-primary"
    >
      <!-- Tombol panah kiri -->
      <button
        class="md:p-2 p-1 border-r md:text-base text-[8px] border-primary h-full"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        <i class="bi-chevron-left"></i>
      </button>

      <!-- nomor halaman -->
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        class="md:px-3 md:py-2 px-2 py-1 border-r border-primary font-jakarta-sans md:text-base text-[8px] h-full"
        :class="{ 'bg-primary text-white': page === currentPage }"
      >
        {{ page }}
      </button>

      <!-- Tombol panah kanan -->
      <button
        class="md:p-2 p-1 md:text-base text-[8px]"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PencarianLayout from "@/components/PencarianLayout.vue";
import FilterLayout from "@/components/FilterLayout.vue";
import { RouterLink } from "vue-router";
import { aksesList } from "@/data/aksesList.js";

const dataAkses = ref(aksesList);

const currentPage = ref(1);
const entriesPerPage = ref(10);
const searchQuery = ref("");

// filter data
const filteredData = computed(() =>
  dataAkses.value.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

// pagination
const totalPages = computed(() =>
  Math.ceil(filteredData.value.length / entriesPerPage.value)
);

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * entriesPerPage.value;
  return filteredData.value.slice(start, start + entriesPerPage.value);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const changeEntries = (e) => {
  entriesPerPage.value = parseInt(e.target.value, 10)
}
</script>