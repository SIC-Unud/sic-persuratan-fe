<template>
    <div>
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-secondary font-inter-sans text-xl font-bold text-content text-[28px]">
          Detail Surat
        </h2>
        </div>

        <div class="flex justify-between">
          <div class="hidden md:flex justify-end gap-2 bg-white">
            <RouterLink to="/admin/surat" class="px-4 py-2 bg-white text-primary text-xl font-bold rounded-xl border border-primary hover:shadow-xl transition">
              Kembali
            </RouterLink>
            <RouterLink :to="`/admin/surat/${surat.id}/update-surat`" class="px-6 py-2 bg-primary text-white text-xl font-bold rounded-xl hover:shadow-xl transition">
              Update
            </RouterLink>
          </div>
        </div>
      </div>

      <div v-if="!surat" class="p-6 text-center text-gray-500">
        Memuat detail surat...
    </div>
      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
        <div class="w-full">
          <label class="block text-base font-normal text-content">Nama Pengaju</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.namaPengaju }}</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Tema Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.temaKegiatan }}</p>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Sumber Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.sumberSurat }}</p>
          </div>
        </div>
        <div class="flex gap-6">
          <div class="flex flex-col w-full">
            <label class="text-base font-normal text-content mb-1">Tanggal</label>
            <div class="p-3 bg-white rounded-md">
              <p class="font-medium text-black">{{ surat.tanggal }}3</p>
            </div>
          </div>
          <div class="flex flex-col w-full">
            <label class="text-base font-normal text-content mb-1">Pukul</label>
            <div class="p-3 bg-white rounded-md">
              <p class="font-medium text-black">{{ surat.pukul }}</p>
            </div>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Jenis Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.jenisSurat }}</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Tempat Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.tempat }}</p>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Nomor Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.nomorSurat }}</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Status Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.status }}</p>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Tujuan Surat</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.tujuan }}</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Keterangan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.keterangan}}</p>
          </div>
        </div>

        <div class="w-full">
          <label class="block text-base font-normal text-content">Nama Kegiatan</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.namaKegiatan }}</p>
          </div>
        </div>
        <div class="w-full">
          <label class="block text-base font-normal text-content">Link pendukung</label>
          <div class="p-3 bg-white rounded-md gap-2">
            <p class="font-medium text-black">{{ surat.linkPendukung }}</p>
          </div>
        </div>
      </div> 
      <div class="flex md:hidden justify-end gap-3 bg-white py-6">
        <RouterLink to="#" class="text-center px-4 py-2 bg-white text-primary text-xl font-bold rounded-xl border border-primary hover:shadow-xl transition">
          Kembali
        </RouterLink>
      </div> 
      </div>
          
    </div>
 </template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/service/API'

const route = useRoute()
const surat = ref(null)
const id = parseInt(route.params.id)

const fetchSuratDetail = async () => {
  try {
    const res = await api.get(`/v1/pengajuan-surat/${id}`)
    if (res.data && res.data.data) {
      const data = res.data.data
      surat.value = {
        id: data.id,
        namaPengaju: data.functionary || '-',
        temaKegiatan: data.activity_theme || '-',
        sumberSurat: data.source || '-',
        tanggal: data.date || '-',
        pukul: data.time || '-', 
        jenisSurat: data.type || '-',
        tempat: data.place || '-',
        nomorSurat: data.number || '-',
        status: data.letter_status || '-',
        tujuan: data.dest || '-',
        keterangan: data.desc || '-',
        namaKegiatan: data.activity_name || '-',
        linkPendukung: data.additional_link || ''
      }
    }
  } catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  fetchSuratDetail()
})
</script>