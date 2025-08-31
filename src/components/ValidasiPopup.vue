<template>
  <div class="backdrop-blur-sm fixed inset-0 z-[98] bg-black/50">
    <div class="flex flex-col fixed inset-5 items-center justify-center md:w-[618px] md:h-[650px] w-full h-screen md:mx-auto md:p-6 bg-white md:rounded-2xl md:shadow-md md:border">
      <svg class="w-full lg:h-[250px] h-[168px]" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M112.5 162.5H137.5V187.5H112.5V162.5ZM112.5 62.5H137.5V137.5H112.5V62.5ZM124.875 0C55.875 0 0 56 0 125C0 194 55.875 250 124.875 250C194 250 250 194 250 125C250 56 194 0 124.875 0ZM125 225C69.75 225 25 180.25 25 125C25 69.75 69.75 25 125 25C180.25 25 225 69.75 225 125C225 180.25 180.25 225 125 225Z" fill="#FFCA05"/>
      </svg>
  
      <h1 class="font-jakarta-sans text-secondary md:text-3xl text-[28px] font-bold mt-16">Hapus data ini?</h1>
      <p class="font-jakarta-sans text-secondary font-medium md:text-xl text-[17px] mt-6">Tindakan ini tidak akan dapat dikembalikan</p>
  
      <div class="flex justify-center gap-2 mt-14 ">
        <button @click="goBack" class="font-jakarta-sans border-2 border-primary rounded-xl py-2 px-6 text-primary font-bold" >Batal</button>
        <button @click="goBack" class="text-white  bg-primary border-2 border-birumuda rounded-xl py-2 px-6 font-jakarta-sans font-bold">Yakin</button>
      </div>
  
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

