<template>
  <main class="flex flex-col items-center justify-center h-full p-4">
    <h1 class="text-4xl mb-4">{{ timezone }}</h1>
    <div class="text-6xl">
      {{ currentTime }}
    </div>
    <footer class="text-center text-gray-400 text-sm p-4">{{ date }}</footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(('en-GB')), //24 time based
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString(('en-GB'));
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>