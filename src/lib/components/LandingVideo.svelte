<script lang="ts">
  import Video from '$lib/assets/videos/spatz.mp4'
  import { fade } from 'svelte/transition'
</script>

<div
  class="flex overflow-auto justify-center h-64 sm:h-80 transition-all duration-300 items-center border-t border-base-300 bg-gradient-to-b from-primary to-primary/0 px-4 gap-2"
>
  <div in:fade={{ delay: 300, duration: 1000 }}>
    <video
      src={Video}
      autoplay
      loop
      muted
      class="w-full h-60 sm:h-fit sm:mt-16 rounded-t-lg shadow-xl mt-5 transition-all duration-300"
    ></video>
  </div>
</div>
