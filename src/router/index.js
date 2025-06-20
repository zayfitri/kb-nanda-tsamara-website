// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// Import komponen-komponen rute Anda di sini
import HomeView from '../views/HomeView.vue';
import Article1 from '../views/Article1.vue'; // Pastikan Anda mengimpor artikel Anda
import Article2 from '../views/Article2.vue';
import Article3 from '../views/Article3.vue';
import Article4 from '../views/Article4.vue';
import Article5 from '../views/Article5.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles/article-1', // Sesuaikan path ini dengan path artikel Anda
      name: 'article1',
      component: Article1
    },
    {
      path: '/articles/article-2',
      name: 'article2',
      component: Article2
    },
    {
      path: '/articles/article-3',
      name: 'article3',
      component: Article3
    },
    {
      path: '/articles/article-4',
      name: 'article4',
      component: Article4
    },
    {
      path: '/articles/article-5',
      name: 'article5',
      component: Article5
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    // ... rute-rute lainnya
  ],
  // ✨ Bagian scrollBehavior ini sudah benar
  scrollBehavior(to, from, savedPosition) {
    // Fungsi ini akan selalu menggulir ke bagian atas halaman.
    // Peringatan "savedPosition is never read" muncul karena Anda tidak menggunakan
    // parameter 'savedPosition' di dalam body fungsi Anda saat ini.
    // Ini adalah peringatan TypeScript/ESLint, bukan masalah fungsionalitas.
    return { top: 0, left: 0, behavior: 'smooth' };
  }
});

export default router;