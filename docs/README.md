# spatz

## Description

A complete, fullstack template for Svelte.

[Demo App](https://spatz.engage-dev.com)

![Image Description](/src/lib/assets/images/marketing/spatz-home.png)

![Image Description](/src/lib/assets/images/marketing/lighthouse.png)

## Features

- [Sveltekit](https://kit.svelte.dev/): Futuristic web framework for building blazing fast web apps.
- [Pocketbase](https://pocketbase.io): Self-contained User Auth, Database, Admin UI, and API documentation.
- [OpenAI](https://openai.com): chatGPT 3.5-turbo & 4.0-turbo for contextually aware chatbots.
- [Vercel AI SDK](https://vercel.com/ai): AI/ML models for image, text, and audio processing.
- [TailwindCSS](https://tailwindcss.com): A utility-first CSS framework for rapid UI development.
- [DaisyUI](https://daisyui.com): A tailwind-based component library.
- [Zod](https://zod.dev): TypeScript-first schema declaration and validation.

## Screenshots

### Home & Features

![Image Description](/src/lib/assets/images/marketing/spatz-menu.png)

### User Profile & Settings UI

![Image Description](/src/lib/assets/images/marketing/spatz-profile.png)

### Client/Pocketbase UI

![Image Description](/src/lib/assets/images/marketing/spatz-guestbook.png)
![Image Description](/src/lib/assets/images/marketing/spatz-admin.png)

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
touch 'PUBLIC_POCKETBASE_URL=YOUR_POCKETBASE_URL' >> .env.local
touch 'OPENAI_API_KEY=YOUR_OPENAI_API_KEY' >> .env.local
touch 'PUBLIC_OPENAI_MODEL=YOUR_GPT_MODEL (default=gpt-3.5.turbo)' >> .env.local
touch 'PUBLIC_REPOSITORY_URL=YOUR_REPOSITORY_URL' >> .env.local
touch 'PUBLIC_DOCS_URL=YOUR_DOCS_URL' >> .env.local
touch 'PUBLIC_GITHUB_STARS_URL=YOUR_PUBLIC_GITHUB_STARS_URL' >> .env.local
touch 'PUBLIC_BASE_URL=YOUR_BASE_URL' >> .env.local
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
│   ├── /guestbook
│   ├── /ai (nested routes)
│   │   ├── /a
│   │   ├── /b
│   │   └── /c
│   ├── /api
│   │   ├── /repoData (fetch github repository stars)
│   │   ├── /chat (OpenAI streaming API)
│   │__ /auth (Pocketbase auth)
│   │   ├── /login
│   │   ├── /register
│   │   ├── /logout
│   │   └── /reset-password
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

### Theming and Styling

The app comes pre-loaded with all of the standard themes from DaisyUI. You can also create your own [here](https://daisyui.com/docs/themes/#-4)

## Contributing to spatz

Contributions are welcomed, and appreciated. If you have a feature request, please add it as an issue or make a pull request.
