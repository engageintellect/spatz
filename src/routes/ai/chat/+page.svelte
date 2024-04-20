<script lang="ts">
  import { useChat } from 'ai/svelte'
  const { input, handleSubmit, messages } = useChat()
  import Icon from '@iconify/svelte'
  import { fade, slide } from 'svelte/transition'
</script>

<section class="">
  {#if $messages.length < 1}
    <div
      transition:slide={{ delay: 0, duration: 500 }}
      class="flex flex-col w-full"
    >
      <div
        transition:fade={{ delay: 0, duration: 200 }}
        class="flex gap-2 items-center mt-5 md:mt-0"
      >
        <Icon icon="simple-icons:openai" class="w-10 h-10" />
        <h1 class="text-3xl">chat gpt</h1>
      </div>
      <p class="pb-5">Enter your query below...</p>
    </div>
  {/if}

  <div class="sticky top-14 md:top-0 bg-base-100 w-full">
    <form class="bg-base-100 py-2 top-0 w-full" on:submit={handleSubmit}>
      <div class="flex gap-2 w-full">
        <!-- TODO: This can be cleaner -->
        <!-- svelte-ignore a11y-autofocus -->
        <input
          autofocus
          bind:value={$input}
          class="w-full input input-bordered focus:outline-none"
        />
        <button type="submit" class="btn btn-primary">
          <div class="flex gap-2 items-center">
            <Icon icon="mdi-send" class="w-7 h-7" />
          </div>
        </button>
      </div>
    </form>
  </div>

  <div class="py-5 w-full">
    <div class="w-full flex flex-col gap-2">
      {#each $messages as message}
        {#if message.role === 'user'}
          <div>
            <span class="text-primary">{message.role}</span>: {@html message.content}
          </div>
        {:else}
          <div>
            <span class="text-primary">{message.role}</span>: {@html message.content}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>
