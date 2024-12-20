<template>
  <main class="flex flex-col items-center justify-center h-full p-4">
    <h1 class="text-3xl font-bold mb-4 text-white">404 Error</h1>
    <div class="text-center">
      <p class="text-white">We can not find that page you are looking for, most likely it was either moved or taken down.</p>
      <div class="w-full max-w-xl mx-auto">
        <img :src="`/img/${selectedImage}`" alt="404 Error" class="w-full h-auto mt-4 rounded-lg shadow-lg" />
      </div>
      <button @click="showDetails = !showDetails" class="mt-4 text-white bg-gray-600 px-4 py-2 rounded-lg">Error details</button>
      <div v-if="showDetails" class="mt-2 text-white">
        <p>Path: <span class="font-mono">{{ path }}</span></p>
        <p>Host: <span class="font-mono">{{ host }}</span></p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const path = ref(window.location.pathname);
const host = ref(window.location.host);

const images = ["404cat.jpg", "404dog.jpg", "404pizza.jpg", "404pizza.jpg"];
const selectedImage = ref(images[Math.floor(Math.random() * images.length)]);
const showDetails = ref(false);
</script>
