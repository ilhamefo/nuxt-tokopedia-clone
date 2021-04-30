<template>
  <div
    class="absolute normal-case bg-white border -left-24 right-0 text-left mb-1 mt-2 rounded-lg shadow-sm overflow-hidden overflow-y-auto w-52 px-4 py-3 cursor-default scrollbar-hide"
  >
    <!--  -->
    <div class="flex flex-col justify-around">
      <a
        href="#"
        class="hover:bg-gray-100 text-sm rounded-lg text-gray-700 py-1 px-1"
        >Chat</a
      >
      <a
        href="#"
        class="hover:bg-gray-100 text-sm rounded-lg text-gray-700 py-1 px-1"
        >Diskusi</a
      >
      <a
        href="#"
        class="hover:bg-gray-100 text-sm rounded-lg text-gray-700 py-1 px-1"
        >Ulasan</a
      >
      <a
        href="#"
        class="hover:bg-gray-100 text-sm rounded-lg text-gray-700 py-1 px-1"
        >Pesan Bantuan</a
      >
      <a
        href="#"
        class="hover:bg-gray-100 text-sm rounded-lg text-gray-700 py-1 px-1"
        >Pesanan Dikomplain</a
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartSkeleton from "~/components/Nav/CartSkeleton";
import CartItem from "~/components/Nav/CartItem";
export default {
  components: {
    CartItem,
    CartSkeleton,
  },

  mounted() {
    // so this is just a example.
    // in production, you load the data and while loading actual data
    // you show this skeleton. after that you can just hide it
    // by setting state 'showSkeleton' to false
    setTimeout(() => {
      this.$store.commit("showSkeletonState");
    }, 2000);
  },
  computed: {
    ...mapState(["data"]),
  },
};
</script>

<style scoped>
</style>
