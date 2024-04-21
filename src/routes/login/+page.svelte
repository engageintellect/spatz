<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { goto } from '$app/navigation'
  import Input from '$lib/components/Input.svelte'
  import { redirect } from '@sveltejs/kit'
  export let form
  let loading = false
  import { fade } from 'svelte/transition'
</script>

<form
  action="?/login"
  method="POST"
  class="card sm:max-w-md sm:mt-10 mx-auto"
  use:enhance={() => {
    return async ({ result }) => {
      if (result.type === 'redirect') {
        loading = true
        await applyAction(result)
      } else {
        await applyAction(result)
      }
    }
  }}
>
  <div class="mb-5">
    <h1 class="text-7xl">login</h1>
    <p class="pt-2">
      Or <a href="/register" class="underline text-primary">register</a> to create
      an account.
    </p>
  </div>

  <div class="form-control gap-0 mb-4">
    <Input
      type="email"
      id="email"
      value={form?.data?.email ?? ''}
      errors={form?.errors?.email}
      placeholder={'Email'}
    />
    <Input
      type="password"
      id="password"
      value={form?.data?.password ?? ''}
      errors={form?.errors?.password}
      disabled={loading}
      placeholder={'Password'}
    />
    <div class="w-full max-w-lg">
      <a
        href="/reset-password"
        class="font-medium text-primary hover:cursor-pointer hover:underline"
      >
        Forgot Password?</a
      >
    </div>

    <button class="btn btn-primary">
      {#if loading}
        <span class="loading loading-spinner loading-md"></span>
      {:else}
        login
      {/if}
    </button>
  </div>
</form>
