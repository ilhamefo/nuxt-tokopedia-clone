<template>
  <div
    class="absolute bg-white mr-5 border top-9 -right-10 text-left mb-1 mt-2 rounded-lg shadow-sm overflow-hidden overflow-y-auto w-99 px-4 py-3 cursor-default scrollbar-hide"
  >
    <!-- card -->
    <a href="#" class="flex shadow-md rounded-md mb-3">
      <span
        class="w-10 h-10 rounded-full overflow-hidden flex items-center mx-4 my-3"
      >
        <img :src="require('~/assets/images/profile.jpg')" />
      </span>
      <div class="flex flex-col justify-around py-1">
        <h1 class="font-medium text-base">Ilham Efo Hernanda</h1>
        <div class="flex justify-start items-center">
          <div
            class="h-6 w-6 flex items-center justify-center overflow-hidden mr-1"
          >
            <img :src="require('~/assets/images/silver.png')" />
          </div>
          <p class="text-sm text-gray-400">Member Silver</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 0 24 24"
            width="22px"
            fill="#B4BDCD"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </div>
      </div>
    </a>

    <!-- box -->
    <div class="w-full h-full flex mb-2">
      <div class="w-3/5 mr-3">
        <div class="flex flex-col border-b">
          <a
            href="#"
            class="flex justify-between items-center px-4 hover:bg-gray-100 w-full py-1 rounded-md"
          >
            <p class="text-sm text-gray-500">TokoPoints</p>
            <p class="text-sm text-gray-500">0</p>
          </a>
          <a
            href="#"
            class="flex justify-end items-center mb-3 border-gray-300"
          >
            <p
              class="text-sm text-gray-500 hover:bg-gray-100 w-full rounded-md px-4 py-1 text-right"
            >
              (0 Points)
            </p>
          </a>
        </div>

        <div class="flex flex-col pb-3 mt-3 border-b border-gray-300">
          <a
            href="#"
            class="flex px-4 py-1 justify-between hover:bg-gray-100 rounded-md"
          >
            <p class="text-sm text-gray-500">OVO Cash</p>
            <p class="text-sm text-gray-500 font-semibold">Rp. 200.000</p>
          </a>
          <a
            href="#"
            class="flex px-4 py-1 justify-between hover:bg-gray-100 rounded-md"
          >
            <p class="text-sm text-gray-500">OVO Points</p>
            <p class="text-sm text-gray-500 font-semibold">384</p>
          </a>
        </div>
        <div class="flex flex-col pb-3 mt-3 border-b border-gray-300">
          <a
            href="#"
            class="flex px-4 py-1 justify-between hover:bg-gray-100 rounded-md"
          >
            <p class="text-sm text-gray-500">Saldo</p>
            <p class="text-sm text-gray-500 font-semibold">Rp. 1.000.000</p>
          </a>
        </div>
        <div class="flex flex-col mt-3">
          <a
            href="#"
            class="flex px-4 py-1 justify-between hover:bg-gray-100 rounded-md"
          >
            <p class="text-sm text-gray-500">TokoMember</p>
            <p class="text-sm text-gray-500 font-semibold">0</p>
          </a>
          <a
            href="#"
            class="flex px-4 py-1 justify-between hover:bg-gray-100 rounded-md"
          >
            <p class="text-sm text-gray-500">TopQuest</p>
            <p class="text-sm text-gray-500 font-semibold">20</p>
          </a>
          <a
            href="#"
            class="flex px-4 py-1 justify-between hover:bg-gray-100 rounded-md"
          >
            <p class="text-sm text-gray-500">Kupon</p>
            <p class="text-sm text-gray-500 font-semibold">27</p>
          </a>
        </div>
      </div>
      <div
        class="w-2/5 border-l border-gray-300 flex flex-col justify-between pl-3"
      >
        <div class="flex flex-col">
          <a
            href="#"
            class="text-sm text-gray-500 hover:bg-gray-100 flex w-full py-1 rounded-md px-2"
            >Pembelian</a
          >
          <a
            href="#"
            class="text-sm text-gray-500 hover:bg-gray-100 flex w-full py-1 rounded-md px-2"
            >Wishlist</a
          >
          <a
            href="#"
            class="text-sm text-gray-500 hover:bg-gray-100 flex w-full py-1 rounded-md px-2"
            >Toko Favorit</a
          >
          <a
            href="#"
            class="text-sm text-gray-500 hover:bg-gray-100 flex w-full py-1 rounded-md px-2"
            >Pengaturan</a
          >
        </div>
        <div class="flex items-center">
          <button
            class="focus:outline-none text-sm text-gray-500 hover:bg-gray-100 flex w-full py-1 rounded-md px-2"
          >
            Keluar
            <span class="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="22px"
                viewBox="0 0 24 24"
                width="22px"
                fill="#B4BDCD"
              >
                <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
                <g>
                  <path
                    d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"
                  />
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

