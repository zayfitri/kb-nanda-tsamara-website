<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper'

// Penting: Impor gaya CSS Swiper yang diperlukan
import 'swiper/css'
import 'swiper/css/pagination' // Untuk titik-titik paginasi

const galleryItems = [
  { id: 1, img: '/images/gallery-1.jpeg', alt: 'Galeri 1', link: '/articles/article-1' },
  { id: 2, img: '/images/gallery-2.JPG', alt: 'Galeri 2', link: '/articles/article-2' },
  { id: 3, img: '/images/gallery-3.JPG', alt: 'Galeri 3', link: '/articles/article-3' },
  { id: 4, img: '/images/gallery-4.png', alt: 'Galeri 4', link: '/articles/article-4' },
  { id: 5, img: '/images/gallery-5.png', alt: 'Galeri 5', link: '/articles/article-5' },
]

const swiperOptions = {
  // Hanya sertakan modul yang diperlukan: Autoplay dan Pagination
  modules: [Autoplay, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Konfigurasi navigasi (tombol panah) telah dihapus dari sini
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  // Mengaktifkan kembali geser/tarik (default Swiper)
  simulateTouch: true,
  grabCursor: true,
}
</script>

<template>
  <div class="home-content">
    <section
      class="relative h-[60vh] md:h-[75vh] bg-cover bg-center flex items-center text-white p-4"
      style="background-image: url('/images/hero-bg.jpg')"
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>

      <div class="container mx-auto">
        <div class="px-4">
          <h1 class="text-3xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            KB Nanda Tsamara Terpadu
          </h1>
          <p class="text-base md:text-lg drop-shadow-md">
            Membangun Generasi Cerdas dan Berkarakter Sejak Dini. Wujudkan potensi <br />
            terbaik buah hati Anda bersama kami!
          </p>
        </div>
      </div>
    </section>

    <section
      class="container mx-auto -mt-16 relative z-20 grid grid-cols-2 md:grid-cols-4 gap-4 p-4"
    >
      <div
        class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300"
      >
        <div class="bg-green-500 rounded-full p-3 mb-2">
          <svg
            class="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <p class="text-sm font-semibold text-gray-700">
          Guru ramah & senang <br />
          kepada anak-anak
        </p>
      </div>
      <div
        class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300"
      >
        <div class="bg-green-500 rounded-full p-3 mb-2">
          <svg
            class="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <p class="text-sm font-semibold text-gray-700">
          Dapat melanjutkan ke jenjang sekolah SD/MI/Sederajat
        </p>
      </div>
      <div
        class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300"
      >
        <div class="bg-green-500 rounded-full p-3 mb-2">
          <svg
            class="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h-5V9H4a2 2 0 00-2 2v5a2 2 0 002 2h3m11-9V7a2 2 0 00-2-2h-3m0 10l-4 4m6-4a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v6m3-3h.01"
            ></path>
          </svg>
        </div>
        <p class="text-sm font-semibold text-gray-700">Dipandu guru dan asisten guru dalam kelas</p>
      </div>
      <div
        class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300"
      >
        <div class="bg-green-500 rounded-full p-3 mb-2">
          <svg
            class="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            ></path>
          </svg>
        </div>
        <p class="text-sm font-semibold text-gray-700">
          Pembekalan dapat membaca, menulis dan <br />
          berhitung serta berkreasi
        </p>
      </div>
    </section>

    <section class="container mx-auto py-8 px-4 mt-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Lingkungan Belajar Kami</h2>
      <p class="text-gray-600 leading-relaxed">
        KB Nanda Tsamara Terpadu menyediakan lingkungan belajar yang aman, nyaman, dan mendukung
        perkembangan optimal setiap anak. Dengan fasilitas yang lengkap dan kurikulum yang inovatif,
        kami menciptakan suasana yang merangsang rasa ingin tahu, kreativitas, dan kemampuan sosial
        anak sejak usia dini. Kami percaya bahwa bermain adalah cara terbaik anak belajar, sehingga
        setiap aktivitas dirancang menyenangkan dan mendidik. Bergabunglah bersama kami dan saksikan
        buah hati Anda tumbuh menjadi pribadi yang cerdas, mandiri, dan berkarakter mulia.
      </p>
    </section>

    <section class="relative py-8 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 px-4">Kegiatan Kami</h2>
      </div>

      <div class="container mx-auto">
        <swiper
          :slides-per-view="swiperOptions.slidesPerView"
          :space-between="swiperOptions.spaceBetween"
          :loop="swiperOptions.loop"
          :autoplay="swiperOptions.autoplay"
          :pagination="swiperOptions.pagination"
          :simulateTouch="swiperOptions.simulateTouch"
          :grabCursor="swiperOptions.grabCursor"
          :breakpoints="swiperOptions.breakpoints"
          class="mySwiper"
        >
          <swiper-slide v-for="item in galleryItems" :key="item.id">
            <RouterLink :to="item.link" class="block relative group">
              <div class="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
                <img
                  :src="item.img"
                  :alt="item.alt"
                  class="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  width="800"
                  height="600"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                ></div>
                <div
                  class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-lg"
                >
                  Lihat Artikel
                </div>
              </div>
            </RouterLink>
          </swiper-slide>
        </swiper>

        <div class="swiper-pagination"></div>
      </div>
    </section>

    <section class="container mx-auto py-12 px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Alur Pendaftaran</h2>

      <div class="mb-12 text-left">
        <span class="text-gray-600 text-lg md:text-xl font-medium"
          >Periode Pendaftaran: 1-30 Juni 2025</span
        >
        <br />
        <br />
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        <div
          class="registration-card bg-white rounded-lg shadow-xl p-6 relative flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm"
        >
          <div
            class="step-number-circle bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-3xl font-bold shadow-md -mt-10 mb-4 border-4 border-white"
          >
            01
          </div>
          <p class="text-gray-700 font-medium mb-4 text-lg">
            Orang Tua / Wali calon siswa melakukan pendaftaran dan input data secara manual pada
            formulir.
          </p>
          <span
            class="inline-block bg-yellow-400 text-gray-800 font-bold py-1 px-4 rounded-full text-sm"
            >1-27 Mei 2025</span
          >
        </div>

        <div
          class="registration-card bg-white rounded-lg shadow-xl p-6 relative flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm"
        >
          <div
            class="step-number-circle bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-3xl font-bold shadow-md -mt-10 mb-4 border-4 border-white"
          >
            02
          </div>
          <p class="text-gray-700 font-medium mb-4 text-lg">
            Orang Tua/Wali calon siswa menyerahkan formulir pendaftaran.
          </p>
          <span
            class="inline-block bg-yellow-400 text-gray-800 font-bold py-1 px-4 rounded-full text-sm"
            >27-28 Mei 2025</span
          >
        </div>

        <div
          class="registration-card bg-white rounded-lg shadow-xl p-6 relative flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm"
        >
          <div
            class="step-number-circle bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-3xl font-bold shadow-md -mt-10 mb-4 border-4 border-white"
          >
            03
          </div>
          <p class="text-gray-700 font-medium mb-4 text-lg">
            Menyerahkan bukti pendaftaran ke sekolah dan membayar biaya.
          </p>
          <span
            class="inline-block bg-yellow-400 text-gray-800 font-bold py-1 px-4 rounded-full text-sm"
            >29-30 Mei 2025</span
          >
        </div>

        <div
          class="registration-card bg-white rounded-lg shadow-xl p-6 relative flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm"
        >
          <div
            class="step-number-circle bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-3xl font-bold shadow-md -mt-10 mb-4 border-4 border-white"
          >
            04
          </div>
          <p class="text-gray-700 font-medium mb-4 text-lg">Daftar ulang</p>
          <span
            class="inline-block bg-yellow-400 text-gray-800 font-bold py-1 px-4 rounded-full text-sm"
            >31 Mei 2025</span
          >
        </div>

        <div
          class="registration-card bg-white rounded-lg shadow-xl p-6 relative flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full max-w-sm"
        >
          <div
            class="step-number-circle bg-green-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-3xl font-bold shadow-md -mt-10 mb-4 border-4 border-white"
          >
            05
          </div>
          <p class="text-gray-700 font-medium mb-4 text-lg">Masuk sekolah hari pertama</p>
          <span
            class="inline-block bg-yellow-400 text-gray-800 font-bold py-1 px-4 rounded-full text-sm"
            >16 Juni 2025</span
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Swiper Custom Styling (tetap sama seperti sebelumnya) */
.mySwiper .swiper-slide {
  width: 100%;
  transition: none;
}

.mySwiper {
  z-index: 1;
}

@media (min-width: 768px) {
  .mySwiper .swiper-slide {
    width: calc((100% - var(--swiper-space-between, 30px)) / 2);
  }
}

@media (min-width: 1024px) {
  .mySwiper .swiper-slide {
    width: calc((100% - 2 * var(--swiper-space-between, 40px)) / 3);
  }
}

.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
}

.swiper-pagination-bullet {
  background: white !important;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: #16a34a !important;
  opacity: 1;
}

/* Tidak ada CSS khusus tambahan di sini untuk alur pendaftaran. Kita mengandalkan Tailwind saja. */
</style>
