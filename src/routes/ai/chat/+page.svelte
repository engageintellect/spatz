<script lang="ts">
  import { useChat } from 'ai/svelte'
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'
  import { currentUser } from '$lib/stores/user'
  import { getImageURL } from '$lib/utils'
  import { chatMessages } from '$lib/stores/chatMessages'
  import { get } from 'svelte/store'
  import { PUBLIC_OPENAI_MODEL } from '$env/static/public'
  import robot from '$lib/assets/images/robot14-nobg.png'
  import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte'
  import Icon from '@iconify/svelte'
  import Toast from '$lib/components/Toast.svelte'
  import { toast } from '$lib/stores/toast' // Import the toast store

  let messagesEnd: HTMLElement
  let inputElement: HTMLInputElement
  const {
    input,
    handleSubmit: originalHandleSubmit,
    messages,
    setMessages,
  } = useChat()
  let initialLoadComplete = false

  onMount(() => {
    const savedMessages = JSON.parse(
      localStorage.getItem('chatMessages') || '[]',
    )
    setMessages(savedMessages)
    initialLoadComplete = true
    scrollToBottom()

    // Set focus on the input element for medium or larger screen sizes
    if (window.matchMedia('(min-width: 768px)').matches) {
      inputElement.focus()
    }
  })

  async function handleSubmit(event: any) {
    event.preventDefault()
    await originalHandleSubmit(event)
    chatMessages.set(get(messages))
    scrollToBottom()
  }

  function clearChat() {
    setMessages([]) // Clear the messages state
    chatMessages.set([])
    localStorage.removeItem('chatMessages')
  }

  $: {
    if (initialLoadComplete) {
      chatMessages.set($messages)
      scrollToBottom()
    }
  }

  function scrollToBottom() {
    messagesEnd?.scrollIntoView({ behavior: 'smooth' })
  }

  function copyToClipboard(content: string) {
    navigator.clipboard.writeText(content).then(
      () => {
        toast.set({
          show: true,
          message: 'Message copied to clipboard',
          type: 'success',
        })
        setTimeout(
          () => toast.set({ show: false, message: '', type: '' }),
          2000,
        )
      },
      (err) => console.error('Could not copy text: ', err),
    )
  }
</script>

<section>
  {#if $messages.length < 1}
    <div class="flex flex-col w-full">
      <div
        in:fade={{ delay: 0, duration: 300 }}
        class="flex gap-2 items-center md:mt-0 my-2"
      >
        <Icon icon="simple-icons:openai" class="w-7 h-7" />
        <h1 class="text-2xl font-thin">{PUBLIC_OPENAI_MODEL}</h1>
      </div>
    </div>
  {/if}

  <div class="sticky top-16 bg-base-100 w-full z-10">
    <form class="bg-base-100 py-2 top-0 w-full" on:submit={handleSubmit}>
      <div class="flex gap-2 w-full">
        <input
          placeholder="Enter your query"
          bind:value={$input}
          class="w-full input input-bordered focus:outline-none focus-within:outline-none"
          bind:this={inputElement}
        />
        <button type="submit" class="btn btn-primary">
          <div class="flex gap-2 items-center">
            <Icon icon="mdi-send" class="w-7 h-7" />
          </div>
        </button>
        {#if $messages.length > 0}
          <button
            type="button"
            class="btn btn-error"
            on:click={clearChat}
            in:fade={{ duration: 300 }}
          >
            <div class="flex gap-2 items-center">
              <Icon icon="mdi-delete" class="w-7 h-7" />
            </div>
          </button>
        {/if}
      </div>
    </form>
  </div>

  <div class="py-5 w-full -z-10">
    <div class="w-full flex flex-col gap-5">
      {#each $messages as message}
        <div
          class={`chat ${message.role === 'user' ? 'chat-end' : 'chat-start'}`}
        >
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img
                src={message.role === 'user'
                  ? $currentUser?.avatar
                    ? getImageURL(
                        $currentUser?.collectionId,
                        $currentUser?.id,
                        $currentUser?.avatar,
                      )
                    : `https://ui-avatars.com/api/?name=${$currentUser?.email}`
                  : robot}
                alt={message.role === 'user'
                  ? 'User avatar'
                  : 'Tailwind CSS chat bubble component'}
                class={message.role === 'assistant'
                  ? 'bg-primary scale-x-[-1]'
                  : ''}
              />
            </div>
          </div>
          <div class="chat-header">
            {message.role === 'user'
              ? $currentUser
                ? '@' + $currentUser?.username
                : 'no'
              : '@chatGPT'}
            <time class="text-xs text-neutral-content/50"
              >{new Date().toLocaleTimeString()}</time
            >
          </div>

          <div
            class={`card ${message.role === 'user' ? 'bg-base-300 text-base-content' : 'bg-primary text-primary-content'}`}
          >
            <div class="card-body py-2 px-4">
              {@html message.content}
            </div>
          </div>
          <div class="chat-footer opacity-50">
            <div class="flex items-center gap-2 mt-1">
              <button
                on:click={() => copyToClipboard(message.content)}
                class=""
              >
                <div class="flex items-center gap-1">
                  <Icon icon="mdi-content-copy" class="w-4 h-4" />
                  <div class="text-xs">copy</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div bind:this={messagesEnd}></div>
  </div>
</section>

<div class="flex justify-end">
  <ScrollToTopButton />
</div>

<Toast type={$toast.type} message={$toast.message} show={$toast.show} />
