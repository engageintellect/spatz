<script lang="ts">
  export let value = ''
  export let placeholder = ''
  export let id: any
  export let disabled = false
  export let required = false
  export let errors: any
</script>

<div class="form-control w-full mb-2">
  <textarea
    autofocus
    class="textarea text-lg resize-none textarea-bordered textarea-lg bg-base-100 w-full focus-within:outline-none shadow-inner focus:shadow-inner"
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
