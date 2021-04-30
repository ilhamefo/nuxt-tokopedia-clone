<template>
  <div
    class="absolute bg-white mr-5 border-t top-17 left-0 right-0 mb-1 mt-2 shadow-sm overflow-hidden overflow-y-auto w-full cursor-default scrollbar-hide"
  >
    <div class="flex border-b border-gray-300">
      <a
        href="#"
        class="px-5 py-4 first:ml-8 last:mr-8"
        v-for="(item, key) in topKategories"
        :key="key"
        :class="[
          item.isActive
            ? 'border-green-tokped text-green-tokped text-sm font-medium border-b-2'
            : 'text-gray-400 text-sm hover:text-green-tokped hover:font-medium transition duration-100',
        ]"
      >
        {{ item.title }}
      </a>
    </div>
    <div class="flex justify-between w-full">
      <!-- left section -->
      <div
        class="w-2/12 py-4 pl-8 pr-2 flex flex-col overflow-y-scroll max-h-100"
      >
        <a
          href="#"
          class="py-1 px-3 rounded-md hover:bg-gray-100 text-sm text-gray-700 font-normal mb-1"
          v-for="(item, key) in kategories"
          :key="key"
          >{{ item }}</a
        >
      </div>
      <!-- right section -->
      <div class="w-10/12 bg-white p-5 overflow-y-scroll max-h-100">
        <div class="flex justify-start items-center mt-4">
          <img :src="require('~/assets/images/logo-buku.png')" class="h-10" />
          <h1 class="font-bold text-xl text-gray-800">Buku</h1>
        </div>

        <!-- this called mansory layout, I give up with this layout first time.
        so I search it on google on found it,
        but not in tailwind, in vanilla css instead.
        so forgive me :(
        thanks to this blog: https://tobiasahlin.com/blog/masonry-with-css/ -->
        <div
          class="ml-2 mt-2"
          style="
            display: flex;
            flex-flow: column wrap;
            align-content: space-between;
            height: 960px;
          "
        >
          <div
            class="flex flex-col mt-2 mr-2"
            v-for="(item, key) in buku"
            :key="key"
          >
            <a href="#" class="hover:text-green-tokped font-medium text-sm">
              {{ item.parent }}
            </a>
            <a
              href="#"
              class="text-sm hover:text-green-tokped text-gray-500"
              v-for="(child, key) in item.children"
              :key="key"
              >{{ child }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topKategories: [
        {
          title: "Belanja",
          isActive: true,
        },
        {
          title: "Featured",
          isActive: false,
        },
        {
          title: "Brand Unggulan",
          isActive: false,
        },
        {
          title: "Halal Corner",
          isActive: false,
        },
        {
          title: "Investasi Asuransi & Pinjaman",
          isActive: false,
        },
        {
          title: "Pajak",
          isActive: false,
        },
        {
          title: "Pendidikan",
          isActive: false,
        },
        {
          title: "Tagihan",
          isActive: false,
        },
        {
          title: "Top-Up",
          isActive: false,
        },
        {
          title: "Travel & Entertainment",
          isActive: false,
        },
        {
          title: "OS Populer",
          isActive: false,
        },
        {
          title: "Lainnya",
          isActive: false,
        },
      ],
      kategories: [
        "Buku",
        "Dapur",
        "Elektronik",
        "Fashion Anak & Bayi",
        "Fashion Muslim",
        "Fashion Pria",
        "Fashion Wanita",
        "Film & Musik",
        "Gaming",
        "Handphone & Tablet",
        "Ibu & Bayi",
        "Kamera",
        "Kecantikan",
        "Kesehatan",
        "Komputer & Laptop",
        "Logam Mulia",
        "Mainan & Hobi",
        "Makanan & Minuman",
        "Office & Stationery",
        "Olahraga",
        "Otomotif",
        "Perawatan Hewan",
        "Perawatan Tubuh",
        "Perlengkapan Pesta & Craft",
        "Pertukangan",
        "Produk Lainnya",
        "Properti",
        "Rumah Tangga",
        "Tour & Travel",
        "Wedding",
      ],
      buku: [
        {
          parent: "Arsitektur & Desain",
          children: [
            "Buku Bangunan",
            "Buku Codes & Standars",
            "Buku Dekorasi & Ornamen",
            "Buku Desain Dapur",
            "Buku Desain Kamar",
            "Buku Desain Ruang Keluarga",
            "Buku Desain Ruang Tamu",
            "Buku Desain Rumah",
            "Buku Interior & Eksterior",
            "Buku Metode & Material Bangunan",
            "Buku Taman",
          ],
        },
        {
          parent: "Buku Hukum",
          children: [
            "Buku Gender & Hukum",
            "Buku Hukum Dagang",
            "Buku Hukum Internasional",
            "Buku Hukum Perdata",
            "Buku Hukum Pidana",
            "Buku Kemanusiaan",
            "Buku Politik & Hukum",
            "Kumpulan Peraturan Perundang-Undangan",
            "UUD 1945",
          ],
        },
        {
          parent: "Buku Import",
          children: [
            "Agriculture Book Import",
            "Art & Novel Import",
            "Child & Teenager Book Import",
            "Computer Book Import",
            "Economy Book Import",
            "Feminity Book Import",
            "Health Book Import",
            "Hobby & Interest Book Import",
            "Language Book Import",
            "Law Book Import",
            "Management & Business Book Import",
            "Medical Book Import",
            "Political Social Book Import",
            "Psychology & Education Book Import",
            "Reference & Dictionary Book Import",
            "Religion & Philosophy Book Import",
            "School Book Import",
            "Secretarial Book Import",
            "Self Development Book Import",
            "Technique Book Import",
            "Tourism & Map Book Import",
          ],
        },
        {
          parent: "Buku Masakan",
          children: [
            "Resep Kue",
            "Resep Makanan Bayi & Balita",
            "Resep Makanan Diet",
            "Resep Masakan",
            "Resep Minuman & Dessert",
            "Resep Pastry",
          ],
        },
        {
          parent: "Buku Persiapan Ujian",
          children: [
            "Persiapan Tes CPNS",
            "Persiapan Tes TOEFL & IELTS",
            "Persiapan TPA & Psikotest",
          ],
        },
        {
          parent: "Buku Remaja dan Anak",
          children: [
            "Buku Aktivitas",
            "Buku Cerita Anak",
            "Buku Dongeng",
            "Buku Dunia Pengetahuan",
            "Buku Fabel",
            "Buku Islami Anak",
            "Buku Keterampilan Anak",
            "Buku Mewarnai",
          ],
        },
        {
          parent: "Ekonomi & Bisnis",
          children: [
            "Buku Akuntansi",
            "Buku Bisnis",
            "Buku Ekonomi",
            "Buku Kesekretariatan",
            "Buku Manajemen",
            "Buku Pariwisata",
            "Buku Perbankan",
            "Buku Perhotelan",
            "Buku Perpajakan",
            "Buku Statistik",
            "Buku Usaha Kecil & Kewirausahaan",
          ],
        },
        {
          parent: "Hobi",
          children: [
            "Buku Alam",
            "Buku Fotografi",
            "Buku Hewan Peliharaan",
            "Buku Hiburan",
            "Buku Humor",
            "Buku Keterampilan",
            "Buku Kuliner",
            "Buku Musik & Lagu",
            "Buku Olahraga",
            "Buku Otomotif",
            "Buku Permainan",
            "Buku Seni",
            "Buku Tanaman",
            "Buku Travel",
          ],
        },
        {
          parent: "Kedokteran",
          children: [
            "Buku Farmasi",
            "Buku Kedokteran Spesialis",
            "Buku Kedokteran Umum",
            "Buku Psikiatri",
            "Kamus Istilah Kedokteran",
            "Keluarga",
            "Buku Bimbingan Orang Tua",
            "Buku Nama-nama Bayi",
            "Buku Pendidikan Keluarga",
          ],
        },
        {
          parent: "Kesehatan & Gaya Hidup",
          children: [
            "Buku Akuntansi",
            "Buku Bisnis",
            "Buku Ekonomi",
            "Buku Kesekretariatan",
            "Buku Manajemen",
            "Buku Pariwisata",
            "Buku Perbankan",
            "Buku Perhotelan",
            "Buku Perpajakan",
            "Buku Statistik",
            "Buku Usaha Kecil & Kewirausahaan",
          ],
        },
        {
          parent: "Komik",
          children: [
            "Komik Anak",
            "Komik Asing",
            "Komik Dewasa",
            "Komik Islami",
            "Komik Langka",
            "Komik Manga",
          ],
        },
        {
          parent: "Komputer & Internet",
          children: [
            "Buku Database",
            "Buku Design Graphics",
            "Buku Hardware",
            "Buku Internet & Web",
            "Buku Microsoft Office",
            "Buku Mobile & Gadget",
            "Buku Programming",
            "Buku Sistem Operasi",
            "Buku Social Media",
          ],
        },
        {
          parent: "Buku Roman",
          children: [
            "Fantasi",
            "Fiksi Puisi",
            "Kisah Nyata",
            "Kritik Sastra",
            "Literatur Fiksi",
            "Misteri",
            "Naskah",
            "Novel Indonesia",
            "Novel Remaja",
            "Novel Terjemahan",
            "Puisi",
            "Pendidikan",
            "Atlas",
          ],
        },
        {
          parent: "Buku Bimbingan Belajar",
          children: [
            "Buku Saku Pramuka",
            "Buku SD Kelas 1",
            "Buku SD Kelas 2",
            "Buku SD Kelas 3",
            "Buku SD Kelas 4",
            "Buku SD Kelas 5",
            "Buku SD Kelas 6",
            "Buku SMA Kelas 1",
            "Buku SMA Kelas 2",
            "Buku SMA Kelas 3",
            "Buku SMP Kelas 1",
            "Buku SMP Kelas 2",
            "Buku SMP Kelas 3",
            "Ensiklopedia",
            "Kumpulan Soal SD",
            "Kumpulan Soal SMA",
            "Kumpulan Soal SMP",
          ],
        },
        {
          parent: "Pengembangan Diri & Karir",
          children: [
            "Buku Kesuksesan",
            "Buku Leadership Kepemimpinan",
            "Self Improvement & Development",
            "Pertanian",
            "Agribisnis",
            "Bioteknologi Pertanian",
            "Pengembangan Pertanian",
            "Peternakan",
            "Tanaman & Kebun",
          ],
        },
        {
          parent: "Religi & Spiritual",
          children: [
            "Alkitab",
            "Al-Quran",
            "Buku Agama Buddha",
            "Buku Agama Hindu",
            "Buku Agama Islam",
            "Buku Agama Katolik",
            "Buku Agama Khong Hu Chu",
            "Buku Agama Kristen",
            "Filosofi",
            "Filsafat",
            "Kepercayaan",
            "Spiritual",
          ],
        },
        {
          parent: "Sosial Politik",
          children: [
            "Buku Autobiografi",
            "Buku Biografi",
            "Buku Jurnalisme",
            "Buku Komunikasi",
            "Buku Lingkungan Hidup",
            "Buku Politik",
            "Buku Sejarah",
            "Buku Sosial Budaya",
            "Ilmu Media Komunikasi",
            "Teknik & Sains",
            "Buku Astronomi & Luar Angkasa",
            "Buku Biologi",
            "Buku Elektro",
            "Buku Engineering",
            "Buku Fisika",
            "Buku Geografi",
            "Buku Geologi",
            "Buku Ilmiah",
            "Buku Kimia",
            "Buku Robotika",
            "Buku Sipil",
          ],
        },
        {
          parent: "Lainnya",
          children: [
            "Majalah",
            "Katalog",
            "Koran",
            "Majalah Anak",
            "Majalah Desain",
            "Majalah Design Interior",
            "Majalah Ekonomi & Bisnis",
            "Majalah Fashion",
            "Majalah Musik",
            "Majalah Olahraga",
            "Majalah Otomotif",
            "Novel & Sastra",
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>
