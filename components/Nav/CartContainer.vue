<template>
  <transition name="">
    <div
      class="absolute normal-case bg-white border -left-40 right-0 text-left mb-1 mt-2 rounded-lg shadow-sm overflow-hidden overflow-y-auto max-h-96 w-96 px-4 py-3 cursor-default scrollbar-hide"
    >
      <!-- cart items -->
      <CartItem v-if="!data.showSkeleton" />

      <!-- skeleton -->
      <CartSkeleton v-if="data.showSkeleton" />
    </div>
  </transition>
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
