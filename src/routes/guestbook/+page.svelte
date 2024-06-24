<script lang="ts">
  import Post from '$lib/components/Post.svelte'
  import { slide, fade } from 'svelte/transition'
  import { enhance } from '$app/forms'
  import TextArea from '$lib/components/TextArea.svelte'
  export let form
  let loading = false
  import Icon from '@iconify/svelte'
  import { invalidateAll } from '$app/navigation'
  import { currentUser } from '$lib/stores/user.js'
  import { getImageURL } from '$lib/utils'

  export let data
  $: currentUser.set(data.user)
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
        invalidateAll()
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

        <button class="btn text-lg btn-primary group/submitButton">
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
        <div in:fade={{ duration: 700 }} class="flex flex-col gap-2">
          <!-- {JSON.stringify(data.posts)} -->
          {#if data.posts.length > 0}
            {#each data.posts as post}
              <!-- {JSON.stringify(post)} -->
              <!-- {JSON.stringify(post.avatar)} -->
              <Post
                avatar={post?.avatar
                  ? getImageURL(
                      $currentUser?.collectionId,
                      post?.author,
                      post?.avatar,
                    )
                  : `https://ui-avatars.com/api/?name=${post?.username}`}
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
