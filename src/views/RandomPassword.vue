<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">Random Password Generator</h1>
    <div class="p-2 text-white">
      <div class="flex space-x-4 mb-4">
        <div class="w-1/2">
          <label for="length" class="block text-sm font-bold mb-2">Length:</label>
          <input v-model.number="length" type="number" id="length" class="rounded-lg w-full py-2 px-3 text-white leading-tight border-0 bg-gray-800" />
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2">Options:</label>
        <div class="flex space-x-4">
          <div>
            <input type="checkbox" id="lowercase" v-model="lowercase" />
            <label for="lowercase">Include lowercase letters</label>
          </div>
          <div>
            <input type="checkbox" id="uppercase" v-model="uppercase" />
            <label for="uppercase">Include uppercase letters</label>
          </div>
          <div>
            <input type="checkbox" id="numbers" v-model="numbers" />
            <label for="numbers">Include numbers</label>
          </div>
          <div>
            <input type="checkbox" id="special" v-model="special" />
            <label for="special">Include special characters</label>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <button @click="generatePassword" class="bg-blue-500 hover:bg-blue-700 transition-colors text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full">Generate</button>
      </div>
      <div v-if="error" class="text-red-500">
        {{ error }}
      </div>
      <div v-else-if="password" class="flex justify-between items-center bg-gray-800 rounded-lg p-4">
        <div class="text-3xl font-mono">
          {{ password }}
        </div>
        <button @click="copyPassword">
          <img src="/svg/copy.svg" alt="Copy password" class="w-8 h-8" />
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const length = ref(14);
const lowercase = ref(true);
const uppercase = ref(true);
const numbers = ref(true);
const special = ref(false);
const password = ref("");
const error = ref("");

const generatePassword = () => {
  if (!Number.isInteger(length.value) || length.value <= 0) {
    error.value = "Please enter a valid number for the length.";
    return;
  }
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = lower.toUpperCase();
  const nums = "0123456789";
  const spec = "!@#$%^&*";

  let poss = "";
  if (lowercase.value) poss += lower;
  if (uppercase.value) poss += upper;
  if (numbers.value) poss += nums;
  if (special.value) poss += spec;

  let result = "";
  for (let i = 0; i < length.value; i++) {
    result += poss[Math.floor(Math.random() * poss.length)];
  }

  password.value = result;
};

const copyPassword = () => {
  navigator.clipboard.writeText(password.value);
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