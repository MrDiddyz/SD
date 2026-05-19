# MurMur Council Dashboard

A minimal deploy-ready Next.js App Router project for a visual multi-agent voting brain. The app accepts an input prompt, routes it through a lightweight MurMur council pipeline, shows confidence-weighted votes from specialized agents, and keeps an in-memory decision history for quick demo use.

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## One-click deploy flow

1. Create a new GitHub repository.
2. Upload or push this project to the repository.
3. Import the repo into Vercel.
4. Vercel auto-detects Next.js and deploys without extra config.

## Key files

- `app/page.tsx` — dashboard UI
- `app/api/run/route.ts` — API entrypoint
- `engine/runCycle.ts` — main MurMur loop
- `engine/councilEngine.ts` — weighted council voting
- `agents/council/*` — specialized council members

## Notes

This starter uses in-memory memory for simplicity. For production, move memory and run history to Supabase or Postgres, then add auth and persistent analytics.
