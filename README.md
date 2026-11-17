# SmartQA Frontend

A responsive 3-page React + Vite frontend prototype for an AI-Driven Software Quality Assurance System.

## Pages
- `/` — Home
- `/analyzer` — Code Analyzer (interactive UI demo; no real AI analysis)
- `/reports` — Reports (illustrative sample data)

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. In Vercel, select **Add New → Project** and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

No backend or AI model is connected. The analyzer button and report data are frontend demonstration features.
