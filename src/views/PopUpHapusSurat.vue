<template>
    <div class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
    <div class="bg-white rounded-xl p-8 w-full max-w-[490px] h-full max-h-[650px] text-center grid grid-rows-2">
      <!-- warning icon -->
      <div class="place-self-end justify-self-center">
        <svg width="250" height="250" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M137.5 187.5H162.5V212.5H137.5V187.5ZM137.5 87.5H162.5V162.5H137.5V87.5ZM149.875 25C80.875 25 25 81 25 150C25 219 80.875 275 149.875 275C219 275 275 219 275 150C275 81 219 25 149.875 25ZM150 250C94.75 250 50 205.25 50 150C50 94.75 94.75 50 150 50C205.25 50 250 94.75 250 150C250 205.25 205.25 250 150 250Z" fill="#FFCA05"/>
        </svg>
      </div>
      
      <div class="font-jakarta-sans">
        <!-- text -->
        <div class="mt-12">
          <p class="text-3xl font-bold text-secondary mb-2">Hapus surat ini?</p>
          <p class="font-medium text-secondary">Tindakan ini tidak akan dapat dikembalikan</p>
        </div>

        <!-- buttons -->
        <div class="flex justify-center gap-2 mt-10 font-semibold">
          <button class="border-primary border-2 rounded-xl bg-white text-primary w-20 h-9 justify-center">Batal</button>
          <button class="bg-primary text-white rounded-xl w-20 h-9 justify-center">Yakin</button>
        </div>
      </div>
      
    </div>
  </div>
</template>
