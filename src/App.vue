<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue'; // Sesuaikan path jika berbeda dengan lokasi komponen Navbar Anda
import Footer from './components/Footer.vue'; // Sesuaikan path jika berbeda dengan lokasi komponen Footer Anda
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    
    <main class="flex-grow">
      <RouterView />
    </main>
    
    <Footer />
  </div>
</template>

<style>
/* Pengaturan CSS global untuk html dan body ini membantu memastikan bahwa 
  Flexbox untuk sticky footer berfungsi dengan benar di seluruh halaman.
*/
html, body {
  height: 100%; /* Memastikan tinggi html dan body penuh */
  margin: 0;   /* Menghilangkan margin default browser */
  padding: 0;  /* Menghilangkan padding default browser */
  overflow-x: hidden; /* Mencegah scroll horizontal yang tidak diinginkan, berguna untuk desain responsif */
}

/* Bagian #app yang dikomentari di bawah ini adalah contoh bagaimana Anda bisa mendefinisikan 
  properti flexbox secara eksplisit di CSS, namun dalam kasus ini sudah ditangani oleh kelas Tailwind 
  langsung di template (flex flex-col min-h-screen).
*/
/*
#app {
  display: flex;
  flex-direction: column;
}
*/
</style>