<template>
  <div class="flex flex-col justify-between mx-3 my-6 2xl:mx-80">
    <div class="flex justify-start items-end mb-3">
      <h1 class="text-2xl font-bold text-gray-800 mr-2">Lagi Trending, nih!</h1>

      <span class="mx-2 pb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 0 24 24"
          width="20px"
          fill="#0AAE15"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          />
        </svg>
      </span>

      <a
        href="#"
        class="font-bold text-green-tokped text-lg hover:text-green-600"
        >Muat Lainnya</a
      >
    </div>
    <div class="grid grid-cols-4 grid-rows-2 grid-flow-row gap-4">
      <div
        class="flex justify-start items-center w-full rounded-xl shadow-xl overflow-hidden cursor-pointer"
        v-for="(item, i) in trends"
        :key="i"
      >
        <img :src="item.img" :alt="item.title" class="h-25 mr-8" />
        <div class="flex flex-col justify-around h-2/3">
          <h1 class="font-bold text-gray-700 text-1.4">{{ item.title }}</h1>
          <span class="text-gray-500 text-sm">{{ item.number }} produk</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trends: [
        {
          img:
            "https://images.tokopedia.net/img/cache/200-square/product-1/2020/4/18/913786/913786_05a38230-1150-491d-bc93-b5e69af33f27_1024_1024.jpg.webp?ect=4g",
          title: "Sepatu Converse",
          number: "215rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/200-square/product-1/2020/9/17/95766844/95766844_0467674e-ac31-4b30-b00f-857b37047e6f_800_800.webp?ect=4g",
          title: "Kasur Busa",
          number: "130rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/200-square/product-1/2018/1/12/4604/4604_d9ae63b4-a985-4873-959a-6cd98bdb7b0c_700_700.jpg.webp?ect=4g",
          title: "Rak Dinding",
          number: "470rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/2/23/ca50129a-1aa8-484f-83e8-764e22f7316a.jpg.webp?ect=4g",
          title: "Dompet Pria",
          number: "549rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/9/18/5e6a0dbb-e98e-4d28-8858-34317d4f03e6.jpg.webp?ect=4g",
          title: "Apple Watch Se",
          number: "6rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/6/19/0ce0ca5f-64b8-4275-a0c1-e5cef6381b89.jpg.webp?ect=4g",
          title: "Baju Koko",
          number: "549rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/200-square/product-1/2020/8/15/2895779/2895779_d7c79015-21f5-4d28-95a4-f51f2ad28f87_1310_1310.webp?ect=4g",
          title: "Kaos Polos",
          number: "744rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/11/27/0d40da28-62b0-44da-bd9a-9a0aac6bbdd4.jpg.webp?ect=4g",
          title: "Sepeda Gunung",
          number: "872rb",
        },
      ],
    };
  },
};
</script>

<style>
</style>
