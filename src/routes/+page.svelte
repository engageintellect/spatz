<script lang="ts">
  import { PUBLIC_DOCS_URL } from '$env/static/public'
  import { currentUser } from '$lib/stores/user'
  import Icon from '@iconify/svelte'
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

        <div class="w-full flex gap-2 mt-2 w-full">
          <a
            href="https://github.com/new?template_name=spatz&template_owner=engageintellect"
            class="btn btn-primary my-2 flex-1"
          >
            <div class="flex items-center gap-2">
              use template

              <Icon icon="mdi-download" class="w-7 h-7" />
            </div>
          </a>

          <a
            href="https://github.com/engageintellect/spatz"
            class="btn my-2 flex-1 group/githubButton"
          >
            <div class="flex items-center gap-2">
              star on github

              <Icon
                icon="mdi-star"
                class="w-7 h-7 md:group-hover/githubButton:text-primary transition-color duration-500"
              />
            </div>
          </a>
        </div>
      </div>

      <div class="">
        <h1 class="text-4xl text-primary font-bold mb-2">about</h1>
        <p>
          <strong>Let's face it</strong>, we'd all like to build
          <span class="font-bold uppercase italic">fast</span>, but there are
          some things we constantly find ourselves needing to set up before we
          can tackle the problem we set out to solve. These tasks are often a
          hassle to configure at the beginning of a project and even more so
          when we try to implement them later during development.
        </p>
        <ul class="list-disc pl-10 pt-2">
          <li>User Authentication</li>
          <li>Databases & Content Management</li>
          <li>Themes & Styling</li>
          <li>Form Validation</li>
        </ul>
      </div>
      <p>
        <span class="text-primary underline">spatz</span> is ready, out of the box,
        to help you build your next great idea.
      </p>
      <div>
        <h1 class="text-4xl text-primary font-bold mb-2">technologies</h1>
        <div
          class="overflow-x-auto card border border-primary/[33%] shadow-md shadow-primary p-2"
        >
          <table class="table card-body">
            <!-- head -->
            <tbody>
              <!-- row 1 -->
              <tr>
                <td
                  ><a
                    class="text-primary md:hover:underline font-bold text-lg"
                    href="https://kit.svelte.dev">Sveltekit</a
                  ></td
                >
                <td>
                  A modern web framework for building blazing fast web apps.
                </td>
                <!-- row 2 -->
              </tr><tr>
                <td
                  ><a
                    class="text-primary md:hover:underline font-bold text-lg"
                    href="https://pocketbase.io">Pocketbase</a
                  ></td
                >
                <td>Self-contained SQLite Database and User Auth.</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <td
                  ><a
                    class="text-primary md:hover:underline font-bold text-lg"
                    href="https://openai.com">AI</a
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
                    class="text-primary md:hover:underline font-bold text-lg"
                    href="https://tailwindcss.com">TailwindCSS</a
                  ></td
                >

                <td
                  >Utility-first CSS styling with <a
                    href="https://daisyui.com"
                    class="text-primary md:hover:underline font-bold text-lg"
                    >DaisyUI</a
                  >.</td
                >
              </tr>
              <!-- row 5 -->
              <tr>
                <td
                  ><a
                    class="text-primary md:hover:underline font-bold text-lg"
                    href="https://zod.dev">Zod</a
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
        <div class="mb-2">
          <h1 class="text-4xl text-primary font-bold mb-2">getting started</h1>
          <p>It's quick and easy to get started. 5 minutes is all it takes.</p>
        </div>

        <a href={PUBLIC_DOCS_URL} class="btn btn-primary my-2">
          <div class="flex items-center gap-2">
            <div>spatz docs</div>
            <Icon icon="mdi-github" class="w-7 h-7" />
          </div>
        </a>

        <div>
          <h1 class="text-xl font-bold mt-10">Sveltekit Config</h1>
          <p>Run the below commands to get started.</p>

          <div class="mockup-code my-2">
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
            <pre data-prefix="$"><code>pnpm i && pnpm run dev --host</code
              ></pre>
          </div>
        </div>

        <div>
          <div>
            <h1 class="text-xl font-bold">Pocketbase Config</h1>
            <p>1. Run the below commands to get started.</p>

            <div class="mockup-code my-2">
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

            <div class="mockup-code my-2">
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
            3. Go to settings > Import collections, then paste in the contents
            of ./pocketbase/pb_schema.json
          </p>

          <p>
            4. Visit app in browser <a
              class="text-primary underline"
              href="http://localhost:5173">http://localhost:5173</a
            >
          </p>
        </div>
      </div>

      <div class="mb-10">
        <div class="mb-2">
          <h1 class="text-4xl text-primary font-bold mb-2">contribute</h1>
          <p>Come help make this template even better, send a PR!</p>
        </div>

        <a
          href="https://github.com/engageintellect/spatz"
          class="btn btn-primary my-2 flex-1"
        >
          <div class="flex items-center gap-2">
            contibute on github

            <Icon icon="mdi-github" class="w-7 h-7" />
          </div>
        </a>
      </div>
    </div>
  {/if}
</div>
