# 90-Day Travel English AI Coaching System

Task001 creates the initial Next.js application and a minimal first page for deployment verification.

## Requirements

- Node.js 20.9 or later
- npm

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run check
```

## GitHub

```bash
git init
git add .
git commit -m "chore: initialize Next.js application"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

## Vercel

1. Import the GitHub repository into Vercel.
2. Keep the detected framework as Next.js.
3. Deploy without environment variables for Task001.
4. Open the production URL and confirm the first page renders.
