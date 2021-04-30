<template>
  <div class="">
    <nav class="fixed flex flex-col w-full bg-white shadow-md top-0 h-27 z-10">
      <TopNav />
      <MidNav />

      <BottomRightNav v-if="!data.focusRight" />
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TopNav from "~/components/Nav/TopNav";
import MidNav from "~/components/Nav/MidNav";
import BottomNav from "~/components/Nav/BottomNav";
import BottomRightNav from "~/components/Nav/BottomRightNav";

export default {
  components: {
    TopNav,
    BottomRightNav,
    BottomNav,
    MidNav,
  },
  computed: {
    ...mapState(["data"]),
  },
  data() {
    return {
      text: [
        "Samsung A11",
        "Masker Duckbill",
        "Celana Pendek Pria",
        "Iphone 7 Plus",
        "Scarlett Whitening",
        "Celana Panjang Wanita",
      ],
    };
  },
};
</script>

<style>
</style>
