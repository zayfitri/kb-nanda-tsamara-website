<template>
  <div class="container mx-auto py-8 px-4">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="lg:w-2/3">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Kegiatan Mengajar Harian di KB Nanda Tsamara Terpadu
        </h1>
        <p class="text-gray-600 text-sm mb-6">Kamis | 24 April 2025</p>

        <img
          src="/images/gallery-2.JPG"
          alt="Kegiatan Mengajar"
          class="w-full h-auto rounded-lg mb-6 shadow-md"
          width="1200"  height="675"  loading="eager"          />

        <div class="prose max-w-none text-gray-700 leading-relaxed">
          <p class="mb-4">
            KB Nanda Tsamara Terpadu kembali menghadirkan suasana belajar yang menyenangkan melalui kegiatan mengajar harian yang dirancang khusus untuk anak usia dini. Kegiatan ini dilaksanakan oleh para guru PAUD yang penuh dedikasi dalam menciptakan pengalaman belajar yang interaktif dan menyenangkan bagi anak-anak. Mengusung pendekatan belajar sambil bermain, kegiatan mengajar di sekolah ini tak hanya berfokus pada pelajaran formal, tetapi juga pembentukan karakter, motorik, dan kreativitas siswa.
          </p>
          <p class="mb-4">
            Setiap pagi, para siswa disambut dengan suasana hangat dan ramah di kelas. Kegiatan dimulai dengan doa bersama, melantunkan surah surah pendek, dan lain sebagainya. Salah satu kegiatan favorit anak-anak adalah kegiatan mewarnai, di mana mereka bebas mengekspresikan kreativitas melalui warna-warni cerah. Anak-anak diberikan gambar bertema binatang, lingkungan, atau keluarga, lalu dibimbing guru untuk memilih warna dan menyelesaikan hasil karyanya secara mandiri. Melalui aktivitas ini, anak-anak tidak hanya belajar memegang alat tulis dengan benar, tetapi juga mengasah imajinasi serta mengenal bentuk dan warna.
          </p>
          <p class="mb-4">
            Selain mewarnai, kegiatan lain seperti mengenal huruf dan angka, nama-nama hewan dan tumbuhan menjadi bagian dari rutinitas pembelajaran di KB Nanda Tsamara. Guru-guru tidak hanya menyampaikan materi, tetapi juga memerhatikan perkembangan setiap anak secara individual, sehingga suasana belajar terasa personal dan mendukung pertumbuhan mereka secara holistik.
          </p>
          <p class="mb-4">
            Interaksi antara guru dan siswa terjalin erat melalui pendekatan yang penuh kasih sayang, sabar, dan mendorong kemandirian. Anak-anak dilatih untuk bergiliran, berbagi, dan menghargai teman dalam setiap aktivitas yang dilakukan bersama. Guru-guru juga memberikan pujian atas usaha anak, baik besar maupun kecil, untuk membangun rasa percaya diri sejak dini.
          </p>
          <p class="mb-4">
            Kegiatan belajar di KB Nanda Tsamara Terpadu dirancang bukan hanya untuk mempersiapkan anak masuk ke jenjang pendidikan dasar, tetapi juga untuk menumbuhkan cinta belajar, kepekaan sosial, serta kebiasaan positif yang akan terbawa hingga dewasa. Lingkungan kelas yang penuh warna, alat peraga edukatif yang variatif, serta pendekatan pembelajaran yang kreatif menjadikan proses belajar terasa seperti bermain.
          </p>
          <p class="mb-4">
            Dengan terus menghadirkan kegiatan mengajar yang bermakna dan menyenangkan, KB Nanda Tsamara Terpadu berkomitmen untuk menciptakan generasi anak usia dini yang aktif, kreatif, mandiri, dan memiliki semangat belajar tinggi. Setiap harinya menjadi momen baru bagi anak-anak untuk tumbuh dan berkembang, ditemani oleh guru-guru yang peduli dan berpengalaman.
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
const currentArticleId = 'article2'; // Pastikan ini 'article2'

const latestArticles = [
  {
    id: 'article2', // Ini adalah artikel saat ini, jadi tidak akan ditampilkan di daftar "terbaru"
    title: 'Kegiatan Mengajar di KB Nanda Tsamara Terpadu',
    date: '24 April 2025',
    image: '/images/gallery-2.JPG',
    path: '/articles/article-2',
  },
  {
    id: 'article3',
    title: 'Kegiatan Senam Ceria Bersama Mahasiswa Institut Teknologi Kalimantan',
    date: '20 Juni 2025', // Tanggal disesuaikan dengan permintaan sebelumnya
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
    date: '1 Juni 2025', // Tanggal disesuaikan dengan permintaan sebelumnya
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