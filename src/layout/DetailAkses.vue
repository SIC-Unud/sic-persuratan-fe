<template>
    <!-- Tombol Tambah data -->
    <div class="flex justify-between">
        <h1 class="font-jakarta-sans font-bold text-2xl text-secondary">Detail Akses</h1>
        <button class="md:flex md:py-2 px-6 md:bg-primary md:rounded-xl md:gap-2 md:text-white hidden">Edit</button>
    </div>
    
    <!-- kegiatan -->
    <div class="mt-7 mb-8 text-secondary font-jakarta-sans font-semibold text-base/[28px]">
        <tr>
            <td>Nama Kegiatan</td>
            <td>: FGD</td>
        </tr>
        
        <tr>
            <td>Tanggal Kegiatan</td>
            <td>: 11/11/2025 - 11/12/2023</td>
        </tr>

        <div class="flex justify-end mt-9">
            <button class="py-2 px-6 bg-primary rounded-xl gap-2 text-white lg:hidden">Edit</button>
        </div>
     </div>

    <!-- header -->
    <div class="md:flex md:justify-between md:pt-3 hidden">
        <!-- tampilan -->
        <div class="flex gap-2">
            <p>Tampilkan</p>
            <!-- select -->
            <div>
                <select name="" id="opsi">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <p>entri</p>
        </div>

        <!-- cari dan filter -->
        <div class="flex gap-2">
            <!-- search bar -->
            <button class="border-2 border-secondary w-10 h-10 rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                    <path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#1A365D"/>
                </svg>
            </button>


             <!-- filter -->
              <button class="flex justify-center items-center gap-2">
                <svg width="21" height="21" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 6.5H7.5M5.5 6.5H2.5M18.5 16.5H7.5M5.5 16.5H2.5M13.5 11.5H2.5M18.5 11.5H15.5M6.5 4.5C6.76522 4.5 7.01957 4.60536 7.20711 4.79289C7.39464 4.98043 7.5 5.23478 7.5 5.5V7.5C7.5 7.76522 7.39464 8.01957 7.20711 8.20711C7.01957 8.39464 6.76522 8.5 6.5 8.5C6.23478 8.5 5.98043 8.39464 5.79289 8.20711C5.60536 8.01957 5.5 7.76522 5.5 7.5V5.5C5.5 5.23478 5.60536 4.98043 5.79289 4.79289C5.98043 4.60536 6.23478 4.5 6.5 4.5ZM6.5 14.5C6.76522 14.5 7.01957 14.6054 7.20711 14.7929C7.39464 14.9804 7.5 15.2348 7.5 15.5V17.5C7.5 17.7652 7.39464 18.0196 7.20711 18.2071C7.01957 18.3946 6.76522 18.5 6.5 18.5C6.23478 18.5 5.98043 18.3946 5.79289 18.2071C5.60536 18.0196 5.5 17.7652 5.5 17.5V15.5C5.5 15.2348 5.60536 14.9804 5.79289 14.7929C5.98043 14.6054 6.23478 14.5 6.5 14.5ZM14.5 9.5C14.7652 9.5 15.0196 9.60536 15.2071 9.79289C15.3946 9.98043 15.5 10.2348 15.5 10.5V12.5C15.5 12.7652 15.3946 13.0196 15.2071 13.2071C15.0196 13.3946 14.7652 13.5 14.5 13.5C14.2348 13.5 13.9804 13.3946 13.7929 13.2071C13.6054 13.0196 13.5 12.7652 13.5 12.5V10.5C13.5 10.2348 13.6054 9.98043 13.7929 9.79289C13.9804 9.60536 14.2348 9.5 14.5 9.5Z" stroke="#1A365D" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1 class="font-jakarta-sans font-bold text-secondary">Filter</h1>
              </button>
        </div>

    </div>

    <div>
        <!-- header tabel -->
        <table class="w-full table-auto mt-5">
            <!-- table head -->
            <thead class="border-t-2 font-bold text-secondary w-full">
                <tr class="grid md:grid-cols-12 grid-cols-5 py-3">
                    <td class="text-left justify-self-start pl-4">No</td>
                    <td class="flex md:col-span-8 col-span-3 items-center ">
                        <h1 class="mr-3">Nama Anggota</h1> 
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99992 15V3.414L1.70692 5.707C1.51832 5.88916 1.26571 5.98995 1.00352 5.98767C0.741321 5.9854 0.490509 5.88023 0.3051 5.69482C0.119692 5.50941 0.0145236 5.2586 0.0122452 4.9964C0.00996676 4.7342 0.110761 4.4816 0.292919 4.293L4.29292 0.292999C4.48045 0.105528 4.73475 0.000213623 4.99992 0.000213623C5.26508 0.000213623 5.51939 0.105528 5.70692 0.292999L9.70692 4.293C9.88908 4.4816 9.98987 4.7342 9.98759 4.9964C9.98531 5.2586 9.88014 5.50941 9.69474 5.69482C9.50933 5.88023 9.25852 5.9854 8.99632 5.98767C8.73412 5.98995 8.48152 5.88916 8.29292 5.707L5.99992 3.414V15C5.99992 15.2652 5.89456 15.5196 5.70703 15.7071C5.51949 15.8946 5.26514 16 4.99992 16C4.7347 16 4.48035 15.8946 4.29281 15.7071C4.10528 15.5196 3.99992 15.2652 3.99992 15Z" fill="#1A365D"/>
                        </svg>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99992 1V12.586L1.70692 10.293C1.51832 10.1108 1.26571 10.01 1.00352 10.0123C0.741321 10.0146 0.490509 10.1198 0.3051 10.3052C0.119692 10.4906 0.0145236 10.7414 0.0122452 11.0036C0.00996676 11.2658 0.110761 11.5184 0.292919 11.707L4.29292 15.707C4.48045 15.8945 4.73475 15.9998 4.99992 15.9998C5.26508 15.9998 5.51939 15.8945 5.70692 15.707L9.70692 11.707C9.88908 11.5184 9.98987 11.2658 9.98759 11.0036C9.98531 10.7414 9.88014 10.4906 9.69474 10.3052C9.50933 10.1198 9.25852 10.0146 8.99632 10.0123C8.73412 10.01 8.48152 10.1108 8.29292 10.293L5.99992 12.586V1C5.99992 0.734784 5.89456 0.48043 5.70703 0.292893C5.51949 0.105357 5.26514 0 4.99992 0C4.7347 0 4.48035 0.105357 4.29281 0.292893C4.10528 0.48043 3.99992 0.734784 3.99992 1Z" fill="#63A8E7"/>
                        </svg>
                    </td>
                    <td class="md:col-span-3 md:justify-self-center">Aksi</td>
                </tr>
            </thead>
    
            <!-- table body -->
            <tbody>

                <!-- satu baris -->
                <tr class="grid border-t-2 md:grid-cols-12 grid-cols-5 py-3">
                    <td class="text-left justify-self-start pl-8 font-inter text-xs md:text-base font-medium">1</td>
                    <td class="flex md:col-span-8 col-span-3 justify-self-start text-xs md:text-base font-medium font-jakarta-sans">NASI GORENG MISI BE TALUH</td>
                    <td class="md:col-span-3 justify-self-center flex justify-center gap-4 md:pl-8">
                            <button>
                                <svg class="w-full lg:h-[30px] h-6" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.088 13.53L22.468 14.91L8.87805 28.5H7.49805V27.12L21.088 13.53ZM26.488 4.5C26.113 4.5 25.723 4.65 25.438 4.935L22.693 7.68L28.318 13.305L31.063 10.56C31.648 9.975 31.648 9.03 31.063 8.445L27.553 4.935C27.253 4.635 26.878 4.5 26.488 4.5ZM21.088 9.285L4.49805 25.875V31.5H10.123L26.713 14.91L21.088 9.285Z" fill="#FFCA05"/>
                                </svg>
                            </button>
                            <button>
                                <svg class="w-full lg:h-[30px] h-6" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 13.5V28.5H12V13.5H24ZM21.75 4.5H14.25L12.75 6H7.5V9H28.5V6H23.25L21.75 4.5ZM27 10.5H9V28.5C9 30.15 10.35 31.5 12 31.5H24C25.65 31.5 27 30.15 27 28.5V10.5Z" fill="#D72638"/>
                                </svg>
                            </button>
                    </td>
                </tr>

                <!-- satu baris -->
                <tr class="grid border-t-2 md:grid-cols-12 grid-cols-5 py-3">
                    <td class="text-left justify-self-start pl-8 font-inter text-xs md:text-base font-medium">1</td>
                    <td class="flex md:col-span-8 col-span-3 justify-self-start text-xs md:text-base font-medium font-jakarta-sans">NASI GORENG MISI BE TALUH</td>
                    <td class="md:col-span-3 justify-self-center flex justify-center gap-4 md:pl-8">
                            <button>
                                <svg class="w-full lg:h-[30px] h-6" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.088 13.53L22.468 14.91L8.87805 28.5H7.49805V27.12L21.088 13.53ZM26.488 4.5C26.113 4.5 25.723 4.65 25.438 4.935L22.693 7.68L28.318 13.305L31.063 10.56C31.648 9.975 31.648 9.03 31.063 8.445L27.553 4.935C27.253 4.635 26.878 4.5 26.488 4.5ZM21.088 9.285L4.49805 25.875V31.5H10.123L26.713 14.91L21.088 9.285Z" fill="#FFCA05"/>
                                </svg>
                            </button>
                            <button>
                                <svg class="w-full lg:h-[30px] h-6" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 13.5V28.5H12V13.5H24ZM21.75 4.5H14.25L12.75 6H7.5V9H28.5V6H23.25L21.75 4.5ZM27 10.5H9V28.5C9 30.15 10.35 31.5 12 31.5H24C25.65 31.5 27 30.15 27 28.5V10.5Z" fill="#D72638"/>
                                </svg>
                            </button>
                    </td>
                </tr>

                
            </tbody>
        </table>        
    </div>

    <!-- opsi bawah -->
    <div class="flex justify-between border-t-2">
        <!-- menampilkan -->
        <div class="md:m-4 md:mt-6 m-2">
            <h1 class="font-jakarta-sans font-medium md:text-xl text-xs/[28px] text-secondary">Menampilkan <span class="text-primary font-jakarta-sans">10</span> dari <span class="text-primary font-jakarta-sans">27</span> entri</h1>
        </div>

        <!-- halaman --> 
        <div class="flex items-center md:m-5 md:mr-3 m-3 space-x-0 border md:rounded-lg rounded-[4px] border-primary overflow-hidden text-primary">
            <!-- Tombol panah kiri -->
            <button class="md:p-2 p-1 border-r md:text-base text-[8px] border-primary h-full">
                <i class="bi-chevron-left"></i>
            </button>

            <!-- Page 1 (aktif) -->
            <button class="md:px-3 md:py-2 px-2 py-1 border-r border-primary font-jakarta-sans md:text-base text-[8px] h-full focus:bg-primary focus:text-white">
                1
            </button>

            <!-- Page 2 -->
            <button class="md:px-3 md:py-2 px-2 py-1 border-r border-primary font-jakarta-sans md:text-base text-[8px] h-full focus:bg-primary focus:text-white">
                2
            </button>

            <!-- Page 3 -->
            <button class="md:px-3 md:py-2 px-2 py-1 border-r border-primary font-jakarta-sans md:text-base text-[8px] h-full focus:bg-primary focus:text-white">
                3
            </button>

            <!-- Tombol panah kanan -->
            <button class="md:p-2 p-1 md:text-base text-[8px]">
                <i class="bi bi-chevron-right"></i>
            </button>
        </div>

    </div>

</template>

<script setup>
import NavItem from '@/components/NavItem.vue';


</script>