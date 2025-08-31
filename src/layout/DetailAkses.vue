<template>
  <!-- router-view -->
  <router-view></router-view>

  <div class="flex justify-between items-center">
    <h1 class="font-jakarta-sans font-bold text-2xl text-secondary">Detail Akses</h1>
    <RouterLink :to="`/admin/detail-akses/${id}/edit-data-akses`">
      <button
        class="justify-end md:flex md:py-2 px-6 md:bg-primary md:rounded-xl md:gap-2 md:text-white hidden"
      >
        Edit
      </button>
    </RouterLink>
  </div>

  <!-- kegiatan -->
  <div class="mt-7 mb-8 text-secondary font-jakarta-sans font-semibold text-base/[28px]">
    <tr>
      <td>Nama Kegiatan</td>
      <td>: {{ detailData.value?.nama }}</td>
    </tr>

    <tr>
      <td>Tanggal Kegiatan</td>
      <td>: {{ detailData.value?.tanggal }}</td>
    </tr>

    <div class="flex justify-end mt-9">
      <button class="py-2 px-6 bg-primary rounded-xl gap-2 text-white lg:hidden">
        Edit
      </button>
    </div>
  </div>

  <!-- header -->
  <div class="md:flex md:justify-between md:pt-3 hidden">
    <!-- tampilan -->
    <div class="flex gap-2">
      <p>Tampilkan</p>
      <div>
        <select @change="changeEntries" :value="entriesPerPage" id="opsi">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <p>entri</p>
    </div>

    <!-- cari & filter -->
    <div class="flex gap-2">
      <PencarianLayout />
      <FilterLayout />
    </div>
  </div>

  <div>
    <!-- tabel anggota -->
    <table class="w-full table-auto mt-5">
      <thead class="border-t-2 font-bold text-secondary w-full">
        <tr class="grid md:grid-cols-12 grid-cols-5 py-3">
          <td class="text-left justify-self-start pl-4">No</td>
          <td class="flex md:col-span-8 col-span-3 items-center">
            <h1 class="mr-3">Nama Anggota</h1>
          </td>
          <td class="md:col-span-3 md:justify-self-center">Aksi</td>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(anggota, index) in paginatedAnggota"
          :key="index"
          class="grid border-t-2 md:grid-cols-12 grid-cols-5 py-3"
        >
          <td class="text-left justify-self-start pl-8 font-inter text-xs md:text-base font-medium">
            {{ (currentPage - 1) * entriesPerPage + index + 1 }}
          </td>
          <td class="flex md:col-span-8 col-span-3 justify-self-start text-xs md:text-base font-medium font-jakarta-sans">
            {{ anggota }}
          </td>
          <td class="md:col-span-3 justify-self-center flex justify-center gap-4 md:pl-8">
            <RouterLink :to="`/admin/detail-akses/${id}/edit-data-akses`">
              <button>
                <!-- ikon edit -->
                <svg
                  class="w-full lg:h-[30px] h-6"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.088 13.53L22.468 14.91L8.87805 28.5H7.49805V27.12L21.088 13.53ZM26.488 4.5C26.113 4.5 25.723 4.65 25.438 4.935L22.693 7.68L28.318 13.305L31.063 10.56C31.648 9.975 31.648 9.03 31.063 8.445L27.553 4.935C27.253 4.635 26.878 4.5 26.488 4.5ZM21.088 9.285L4.49805 25.875V31.5H10.123L26.713 14.91L21.088 9.285Z"
                    fill="#FFCA05"
                  />
                </svg>
              </button>
            </RouterLink>
            <RouterLink :to="`/admin/detail-akses/${id}/hapus-detail`">
              <button>
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
              </button>
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- pagination bawah -->
  <div class="flex justify-between border-t-2">
    <div class="md:m-4 md:mt-6 m-2">
      <h1 class="font-jakarta-sans font-medium md:text-xl text-xs/[28px] text-secondary">
        Menampilkan
        <span class="text-primary font-jakarta-sans">
            {{paginatedAnggota.length}}</span>
        dari
        <span class="text-primary font-jakarta-sans">{{
          detailData.value?.anggota.length
        }}</span>
        entri
      </h1>
    </div>

    <div class="flex items-center md:m-5 md:mr-3 m-3 space-x-0 border md:rounded-lg rounded-[4px] border-primary overflow-hidden text-primary">
      <button class="md:p-2 p-1 border-r md:text-base text-[8px] border-primary h-full" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
        <i class="bi-chevron-left"></i>
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        class="md:px-3 md:py-2 px-2 py-1 border-r border-primary font-jakarta-sans md:text-base text-[8px] h-full"
        :class="{ 'bg-primary text-white': page === currentPage }"
      >
        {{ page }}
      </button>

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
import { useRoute } from "vue-router";
import PencarianLayout from "@/components/PencarianLayout.vue";
import FilterLayout from "@/components/FilterLayout.vue";
import { RouterLink } from "vue-router";
import { aksesList } from "@/data/aksesList.js";

const route = useRoute();
const id = parseInt(route.params.id, 10);
const detailData = computed(() => {
  return aksesList.find((item) => item.id === id);
});

const currentPage = ref(1);
const entriesPerPage = ref(10);

// pagination anggota
const totalPages = computed(() =>
  Math.ceil((detailData.value?.anggota.length || 0) / entriesPerPage.value)
);

const paginatedAnggota = computed(() => {
  const start = (currentPage.value - 1) * entriesPerPage.value;
  return detailData.value?.anggota.slice(start, start + entriesPerPage.value) || [];
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const changeEntries = (e) => {
  entriesPerPage.value = parseInt(e.target.value, 10);
  currentPage.value = 1; 
};
</script>
