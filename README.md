# Harper Hill Digital

Marketing landing page. React + Vite + Tailwind CSS.

## Development

```
npm install
npm run dev
```

## Deployment

Hosted on Netlify as the `harper-hill-digital` site (`harperhilldigital.com`,
project ID `68bc9578-2d86-4523-a508-2368b33bdaea`).

Pushing to `main` on GitHub does **not** by itself trigger a Netlify build —
verify in the Netlify dashboard (Site configuration → Build & deploy) whether
continuous deployment from `gmhurley/harper-hill-digital` is enabled. If not,
deploy manually:

```
npm run build
netlify deploy --prod --dir dist
```

This requires the Netlify CLI (`npx netlify-cli`) authenticated
(`netlify login`) and the repo linked to the site
(`netlify link --id 68bc9578-2d86-4523-a508-2368b33bdaea`) — both are one-time
setup steps per machine.

See `hhd.md` for the original build brief (content, tone, tech stack
requirements).
