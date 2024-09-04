<template>
  <main class="p-6 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-center">Crypto Wallets</h1>
    <div v-for="wallet in wallets" :key="wallet.name" class="wallet bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <h2 class="text-2xl font-semibold mb-2">{{ wallet.name }}</h2>
      <p class="text-gray-300 mb-4">Address: <span class="font-mono">{{ wallet.address }}</span></p>
      <div class="flex space-x-4">
        <button @click="copyAddress(wallet.address)" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Copy Address
        </button>
        <button @click="generateQRCode(wallet.address)" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Generate QR Code
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const wallets = ref([
  { name: 'Monero', address: '43LSJpZ6Le84eMiLTmMwZgTDMxtPthDh8Cdk1HWuLAx9itTgj8YqLbGE7hFYXSR6p6YVP8g4TMWxDiQTDnHW1VHMAb6YDrH' },
  { name: 'Bitcoin', address: '33WimAtvLLmEREJBUS2wc8ev7tjmzCU2Mq' },
  { name: 'Litecoin', address: 'ltc1q4nwfd39gwgh57ylj0qlwahnfjnl3v5anrdjtex' }
]);

const copyAddress = (address) => {
  navigator.clipboard.writeText(address).then(() => {
    alert('Address copied to clipboard!');
  });
};

const generateQRCode = (address) => {
  // Implement QR code generation logic here
  alert(`QR code for ${address} generated!`);
};
</script>

<style scoped>
.wallet {
  margin-bottom: 20px;
}
</style>