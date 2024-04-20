<script lang="ts">
  import { page } from '$app/stores'
  const navigation = [
    {
      title: 'chat',
      href: '/ai/chat',
    },

    {
      title: 'a',
      href: '/ai/a',
    },
    {
      title: 'b',
      href: '/ai/b',
    },
    {
      title: 'c',
      href: '/ai/c',
    },
  ]
</script>

<div class=" w-full h-full bg-base-100">
  <a href="/ai" class="text-7xl">ai</a>
</div>
<div class="divider bg-base-100" />
<div class="flex w-full h-full">
  <ul class="sticky p-0 top-0 menu bg-base-100 h-full w-40 rounded-box">
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
