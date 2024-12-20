<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";

const searchTerm = ref("");
const showMenu = ref(false);
const searchBox = ref(null);
const routes = ref([
  { name: "About this", path: "/" },
  { name: "About:blank embedder", path: "/aboutblank" },
  { name: "Browser Info finder", path: "/browserinfo" },
  { name: "QR Code Maker", path: "/qrcode" },
  { name: "User Agent Info", path: "/useragent" },
  { name: "Echo's Crypto wallets", path: "/crypto" },
  { name: "Pomodoro Timer", path: "/pomodorotimer" },
  { name: "Fursona Reference", path: "/fursona" },
  { name: "Number Generator", path: "/randomnumber" },
  { name: "Password Generator", path: "/randompassword" },
  { name: "URL Opener", path: "/urlopen" },
  { name: "Coin flip", path: "/coinflip" },
  { name: "Countdown Timer", path: "/timer" },
  { name: "Reaction Time test", path: "/reactiontime" },
  { name: "Current Time", path: "/currenttime" },
  { name: "Base64 Converter", path: "/base64" }
]);

routes.value.sort((a, b) => a.name.localeCompare(b.name));

const matchingTools = computed(() => {
  return routes.value.filter((tool) => tool.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

const noMatch = computed(() => {
  return routes.value.filter((tool) => !tool.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

const now = new Date().toISOString().slice(0, 19).replace("T", " ");
// could use for timing something...

const focusSearch = () => {
  searchBox.value.focus();
};

const showConsent = ref(false);
const consentYea = ref(false);

const handleConsent = () => {
  localStorage.setItem("datacon", "true");
  showConsent.value = false;
  consentYea.value = true;
  injectData();
  setTimeout(() => {
    consentYea.value = false;
  }, 5000);
};

const handleDecline = () => {
  localStorage.setItem("datacon", "false");
  showConsent.value = false;
  consentYea.value = true;
  setTimeout(() => {
    consentYea.value = false;
  }, 5000);
};

const injectData = () => {
  const script = document.createElement("script");
  script.src = "https://data.3kh0.net/script.js";
  script.defer = true;
  script.setAttribute("data-website-id", "3284c22d-b7ff-41dc-a622-f2d95899ee07");
  document.head.appendChild(script);
};

onMounted(() => {
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      focusSearch();
    }
  });

  const consent = localStorage.getItem("datacon");
  if (!consent) {
    showConsent.value = true;
  } else if (consent === "true") {
    injectData();
  }
});
</script>

<template>
  <div class="bg-[#000011] text-white flex flex-col md:flex-row overflow-hidden h-screen" @keydown.ctrl.k="focusSearch">
    <div class="md:hidden flex justify-between items-center p-2 m-4 mb-0 bg-gray-900 rounded-lg">
      <h1 class="text-2xl font-bold">Echo net extras</h1>
      <img src="/svg/menu.svg" alt="Menu" @click="showMenu = !showMenu" class="cursor-pointer w-8 h-8" />
    </div>
    <header :class="{ 'hidden md:flex': !showMenu, 'flex-grow md:hidden md:w-64': showMenu }" class="flex-col items-center md:w-[230px] min-w-[230px] p-2 m-4 bg-gray-900 rounded-lg overflow-y-auto hide-scrollbar">
      <div class="wrapper text-center w-full">
        <h1 class="text-2xl font-bold mb-2">Echo net extras</h1>
        <input ref="searchBox" type="text" v-model="searchTerm" autofocus placeholder="Search tools... CTRL+K" class="w-full p-2 rounded-lg text-white bg-gray-800" />
        <nav class="mt-2 w-full">
          <div v-if="matchingTools.length === 0" class="text-center text-red-500">Your query did not match any results! :(</div>
          <div v-for="tool in matchingTools" :key="tool.path">
            <RouterLink :to="tool.path" class="block w-full mb-2 bg-gray-700 rounded-lg p-2 hover:bg-gray-600 transition-colors" @click="showMenu = false">{{ tool.name }}</RouterLink>
          </div>
          <hr class="my-4" />
          <div v-for="tool in noMatch" :key="tool.path">
            <RouterLink :to="tool.path" class="block w-full mb-2 bg-gray-800 text-gray-500 rounded-lg p-2 hover:bg-gray-600 transition-colors" @click="showMenu = false">{{ tool.name }}</RouterLink>
          </div>
        </nav>
        <h1 class="font-bold mb-2">Made with <img class="h-5 w-5 inline" alt="green heart" src="/svg/greenheart.svg" /> by Echo</h1>
      </div>
    </header>
    <div class="flex-grow flex flex-col overflow-hidden">
      <div v-if="!showMenu" class="flex-grow p-2 m-4 md:ml-0 bg-gray-900 rounded-lg overflow-auto hide-scrollbar">
        <!--<RouterView class="overflow-auto hide-scrollbar" />-->
        <router-view v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </router-view>
      </div>
      <div v-if="showConsent" class="bg-gray-600 text-white p-2 m-4 mt-0 md:m-0 md:mr-4 md:mb-4 flex flex-col lg:flex-row lg:items-start rounded-lg">
        <span class="p-2 flex-grow"><b class="bg-gray-400 p-1 rounded-lg">Consent to analytics</b> I would like to use javascript to collect analytics. I will only collect data with your express consent. If you do not click "Consent", no data will be collected and your experience will not be affected in any way. If you would like to learn more about what is collected, please see the <a href="https://3kh0.net/privacy" target="_blank" class="underline">privacy page</a>.</span>
        <div class="flex flex-col md:flex-col md:items-end gap-1 mt-2 lg:mt-0 lg:ml-2">
          <div class="flex flex-row w-full lg:flex-col lg:w-auto gap-1">
            <button @click="handleConsent" class="bg-blue-500 text-white p-2 rounded-lg flex-1 lg:flex-none lg:w-full">Consent</button>
            <button @click="handleDecline" class="bg-blue-500 text-white p-2 rounded-lg flex-1 lg:flex-none lg:w-full">Decline</button>
          </div>
        </div>
      </div>
      <div v-if="consentYea" class="bg-green-600 text-white p-2 ml-4 sm:ml-0 mr-4 mb-4 flex justify-between items-center rounded-lg">
        <span class="p-2">Your preference has been saved and will be honored. If you would like to reset it, just clear the site data. This notice will close in 5 seconds...</span>
      </div>
    </div>
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

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>