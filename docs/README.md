# spatz docs

## Description

A complete, fullstack template for Svelte.

## Installation

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
│   │   ├── /getStars (fetch github repository stars)
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

### Theming and Styling

The app comes pre-loaded with all of the standard themes from DaisyUI. You can also create your own [here](https://daisyui.com/docs/themes/#-4)

#### Adding Custom Themes

spatz makes it easy to add custom themes to your app. To add a custom theme, follow these steps:

1. Go to [DaisyUI's theme creator](https://daisyui.com/theme-generator/) and create your custom theme.

2. Copy the generated CSS and paste it into a new file in the `/tailwind.config.cjs` files in the "themes" array.

3. Add the new theme to the list of custom themes in `src/lib/custom-themes.ts`.

4. That's it! Your new theme will now be available in the app, and will be selectable from the theme switcher.
