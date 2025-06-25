<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'; // Import ref dari Vue

// Definisikan state reaktif untuk mengontrol visibilitas menu mobile
const isMobileMenuOpen = ref(false);

// Fungsi untuk toggle (mengubah) nilai isMobileMenuOpen
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Opsional: Tutup menu mobile ketika navigasi di klik (pada mode mobile)
const closeMobileMenu = () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};
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
        <button @click="toggleMobileMenu" class="text-gray-800 focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-white py-2 shadow-lg"
      :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
    >
      <RouterLink
        to="/"
        class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-700 transition duration-300"
        @click="closeMobileMenu"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/contact"
        class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-green-700 transition duration-300"
        @click="closeMobileMenu"
      >
        Contact
      </RouterLink>
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