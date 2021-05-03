<template>
  <div class="rounded-lg shadow-md pb-5 mr-3 overflow-hidden w-52">
    <img :src="item.img" :alt="item.title" />
    <p
      class="h-11 overflow-ellipsis overflow-hidden font-light text-0.8 text-gray-700 px-2 leading-5 mb-1 max-w"
    >
      {{ item.title }}
    </p>
    <div class="flex px-2 mb-1">
      <div class="bg-red-200 text-red-600 p-0.5 text-xxs rounded-sm mr-2 px-1">
        {{ item.disc }}
      </div>
      <div class="line-through p-0.5 text-xxs rounded-md text-gray-400">
        {{ item.price }}
      </div>
    </div>
    <div class="font-bold text-gray-800 text-sm px-2 mb-3">
      {{ item.priceAfterDisc }}
    </div>
    <div class="flex items-center px-2 mb-1">
      <span class="mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="17px"
          viewBox="0 0 24 24"
          width="17px"
          fill="#FFC400"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <path
              d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"
            />
          </g>
        </svg>
      </span>
      <span class="text-xs text-gray-500 mr-1">{{ item.avgStar }}</span>

      <span class="w-px h-3 bg-gray-400 mr-1"></span>
      <span class="text-xs text-gray-500 mr-1">Terjual {{ item.sold }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
</style>
