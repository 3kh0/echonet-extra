<template>
  <main class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl mb-4">Countdown Timer</h1>
    <div v-if="!timerStarted" class="flex space-x-2 mb-4">
      <input v-model="hours" type="number" placeholder="HH" class="w-16 p-2 border-0 rounded-xl text-white bg-gray-800 text-2xl no-arrows" />
      <span class="text-4xl">:</span>
      <input v-model="minutes" type="number" placeholder="MM" class="w-16 p-2 border-0 rounded-xl text-white bg-gray-800 text-2xl no-arrows" />
      <span class="text-4xl">:</span>
      <input v-model="seconds" type="number" placeholder="SS" class="w-16 p-2 border-0 rounded-xl text-white bg-gray-800 text-2xl no-arrows" />
    </div>
    <div v-else class="text-6xl font-mono">
      {{ formattedTime }}
    </div>
    <div class="flex space-x-4 mt-4">
      <button @click="startTimer" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-xl">Start</button>
      <button @click="resetTimer" class="px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors text-white rounded-xl">Reset</button>
    </div>
  </main>
</template>

<script>
import alarmSound from "@/assets/alarm.mp3";

export default {
  data() {
    return {
      hours: "",
      minutes: "",
      seconds: "",
      timeLeft: null,
      timer: null,
      timerStarted: false
    };
  },
  computed: {
    formattedTime() {
      const hrs = String(Math.floor(this.timeLeft / 3600)).padStart(2, "0");
      const mins = String(Math.floor((this.timeLeft % 3600) / 60)).padStart(2, "0");
      const secs = String(this.timeLeft % 60).padStart(2, "0");
      return `${hrs}:${mins}:${secs}`;
    }
  },
  methods: {
    startTimer() {
      const audio = new Audio(alarmSound);
      const hours = this.hours ? parseInt(this.hours) : 0;
      const minutes = this.minutes ? parseInt(this.minutes) : 0;
      const seconds = this.seconds ? parseInt(this.seconds) : 0;
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      this.timeLeft = totalSeconds;
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
      this.hours = "";
      this.minutes = "";
      this.seconds = "";
    }
  }
};
</script>

<style scoped>
/* Hide the arrows in number input fields */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
