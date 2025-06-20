<template>
  <div class="container mx-auto py-8 px-4">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="lg:w-2/3">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Upacara Hari Kartini KB Nanda Tsamara Terpadu 2025
        </h1>
        <p class="text-gray-600 text-sm mb-6">Senin | 21 April 2025</p>

        <img
          src="/images/gallery-5.png"
          alt="Upacara Hari Kartini"
          class="w-full h-auto rounded-lg mb-6 shadow-md"
          width="1200"  height="675"  loading="eager"          />

        <div class="prose max-w-none text-gray-700 leading-relaxed">
          <p class="mb-4">
            Dalam rangka memperingati Hari Kartini yang jatuh setiap tanggal 21 April, KB Nanda Tsamara Terpadu menggelar upacara bendera yang penuh khidmat dan makna pada Senin pagi, 21 April 2025. Kegiatan ini diadakan di halaman sekolah dan diikuti oleh seluruh peserta didik, guru, serta staf sekolah dengan mengenakan pakaian adat tradisional. Suasana begitu meriah, namun tetap tertib, mencerminkan semangat Kartini yang anggun, cerdas, dan penuh semangat kebangsaan.
          </p>
          <p class="mb-4">
            Upacara dimulai dengan pengibaran bendera Merah Putih yang dilakukan oleh murid-murid pilihan, diiringi lagu kebangsaan Indonesia Raya. Lagu “Ibu Kita Kartini” pun dinyanyikan bersama sebagai penghormatan terhadap sosok Raden Ajeng Kartini, pahlawan emansipasi wanita Indonesia. Dalam amanatnya, pembina upacara, Ibu Kepala Sekolah KB Nanda Tsamara, menyampaikan pentingnya meneladani semangat Kartini sejak dini. Kartini bukan hanya sosok yang memperjuangkan pendidikan bagi perempuan, namun juga simbol keteguhan hati, keberanian berpikir maju, dan keyakinan akan pentingnya peran perempuan dalam membangun masa depan bangsa.
          </p>
          <p class="mb-4">
            Selain upacara, kegiatan ini juga diramaikan dengan pawai di daerah batu ratna. Para peserta didik terlihat sangat antusias, menunjukkan bahwa nilai-nilai budaya dan sejarah masih bisa ditanamkan secara menyenangkan sejak usia dini. Guru-guru turut berperan aktif mendampingi dan membimbing anak-anak, menjadikan acara ini bukan hanya seremonial semata, tetapi juga momen edukatif yang membentuk karakter serta kecintaan terhadap budaya bangsa.
          </p>
          <p class="mb-4">
            Peringatan Hari Kartini di KB Nanda Tsamara Terpadu 2025 ini menjadi refleksi bahwa semangat Kartini tetap relevan di tengah tantangan zaman. Melalui pendidikan karakter dan pelibatan langsung anak-anak dalam kegiatan kebangsaan, sekolah berharap dapat menanamkan nilai-nilai keadilan, kesetaraan, dan semangat belajar kepada generasi penerus.
          </p>
          <p class="mb-4">
            Dengan terselenggaranya kegiatan ini, KB Nanda Tsamara Terpadu menunjukkan komitmennya untuk terus mendukung tumbuh kembang anak secara holistik, tak hanya dalam hal akademik, tetapi juga dalam aspek sosial, budaya, dan karakter. Semangat Kartini akan terus hidup dan tumbuh dalam diri anak-anak Indonesia, termasuk di lingkungan KB Nanda Tsamara, sebagai generasi masa depan yang tangguh, kreatif, dan berdaya saing tinggi.
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
                  width="64" height="64" />
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
const currentArticleId = 'article5'; // Ubah ini menjadi 'article5'

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
    id: 'article5', // Ini adalah artikel saat ini, jadi tidak akan ditampilkan di daftar "terbaru"
    title: 'Upacara Hari Kartini KB Nanda Tsamara Terpadu 2025',
    date: '21 April 2025',
    image: '/images/gallery-5.png',
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
</script>

<style scoped>
/* Kelas 'prose' dari @tailwindcss/typography plugin memberikan styling dasar
   untuk elemen-elemen HTML di dalam div, seperti <p>, <ul>, dll.
   Pastikan Anda telah menginstal dan mengaktifkan plugin ini di tailwind.config.js
   jika belum. */

/* Penting: Pastikan CSS ini ada di SETIAP file artikel Anda */
img {
  display: block;
  max-width: 100%;
  height: auto; /* Mempertahankan rasio aspek ketika lebar berubah */
}
</style>