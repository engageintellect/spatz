<script lang="ts">
  export let user
  export let postContent
  export let postDate
</script>

<!-- <div class="border-t-[0.5px] border-base-content/50 py-2">
  <div class="">
    <div class="text-sm text-primary">{postDate}</div>
    <div class="text-lg my-2">{@html postContent}</div>
    <div class="">@{user}</div>
  </div>
</div> -->

<div class="card shadow-lg hover:border-primary border-[0.5px] border-base-300">
  <div class="card-body p-5 transition-none">
    <div class="text-sm text-primary">{postDate}</div>
    <div class=" my-2">{@html postContent}</div>
    <div class="text-sm">@{user}</div>
  </div>
</div>
