<template>
  <div
    class="flex flex-col justify-between overflow-hidden rounded-xl shadow-md bg-white max-w-max mr-4 h-full"
  >
    <div class="w-52 bg-gray-300">
      <img :src="item.img" alt="" class="" />
    </div>
    <p
      class="h-11 overflow-ellipsis overflow-hidden font-light text-0.8 text-gray-700 px-2 leading-5 mb-1 w-52"
    >
      {{ item.title }}
    </p>
    <div class="flex px-2 mb-1">
      <div class="bg-red-200 text-red-600 p-0.5 text-xxs rounded-sm mr-2">
        {{ item.disc }}
      </div>
      <div class="line-through p-0.5 text-xxs rounded-md text-gray-400">
        {{ item.price }}
      </div>
    </div>
    <div class="font-bold text-gray-800 text-sm px-2 mb-3">
      {{ item.priceAfterDisc }}
    </div>
    <div class="relative pt-1 px-2">
      <div class="overflow-hidden h-1 mb-1 text-xs flex rounded bg-pink-200">
        <div
          :style="`width: ${item.stockPercentage}`"
          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
        ></div>
      </div>
    </div>
    <div class="font-medium text-xxs text-gray-500 px-2 pb-2">
      {{ item.status }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDiskon",
  props: ["item"],
};
</script>

<style>
</style>
