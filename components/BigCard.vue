<template>
  <div class="flex">
    <div class="w-full">
      <h1 class="text-2xl font-bold mt-5 ml-3 text-gray-600">
        Kategori Pilihan
      </h1>
      <div class="flex">
        <Card v-for="(card, index) in cards" :key="index" :img="card.img" />
      </div>
    </div>
    <div class="w-full">
      <div class="flex items-end">
        <h1 class="text-2xl font-bold mt-5 ml-3 text-gray-600">
          Top Up & Tagihan
        </h1>
        <a
          href="#"
          class="text-lg text-green-tokped font-bold mt-5 ml-3 hover:text-green-tokped"
        >
          Lihat Semua
        </a>
      </div>
      <div
        class="flex flex-col mt-5 mx-3 h-36 bg-white border rounded-xl bg-cover bg-center"
      >
        <div class="flex justify-between w-full h-8 mt-2">
          <a
            href="#"
            class="flex-1 text-center font-bold text-green-tokped border-b-2 border-green-tokped"
          >
            Pulsa
          </a>
          <a
            href="#"
            class="flex-1 text-center text-gray-400 font-semibold border-b"
          >
            Paket Data
          </a>
          <a
            href="#"
            class="flex-1 text-center text-gray-400 font-semibold border-b"
          >
            Listrik PLN
          </a>
          <a
            href="#"
            class="flex-1 text-center text-gray-400 font-semibold border-b"
          >
            Flight
          </a>
        </div>
        <div class="flex w-full h-full justify-between items-center">
          <div class="w-5/12 flex flex-col mx-2">
            <label for="" class="text-11 text-gray-400 font-bold mb-1"
              >Nomor Telepon</label
            >
            <input
              type="text"
              class="transition border focus:ring-1 focus:ring-green-400 rounded-lg py-2 px-1.5 focus:outline-none text-11"
              placeholder="081234567789"
            />
          </div>
          <div class="w-5/12 flex flex-col mx-2">
            <label for="" class="text-11 text-gray-400 font-bold mb-1"
              >Nominal</label
            >
            <div
              class="flex justify-between items-center text-11 rounded-lg overflow-hidden bg-gray-200 px-1"
            >
              <input
                type="text"
                class="w-full focus:outline-none py-2 transition border bg-gray-200"
                placeholder="pilih"
                readonly
              />
              <span class="rounded-full hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="22px"
                  viewBox="0 0 24 24"
                  width="22px"
                  fill="#6C727C"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div class="w-2/12 flex justify-start items-center mt-4">
            <button
              class="focus:outline-none font-bold text-sm py-2 w-full mr-2 bg-gray-200 rounded-md text-gray-400"
            >
              Beli
            </button>
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
      cards: [
        {
          id: 1,
          img: "1.png",
        },
        {
          id: 2,
          img: "2.png",
        },
        {
          id: 3,
          img: "3.png",
        },
        {
          id: 4,
          img: "4.png",
        },
      ],
    };
  },
};
</script>

<style>
</style>
