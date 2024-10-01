<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold mb-4">Coin Flip</h1>
    <div class="coin-container relative w-40 h-40 mb-6">
      <div :class="['coin', flipping ? 'flipping' : '', resetTransition ? 'no-transition' : '']" :style="{ transform: coinTransform }" class="absolute inset-0">
        <div class="front flex items-center justify-center bg-gray-300 w-full h-full absolute backface-hidden rounded-full border-4 border-gray-500">Heads</div>
        <div class="back flex items-center justify-center bg-gray-500 w-full h-full absolute backface-hidden rounded-full border-4 border-gray-700">Tails</div>
      </div>
    </div>
    <button @click="flipCoin" class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Flip Coin</button>
    <p v-if="result && !flipping" class="mt-4 text-xl font-bold">{{ resultPretty }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipping: false,
      result: "",
      resultPretty: "",
      coinTransform: "rotateY(0deg)",
      currentSide: "heads", // Track the current side of the coin
      resetTransition: false // Flag to disable transition
    };
  },
  methods: {
    flipCoin() {
      if (this.flipping) return;

      this.flipping = true; // Start flipping animation

      // Determine the result
      const isHeads = Math.random() > 0.5;
      this.result = isHeads ? "heads" : "tails";
      console.log(this.result);

      // Calculate the rotation needed to ensure the correct side is displayed
      const rotation = isHeads ? 1440 : 1620;
      this.coinTransform = `rotateY(${rotation}deg)`;

      // End flipping animation after 1 second
      setTimeout(() => {
        // Disable transition for instant reset
        this.resetTransition = true;

        // Reset the coin to its default state based on the result
        this.coinTransform = isHeads ? "rotateY(0deg)" : "rotateY(180deg)";

        // Re-enable transition after resetting
        setTimeout(() => {
          this.resetTransition = false;
          this.currentSide = this.result;
          this.flipping = false;
        }, 50); // Small delay to ensure the reset transform is applied
      }, 1000); // 1 second for full flip animation
      // Update the resultPretty value for display
      this.resultPretty = isHeads ? "The coin landed on Heads!" : "The coin landed on Tails!";
    }
  }
};
</script>

<style scoped>
.coin-container {
  perspective: 1000px;
}

.coin {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;
}

.no-transition {
  transition: none !important;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.front {
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}
</style>
