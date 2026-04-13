# Deployment Guide

This project is built using Vite and React, making it incredibly easy to deploy as a static site to platforms like Vercel, Netlify, or GitHub Pages.

## Prerequisites

Before deploying, ensure you have:
1. Pushed your code to a GitHub repository.
2. Added your images (`avatar.png`, `editlance.png`, `nehra.png`, `techkart.png`) to the `public/` folder.
3. Added your resume (`Sahil_Kumar_Resume.pdf`) to the `public/` folder.

---

## 🚀 Option 1: Deploying to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy React + Vite applications.

1. Create an account at [vercel.com](https://vercel.com/) (you can sign up with GitHub).
2. Click **"Add New..."** > **"Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect that it's a Vite project. The default settings are perfect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

Within seconds, Vercel will build your site and provide you with a live URL (e.g., `https://your-portfolio.vercel.app`).

---

## 🌐 Option 2: Deploying to Netlify

Netlify is another excellent free option for static sites.

1. Create an account at [netlify.com](https://www.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub account and select your repository.
4. Configure the build settings (Netlify usually detects these automatically):
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

Netlify will build your project and give you a live URL.

---

## Important Note on the `public/` folder

Any files you place in the `public/` folder (like your PDF resume and PNG images) are automatically copied directly to the root of your deployed website. 

For example, if your deployed website is `https://sahilkumar.vercel.app`, your resume will be automatically available and downloadable at `https://sahilkumar.vercel.app/Sahil_Kumar_Resume.pdf`.

You do **not** need to change any code for this to work in production! The `/Sahil_Kumar_Resume.pdf` link we set up earlier works perfectly both locally and when deployed.
