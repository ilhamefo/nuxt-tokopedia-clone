<template>
  <div class="fixed top-7 w-full bg-white flex items-center justify-center">
    <div class="flex h-14 w-96% left-8 items-center">
      <!-- logo -->
      <Logo />
      <div
        class="flex h-full items-center cursor-pointer mt-px mr-2 ml-2 group"
        @mouseenter="toggleKategori(true)"
        @mouseleave="toggleKategori(false)"
      >
        <div
          class="w-full rounded-md relative flex justify-center items-center p-2 h-28"
        >
          <div
            class="text-xs leading-normal overflow-hidden overflow-ellipsis transition group-hover:text-green-500 items-center justify-center flex group-hover:bg-gray-100 px-2 py-1 rounded-sm text-gray-400"
          >
            Kategori
          </div>
        </div>
        <transition name="bounce">
          <KategoriContainer v-if="data.showKategoriContainer" />
          <!-- v-if="data.showKategoriContainer" -->
        </transition>
      </div>

      <!-- search bar -->
      <SearchBar />

      <!-- icons bar -->
      <IconsBar />

      <!-- separator -->
      <div class="text-gray-400 border-r-2 h-6 mx-3"></div>

      <!-- users bar -->

      <UsersBar />
    </div>
  </div>
</template>

<script>
import IconsBar from "~/components/Nav/IconsBar";
import SearchBar from "~/components/Nav/SearchBar";
import UsersBar from "~/components/Nav/UsersBar";
import KategoriContainer from "~/components/Nav/KategoriContainer";
import { mapState } from "vuex";
export default {
  components: {
    IconsBar,
    SearchBar,
    KategoriContainer,
    UsersBar,
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    toggleKategori(state) {
      this.$store.commit("showKategoriContainer", state);
      this.$store.commit("focusKategori", state);
    },
  },
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0s reverse;
}

@keyframes bounce-in {
  0% {
    max-height: 0px;
  }
  100% {
    max-height: 50rem;
  }
}
</style>
