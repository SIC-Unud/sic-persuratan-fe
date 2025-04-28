<template>
    <div class="relative inline-block text-left">
        <!-- Arrow -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-dark rotate-45 z-10">
        </div>

        <!-- Dropdown -->
        <div class="pt-2 w-56 rounded-lg shadow-lg border border-dark bg-white overflow-hidden">
            <ul class="py-1">
                <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Menunggu Diajukan</button>
                <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Sedang Diajukan</button>
                <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Sudah Diajukan</button>
                <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Ditolak</button>
                <button class="w-full text-left px-4 py-2 cursor-pointer font-jakarta-sans text-base hover:bg-gray-100 focus:text-white focus:bg-primary text-dark">Dibatalkan</button>
            </ul>
        </div>
    </div>


</template>