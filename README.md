# spatz

## Description

A complete, fullstack template for Svelte.

[Demo App](https://spatz.engage-dev.com)

## Features

- [Sveltekit](https://kit.svelte.dev/): Futuristic web framework for building blazing fast web apps.
- [Pocketbase](https://pocketbase.io): Self-contained Database and User Auth.
- [OpenAI](https://openai.com): chatGPT 3.5-turbo & 4.0-turbo for contextually aware chatbots.
- [Vercel AI SDK](https://vercel.com/ai): AI/ML models for image, text, and audio processing.
- [TailwindCSS](https://tailwindcss.com): A utility-first CSS framework for rapid UI development.
- [Zod](https://zod.dev): TypeScript-first schema declaration and validation.

## Getting Started

### Pocketbase Setup

1. Create a directory for your Pocketbase instance and navigate to it.

```bash
mkdir pb-spatz
cd pb-spatz
```

2. Download the latest release of Pocketbase, unzip it, and start the server.

```bash
wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.9/pocketbase_0.22.9_linux_amd64.zip
unzip pocketbase_0.22.9_linux_amd64.zip
./pocketbase serve --http="0.0.0.0:8090"
```

3. Log in to the Pocketbase admin console at `[http://localhost:8090/_/](http://localhost:8090/_/)` and create a new database.

4. Go to settings > Import collections, then paste in the contens of ./pocketbase/pb_schema.json (from this repo) and click import.

### Client Setup

```bash
git clone https://github.com/engageintellect/spatz
cd spatz
touch 'PUBLIC_POCKETBASE_URL=http://localhost:8090' > .env.local
touch 'OPENAI_API_KEY=<YOUR API KEY>' >> .env.local
pnpm i && pnpm run dev
```
