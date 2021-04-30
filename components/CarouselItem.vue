<template>
  <no-ssr>
    <div class="z-3">
      <carousel :data="carouseldata" indicator-type="disc"></carousel>
    </div>
  </no-ssr>
</template>

<script>
export default {
  data() {
    return {
      carouseldata: [
        {
          id: 1,
          message: "First message",
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
          message: "Any message",
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
          message: "Any message",
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
