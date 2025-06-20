<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-white text-gray-800 p-4 shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img src="/images/logo-paud.png" alt="Logo PAUD" class="h-10 w-10 mr-3">
        <RouterLink to="/" class="text-xl font-bold text-gray-800 hover:text-green-700 transition duration-300">
          KB Nanda Tsamara Terpadu
        </RouterLink>
      </div>

      <div class="hidden md:flex space-x-6">
        <RouterLink to="/" class="hover:text-green-700 transition duration-300">Home</RouterLink>
        <RouterLink to="/contact" class="hover:text-green-700 transition duration-300">Contact</RouterLink>
      </div>

      <div class="md:hidden">
        <button class="text-gray-800 focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Gunakan warna hijau default Tailwind atau biarkan default browser jika ingin */
.router-link-exact-active {
  font-weight: bold;
  color: #16A34A; /* Tailwind green-600 sebagai contoh */
}
</style>