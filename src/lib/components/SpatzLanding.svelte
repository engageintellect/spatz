<script lang="ts">
  import Icon from '@iconify/svelte'
</script>

<div class="">
  <div class="hero bg-base-100">
    <div class="hero-content text-center">
      <div class="max-w-sm">
        <h1 class="text-9xl font-extrabold text-primary drop-shadow-lg">
          spatz
        </h1>
        <p class="py-5">
          The best way to start your next <a
            href="https://kit.svelte.dev"
            class="text-primary underline">Svelte</a
          >
          project, if you care about building
          <span class="text-primary italic">fast</span>...
        </p>
        <div class="max-w-md flex gap-2">
          <a
            href="/auth/register"
            class="btn btn-primary flex group items-center justify-between flex-1 group/registerButton"
          >
            <div>let's build</div>
            <Icon
              icon="material-symbols:rocket"
              class="w-7 h-7 md:group-hover/registerButton:rotate-45 transition-transform duration-300"
            />
          </a>
          <a
            href="/auth/login"
            class="btn btn-primary btn-outline flex-1 flex items-cetner justify-between group/loginButton"
          >
            <div>login</div>
            <Icon
              icon="material-symbols:login"
              class="w-7 h-7 md:group-hover/loginButton:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="mockup-browser border border-base-300 shadow-xl mt-5">
    <div class="mockup-browser-toolbar">
      <div class="bg-base-300 px-2 py-1 w-full card">
        <div class="flex items-center gap-1">
          <Icon icon="mdi-search" class="w-5 h-5" />
          spatz.engage-dev.com
        </div>
      </div>
    </div>

    <div class="overflow-auto">
      <div
        class="flex overflow-auto justify-center h-64 sm:h-80 transition-all duration-300 items-center border-t border-base-300 bg-gradient-to-b from-primary to-primary/0 px-4 gap-2"
      >
        <Icon
          icon="teenyicons-svelte-solid"
          class="w-52 h-52 text-base-100 drop-shadow"
        />
        <Icon
          icon="simple-icons:pocketbase"
          class="w-52 h-52 text-base-100 drop-shadow"
        />
        <Icon
          icon="simple-icons:vercel"
          class="w-52 h-52 text-base-100 drop-shadow"
        />
        <Icon
          icon="simple-icons:tailwindcss"
          class="w-52 h-52 text-base-100 drop-shadow"
        />
        <Icon
          icon="simple-icons:zod"
          class="w-52 h-52 text-base-100 drop-shadow"
        />
      </div>
    </div>
  </div>
</div>
