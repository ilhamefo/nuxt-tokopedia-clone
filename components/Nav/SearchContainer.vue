<template>
  <transition name="fade">
    <div
      class="absolute normal-case bg-white border left-0 right-0 w-108 text-left mb-1 mt-1 rounded-lg shadow-sm overflow-hidden overflow-y-auto h-96 px-4 py-3"
    >
      <!-- content here -->
      <div class="flex flex-col">
        <div class="">
          <TextHeader text="Terakhir dilihat" />
          <div class="mt-2 flex">
            <div
              class="h-14 w-14 mr-3 rounded-lg shadow-sm overflow-hidden"
              v-for="(item, i) in products"
              :key="i"
            >
              <a href="#">
                <img
                  :src="require(`~/assets/images/products/${item.img}`)"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <TextHeader text="Terakhir Dicari" />
            <h2 class="text-sm text-red-600 cursor-pointer ml-5 font-bold">
              Hapus semua
            </h2>
          </div>
          <div
            class="flex justify-between hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer"
          >
            <div class="flex items-center">
              <span
                class="mr-2 h-7 w-7 rounded-full overflow-hidden flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 24 24"
                  width="20px"
                  fill="#C0C9D9"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                  />
                </svg>
              </span>
              <p class="text-gray-400 text-sm">Celana panjang pria</p>
            </div>
            <div class="flex items-center">
              <span class="mr-2 p-2 rounded-lg hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 24 24"
                  width="20px"
                  fill="#C0C9D9"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div
            class="flex justify-between hover:bg-gray-100 py-2 px-2 rounded-md cursor-pointer"
          >
            <div class="flex items-center">
              <span
                class="mr-2 h-7 w-7 rounded-full overflow-hidden flex items-center justify-center"
              >
                <img :src="require('~/assets/images/toko/toko_profile.jpg')" />
              </span>
              <div class="flex flex-col justify-between">
                <p class="text-gray-400 text-sm">Toko Paedi</p>
                <div class="flex items-center">
                  <span class="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16px"
                      viewBox="0 0 24 24"
                      width="16px"
                      fill="#C0C9D9"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <p class="text-gray-400 text-sm">Kab. Labuhanbatu Utara</p>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <span
                class="text-xs mr-1 py-1 px-2 bg-gray-100 text-gray-400 rounded-lg font-medium border border-gray-200"
                >Toko</span
              >
              <span class="mr-2 p-2 rounded-lg hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 24 24"
                  width="20px"
                  fill="#C0C9D9"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <TextHeader text="Pencarian Populer 'Celana panjang pria'" />
            <h2 class="text-sm text-green-500 cursor-pointer ml-5 font-bold">
              Refresh
            </h2>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-2">
            <div
              class="flex items-center rounded-lg hover:bg-gray-100 p-2 cursor-pointer transition"
              v-for="item in popularProducts"
              :key="item.id"
            >
              <span class="overflow-hidden h-14 w-14 rounded-lg">
                <img :src="require(`~/assets/images/products/${item.img}`)" />
              </span>
              <span class="font-semibold text-base ml-2">
                {{ item.title }}
              </span>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <TextHeader text="Pencarian Populer" />
            <h2 class="text-sm text-green-500 cursor-pointer ml-5 font-bold">
              Refresh
            </h2>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-2">
            <div
              class="flex items-center rounded-lg hover:bg-gray-100 p-2 cursor-pointer transition"
              v-for="item in recomendations"
              :key="item.id"
            >
              <span class="overflow-hidden h-14 w-14 rounded-lg">
                <img
                  :src="require(`~/assets/images/rekomendasi/${item.img}`)"
                />
              </span>
              <div class="flex flex-col ml-2 justify-center">
                <span class="font-semibold text-base">
                  {{ item.title }}
                </span>
                <span class="text-xs text-gray-400">
                  {{ item.subtitle }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <TextHeader text="Kategori Pilihan" />
            <h2 class="text-sm text-green-500 cursor-pointer ml-5 font-bold">
              Refresh
            </h2>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-2">
            <div
              class="flex items-center rounded-lg hover:bg-gray-100 p-2 cursor-pointer transition"
              v-for="item in categories"
              :key="item.id"
            >
              <span class="overflow-hidden h-14 w-14 rounded-lg">
                <img :src="require(`~/assets/images/kategori/${item.img}`)" />
              </span>
              <span class="font-semibold text-base ml-2">
                {{ item.title }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import TextHeader from "~/components/Nav/TextHeader";
export default {
  components: {
    TextHeader,
  },
  data() {
    return {
      recomendations: [
        {
          id: 1,
          img: "rekomendasi-1.png",
          title: "Waktu Indonesia Belanja",
          subtitle: "Cashback Spesial + Bebas Ongkir",
        },
        {
          id: 2,
          img: "rekomendasi-2.jpg",
          title: "Kemeja Bayi",
          subtitle: "8.8 rb pencarian",
        },
        {
          id: 3,
          img: "rekomendasi-3.jpg",
          title: "GTX 1660 Super",
          subtitle: "24.5 rb pencarian",
        },
        {
          id: 4,
          img: "rekomendasi-4.jpg",
          title: "Baju Muslim",
          subtitle: "21.2 rb pencarian",
        },
        {
          id: 5,
          img: "rekomendasi-5.png",
          title: "Promo Dettol",
          subtitle: "Diskon Hingga 70%",
        },
        {
          id: 6,
          img: "rekomendasi-6.jpg",
          title: "Celana Anak",
          subtitle: "11.3 rb pencarian",
        },
      ],
      popularProducts: [
        {
          id: 1,
          img: "celana_panjang_pria.jpg",
          title: "Celana Panjang Pria",
        },
        {
          id: 2,
          img: "celana_populer.jpg",
          title: "Celana Panjang Pria Jeans",
        },
        {
          id: 3,
          img: "rok wanita.jpg",
          title: "Rok Wanita",
        },
      ],
      categories: [
        {
          id: 1,
          img: "kategori_1.jpg",
          title: "Elektronik",
        },
        {
          id: 2,
          img: "kategori-2.jpg",
          title: "Fashion Muslim",
        },
        {
          id: 3,
          img: "kategori-3.jpg",
          title: "Komputer Laptop",
        },
        {
          id: 4,
          img: "kategori-4.jpg",
          title: "Fashion Pria",
        },
        {
          id: 5,
          img: "kategori-5.jpg",
          title: "Kesehatan",
        },
        {
          id: 6,
          img: "kategori-6.jpg",
          title: "Dapur",
        },
      ],
      products: [
        {
          id: 1,
          img: "last-seen-1.png",
        },
        {
          id: 2,
          img: "last-seen-2.jpg",
        },
        {
          id: 3,
          img: "last-seen-3.jpg",
        },
        {
          id: 4,
          img: "last-seen-4.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
