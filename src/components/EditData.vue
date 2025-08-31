<template>
  <div class="backdrop-blur-sm fixed inset-0 z-[98] bg-black/50">
    <div class="flex fixed inset-5 flex-col align-center justify-center md:w-[618px] md:h-[650px] md:mx-auto w-full h-full md:p-6 pt-14 bg-white md:rounded-2xl md:shadow-md md:border" @click="$emit('close')">
      <h2 class="text-2xl font-semibold text-secondary md:mb-14 mb-9 font-jakarta-sans">Edit Data Akses</h2>

      <form class="space-y-6">
        <!-- Nama Kegiatan -->
        <div>
          <label class="block  text-dark mb-2">Nama Kegiatan</label>
          <input v-model="namaKegiatan" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
        </div>

        <!-- Tanggal Mulai -->
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-dark mb-2 font-jakarta-sans" >Tanggal Mulai</label>
            <div class="relative"> 
              <input
                v-model="tanggalMulai"
                type="date"
                class="w-full pl-4 pr-4 py-2 border rounded-md focus:outline-primary"
              />
            </div>
          </div>

          <!-- tanggal selesai -->
          <div>
            <label class="block text-dark mb-2 font-jakarta-sans">Tanggal Selesai</label>
            <div class="relative">
              <input
              v-model="tanggalSelesai"
                type="date"
                class="w-full pl-4 pr-4 py-2 border rounded-md focus:outline-primary"
              />
            </div>
          </div>
        </div>

        <!-- Nama Panitia -->
        <div>
          <label class="block text-dark mb-2 font-jakarta-sans" >Nama Panitia</label>
          <input
            v-model="panitiaInput"
            @keydown.enter.prevent="addPanitia"
            type="text"
            class="w-full px-4 py-2 border rounded-md focus:outline-primary"
          />
        </div>

      </form>

      <div class="flex flex-wrap gap-2 mb-4 mt-4">
        <!-- satu baris -->
        <span v-for="(nama,index) in panitiaList"  :key="index" class="flex items-center bg-primarymuda px-2 py-1 text-xs font-jakarta-sans font-normal text-secondary">
          <button @click="removePanitia(index)" class="text-secondary mr-2 ">
            <i class="bi-x-lg"></i>
          </button>
          {{ nama }}
        </span>

      </div>

      <div class="flex justify-end mt-auto gap-2 ">
        <!-- tombol batal -->
        <button class="font-jakarta-sans border-2 border-primary rounded-xl py-2 px-6 text-primary font-bold" @click="closePopup">Batal</button>
        
        <!-- tombol kirim -->
        <button class="text-white  bg-primary border-2 border-birumuda rounded-xl py-2 px-6 font-jakarta-sans font-bold " @click="saveData">Simpan</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { aksesList } from "@/data/aksesList.js";

const router = useRouter();
const route = useRoute();

const namaKegiatan = ref("");
const tanggalMulai = ref("");
const tanggalSelesai = ref("");
const panitiaInput = ref("");
const panitiaList = ref([]);

function addPanitia() {
  if (panitiaInput.value.trim() !== "") {
    panitiaList.value.push(panitiaInput.value.trim());
    panitiaInput.value = ""; 
  }
}

function removePanitia(index) {
  panitiaList.value.splice(index, 1);
}

defineEmits(["close"]);

function closePopup() {
  router.push(`/admin/detail-akses/${route.params.id}`);
}

function saveData() {
  const id = parseInt(route.params.id, 10);
  const idx = aksesList.findIndex((item) => item.id === id);

  if (idx !== -1) {
    aksesList[idx].nama = namaKegiatan.value;
    aksesList[idx].tanggalMulai = tanggalMulai.value;
    aksesList[idx].tanggalSelesai = tanggalSelesai.value;
    aksesList[idx].anggota = [...panitiaList.value];
  }

  router.push(`/admin/detail-akses/${id}`);
}

// isi otomatis dari aksesList
onMounted(() => {
  const id = parseInt(route.params.id, 10);
  const detail = aksesList.find((item) => item.id === id);

  if (detail) {
    namaKegiatan.value = detail.nama;
    tanggalMulai.value = detail.tanggalMulai || detail.tanggal; 
    tanggalSelesai.value = detail.tanggalSelesai || detail.tanggal; 
    panitiaList.value = [...detail.anggota];
  }
});

</script>