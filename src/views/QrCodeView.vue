<template>
  <main class="flex flex-wrap">
    <div class="w-full md:w-1/2">
      <h2 class="text-3xl mb-4">QR Code Generator</h2>
      <label class="block text-gray-300 text-sm mb-2" for="value">Value:</label>
      <input id="value" type="text" v-model="value" placeholder="Enter text here..." class="rounded-lg w-full py-2 px-3 text-white bg-gray-800 leading-tight mb-2 border-0" @keyup="genCode" />
      <div class="flex justify-between">
        <div class="w-1/2 pr-2">
          <label class="block text-gray-300 text-sm mb-2" for="size">Size:</label>
          <input id="size" type="number" v-model="size" placeholder="Size (default: 100)" class="rounded-lg w-full py-2 px-3 text-white bg-gray-800 leading-tight mb-2 border-0" @keyup="genCode" />
        </div>
        <div class="w-1/2 pl-2">
          <label class="block text-gray-300 text-sm mb-2" for="margin">Margin:</label>
          <input id="margin" type="number" v-model="margin" placeholder="Margin (default: 0)" class="rounded-lg w-full py-2 px-3 text-white bg-gray-800 leading-tight mb-2 border-0" @keyup="genCode" />
        </div>
      </div>
      <div class="flex justify-between">
        <div class="w-1/2 pr-2">
          <label class="block text-gray-300 text-sm mb-2" for="background">Background Color:</label>
          <input id="background" type="color" v-model="background" class="rounded-lg w-full py-2 px-3 text-white bg-gray-800 leading-tight mb-2 border-0" />
        </div>
        <div class="w-1/2 pl-2">
          <label class="block text-gray-300 text-sm mb-2" for="foreground">Foreground Color:</label>
          <input id="foreground" type="color" v-model="foreground" class="rounded-lg w-full py-2 px-3 text-white bg-gray-800 leading-tight mb-2 border-0" />
        </div>
      </div>
      <label class="block text-gray-300 text-sm mb-2">Render:</label>
      <div class="flex justify-between space-x-4 mb-2">
        <button :class="`flex-1 rounded-lg py-2 px-4 ${renderAs === 'svg' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-blue-500'}`" @click="renderAs('svg')">Render as SVG</button>
        <button :class="`flex-1 rounded-lg py-2 px-4 ${renderAs === 'canvas' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-blue-500'}`" @click="renderAs('canvas')">Render with Canvas</button>
      </div>
      <label class="block text-gray-300 text-sm mb-2" for="level">Error Correction Level:</label>
      <select id="level" v-model="level" class="rounded-lg w-full py-2 px-3 text-gray-700  leading-tight mb-2">
        <option value="L">Level L (Low)</option>
        <option value="M">Level M (Medium)</option>
        <option value="Q">Level Q (Quartile)</option>
        <option value="H">Level H (High)</option>
      </select>
      <div class="button-wrapper mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 transition-colors py-2 px-4 rounded-lg" @click="genCode">Generate QR Code</button>
      </div>
      <div class="tip-section mt-6 bg-gray-800 p-4 rounded-lg" role="note">
        <p class="py-2">You can use this tool to generate QR codes for URLs, text, or any other data you want to encode.</p>
        <p class="py-2">Leave most of the settings to its defaults for best results, only tinker with them if you know what you are doing.</p>
        <p class="py-2">Powered by <a href="https://github.com/scopewu/qrcode.vue" class="italic underline">scopewu/qrcode.vue</a></p>
      </div>
    </div>
    <div class="w-full md:w-1/2 p-4 flex items-center justify-center">
      <div v-if="qrCode" class="mt-4 max-w-full overflow-hidden">
        <qrcode-vue :value="qrCode" :size="size" :render-as="renderAs" :margin="margin" :level="level" :background="background" :foreground="foreground" class="max-w-full" />
      </div>
    </div>
  </main>
</template>

<script>
import QrcodeVue from "qrcode.vue"; // i love this package

export default {
  components: {
    QrcodeVue
  },
  data() {
    return {
      value: "https://example.com",
      qrCode: null,
      size: 500,
      renderAs: "svg",
      margin: 1,
      level: "H",
      background: "#ffffff",
      foreground: "#000000"
    };
  },
  methods: {
    genCode() {
      this.qrCode = this.value;
    },
    renderAs(value) {
      this.renderAs = value;
    }
  },
  mounted() {
    this.genCode();
  }
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