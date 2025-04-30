<template>
    <div class="w-1/2 flex flex-col justify-center items-center px-10">
    <div class="w-full max-w-sm">
      <h1 class="text-[48px] font-bold text-blue-600 mb-2">Selamat Datang!</h1>
      <p class="text-[20px] text-gray-600 mb-6">Silahkan masukkan username dan passwordmu untuk masuk</p>

      <form class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" name="email" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" id="password" name="password" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
        </div>

        <button type="submit"
          class="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
          Masuk
        </button>
      </form>
    </div>
  </div>

  <!-- Right Side: Illustration -->
  <div class="w-1/2 bg-blue-50 flex items-center justify-center p-10">
    <img src="img/iamge.png" alt="Ilustrasi"
      class="w-[703px] h-[594px] object-contain">
  </div>
</template>
