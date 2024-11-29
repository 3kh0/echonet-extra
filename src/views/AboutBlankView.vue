<script>
export default {
  methods: {
    createPage() {
      var url = document.getElementById("url-target");
      if (url.value.substring(0, 8) !== "https://" && url.value.substring(0, 7) !== "http://") {
        url.value = "https://" + url.value.split("https://").pop();
      } else if (url.value.substring(0, 7) == "http://") {
        url.value = "https://" + url.value.split("http://").pop();
      }
      var win = window.open();
      win.document.body.style.margin = "0";
      win.document.body.style.height = "100vh";
      var frm = win.document.createElement("iframe");
      frm.style.border = "none";
      frm.style.width = "100%";
      frm.style.height = "100%";
      frm.style.margin = "0";
      frm.referrerpolicy = "no-referrer";
      frm.allow = "fullscreen";
      frm.src = url.value;
      win.document.body.appendChild(frm);
    }
  }
};
</script>

<template>
  <main>
    <h2 class="text-3xl mb-4">About Blank embedder</h2>
    <input type="text" id="url-target" placeholder="Enter URL here..." class="rounded-lg w-full py-2 px-3 text-white leading-tight border-0 bg-gray-800 resize-none" @keyup.enter="createPage" />
    <div class="button-wrapper mt-4">
      <button id="create" class="bg-blue-500 hover:bg-blue-700 transition-colors py-2 px-4 rounded-lg" @click="createPage">Create page</button>
      <button class="bg-red-500 hover:bg-red-700 transition-colors py-2 px-4 rounded-lg ml-4" @click="document.getElementById('url-target').value = ''">Clear input</button>
    </div>
    <div class="tip-section mt-6 bg-gray-800 p-4 rounded-lg" role="note">
      <p>Info: For extra security, put this page in the embedder so extensions can not see you using this tool. This tool does not always unblock pages, it just makes it so extensions can not interfere with them. Some pages will not work due to Content Security Policies, <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src" class="text-white underline">Learn more here</a>.</p>
      <p></p>
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