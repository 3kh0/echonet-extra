<template>
  <main>
    <h1 class="text-3xl font-bold mb-4">Crypto Wallets</h1>
    <div v-for="wallet in wallets" :key="wallet.name" class="wallet bg-gray-800 p-4 rounded-lg shadow-md mb-4">
      <h2 class="text-2xl font-semibold mb-2 flex items-center">
        <img :src="`/svg/${wallet.symbol}.svg`" alt="" class="w-6 h-6 mr-2" />
        {{ wallet.name }}
      </h2>
      <p class="text-gray-300 mb-4 break-words">
        Address: <span class="font-mono">{{ wallet.address }}</span>
      </p>
      <div v-if="wallet.symbol === 'eth'" class="mb-4 flex items-center">
        <p class="text-lg font-semibold">Supported Chains:</p>
        <div class="flex space-x-2 ml-2">
          <img src="/svg/eth.svg" alt="Ethereum" class="w-5 h-5" />
          <img src="/svg/base.svg" alt="Base" class="w-5 h-5" />
          <img src="/svg/matic.svg" alt="Polygon" class="w-5 h-5" />
          <img src="/svg/op.svg" alt="Optimism" class="w-5 h-5" />
        </div>
      </div>
      <div class="flex space-x-4">
        <button @click="copyAddress(wallet.address)" class="bg-blue-500 transition-colors text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <img src="/svg/copy.svg" alt="Copy address" class="w-6 h-6" />
        </button>
        <button @click="generateQRCode(wallet.address)" class="bg-green-500 transition-colors text-white px-4 py-2 rounded-lg hover:bg-green-600">
          <img src="/svg/qr.svg" alt="Get QR Code" class="w-6 h-6" />
        </button>
        <button @click="viewOnBlockExplorer(wallet.symbol, wallet.address)" class="bg-yellow-500 transition-colors text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
          <p class="flex items-center"><img src="/svg/open.svg" alt="Get QR Code" class="w-6 h-6 mr-2" /> Explorer</p>
        </button>
      </div>
      <div v-if="qrCode && currAdd === wallet.address" class="mt-4 max-w-full overflow-hidden">
        <qrcode-vue :value="qrCode" :size="size" :render-as="renderAs" :margin="margin" :level="level" :background="background" :foreground="foreground" class="max-w-full" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";

const wallets = ref([
  { name: "Monero", symbol: "xmr", address: "43LSJpZ6Le84eMiLTmMwZgTDMxtPthDh8Cdk1HWuLAx9itTgj8YqLbGE7hFYXSR6p6YVP8g4TMWxDiQTDnHW1VHMAb6YDrH" },
  { name: "Ethereum", symbol: "eth", address: "0x4a31EBD5A93334ba99CAE15dd1411c7a3E0214B6" },
  { name: "Litecoin", symbol: "ltc", address: "ltc1q4nwfd39gwgh57ylj0qlwahnfjnl3v5anrdjtex" },
  { name: "Bitcoin", symbol: "btc", address: "33WimAtvLLmEREJBUS2wc8ev7tjmzCU2Mq" },
  { name: "Dogecoin", symbol: "doge", address: "DBhD3inJwU17gZo4FTaH7HsCBwe3iW3Fa4" },
  { name: "Solana", symbol: "sol", address: "7JnnjZfcNEoc6h3dRPw8zWFQQGoiMPtpMFNyDq9usPye" },
  { name: "Bitcoin Cash", symbol: "bch", address: "qp2l3dp5adgy375t9pgeptw0cul2nw65pys295gzun" }
]);

const qrCode = ref(null);
const currAdd = ref(null);
const size = ref(200);
const renderAs = ref("svg");
const margin = ref(1);
const level = ref("H");
const background = ref("#ffffff");
const foreground = ref("#000000");

const copyAddress = (address) => {
  const cleanedAddress = address.replace(/ /g, "");
  navigator.clipboard.writeText(cleanedAddress).then(() => {
    alert("Address copied to clipboard!");
  });
};

const generateQRCode = (address) => {
  qrCode.value = address;
  currAdd.value = address;
};

const viewOnBlockExplorer = (symbol, address) => {
  let explorerUrl;
  switch (symbol) {
    case "xmr":
      explorerUrl = `https://xmrchain.net/search?value=${address}`;
      break;
    case "btc":
      explorerUrl = `https://mempool.space/address/${address}`;
      break;
    case "ltc":
      explorerUrl = `https://litecoinspace.org/address/${address}`;
      break;
    case "eth":
      explorerUrl = `https://etherscan.io/address/${address}`;
      break;
    case "doge":
      explorerUrl = `https://dogechain.info/address/${address}`;
      break;
    case "sol":
      explorerUrl = `https://explorer.solana.com/address/${address}`;
      break;
    case "bch":
      explorerUrl = `https://blockchair.com/bitcoin-cash/address/${address}`;
      break;
    default:
      alert("Block explorer not available for this cryptocurrency.");
      return;
  }
  window.open(explorerUrl, "_blank");
};
</script>
