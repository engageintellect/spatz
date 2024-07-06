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

  function handleLinkClick() {
    const drawerToggle = document.getElementById(
      'primary-drawer',
    ) as HTMLInputElement
    if (drawerToggle) {
      drawerToggle.checked = false
    }
  }

  function handleThemeDrawerLinkClick() {
    const drawerToggle = document.getElementById(
      'theme-drawer',
    ) as HTMLInputElement
    if (drawerToggle) {
      drawerToggle.checked = false
    }
  }
</script>

<div class="drawer drawer-end max-w-2xl mx-auto w-full">
  <input id="primary-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="navbar bg-base-100 w-full">
      <div class="flex-1">
        <a
          href={$currentUser ? '/' : '/'}
          class="btn btn-primary text-xl"
          aria-label="Home">spatz</a
        >
      </div>

      <div class="flex gap-2 items-center">
        {#if $currentUser}
          <button name="theme-toggle" aria-label="Open theme drawer">
            <label
              for="theme-drawer"
              class="font-normal lowercase btn btn-ghost text-base-content"
            >
              <Icon icon="gridicons-themes" class="h-6 w-6" />
            </label>
          </button>

          <label
            for="primary-drawer"
            aria-label="open sidebar"
            class="flex items-center"
          >
            <div class="btn btn-primary btn-circle avatar">
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
          </label>
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
  <div class="drawer-side">
    <label
      for="primary-drawer"
      aria-label="close sidebar"
      class="drawer-overlay"
    ></label>
    <ul class="menu bg-base-100 min-h-full w-fit max-w-3/4 p-2">
      <!-- Sidebar content here -->

      <li class="">
        <div
          class="bg-primary hover:bg-primary text-primary-content w-full truncate"
        >
          <a
            href="/my/settings/profile"
            class="truncate font-bold"
            aria-label="Profile Settings"
            on:click={handleLinkClick}
          >
            {$currentUser?.username}
          </a>
        </div>
      </li>

      <div class="my-5">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              aria-label={link.name}
              class="text-nowrap"
              on:click={handleLinkClick}
            >
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
</div>

<!-- Theme Drawer -->
<div class="drawer max-w-2xl mx-auto w-full">
  <input id="theme-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Hidden content -->
  </div>
  <div class="drawer-side">
    <label
      for="theme-drawer"
      aria-label="close theme sidebar"
      class="drawer-overlay"
    ></label>
    <ul class="menu bg-base-100 min-h-full w-2/3">
      <li
        class="z-50 sticky top-0 w-full bg-base-100 py-2"
        aria-label={`Current Theme: ${$selectedTheme}`}
      >
        <div class="flex items-center gap-2 btn btn-primary">
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
</div>
