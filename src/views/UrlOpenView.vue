<script>
export default {
  methods: {
    createPage() {
      var url = document.getElementById("url-target");
      // really unnecessary
      if (url.value.substring(0, 8) !== "https://" && url.value.substring(0, 7) !== "http://") {
        url.value = "https://" + url.value.split("https://").pop();
      } else if (url.value.substring(0, 7) == "http://") {
        url.value = "https://" + url.value.split("http://").pop();
      }
      window.open(url.value, "_self");
    }
  }
};
</script>

<template>
  <main>
    <h2 class="text-3xl mb-4">URL Opener</h2>
    <input type="text" id="url-target" placeholder="Enter URL here..." class="rounded-lg w-full py-2 px-3 text-white leading-tight border-0 bg-gray-800" @keyup.enter="createPage" />
    <div class="button-wrapper mt-4">
      <button id="create" class="bg-blue-500 hover:bg-blue-700 transition-colors py-2 px-4 rounded-lg" @click="createPage">Open page</button>
    </div>
    <div class="tip-section mt-6 bg-gray-800 p-4 rounded-lg" role="note">
      <p>This opens the URL in the current tab, useful for any webview exploits and such. If your school firewall has already blocked the website, this tool alone will not unblock it.</p>
    </div>
  </main>
</template>

<style scoped>
textarea {
  resize: none;
}
textarea:focus,
input:focus {
  outline: none;
}
</style>