# 🚀 Quick Start Guide

## Getting Started in 3 Steps

### Step 1: Open the Portfolio
1. Navigate to the `video-portfolio` folder
2. Double-click `index.html` to open in your browser
3. Explore the portfolio site

### Step 2: Access Admin Panel
1. Open `admin/index.html` in your browser
2. Log in with default credentials:
   - **Email:** admin@portfolio.com
   - **Password:** admin123
3. You're now in the admin dashboard!

### Step 3: Customize Your Content
1. Click "Site Content" in the sidebar
2. Update hero section with your tagline
3. Edit about section with your bio
4. Add your social media links
5. Click "Save Changes"

## Adding Your First Video

1. In admin panel, click "Add New Video"
2. Fill in the form:
   - **Title:** "My Amazing Reel"
   - **Description:** Brief description
   - **Thumbnail URL:** Use Unsplash or your own image
   - **Video URL:** YouTube embed link or video file URL
   - **Orientation:** Choose vertical or horizontal
   - **Category:** e.g., "Reel", "YouTube", "Ad"
   - **Platform:** Instagram, YouTube, or Client Work
3. Check "Featured" to show on homepage
4. Click "Save Video"
5. View your portfolio to see the new video!

## Quick Tips

### Finding Free Images
- **Unsplash:** https://unsplash.com (free high-quality images)
- **Pexels:** https://pexels.com (free stock photos)
- Right-click image → "Copy image address" → Paste as thumbnail URL

### YouTube Embed URLs
1. Go to your YouTube video
2. Click "Share" → "Embed"
3. Copy the URL from `src="..."` in the embed code
4. Format: `https://www.youtube.com/embed/VIDEO_ID`

### Customizing Colors
1. Open `css/styles.css`
2. Find `:root` section at the top
3. Change color values:
   ```css
   --color-accent-primary: #00d4ff;  /* Change this! */
   ```
4. Save and refresh browser

## Common Tasks

### Change Admin Password
1. Admin panel → Settings
2. Enter new password
3. Confirm password
4. Click "Update Password"

### Export Your Data (Backup)
1. Admin panel → Videos section
2. Click "Export" button
3. Save JSON file to safe location

### Import Data (Restore)
1. Admin panel → Videos section
2. Click "Import" button
3. Select your JSON backup file

### Reset to Defaults
1. Admin panel → Settings
2. Click "Reset to Defaults"
3. Confirm action
4. All content returns to original state

## Troubleshooting

### Videos Not Showing?
- Check if video is marked as "Visible" in admin panel
- Verify video URL is correct
- Check browser console for errors (F12)

### Can't Log In?
- Verify credentials: admin@portfolio.com / admin123
- Clear browser cache and try again
- Check browser console for errors

### Changes Not Saving?
- Ensure you clicked "Save Changes" button
- Check if localStorage is enabled in browser
- Try different browser

### Images Not Loading?
- Verify image URLs are correct and accessible
- Check if images are HTTPS (not HTTP)
- Try using Unsplash URLs for testing

## Next Steps

1. ✅ Replace placeholder images with your own
2. ✅ Add 5-10 of your best videos
3. ✅ Customize colors to match your brand
4. ✅ Update all text content
5. ✅ Test on mobile devices
6. ✅ Deploy to web hosting or GitHub Pages

## Need Help?

- Read the full README.md for detailed documentation
- Check code comments for explanations
- Test in different browsers
- Use browser DevTools (F12) for debugging

---

**You're all set! Start customizing your portfolio now! 🎬**
