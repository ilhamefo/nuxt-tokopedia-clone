<template>
  <div class="relative w-screen h-screen z-3">
    <div
      class="absolute bg-black bg-opacity-50 w-full h-full z-3"
      v-if="data.focus || data.focusRight || data.focusKategori"
    ></div>

    <div class="absolute flex flex-col top-28 w-full z-0">
      <Carousel />
      <div
        class="flex flex-col justify-between h-72 mx-3 mt-6 rounded-2xl shadow-xl 2xl:mx-80 border"
      >
        <BigCard />

        <div class="flex flex-nowrap overflow-hidden">
          <a
            href="#"
            class="flex items-center py-1 px-4 my-3 ml-3 rounded-full border text-gray-500"
            v-for="i in 5"
            :key="i"
          >
            <img
              crossorigin="anonymous"
              src="https://images.tokopedia.net/img/cache/100-square/iEWsxH/2020/8/25/0a133911-788c-4041-afc7-ed0844fd1cf0.png.webp?ect=4g"
              class="h-6 mr-2"
            />
            Kategori
          </a>
        </div>
        <!-- piles here -->
      </div>
      <div class="h-1 w-9/12 border-b mt-6"></div>
    </div>

    <!-- toggle chat -->
    <ChatToggler />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChatToggler from "~/components/Main/ChatToggler";
import Carousel from "~/components/Carousel";
export default {
  components: {
    Carousel,
    ChatToggler,
  },
  data() {
    return {
      chatModal: false,
      chatToggle: true,
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
