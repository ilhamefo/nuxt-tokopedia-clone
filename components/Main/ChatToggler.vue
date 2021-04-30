<template>
  <div class="">
    <transition name="chat-toggle">
      <div
        class="fixed bottom-12 right-16 cursor-pointer"
        @click="toggleChat"
        v-if="chatToggle"
      >
        <div
          class="flex justify-center items-center w-32 h-12 shadow-lg rounded-full border bg-white"
        >
          <img
            class="chatImg"
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/57d0f05a.svg"
            alt="Chat"
          />
          <div class="font-bold text-green-500 ml-2">Chat</div>
        </div>
      </div>
    </transition>

    <!-- chat modal -->
    <transition name="chat-modal">
      <div
        class="fixed bottom-12 right-16 flex justify-between w-560px h-450px rounded-lg shadow-2xl bg-white overflow-hidden border"
        v-if="chatModal"
      >
        <div class="w-2/6">
          <div class="flex justify-between px-4 py-2 items-center">
            <p class="font-bold">Chat</p>
            <span class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 24 24"
                width="20px"
                fill="#6C727C"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                />
              </svg>
            </span>
          </div>
          <div
            class="flex justify-center items-center w-full border-b pb-4 shadow-md"
          >
            <div
              class="border flex justify-between rounded-lg ml-2 overflow-hidden"
            >
              <input
                type="text"
                class="w-full pl-2 focus:outline-none text-xs"
                placeholder="Cari pengguna"
              />
              <button
                class="bg-gray-200 px-1 focus:outline-none hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 24 24"
                  width="20px"
                  fill="#6C727C"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  />
                </svg>
              </button>
            </div>
            <button class="bg-gray-200 rounded-md p-0.5 mx-1 hover:bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="20px"
                viewBox="0 0 24 24"
                width="20px"
                fill="#6C727C"
              >
                <g>
                  <path d="M0,0h24 M24,24H0" fill="none" />
                  <path
                    d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
                  />
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
              </svg>
            </button>
          </div>

          <!-- div chat -->
          <div class="flex w-full h-full justify-center items-center">
            <span class="text-sm text-gray-400 font-medium"
              >Tidak ada data</span
            >
          </div>
        </div>
        <div class="w-4/6 h-full border-l-4 border-gray-100">
          <div
            class="flex justify-end items-center border-b-2 border-gray-100 h-1/12"
          >
            <div class="cursor-pointer p-1" @click="toggleChat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 0 24 24"
                width="40px"
                fill="#6C727C"
              >
                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                <path
                  d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
                />
              </svg>
            </div>
          </div>
          <div class="w-full h-11/12 flex justify-center items-center">
            <!--  -->
            <div class="flex flex-col items-center justify-center w-2/3">
              <img :src="require('~/assets/images/9f86a30e.png')" />
              <strong class="text-gray-500 mt-3 text-center"
                >Selamat Datang Di Chat</strong
              >
              <p class="text-gray-500 mt-3 text-center">
                Silahkan memilih pesan untuk memulai percakapan
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    toggleChat() {
      this.chatModal = !this.chatModal;
      this.chatToggle = !this.chatToggle;
    },
  },
  data() {
    return {
      chatModal: false,
      chatToggle: true,
    };
  },
};
</script>
<style scoped>
.chat-modal-enter-active {
  animation: bounce-in 0.5s;
}
.chat-modal-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    bottom: 0rem;
    opacity: 0;
  }
  50% {
    /* if u want animation as in tokopedia website, just comment this section. */
    bottom: 5rem;
  }
  100% {
    opacity: 1;
  }
}

.chat-toggle-enter-active {
  animation: toggle-animate 1.2s;
}
.chat-toggle-leave-active {
  animation: toggle-animate 0s reverse;
}
/* @keyframes toggle-animate {
  0% {
    max-height: 0;
    z-index: 1;
  }
  50% {
    bottom: 5rem;
  }
  75% {
    bottom: 2rem;
  }
  100% {
    max-height: 1000px;
    z-index: 1;
    bottom: 3rem;
  }
} */

@keyframes toggle-animate {
  0% {
    transform: scale(1, 1) translateY(0);
    z-index: 1;
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-100px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>
