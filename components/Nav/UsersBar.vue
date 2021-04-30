<template>
  <div class="relative w-2/12">
    <div class="flex justify-center items-center py-2">
      <div
        class="w-1/2 px-2 py-1 mx-2 hover:bg-gray-100 rounded h-full flex items-center cursor-pointer"
        @mouseenter="toggleSeller(true)"
        @mouseleave="toggleSeller(false)"
      >
        <img
          :src="require('~/assets/images/seller_no_logo_2.png')"
          class="h-6 rounded-full"
        />
        <p class="ml-2 text-sm text-gray-400 truncate overflow-ellipsis">
          ilhamefo
        </p>
        <transition name="seller">
          <SellerContainer v-if="data.showSellerContainer" />
        </transition>
      </div>
      <div
        class="w-1/2 px-2 py-1 mx-2 hover:bg-gray-100 rounded h-full flex items-center cursor-pointer"
        @mouseenter="toggleMember(true)"
        @mouseleave="toggleMember(false)"
      >
        <img
          :src="require('~/assets/images/profile.jpg')"
          class="h-6 rounded-full"
        />
        <p class="ml-2 text-sm text-gray-400 truncate overflow-ellipsis">
          ilhamefo
        </p>
        <transition name="seller">
          <MemberContainer v-if="data.showMemberContainer" />
          <!-- v-if="data.showMemberContainer" -->
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SellerContainer from "~/components/Nav/SellerContainer";
import MemberContainer from "~/components/Nav/MemberContainer";
export default {
  components: {
    MemberContainer,
    SellerContainer,
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    toggleSeller(state) {
      this.$store.commit("showSellerContainer", state);
      this.$store.commit("focusRightState", state);
    },
    toggleMember(state) {
      // console.log(state);
      this.$store.commit("showMemberContainer", state);
      this.$store.commit("focusRightState", state);
    },
  },
};
</script>

<style scoped>
.seller-enter-active {
  animation: h-animation 0.5s;
}
.seller-leave-active {
  animation: h-animation 0s reverse;
}
@keyframes h-animation {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 500px;
  }
}
</style>
