<template>
  <div class="flex flex-col justify-between mx-3 my-6 2xl:mx-80">
    <div class="flex justify-start items-end mb-3">
      <h1 class="text-2xl font-bold text-gray-800 mr-2">
        Berdasarkan pencarianmu
      </h1>

      <a
        href="#"
        class="font-bold text-green-tokped text-lg hover:text-green-600"
        >Lihat Semua</a
      >
    </div>
    <div class="w-full flex overflow-hidden py-5 px-2">
      <Card :item="item" v-for="(item, i) in items" :key="i" />
    </div>
  </div>
</template>

<script>
import Card from "~/components/Main/Card";
export default {
  components: { Card },
  data() {
    return {
      items: [
        {
          img:
            "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/1/19/c94082fe-4527-44b4-9256-c1c2c6f4be76.jpg.webp?ect=4g",
          title:
            "L’Oreal Paris Revitalift Crystal Micro Essence Serum 22ml Twinpack",
          disc: "35%",
          price: "Rp130.000",
          proceAfterDisc: "Rp84.500",
          avgStar: "4.9",
          sold: "2.4 rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/3/12/ccce76ee-1dfc-4d99-bc2a-33becde40359.jpg.webp?ect=4g",
          title: "L'Oreal Paris Revitalift Package 3",
          disc: "40%",
          price: "Rp255.000",
          proceAfterDisc: "Rp153.000",
          avgStar: "4.9",
          sold: "225 rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/1/25/5cb8d7bf-0f11-4b7d-a6e4-2e5fac1a0688.jpg.webp?ect=4g",
          title: "L'Oreal Paris x Silcot Bundle C",
          disc: "40%",
          price: "Rp328.000",
          proceAfterDisc: "Rp196.800",
          avgStar: "4.9",
          sold: "518",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/2/22/467f0bd6-eaba-4786-8167-daa00f284f00.jpg.webp?ect=4g",
          title: "L'Oreal Tyna's Radiant Kit",
          disc: "40%",
          price: "Rp405.000",
          proceAfterDisc: "Rp243.000",
          avgStar: "4.9",
          sold: "1.8 rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/300-square/attachment/2019/2/15/155022482433511/155022482433511_b0551b21-7044-48f9-a07d-8fc5cb39fdd9.png.webp?ect=4g",
          title:
            "Headset Bluetooth PINZY I9s Twins with Magnetic Charging case - Putih",
          disc: "88%",
          price: "Rp 350.000",
          proceAfterDisc: "Rp 42.000",
          avgStar: "4.5",
          sold: "7.8 rb",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/300-square/product-1/2020/4/20/500437950/500437950_9b6a9342-7c2c-4a30-b00e-a8a54031c985_1080_1080.jpg.webp?ect=4g",
          title: "Sweety Pants M60",
          disc: "35%",
          price: "Rp230.000",
          proceAfterDisc: "Rp 93.500",
          avgStar: "4.9",
          sold: "473",
        },
        {
          img:
            "https://images.tokopedia.net/img/cache/300-square/product-1/2018/6/3/251821496/251821496_2ec8951c-5607-49a2-a2f0-adf372d75e1e_540_1080.jpg.webp?ect=4g",
          title:
            "clash royale level 12 hampir 13. deck card level max. per id email",
          disc: "35%",
          price: "Rp 2.500.000",
          proceAfterDisc: "Rp 1.500.000",
          avgStar: "4.9",
          sold: "4",
        },
      ],
    };
  },
};
</script>

<style>
</style>
