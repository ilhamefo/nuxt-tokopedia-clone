<template>
  <div
    class="absolute bg-white mr-5 border top-9 -right-10 text-left mb-1 mt-2 rounded-lg shadow-sm overflow-hidden overflow-y-auto w-100 px-4 py-3 cursor-default scrollbar-hide"
  >
    <div class="flex flex-col">
      <div class="flex border-b border-gray-200 pb-5 mb-4">
        <span class="w-12 rounded-full shadow-md overflow-hidden mr-2">
          <img :src="require('~/assets/images/seller.png')" />
        </span>
        <div class="flex flex-col justify-between py-1">
          <h1 class="font-normal">ilhamefo</h1>
          <div class="flex">
            <p class="text-xs text-gray-500 mr-3">Regular Merchant</p>
            <a href="#">
              <p class="text-xs text-green-tokped">
                Upgrade jadi Power Merchant
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="flex flex-col mb-2">
        <h1 class="font-bold mb-1">Tokopedia Seller</h1>
        <p class="text-xs text-gray-500 mb-2">
          Pantau pesanan yang masuk dan cek perkembangan tokomu secara rutin di
          satu tempat.
        </p>
        <button
          class="bg-green-tokped py-1 text-white font-medium text-sm rounded-md focus:outline-none"
        >
          Cek Tokopedia Seller
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

