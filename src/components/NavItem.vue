<template>
  <div class="p-4 rounded-md w-full hover:bg-sky-400 group transition-all duration-200"
    :class="isActive ? 'bg-sky-400' : ''">
    <RouterLink to="#" class="group-hover:text-white font-jakarta-sans"
      :class="isActive ? 'text-white' : 'text-secondary'">
      <i class="bi mr-4" :class="icon"></i>
      {{ text }}
    </RouterLink>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  text: String,
  isActive: Boolean
})
</script>