# 🎨 Customization Guide

Complete guide to personalizing your video portfolio website.

---

## 🎯 Quick Customizations (No Coding Required)

### Via Admin Panel

1. **Open Admin Panel**
   - Navigate to `admin/index.html`
   - Login: admin@portfolio.com / admin123

2. **Update Hero Section**
   - Go to "Site Content" → "Hero Section"
   - Change title and subtitle
   - Save changes

3. **Edit About Section**
   - Go to "Site Content" → "About"
   - Update heading and description
   - Change image URL
   - Save changes

4. **Update Contact Info**
   - Go to "Site Content" → "Contact"
   - Add your social media links
   - Update email and WhatsApp
   - Save changes

5. **Manage Videos**
   - Go to "Videos"
   - Add, edit, or delete videos
   - Toggle visibility
   - Mark as featured

---

## 🎨 Design Customizations

### Change Color Scheme

**File:** `css/styles.css`

**Location:** Lines 15-25 (`:root` section)

```css
:root {
  /* Primary Accent - Main brand color */
  --color-accent-primary: #00d4ff;    /* Cyan - Change this! */
  
  /* Secondary Accent - Complementary color */
  --color-accent-secondary: #7c3aed;  /* Purple - Change this! */
  
  /* Tertiary Accent - Highlight color */
  --color-accent-tertiary: #a78bfa;   /* Light purple - Change this! */
}
```

**Popular Color Schemes:**

**Scheme 1: Ocean Blue**
```css
--color-accent-primary: #0ea5e9;
--color-accent-secondary: #0284c7;
--color-accent-tertiary: #38bdf8;
```

**Scheme 2: Sunset Orange**
```css
--color-accent-primary: #f97316;
--color-accent-secondary: #ea580c;
--color-accent-tertiary: #fb923c;
```

**Scheme 3: Neon Green**
```css
--color-accent-primary: #10b981;
--color-accent-secondary: #059669;
--color-accent-tertiary: #34d399;
```

**Scheme 4: Royal Purple**
```css
--color-accent-primary: #a855f7;
--color-accent-secondary: #9333ea;
--color-accent-tertiary: #c084fc;
```

**Scheme 5: Hot Pink**
```css
--color-accent-primary: #ec4899;
--color-accent-secondary: #db2777;
--color-accent-tertiary: #f472b6;
```

### Change Fonts

**File:** `css/styles.css`

**Location:** Line 11 (Google Fonts import)

**Current Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
```

**Popular Alternatives:**

**Option 1: Montserrat + Open Sans**
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --font-primary: 'Open Sans', sans-serif;
  --font-secondary: 'Montserrat', sans-serif;
}
```

**Option 2: Raleway + Lato**
```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');

:root {
  --font-primary: 'Lato', sans-serif;
  --font-secondary: 'Raleway', sans-serif;
}
```

**Option 3: Playfair Display + Source Sans Pro**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

:root {
  --font-primary: 'Source Sans Pro', sans-serif;
  --font-secondary: 'Playfair Display', serif;
}
```

### Adjust Glass Effect Intensity

**File:** `css/styles.css`

**Location:** Lines 30-35

```css
/* Make glass more transparent */
--glass-bg: rgba(255, 255, 255, 0.03);  /* Lower = more transparent */

/* Make glass more opaque */
--glass-bg: rgba(255, 255, 255, 0.10);  /* Higher = more opaque */

/* Adjust blur amount */
backdrop-filter: blur(20px);  /* Change 20px to 10px-40px */
```

### Change Background Style

**File:** `css/styles.css`

**Location:** Lines 90-110 (body::before and body::after)

**Option 1: Solid Color**
```css
body::before {
  background: #0a0a0f;  /* Solid dark background */
}
```

**Option 2: Different Gradient**
```css
body::before {
  background: radial-gradient(ellipse at top left, rgba(236, 72, 153, 0.15), transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.15), transparent 50%);
}
```

**Option 3: No Grain Texture**
```css
body::after {
  display: none;  /* Remove grain texture */
}
```

---

## 📝 Content Customizations

### Update Page Title & Meta Tags

**File:** `index.html`

**Location:** Lines 6-10

```html
<title>Your Name | Video Editor Portfolio</title>
<meta name="description" content="Your custom description here">
<meta name="keywords" content="video editing, your name, your services">
<meta name="author" content="Your Name">
```

### Change Logo Text

**File:** `index.html`

**Location:** Line 32

```html
<div class="logo">YOUR NAME</div>
```

Or use an image:
```html
<div class="logo">
  <img src="assets/logo.png" alt="Your Logo" style="height: 40px;">
</div>
```

### Update Navigation Links

**File:** `index.html`

**Location:** Lines 33-39

Add or remove menu items:
```html
<ul class="nav-links" id="navLinks">
    <li><a href="#home" class="nav-link active">Home</a></li>
    <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#services" class="nav-link">Services</a></li>
    <li><a href="#testimonials" class="nav-link">Testimonials</a></li>  <!-- NEW -->
    <li><a href="#contact" class="nav-link">Contact</a></li>
</ul>
```

### Customize Footer

**File:** `index.html`

**Location:** Lines 230-235

```html
<footer class="footer">
    <p>&copy; 2025 Your Name. All rights reserved.</p>
    <p style="margin-top: var(--space-sm); font-size: var(--text-sm);">
        Your custom tagline here
    </p>
</footer>
```

---

## 🎥 Video Customizations

### Change Default Videos

**File:** `js/data.js`

**Location:** Lines 8-100 (defaultVideos array)

**Add Your Own Video:**
```javascript
{
    id: 13,  // Increment from last ID
    title: "Your Video Title",
    description: "Your video description",
    thumbnail: "https://your-image-url.com/image.jpg",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    orientation: "horizontal",  // or "vertical"
    category: "YouTube",
    platform: "youtube",
    featured: true,
    visible: true
}
```

### Change Video Grid Layout

**File:** `css/styles.css`

**Location:** Line 450

**3 Columns:**
```css
.video-grid {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
```

**4 Columns:**
```css
.video-grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

**2 Columns:**
```css
.video-grid {
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
}
```

### Change Videos Per Page

**File:** `js/main.js`

**Location:** Line 95

```javascript
let videosPerPage = 9;  // Change to 6, 12, 15, etc.
```

---

## 🖼️ Image Customizations

### Add Your Photo

**Method 1: Via Admin Panel**
1. Upload photo to image hosting (Imgur, Cloudinary, etc.)
2. Copy image URL
3. Admin panel → Site Content → About
4. Paste URL in "Image URL" field
5. Save

**Method 2: Local File**
1. Add your photo to `assets/` folder
2. Name it `nehal-photo.jpg`
3. It will automatically display

### Change Favicon

**File:** `index.html`

**Location:** Line 13

**Replace with custom icon:**
```html
<link rel="icon" type="image/png" href="assets/favicon.png">
```

**Or use emoji (current method):**
```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎬</text></svg>">
```

Change 🎬 to any emoji you like!

---

## 🎬 Services Section Customization

### Edit Services

**File:** `index.html`

**Location:** Lines 160-210

**Add New Service:**
```html
<div class="service-card glass-card reveal">
    <div class="service-icon">
        <i class="fas fa-camera"></i>  <!-- Change icon -->
    </div>
    <h3 class="service-title">Your Service Name</h3>
    <p class="service-description">
        Your service description here
    </p>
    <a href="#contact" class="btn btn-secondary">Get Quote</a>
</div>
```

**Icon Options** (Font Awesome):
- `fa-video` - Video camera
- `fa-film` - Film strip
- `fa-camera` - Camera
- `fa-edit` - Edit
- `fa-magic` - Magic wand
- `fa-palette` - Color palette
- `fa-play-circle` - Play button
- `fa-youtube` - YouTube
- `fa-instagram` - Instagram

Find more: https://fontawesome.com/icons

---

## 🔧 Advanced Customizations

### Add Custom Section

**1. Add HTML Section**

**File:** `index.html`

Add before footer:
```html
<section class="section" id="testimonials">
    <div class="container">
        <div class="section-header reveal">
            <h2 class="section-title">Client Testimonials</h2>
            <p class="section-subtitle">
                What my clients say about working with me
            </p>
        </div>
        
        <div class="testimonials-grid">
            <!-- Add testimonial cards here -->
        </div>
    </div>
</section>
```

**2. Add Navigation Link**

Add to nav menu:
```html
<li><a href="#testimonials" class="nav-link">Testimonials</a></li>
```

**3. Style the Section**

**File:** `css/styles.css`

Add at bottom:
```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
}

.testimonial-card {
  padding: var(--space-2xl);
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
}
```

### Change Animation Speed

**File:** `css/styles.css`

**Location:** Lines 60-63

```css
/* Make animations faster */
--transition-fast: 100ms ease-in-out;   /* Default: 150ms */
--transition-base: 200ms ease-in-out;   /* Default: 250ms */
--transition-slow: 300ms ease-in-out;   /* Default: 400ms */

/* Make animations slower */
--transition-fast: 200ms ease-in-out;
--transition-base: 350ms ease-in-out;
--transition-slow: 500ms ease-in-out;
```

### Disable Animations

**File:** `css/styles.css`

Add at the end:
```css
/* Disable all animations */
* {
  animation: none !important;
  transition: none !important;
}
```

### Change Scroll Reveal Threshold

**File:** `js/main.js`

**Location:** Line 75

```javascript
if (elementTop < windowHeight - 100) {  // Change 100 to 50, 150, 200, etc.
```

---

## 📱 Mobile Customizations

### Adjust Mobile Breakpoints

**File:** `css/styles.css`

**Location:** Lines 750+ (Media queries)

```css
/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small mobile */
@media (max-width: 480px) { }
```

### Change Mobile Menu Style

**File:** `css/styles.css`

**Location:** Lines 770-790

Customize mobile menu appearance, animation, and positioning.

---

## 🔐 Security Customizations

### Change Admin Credentials

**File:** `admin/admin.js`

**Location:** Lines 7-10

```javascript
const ADMIN_CREDENTIALS = {
    email: 'your-email@example.com',
    password: 'your-secure-password-here'
};
```

**⚠️ Important:** For production, implement proper backend authentication!

---

## 🎯 SEO Customizations

### Add Open Graph Tags

**File:** `index.html`

**Location:** After line 10

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourwebsite.com/">
<meta property="og:title" content="Your Name - Video Editor">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourwebsite.com/preview.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourwebsite.com/">
<meta property="twitter:title" content="Your Name - Video Editor">
<meta property="twitter:description" content="Your description">
<meta property="twitter:image" content="https://yourwebsite.com/preview.jpg">
```

### Add Schema Markup

**File:** `index.html`

Add before `</head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Video Editor",
  "url": "https://yourwebsite.com",
  "sameAs": [
    "https://instagram.com/yourusername",
    "https://youtube.com/@yourchannel"
  ]
}
</script>
```

---

## 💡 Tips & Best Practices

### Color Selection
- Use color palette generators: Coolors.co, Adobe Color
- Ensure sufficient contrast for readability
- Test colors on different devices
- Stick to 2-3 main colors

### Typography
- Pair serif with sans-serif for contrast
- Limit to 2 font families maximum
- Ensure fonts load quickly
- Test readability on mobile

### Images
- Optimize before upload (TinyPNG, Squoosh)
- Use WebP format when possible
- Maintain consistent aspect ratios
- Add alt text for accessibility

### Performance
- Minimize custom code
- Compress images
- Use CDN for libraries
- Test with Google PageSpeed Insights

---

## 🆘 Need Help?

- Check browser console (F12) for errors
- Validate HTML: https://validator.w3.org
- Validate CSS: https://jigsaw.w3.org/css-validator
- Test responsiveness: Chrome DevTools (F12 → Toggle device toolbar)

---

**Happy customizing! Make this portfolio truly yours! 🎨**
