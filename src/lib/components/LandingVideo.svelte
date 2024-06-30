<script lang="ts">
  import Video from '$lib/assets/videos/spatz.mp4'
  import { fade } from 'svelte/transition'

  let videoElement: any

  function playVideo() {
    videoElement.play()
  }
</script>

<div
  class="flex flex-col items-center justify-center overflow-auto h-64 sm:h-80 transition-all duration-300 border-t border-base-300 bg-gradient-to-b from-primary to-primary/0 px-4 gap-2"
>
  <div in:fade={{ delay: 300, duration: 1000 }} class="w-full">
    <video
      bind:this={videoElement}
      src={Video}
      autoplay
      loop
      muted
      playsinline
      class="rounded-t-lg w-full h-60 sm:h-full object-top object-cover mt-5 sm:mt-16"
      on:click={playVideo}
    ></video>
  </div>
</div>
