<script lang="ts">
  import Icon from '@iconify/svelte'
  export let user
  export let postContent
  export let postDate
  export let avatar

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
        <div class="font-thin text-primary">@{user}</div>
        <div class="">{@html postContent}</div>
      </div>
    </div>
  </div>
</div>
