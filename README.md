# spatz

## Description

read the [docs](/docs/README.md)

A complete, fullstack template for Svelte.

## Features

- [Sveltekit](https://kit.svelte.dev/): A complete, fullstack template for Svelte.
- [Pocketbase](https://pocketbase.io): A complete, fullstack template for Svelte.
- [OpenAI](https://openai.com): A complete, fullstack template for Svelte.
- [Vercel AI SDK](https://vercel.com/ai): A complete, fullstack template for Svelte.
- [TailwindCSS](https://tailwindcss.com): A complete, fullstack template for Svelte.
- [Zod](https://zod.dev): A complete, fullstack template for Svelte.

## Getting Started

### Pocketbase Setup

```bash
mkdir pb-spatz
cd pb-spatz
```

```bash
wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.9/pocketbase_0.22.9_linux_amd64.zip
unzip pocketbase_0.22.9_linux_amd64.zip
./pocketbase serve --http="0.0.0.0:8090"
```

### Client Setup

```bash
git clone https://github.com/engageintellect/spatz
cd spatz
touch 'PUBLIC_POCKETBASE_URL=http://localhost:8090' > .env.local
pnpm i && pnpm run dev
```
