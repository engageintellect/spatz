<script lang="ts">
  import '../app.pcss'
  import Icon from '@iconify/svelte'
  import { currentUser } from '$lib/stores/user'
  import daisyuiColors from 'daisyui/src/theming/themes'
  import type { PageData } from './$types'
  import { customThemes } from '$lib/custom-themes'
  import Nav from '$lib/components/Nav.svelte'
  import NavMobile from '$lib/components/NavMobile.svelte'

  // START VIEW TRANSITIONS API
  import { onNavigate } from '$app/navigation'

  onNavigate((navigation) => {
    // @ts-ignore <-- This is a private API so we need to ignore the TS error
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      // @ts-ignore <-- This is a private API so we need to ignore the TS error
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
  // END VIEW TRANSITIONS API

  export let data: PageData

  let themes = Object.keys(daisyuiColors)

  // push all items from customThemes to themes
  themes.push(...customThemes)

  $: currentUser.set(data.user)
</script>

<div class="h-full min-h-screen">
  <div class="bg-base-100 text-neutral-content sticky top-0 z-50 shadow">
    <div class="hidden md:flex">
      <Nav {data} />
    </div>
    <div class="md:hidden">
      <NavMobile {data} />
    </div>
  </div>

  <div class="max-w-2xl p-2 mx-auto w-full">
    <slot />
  </div>

  <footer class="footer footer-center rounded bg-base-100 text-base-content">
    <div class="max-w-2xl mx-auto w-full">
      <nav class="flex justify-center p-5">
        <div class="flex gap-1">
          <div>Made with</div>
          <div>
            <Icon
              icon="mdi:heart"
              class="h-5 w-5 text-red-500"
              aria-label="Love"
            />
          </div>
          by
          <a
            href="https://github.com/engageintellect"
            class="link-hover link underline"
            aria-label="GitHub profile">@engageintellect</a
          >
        </div>
      </nav>
    </div>
  </footer>
</div>
