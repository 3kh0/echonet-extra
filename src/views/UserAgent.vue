<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const result = document.getElementById("result");
  result.textContent = navigator.userAgent;
});
</script>

<template>
  <main>
    <h2 class="text-3xl mb-4">Your User Agent</h2>
    <div class="bg-gray-800 p-6 rounded-lg shadow-md relative">
      <pre id="result" class="font-mono text-sm">Fetching data...</pre>
    </div>
  </main>
</template>
