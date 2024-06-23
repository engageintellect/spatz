<script lang="ts">
  import Post from '$lib/components/Post.svelte'
  import { slide, fade } from 'svelte/transition'
  import { applyAction, enhance } from '$app/forms'
  import TextArea from '$lib/components/TextArea.svelte'
  export let form
  let loading = false
  import Icon from '@iconify/svelte'

  export let data

  let posts: App.Post[] = data.posts
  let users: App.User[] = data.users

  // Create a map of user IDs to usernames
  let userMap = new Map<string, string>()
  users.forEach((user) => {
    userMap.set(user.id, user.username)
  })

  // Map posts to include the username
  let postsWithUsernames = posts.map((post) => {
    return {
      ...post,
      username: userMap.get(post.author) || 'Unknown',
    }
  })

  const handleSuccess = async (result: any) => {
    if (result.result.type === 'success') {
      await applyAction(result)
      // TODO: There must be a better way to refresh the page
      window.location.reload()
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
        <div in:slide={{ duration: 1000 }} class="flex flex-col gap-2">
          {#if postsWithUsernames.length > 0}
            {#each postsWithUsernames as post}
              <Post
                user={post.username}
                postContent={post.content}
                postDate={post.created}
              />
            {/each}
          {:else}
            <div class="alert alert-warning">
              <div>No posts yet.</div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
