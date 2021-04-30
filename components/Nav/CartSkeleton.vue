<template>
  <div class="grid grid-cols-1 gap-4 divide-y divide-gray-300 animate-pulse">
    <div class="flex justify-between">
      <span class="bg-gray-300 w-1/3 h-3 rounded-md"></span>
      <span class="bg-green-300 w-1/3 h-3 rounded-md"></span>
    </div>

    <div
      class="flex pt-2 justify-between animate-pulse"
      v-for="(item, id) in 3"
      :key="id"
    >
      <div class="w-2/6 flex justify-center items-center">
        <span class="w-12 h-12 rounded-md bg-gray-300 overflow-hidden"> </span>
      </div>
      <div class="w-4/6 ml-2 flex flex-col justify-around">
        <div class="w-full h-3 bg-gray-300 rounded-md"></div>
        <div class="w-1/3 h-3 bg-gray-300 rounded-md"></div>
      </div>
      <!-- <div class="w-3/12 h-3"></div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
