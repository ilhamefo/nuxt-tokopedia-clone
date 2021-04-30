<template>
  <div class="relative w-4/12 md:w-8/12 mr-5">
    <div
      class="w-full rounded-lg border h-8 flex items-center text-xs relative overflow-hidden focus-within:ring-1 ring-green-400 transition bg-red-300"
    >
      <input
        type="text"
        class="w-full focus:outline-none px-3 h-full"
        placeholder="Cari asus zenbook..."
        @focus="toggleResults(true)"
        @blur="toggleResults(false)"
      />
      <button
        class="bg-gray-200 h-9 px-1.5 focus:outline-none transition hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22px"
          viewBox="0 0 24 24"
          fill="#9FA6B0"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
      </button>
    </div>
    <BottomNav :text="text" v-if="!data.focus" />

    <SearchContainer v-if="data.focus" />

    <!-- search container -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import BottomNav from "~/components/Nav/BottomNav";

import SearchContainer from "~/components/Nav/SearchContainer";
export default {
  components: {
    SearchContainer,
    BottomNav,
  },
  data() {
    return {
      // showResults: false,
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
  computed: {
    ...mapState(["data"]),
  },
  mounted() {},
  methods: {
    toggleResults(state) {
      this.$store.commit("focusState", state);
    },
  },
};
</script>

<style>
</style>
