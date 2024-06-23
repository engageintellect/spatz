# spatz

## Description

A complete, fullstack template for Svelte.

![Image Description](/src/lib/assets/images/spatz.png)

[Demo App](https://spatz.engage-dev.com)

## Features

- [Sveltekit](https://kit.svelte.dev/): Futuristic web framework for building blazing fast web apps.
- [Pocketbase](https://pocketbase.io): Self-contained User Auth, Database, Admin UI, and API documentation.
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

3. Log in to the Pocketbase admin console at `http://localhost:8090/_/` and create a new database.

4. Go to settings > Import collections, then paste in the contens of `./pocketbase/pb_schema.json` (from this repo) and click import.

### Client Setup

1. Clone the repo and navigate to the project directory.

```bash
git clone https://github.com/engageintellect/spatz
cd spatz
```

2. Set your Pocketbase URL and OpenAI API key in a `.env.local` file.

```bash
touch 'PUBLIC_POCKETBASE_URL=http://localhost:8090' > .env.local
touch 'OPENAI_API_KEY=<YOUR API KEY>' >> .env.local
```

3. Install the dependencies and start the development server.

```bash
pnpm i && pnpm run dev --host
```

4. Open your browser to `http://localhost:5173` to see the app.

## Development

### Project Structure

```
/src
├── /lib
├── /assets
│   └── /images
├── /components
├── /stores (global state)
├── /routes
│   ├── /ai (nested routes)
│   │   ├── /a
│   │   ├── /b
│   │   └── /c
│   ├── /api
│   │   ├── /chat (OpenAI streaming API)
│   │   └── /auth (Pocketbase auth)
│   │       ├── /login
│   │       ├── /register
│   │       ├── /logout
│   │       └── /reset-password
│   └── /my (user-specific routes)
│       ├── /account
│       ├── /profile
│       └── /settings
/pocketbase
├── pb_schema.json
/static
└── /docs (general documentation)

```

### Icons

Icons are provided by [iconify/svelte](https://www.npmjs.com/package/@iconify/svelte).
You can search for icons on [Icones](https://icones.js.org/collection/all).
