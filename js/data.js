// ===================================
// DATA MANAGEMENT
// Local Storage based content system
// ===================================

// Versioning to force updates when needed
const DATA_VERSION = '2025-12-28-v1';

// Default portfolio data
const defaultVideos = [
    {
        id: 1,
        title: "All Sea food permisible?",
        description: "An engaging Q&A session about Islamic dietary laws regarding seafood.",
        thumbnail: "https://drive.google.com/thumbnail?id=1Jk89fRsOxdWW2MOkVpH1DhM0Qlzw57Oe&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1Jk89fRsOxdWW2MOkVpH1DhM0Qlzw57Oe/view?usp=drive_link",
        orientation: "vertical",
        category: "Islam Q&A",
        platform: "instagram",
        featured: true,
        visible: true
    },
    {
        id: 2,
        title: "Al Moon Academy",
        description: "Official promotional video for Al Moon Academy, showcasing their educational excellence.",
        thumbnail: "https://drive.google.com/thumbnail?id=1unvec3wiqyQfk9q7pvBbcab8Po_-Npne&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1unvec3wiqyQfk9q7pvBbcab8Po_-Npne/view?usp=drive_link",
        orientation: "horizontal",
        category: "Institution",
        platform: "youtube",
        featured: true,
        visible: true
    },
    {
        id: 3,
        title: "Jawab kaisa denge?",
        description: "A thought-provoking message on personal accountability and faith.",
        thumbnail: "https://drive.google.com/thumbnail?id=1NevVasp0_oxZTc44U5T8L3m-r3hBl8r6&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1NevVasp0_oxZTc44U5T8L3m-r3hBl8r6/view?usp=drive_link",
        orientation: "vertical",
        category: "Question",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 4,
        title: "Tajweed Lessons",
        description: "Learning the beautiful art of Quranic recitation with proper Tajweed rules.",
        thumbnail: "https://drive.google.com/thumbnail?id=1v-Wn5uUkVc8nW9qkIn3dAh8_-XHAN37Y&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1v-Wn5uUkVc8nW9qkIn3dAh8_-XHAN37Y/view?usp=drive_link",
        orientation: "vertical",
        category: "Education",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 5,
        title: "Huroof Mastery",
        description: "Mastering the Arabic alphabet with clear pronunciation and visual guidance.",
        thumbnail: "https://drive.google.com/thumbnail?id=1HR-ILmZokr4qCPnydropMk8lWShmNa3r&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1HR-ILmZokr4qCPnydropMk8lWShmNa3r/view?usp=drive_link",
        orientation: "vertical",
        category: "Education",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 6,
        title: "YouthCare Awareness",
        description: "Empowering the youth with knowledge and support for a brighter future.",
        thumbnail: "https://drive.google.com/thumbnail?id=1oZmhq-kDZNijC5YRCK9fsjzcQ3iFegwo&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1oZmhq-kDZNijC5YRCK9fsjzcQ3iFegwo/view?usp=drive_link",
        orientation: "vertical",
        category: "Awareness",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 7,
        title: "Youth Q&A Session",
        description: "Addressing the most pressing questions from today's young generation.",
        thumbnail: "https://drive.google.com/thumbnail?id=1v2-ZLWXgCZ1C-IBSph16_Ya1kwbTx4F5&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1v2-ZLWXgCZ1C-IBSph16_Ya1kwbTx4F5/view?usp=drive_link",
        orientation: "vertical",
        category: "Social",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 8,
        title: "Falasteen - Resilience",
        description: "A moving tribute to the strength and spirit of the people of Palestine.",
        thumbnail: "https://drive.google.com/thumbnail?id=1vOeJ_fbHd91LNNcUZ9b1_T8A-qZzP9sC&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1vOeJ_fbHd91LNNcUZ9b1_T8A-qZzP9sC/view?usp=drive_link",
        orientation: "vertical",
        category: "Documentary",
        platform: "instagram",
        featured: true,
        visible: true
    },
    {
        id: 9,
        title: "Ameer bin Ishaq",
        description: "Exploring the legacy and impact of Ameer bin Ishaq through cinematic visuals.",
        thumbnail: "https://drive.google.com/thumbnail?id=1_ba09GhU55ERvUNEw0iodestsGLjZ5t-&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1_ba09GhU55ERvUNEw0iodestsGLjZ5t-/view?usp=drive_link",
        orientation: "vertical",
        category: "Portrait",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 10,
        title: "Eye Blessing",
        description: "A spiritual reflection on the gift of sight and its deeper meaning.",
        thumbnail: "https://drive.google.com/thumbnail?id=14Uuu9-lQ1IRT6vd3cu-vCLBueHFK2qkq&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/14Uuu9-lQ1IRT6vd3cu-vCLBueHFK2qkq/view?usp=drive_link",
        orientation: "vertical",
        category: "Reflection",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 11,
        title: "TPF Promo 2025",
        description: "The official promotional highlights for the TPF conference.",
        thumbnail: "https://drive.google.com/thumbnail?id=1kjGfrZtJyWJy6gZAUVL5LsLpWW7zMjil&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1kjGfrZtJyWJy6gZAUVL5LsLpWW7zMjil/view?usp=drive_link",
        orientation: "vertical",
        category: "Promo",
        platform: "instagram",
        featured: true,
        visible: true
    },
    {
        id: 12,
        title: "TPF Advertisement",
        description: "High-impact advertisement showcasing the core values of TPF.",
        thumbnail: "https://drive.google.com/thumbnail?id=1CU2jPEZtidl6KtsL0MzpT4cxG8hWoURw&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1CU2jPEZtidl6KtsL0MzpT4cxG8hWoURw/view?usp=drive_link",
        orientation: "vertical",
        category: "Ad",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 13,
        title: "YouthCare - Part 2",
        description: "Continuing the mission of YouthCare with new initiatives and stories.",
        thumbnail: "https://drive.google.com/thumbnail?id=1GelS7-HyDNbkplTyShf135KQLPuF6cKc&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1GelS7-HyDNbkplTyShf135KQLPuF6cKc/view?usp=drive_link",
        orientation: "vertical",
        category: "Awareness",
        platform: "instagram",
        featured: false,
        visible: true
    },
    {
        id: 14,
        title: "Clouds Miracle",
        description: "A breathtaking look at the wonders of nature in the sky.",
        thumbnail: "https://drive.google.com/thumbnail?id=1xwWUniyqL7BugnKthNQFKRR1Ub4nprgm&sz=w1000",
        videoUrl: "https://drive.google.com/file/d/1xwWUniyqL7BugnKthNQFKRR1Ub4nprgm/view?usp=drive_link",
        orientation: "vertical",
        category: "Nature",
        platform: "instagram",
        featured: false,
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
        heading: "Nehal Nadaf – Bringing Your Vision to Life",
        description: "I specialize in creating engaging content that resonates with audiences. From viral Instagram Reels to cinematic YouTube videos, I bring technical expertise and creative vision to every project.",
        image: "assets/nehal-photo.jpg",
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
        this.VERSION_KEY = 'portfolio_data_version';
        this.initializeData();
    }

    // Initialize data if not exists or if version mismatch
    initializeData() {
        const savedVersion = localStorage.getItem(this.VERSION_KEY);

        // If version is missing or outdated, force a reset to latest code defaults
        // This ensures updates to js/data.js are reflected for all users
        if (savedVersion !== DATA_VERSION || !localStorage.getItem(this.VIDEOS_KEY)) {
            console.log('Synchronizing portfolio data to version:', DATA_VERSION);
            this.saveVideos(defaultVideos);
            this.saveSiteContent(defaultSiteContent);
            localStorage.setItem(this.VERSION_KEY, DATA_VERSION);
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
