<template>
  <div class="flex flex-col w-[618px] h-[791px] mx-auto p-6 bg-white rounded-2xl shadow-md border">
    <h2 class="text-2xl font-semibold text-secondary mb-14 font-jakarta-sans">Tambah Data</h2>

    <form class="space-y-6">
      <!-- Nama Kegiatan -->
      <div>
        <label class="block  text-dark mb-2">Nama Kegiatan</label>
        <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-primary"/>
      </div>

      <!-- Tanggal Mulai -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-dark mb-2 font-jakarta-sans" >Tanggal Mulai</label>
          <div class="relative">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="left-3 top-1/2 -translate-y-1/2 absolute">
              <g clip-path="url(#clip0_1377_1787)">
              <path d="M19.7084 3.66699H17.7223V4.88921H19.5557V18.3337H2.44455V4.88921H4.27788V3.66699H2.29177C2.14891 3.66938 2.00793 3.69989 1.87687 3.75677C1.7458 3.81365 1.62723 3.8958 1.52792 3.99851C1.42861 4.10123 1.3505 4.2225 1.29807 4.35541C1.24564 4.48832 1.2199 4.63025 1.22233 4.7731V18.4498C1.2199 18.5926 1.24564 18.7346 1.29807 18.8675C1.3505 19.0004 1.42861 19.1216 1.52792 19.2244C1.62723 19.3271 1.7458 19.4092 1.87687 19.4661C2.00793 19.523 2.14891 19.5535 2.29177 19.5559H19.7084C19.8513 19.5535 19.9923 19.523 20.1233 19.4661C20.2544 19.4092 20.373 19.3271 20.4723 19.2244C20.5716 19.1216 20.6497 19.0004 20.7021 18.8675C20.7546 18.7346 20.7803 18.5926 20.7779 18.4498V4.7731C20.7803 4.63025 20.7546 4.48832 20.7021 4.35541C20.6497 4.2225 20.5716 4.10123 20.4723 3.99851C20.373 3.8958 20.2544 3.81365 20.1233 3.75677C19.9923 3.69989 19.8513 3.66938 19.7084 3.66699Z" fill="#2D3748"/>
              <path d="M4.88867 8.55566H6.11089V9.77789H4.88867V8.55566Z" fill="#2D3748"/>
              <path d="M8.55566 8.55566H9.77789V9.77789H8.55566V8.55566Z" fill="#2D3748"/>
              <path d="M12.2222 8.55566H13.4444V9.77789H12.2222V8.55566Z" fill="#2D3748"/>
              <path d="M15.8887 8.55566H17.1109V9.77789H15.8887V8.55566Z" fill="#2D3748"/>
              <path d="M4.88867 11.6113H6.11089V12.8336H4.88867V11.6113Z" fill="#2D3748"/>
              <path d="M8.55566 11.6113H9.77789V12.8336H8.55566V11.6113Z" fill="#2D3748"/>
              <path d="M12.2222 11.6113H13.4444V12.8336H12.2222V11.6113Z" fill="#2D3748"/>
              <path d="M15.8887 11.6113H17.1109V12.8336H15.8887V11.6113Z" fill="#2D3748"/>
              <path d="M4.88867 14.667H6.11089V15.8892H4.88867V14.667Z" fill="#2D3748"/>
              <path d="M8.55566 14.667H9.77789V15.8892H8.55566V14.667Z" fill="#2D3748"/>
              <path d="M12.2222 14.667H13.4444V15.8892H12.2222V14.667Z" fill="#2D3748"/>
              <path d="M15.8887 14.667H17.1109V15.8892H15.8887V14.667Z" fill="#2D3748"/>
              <path d="M6.11111 6.11155C6.27319 6.11155 6.42863 6.04716 6.54323 5.93255C6.65784 5.81795 6.72222 5.66251 6.72222 5.50043V1.83377C6.72222 1.67169 6.65784 1.51625 6.54323 1.40165C6.42863 1.28704 6.27319 1.22266 6.11111 1.22266C5.94903 1.22266 5.7936 1.28704 5.67899 1.40165C5.56438 1.51625 5.5 1.67169 5.5 1.83377V5.50043C5.5 5.66251 5.56438 5.81795 5.67899 5.93255C5.7936 6.04716 5.94903 6.11155 6.11111 6.11155Z" fill="#2D3748"/>
              <path d="M15.8889 6.11155C16.051 6.11155 16.2065 6.04716 16.3211 5.93255C16.4357 5.81795 16.5001 5.66251 16.5001 5.50043V1.83377C16.5001 1.67169 16.4357 1.51625 16.3211 1.40165C16.2065 1.28704 16.051 1.22266 15.8889 1.22266C15.7269 1.22266 15.5714 1.28704 15.4568 1.40165C15.3422 1.51625 15.2778 1.67169 15.2778 1.83377V5.50043C15.2778 5.66251 15.3422 5.81795 15.4568 5.93255C15.5714 6.04716 15.7269 6.11155 15.8889 6.11155Z" fill="#2D3748"/>
              <path d="M7.94434 3.66699H14.0554V4.88921H7.94434V3.66699Z" fill="#2D3748"/>
              </g>
              <defs>
              <clipPath id="clip0_1377_1787">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              class="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-primary"
              placeholder="dd/mm/yy"
            />
          </div>
        </div>

        <!-- tanggal selesai -->
        <div>
          <label class="block text-dark mb-2 font-jakarta-sans">Tanggal Selesai</label>
          <div class="relative">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="left-3 top-1/2 -translate-y-1/2 absolute">
              <g clip-path="url(#clip0_1377_1787)">
              <path d="M19.7084 3.66699H17.7223V4.88921H19.5557V18.3337H2.44455V4.88921H4.27788V3.66699H2.29177C2.14891 3.66938 2.00793 3.69989 1.87687 3.75677C1.7458 3.81365 1.62723 3.8958 1.52792 3.99851C1.42861 4.10123 1.3505 4.2225 1.29807 4.35541C1.24564 4.48832 1.2199 4.63025 1.22233 4.7731V18.4498C1.2199 18.5926 1.24564 18.7346 1.29807 18.8675C1.3505 19.0004 1.42861 19.1216 1.52792 19.2244C1.62723 19.3271 1.7458 19.4092 1.87687 19.4661C2.00793 19.523 2.14891 19.5535 2.29177 19.5559H19.7084C19.8513 19.5535 19.9923 19.523 20.1233 19.4661C20.2544 19.4092 20.373 19.3271 20.4723 19.2244C20.5716 19.1216 20.6497 19.0004 20.7021 18.8675C20.7546 18.7346 20.7803 18.5926 20.7779 18.4498V4.7731C20.7803 4.63025 20.7546 4.48832 20.7021 4.35541C20.6497 4.2225 20.5716 4.10123 20.4723 3.99851C20.373 3.8958 20.2544 3.81365 20.1233 3.75677C19.9923 3.69989 19.8513 3.66938 19.7084 3.66699Z" fill="#2D3748"/>
              <path d="M4.88867 8.55566H6.11089V9.77789H4.88867V8.55566Z" fill="#2D3748"/>
              <path d="M8.55566 8.55566H9.77789V9.77789H8.55566V8.55566Z" fill="#2D3748"/>
              <path d="M12.2222 8.55566H13.4444V9.77789H12.2222V8.55566Z" fill="#2D3748"/>
              <path d="M15.8887 8.55566H17.1109V9.77789H15.8887V8.55566Z" fill="#2D3748"/>
              <path d="M4.88867 11.6113H6.11089V12.8336H4.88867V11.6113Z" fill="#2D3748"/>
              <path d="M8.55566 11.6113H9.77789V12.8336H8.55566V11.6113Z" fill="#2D3748"/>
              <path d="M12.2222 11.6113H13.4444V12.8336H12.2222V11.6113Z" fill="#2D3748"/>
              <path d="M15.8887 11.6113H17.1109V12.8336H15.8887V11.6113Z" fill="#2D3748"/>
              <path d="M4.88867 14.667H6.11089V15.8892H4.88867V14.667Z" fill="#2D3748"/>
              <path d="M8.55566 14.667H9.77789V15.8892H8.55566V14.667Z" fill="#2D3748"/>
              <path d="M12.2222 14.667H13.4444V15.8892H12.2222V14.667Z" fill="#2D3748"/>
              <path d="M15.8887 14.667H17.1109V15.8892H15.8887V14.667Z" fill="#2D3748"/>
              <path d="M6.11111 6.11155C6.27319 6.11155 6.42863 6.04716 6.54323 5.93255C6.65784 5.81795 6.72222 5.66251 6.72222 5.50043V1.83377C6.72222 1.67169 6.65784 1.51625 6.54323 1.40165C6.42863 1.28704 6.27319 1.22266 6.11111 1.22266C5.94903 1.22266 5.7936 1.28704 5.67899 1.40165C5.56438 1.51625 5.5 1.67169 5.5 1.83377V5.50043C5.5 5.66251 5.56438 5.81795 5.67899 5.93255C5.7936 6.04716 5.94903 6.11155 6.11111 6.11155Z" fill="#2D3748"/>
              <path d="M15.8889 6.11155C16.051 6.11155 16.2065 6.04716 16.3211 5.93255C16.4357 5.81795 16.5001 5.66251 16.5001 5.50043V1.83377C16.5001 1.67169 16.4357 1.51625 16.3211 1.40165C16.2065 1.28704 16.051 1.22266 15.8889 1.22266C15.7269 1.22266 15.5714 1.28704 15.4568 1.40165C15.3422 1.51625 15.2778 1.67169 15.2778 1.83377V5.50043C15.2778 5.66251 15.3422 5.81795 15.4568 5.93255C15.5714 6.04716 15.7269 6.11155 15.8889 6.11155Z" fill="#2D3748"/>
              <path d="M7.94434 3.66699H14.0554V4.88921H7.94434V3.66699Z" fill="#2D3748"/>
              </g>
              <defs>
              <clipPath id="clip0_1377_1787">
              <rect width="22" height="22" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              class="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-primary"
              placeholder="dd/mm/yy"
            />
          </div>
        </div>
      </div>

      <!-- Nama Panitia -->
      <div>
        <label class="block text-dark mb-2 font-jakarta-sans" >Nama Panitia</label>
        <input
          type="text"
          class="w-full px-4 py-2 border rounded-md focus:outline-primary"
        />
      </div>

    </form>

    <div class="flex flex-wrap gap-2 mb-4 mt-4">
      <!-- satu baris -->
      <span class="flex items-center bg-primarymuda px-2 py-1 text-xs font-jakarta-sans font-normal text-secondary">
        <button class="text-secondary mr-2 ">
          <i class="bi-x-lg"></i>
        </button>
        I Putu Herdy Juniawan
      </span>

      <span class="flex items-center bg-primarymuda px-2 py-1 text-xs font-jakarta-sans font-normal text-secondary">
        <button class="text-secondary mr-2 ">
          <i class="bi-x-lg"></i>
        </button>
          I Wayan Deasa Putra
      </span>

      <span class="flex items-center bg-primarymuda px-2 py-1 text-xs font-jakarta-sans font-normal text-secondary">
        <button class="text-secondary mr-2 ">
          <i class="bi-x-lg"></i>
        </button>
        Ida Bagus Gede Ngurah Kemenuh
      </span>

      <span class="flex items-center bg-primarymuda px-2 py-1 text-xs font-jakarta-sans font-normal text-secondary">
        <button class="text-secondary mr-2 ">
          <i class="bi-x-lg"></i>
        </button>
        Anak Agung Mas Mayuri
      </span>

    </div>

    <div class="flex justify-end mt-auto gap-2 ">
      <!-- tombol batal -->
      <button class="font-jakarta-sans border-2 border-primary rounded-xl py-2 px-6 text-primary font-bold ">Batal</button>
       
       <!-- tombol kirim -->
      <button class="text-white  bg-primary border-2 border-birumuda rounded-xl py-2 px-6 font-jakarta-sans font-bold">Simpan</button>
    </div>

  </div>
</template>

