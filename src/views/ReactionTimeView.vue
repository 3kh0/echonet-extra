<template>
  <main class="flex flex-col items-center justify-center h-full p-4">
    <div class="flex space-x-4 mb-4 w-full">
      <button
      @click="setMode('Reactive')"
      :class="['flex-1 p-2 rounded-lg', mode === 'Reactive' ? 'bg-blue-500 text-white' : 'bg-white text-black']"
      >
      Reactive Mode
      </button>
      <button
      @click="setMode('Predictive')"
      :class="['flex-1 p-2 rounded-lg', mode === 'Predictive' ? 'bg-blue-500 text-white' : 'bg-white text-black']"
      >
      Predictive Mode
      </button>
    </div>
    <button
      :class="['w-full h-full rounded-lg pointer', boxColor]"
      @click="handleClick"
    >
      <h1 class="text-white text-4xl font-bold text-center pt-16">
        {{ hboxMessage }}
      </h1>
      <p class="text-white text-2xl text-center pt-16">
        {{ pboxMessage }}
      </p>
    </button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isReady: false,
      reactionTime: null,
      startTime: null,
      timeoutId: null,
      boxColor: 'bg-blue-500',
      hboxMessage: 'Reaction Time Test',
      pboxMessage: 'Click to start the test',
      mode: 'Reactive', // default mode
      countdownIn: null,
    };
  },
  methods: {
    setMode(mode) {
      this.mode = mode;
      this.resetTest();
    },
    startTest() {
      this.isReady = false;
      this.reactionTime = null;
      this.boxColor = 'bg-red-500';
      this.hboxMessage = 'Get ready!';
      this.pboxMessage = 'Wait for the color to change to green';
      clearTimeout(this.timeoutId);
      clearInterval(this.countdownIn);
      
      const randomDelay = Math.floor(Math.random() * 4000) + 1000;
      
      if (this.mode === 'Reactive') {
        this.timeoutId = setTimeout(() => {
          this.isReady = true;
          this.boxColor = 'bg-green-500';
          this.hboxMessage = 'Click!';
          this.pboxMessage = '';
          this.startTime = Date.now();
        }, randomDelay);
      } else if (this.mode === 'Predictive') {
        let countdown = randomDelay;
        this.pboxMessage = `Changing in ${(countdown / 1000).toFixed(2)} seconds`;
        this.countdownIn = setInterval(() => {
          countdown -= 10;
          this.pboxMessage = `Changing in ${(countdown / 1000).toFixed(2)} seconds`;
          if (countdown <= 0) {
            clearInterval(this.countdownIn);
            this.isReady = true;
            this.boxColor = 'bg-green-500';
            this.hboxMessage = 'Click!';
            this.pboxMessage = '';
            this.startTime = Date.now();
          }
        }, 10);
      };
    },
    handleClick() {
      if (this.boxColor === 'bg-blue-500') {
        this.startTest();
      } else if (this.isReady) {
        const endTime = Date.now();
        this.reactionTime = endTime - this.startTime;
        this.isReady = false;
        this.boxColor = 'bg-blue-500';
        this.hboxMessage = `${this.mode} time is ${this.reactionTime}ms`;
        this.pboxMessage = 'Click again to start a new test';
      } else {
        clearTimeout(this.timeoutId);
        clearInterval(this.countdownIn);
        this.isReady = false;
        this.boxColor = 'bg-blue-500';
        this.hboxMessage = 'Too early!';
        this.pboxMessage = 'Click again to start a new test';
      }
    },
    resetTest() {
      clearTimeout(this.timeoutId);
      clearInterval(this.countdownIn);
      this.isReady = false;
      this.boxColor = 'bg-blue-500';
      this.hboxMessage = 'Reaction Time Test';
      this.pboxMessage = 'Click to start the test';
    },
  },
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>