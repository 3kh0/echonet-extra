<template>
  <main class="flex flex-col items-center justify-center h-full p-4">
    <h2 class="text-3xl font-bold mb-8">Pomodoro Timer</h2>
    <p class="text-8xl font-mono mb-8">{{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }}</p>
    <p class="text-2xl font-bold mb-8">{{ timerType }}</p>
    <div class="flex space-x-4">
      <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors" @click="startTimer">Start</button>
      <button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors" @click="resetTimer">Reset</button>
      <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors" @click="skipTimer">Skip</button>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import alarmSound from "@/assets/alarm.mp3";

export default {
  setup() {
    const timer = ref(null);
    const minutes = ref(25);
    const seconds = ref(0);
    const timerType = ref("Work Time");
    const audio = new Audio(alarmSound);

    const startTimer = () => {
      timer.value = setInterval(() => {
        if (seconds.value === 0) {
          minutes.value--;
          seconds.value = 59;
        } else {
          seconds.value--;
        }

        if (minutes.value === 0 && seconds.value === 0) {
          clearInterval(timer.value);
          audio.play();
          switchTimerType();
        }
      }, 1000);
    };

    const resetTimer = () => {
      clearInterval(timer.value);
      minutes.value = 25;
      seconds.value = 0;
      timerType.value = "Work Time";
    };

    const skipTimer = () => {
      clearInterval(timer.value);
      switchTimerType();
      startTimer();
    };

    const switchTimerType = () => {
      if (timerType.value === "Work Time") {
        timerType.value = "Break Time";
        minutes.value = 5;
        seconds.value = 0;
      } else {
        timerType.value = "Work Time";
        minutes.value = 25;
        seconds.value = 0;
      }
    };

    return {
      minutes,
      seconds,
      startTimer,
      resetTimer,
      skipTimer,
      timerType
    };
  }
};
</script>
