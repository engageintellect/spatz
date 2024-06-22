<script lang="ts">
  export let form
  import { fade } from 'svelte/transition'
</script>

<form
  action="?/resetPassword"
  method="POST"
  class="card sm:max-w-md sm:mt-10 mx-auto transition-all duration-300 ease-in-out"
>
  <div class="mb-5">
    <h1 class="text-7xl">reset password</h1>

    <p class="pt-2">Request a password reset link to be e-mailed to you.</p>
  </div>
  <div class="form-control gap-0 mb-4">
    <input
      type="email"
      name="email"
      class="input input-bordered w-full"
      placeholder="Email"
    />
  </div>
  <div class="w-full">
    <button type="submit" class="btn btn-primary w-full"
      >Request Password Reset</button
    >
  </div>

  {#if form?.success}
    <div class="alert alert-success my-5">
      <div class="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-7 w-7 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          /></svg
        >
        <span>An email has been sent to reset your password!</span>
      </div>
    </div>
  {/if}
</form>
