# 🚀 Netlify Deployment Guide

This guide will help you deploy your portfolio to Netlify using the CLI.

## 📋 Prerequisites

1. A Netlify account (sign up at https://netlify.com)
2. Node.js installed on your system

## 🔧 Installation

### Step 1: Install Netlify CLI globally

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser to authenticate with Netlify.

## 🌐 Deployment Commands

### Option 1: Deploy to Draft URL (Preview)

This creates a preview deployment for testing:

```bash
npm run build
npm run deploy
```

When prompted:
- **Publish directory**: Enter `dist`
- This will give you a temporary URL to preview your site

### Option 2: Deploy to Production

This deploys directly to your production site:

```bash
npm run build
npm run deploy:prod
```

When prompted:
- **Publish directory**: Enter `dist`
- Your site will be live at your Netlify URL

## 🎯 First-Time Setup

If this is your first deployment, run:

```bash
netlify init
```

This will:
1. Connect your local project to Netlify
2. Create a new site (or link to an existing one)
3. Configure build settings automatically

Then deploy with:

```bash
npm run build
npm run deploy:prod
```

## ⚡ Quick Deploy (One Command)

For subsequent deployments, you can use:

```bash
npm run build && npm run deploy:prod
```

## 🔄 Continuous Deployment (Recommended)

For automatic deployments on every git push:

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to Netlify Dashboard
3. Click "New site from Git"
4. Connect your repository
5. Build settings (auto-detected from netlify.toml):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

Now every push to your main branch will automatically deploy!

## 📝 Configuration

The `netlify.toml` file in your project root contains:
- Build settings
- Redirect rules for SPA routing
- Security headers
- Cache optimization

## 🌍 Custom Domain

To add a custom domain:

1. Go to your site in Netlify Dashboard
2. Click "Domain settings"
3. Click "Add custom domain"
4. Follow the DNS configuration instructions

## 🔍 Useful Commands

```bash
# Check deployment status
netlify status

# Open site in browser
netlify open:site

# Open Netlify dashboard
netlify open:admin

# View deployment logs
netlify logs

# Run build locally
npm run build

# Preview production build locally
npm run preview
```

## 🐛 Troubleshooting

### Build fails
- Check that all dependencies are in package.json
- Run `npm install` to ensure all packages are installed
- Test build locally with `npm run build`

### 404 errors on refresh
- Make sure netlify.toml has the redirect rule (already configured)

### Environment variables
- Add them in Netlify Dashboard → Site settings → Environment variables

## 📊 Performance Tips

Your site is already optimized with:
- ✅ Static asset caching (1 year)
- ✅ Security headers
- ✅ SPA redirect rules
- ✅ Vite build optimization

## 🎉 You're Done!

Your portfolio is now deployed and accessible worldwide! 🌍

**Example URLs:**
- Draft: `https://[random-name]--[site-name].netlify.app`
- Production: `https://[site-name].netlify.app`
- Custom: `https://yourdomain.com`
