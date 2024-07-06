<script lang="ts">
  import Icon from '@iconify/svelte'
</script>

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
