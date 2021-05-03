<template>
  <div class="relative w-full z-3">
    <div
      class="absolute bg-black bg-opacity-50 w-full h-full z-3"
      v-if="data.focus || data.focusRight || data.focusKategori"
    ></div>

    <div class="absolute flex flex-col top-28 w-full z-0">
      <Carousel />
      <div
        class="flex flex-col justify-between py-1 mx-3 mt-6 rounded-2xl shadow-xl 2xl:mx-80 border bg-white"
      >
        <BigCard />

        <div class="flex overflow-x-scroll w-full scrollbar-none">
          <a
            href="#"
            class="flex items-center py-2 px-4 my-3 ml-3 rounded-full border text-gray-500 min-w-max"
            v-for="(item, key) in piles"
            :key="key"
          >
            <img crossorigin="anonymous" :src="item.img" class="h-6 mr-2" />
            {{ item.title }}
          </a>
        </div>
        <!-- piles here -->
      </div>
      <div
        class="h-1 flex flex-col justify-between border-b mx-3 mt-3 2xl:mx-80"
      ></div>

      <DiskonSpecial />
      <div
        class="h-1 flex flex-col justify-between border-b mx-3 mt-3 2xl:mx-80"
      ></div>

      <BasedOnSearch />
      <div
        class="h-1 flex flex-col justify-between border-b mx-3 mt-3 2xl:mx-80"
      ></div>
      <TodaySpecials />
      <div
        class="h-1 flex flex-col justify-between border-b mx-3 mt-3 2xl:mx-80"
      ></div>
      <Trendings />
      <Footer />
    </div>

    <!-- toggle chat -->
    <ChatToggler />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChatToggler from "~/components/Main/ChatToggler";
import DiskonSpecial from "~/components/Main/DiskonSpecial";
import Carousel from "~/components/Carousel";
import BasedOnSearch from "~/components/Main/BasedOnSearch";
import TodaySpecials from "~/components/Main/TodaySpecials";
import Trendings from "~/components/Main/Trendings";
export default {
  components: {
    Trendings,
    TodaySpecials,
    BasedOnSearch,
    Carousel,
    DiskonSpecial,
    ChatToggler,
  },
  data() {
    return {
      chatModal: false,
      chatToggle: true,
      piles: [
        {
          title: "Kategori",
          img:
            "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2020/8/25/0a133911-788c-4041-afc7-ed0844fd1cf0.png.webp?ect=4g",
        },
        {
          title: "Semua Promo",
          img:
            "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/2/18/2b5f550f-f6e6-4e7e-87a2-d2d35ea9af28.png.webp?ect=4g",
        },
        {
          title: "Kesehatan",
          img:
            "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/2/18/d32de197-c5a7-46a0-9674-96d980e1eb84.png.webp?ect=4g",
        },
        {
          title: "Makanan & Minuman",
          img:
            "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/2/16/c9587445-4b5a-4e33-ba2f-04c103cbae77.png.webp?ect=4g",
        },
        {
          title: "Dapur",
          img:
            "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/2/18/5584f6aa-14d4-4074-b1ff-5cab0ce95278.png.webp?ect=4g",
        },
        {
          title: "Emas",
          img:
            "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/2/16/8118a621-3fd8-49c0-b8c4-1996560c71d3.png.webp?ect=4g",
        },
        {
          title: "Handphone & Tablet",
          img:
            "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/2/16/2c844d56-7aab-4149-b15c-d42c1306f953.png.webp?ect=4g",
        },
        {
          title: "Elektronik",
          img:
            "https://images.tokopedia.net/img/cache/100-square/iEWsxH/2021/2/16/8b6fdf63-f12c-4bd6-a626-1af46b87f1d4.png.webp?ect=4g",
        },
      ],
    };
  },
  computed: {
    ...mapState(["data"]),
  },

  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
    };
  },
};
</script>

<style scoped>
.slide {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 2s ease-in-out;
}
.slide-enter, .slide-leave-to /* .carousel-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
