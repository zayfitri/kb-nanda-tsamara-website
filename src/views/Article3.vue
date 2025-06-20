<template>
  <div class="container mx-auto py-8 px-4">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="lg:w-2/3">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Kegiatan Senam Ceria Bersama Mahasiswa Institut Teknologi Kalimantan
        </h1>
        <p class="text-gray-600 text-sm mb-6">Selasa | 22 April 2025</p>

        <img
          src="/images/gallery-3.JPG"
          alt="Kegiatan Senam Ceria"
          class="w-full h-auto rounded-lg mb-6 shadow-md"
        />

        <div class="prose max-w-none text-gray-700 leading-relaxed">
          <p class="mb-4">
            Suasana ceria memenuhi pagi di KB Nanda Tsamara Terpadu saat mengadakan
            "Kegiatan Senam Ceria Bersama Mahasiswa Institut Teknologi Kalimantan (ITK)".
            Inisiatif kolaborasi ini bertujuan untuk memperkenalkan pentingnya gaya hidup
            sehat sejak dini, sekaligus memberikan pengalaman interaktif dan menyenangkan
            bagi para siswa paud bersama mahasiswa ITK.
          </p>
          <p class="mb-4">
            Para mahasiswa ITK dengan antusias memimpin sesi senam dengan gerakan-gerakan
            yang mudah diikuti dan musik yang energik. Anak-anak tampak sangat gembira,
            tertawa dan bergerak mengikuti irama. Kegiatan ini tidak hanya melatih
            koordinasi motorik anak, tetapi juga membangun rasa kebersamaan dan kegembiraan
            dalam berolahraga.
          </p>
          <p class="mb-4">
            Kerja sama dengan Institut Teknologi Kalimantan ini merupakan bagian dari kegiatan KKN (Kuliah Kerja Nyata)
            komitmen kami untuk memperluas wawasan anak-anak dan memperkenalkan mereka
            pada lingkungan pendidikan tinggi. Kehadiran mahasiswa ITK memberikan inspirasi
            tersendiri bagi siswa paud, menunjukkan betapa pentingnya pendidikan dan aktivitas
            positif.
          </p>
          <p class="mb-4">
            Semoga kolaborasi positif seperti ini dapat terus terjalin di masa mendatang, demi menciptakan generasi muda yang sehat, cerdas, dan penuh semangat. Dengan keterlibatan berbagai pihak dalam dunia pendidikan, kita percaya bahwa masa depan anak-anak Indonesia akan semakin cerah dan menjanjikan.
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
const currentArticleId = 'article3';

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
</style>