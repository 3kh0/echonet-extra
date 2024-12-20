<script setup>
fetch("https://wtfismyip.com/json") // i love this api
  .then((response) => response.json())
  .then((data) => {
    const ipAddrElement = document.getElementById("ipAddr");
    ipAddrElement.innerHTML = `IP Address: ${data.YourFuckingIPAddress}`; 
    // swearing? 
    // in my christan vue app?
    // it is more likely than you think

    const resultElement = document.getElementById("result");
    const browserInfo = `
      <p>Location: ${data.YourFuckingLocation}</p>
      <p>Hostname: ${data.YourFuckingHostname}</p>
      <p>ISP: ${data.YourFuckingISP}</p>
      <p>City: ${data.YourFuckingCity}</p>
      <p>Country: ${data.YourFuckingCountry}</p>
      <p>Country Code: ${data.YourFuckingCountryCode}</p>
      <p>Current Time: ${new Date().toLocaleString()}</p>
      <p>User Agent: ${navigator.userAgent}</p>
      <p>Window Width: ${window.innerWidth}px</p>
      <p>Window Height: ${window.innerHeight}px</p>
      <p>Window Ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</p>
      <p>Screen Width: ${window.screen.availWidth}px</p>
      <p>Screen Height: ${window.screen.availHeight}px</p>
      <p>Screen Ratio: ${(window.screen.availWidth / window.screen.availHeight).toFixed(2)}</p>
      <p>Color Depth: ${window.screen.colorDepth}</p>
      <p>Do Not Track: ${navigator.doNotTrack === "1" ? "Enabled" : "Disabled"}</p>
      <p>Global Privacy Control: ${navigator.globalPrivacyControl}</p>
      <p>Cookies: ${navigator.cookieEnabled}</p>
      <p>WebGL Enabled: ${!!window.WebGLRenderingContext}</p>
      <p>Browser Language: ${navigator.language}</p>
      <p>CPU Threads: ${navigator.hardwareConcurrency}</p>
    `;
    resultElement.innerHTML = browserInfo;

    document.getElementById("progress-bar").style.display = "none";
  });
</script>

<template>
  <main>
    <h2 class="text-3xl mb-4">Browser Information</h2>
    <div id="ip-info" class="bg-gray-800 p-6 rounded-lg shadow-md relative">
      <p id="ipAddr" class="text-3xl mb-2 font-semibold">Fetching data...</p>
      <div id="result" class="mb-2"></div>
      <p>Data provided by <a href="https://wtfismyip.com/" class="font-semibold text-blue-500" target="_blank">wtfismyip</a></p>
      <hr class="my-4" />
      <p class="text-sm">Use a VPN to protect your privacy online. I recommend <a href="https://mullvad.net/en/vpn" class="font-semibold text-blue-500" target="_blank">Mullvad VPN</a>, it is secure, private, and you don't even use a email to sign up. Pay a flat rate of 5€ per month.</p> <!--#ad-->
      <div id="progress-bar" class="h-1 bg-blue-500 absolute bottom-0 left-0 rounded-lg"></div>
    </div>
  </main>
</template>

<style scoped>
:deep(#progress-bar) {
  width: 0%;
  transition: width 0.5s ease;
  animation: progress 4s infinite;
}

@keyframes progress {
  0% {
    width: 0;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>
