<script lang="ts">
  import Input from '$lib/components/Input.svelte'
  export let form
</script>

<div class="flex flex-col w-full h-full">
  <div class="w-full">
    <form
      action="?/updatePassword"
      method="POST"
      class="flex flex-col space-y-2 w-full"
    >
      <div class="text-2xl font-medium">Change Password</div>
      <div class="divider" />
      <Input
        id="oldPassword"
        type="password"
        required
        errors={form?.errors?.oldPassword}
        placeholder="Current Password"
      />
      <Input
        id="password"
        type="password"
        required
        errors={form?.errors?.password}
        placeholder="New Password"
      />
      <Input
        id="passwordConfirm"
        type="password"
        required
        errors={form?.errors?.passwordConfirm}
        placeholder="Confirm Password"
      />
      <a
        href="/auth/reset-password"
        class="text-primary hover:cursor-point hover:underline"
      >
        I forgot my password</a
      >
      <div class="w-full max-w-lg pt-3">
        <button type="submit" class="btn btn-primary w-full max-w-lg">
          Update Password
        </button>
      </div>
    </form>
  </div>
</div>
