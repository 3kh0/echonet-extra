<template>
  <main class="flex">
    <!-- oh no furries aaaaaaaaaaaaa -->
    <div class="flex-grow mr-4">
      <h1 class="text-3xl mb-4">Fursona Reference</h1>
      <p>Echo is an orange fox who usually wears a sweatshirt with the occasional T-shirt. Common designs include the <a class="font-semibold text-blue-500" target="_blank" href="https://web.getmonero.org/press-kit/">Monero logo</a> and the <a class="font-semibold text-blue-500" target="_blank" href="https://efimero.github.io/xenia-images/cathodegaytube1.jpg">Xenia Linux T-shirt</a>. Here are a few pointers for the fine details:</p>
      <ul class="p-4">
        <li><span class="bullet-point">•</span> 3 to 5 fluffy tails.</li>
        <li><span class="bullet-point">•</span> Orange eyes</li>
        <li><span class="bullet-point">•</span> The tip of the ears are a bit darker</li>
      </ul>
      <p>He is a bit shy and introverted, but he is very friendly and loves to make new friends. He is also a big fan of technology and enjoys programming and playing video games.</p>
      <p class="py-2">The design of this goober is pretty broad since I like artists to have their own interpretation of my character.</p>
      <h2 class="text-2xl mt-2 mb-2">Dos and Don'ts</h2>
      <p>Here are some guidelines for making art of Echo:</p>
      <div>
        <h3 class="text-xl font-semibold mb-2">Yes please!</h3>
        <ul class="list-disc pl-5 mb-4">
          <li>Draw without asking first.</li>
          <li>Pride art is always welcome!</li>
          <li>Design changes are fine as long as it's respectful.</li>
          <li>Body swaps (humans/humanoids) are cool.</li>
        </ul>
        <h3 class="text-xl font-semibold mb-2">Please don't</h3>
        <ul class="list-disc pl-5">
          <li>No NSFW art, I am a minor</li>
          <li>No gender swaps, he is a male</li>
        </ul>
      </div>
      <p class="py-2">If you have any questions or need clarification, feel free <a href="https://3kh0.net/contact">to contact me</a>!</p>
      <!-- art -->
      <h2 class="text-2xl mt-4 mb-2">Art Gallery</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="art in artData" :key="art.id" class="bg-gray-700 p-4 rounded-lg">
          <img :src="art.image" :alt="art.description" class="w-full rounded-lg mb-2" />
          <p class="text-lg font-semibold mb-2" v-html="art.artist"></p>
          <p class="mb-2" v-html="art.description"></p>
          <p class="text-sm text-gray-400">{{ art.subtext }}</p>
        </div>
      </div>
    </div>
    <!-- wikibox -->
    <aside class="w-1/5 min-w-[300px] p-4 bg-gray-800 text-white rounded-lg sticky top-4">
      <img src="/img/fox/xmr_hoodie.webp" alt="Echo's Headshot" class="w-full rounded-lg mb-4" />
      <ul class="list-none p-0">
        <li><strong>Name:</strong> Echo</li>
        <li><strong>Age:</strong> 15</li>
        <li><strong>Body Type:</strong> Anthro</li>
        <li><strong>Pronouns:</strong> he/him</li>
        <li><strong>Species:</strong> Fox</li>
        <li><strong>Gender:</strong> Male</li>
        <li><strong>Orientation:</strong> Homosexual</li>
        <li><strong>Tails:</strong> 3-5</li>
      </ul>
    </aside>
  </main>
</template>
<script>
export default {
  data() {
    return {
      artData: [
        {
          image: "/img/fox/Echosketch.webp",
          fullRes: "/img/fox/Echosketch.png",
          artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://www.furaffinity.net/user/sachiyako/' target='_blank'>Sachiyako</a>",
          description: "I love it so much, the details are amazing, and the colors are perfect!",
          subtext: "Wondering what that text in the background says? It's a secret!"
        },
        {
          image: "/img/fox/holidaypic.webp",
          fullRes: "/img/fox/holidaypic.png",
          artist: "Fanart from <a class='text-lg font-semibold text-blue-500' href='https://www.weasyl.com/~kittrel' target='_blank'>Kittrel</a>",
          description: "I wonder what is inside the box, maybe a pipe bomb?",
          subtext: "OH CRAP ITS A PIPE BOMB AAAAAAAAAAA"
        },
        {
          image: "/img/fox/chipflake-doodle.webp",
          fullRes: "/img/fox/chipflake-doodle.png",
          artist: "Sketch from <a class='text-lg font-semibold text-blue-500' href='https://linktr.ee/chipflake' target='_blank'>Chipflake</a>",
          description: "It was pretty cool getting this drawn by Aaron on his stream! :D",
          subtext: "Keep in mind it is a silly little doodle, not a full drawing."
        },
        {
          image: "/img/fox/echo_autism.webp",
          fullRes: "/img/fox/echo_autism.png",
          artist: "Art from <a class='text-lg font-semibold text-blue-500' href='https://toyhou.se/Belonmelon' target='_blank'>Belonmelon</a>",
          description: "Wie cool ist das bitte? Jetzt zocke ich Fortnite und trinke Cola! YIPPEE!",
          subtext: "it looks so stupid yet so good at the same time xd"
        },
        {
          image: "/img/fox/echo_simple.webp",
          fullRes: "/img/fox/echo_simple.png",
          artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://nigatanatsumoto.carrd.co/' target='_blank'>Nigata Natsumoto</a>",
          description: "Little do you know he is wanted from over 150 countries for war crimes.",
          subtext: "Is one tail canon? I don't know, but it looks cool."
        },
        {
          image: "/img/fox/xmr_hoodie.webp",
          fullRes: "/img/fox/xmr_hoodie.png",
          artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://twitter.com/crispies_art' target='_blank'>crisspiess</a>",
          description: "Taxes on crypto? Never head of it!",
          subtext: "Why do he be dripping with that hoodie doe?"
        },
        {
          image: "/img/fox/rainbow_art.webp",
          fullRes: "/img/fox/rainbow_art.png",
          artist: "Request from <a class='text-lg font-semibold text-blue-500' href='https://toyhou.se/TheDoubleTailedrainB' target='_blank'>Thedoubletailedrainbow</a>",
          description: "That's one silly fox boy",
          subtext: "Def not a mugshot, I swear."
        },
        {
          image: "/img/fox/Palestine_support.webp",
          fullRes: "/img/fox/Palestine_support.png",
          artist: "Request from <a class='text-lg font-semibold text-blue-500' href='https://linktr.ee/pup.dagger' target='_blank'>@pup.dagger</a> with lines by Pulex",
          description: "I support human rights for Palestine. Donate US Campaign for Palestinian Rights at <a class='text-blue-500' href='https://uscpr.org/' target='_blank'>uscpr.org</a>",
          subtext: ""
        },
        {
          image: "/img/fox/borbdraws.webp",
          fullRes: "/img/fox/borbdraws.png",
          artist: "Request from <a class='text-lg font-semibold text-blue-500' href='https://www.instagram.com/bogusborb' target='_blank'>bogusborb</a>",
          description: "Very epic drawing from a very epic artist!",
          subtext: "Hello chat :3"
        },
        {
          image: "/img/fox/olives_laptop.webp",
          fullRes: "/img/fox/olives_laptop.png",
          artist: "Comission from <a class='text-lg font-semibold text-blue-500' href='https://www.instagram.com/olives_garden13' target='_blank'>olives_garden13</a>",
          description: "I swear I am working, nothing to see here",
          subtext: "Downloading 40TB of furry p- I mean, working on my schoolwork!"
        }
      ]
    };
  }
};
</script>

<style scoped>
.bullet-point {
  margin-right: 8px;
}
</style>
