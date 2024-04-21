# spatz

## Description

read the [docs](/docs/README.md)

A complete, fullstack template for Svelte.

## Features

- [Sveltekit](https://kit.svelte.dev/)
  - [Sveltekit](https://kit.svelte.dev/)
- [Pocketbase](https://pocketbase.io)
- [OpenAI](https://openai.com)
- [Vercel AI SDK](https://vercel.com/ai)
- [TailwindCSS](https://tailwindcss.com)
- [Zod](https://zod.dev)

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
