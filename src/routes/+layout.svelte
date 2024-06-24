<script lang="ts">
  import '../app.pcss'
  import { pb } from '$lib/pocketbase'
  import Icon from '@iconify/svelte'
  import { getImageURL } from '$lib/utils'
  import { PUBLIC_POCKETBASE_URL } from '$env/static/public'
  import { Toaster } from 'svelte-french-toast'
  import { currentUser } from '$lib/stores/user'
  import { selectedTheme } from '$lib/stores/theme'
  import daisyuiColors from 'daisyui/src/theming/themes'
  import { onMount } from 'svelte'
  import type { PageData } from './$types'
  import { customThemes } from '$lib/custom-themes'

  // START VIEW TRANSITIONS API
  import { onNavigate } from '$app/navigation'

  onNavigate((navigation) => {
    // @ts-ignore
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      // @ts-ignore
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

  onMount(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('selectedTheme') ?? 'default'
      if (themes.includes(storedTheme)) {
        selectedTheme.set(storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme)
      }
      // Subscribe to theme changes and update the attribute
      const unsubscribe = selectedTheme.subscribe((theme) => {
        document.documentElement.setAttribute('data-theme', theme)
      })
      return () => {
        unsubscribe()
      }
    }
  })

  function handleThemeChange(event: any) {
    const theme = event.target.value
    selectedTheme.set(theme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedTheme', theme)
    }
  }

  function handleLogout() {
    pb.authStore.clear()
    window.location.href = '/'
  }
</script>

<Toaster />

<div class="h-full min-h-screen">
  <div class="bg-base-100 text-neutral-content sticky top-0 z-50 shadow">
    <div class="navbar max-w-2xl mx-auto text-base-content">
      <div class="flex-1">
        <a
          href={$currentUser ? '/' : '/'}
          class="btn btn-primary text-xl"
          aria-label="Home">spatz</a
        >
      </div>
      <div class="flex-none gap-2">
        {#if $currentUser}
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="lg:tooltip lg:tooltip-left" data-tip="Theme Selector">
                <button
                  class="btn btn-ghost"
                  name="theme-toggle"
                  aria-label="Toggle Theme Selector"
                >
                  <div class="font-normal lowercase">
                    <Icon icon="gridicons-themes" class="h-6 w-6" />
                  </div>
                </button>
              </div>
            </div>
            <ul
              tabindex="-1"
              class="dropdown-content dropdown-end rounded-box border-primary bg-base-100 z-50 mt-3 h-96 w-52 overflow-auto border p-2 shadow"
              aria-label="Theme Selector Menu"
            >
              <li
                class="sticky top-0 theme-controller text-primary-content btn btn-primary btn-sm btn-block justify-start font-medium mb-2"
                aria-label={`Current Theme: ${$selectedTheme}`}
              >
                <div class="flex items-center gap-2">
                  <Icon icon="mdi-done" class="w-5 h-5" />
                  {$selectedTheme}
                </div>
              </li>
              {#each themes.sort() as theme}
                <li>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    class="theme-controller text-base-content btn btn-ghost btn-sm btn-block justify-start font-medium"
                    aria-label={theme}
                    value={theme}
                    on:change={handleThemeChange}
                    checked={theme === $selectedTheme}
                  />
                </li>
              {/each}
            </ul>
          </div>

          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-primary btn-circle avatar flex items-center justify-center"
              aria-label="User Menu"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="h-full w-full rounded-full">
                {#if $currentUser?.avatar}
                  <img
                    src={$currentUser?.avatar
                      ? getImageURL(
                          $currentUser?.collectionId,
                          $currentUser?.id,
                          $currentUser?.avatar,
                        )
                      : `https://ui-avatars.com/api/?name=${$currentUser?.email}`}
                    alt="User avatar"
                  />
                {:else}
                  <Icon
                    icon="mdi-account-circle"
                    class="h-full w-full scale-[110%] transition-scale duration-200 md:hover:scale-[105%] rounded-full text-base-100"
                  />
                {/if}
              </div>
            </div>

            <ul
              tabindex="-1"
              class="dropdown-content fomt-semibold menu p-2 shadow bg-base-100 rounded-box w-52 border border-primary mt-3 z-50"
              aria-label="User Menu"
            >
              <li class="mb-5">
                <div
                  class="bg-primary hover:bg-primary text-primary-content w-full truncate"
                >
                  <a
                    href="/my/settings/profile"
                    class="truncate font-bold"
                    aria-label="Profile Settings"
                  >
                    {$currentUser?.username}
                  </a>
                </div>
              </li>

              <li>
                <a href="/guestbook" aria-label="Guestbook">
                  <div class="flex gap-2 items-center font-bold">
                    <Icon
                      icon="fluent-emoji-high-contrast:ledger"
                      class="w-5 h-5"
                    />
                    <div>Guestbook</div>
                    <div class="badge badge-accent">new</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="/ai/chat" aria-label="AI Chat">
                  <div class="flex gap-2 items-center font-bold">
                    <Icon icon="simple-icons:openai" class="w-5 h-5" />
                    <div>AI</div>
                    <div class="badge badge-accent">new</div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`${PUBLIC_POCKETBASE_URL}/_/`}
                  class="font-bold flex items-center gap-2"
                  aria-label="PocketBase"
                >
                  <Icon icon="simple-icons:pocketbase" class="w-5 h-5" />
                  <div>PocketBase</div>
                </a>
              </li>

              <li>
                <a
                  href="/my/settings/profile"
                  class="font-bold flex items-center gap-2"
                  aria-label="Profile"
                >
                  <Icon icon="mdi-user" class="w-5 h-5" />
                  <div>Profile</div>
                </a>
              </li>
              <li>
                <a
                  href="/my/settings/account"
                  class="font-bold flex items-center gap-2"
                  aria-label="Account Settings"
                >
                  <Icon icon="mdi-grid" class="w-5 h-5" />
                  <div>Account</div>
                </a>
              </li>
              <li>
                <a
                  href="/my/settings/security"
                  class="font-bold flex items-center gap-2"
                  aria-label="Security Settings"
                >
                  <Icon icon="mdi-gear" class="w-5 h-5" />
                  <div>Settings</div>
                </a>
              </li>

              <form
                class="w-full flex mt-5"
                method="POST"
                action="/auth/logout"
                on:submit={handleLogout}
                aria-label="Logout"
              >
                <button
                  class="btn w-full group/logoutButton"
                  aria-label="Logout"
                >
                  <div class="flex w-full items-center justify-between">
                    <div class="font-bold">Logout</div>
                    <Icon
                      icon="mdi-logout"
                      class="w-5 h-5 md:group-hover/logoutButton:translate-x-1 transition-all duration-300"
                    />
                  </div>
                </button>
              </form>
            </ul>
          </div>
        {:else}
          <div class="flex items-center text-sm">
            <div>
              <a href="/auth/login" class="btn btn-ghost" aria-label="Log in"
                >Log in</a
              >
            </div>
            <div>
              <a
                href="/auth/register"
                class="btn btn-ghost"
                aria-label="Register">Register</a
              >
            </div>
          </div>
        {/if}
      </div>
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
