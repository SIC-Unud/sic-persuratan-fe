<template>
    <teleport to='body'>
      <div class="backdrop-blur-sm fixed inset-0 z-[98] bg-black/50">
        <div class="flex fixed inset-5 flex-col align-center justify-center md:w-[618px] md:h-[500px] md:mx-auto md: my-auto w-full h-full md:p-6 md:mt-10 bg-white md:rounded-2xl md:shadow-md md:border">
          <h2 class="text-2xl font-semibold text-secondary mt-5 md:mb-5 mb-2 font-jakarta-sans">Tambah Data</h2>

          <form class="space-y-6 overflow-y-auto">
            <div>
              <label class="block  text-dark mb-2">Sumber Surat</label>
              <input v-model="sumberSurat" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
            </div>

            <div>
              <label class="block  text-dark mb-2">Jenis Surat</label>
              <input v-model="jenisSurat" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
            </div>

            <div>
              <label class="block  text-dark mb-2">Nama Kegiatan</label>
              <input v-model="namaKegiatan" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
            </div>

            <div>
              <label class="block  text-dark mb-2">Tema Kegiatan</label>
              <input v-model="temaKegiatan" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
            </div>

            <div class="flex gap-2 ">
              <div class="w-full">
                <label class="block  text-dark mb-2">Tanggal</label>
                <input v-model="tanggalKegiatan" type="date" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
              </div>
              <div class="w-full">
                <label class="block  text-dark mb-2">Jam</label>
                <input v-model="waktuKegiatan" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
              </div>
            </div>

            <div>
              <label class="block  text-dark mb-2">Tempat</label>
              <input v-model="temaKegiatan" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
            </div>

            <div class="flex justify-end mt-auto gap-2 ">
            <!-- tombol batal -->
            <button class="font-jakarta-sans border-2 border-primary rounded-xl py-2 px-6 text-primary font-bold" @click="closePopup">Batal</button>
            
            <!-- tombol kirim -->
            <button class="text-white  bg-primary border-2 border-birumuda rounded-xl py-2 px-6 font-jakarta-sans font-bold" @click="sendData">Simpan</button>
          </div>
          </form>
        </div>
      </div>  
    </teleport>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

function closePopup() {
  router.push('/admin/surat'); 
}

function sendData() {
  console.log('Form disimpan!');

  router.push('/admin/surat');
}
</script>
