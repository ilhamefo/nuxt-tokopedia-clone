<template>
  <div class="flex overflow-hidden">
    <div
      class="bg-green-tokped relative w-72 flex justify-start rounded-2xl z-0 overflow-visible"
    >
      <img
        src="https://images.tokopedia.net/img/cache/240/attachment/2021/4/18/59257478/59257478_4277ef08-ff49-4463-9f5a-a68a54325d11.png.webp?ect=4g"
        class="w-2/3"
      />
      <!-- card  -->
      <div class="m-7 bg-red-300 w-screen">
        <VueSlickCarousel>
          <CardDiskon :item="item" v-for="(item, i) in promos" :key="i" />
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import CardDiskon from "~/components/Main/CardDiskon.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { CardDiskon, VueSlickCarousel },
  data: () => ({
    settings: {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      touchThreshold: 5,
    },
    promos: [
      {
        title: "KETTLER Massage Ball, Bola Pijat Balls Sirkulasi Darah",
        img:
          "https://images.tokopedia.net/img/cache/300-square/product-1/2018/4/14/4339810/4339810_cd84d470-4214-4d95-b9c1-7cb70d637fb4_900_900.jpg.webp?ect=4g",
        disc: "40%",
        price: "Rp 48.500",
        priceAfterDisc: "Rp 29.000",
        stockPercentage: "94%",
        status: "Segera Habis",
      },
      {
        title: "Hebert Pyjama for Women",
        img:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/4/25/65539fa5-6a7b-476e-85e5-3828259c6ac5.jpg.webp?ect=4g",
        disc: "56%",
        price: "Rp 180.000",
        priceAfterDisc: "Rp 79.000",
        stockPercentage: "94%",
        status: "Segera Habis",
      },
      {
        title: "Sweety Pants M60",
        img:
          "https://images.tokopedia.net/img/cache/300-square/product-1/2020/4/20/500437950/500437950_9b6a9342-7c2c-4a30-b00e-a8a54031c985_1080_1080.jpg.webp?ect=4g",
        disc: "56%",
        price: "Rp 93.500",
        priceAfterDisc: "Rp 82.999",
        stockPercentage: "77%",
        status: "Segera Habis",
      },
      {
        title: "L'Oreal Paris Men Expert White Active Cleansing Foam Twinpack",
        img:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/4/20/a0d8bd6e-f965-452d-b7b6-4f726b7d1ccd.jpg.webp?ect=4g",
        disc: "89%",
        price: "Rp 91.000",
        priceAfterDisc: "Rp32.780",
        stockPercentage: "80%",
        status: "Lagi Diminati",
      },
      {
        title:
          "Headset Bluetooth PINZY I9s Twins with Magnetic Charging case - Putih",
        img:
          "https://images.tokopedia.net/img/cache/300-square/attachment/2019/2/15/155022482433511/155022482433511_b0551b21-7044-48f9-a07d-8fc5cb39fdd9.png.webp?ect=4g",
        disc: "56%",
        price: "Rp 350.000",
        priceAfterDisc: "Rp 40.000",
        stockPercentage: "70%",
        status: "Segera Habis",
      },
      {
        title: "Hi-Cook Gas Cartridge 4in1",
        img:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/4/5/4c2560d5-9002-4eb4-8450-ee54051e7068.jpg.webp?ect=4g",
        disc: "45%",
        price: "Rp 64.000",
        priceAfterDisc: "Rp 35.000",
        stockPercentage: "76%",
        status: "Segera Habis",
      },
    ],
  }),
};
</script>

<style>
</style>
