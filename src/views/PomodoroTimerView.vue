<template>
  <main class="flex flex-col items-center justify-center h-full p-4">
    <h2 class="text-3xl font-bold mb-8">Pomodoro Timer</h2>
    <p class="text-8xl font-mono mb-8">{{ min }}:{{ sec < 10 ? "0" + sec : sec }}</p>
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
// BEEP BEEP BEEP

export default {
  setup() {
    const timer = ref(null);
    const min = ref(25);
    const sec = ref(0);
    const timerType = ref("Work Time");
    const audio = new Audio(alarmSound);

    const startTimer = () => {
      timer.value = setInterval(() => {
        if (sec.value === 0) {
          min.value--;
          sec.value = 59;
        } else {
          sec.value--;
        }

        if (min.value === 0 && sec.value === 0) {
          clearInterval(timer.value);
          audio.play();
          switchT();
        }
      }, 1000);
    };

    const resetTimer = () => {
      clearInterval(timer.value);
      min.value = 25;
      sec.value = 0;
      timerType.value = "Work Time";
    };

    const skipTimer = () => {
      clearInterval(timer.value);
      switchT();
      startTimer();
    };

    const switchT = () => { // was gonna be named switch but thats reserved
      if (timerType.value === "Work Time") {
        timerType.value = "Break Time";
        min.value = 5;
        sec.value = 0;
      } else {
        timerType.value = "Work Time";
        min.value = 25;
        sec.value = 0;
      }
    };

    return {
      min,
      sec,
      startTimer,
      resetTimer,
      skipTimer,
      timerType
    };
  }
};
</script>
