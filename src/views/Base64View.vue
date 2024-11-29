<template>
  <main class="flex flex-col items-center justify-center h-full w-full">
    <h1 class="text-3xl font-bold mb-4">Base64 Converter</h1>
    <div class="flex flex-col sm:flex-row w-full h-full space-y-2 sm:space-y-0 sm:space-x-4">
      <div class="flex-1 h-screen sm:h-full">
        <label for="plaintext" class="block text-lg mb-1">Plaintext</label>
        <textarea
          id="plaintext"
          v-model="plaintext"
          @input="convertToBase64"
          class="w-full h-[calc(100%-28px)] p-2 border-0 rounded-lg bg-gray-800 resize-none"
          placeholder="Plaintext"
        ></textarea>
      </div>
      <div class="flex-1 h-1/2 sm:h-full">
        <label for="base64" class="block text-lg mb-1">Base64</label>
        <textarea
          id="base64"
          v-model="base64"
          @input="convertToPlaintext"
          class="w-full h-[calc(100%-28px)] p-2 border-0 rounded-lg bg-gray-800 resize-none"
          placeholder="Base64 encoded text"
        ></textarea>
      </div>
    </div>
    <div class="w-full">
      <button :class="['text-white transition-colors py-2 px-4 rounded-lg mt-4 w-full', encodeLinesSeparately ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600']" @click="toggleEncodeLines">
        {{ encodeLinesSeparately ? 'Encode lines separately' : 'Encode normally' }}
      </button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      plaintext: "",
      base64: "",
      encodeLinesSeparately: false,
    };
  },
  methods: {
    convertToBase64() {
      try {
        if (this.encodeLinesSeparately) {
          const lines = this.plaintext.split("\n");
          this.base64 = lines.map((line) => btoa(line)).join("\n");
        } else {
          this.base64 = btoa(this.plaintext);
        }
      } catch (e) {
        this.base64 = "Error: Invalid input";
      }
    },
    convertToPlaintext() {
      try {
        if (this.encodeLinesSeparately) {
          const lines = this.base64.split("\n");
          this.plaintext = lines.map((line) => atob(line)).join("\n");
        } else {
          this.plaintext = atob(this.base64);
        }
      } catch (e) {
        this.plaintext = "Error: Invalid input";
      }
    },
    toggleEncodeLines() {
      this.encodeLinesSeparately = !this.encodeLinesSeparately;
      this.convertToBase64();
    },
  },
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