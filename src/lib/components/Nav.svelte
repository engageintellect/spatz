<script lang="ts">
  import { pb } from '$lib/pocketbase'
  import Icon from '@iconify/svelte'
  import { getImageURL } from '$lib/utils'
  import { currentUser } from '$lib/stores/user'
  import { selectedTheme } from '$lib/stores/theme'
  import daisyuiColors from 'daisyui/src/theming/themes'
  import { onMount } from 'svelte'
  import { customThemes } from '$lib/custom-themes'
  import { chatMessages } from '$lib/stores/chatMessages'
  import { goto } from '$app/navigation'
  import { navLinks } from '$lib/nav-links'

  export let data

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
    // Clear AI chat messages
    chatMessages.set([])
    localStorage.removeItem('chatMessages')
    goto('/')
  }
</script>

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
          class="dropdown-content dropdown-end rounded-box border-primary border-[0.5px] bg-base-100 z-50 mt-3 h-[50vh] overflow-auto w-72 p-2 shadow-lg"
          aria-label="Theme Selector Menu"
        >
          <li
            class="sticky top-0 theme-controller text-primary-content btn btn-primary btn-sm btn-block justify-start mb-2"
            aria-label={`Current Theme: ${$selectedTheme}`}
          >
            <div class="flex items-center gap-2">
              <Icon icon="mdi-done" class="w-5 h-5" />
              <div class="text-nowrap">
                {$selectedTheme}
              </div>
            </div>
          </li>
          {#each themes.sort() as theme}
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller text-base-content btn btn-ghost btn-sm btn-block justify-start text-nowrap"
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

        <!-- Sidebar content here -->
        <ul
          tabindex="-1"
          class="dropdown-content fomt-semibold menu p-2 shadow bg-base-100 rounded-box w-fit border-[0.5px] border-primary mt-3 z-50"
          aria-label="User Menu"
        >
          <li class="">
            <div class="">
              <a
                href="/my/settings/profile"
                class="flex gap-2"
                aria-label="Profile Settings"
              >
                <div class="btn btn-primary btn-circle avatar">
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
                      class="max-w-12 object-cover rounded-full"
                    />
                  {:else}
                    <Icon
                      icon="mdi-account-circle"
                      class="h-full w-full scale-[110%] transition-scale duration-200 md:hover:scale-[105%] rounded-full text-base-100"
                    />
                  {/if}
                </div>

                <div class="flex flex-col">
                  <div>
                    @{$currentUser?.username}
                  </div>

                  <div class="text-xs font-thin">
                    {$currentUser?.email}
                  </div>
                </div>
              </a>
            </div>
          </li>

          <div class="my-2">
            {#each navLinks as link}
              <li>
                <a href={link.href} aria-label={link.name} class="text-nowrap">
                  <div class="flex gap-2 items-center font-bold">
                    <Icon icon={link.icon} class="w-5 h-5" />
                    <div>{link.name}</div>
                    {#if link.new}
                      <div class="badge badge-sm badge-accent">new</div>
                    {/if}
                  </div>
                </a>
              </li>
            {/each}
          </div>

          <form
            class="w-full flex"
            method="POST"
            action="/auth/logout"
            on:submit={handleLogout}
            aria-label="Logout"
          >
            <button class="btn w-full group/logoutButton" aria-label="Logout">
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
          <a href="/auth/register" class="btn btn-ghost" aria-label="Register"
            >Register</a
          >
        </div>
      </div>
    {/if}
  </div>
</div>
