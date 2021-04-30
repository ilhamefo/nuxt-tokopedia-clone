<template>
  <div class="mx-1 w-full left-0 right-0 hidden absolute mt-1 lg:flex">
    <div
      class="text-xs text-gray-400 hover:text-green-400 mr-5 truncate overflow-ellipsis cursor-pointer"
      v-for="(item, key) in text"
      :key="key"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style>
</style>
