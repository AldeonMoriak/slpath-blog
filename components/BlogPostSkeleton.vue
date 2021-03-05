<template>
  <div
    class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md animate-pulse"
  >
    <div class="w-full h-64 rounded-t bg-purple-300" />
    <div class="py-5 px-4">
      <!-- title and date -->
      <div class="flex justify-between mb-2">
        <div class="h-3 w-40 bg-purple-300 rounded"></div>
        <div class="mb-2 w-24 h-2 bg-purple-300 rounded"></div>
      </div>
      <!-- description -->
      <div class="mb-4 line-clamp-3">
        <div class="w-72 h-2 my-1 bg-purple-300 rounded"></div>
        <div class="w-72 h-2 my-1 bg-purple-300 rounded"></div>
        <div class="w-60 h-2 my-1 bg-purple-300 rounded"></div>
      </div>
      <!-- avatar -->
      <div class="flex items-center mb-4">
        <div
          class="m-0 w-10 h-10 rounded-full shadow-sm ml-4 bg-purple-300"
        ></div>
        <span>
          <div class="mb-2 w-24 h-3 bg-purple-300 rounded"></div>
          <div class="h-2 w-14 bg-purple-300 rounded"></div>
        </span>
      </div>

      <!-- comments and views -->
      <div class="flex justify-end">
        <div class="flex items-start">
          <div class="w-20 bg-purple-300 rounded h-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>
