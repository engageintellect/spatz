<script lang="ts">
  import { invalidateAll } from '$app/navigation'
  import { enhance, applyAction } from '$app/forms'
  import Input from '$lib/components/Input.svelte'
  import { getImageURL } from '$lib/utils'
  import Icon from '@iconify/svelte'

  export let data
  export let form
  let loading: any

  $: loading = false
  const showPreview = (event: any) => {
    const target = event.target
    const files = target.files

    if (files.length > 0) {
      const src = URL.createObjectURL(files[0])
      const preview = document.getElementById(
        'avatar-preview',
      ) as HTMLImageElement
      if (preview) {
        preview.src = src
      }
    }
  }

  const submitUpdateProfile = () => {
    loading = true
    return async ({ result }: any) => {
      switch (result.type) {
        case 'success':
          await invalidateAll()
          break
        case 'error':
          break
        default:
          await applyAction(result)
      }
      loading = false
    }
  }
</script>

<div class="flex flex-col w-full h-full">
  <form
    action="?/updateProfile"
    method="POST"
    class="flex flex-col space-y-2 w-full"
    enctype="multipart/form-data"
    use:enhance={submitUpdateProfile}
  >
    <div class="text-2xl font-medium">Update Profile</div>
    <div class="divider" />
    <div class="form-control w-full max-w-lg">
      <!-- <label for="avatar" class="label font-medium pb-1"> -->
      <!-- <span class="label-text">Profile Picture</span> -->
      <!-- </label> -->
      <label
        for="avatar"
        class="avatar w-32 rounded-full hover:cursor-pointer mb-5"
      >
        <label
          for="avatar"
          class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer z-20"
        >
          <span class="btn btn-circle btn-sm btn-secondary">
            {#if data.user?.avatar}
              <Icon icon="mdi-pencil" class="h-6 w-6" />
            {:else}
              <Icon icon="mdi-plus" class="h-6 w-6" />
            {/if}
          </span>
        </label>
        <div class="w-32 rounded-full border border-primary">
          {#if data.user?.avatar}
            <img
              src={data.user?.avatar
                ? getImageURL(
                    data.user?.collectionId,
                    data.user?.id,
                    data.user?.avatar,
                  )
                : `https://ui-avatars.com/api/?name=${data.user?.email}`}
              alt="User avatar"
              id="avatar-preview"
            />
          {:else}
            <Icon
              icon="mdi-account-circle"
              class="h-full scale-110 w-full rounded-full text-base-100 bg-primary"
            />
            <!-- <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  /> -->
          {/if}
        </div>
      </label>
      <input
        type="file"
        name="avatar"
        id="avatar"
        value=""
        accept="image/*"
        hidden
        on:change={showPreview}
        disabled={loading}
      />
      {#if form?.errors?.avatar}
        {#each form?.errors?.avatar as error}
          <label for="avatar" class="label py-0 pt-1">
            <span class="label-text-alt text-error">
              {error}
            </span>
          </label>
        {/each}
      {/if}
    </div>
    <Input
      id="name"
      value={form?.data?.name ?? data?.user?.name}
      disabled={loading}
      errors={form?.errors?.name}
      placeholder="Name"
    />

    <Input
      id="job_title"
      value={form?.data?.job_title ?? data?.user?.job_title}
      disabled={loading}
      errors={form?.errors?.job_title}
      placeholder="Title"
    />

    <div class="w-full max-w-lg pt-3">
      <button
        class="btn btn-primary w-full max-w-lg"
        type="submit"
        disabled={loading}
      >
        Update Profile
      </button>
    </div>
  </form>
</div>
