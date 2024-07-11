<script lang="ts">
  import { enhance } from '$app/forms'
  import Icon from '@iconify/svelte'
  export let postAuthor
  export let postContent
  export let postDate
  export let avatar
  export let likes
  export let id
  export let currentUser

  let loading = false

  import { formatFriendlyDate, timeSince } from '$lib/utils'
</script>

<div
  class="card shadow-lg hover:border-primary border-[0.5px] border-base-300 md:hover:scale-[101%] transition-all duration-300 cursor-pointer"
>
  <div class="card-body p-5 transition-none">
    <div class="flex items-center">
      <div
        class={`text-xs ${timeSince(formatFriendlyDate(postDate)) === 'just now' ? 'text-primary' : 'text-base-content/50'}`}
      >
        {timeSince(formatFriendlyDate(postDate))}
      </div>
      <Icon icon="ph:dot" class="w-5 h-5" />
      <div class="text-xs text-base-content/50">
        {formatFriendlyDate(postDate)}
      </div>
    </div>

    <div class="flex items-start gap-2">
      <div class="avatar">
        <div class="w-12 rounded-full border-2 border-primary shadow">
          <img src={avatar} class=" shadow-inner" alt="user avatar" />
        </div>
      </div>
      <div class="w-full">
        <div class="font-thin text-primary">@{postAuthor}</div>
        <div class="font-thin">{@html postContent}</div>

        <div class="flex items-center gap-5">
          <div class="flex items-center gap-1 mt-2">
            <form
              use:enhance={() => {
                loading = true
                return async ({ update }) => {
                  await update()
                  loading = false
                }
              }}
              action="?/likePost"
              method="POST"
            >
              <input type="hidden" name="postId" value={id} />
              <input
                type="hidden"
                name="currentUserId"
                value={currentUser.id}
                disabled={loading}
              />
              <button type="submit" class="flex items-center">
                <Icon
                  icon={likes.includes(currentUser.id)
                    ? 'ph:heart-fill'
                    : 'ph:heart'}
                  class={`w-5 h-5 text-error ${loading ? 'animate-bounce' : ''}`}
                />
                <span class="sr-only">Like</span>
              </button>
            </form>
            <div class="font-thin">{likes.length ?? 0}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
