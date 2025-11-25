# Deployment Guide for ToucheArt Website on Render

This guide will help you deploy the ToucheArt website to Render's free tier.

## Prerequisites

1. A Render account (sign up at https://render.com)
2. A Git repository (GitHub, GitLab, or Bitbucket)
3. Your APK file URL and iOS webapp URL ready

## Step 1: Update Download Links

Before deploying, update the download links in `src/pages/Index.tsx`:

1. Open `src/pages/Index.tsx`
2. Find the Android APK button (around line 50) and replace `"#"` with your actual APK download URL
3. Find the iOS webapp button (around line 65) and replace `"#"` with your actual webapp URL

Example:
```typescript
// Android APK
const apkUrl = "https://your-domain.com/toucheart.apk";

// iOS Webapp
const webappUrl = "https://your-webapp-url.com";
```

## Step 2: Push to Git Repository

1. Initialize git in the `toucheart-website` directory (if not already done):
```bash
cd toucheart-website
git init
git add .
git commit -m "Initial commit: ToucheArt website"
```

2. Create a repository on GitHub/GitLab/Bitbucket
3. Push your code:
```bash
git remote add origin <your-repository-url>
git push -u origin main
```

## Step 3: Deploy on Render

1. Log in to your Render dashboard
2. Click "New +" and select "Web Service"
3. Connect your Git repository
4. Render will automatically detect the `render.yaml` file
5. Configure the service:
   - **Name**: toucheart-website (or any name you prefer)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

6. Click "Create Web Service"
7. Render will start building and deploying your website

## Step 4: Custom Domain (Optional)

1. In your Render service settings, go to "Custom Domains"
2. Add your custom domain
3. Follow Render's instructions to configure DNS

## Step 5: Verify Deployment

Once deployed, your website will be available at:
- `https://toucheart-website.onrender.com` (or your custom domain)

Test both buttons to ensure they work correctly:
- Android APK download button
- iOS webapp button

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs in Render dashboard

### Buttons Not Working
- Verify the URLs are correct in `src/pages/Index.tsx`
- Check browser console for errors
- Ensure URLs are accessible (not behind authentication)

### Static Assets Not Loading
- Ensure logo.png is in the `public` folder
- Check that paths start with `/` (e.g., `/logo.png`)

## Notes

- Render's free tier may spin down after inactivity (15 minutes)
- First request after spin-down may take 30-60 seconds
- Consider upgrading to a paid plan for always-on service

## Support

For issues with Render deployment, check:
- Render documentation: https://render.com/docs
- Render community: https://community.render.com

