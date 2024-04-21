# spatz

## Description

A complete, fullstack template for Svelte.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=spatz)

| hello                                     | there                                              | world                                     |
| ----------------------------------------- | -------------------------------------------------- | ----------------------------------------- |
| [Demo Site](https://spatz.engage-dev.com) | [Documentation](https://spatz.engage-dev.com/docs) | [Chat](https://spatz.engage-dev.com/chat) |

[Demo Site](https://spatz.engage-dev.com)

## Features

- [Sveltekit](https://kit.svelte.dev/): Futuristic web framework for building blazing fast web apps.
- [Pocketbase](https://pocketbase.io): Self-contained Database and User Auth.
- [OpenAI](https://openai.com): chatGPT 3.5-turbo & 4.0-turbo for contextually aware chatbots.
- [Vercel AI SDK](https://vercel.com/ai): AI/ML models for image, text, and audio processing.
- [TailwindCSS](https://tailwindcss.com): A utility-first CSS framework for rapid UI development.
- [Zod](https://zod.dev): TypeScript-first schema declaration and validation.

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
touch 'OPENAI_API_KEY=<YOUR API KEY>' >> .env.local
pnpm i && pnpm run dev
```
