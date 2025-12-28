// ===================================
// ADMIN PANEL LOGIC
// ===================================

// Authentication credentials (in production, use proper backend auth)
const ADMIN_CREDENTIALS = {
    email: 'admin@portfolio.com',
    password: 'admin123'
};

// Session management
const AUTH_KEY = 'admin_authenticated';
let currentEditingVideoId = null;

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
    initializeAdminPanel();
});

function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem(AUTH_KEY);

    if (isAuthenticated === 'true') {
        showDashboard();
    } else {
        showLogin();
    }
}

function showLogin() {
    document.getElementById('loginContainer').classList.remove('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
}

function showDashboard() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('adminDashboard').classList.remove('hidden');
}

// ===================================
// LOGIN HANDLING
// ===================================

function initializeAdminPanel() {
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Initialize all other components
    initSidebarNavigation();
    initVideoManagement();
    initContentManagement();
    initFileUploads();
    initSettings();
    initTabs();
}

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem(AUTH_KEY, 'true');
        showDashboard();
        loadAllData();
        showNotification('Welcome back! Login successful.', 'success');
    } else {
        showNotification('Invalid credentials. Please try again.', 'error');
    }
}

function handleLogout(e) {
    e.preventDefault();
    sessionStorage.removeItem(AUTH_KEY);
    showLogin();
    showNotification('Logged out successfully.', 'success');
}

// ===================================
// SIDEBAR NAVIGATION
// ===================================

function initSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link[data-section]');
    const sectionTitle = document.getElementById('sectionTitle');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const sectionName = link.getAttribute('data-section');

            // Update active state
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show corresponding section
            document.querySelectorAll('.admin-section').forEach(section => {
                section.classList.remove('active');
            });

            const section = document.getElementById(`${sectionName}Section`);
            if (section) {
                section.classList.add('active');
            }

            // Update title
            const titles = {
                'videos': 'Video Management',
                'content': 'Site Content',
                'settings': 'Settings'
            };
            sectionTitle.textContent = titles[sectionName] || 'Dashboard';
        });
    });

    // View site button
    const viewSiteBtn = document.getElementById('viewSiteBtn');
    if (viewSiteBtn) {
        viewSiteBtn.addEventListener('click', () => {
            window.open('../index.html', '_blank');
        });
    }
}

// ===================================
// VIDEO MANAGEMENT
// ===================================

function initVideoManagement() {
    const importFileInput = document.getElementById('importFileInput');
    const clearAllVideosBtn = document.getElementById('clearAllVideosBtn');

    if (addVideoBtn) {
        addVideoBtn.addEventListener('click', () => {
            currentEditingVideoId = null;
            openVideoModal();
        });
    }

    if (videoForm) {
        videoForm.addEventListener('submit', handleVideoSubmit);
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeVideoModal);
    }

    if (cancelVideoBtn) {
        cancelVideoBtn.addEventListener('click', closeVideoModal);
    }

    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', exportData);
    }

    if (importDataBtn) {
        importDataBtn.addEventListener('click', () => {
            importFileInput.click();
        });
    }

    if (importFileInput) {
        importFileInput.addEventListener('change', handleImportData);
    }

    if (clearAllVideosBtn) {
        clearAllVideosBtn.addEventListener('click', handleClearAllVideos);
    }

    loadVideosList();
}

function loadVideosList() {
    const videosList = document.getElementById('videosList');
    if (!videosList) return;

    const videos = dataManager.getVideos();

    if (videos.length === 0) {
        videosList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-video"></i>
                <h3>No videos yet</h3>
                <p>Click "Add New Video" to get started</p>
            </div>
        `;
        return;
    }

    videosList.innerHTML = '';

    videos.forEach(video => {
        const videoItem = createVideoItem(video);
        videosList.appendChild(videoItem);
    });
}

function createVideoItem(video) {
    const item = document.createElement('div');
    item.className = `video-item ${video.orientation}`;
    item.setAttribute('data-video-id', video.id);

    const visibilityBadge = video.visible
        ? ''
        : '<span class="video-badge hidden">Hidden</span>';

    const featuredBadge = video.featured
        ? '<span class="video-badge featured">Featured</span>'
        : '';

    item.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" class="video-item-thumbnail">
        <div class="video-item-info">
            <div class="video-item-title">
                ${video.title}
            </div>
            <div class="video-item-meta">
                <span class="video-badge">${video.orientation}</span>
                <span class="video-badge">${video.category}</span>
                <span class="video-badge">${video.platform}</span>
                ${featuredBadge}
                ${visibilityBadge}
            </div>
            <div class="video-item-description">
                ${video.description}
            </div>
        </div>
        <div class="video-item-actions">
            <button class="icon-btn toggle" onclick="toggleVideoVisibility(${video.id})" title="${video.visible ? 'Hide' : 'Show'}">
                <i class="fas fa-eye${video.visible ? '' : '-slash'}"></i>
            </button>
            <button class="icon-btn edit" onclick="editVideo(${video.id})" title="Edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="icon-btn delete" onclick="deleteVideo(${video.id})" title="Delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;

    return item;
}

function openVideoModal(video = null) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const form = document.getElementById('videoForm');

    if (video) {
        modalTitle.textContent = 'Edit Video';
        currentEditingVideoId = video.id;

        // Populate form
        document.getElementById('videoId').value = video.id;
        document.getElementById('videoTitle').value = video.title;
        document.getElementById('videoDescription').value = video.description;
        document.getElementById('videoThumbnail').value = video.thumbnail;
        document.getElementById('videoUrl').value = video.videoUrl;
        document.getElementById('videoOrientation').value = video.orientation;
        document.getElementById('videoCategory').value = video.category;
        document.getElementById('videoPlatform').value = video.platform;
        document.getElementById('videoFeatured').checked = video.featured;
        document.getElementById('videoVisible').checked = video.visible;
    } else {
        modalTitle.textContent = 'Add New Video';
        form.reset();
        document.getElementById('videoVisible').checked = true;
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Clear any previous previews
    resetFileUploadStates();
}

function resetFileUploadStates() {
    const thumbPreview = document.getElementById('thumbPreview');
    const videoPreview = document.getElementById('videoPreview');

    if (thumbPreview) thumbPreview.classList.remove('active');
    if (videoPreview) videoPreview.classList.remove('active');

    const thumbUpload = document.getElementById('thumbUpload');
    const videoUpload = document.getElementById('videoUpload');

    if (thumbUpload) thumbUpload.value = '';
    if (videoUpload) videoUpload.value = '';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const form = document.getElementById('videoForm');

    modal.classList.add('hidden');
    document.body.style.overflow = '';
    form.reset();
    currentEditingVideoId = null;
}

function handleVideoSubmit(e) {
    e.preventDefault();

    const videoData = {
        title: document.getElementById('videoTitle').value,
        description: document.getElementById('videoDescription').value,
        thumbnail: document.getElementById('videoThumbnail').value,
        videoUrl: document.getElementById('videoUrl').value,
        orientation: document.getElementById('videoOrientation').value,
        category: document.getElementById('videoCategory').value,
        platform: document.getElementById('videoPlatform').value,
        featured: document.getElementById('videoFeatured').checked,
        visible: document.getElementById('videoVisible').checked
    };

    if (currentEditingVideoId) {
        dataManager.updateVideo(currentEditingVideoId, videoData);
        showNotification('Video updated successfully!', 'success');
    } else {
        dataManager.addVideo(videoData);
        showNotification('Video added successfully!', 'success');
    }

    loadVideosList();
    closeVideoModal();
}

// Global functions for inline onclick handlers
window.editVideo = function (id) {
    const video = dataManager.getVideoById(id);
    if (video) {
        openVideoModal(video);
    }
};

window.deleteVideo = function (id) {
    if (confirm('Are you sure you want to delete this video?')) {
        dataManager.deleteVideo(id);
        loadVideosList();
        showNotification('Video deleted successfully!', 'success');
    }
};

window.toggleVideoVisibility = function (id) {
    const video = dataManager.toggleVideoVisibility(id);
    if (video) {
        loadVideosList();
        showNotification(`Video ${video.visible ? 'shown' : 'hidden'} successfully!`, 'success');
    }
};

function handleClearAllVideos() {
    if (confirm('Are you sure you want to delete ALL videos? This cannot be undone.')) {
        dataManager.saveVideos([]);
        loadVideosList();
        showNotification('All videos cleared! You can now start fresh.', 'success');
    }
}

// ===================================
// CONTENT MANAGEMENT
// ===================================

function initContentManagement() {
    const heroForm = document.getElementById('heroForm');
    const aboutForm = document.getElementById('aboutForm');
    const contactForm = document.getElementById('contactForm');

    if (heroForm) {
        heroForm.addEventListener('submit', handleHeroSubmit);
    }

    if (aboutForm) {
        aboutForm.addEventListener('submit', handleAboutSubmit);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    loadContentData();
}

function loadContentData() {
    const content = dataManager.getSiteContent();

    // Load hero content
    if (document.getElementById('heroTitle')) {
        document.getElementById('heroTitle').value = content.hero.title;
        document.getElementById('heroSubtitle').value = content.hero.subtitle;
    }

    // Load about content
    if (document.getElementById('aboutHeading')) {
        document.getElementById('aboutHeading').value = content.about.heading;
        document.getElementById('aboutDescription').value = content.about.description;
        document.getElementById('aboutImage').value = content.about.image;
    }

    // Load contact content
    if (document.getElementById('contactInstagram')) {
        document.getElementById('contactInstagram').value = content.contact.instagram;
        document.getElementById('contactYoutube').value = content.contact.youtube;
        document.getElementById('contactEmail').value = content.contact.email;
        document.getElementById('contactWhatsapp').value = content.contact.whatsapp;
    }
}

function handleHeroSubmit(e) {
    e.preventDefault();

    const heroData = {
        title: document.getElementById('heroTitle').value,
        subtitle: document.getElementById('heroSubtitle').value
    };

    dataManager.updateSiteContent('hero', heroData);
    showNotification('Hero section updated successfully!', 'success');
}

function handleAboutSubmit(e) {
    e.preventDefault();

    const aboutData = {
        heading: document.getElementById('aboutHeading').value,
        description: document.getElementById('aboutDescription').value,
        image: document.getElementById('aboutImage').value
    };

    dataManager.updateSiteContent('about', aboutData);
    showNotification('About section updated successfully!', 'success');
}

function handleContactSubmit(e) {
    e.preventDefault();

    const contactData = {
        instagram: document.getElementById('contactInstagram').value,
        youtube: document.getElementById('contactYoutube').value,
        email: document.getElementById('contactEmail').value,
        whatsapp: document.getElementById('contactWhatsapp').value
    };

    dataManager.updateSiteContent('contact', contactData);
    showNotification('Contact information updated successfully!', 'success');
}

// ===================================
// TABS
// ===================================

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show corresponding tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            const tabContent = document.getElementById(`${tabName}Tab`);
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });
}

// ===================================
// SETTINGS
// ===================================

function initSettings() {
    const resetDataBtn = document.getElementById('resetDataBtn');
    const clearCacheBtn = document.getElementById('clearCacheBtn');
    const changePasswordForm = document.getElementById('changePasswordForm');

    if (resetDataBtn) {
        resetDataBtn.addEventListener('click', handleResetData);
    }

    if (clearCacheBtn) {
        clearCacheBtn.addEventListener('click', handleClearCache);
    }

    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', handleChangePassword);
    }
}

function handleResetData() {
    if (confirm('Are you sure you want to reset all data to defaults? This cannot be undone.')) {
        dataManager.resetToDefaults();
        loadAllData();
        showNotification('Data reset to defaults successfully!', 'success');
    }
}

function handleClearCache() {
    if (confirm('Clear browser cache? This will refresh the page.')) {
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
    }
}

function handleChangePassword(e) {
    e.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }

    if (newPassword.length < 6) {
        showNotification('Password must be at least 6 characters long!', 'error');
        return;
    }

    // In production, this would update the backend
    ADMIN_CREDENTIALS.password = newPassword;
    localStorage.setItem('admin_password', newPassword);

    document.getElementById('changePasswordForm').reset();
    showNotification('Password updated successfully!', 'success');
}

// ===================================
// DATA IMPORT/EXPORT
// ===================================

function exportData() {
    const data = dataManager.exportData();
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    URL.revokeObjectURL(url);
    showNotification('Data exported successfully!', 'success');
}

function handleImportData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            dataManager.importData(data);
            loadAllData();
            showNotification('Data imported successfully!', 'success');
        } catch (error) {
            showNotification('Error importing data. Please check the file format.', 'error');
        }
    };
    reader.readAsText(file);

    // Reset file input
    e.target.value = '';
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

function loadAllData() {
    loadVideosList();
    loadContentData();
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: var(--space-lg) var(--space-xl);
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        color: white;
        font-weight: 500;
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
        min-width: 300px;
    `;

    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    const iconColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#00d4ff';

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="width: 32px; height: 32px; background: ${iconColor}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">
                ${icon}
            </div>
            <div style="flex: 1;">${message}</div>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// FILE UPLOAD SIMULATION
// ===================================

function initFileUploads() {
    const thumbUpload = document.getElementById('thumbUpload');
    const videoUpload = document.getElementById('videoUpload');
    const removeThumb = document.getElementById('removeThumb');
    const removeVideo = document.getElementById('removeVideo');

    if (thumbUpload) {
        thumbUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const videoThumbnail = document.getElementById('videoThumbnail');
                const thumbPreview = document.getElementById('thumbPreview');
                const previewImg = thumbPreview.querySelector('img');
                const previewInfo = thumbPreview.querySelector('.preview-info');

                // Set path to assets folder
                const path = `assets/${file.name}`;
                videoThumbnail.value = path;

                // Show preview
                const reader = new FileReader();
                reader.onload = (e) => {
                    previewImg.src = e.target.result;
                    previewInfo.textContent = file.name;
                    thumbPreview.classList.add('active');
                };
                reader.readAsDataURL(file);

                showNotification('File selected. Remember to move it to your assets folder!', 'info');
            }
        });
    }

    if (videoUpload) {
        videoUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const videoUrl = document.getElementById('videoUrl');
                const videoPreview = document.getElementById('videoPreview');
                const previewInfo = videoPreview.querySelector('.preview-info');

                // Set path to assets folder
                const path = `assets/${file.name}`;
                videoUrl.value = path;

                // Show preview
                previewInfo.textContent = file.name;
                videoPreview.classList.add('active');

                showNotification('Video selected. Remember to move it to your assets folder!', 'info');
            }
        });
    }

    if (removeThumb) {
        removeThumb.addEventListener('click', () => {
            document.getElementById('thumbUpload').value = '';
            document.getElementById('videoThumbnail').value = '';
            document.getElementById('thumbPreview').classList.remove('active');
        });
    }

    if (removeVideo) {
        removeVideo.addEventListener('click', () => {
            document.getElementById('videoUpload').value = '';
            document.getElementById('videoUrl').value = '';
            document.getElementById('videoPreview').classList.remove('active');
        });
    }
}

console.log('🎬 Admin Panel initialized successfully!');
