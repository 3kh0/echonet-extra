<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";

const searchTerm = ref("");
const searchBox = ref(null);
const routes = ref([
  { name: "About this", path: "/" },
  { name: "About:blank embedder", path: "/aboutblank" },
  { name: "Browser Info finder", path: "/browserinfo" },
  { name: "Navigator Object", path: "/navigatorlist" },
  { name: "QR Code Maker", path: "/qrcode" },
  { name: "User Agent Info", path: "/useragent" },
  { name: "Echo's Crypto wallets", path: "/crypto" },
  { name: "Pomodoro Timer", path: "/pomodorotimer" },
  { name: "Fursona Reference", path: "/fursona" },
  { name: "Number Generator", path: "/randomnumber" },
  { name: "Password Generator", path: "/randompassword" }
]);

routes.value.sort((a, b) => a.name.localeCompare(b.name));

const matchingTools = computed(() => {
  return routes.value.filter((tool) => tool.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

const nonMatchingTools = computed(() => {
  return routes.value.filter((tool) => !tool.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

const now = new Date().toISOString().slice(0, 19).replace("T", " ");

const focusSearch = () => {
  searchBox.value.focus();
};

onMounted(() => {
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      focusSearch();
    }
  });
});
</script>

<template>
  <div class="bg-[#000011] text-white flex flex-col md:flex-row overflow-hidden h-dvh" @keydown.ctrl.k="focusSearch">
    <header class="flex flex-col items-center md:flex-0 w-[230px] min-w-[230px] p-2 m-4 bg-gray-900 rounded-lg overflow-y-auto hide-scrollbar">
      <div class="wrapper text-center w-full">
        <h1 class="text-2xl font-bold mb-2">Echo net extras</h1>

        <input ref="searchBox" type="text" v-model="searchTerm" autofocus placeholder="Search tools... CTRL+K" class="w-full p-2 rounded-lg text-black" />

        <nav class="mt-2 w-full">
          <div v-if="matchingTools.length === 0" class="text-center text-red-500">Your query did not match any results! :(</div>
          <div v-for="tool in matchingTools" :key="tool.path">
            <RouterLink :to="tool.path" class="block w-full mb-2 bg-gray-700 rounded-lg p-2 hover:bg-gray-600 transition-colors">{{ tool.name }}</RouterLink>
          </div>
          <hr class="my-4" />
          <div v-for="tool in nonMatchingTools" :key="tool.path">
            <RouterLink :to="tool.path" class="block w-full mb-2 bg-gray-800 text-gray-500 rounded-lg p-2 hover:bg-gray-500 transition-colors">{{ tool.name }}</RouterLink>
          </div>
        </nav>
        <h1 class="font-bold mb-2">Made with 💚 by Echo</h1>
        <h1 class="text-sm italic">Generated at {{ now }}</h1>
      </div>
    </header>
    <RouterView class="flex-grow p-2 m-4 ml-0 bg-gray-900 rounded-lg overflow-auto hide-scrollbar" />
  </div>
</template>
<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>