<script lang="ts">
  export let value = ''
  export let placeholder = ''
  export let id: any
  export let type = 'text'
  export let disabled = false
  export let required = false
  export let errors: any
</script>

<div class="form-control w-full mb-2">
  <!-- <label for={id} class="label font-medium pb-1"> -->
  <!-- <span class="label-text">{label}</span> -->
  <!-- </label> -->
  <input
    class={type === 'file'
      ? 'file-input file-input-bordered w-full'
      : 'input input-bordered w-full'}
    {type}
    {placeholder}
    {required}
    {disabled}
    {id}
    name={id}
    {value}
  />
  {#if errors}
    {#each errors as error}
      <label for={id} class="label py-0 pt-1">
        <span class="label-text-alt text-error">
          {error}
        </span>
      </label>
    {/each}
  {/if}
</div>
