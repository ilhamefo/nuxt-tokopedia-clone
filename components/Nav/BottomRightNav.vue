<template>
  <div class="absolute top-18 w-2/12 right-9 flex mt-1 z-0">
    <div
      class="text-xs text-gray-400 mr-5 truncate overflow-ellipsis cursor-pointer hidden justify-end items-center w-full md:flex"
    >
      <span class="ml-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          viewBox="0 0 24 24"
          width="16px"
          fill="rgba(107, 114, 128, 1)"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
          />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      </span>

      <p class="text-xs ml-1">
        Dikirim ke
        <strong class="font-bold text-black"> Ilham Efo Hernanda</strong>
      </p>

      <span class="ml-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          viewBox="0 0 24 24"
          width="16px"
          fill="rgba(107, 114, 128, 1)"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["text"],
  computed: {
    ...mapState(["data"]),
  },
};
</script>

<style>
</style>
