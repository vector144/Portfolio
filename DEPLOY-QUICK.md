# 🚀 Quick Deploy Reference

## First Time Setup (Do Once)

```bash
# 1. Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# 2. Login to Netlify
netlify login

# 3. Initialize your site
netlify init
```

## Deploy Commands

### Preview Deployment (Draft URL)
```bash
npm run build
npm run deploy
```

### Production Deployment (Live Site)
```bash
npm run build
npm run deploy:prod
```

### One-Line Production Deploy
```bash
npm run build && npm run deploy:prod
```

## After First Deploy

Your site will be live at:
- **Netlify URL**: `https://[your-site-name].netlify.app`
- **Custom Domain**: Configure in Netlify Dashboard

## Quick Commands

```bash
netlify status          # Check site status
netlify open:site       # Open your live site
netlify open:admin      # Open Netlify dashboard
netlify logs            # View deployment logs
```

## Files Created

- ✅ `netlify.toml` - Netlify configuration
- ✅ `DEPLOYMENT.md` - Full deployment guide
- ✅ `package.json` - Updated with deploy scripts

## Next Steps

1. Run `netlify login` to authenticate
2. Run `netlify init` to setup your site
3. Run `npm run build && npm run deploy:prod` to deploy

That's it! Your portfolio will be live! 🎉
