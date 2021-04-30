<template>
  <div
    class="absolute normal-case bg-white border -left-32 right-0 text-left mb-1 mt-2 rounded-lg shadow-sm overflow-hidden overflow-y-auto w-80 cursor-pointer scrollbar-hide"
  >
    <!-- cart items -->
    <NotificationItem v-if="!data.showSkeleton" />

    <!-- skeleton -->
    <div class="m-5">
      <CartSkeleton v-if="data.showSkeleton" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartSkeleton from "~/components/Nav/CartSkeleton";
import NotificationItem from "~/components/Nav/NotificationItem";
export default {
  components: {
    NotificationItem,
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
