# Life With Raia — Lovable Project

A warm, modern, multi-page creator website built for **Lovable** ([lovable.dev](https://lovable.dev)).

---

## 🚀 How to Use with Lovable

### Option 1: Copy-Paste Master Prompt into Lovable
1. Open [LOVEABLE_PROMPT.md](./LOVEABLE_PROMPT.md).
2. Copy the entire prompt block.
3. Paste it directly into your new project prompt at **[lovable.dev](https://lovable.dev)**.

### Option 2: Connect via GitHub
1. Initialize a git repository inside this `loveable/` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Life With Raia for Lovable"
   ```
2. Push to your GitHub account.
3. In **Lovable.dev**, click **Import from GitHub** and select your repository!

---

## 💻 Running Locally

To run this React + Vite + Tailwind project on your local machine:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```
loveable/
├── LOVEABLE_PROMPT.md      # Lovable prompt specification
├── package.json            # Vite, React, Tailwind, Lucide React
├── vite.config.ts          # Vite configuration with @/ alias
├── tailwind.config.ts      # Custom warm creator palette
├── public/assets/          # High-resolution lifestyle imagery
└── src/
    ├── main.tsx            # Bootstrap
    ├── App.tsx             # React Router (7 routes)
    ├── index.css           # Tailwind + Design system variables
    ├── components/         # Navbar, Footer, Modals, Toast
    └── pages/              # Home, About, Videos, Photos, Stories, Updates, Contact
```
