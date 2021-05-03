<template>
  <client-only>
    <div class="z-3">
      <carousel :data="carouseldata" indicator-type="disc"></carousel>
      <!-- {{ carouseldata }} -->
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      // testdata: [
      //   require("~/assets/images/carousel1.png"),
      //   require("~/assets/images/carousel-2.jpg"),
      //   require("~/assets/images/carousel3.jpg"),
      // ].forEach(function (el) {
      //   this.content(createElement, content){};
      // }),
      carouseldata: [
        {
          id: 1,
          content(createElement, content) {
            return createElement("img", {
              attrs: {
                src: require("~/assets/images/carousel1.png"),
                class: "object-cover h-full w-full",
              },
            });
          },
        },
        {
          id: 2,
          content(createElement, content) {
            return createElement("img", {
              attrs: {
                src: require("~/assets/images/carousel-2.jpg"),
                class: "object-cover h-full w-full",
              },
            });
          },
        },
        {
          id: 3,
          content(createElement, content) {
            return createElement("img", {
              attrs: {
                src: require("~/assets/images/carousel3.jpg"),
                class: "object-cover h-full w-full",
              },
            });
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>
