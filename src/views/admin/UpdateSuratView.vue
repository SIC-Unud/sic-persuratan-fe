<template>
    <div>
      <form class="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto">
        <div class="col-span-full flex justify-between items-center">
          <div>
            <h2 class="font-inter-sans text-xl font-bold text-content text-[28px]">
              Update Surat
            </h2>
          </div>

          <div class="hidden md:flex justify-end gap-2 bg-white">
            <RouterLink :to="`/admin/surat/${route.params.id}`" class="px-4 py-2 bg-white text-primary text-xl font-bold rounded-xl border border-primary hover:shadow-xl transition">
              Batal
            </RouterLink>
            <button @click.prevent="simpanSurat" class="px-6 py-2 bg-primary text-white text-xl font-bold rounded-xl hover:shadow-xl transition">
              Simpan
            </button>
          </div>
        </div>

        <!-- FORM INPUT -->
        <div>
          <label class="block text-base font-normal text-content">Nama Pengaju</label>
          <input v-model="form.namaPengaju" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Nama pengaju" />
        </div>

        <div>
          <label class="block text-base font-normal text-content">Tema Kegiatan</label>
          <input v-model="form.temaKegiatan" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Tema kegiatan" />
        </div>

        <div>
          <label class="block text-base font-normal text-content">Sumber Surat</label>
          <input v-model="form.sumberSurat" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Sumber surat" />
        </div>

        <div class="flex gap-6">
          <div class="w-full">
            <label class="text-base font-normal text-content mb-1">Tanggal</label>
            <input v-model="form.tanggal" type="date" class="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div class="w-full">
            <label class="text-base font-normal text-content mb-1">Pukul</label>
            <input v-model="form.pukul" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Pukul" />
          </div>
        </div>

        <div>
          <label class="block text-base font-normal text-content">Jenis Surat</label>
          <input v-model="form.jenisSurat" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Jenis surat" />
        </div>

        <div>
          <label class="block text-base font-normal text-content">Tempat Kegiatan</label>
          <input v-model="form.tempat" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Tempat kegiatan" />
        </div>

        <div>
          <label class="block text-base font-normal text-content">Nomor Surat</label>
          <input v-model="form.nomorSurat" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Nomor surat" />
        </div>

        <div>
          <label class="block text-base font-normal text-content">Status Surat</label>
          <select v-model="form.status" class="w-full p-2 border border-gray-300 rounded-lg">
            <option value="Menunggu diajukan">Menunggu Diajukan</option>
            <option value="Sedang diajukan">Sedang Diajukan</option>
            <option value="Berhasil diajukan">Berhasil Diajukan</option>
            <option value="Ditolak">Ditolak</option>
            <option value="Dibatalkan">Dibatalkan</option>
          </select>
        </div>

        <div>
          <label class="block text-base font-normal text-content">Tujuan Surat</label>
          <input v-model="form.tujuan" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Tujuan surat" />
        </div>

        <div>
          <label class="block text-base font-normal text-content">Keterangan</label>
          <input v-model="form.keterangan" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Keterangan" />
        </div>

        <div>
          <label class="block text-base font-normal text-content">Nama Kegiatan</label>
          <input v-model="form.namaKegiatan" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Nama kegiatan" />
        </div>

        <div>
          <label class="block text-base font-normal text-content">Link Pendukung</label>
          <input v-model="form.linkPendukung" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Link" />
        </div>

        <!-- Tombol Mobile -->
        <div class="col-span-full flex md:hidden justify-end gap-3 bg-white py-6">
          <RouterLink :to="`/admin/surat/${route.params.id}`" class="px-4 py-2 bg-white text-primary text-xl font-bold rounded-xl border border-primary hover:shadow-xl transition">
            Batal
          </RouterLink>
          <button @click.prevent="simpanSurat" class="px-4 py-2 bg-primary text-white text-xl font-bold rounded-xl hover:shadow-xl transition">
            Simpan
          </button>
        </div>
      </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '@/service/API'

const route = useRoute()
const router = useRouter()

const form = ref({
  namaPengaju: '',
  temaKegiatan: '',
  sumberSurat: '',
  tanggal: '',
  pukul: '',
  jenisSurat: '',
  tempat: '',
  nomorSurat: '',
  status: '',
  tujuan: '',
  keterangan: '',
  namaKegiatan: '',
  linkPendukung: '',
})

const statusMapping = {
  'Menunggu diajukan': 1,
  'Sedang diajukan': 2,
  'Berhasil diajukan': 3,
  'Ditolak': 4,
  'Dibatalkan': 5,
}

const id = parseInt(route.params.id)
console.log(id)

const fetchSuratDetail = async () => {
  try {
    const res = await api.get(`/v1/pengajuan-surat/${id}`)
    if (res.data?.data) {
      const data = res.data.data
      form.value = {
        namaPengaju: data.functionary || '',
        temaKegiatan: data.activity_theme || '',
        sumberSurat: data.source || '',
        tanggal: data.date?.split('T')[0] || '',
        pukul: data.date?.split('T')[1]?.substring(0,5) || '', 
        jenisSurat: data.type || '',
        tempat: data.place || '',
        nomorSurat: data.number || '',
        status: data.letter_status || '',
        tujuan: data.dest || '',
        keterangan: data.desc || '',
        namaKegiatan: data.activity?.title || '',
        linkPendukung: data.additional_link || ''
      }
    }
  } catch (err) {
    console.error(err)
  }
}

onMounted(fetchSuratDetail)

const simpanSurat = async () => {
  try {
    const status_id = statusMapping[form.value.status]
    const res = await api.put(`/v1/pengajuan-surat/${id}`, {
      source: form.value.sumberSurat,
      type: form.value.jenisSurat,
      number: form.value.nomorSurat,
      dest: form.value.tujuan,
      activity_theme: form.value.temaKegiatan,
      activity_id: form.value.activity_id,
      date: `${form.value.tanggal}`,
      time: `${form.value.pukul}`,
      place: form.value.tempat,
      status_id: status_id,
      desc: form.value.keterangan,
      additional_link: form.value.linkPendukung
    })
    if (res.data?.data) {
      const updated = res.data.data
      form.value.status = updated.letter_status || form.value.status
    }
    router.push(`/admin/surat/${id}`)
  } catch (err) {
    console.error(err)
  }
}
</script>