# KEYAM SPORTS

Next.js sports news demo. Headlines and scores currently use sample data.

## Requirements

Node.js 22 LTS and npm. `.nvmrc` selects Node 22.

## Local development

```sh
npm ci
cp .env.example .env.local
npm run dev
```

## Production (Node hosting)

```sh
npm ci
npm run build
npm start
```

The server listens on `0.0.0.0` and uses `PORT` (default: 3000).
Install development dependencies during the build: TypeScript, PostCSS and Tailwind
are needed to compile. Preserve `.next`, `public`, `package.json` and
`node_modules` for the production server. Do not use static export: the AI route
requires a Node.js server.

## Vercel

1. Import this repository and choose the branch with these changes.
2. Select the Next.js preset, repository root, and Node.js 22.x.
3. Use `npm ci` for installation and `npm run build` for the build.
4. Optionally add `OPENAI_API_KEY` as a server environment variable.
5. Deploy. No custom output directory is needed.

The site builds and serves sample content without secrets.
`POST /api/run-agent` returns 503 if `OPENAI_API_KEY` is missing;
with a key it calls OpenAI and may incur usage charges.
`OPENAI_MODEL` optionally overrides `gpt-4o-mini`.
Keep these values server-side; never prefix the key with `NEXT_PUBLIC_`.
The AI demo is public: add authentication and rate limits before enabling a paid
key on a public production deployment.

## Validation

```sh
npm run build
npm run typecheck
```

GitHub Actions installs dependencies, builds, typechecks, starts the production
server and checks all linked pages, static assets, generated CSS and the
unconfigured AI endpoint without contacting OpenAI.
