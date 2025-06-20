<template>
  <div class="container mx-auto py-8 px-4">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="lg:w-2/3">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Kegiatan Praktik Sholat di KB Nanda Tsamara Terpadu
        </h1>
        <p class="text-gray-600 text-sm mb-6">Kamis | 10 April 2025</p>

        <img
          src="/images/gallery-1.jpeg"
          alt="Kegiatan Praktik Sholat"
          class="w-full h-auto rounded-lg mb-6 shadow-md"
        />

        <div class="prose max-w-none text-gray-700 leading-relaxed">
          <p class="mb-4">
            Dalam upaya menanamkan nilai-nilai keagamaan dan membentuk karakter Islami sejak dini,
            KB Nanda Tsamara Terpadu secara rutin menyelenggarakan kegiatan praktik sholat. Kegiatan
            ini dirancang khusus agar anak-anak dapat memahami tata cara sholat dengan cara yang
            menyenangkan, interaktif, dan mudah diikuti.
          </p>
          <p class="mb-4">
            Setiap sesi praktik sholat dibimbing langsung oleh guru-guru yang berkompeten dan penuh
            kasih sayang. Mereka mengajarkan gerakan-gerakan sholat, bacaan doa pendek, serta adab
            beribadah dengan sabar. Anak-anak diajak untuk mengenal tahapan sholat, mulai dari takbiratul
            ihram hingga salam, melalui demonstrasi dan praktik langsung yang berulang-ulang.
          </p>
          <p class="mb-4">
            Fokus utama kami bukan hanya mengajarkan hafalan, tetapi juga menumbuhkan kecintaan anak-anak
            terhadap ibadah dan pemahaman akan makna sholat. Kami percaya bahwa dengan praktik yang
            konsisten dan bimbingan yang tepat, anak-anak akan terbiasa dan merasa nyaman dalam
            menjalankan sholat sebagai bagian dari kehidupan sehari-hari mereka.
          </p>
          <p class="mb-4">
            Suasana praktik sholat selalu dipenuhi dengan keceriaan dan semangat belajar. Anak-anak
            tampak antusias menirukan gerakan guru dan mencoba menghafal bacaan sholat. Kami juga
            mengajarkan mereka pentingnya kebersihan dan berwudhu sebelum sholat, serta menjaga
            ketertiban selama beribadah.
          </p>
          <p class="mb-4">
            Melalui kegiatan praktik sholat ini, KB Nanda Tsamara Terpadu berkomitmen untuk
            menciptakan generasi penerus yang tidak hanya cerdas secara intelektual, tetapi juga
            memiliki fondasi spiritual yang kuat, berakhlak mulia, dan berdisiplin. Semoga bekal ini
            dapat menjadi pijakan bagi mereka untuk tumbuh menjadi pribadi yang sholeh dan sholehah. KB Nanda Tsamara Terpadu meyakini bahwa pendidikan agama yang diterapkan secara konsisten dan penuh kasih sayang akan membentuk pribadi anak yang lembut hati, disiplin, dan penuh tanggung jawab terhadap kewajiban spiritualnya.
          </p>
        </div>
      </div>

      <div class="lg:w-1/3">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Artikel Terbaru</h3>
          <ul>
            <li
              v-for="article in latestArticles"
              :key="article.id"
              class="mb-4 flex items-center"
            >
              <template v-if="article.id !== currentArticleId">
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="w-16 h-16 object-cover rounded-md mr-3"
                />
                <div>
                  <router-link
                    :to="article.path"
                    class="font-semibold text-gray-700 hover:text-green-500"
                  >
                    {{ article.title }}
                  </router-link>
                  <p class="text-sm text-gray-500">{{ article.date }}</p>
                </div>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Definisikan ID artikel saat ini
const currentArticleId = 'article1';

// Definisikan daftar semua artikel untuk sidebar, diurutkan dari yang terbaru
const latestArticles = [
  {
    id: 'article2',
    title: 'Kegiatan Mengajar di KB Nanda Tsamara Terpadu',
    date: '24 April 2025',
    image: '/images/gallery-2.JPG',
    path: '/articles/article-2',
  },
  {
    id: 'article3',
    title: 'Kegiatan Senam Ceria Bersama Mahasiswa Institut Teknologi Kalimantan',
    date: '22 April 2025',
    image: '/images/gallery-3.JPG',
    path: '/articles/article-3',
  },
  {
    id: 'article1',
    title: 'Kegiatan Praktik Sholat di KB Nanda Tsamara Terpadu',
    date: '10 April 2025',
    image: '/images/gallery-1.jpeg',
    path: '/articles/article-1',
  },
  {
    id: 'article5',
    title: 'Upacara Hari Kartini KB Nanda Tsamara Terpadu 2025',
    date: '21 April 2025',
    image: '/images/gallery-5.png', // Pastikan gambar ini ada di folder public/images/
    path: '/articles/article-5',
  },
  {
    id: 'article4',
    title: 'Pentas Seni Akhir Tahun KB Nanda Tsamara Terpadu 2024/2025',
    date: '1 Juni 2025',
    image: '/images/gallery-4.png',
    path: '/articles/article-4',
  },
];

// Pastikan tidak ada baris import gambar di sini.
</script>

<style scoped>
/* Kelas 'prose' dari @tailwindcss/typography plugin memberikan styling dasar
   untuk elemen-elemen HTML di dalam div, seperti <p>, <ul>, dll.
   Pastikan Anda telah menginstal dan mengaktifkan plugin ini di tailwind.config.js
   jika belum. */
</style>