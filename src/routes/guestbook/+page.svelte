<script lang="ts">
  import Post from '$lib/components/Post.svelte'
  import { slide, fade } from 'svelte/transition'
  import { applyAction, enhance } from '$app/forms'
  import TextArea from '$lib/components/TextArea.svelte'
  export let form
  let loading = false
  import Icon from '@iconify/svelte'

  export let data
  export let posts: any = []

  const fetchData = async () => {
    const res = await fetch('/api/getPosts')
    const posts = await res.json()
    return posts
  }

  let formElement: HTMLFormElement

  const handleSuccess = async (result: any) => {
    if (result.result.type === 'success') {
      await applyAction(result)
      posts = await fetchData()
      formElement.reset()
      const textareaElement = formElement.querySelector('textarea')
      if (textareaElement instanceof HTMLTextAreaElement) {
        textareaElement.focus()
      }
    } else {
      await applyAction(result)
    }
  }
</script>

<div class="max-w-md mx-auto w-full transition-all duration-300">
  <div class="">
    <h1 class="text-7xl">guestbook</h1>
  </div>

  <div class="flex flex-col gap-5 my-2">
    <form
      bind:this={formElement}
      action="?/createPost"
      method="POST"
      class="w-full"
      use:enhance={() => {
        return handleSuccess
      }}
    >
      <div class="form-control gap-0">
        <div>sign the guestbook</div>
        <input type="hidden" name="author" value={data?.user?.id} />
        <TextArea
          id="content"
          value={form?.data?.content ?? ''}
          errors={form?.errors?.content}
          disabled={loading}
          placeholder={''}
        />

        <button class="btn btn-primary group/submitButton">
          {#if loading}
            <span class="loading loading-spinner loading-md"></span>
          {:else}
            send <Icon
              icon="mdi-send"
              class="w-5 h-5 md:group-hover/submitButton:translate-x-1 transition-all duration-300"
            />
          {/if}
        </button>
      </div>
    </form>

    <div class="w-full">
      <div class="">
        <div class="text-3xl">POSTS</div>
        <div in:slide={{ duration: 500 }} class="flex flex-col gap-2">
          {#if posts.length === 0}
            {#each data.posts as post}
              <Post
                user={post.username}
                postContent={post.content}
                postDate={post.created}
              />
            {/each}
          {/if}
          {#if posts.length > 0}
            {#each posts as post}
              <Post
                user={post.username}
                postContent={post.content}
                postDate={post.created}
              />
            {/each}
          {:else}
            <div class="alert">
              <div>No posts yet.</div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
