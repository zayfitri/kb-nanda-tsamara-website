<template>
  <div class="container mx-auto py-8 px-4">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="lg:w-2/3">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Pentas Seni Akhir Tahun dan Pelepasan Siswa KB Nanda Tsamara Terpadu Tahun Ajaran 2024/2025
        </h1>
        <p class="text-gray-600 text-sm mb-6">Minggu | 1 Juni 2025</p>

        <img
          src="/images/gallery-4.png"
          alt="Pentas Seni Akhir Tahun"
          class="w-full h-auto rounded-lg mb-6 shadow-md"
          width="1200"  height="675"  loading="eager"          />

        <div class="prose max-w-none text-gray-700 leading-relaxed">
          <p class="mb-4">
            Mengakhiri tahun ajaran 2024/2025, KB Nanda Tsamara Terpadu menyelenggarakan acara Pentas Seni sekaligus pelepasan siswa pada Minggu, 1 Juni 2025, bertempat di Kebun Raya Balikpapan yang telah dihias meriah dengan tema warna-warni ceria. Acara ini menjadi momen yang penuh haru, kegembiraan, dan kebanggaan, baik bagi siswa, guru, maupun orang tua. Pentas seni akhir tahun ini merupakan bagian dari tradisi sekolah yang bertujuan untuk menampilkan hasil belajar anak-anak selama satu tahun, sekaligus memberikan ruang ekspresi bagi kreativitas mereka.
          </p>
          <p class="mb-4">
            Sejak pagi hari, para siswa sudah tampak antusias mengenakan kostum sesuai dengan penampilan mereka masing-masing. Ada yang tampil dalam tarian tradisional, menyanyi lagu anak-anak, hingga gerak dan lagu yang mengundang tepuk tangan meriah dari para tamu undangan. Setiap penampilan menunjukkan perkembangan kepercayaan diri, keterampilan motorik, dan kemampuan sosial anak-anak yang sudah terbentuk selama proses pembelajaran di sekolah.
          </p>
          <p class="mb-4">
            Momen paling menyentuh dalam acara ini adalah prosesi pelepasan siswa tingkat akhir. Dengan mengenakan toga kecil, satu per satu siswa dipanggil ke panggung untuk menerima sertifikat kelulusan dan bingkisan kenang-kenangan dari sekolah. Banyak orang tua yang tampak haru melihat buah hati mereka berdiri percaya diri di atas panggung, siap melangkah ke jenjang pendidikan berikutnya. Suasana menjadi lebih emosional ketika video dokumenter singkat tentang perjalanan belajar siswa ditayangkan, memperlihatkan momen-momen penuh tawa, pembelajaran, dan kebersamaan selama di KB Nanda Tsamara.
          </p>
          <p class="mb-4">
            Sebagai penutup, seluruh siswa dan guru bersama-sama menyanyikan lagu perpisahan yang menghangatkan hati. Meskipun perpisahan terasa berat, acara ini membawa pesan optimisme bahwa setiap akhir adalah awal dari langkah baru yang lebih besar. KB Nanda Tsamara Terpadu berhasil menjadikan momen ini sebagai penanda keberhasilan dalam menciptakan lingkungan belajar yang menyenangkan, mendidik, dan membentuk karakter anak sejak dini.
          </p>
          <p class="mb-4">
            Dengan terselenggaranya Pentas Seni dan Pelepasan Siswa Tahun Ajaran 2024/2025 ini, KB Nanda Tsamara kembali menegaskan komitmennya untuk mendidik generasi masa depan yang cerdas, kreatif, dan berakhlak mulia. Selamat melangkah ke jenjang berikutnya, anak-anak hebat KB Nanda Tsamara. Langitkan cita-cita kalian setinggi bintang di langit.
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
const currentArticleId = 'article4'; // Pastikan ini 'article4'

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
    id: 'article4', // Ini adalah artikel saat ini, jadi tidak akan ditampilkan di daftar "terbaru"
    title: 'Pentas Seni Akhir Tahun KB Nanda Tsamara Terpadu 2024/2025',
    date: '1 Juni 2025',
    image: '/images/gallery-4.png',
    path: '/articles/article-4',
  },
];
</script>

<style scoped>
/* Penting: Pastikan CSS ini ada di SETIAP file artikel Anda */
img {
  display: block;
  max-width: 100%;
  height: auto; /* Mempertahankan rasio aspek ketika lebar berubah */
}
</style>