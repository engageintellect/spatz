<script lang="ts">
  import {
    PUBLIC_DOCS_URL,
    PUBLIC_REPOSITORY_URL,
    PUBLIC_BASE_URL,
  } from '$env/static/public'
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'

  let stars = 0

  async function getStars() {
    const res = await fetch(`${PUBLIC_BASE_URL}/api/getStars`)
    const data = await res.json()
    stars = data
    return stars
  }

  onMount(() => {
    getStars()
  })
</script>

<div class="">
  <div class="flex flex-col gap-10">
    <div>
      <h1 class="text-7xl">
        <div
          class="tracking-tight text-primary font-extrabold flex items-center"
        >
          <div>spatz</div>
          <div class="font-thin text-primary/[33%] tracking-tighter">stack</div>
        </div>
      </h1>
      <p class="mt-2">
        visit <a class="text-primary underline" href={PUBLIC_DOCS_URL}>docs</a> for
        more info
      </p>

      <div class="w-full flex gap-2 mt-2">
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
        <span class="font-bold uppercase italic">fast</span>, but there are some
        things we constantly find ourselves needing to set up before we can
        tackle the problem we set out to solve. These tasks are often a hassle
        to configure at the beginning of a project and even more so when we try
        to implement them later during development.
      </p>
      <ul class="list-disc pl-10 pt-2">
        <li>User Authentication</li>
        <li>Databases & Content Management</li>
        <li>Admin Dashboards</li>
        <li>User Settings & Profile panels</li>
        <li>Themes & Styling</li>
        <li>Forms</li>
        <li>Form Validation</li>
        <li>Toast Notifications</li>
        <li>Icons</li>
      </ul>
    </div>
    <p>
      <a href={PUBLIC_REPOSITORY_URL} class="text-primary underline">spatz</a>
      is ready, out of the box, to help you build your next great idea.
    </p>
    <div>
      <h1 class="text-4xl text-primary font-bold mb-2">technologies</h1>
      <div
        class="overflow-x-auto card border border-primary/[33%] shadow-xl p-2"
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
                  class="text-primary underline">DaisyUI</a
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
          <pre data-prefix="$"><code>pnpm i && pnpm run dev --host</code></pre>
        </div>
      </div>

      <div>
        <div>
          <h1 class="text-xl font-bold">Pocketbase Config</h1>
          <p class="mt-5">1. Run the below commands to get started.</p>

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
          <p class="mt-5">2. Run the below commands to get started.</p>

          <div class="mockup-code my-2">
            <pre data-prefix="$"><code
                >./pocketbase serve --http="0.0.0.0:8090"</code
              ></pre>
          </div>
        </div>

        <p class="mt-5">
          3. Log into the Pocketbase Admin UI <a
            class="text-primary underline"
            href="http://localhost:8090/_/">http://localhost:8090/_/</a
          >.
        </p>
        <p class="mt-5">
          4. Go to settings > Import collections, then paste in the contents of
          ./pocketbase/pb_schema.json
        </p>

        <p class="mt-5">
          5. Visit app in browser <a
            class="text-primary underline"
            href="http://localhost:5173">http://localhost:5173</a
          >
        </p>

        <div class="mt-5">
          For more information, check out the
          <a class="text-primary underline" href={PUBLIC_DOCS_URL}>docs</a>.
        </div>
      </div>
    </div>

    <div class="mb-10">
      <div class="mb-2">
        <div class="flex gap-2 w-full h-full items-center">
          <h1 class="text-4xl text-primary font-bold mb-2">contribute</h1>
        </div>

        <div class="card border border-primary/[33%] shadow-xl">
          <div class="card-body p-5">
            <p class="card-title">
              spatz has <span
                class="badge badge-lg text-xl bg-primary text-primary-content"
                >{stars}</span
              > stars on GitHub.
            </p>

            <p class="">help make this template even better, send a PR!</p>
            <div class="flex justify-star w-full mt-2">
              <a
                href="https://github.com/engageintellect/spatz"
                class="btn btn-primary my-2 w-fit"
              >
                <div class="flex items-center gap-2">
                  contibute on github
                  <Icon icon="mdi-github" class="w-7 h-7" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
