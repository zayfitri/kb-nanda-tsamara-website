<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // Impor useRoute

const route = useRoute(); // Dapatkan objek rute saat ini

// Buat computed property untuk mengecek apakah kita berada di halaman kontak
const isContactPage = computed(() => {
  return route.path === '/contact';
});
</script>

<template>
  <footer class="bg-green-700 text-white py-8">
    <div v-if="!isContactPage" class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

      <div class="text-center md:text-left">
        <p class="font-bold text-lg mb-2">KB Nanda Tsamara Terpadu</p>
        <p>Perumahan Batu Ratna Indah Residence</p>
        <p>Blok D No.8 Karangjoang Balikpapan Utara</p>
      </div>

      <div class="text-center md:text-left">
        <h3 class="text-xl font-bold mb-4">Informasi Pendaftaran</h3>
        <ul class="space-y-2 mb-4">
          <li><a href="tel:+6285753523134" class="hover:underline">0857-5352-3134 <span class="font-bold">BUNDA ANI</span></a></li>
          <li><a href="tel:+6285752804158" class="hover:underline">0857-5280-4158 <span class="font-bold">BUNDA ILA</span></a></li>
          <li><a href="tel:+6285802115385" class="hover:underline">0858-0211-5385 <span class="font-bold">BUNDA NIA</span></a></li>
        </ul>

        <h3 class="text-xl font-bold mb-4">Informasi Lebih Lanjut</h3>
        <ul class="space-y-2">
          <li class="flex items-center justify-center md:justify-start">
            <img src="/images/email-icon.svg" alt="Email Icon" class="w-5 h-5 mr-2" />
            <a href="mailto:nandatsamara@gmail.com" class="hover:underline">nandatsamara@gmail.com</a>
          </li>
          <li class="flex items-center justify-center md:justify-start">
            <img src="/images/instagram-icon.svg" alt="Instagram Icon" class="w-5 h-5 mr-2" />
            <a href="https://www.instagram.com/paud_nanda_tsamara_bri/" target="_blank" rel="noopener noreferrer" class="hover:underline">@paud_nanda_tsamara_bri</a>
          </li>
          <li class="flex items-center justify-center md:justify-start">
            <img src="/images/whatsapp-icon.svg" alt="WhatsApp" class="h-5 w-5 mr-2" /> <a href="https://wa.me/6285753523134" target="_blank" class="hover:underline">Chat via WhatsApp</a>
          </li>
        </ul>
      </div>

      <div class="text-center md:text-left">
        <h3 class="text-xl font-bold mb-4">Jam Operasional & PPDB</h3>
        <div class="space-y-2 mb-6">
          <p>Dibuka PPDB 2024/2025</p>
          <p>Senin-Jum'at</p>
          <p>08.00 - 10.00 WITA</p>
        </div>

        <div class="flex flex-col items-center md:items-start gap-4">
          <a href="https://maps.app.goo.gl/R3GafRf47oRu3rLK8" target="_blank" class="inline-block bg-white text-green-700 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 w-full md:w-auto text-center">
            Lokasi Paud
          </a>
        </div>
      </div>
    </div>

    <div v-else class="container mx-auto px-4 text-center text-sm py-4 border-t border-green-600">
      <p>KB Nanda Tsamara Terpadu © 2025.</p>
    </div>
  </footer>
</template>

<style scoped>
/* Anda bisa menambahkan atau menyesuaikan gaya kustom di sini jika diperlukan */
</style>