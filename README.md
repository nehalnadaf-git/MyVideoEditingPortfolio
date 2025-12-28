# 🎬 Cinematic Video Editor Portfolio

A **premium, modern, and fully-featured** video editing portfolio website with a secure admin panel for content management. Built with glassmorphism design, smooth animations, and support for both vertical (Reels/Shorts) and horizontal (YouTube/Film) videos.

![Portfolio Preview](https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&h=600&fit=crop)

## ✨ Features

### 🎨 Frontend Features

- **Modern Glassmorphism Design** - Premium dark theme with frosted glass effects
- **Dual Video Orientation Support** - Seamlessly displays both vertical (9:16) and horizontal (16:9) videos
- **Immersive Video Player** - Full-screen modal with smooth playback
- **Advanced Filtering** - Filter videos by orientation, platform, and category
- **Smooth Animations** - Fade-in on scroll, hover effects, and micro-interactions
- **Fully Responsive** - Mobile-first design optimized for all devices
- **SEO Optimized** - Proper meta tags, semantic HTML, and performance optimization
- **Fast Performance** - Lazy loading, debounced scroll events, and optimized assets

### 🔐 Admin Panel Features

- **Secure Authentication** - Password-protected admin dashboard
- **Video Management (CRUD)**
  - Add, edit, and delete videos
  - Upload custom thumbnails
  - Choose video orientation (vertical/horizontal)
  - Set categories and platform tags
  - Toggle video visibility
  - Mark videos as featured
- **Content Management**
  - Edit hero section text
  - Update about section content
  - Manage contact information
  - Update social media links
- **Data Management**
  - Export portfolio data as JSON
  - Import data from backup files
  - Reset to default content
  - Clear cache
- **Settings**
  - Change admin password
  - Manage site settings

## 🚀 Quick Start

### Installation

1. **Clone or download** this repository
2. **Open the project** in your preferred code editor
3. **Launch the website**:
   - Open `index.html` in your browser for the main portfolio
   - Open `admin/index.html` for the admin dashboard

### No Build Process Required!

This is a **pure HTML/CSS/JavaScript** application with no dependencies or build tools needed. Simply open the HTML files in a modern web browser.

## 📁 Project Structure

```
video-portfolio/
├── index.html              # Main portfolio page
├── css/
│   └── styles.css          # Main stylesheet with glassmorphism design
├── js/
│   ├── data.js             # Data management & localStorage
│   └── main.js             # Frontend functionality
├── admin/
│   ├── index.html          # Admin dashboard
│   ├── admin-styles.css    # Admin panel styles
│   └── admin.js            # Admin panel functionality
├── assets/
│   └── nehal-photo.jpg       # About section image (add your photo)
└── README.md               # This file
```

## 🔑 Admin Access

**Default Credentials:**
- **Email:** `admin@portfolio.com`
- **Password:** `admin123`

⚠️ **Important:** Change these credentials in production! Update them in `admin/admin.js`:

```javascript
const ADMIN_CREDENTIALS = {
    email: 'your-email@example.com',
    password: 'your-secure-password'
};
```

## 📝 Customization Guide

### 1. Update Site Content

**Via Admin Panel (Recommended):**
1. Log in to the admin panel at `admin/index.html`
2. Navigate to "Site Content"
3. Edit hero, about, and contact sections
4. Click "Save Changes"

**Via Code:**
Edit default content in `js/data.js`:

```javascript
const defaultSiteContent = {
    hero: {
        title: "Your Custom Title",
        subtitle: "Your custom subtitle"
    },
    // ... more content
};
```

### 2. Add Videos

**Via Admin Panel (Recommended):**
1. Log in to admin panel
2. Click "Add New Video"
3. Fill in video details:
   - Title and description
   - Thumbnail URL (use Unsplash or your own images)
   - Video URL (YouTube embed or direct video file)
   - Orientation (vertical/horizontal)
   - Category and platform
4. Click "Save Video"

**Supported Video Sources:**
- YouTube embed URLs: `https://www.youtube.com/embed/VIDEO_ID`
- Direct video files: `.mp4`, `.webm`, `.ogg`
- Vimeo, Wistia, or other embed URLs

### 3. Customize Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-accent-primary: #00d4ff;    /* Cyan */
    --color-accent-secondary: #7c3aed;  /* Purple */
    --color-accent-tertiary: #a78bfa;   /* Light purple */
}
```

### 4. Add Your Photo

Replace the placeholder in the About section:
1. Add your photo to the `assets/` folder
2. Update via admin panel or directly in the HTML

### 5. Update Social Links

Via admin panel:
1. Go to "Site Content" → "Contact" tab
2. Update Instagram, YouTube, Email, and WhatsApp links
3. Save changes

## 🎥 Video Guidelines

### Thumbnail Requirements
- **Format:** JPG, PNG, or WebP
- **Aspect Ratio:** 
  - Horizontal: 16:9 (1920x1080 recommended)
  - Vertical: 9:16 (1080x1920 recommended)
- **Size:** Under 500KB for optimal loading

### Video URL Formats

**YouTube:**
```
https://www.youtube.com/embed/VIDEO_ID
```

**Direct Video File:**
```
https://yourdomain.com/videos/video.mp4
```

**Vimeo:**
```
https://player.vimeo.com/video/VIDEO_ID
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Select your branch and root folder
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)

1. Sign up at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly!

### Option 3: Vercel (Free)

1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

### Option 4: Traditional Web Hosting

Upload all files via FTP to your web hosting provider.

## 🔒 Security Considerations

### For Production Use:

1. **Backend Authentication:** Replace client-side auth with proper backend authentication
2. **Database:** Use a real database instead of localStorage
3. **API Security:** Implement API authentication and rate limiting
4. **HTTPS:** Always use HTTPS in production
5. **Password Hashing:** Hash passwords on the server side
6. **Environment Variables:** Store credentials in environment variables

### Recommended Backend Solutions:

- **Firebase** - Easy setup, free tier available
- **Supabase** - Open-source Firebase alternative
- **Node.js + Express** - Full control, self-hosted
- **Netlify Functions** - Serverless backend
- **Vercel Edge Functions** - Serverless with edge computing

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Philosophy

This portfolio follows modern web design principles:

- **Glassmorphism** - Frosted glass aesthetic with blur effects
- **Dark Mode First** - Optimized for reduced eye strain
- **Micro-interactions** - Subtle animations enhance UX
- **Premium Feel** - High-end design that impresses clients
- **Performance** - Fast loading and smooth interactions

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, pure performance
- **LocalStorage** - Client-side data persistence
- **Font Awesome** - Icon library
- **Google Fonts** - Inter & Poppins typography

## 📊 Data Storage

All data is stored in the browser's **localStorage**:

- `portfolio_videos` - Video data
- `site_content` - Site content (hero, about, contact)
- `admin_authenticated` - Session authentication (sessionStorage)

### Backup Your Data

1. Log in to admin panel
2. Click "Export" button
3. Save the JSON file
4. Import anytime to restore data

## 🤝 Support & Contribution

### Need Help?

- Check the code comments for detailed explanations
- Review the customization guide above
- Inspect browser console for debugging

### Want to Contribute?

Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Share your customizations

## 📄 License

This project is open source and available for personal and commercial use.

## 🎯 Use Cases

Perfect for:
- **Video Editors** - Showcase your editing portfolio
- **Content Creators** - Display your best work
- **Freelancers** - Attract clients with a professional site
- **Agencies** - Present video production services
- **Filmmakers** - Share your cinematic projects

## 🚀 Future Enhancements

Potential additions:
- Video upload functionality
- Analytics dashboard
- Client testimonials section
- Blog/news section
- Multi-language support
- Advanced video player controls
- Video categories/tags system
- Search functionality
- Pagination for large portfolios

## 📞 Contact

For questions or support, update the contact information in the admin panel to display your own details.

---

**Built with ❤️ for video editors and content creators**

*Last updated: December 2025*
