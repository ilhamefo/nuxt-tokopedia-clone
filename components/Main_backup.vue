<template>
  <div class="relative bg">
    <!-- <div class="static w-screen h-screen z-0"></div> -->
    <main class="static min-w-min">
      <!-- main content -->

      <div class="flex flex-col mt-32">
        <Carousel v-for="(item, i) in carousel" :key="i" :img="item.img" />

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

      <!-- chat box -->

      <a href="#" class="fixed bottom-12 right-16">
        <div
          class="flex justify-center items-center w-32 h-12 shadow-lg rounded-full border bg-white"
        >
          <img
            class="chatImg"
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/57d0f05a.svg"
            alt="Chat"
          />
          <div class="font-bold text-green-500 ml-2">Chat</div>
        </div>
      </a>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousel: [{ id: 1, img: "carousel1.png" }],
    };
  },
};
</script>

<style>
</style>
