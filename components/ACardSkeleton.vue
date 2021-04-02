<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16 bg-white"
  >
    <div
      class="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none"
    >
      <div class="bg-purple-200 animate-pulse w-40 h-5 sm:leading-7"></div>
    </div>
    <div class="col-start-1 row-start-3 space-y-3 px-4 my-5 sm:mt-2 sm:mb-4">
      <div class="animate-pulse bg-purple-200 w-40 h-5 my-1"></div>
      <div class="animate-pulse bg-purple-200 w-40 h-5 my-1"></div>
      <div class="animate-pulse bg-purple-200 w-40 h-5 my-1"></div>
      <div class="animate-pulse bg-purple-200 w-36 h-5 my-1"></div>
      <div>
        <div
          class="bg-purple-200 animate-pulse h-5 px-6 py-1 mt-10 rounded-lg"
        ></div>
      </div>
    </div>
    <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
      <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
        <div class="relative col-span-3 row-span-2 md:col-span-2">
          <div
            class="absolute inset-0 w-full h-full object-cover bg-purple-100 sm:rounded-lg shadow-inner"
          ></div>
        </div>
        <div class="relative hidden md:block">
          <div
            class="absolute inset-0 w-full h-full object-cover rounded-lg bg-purple-100 shadow-inner"
          />
        </div>
        <div class="relative hidden md:block">
          <div
            class="absolute inset-0 w-full h-full object-cover rounded-lg bg-purple-100 shadow"
          />
        </div>
      </div>
    </div>
  </div>
</template>
