<template>
  <main class="flex flex-col items-center justify-center h-full p-4">
    <h1 class="text-4xl mb-4">Countdown Timer</h1>
    <div v-if="!timerStarted" class="flex space-x-2 mb-4">
      <input v-model="hrs" type="number" placeholder="HH" class="w-16 p-2 border-0 rounded-lg text-white bg-gray-800 text-2xl" />
      <span class="text-4xl">:</span>
      <input v-model="min" type="number" placeholder="MM" class="w-16 p-2 border-0 rounded-lg text-white bg-gray-800 text-2xl" />
      <span class="text-4xl">:</span>
      <input v-model="sec" type="number" placeholder="SS" class="w-16 p-2 border-0 rounded-lg text-white bg-gray-800 text-2xl" />
    </div>
    <div v-else class="text-6xl font-mono">
      {{ forTime }}
    </div>
    <div class="flex space-x-4 mt-4">
      <button @click="start" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-lg">Start</button>
      <button @click="resetTimer" class="px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors text-white rounded-lg">Reset</button>
    </div>
  </main>
</template>

<script>
import alarmSound from "@/assets/alarm.mp3";
// BEEP BEEP BEEP

export default {
  data() {
    return {
      hrs: "",
      min: "",
      sec: "",
      timeLeft: null,
      timer: null,
      timerStarted: false
    };
  },
  computed: {
    forTime() {
      const hrs = String(Math.floor(this.timeLeft / 3600)).padStart(2, "0");
      const mins = String(Math.floor((this.timeLeft % 3600) / 60)).padStart(2, "0");
      const secs = String(this.timeLeft % 60).padStart(2, "0");
      return `${hrs}:${mins}:${secs}`;
    }
  },
  methods: {
    start() {
      const audio = new Audio(alarmSound);
      const hrs = this.hrs ? parseInt(this.hrs) : 0;
      const min = this.min ? parseInt(this.min) : 0;
      const sec = this.sec ? parseInt(this.sec) : 0;
      const totalsec = hrs * 3600 + min * 60 + sec;
      this.timeLeft = totalsec;
      this.timerStarted = true;
      if (this.timer) clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
          this.timerStarted = false;
          audio.play();
        }
      }, 1000);
    },
    resetTimer() {
      clearInterval(this.timer);
      this.timeLeft = null;
      this.timerStarted = false;
      this.hrs = "";
      this.min = "";
      this.sec = "";
    }
  }
};
</script>

<style scoped>
/* get yo goofy arrows outta here */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
