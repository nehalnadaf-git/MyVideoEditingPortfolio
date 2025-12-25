// ===================================
// DATA MANAGEMENT
// Local Storage based content system
// ===================================

// Default portfolio data
const defaultVideos = [
    {
        id: 1,
        title: "Cinematic Travel Reel",
        description: "A breathtaking journey through stunning landscapes, edited with dynamic transitions and color grading.",
        thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=1422&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "vertical",
        category: "Reel",
        platform: "instagram",
        featured: true,
        visible: true
    },
    {
        id: 2,
        title: "Product Showcase - Tech Review",
        description: "Professional product review with smooth b-roll, motion graphics, and engaging pacing.",
        thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&h=1080&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "horizontal",
        category: "YouTube",
        platform: "youtube",
        featured: true,
        visible: true
    },
    {
        id: 3,
        title: "Fashion Reel - Summer Collection",
        description: "High-energy fashion content with trendy effects and music sync.",
        thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1422&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "vertical",
        category: "Reel",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 4,
        title: "Documentary: Urban Stories",
        description: "Compelling narrative-driven documentary about city life and culture.",
        thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=1080&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "horizontal",
        category: "Documentary",
        platform: "youtube",
        featured: true,
        visible: true
    },
    {
        id: 5,
        title: "Fitness Motivation Reel",
        description: "Energetic workout montage with powerful music and motivational messaging.",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1422&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "vertical",
        category: "Reel",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 6,
        title: "Brand Commercial - Luxury Watch",
        description: "High-end commercial with cinematic lighting and premium aesthetic.",
        thumbnail: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920&h=1080&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "horizontal",
        category: "Ad",
        platform: "client",
        featured: true,
        visible: true
    },
    {
        id: 7,
        title: "Food Recipe Short",
        description: "Delicious cooking content with satisfying close-ups and smooth transitions.",
        thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1422&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "vertical",
        category: "Reel",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 8,
        title: "Gaming Highlights Montage",
        description: "Epic gaming moments edited with dynamic effects and synchronized audio.",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "horizontal",
        category: "YouTube",
        platform: "youtube",
        featured: false,
        visible: true
    },
    {
        id: 9,
        title: "Dance Performance Reel",
        description: "Creative dance video with artistic camera work and color grading.",
        thumbnail: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&h=1422&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "vertical",
        category: "Reel",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 10,
        title: "Corporate Presentation Video",
        description: "Professional corporate video with clean graphics and clear messaging.",
        thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "horizontal",
        category: "Client Work",
        platform: "client",
        featured: false,
        visible: true
    },
    {
        id: 11,
        title: "Nature & Wildlife Reel",
        description: "Stunning wildlife footage with cinematic slow-motion and natural sound design.",
        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1422&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "vertical",
        category: "Reel",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 12,
        title: "Music Video - Indie Artist",
        description: "Creative music video with artistic visuals and narrative storytelling.",
        thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&h=1080&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        orientation: "horizontal",
        category: "Music Video",
        platform: "youtube",
        featured: true,
        visible: true
    }
];

// Default site content
const defaultSiteContent = {
    hero: {
        title: "Crafting High-Quality Visual Content",
        subtitle: "Creating content that helps brands grow, convert, and build authority."
    },
    about: {
        heading: "Bringing Your Vision to Life",
        description: "With 4+ years of experience in video editing and post-production, I specialize in creating engaging content that resonates with audiences. From viral Instagram Reels to cinematic YouTube videos, I bring technical expertise and creative vision to every project.",
        image: "assets/editor-photo.jpg",
        skills: [
            "Instagram Reels Editing",
            "YouTube Content Creation",
            "Color Grading & Correction",
            "Motion Graphics",
            "Sound Design",
            "Visual Effects"
        ]
    },
    services: [
        {
            id: 1,
            icon: "fab fa-instagram",
            title: "Instagram Reels Editing",
            description: "Fast-paced, engaging vertical content optimized for maximum reach and engagement. Trending effects, dynamic transitions, and viral-worthy edits."
        },
        {
            id: 2,
            icon: "fab fa-youtube",
            title: "YouTube Video Editing",
            description: "Professional long-form content editing with pacing, graphics, and storytelling that keeps viewers engaged from start to finish."
        },
        {
            id: 3,
            icon: "fas fa-palette",
            title: "Color Grading",
            description: "Cinematic color correction and grading to give your footage a professional, polished look that matches your brand aesthetic."
        },
        {
            id: 4,
            icon: "fas fa-film",
            title: "Commercial & Ads",
            description: "High-impact commercial editing for brands and businesses. Attention-grabbing content that drives conversions and brand awareness."
        },
        {
            id: 5,
            icon: "fas fa-magic",
            title: "Motion Graphics",
            description: "Custom motion graphics, lower thirds, titles, and animated elements to elevate your content and enhance storytelling."
        },
        {
            id: 6,
            icon: "fas fa-video",
            title: "Documentary Editing",
            description: "Thoughtful, narrative-driven editing for documentaries and long-form content. Crafting compelling stories that inform and inspire."
        }
    ],
    contact: {
        email: "mailnehalfx@gmail.com",
        whatsapp: "https://wa.me/916363278962"
    }
};

// ===================================
// LOCAL STORAGE FUNCTIONS
// ===================================

class DataManager {
    constructor() {
        this.VIDEOS_KEY = 'portfolio_videos';
        this.CONTENT_KEY = 'site_content';
        this.initializeData();
    }

    // Initialize data if not exists
    initializeData() {
        if (!localStorage.getItem(this.VIDEOS_KEY)) {
            this.saveVideos(defaultVideos);
        }
        if (!localStorage.getItem(this.CONTENT_KEY)) {
            this.saveSiteContent(defaultSiteContent);
        }
    }

    // Video CRUD operations
    getVideos() {
        const videos = localStorage.getItem(this.VIDEOS_KEY);
        return videos ? JSON.parse(videos) : defaultVideos;
    }

    getVideoById(id) {
        const videos = this.getVideos();
        return videos.find(video => video.id === parseInt(id));
    }

    saveVideos(videos) {
        localStorage.setItem(this.VIDEOS_KEY, JSON.stringify(videos));
    }

    addVideo(video) {
        const videos = this.getVideos();
        const newId = Math.max(...videos.map(v => v.id), 0) + 1;
        const newVideo = { ...video, id: newId };
        videos.push(newVideo);
        this.saveVideos(videos);
        return newVideo;
    }

    updateVideo(id, updatedData) {
        const videos = this.getVideos();
        const index = videos.findIndex(video => video.id === parseInt(id));
        if (index !== -1) {
            videos[index] = { ...videos[index], ...updatedData };
            this.saveVideos(videos);
            return videos[index];
        }
        return null;
    }

    deleteVideo(id) {
        const videos = this.getVideos();
        const filteredVideos = videos.filter(video => video.id !== parseInt(id));
        this.saveVideos(filteredVideos);
        return filteredVideos;
    }

    toggleVideoVisibility(id) {
        const video = this.getVideoById(id);
        if (video) {
            return this.updateVideo(id, { visible: !video.visible });
        }
        return null;
    }

    reorderVideos(videoIds) {
        const videos = this.getVideos();
        const reordered = videoIds.map(id => videos.find(v => v.id === parseInt(id))).filter(Boolean);
        this.saveVideos(reordered);
        return reordered;
    }

    // Filter videos
    filterVideos(filter) {
        const videos = this.getVideos().filter(v => v.visible);

        if (filter === 'all') return videos;
        if (filter === 'vertical') return videos.filter(v => v.orientation === 'vertical');
        if (filter === 'horizontal') return videos.filter(v => v.orientation === 'horizontal');

        return videos.filter(v => v.platform === filter);
    }

    getFeaturedVideos() {
        return this.getVideos().filter(v => v.featured && v.visible);
    }

    // Site content operations
    getSiteContent() {
        const content = localStorage.getItem(this.CONTENT_KEY);
        return content ? JSON.parse(content) : defaultSiteContent;
    }

    saveSiteContent(content) {
        localStorage.setItem(this.CONTENT_KEY, JSON.stringify(content));
    }

    updateSiteContent(section, data) {
        const content = this.getSiteContent();
        content[section] = { ...content[section], ...data };
        this.saveSiteContent(content);
        return content;
    }

    // Reset to defaults
    resetToDefaults() {
        this.saveVideos(defaultVideos);
        this.saveSiteContent(defaultSiteContent);
    }

    // Export/Import data
    exportData() {
        return {
            videos: this.getVideos(),
            content: this.getSiteContent(),
            exportDate: new Date().toISOString()
        };
    }

    importData(data) {
        if (data.videos) this.saveVideos(data.videos);
        if (data.content) this.saveSiteContent(data.content);
    }
}

// Create global instance
const dataManager = new DataManager();

// Make it available globally
window.dataManager = dataManager;
