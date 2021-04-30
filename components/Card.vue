<template>
  <div
    class="mt-5 ml-3 h-16 w-16 md:h-24 md:w-24 lg:h-36 lg:w-36 bg-white border rounded-xl bg-cover bg-center"
    :style="{ backgroundImage: `url(${require(`~/assets/images/${img}`)})` }"
  ></div>
  <!-- <div class="">
    <img :src="require(`~/assets/images/${img}`)" />
  </div> -->
</template>

<script>
export default {
  props: ["img"],
};
</script>

<style>
</style>
