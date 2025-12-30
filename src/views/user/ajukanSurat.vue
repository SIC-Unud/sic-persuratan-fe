<template>
    <teleport to='body'>
      <div class="backdrop-blur-sm fixed inset-0 z-[98] bg-black/50">
        <div class="flex fixed inset-5 flex-col align-center justify-center md:w-[618px] md:h-[500px] md:mx-auto md: my-auto w-full h-full md:p-6 md:mt-10 bg-white md:rounded-2xl md:shadow-md md:border">
          <h2 class="text-2xl font-semibold text-secondary mt-5 md:mb-5 mb-2 font-jakarta-sans">Tambah Data</h2>

          <form class="space-y-6 overflow-y-auto">
            <select v-model.number="sumberSurat" class="w-full px-4 py-2 border rounded-md">
              <option disabled value="">Pilih Sumber Surat</option>
              <option :value="1">Student Innovation Centre</option>
              <option :value="2">Panitia Pelaksana</option>
            </select>

            <select v-model.number="jenisSurat" class="w-full px-4 py-2 border rounded-md">
              <option disabled value="">Pilih Jenis Surat</option>
              <option :value="1">Surat Izin Kegiatan</option>
              <option :value="2">Surat Tugas</option>
              <option :value="3">Surat Permohonan</option>
              <option :value="4">Surat Peminjaman</option>
            </select>

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
                <input v-model="waktuKegiatan" type="time" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
              </div>
            </div>

            <div>
              <label class="block  text-dark mb-2">Tempat</label>
              <input v-model="tempatKegiatan" type="text" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
            </div>

            <div class="flex justify-end mt-auto gap-2 ">
            <!-- tombol batal -->
            <button type="button" class="font-jakarta-sans border-2 border-primary rounded-xl py-2 px-6 text-primary font-bold" @click="closePopup">Batal</button>
            
            <!-- tombol kirim -->
            <button type="button" class="text-white  bg-primary border-2 border-birumuda rounded-xl py-2 px-6 font-jakarta-sans font-bold" @click="sendData">Simpan</button>
          </div>
          </form>
        </div>
      </div>  
    </teleport>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ajukanSurat } from '@/service/Surat'

const router = useRouter()

const sumberSurat = ref('')
const jenisSurat = ref('')
const namaKegiatan = ref('')
const temaKegiatan = ref('')
const tanggalKegiatan = ref('')
const waktuKegiatan = ref('')
const tempatKegiatan = ref('')

function closePopup() {
  router.push('/surat')
}

async function sendData() {
  try {
    const sourceMap = {
      1: 'Student Innovation Centre',
      2: 'Panitia Pelaksana'
    }

    const typeMap = {
      1: 'Surat Izin Kegiatan',
      2: 'Surat Tugas',
      3: 'Surat Permohonan',
      4: 'Surat Peminjaman'
    }

    const payload = {
      type: typeMap[jenisSurat.value],
      source: sourceMap[sumberSurat.value],
      dest: namaKegiatan.value,
      activity_theme: temaKegiatan.value,
      date: `${tanggalKegiatan.value} ${waktuKegiatan.value}`,
      place: tempatKegiatan.value,
      desc: namaKegiatan.value,

      // number: 'AUTO',
      // functionary_id: Number(localStorage.getItem('user_id')),
      // status_id: 1,
      // activity_id: 1,
      // is_active: 1
    }

    console.log('PAYLOAD FIXED =', payload)

    await ajukanSurat(payload)

    alert('Surat berhasil diajukan')
    router.push('/surat')

  } catch (err) {
    console.error(err.response?.data || err)
    alert('Gagal mengirim surat')
  }
}
</script>