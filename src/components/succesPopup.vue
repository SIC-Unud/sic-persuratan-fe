<template>
  <div class="backdrop-blur-sm fixed inset-0 z-[98] bg-black/50">
    <div class="flex flex-col fixed inset-5 items-center justify-center md:w-[618px] md:h-[500px] w-full h-screen md:mx-auto md:p-6 bg-white md:rounded-2xl md:shadow-md md:border">
        
      <img src="../assets/check_circle_outline.png" alt="success" class="w-full lg:h-[250px] h-[168px]">
  
      <h1 class="font-jakarta-sans text-secondary md:text-5xl text-[40px] font-bold mt-16">Pengajuan Berhasil</h1>
      <p class="font-jakarta-sans text-secondary font-medium md:text-xl text-[20px] mt-6">Suratmu berhasil diajukan. Mohon tunggu dan cek secara berkala pembaruan yang akan dilakukan. Terima kasih.</p>

      <button 
        class="mt-10 px-6 py-3 bg-primary text-white rounded-xl font-bold"
        @click="$emit('close')"
      >
        OK
      </button>
  
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goBack () {
  router.back();
}


</script>

