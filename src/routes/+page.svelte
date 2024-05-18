<script lang="ts">
  import { PUBLIC_DOCS_URL } from '$env/static/public'
  import { currentUser } from '$lib/stores/user'
  import Icon from '@iconify/svelte'
  import { fade } from 'svelte/transition'
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

    <div
      transition:fade={{ duration: 500 }}
      class="mockup-browser border border-base-300 shadow-xl mt-5"
    >
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
        </div>
      </div>
    </div>
  {:else}
    <div class="flex flex-col gap-10">
      <div>
        <h1 class="text-7xl">
          <div
            class="tracking-tight text-primary font-extrabold flex items-center"
          >
            <div>spatz</div>
            <div class="font-thin text-primary/[33%] tracking-tighter">
              stack
            </div>
          </div>
        </h1>
        <p class="mt-2">
          visit <a class="text-primary underline" href={PUBLIC_DOCS_URL}>docs</a
          > for more info
        </p>

        <div class="w-full flex gap-2 mt-2 max-w-md">
          <a
            href="https://github.com/new?template_name=spatz&template_owner=engageintellect"
            class="btn btn-primary my-2 flex-1"
          >
            <div class="flex items-center gap-2">
              Use Template

              <Icon icon="mdi-download" class="w-7 h-7" />
            </div>
          </a>

          <a
            href="https://github.com/engageintellect/spatz"
            class="btn my-2 flex-1"
          >
            <div class="flex items-center gap-2">
              Github

              <Icon icon="mdi-github" class="w-7 h-7" />
            </div>
          </a>
        </div>
      </div>

      <div class="">
        <h1 class="text-3xl text-primary font-thin">About</h1>
        <p>
          <strong>Let's face it</strong>, we'd all like to build
          <span class="font-bold uppercase italic">fast</span>, and there are
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
        <span class="text-primary underline">spatz</span> is ready OTB to help you
        build your next great idea.
      </p>
      <div>
        <h1 class="text-3xl text-primary font-thin">Technologies</h1>
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
                  >
                  with streaming
                  <a href="https://openai.com" class="text-primary underline"
                    >OpenAI</a
                  > API.</td
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
        <h1 class="text-3xl mb-5 text-primary font-thin">Getting Started</h1>
        <a href={PUBLIC_DOCS_URL} class="btn btn-primary">
          <div class="flex items-center gap-2">
            <div>spatz docs</div>
            <Icon icon="mdi-github" class="w-7 h-7" />
          </div>
        </a>
        <h1 class="text-xl mt-5">Sveltekit Config</h1>
        <p>Run the below commands to get started.</p>

        <div class="mockup-code">
          <pre data-prefix="$"><code
              >git clone https://github.com/engageintellect/spatz</code
            ></pre>
          <pre data-prefix="$"><code>cd spatz</code></pre>
          <pre data-prefix="$"><code
              >touch 'PUBLIC_POCKETBASE_URL=http://localhost:8090' > .env.local</code
            ></pre>

          <pre data-prefix="$"><code
              >touch 'PUBLIC_REPOSITORY_URL=https://github.com/engageintellect/spatz' >> .env.local</code
            ></pre>
          <pre data-prefix="$"><code
              >touch 'OPENAI_API_KEY=YOUR API KEY' >> .env.local</code
            ></pre>
          <pre data-prefix="$"><code>pnpm i && pnpm run dev --host</code></pre>
        </div>
      </div>

      <div>
        <div>
          <h1 class="text-xl">Pocketbase Config</h1>
          <p>1. Run the below commands to get started.</p>

          <div class="mockup-code">
            <pre data-prefix="$"><code
                >wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.9/pocketbase_0.22.9_linux_amd64.zip</code
              ></pre>
            <pre data-prefix="$"><code
                >unzip pocketbase_0.22.9_linux_amd64.zip</code
              ></pre>
          </div>
        </div>

        <div>
          <p>2. Run the below commands to get started.</p>

          <div class="mockup-code">
            <pre data-prefix="$"><code
                >./pocketbase serve --http="0.0.0.0:8090"</code
              ></pre>
          </div>
        </div>

        <p>
          2. Log into the Pocketbase Admin UI <a
            class="text-primary underline"
            href="http://localhost:8090/_/">http://localhost:8090/_/</a
          >.
        </p>
        <p>
          3. Go to settings > Import collections, then paste in the contents of
          ./pocketbase/
        </p>

        <p>
          4. Visit app in browser <a
            class="text-primary underline"
            href="http://localhost:5173">http://localhost:5173</a
          >
        </p>
      </div>

      <div class="mb-10">
        <div class="mb-5">
          <h1 class="text-3xl text-primary font-thin">Contribute</h1>
          <p>Come help make this template even better, sent a PR to:</p>
        </div>

        <a
          href="https://github.com/engageintellect/spatz"
          class="btn btn-primary my-2 flex-1"
        >
          <div class="flex items-center gap-2">
            Github

            <Icon icon="mdi-github" class="w-7 h-7" />
          </div>
        </a>
      </div>
    </div>
  {/if}
</div>
