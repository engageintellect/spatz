<script lang="ts">
  import { useChat } from 'ai/svelte'
  const { input, handleSubmit, messages } = useChat()
  import Icon from '@iconify/svelte'
  import { fade, slide } from 'svelte/transition'
  import { onMount } from 'svelte'
  let messagesEnd: HTMLElement
  import { currentUser } from '$lib/stores/user'
  import { getImageURL } from '$lib/utils'
  import robot from '$lib/assets/images/robot14-nobg.png'

  onMount(() => {
    scrollToBottom()
  })

  $: $messages, scrollToBottom()

  function scrollToBottom() {
    if (messagesEnd) {
      messagesEnd.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<section class="">
  {#if $messages.length < 1}
    <div
      transition:slide={{ delay: 0, duration: 500 }}
      class="flex flex-col w-full"
    >
      <div
        transition:fade={{ delay: 0, duration: 300 }}
        class="flex gap-2 items-center mt-5 md:mt-0 mb-2"
      >
        <Icon icon="simple-icons:openai" class="w-10 h-10" />
        <h1 class="text-3xl">gpt-3.5-turbo</h1>
      </div>
    </div>
  {/if}

  <div class="sticky top-14 md:top-0 bg-base-100 w-full z-10">
    <form class="bg-base-100 py-2 top-0 w-full" on:submit={handleSubmit}>
      <div class="flex gap-2 w-full">
        <!-- TODO: This can be cleaner -->
        <!-- svelte-ignore a11y-autofocus -->
        <input
          placeholder="Enter your query"
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

  <div class="py-5 w-full -z-10">
    <div class="w-full flex flex-col gap-5">
      {#each $messages as message}
        {#if message.role === 'user'}
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
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
              </div>
            </div>
            <div class="chat-header">
              {$currentUser ? $currentUser?.username : 'no'}
              <time class="text-xs opacity-50">12:46</time>
            </div>
            <div class="card bg-base-300 text-base-content">
              <div class="card-body py-2 px-4">
                {@html message.content}
              </div>
            </div>
            <div class="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        {:else}
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={robot}
                  class="bg-primary scale-x-[-1]"
                />
              </div>
            </div>
            <div class="chat-header">
              {message.role ? 'chatGPT' : 'bot'}
              <time class="text-xs opacity-50">12:45</time>
            </div>
            <div class="card bg-primary text-primary-content">
              <div class="card-body py-2 px-4">
                {@html message.content}
              </div>
            </div>
            <div class="chat-footer opacity-50">Delivered</div>
          </div>
        {/if}
      {/each}
    </div>
    <div bind:this={messagesEnd}></div>
  </div>
</section>
