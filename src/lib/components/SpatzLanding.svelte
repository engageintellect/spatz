<script lang="ts">
  import Icon from '@iconify/svelte'
  import LandingVideo from '$lib/components/LandingVideo.svelte'
  import LandingIcons from './LandingIcons.svelte'
  import { onMount, onDestroy } from 'svelte'
  import { gsap } from 'gsap'
  import { page } from '$app/stores'

  let showIcons = true

  onMount(() => {
    setTimeout(() => {
      showIcons = false
    }, 2500)

    // GSAP animation for combined effects
    import('gsap').then(({ gsap }) => {
      const animation = gsap.fromTo(
        '.mockup-browser',
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
      )

      // Cleanup animation on destroy
      onDestroy(() => {
        animation.kill()
        console.log('Animation killed')
      })

      // Handle route changes to kill animations and prevent conflicts
      const unsubscribe = page.subscribe(() => {
        animation.kill()
      })

      onDestroy(() => {
        unsubscribe()
      })
    })
  })
</script>

<div class="">
  <div class="hero bg-base-100">
    <div class="hero-content text-center">
      <div class="max-w-sm">
        <h1 class="text-9xl font-extrabold text-primary drop-shadow-lg">
          spatz
        </h1>
        <p class="py-5">
          The best way to start your next <a
            href="https://kit.svelte.dev"
            class="text-primary underline">Sveltekit</a
          >
          project, if you care about building
          <span class="text-primary italic">fast</span>...
        </p>
        <div class="max-w-md flex gap-2">
          <a
            href="/auth/register"
            class="btn btn-primary flex group items-center justify-between flex-1 group/registerButton"
          >
            <div>let's build</div>
            <Icon
              icon="material-symbols:rocket"
              class="w-7 h-7 md:group-hover/registerButton:rotate-45 transition-transform duration-300"
            />
          </a>
          <a
            href="/auth/login"
            class="btn btn-primary btn-outline flex-1 flex items-center justify-between group/loginButton"
          >
            <div>login</div>
            <Icon
              icon="material-symbols:login"
              class="w-7 h-7 md:group-hover/loginButton:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="mockup-browser border border-base-300 shadow-xl mt-5">
    <div class="mockup-browser-toolbar">
      <div class="bg-base-300 px-2 py-1 w-full card">
        <div class="flex items-center gap-1">
          <Icon icon="mdi-search" class="w-5 h-5" />
          spatz.engage-dev.com
        </div>
      </div>
    </div>

    {#if showIcons}
      <LandingIcons />
    {:else}
      <LandingVideo />
    {/if}
  </div>
</div>
