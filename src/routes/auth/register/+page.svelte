<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import Input from '$lib/components/Input.svelte'
  import Icon from '@iconify/svelte'
  export let form
  let loading = false
  import { fade } from 'svelte/transition'
</script>

<form
  action="?/register"
  method="POST"
  class="card sm:max-w-md sm:mt-10 mx-auto transition-all duration-300 ease-in-out"
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
    <h1 class="text-7xl">register</h1>
    <p class=" pt-2">
      Or <a href="/auth/login" class="underline text-primary">login</a> if you have
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

    <Input
      type="password"
      id="passwordConfirm"
      value={form?.data?.password ?? ''}
      errors={form?.errors?.password}
      disabled={loading}
      placeholder={'Confirm Password'}
    />

    <div class="alert border border-primary mb-2 text-sm flex">
      <Icon icon="material-symbols:encrypted" class="w-10 h-10 text-primary" />
      <div class="text-left">
        Your password will be encrypted for your safety, it will not be readable
        by anyone.
      </div>
    </div>
    <button class="btn btn-primary">
      {#if loading}
        <span class="loading loading-spinner loading-md"></span>
      {:else}
        register
      {/if}
    </button>
  </div>
</form>
