<template>
  <div class="grid grid-cols-1 gap-4 divide-y divide-gray-300 w-full">
    <div class="flex justify-between">
      <span class="text-xs font-semibold text-gray-700">Keranjang (14)</span>
      <span class="text-xs font-semibold text-green-600 cursor-pointer"
        >Lihat Sekarang</span
      >
    </div>
    <div class="flex pt-2 justify-between" v-for="item in carts" :key="item.id">
      <div class="w-2/12 flex justify-center items-center">
        <span
          class="w-12 h-12 rounded-md bg-gray-400 overflow-hidden cursor-pointer"
        >
          <img :src="require(`~/assets/images/products/${item.img}`)" />
        </span>
      </div>
      <div class="w-7/12 ml-2 flex flex-col justify-around">
        <div class="truncate overflow-ellipsis font-semibold cursor-pointer">
          {{ item.title }}
        </div>
        <div class="truncate overflow-ellipsis text-xxs cursor-pointer">
          1 Barang (100gr)
        </div>
      </div>
      <div class="3/12 text-red-600 font-bold text-sm flex items-center">
        {{ item.harga }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [
        {
          id: 1,
          img: "celana_panjang_pria.jpg",
          title: "Celana Panjang Pria",
          harga: "Rp.120.000",
        },
        {
          id: 2,
          img: "celana_populer.jpg",
          title: "Celana Panjang Pria Jeans ",
          harga: "Rp.420.000",
        },
        {
          id: 3,
          img: "rok wanita.jpg",
          title: "Rok Wanita",
          harga: "Rp.90.000",
        },
      ],
    };
  },
};
</script>

<style>
</style>
