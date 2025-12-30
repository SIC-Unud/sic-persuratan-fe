<template>

      <main class="h-full w-full min-h-[83vh] font-jakarta-sans md:col-span-9 relative">
        <!-- Header -->
        <div class="flex justify-between text-xs pb-2 md:pb-3 md:mx-6 md:text-base">
          <div class="flex gap-1 md:gap-2 md:pt-2">
            <label>Tampilkan</label>
            <div>
              <select id="opsi" @change="changeEntries" :value="entriesPerPage">
                <option :value="10">10</option>
                <option :value="25">25</option>
                <option :value="50">50</option>
                <option :value="100">100</option>
              </select>
            </div>
            <label>entri</label>
          </div>

          <div class="flex gap-2">
            <!-- Search Button -->
            <button>
              <svg class="h-5 w-5 md:h-9 md:w-9" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.316794" y="0.316794" width="24.7099" height="24.7099" rx="12.355" stroke="#1A365D" stroke-width="0.633588" />
                <path d="M14.8893 13.9389H14.3888L14.2114 13.7679C14.8538 13.0228 15.2068 12.0716 15.2061 11.0878C15.2061 10.2733 14.9646 9.47704 14.512 8.79979C14.0595 8.12253 13.4163 7.59468 12.6638 7.28297C11.9113 6.97127 11.0832 6.88971 10.2843 7.04862C9.48547 7.20752 8.75165 7.59975 8.1757 8.17571C7.59974 8.75167 7.20751 9.48548 7.0486 10.2844C6.8897 11.0832 6.97125 11.9113 7.28296 12.6638C7.59466 13.4163 8.12252 14.0595 8.79977 14.5121C9.47703 14.9646 10.2733 15.2061 11.0878 15.2061C12.1079 15.2061 13.0456 14.8323 13.7679 14.2114L13.9389 14.3888V14.8893L17.1069 18.0509L18.0509 17.1069L14.8893 13.9389ZM11.0878 13.9389C9.51016 13.9389 8.23664 12.6654 8.23664 11.0878C8.23664 9.51017 9.51016 8.23666 11.0878 8.23666C12.6654 8.23666 13.9389 9.51017 13.9389 11.0878C13.9389 12.6654 12.6654 13.9389 11.0878 13.9389Z" fill="#1A365D" />
              </svg>
            </button>

            <!-- Filter Button -->
            <button class="flex items-center justify-center gap-2 text-xs md:text-base">
              <i class="bi-sliders text-secondary"></i>
              <h1 class="font-bold text-secondary font-jakarta-sans">Filter</h1>
            </button>
          </div>
        </div>

        <!-- Table Header -->
        <div class="overflow-x-auto">
          <div class="flex items-start border-y pt-2 pb-4 text-sm font-bold font-inter md:text-base">
            <p class="w-2/12 md:w-1/12 md:pr-16 md:text-right">No</p>
            <p class="w-5/12 md:w-3/12">Nomor Surat</p>
            <p class="w-5/12 md:w-2/12">Sumber Surat</p>
            <p class="hidden w-2/12 md:block">Jenis Surat</p>
            <p class="hidden w-2/12 md:block">Nama Kegiatan</p>
            <p class="hidden w-2/12 md:block">Status</p>
            <p class="hidden w-1/12 text-center md:block">Aksi</p>
          </div>

          <!-- Table Body -->
          <div
            v-for="(surat, index) in daftarSurat"
            :key="surat.id"
            class="flex items-start border-b pt-2 pb-6 text-xs font-medium font-jakarta-sans md:py-2 md:text-base"
          >
            <p class="w-2/12 pl-4 md:w-1/12 md:text-left">
              {{ ((paging?.page || 1) - 1) * (paging?.perPage || entriesPerPage) + index + 1 }}
            </p>
            <p class="w-5/12 md:w-3/12 break-word whitespace-normal">{{ surat.nomorSurat }}</p>
            <p class="w-5/12 md:w-2/12 break-word whitespace-normal">{{ surat.sumberSurat }}</p>
            <p class="hidden w-2/12 md:block break-word whitespace-normal">{{ surat.jenisSurat }}</p>
            <p class="hidden w-2/12 md:block break-word whitespace-normal">{{ surat.namaKegiatan }}</p>

            <div class="hidden w-2/12 py-[10px] md:block">
              <span
                :class="{
                  'text-red-500 font-bold bg-red-500 bg-opacity-10 border border-red-500 rounded-3xl p-2ait': surat.status === 'Menunggu diajukan',
                  'text-yellow-500 font-bold bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded-3xl p-2': surat.status === 'Sedang diajukan',
                  'text-green-500 font-bold bg-green-500 bg-opacity-10 border border-green-500 rounded-3xl p-2': surat.status === 'Selesai diajukan',
                  'text-red-600 font-bold bg-red-500 bg-opacity-10 border border-red-500 rounded-3xl p-2': surat.status === 'Ditolak',
                  'text-red-700 font-bold bg-red-500 bg-opacity-10 border border-red-500 rounded-3xl p-2': surat.status === 'Dibatalkan'
                }"
              >
                {{ surat.status }}
              </span>
            </div>

            <div class="hidden w-1/12 items-center justify-center gap-1 py-[10px] md:flex md:gap-1">
              <RouterLink :to="{ name: 'admin-detail-surat', params: { id: surat.id } }">
                <button> 
                  <svg width="27" height="27" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 9.75C23.685 9.75 28.755 12.945 31.23 18C28.755 23.055 23.685 26.25 18 26.25C12.315 26.25 7.245 23.055 4.77 18C7.245 12.945 12.315 9.75 18 9.75ZM18 6.75C10.5 6.75 4.095 11.415 1.5 18C4.095 24.585 10.5 29.25 18 29.25C25.5 29.25 31.905 24.585 34.5 18C31.905 11.415 25.5 6.75 18 6.75ZM18 14.25C20.07 14.25 21.75 15.93 21.75 18C21.75 20.07 20.07 21.75 18 21.75C15.93 21.75 14.25 20.07 14.25 18C14.25 15.93 15.93 14.25 18 14.25ZM18 11.25C14.28 11.25 11.25 14.28 11.25 18C11.25 21.72 14.28 24.75 18 24.75C21.72 24.75 24.75 21.72 24.75 18C24.75 14.28 21.72 11.25 18 11.25Z" fill="#63A8E7" />
                </svg>
                </button>
              </RouterLink>
            </div>
          </div>

          <!-- Table Footer -->
          <div class="mt-4 flex justify-between md:mx-6">
            <div class="text-xs font-medium text-dark md:text-base">
              <label>Menampilkan </label>
              <span class="text-primary">
                {{((paging?.page || 1) - 1) * (paging?.perPage || entriesPerPage) + 1 }}
              </span>
              -
              <span class="text-primary">
                {{
                  Math.min((paging?.page || 1) * (paging?.perPage || entriesPerPage), paging?.totalData || 0)
                }}
              </span>
              <label> dari </label>
              <span class="text-primary">{{ daftarSurat.length }}</span>
              <label> entri</label>
            </div>

            <div class="grid auto-cols-fr grid-flow-col overflow-hidden rounded-md border border-primary text-center text-xs text-primary md:rounded-lg md:text-base">
              <button
                class="border-r border-primary px-1 py-1 md:px-3 md:py-2"
                @click="changePage(currentPage - 1)"
                :disabled="currentPage === 1"
              >
                <i class="bi-chevron-left"></i>
              </button>

              <button
                v-for="page in totalPages"
                :key="page"
                class="border-r border-primary px-2 py-1 font-jakarta-sans focus:bg-primary focus:text-white md:px-4 md:py-2"
                @click="changePage(page)"
                :class="{ 'bg-primary text-white': page === currentPage }"
              >
                {{ page }}
              </button>

              <button
                class="px-1 py-1 md:px-3 md:py-2"
                @click="changePage(currentPage + 1)"
                :disabled="currentPage === totalPages"
              >
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import api from '@/service/API'             

const daftarSurat = ref([])

const paging = ref({
  page: 1,
  perPage: 10,
  totalData: 0,
  totalPage: 1
})

const currentPage = ref(1)
const entriesPerPage = ref(10)

const fetchSurat = async () => {
  try {
    const res = await api.get('/v1/pengajuan-surat', {
      params: {
        page: currentPage.value,
        perPage: entriesPerPage.value
      }
    })

    daftarSurat.value = (res.data.data || []).map(item => ({
      id: item.id,
      nomorSurat: item.letter_number,
      sumberSurat: item.letter_source,
      jenisSurat: item.letter_type,
      namaKegiatan: item.activity_name,
      status: item.status
    }))
    paging.value = res.data.paging || {
      page: currentPage.value,
      perPage: res.data.perPage,
      totalData: res.data.totalData,
      totalPage: res.data.totalPage 
    }
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchSurat()
})

const totalPages = computed(() => paging.value.totalPage)

watch(entriesPerPage, () => {
  currentPage.value = 1
  fetchSurat()
})

const changePage = (page) => {
  if (page >= 1 && page <= paging.value.totalPage) {
    currentPage.value = page
    fetchSurat()
  }
}

const changeEntries = (e) => {
  entriesPerPage.value = parseInt(e.target.value, 10)
}
</script>