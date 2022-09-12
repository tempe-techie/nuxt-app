# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Install pnpm

If you don't have pnpm yet, install it via brew (on Mac).

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install --shamefully-hoist
```

## Add

Add new packages with this command:

```bash
pnpm add <npm-package-name>
```

## Generate package-lock.json

```bash
npm i --package-lock-only
```

## Development Server

Start the development server on http://localhost:3000

```bash
sh run.sh

// or

pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
