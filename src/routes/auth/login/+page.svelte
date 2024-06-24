<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import Input from '$lib/components/Input.svelte'
  export let form
  let loading = false
  import Icon from '@iconify/svelte'
</script>

<form
  action="?/login"
  method="POST"
  class="card max-w-sm sm:mt-10 mx-auto transition-all duration-300 ease-in-out"
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
  <div class="mb-2">
    <h1 class="text-7xl">login</h1>
    <p class="pt-2">
      Or <a href="/auth/register" class="underline text-primary">register</a> to
      create an account.
    </p>
  </div>

  <div class="form-control gap-0 mb-4">
    <Input
      autoFocus={true}
      type="email"
      id="email"
      value={form?.data?.email ?? ''}
      errors={form?.errors?.email}
      placeholder={'Email'}
    />
    <Input
      autoFocus={false}
      type="password"
      id="password"
      value={form?.data?.password ?? ''}
      errors={form?.errors?.password}
      disabled={loading}
      placeholder={'Password'}
    />
    <div class="w-full max-w-lg">
      <a
        href="/auth/reset-password"
        class="font-medium text-primary hover:cursor-pointer hover:underline"
      >
        Forgot Password?</a
      >
    </div>

    <button class="btn btn-primary group/loginButton">
      {#if loading}
        <span class="loading loading-spinner loading-md"></span>
      {:else}
        login <Icon
          icon="mdi-login"
          class="w-5 h-5 md:group-hover/loginButton:translate-x-1 transition-all duration-300"
        />
      {/if}
    </button>
  </div>
</form>
