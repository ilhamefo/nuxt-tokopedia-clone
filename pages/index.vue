<template>
  <div class="">
    <Nav />

    <Main />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Situs Jual Beli Online Terlengkap, Mudah & Aman | Tokopedia",
    };
  },
  computed: {
    ...mapGetters(["stateGetters"]),
  },
  methods: {},
};
</script>

<style>
</style>
