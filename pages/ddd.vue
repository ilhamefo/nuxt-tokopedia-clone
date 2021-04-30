<template>
  <carousel
    :data="carouseldata"
    indicator-type="disc"
    autoplay="true"
  ></carousel>
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
                class: "w-full h-full",
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
                class: "w-full h-full",
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
                class: "w-full h-full",
              },
            });
          },
        },
      ],
    };
  },
};
</script>
