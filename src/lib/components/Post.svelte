<script lang="ts">
  export let user
  export let postContent
  export let postDate
</script>

<div class="card bg-base-300 shadow-lg">
  <div class="card-body p-5 gap-0">
    <div class="text-sm text-primary">{postDate}</div>
    <div class="text-lg my-2">{@html postContent}</div>
    <div class="">@{user}</div>
  </div>
</div>
