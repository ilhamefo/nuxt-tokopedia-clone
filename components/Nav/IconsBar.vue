<template>
  <div class="w-1/12 ml-1 mr-1 flex justify-center items-center z-100">
    <div class="m-1 flex justify-center items-center cursor-pointer h-14">
      <div
        class="hover:bg-gray-200 rounded-lg p-2 flex items-center"
        @mouseenter="cartMouseEnter()"
        @mouseleave="cartMouseLeave()"
      >
        <span class="relative inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#6C727C"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
          <span
            class="absolute top-0 -right-1 inline-flex items-center justify-center px-1 py-0.5 ring-2 ring-white text-xxs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"
            >13</span
          >
          <transition name="bounce">
            <CartContainer v-if="data.showCartContainer" />
          </transition>
        </span>
      </div>
    </div>
    <div class="m-1 flex justify-center items-center cursor-pointer h-14">
      <div
        class="hover:bg-gray-200 rounded-lg p-2 flex items-center"
        @mouseenter="notifMouseEnter()"
        @mouseleave="notifMouseLeave()"
      >
        <span class="relative inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="21px"
            viewBox="0 0 24 24"
            width="21px"
            fill="#6C727C"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
          <span
            class="absolute top-0 -right-1 inline-flex items-center justify-center px-1 py-0.5 ring-2 ring-white text-xxs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"
            >1</span
          >
          <transition name="bounce">
            <NotificationContainer v-if="data.showNotificationContainer" />
          </transition>
        </span>
      </div>
    </div>

    <div class="m-1 flex justify-center items-center cursor-pointer h-14">
      <div
        class="hover:bg-gray-200 rounded-lg p-2 flex items-center"
        @mouseenter="chatMouseEnter()"
        @mouseleave="chatMouseLeave()"
      >
        <span class="relative inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#6C727C"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
          <span
            class="absolute top-0 -right-1 inline-flex items-center justify-center px-1 py-0.5 ring-2 ring-white text-xxs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"
            >1</span
          >
          <transition name="bounce">
            <ChatContainer v-if="data.showChatContainer" />
          </transition>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartContainer from "~/components/Nav/CartContainer";
import ChatContainer from "~/components/Nav/ChatContainer";
import NotificationContainer from "~/components/Nav/NotificationContainer";
export default {
  components: {
    NotificationContainer,
    ChatContainer,
    CartContainer,
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    cartMouseEnter() {
      this.$store.commit("showCartContainer", true);
      this.$store.commit("focusRightState", true);
    },
    cartMouseLeave() {
      this.$store.commit("showCartContainer", false);
      this.$store.commit("focusRightState", false);
    },
    chatMouseEnter() {
      this.$store.commit("showChatContainer", true);
      this.$store.commit("focusRightState", true);
    },
    chatMouseLeave() {
      this.$store.commit("showChatContainer", false);
      this.$store.commit("focusRightState", false);
    },
    notifMouseEnter() {
      this.$store.commit("showNotificationContainer", true);
      this.$store.commit("focusRightState", true);
    },
    notifMouseLeave() {
      this.$store.commit("showNotificationContainer", false);
      this.$store.commit("focusRightState", false);
    },
  },
};
</script>


<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0;
}
@keyframes bounce-in {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 500px;
  }
}
</style>

