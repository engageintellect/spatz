<script lang="ts">
  import { page } from '$app/stores'
  const navigation = [
    {
      title: 'Profile',
      href: '/my/settings/profile',
    },
    {
      title: 'Account',
      href: '/my/settings/account',
    },
    {
      title: 'Security',
      href: '/my/settings/security',
    },
  ]
</script>

<div class="w-full h-full">
  <div class="text-7xl">settings</div>
  <div class="divider" />
</div>
<div class="flex w-full h-full">
  <ul class="menu bg-base-100 gap-2 h-full w-40 rounded-box">
    {#each navigation as navItem}
      <li>
        <a
          href={navItem.href}
          class="text-lg font-medium {$page.url.pathname === navItem.href
            ? 'active hover:bg-neutral'
            : ''}">{navItem.title}</a
        >
      </li>
    {/each}
  </ul>
  <div class="w-full max-w-lg px-2">
    <slot />
  </div>
</div>
