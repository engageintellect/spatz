<script lang="ts">
  import { currentUser } from '$lib/stores/user'
  import Icon from '@iconify/svelte'
  import spatzImg from '$lib/assets/images/spatz.png'
</script>

<div class="">
  {#if !$currentUser}
    <div class="hero bg-base-100">
      <div class="hero-content text-center">
        <div class="max-w-sm">
          <h1 class="text-9xl font-extrabold text-primary drop-shadow-lg">
            spatz
          </h1>
          <p class="py-5">
            The best way to start your next <a
              href="https://kit.svelte.dev"
              class="text-primary underline">Sveltekit</a
            >
            project, if you care about building
            <span class="text-primary italic">fast</span>...
          </p>
          <div class="max-w-md flex gap-2">
            <a href="/register" class="btn btn-primary flex-1">let's build</a>
            <a href="/login" class="btn btn-primary btn-outline flex-1">login</a
            >
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
          class="flex overflow-auto justify-center items-center border-t border-base-300 bg-primary px-4 gap-2"
        >
          <Icon
            icon="teenyicons-svelte-solid"
            class="w-52 h-52 text-base-300"
          />
          <Icon
            icon="simple-icons:pocketbase"
            class="w-52 h-52 text-base-300"
          />
          <Icon icon="simple-icons:vercel" class="w-52 h-52 text-base-300" />
          <Icon
            icon="simple-icons:tailwindcss"
            class="w-52 h-52 text-base-300"
          />
          <Icon icon="simple-icons:zod" class="w-52 h-52 text-base-300" />
          <!-- <img
            src={spatzImg}
            alt="avatar"
            class="w-full object-cover h-72 drop-shadow-lg"
          /> -->
        </div>
      </div>
    </div>
  {:else}
    <div class="flex flex-col gap-5">
      <div>
        <h1 class="text-7xl">
          <div
            class="tracking-tight text-primary font-extrabold flex items-center"
          >
            <div>spatz</div>
            <div class="font-thin text-neutral-content tracking-tighter">
              stack
            </div>
          </div>
        </h1>
        <p>
          Visit <a
            class="text-primary underline"
            href="https://github.com/engageintellect/pocketbase-sveltekit-auth/tree/main/docs"
            >docs</a
          > to read the documentation
        </p>
      </div>

      <div class="mt-5">
        <h1 class="text-3xl">About</h1>
        <p>
          <strong>Let's face it</strong>, we'd all like to build
          <span class="text-primary uppercase italic">fast</span>, and there are
          some things we need to implement 90% of time which are a hassle to set
          up over and over again.
        </p>
        <ul class="list-disc pl-10 pt-2">
          <li>User Authentication</li>
          <li>Databases & Content Management</li>
          <li>Themes & Styling</li>
          <li>Form Validation</li>
        </ul>
      </div>
      <p>
        <span class="text-primary font-extrabold">spatz</span> is ready OTB to help
        you build your next great idea.
      </p>
      <div>
        <h1 class="text-3xl">Technologies</h1>
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <tbody>
              <!-- row 1 -->
              <tr>
                <td
                  ><a
                    class="text-primary underline"
                    href="https://kit.svelte.dev">Sveltekit</a
                  ></td
                >
                <td>
                  Futuristic web framework for building blazing fast web apps.
                </td>
                <!-- row 2 -->
              </tr><tr>
                <td
                  ><a
                    class="text-primary underline"
                    href="https://pocketbase.io">Pocketbase</a
                  ></td
                >
                <td>Self-contained Database and User Auth.</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <td
                  ><a class="text-primary underline" href="https://openai.com"
                    >AI</a
                  ></td
                >

                <td
                  ><a
                    href="https://sdk.vercel.ai/docs/guides/frameworks/sveltekit"
                    class="text-primary underline">Vercel AI SDK</a
                  > with streaming API.</td
                >
              </tr>

              <!-- row 4 -->
              <tr>
                <td
                  ><a
                    class="text-primary underline"
                    href="https://tailwindcss.com">TailwindCSS</a
                  ></td
                >

                <td
                  >Utility-first CSS styling with <a
                    href="https://daisyui.com"
                    class="text-primary underline">DaisyUI</a
                  >.</td
                >
              </tr>
              <!-- row 5 -->
              <tr>
                <td
                  ><a class="text-primary underline" href="https://zod.dev"
                    >Zod</a
                  ></td
                >

                <td
                  >TypeScript-first schema validation with static type inference
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h1 class="text-3xl mb-5">Getting Started</h1>
        <h1 class="text-xl">Sveltekit Config</h1>
        <p>Run the below commands to get started.</p>

        <div class="mockup-code">
          <pre data-prefix="$"><code
              >git clone https://github.com/engageintellect/pocketbase-sveltekit-auth</code
            ></pre>
          <pre data-prefix="$"><code>cd pocketbase-sveltekit-auth</code></pre>
          <pre data-prefix="$"><code
              >touch 'PUBLIC_POCKETBASE_URL=http://localhost:8090' > .env.local</code
            ></pre>
          <pre data-prefix="$"><code>pnpm i && pnpm run dev</code></pre>
        </div>
      </div>

      <div>
        <h1 class="text-xl">Pocketbase Config</h1>
        <p>Run the below commands to get started.</p>

        <div class="mockup-code">
          <pre data-prefix="$"><code
              >wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.9/pocketbase_0.22.9_linux_amd64.zip</code
            ></pre>
          <pre data-prefix="$"><code
              >unzip pocketbase_0.22.9_linux_amd64.zip</code
            ></pre>
          <pre data-prefix="$"><code
              >./pocketbase serve --http="0.0.0.0:8090"</code
            ></pre>
        </div>
      </div>

      <div class="mb-10">
        <h1 class="text-3xl">Contribute</h1>
        <p>Come help make this template even better, sent a PR to:</p>

        <a
          href="https://github.com/engageintellect/pocketbase-sveltekit-auth"
          class="btn btn-primary my-2"
        >
          <div class="flex items-center gap-2">
            Github

            <Icon icon="mdi-github" class="w-7 h-7" />
          </div>
        </a>

        <a
          href="https://github.com/new?template_name=pocketbase-sveltekit-auth&template_owner=engageintellect"
          class="btn my-2"
        >
          <div class="flex items-center gap-2">
            Use Template

            <Icon icon="mdi-github" class="w-7 h-7" />
          </div>
        </a>
      </div>
    </div>
  {/if}
</div>
