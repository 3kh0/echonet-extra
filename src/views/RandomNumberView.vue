<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">Random Number Generator</h1>
    <div class="p-2">
      <div class="flex space-x-4 mb-4">
        <div class="w-1/2">
          <label for="min" class="block text-sm font-bold mb-2">Minimum:</label>
          <input v-model.number="min" type="number" id="min" class="rounded-lg w-full py-2 px-3 text-white leading-tight border-0 bg-gray-800" />
        </div>
        <div class="w-1/2">
          <label for="max" class="block text-sm font-bold mb-2">Maximum:</label>
          <input v-model.number="max" type="number" id="max" class="rounded-lg w-full py-2 px-3 text-white leading-tight border-0 bg-gray-800" />
        </div>
      </div>
      <div class="mb-4">
        <button @click="generateRandomNumber" class="bg-blue-500 hover:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full">Generate</button>
      </div>
      <div v-if="randomNumber !== null" class="text-center text-3xl font-mono">
        {{ randomNumber }}
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const min = ref(0);
const max = ref(100);
const randomNumber = ref(null);

const generateRandomNumber = () => {
  if (min.value > max.value) {
    alert("Minimum value cannot be greater than maximum value.");
    return;
  }
  randomNumber.value = Math.floor(Math.random() * (max.value - min.value + 1)) + min.value;
};
</script>

<style scoped>
textarea {
  resize: none;
}
textarea:focus,
input:focus {
  outline: none;
}
</style>