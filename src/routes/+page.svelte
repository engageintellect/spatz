<script lang="ts">
  import { currentUser } from '$lib/stores/user'
  import SpatzMarketing from '$lib/components/SpatzMarketing.svelte'
  import SpatzLanding from '$lib/components/SpatzLanding.svelte'
</script>

<!-- Home page. Dynamically choose which content 
  to show based on whether the user is logged in or not. -->

<div>
  <!-- If user is NOT logged in, show the landing content -->
  {#if !$currentUser}
    <SpatzLanding />
    <!-- If user is logged in, show the marketing content -->
  {:else}
    <SpatzMarketing />
  {/if}
</div>
