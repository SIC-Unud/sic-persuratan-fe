<template>
  <div class="min-h-screen flex flex-col lg:flex-row">
    <!-- Mobile -->
    <div class="block lg:hidden flex justify-center items-center p-6">
      <img src="@/assets/iamge.png" class="w-[250px] h-[250px] object-contain" alt="Login Image" />
    </div>

    <!-- Form Section -->
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-8 lg:px-10">
      <div class="w-full max-w-sm">
        <h1 class="text-3xl lg:text-[48px] font-bold custom-blue mb-3 text-center lg:text-left">
          Selamat Datang!
        </h1>
        <p class="text-base lg:text-[20px] custom-gray mb-6 text-center lg:text-left">
          Silahkan masukkan username dan passwordmu untuk masuk
        </p>

        <form class="space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            class="w-full py-2 bg-[#4C9BE8] text-white text-base font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>

    <!-- Desktop -->
    <div class="hidden lg:flex w-1/2 bg-blue-50 items-center justify-center p-10">
      <img src="@/assets/iamge.png" class="w-[703px] h-[594px] object-contain" alt="Login Image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../service/AuthAPI.js';

const router = useRouter();

const username = ref('');
const password = ref('');
const message = ref('');

async function handleSubmit() {
  try {
    const res = await login({
      username: username.value,
      password: password.value,
    });

    console.log('LOGIN RESPONSE:', res);
    console.log('DATA =', res.data)
    console.log('TOKEN FIELD =', res.data.token)

    if (res.data.success) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.data.role);
      localStorage.setItem('user_id', res.data.data.id)

      const role = res.data.data.role;

      if ([1, 2, 3, 4, 5].includes(role)) {
        router.push('/admin/surat');
      } else {
        router.push('/surat');
      }
    }
  } catch (e) {
    console.error('LOGIN ERROR =', e)
  }
}
</script>