<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-[#000011] text-white flex flex-col md:flex-row rounded-lg overflow-hidden">
    <header class="flex flex-col items-center justify-center md:flex-0 w-[230px] p-2 m-4 bg-gray-800 rounded-lg">
      <div class="wrapper text-center w-full">
        <h1 class="text-2xl font-bold mb-2">Echo net extras</h1>

        <nav class="mt-4 w-full">
          <h2 class="p-0 mb-2 text-center">Tools and things</h2>
          <RouterLink to="/about" class="block w-full mb-2 bg-gray-700 rounded-lg p-2 hover:bg-gray-600 transition-colors">About</RouterLink>
          <RouterLink to="/aboutblank" class="block w-full mb-2 bg-gray-700 rounded-lg p-2 hover:bg-gray-600 transition-colors">About:blank embedder</RouterLink>
          <RouterLink to="/browserinfo" class="block w-full mb-2 bg-gray-700 rounded-lg p-2 hover:bg-gray-600 transition-colors">Browser Info finder</RouterLink>
          <RouterLink to="/navigatorlist" class="block w-full mb-2 bg-gray-700 rounded-lg p-2 hover:bg-gray-600 transition-colors">Navigator listing</RouterLink>
        </nav>

        <h1 class="font-bold mb-2">Made with 💚 by Echo</h1>
      </div>
    </header>

    <RouterView class="flex-grow w-4/5 p-2 m-4 ml-0 bg-gray-900 rounded-lg" />
  </div>
</template>
