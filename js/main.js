// ===================================
// MAIN APPLICATION LOGIC
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initVideoGrid();
    initVideoModal();
    initContactForm();
    loadSiteContent();
}

// ===================================
// NAVIGATION
// ===================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Update active state
            navLinkItems.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Close mobile menu
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.section, .hero');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ===================================
// VIDEO GRID
// ===================================

let currentFilter = 'all';
let videosPerPage = 9;
let currentPage = 1;

function initVideoGrid() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    // Filter button click handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilter = button.getAttribute('data-filter');
            currentPage = 1;
            renderVideoGrid();
        });
    });

    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            renderVideoGrid(true);
        });
    }

    // Initial render
    renderVideoGrid();
}

function renderVideoGrid(append = false) {
    const videoGrid = document.getElementById('videoGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!videoGrid) return;

    const videos = dataManager.filterVideos(currentFilter);
    const startIndex = append ? (currentPage - 1) * videosPerPage : 0;
    const endIndex = currentPage * videosPerPage;
    const videosToShow = videos.slice(startIndex, endIndex);

    if (!append) {
        videoGrid.innerHTML = '';
    }

    if (videosToShow.length === 0 && !append) {
        videoGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-3xl);">
                <i class="fas fa-video" style="font-size: 4rem; color: var(--color-accent-primary); margin-bottom: var(--space-lg);"></i>
                <h3>No videos found</h3>
                <p style="color: rgba(255, 255, 255, 0.6);">Try selecting a different filter</p>
            </div>
        `;
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    videosToShow.forEach((video, index) => {
        const videoCard = createVideoCard(video);
        videoCard.style.animationDelay = `${index * 0.1}s`;
        videoGrid.appendChild(videoCard);
    });

    // Show/hide load more button
    if (loadMoreBtn) {
        if (endIndex >= videos.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }

    // Trigger reveal animation
    setTimeout(() => {
        const newCards = videoGrid.querySelectorAll('.video-card:not(.active)');
        newCards.forEach(card => card.classList.add('active'));
    }, 100);
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = `video-card glass reveal ${video.orientation}`;
    card.setAttribute('data-video-id', video.id);

    card.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" class="video-card-thumbnail" loading="lazy">
        <div class="video-card-play">
            <i class="fas fa-play"></i>
        </div>
        <div class="video-card-overlay">
            <h3 class="video-card-title">${video.title}</h3>
            <span class="video-card-category">${video.category}</span>
        </div>
    `;

    card.addEventListener('click', () => {
        openVideoModal(video);
    });

    return card;
}

// ===================================
// VIDEO MODAL
// ===================================

function initVideoModal() {
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('videoModalClose');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeVideoModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });
}

function openVideoModal(video) {
    const modal = document.getElementById('videoModal');
    const modalContent = document.getElementById('videoModalContent');
    const modalPlayer = document.getElementById('videoModalPlayer');
    const modalTitle = document.getElementById('videoModalTitle');
    const modalDescription = document.getElementById('videoModalDescription');

    if (!modal) return;

    // Show loading state immediately in the player container
    modalPlayer.style.backgroundImage = `url(${video.thumbnail})`;
    modalPlayer.style.backgroundSize = 'cover';
    modalPlayer.style.backgroundPosition = 'center';
    modalPlayer.innerHTML = `
        <div class="video-loader" style="background: rgba(0,0,0,0.4); width: 100%; height: 100%; backdrop-filter: blur(5px);">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Optimizing Player...</p>
        </div>
    `;

    // Set orientation class
    if (video.orientation === 'vertical') {
        modalContent.classList.add('vertical');
    } else {
        modalContent.classList.remove('vertical');
    }

    // Link processing for common platforms
    let finalVideoUrl = video.videoUrl;
    let isGoogleDrive = false;
    let googleDriveId = '';

    // Handle Google Drive Links
    if (finalVideoUrl.includes('drive.google.com')) {
        isGoogleDrive = true;
        if (finalVideoUrl.includes('/view')) {
            googleDriveId = finalVideoUrl.split('/d/')[1]?.split('/')[0] || '';
            finalVideoUrl = finalVideoUrl.replace(/\/view.*$/, '/preview');
        } else if (finalVideoUrl.includes('id=')) {
            const idMatch = finalVideoUrl.match(/id=([^&]+)/);
            if (idMatch) {
                googleDriveId = idMatch[1];
                finalVideoUrl = `https://drive.google.com/file/d/${googleDriveId}/preview`;
            }
        } else if (finalVideoUrl.includes('/file/d/')) {
            const idMatch = finalVideoUrl.match(/\/file\/d\/([^/]+)/);
            if (idMatch) {
                googleDriveId = idMatch[1];
                finalVideoUrl = `https://drive.google.com/file/d/${googleDriveId}/preview`;
            }
        }
    }

    // Set video content
    setTimeout(() => {
        const isYoutube = finalVideoUrl.includes('youtube.com') || finalVideoUrl.includes('youtu.be');

        if (isYoutube || isGoogleDrive) {
            // Use iframe for embedded players
            let embedUrl = finalVideoUrl;

            // Add necessary params for autoplay and speed
            if (isYoutube) {
                const separator = embedUrl.includes('?') ? '&' : '?';
                embedUrl = `${embedUrl}${separator}autoplay=1&rel=0&modestbranding=1`;
            } else if (isGoogleDrive) {
                // Google Drive /preview doesn't support many params, but let's keep it clean
            }

            modalPlayer.innerHTML = `
                <iframe 
                    src="${embedUrl}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    style="border: none; opacity: 0; transition: opacity 0.5s ease-in-out;"
                    onload="this.style.opacity='1'; const loader = this.parentElement.querySelector('.video-loader'); if(loader) loader.remove(); this.parentElement.style.backgroundImage='none';">
                </iframe>
                <div class="video-loader">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Optimizing Player...</p>
                </div>
            `;
        } else {
            // Use native video tag for direct files
            modalPlayer.innerHTML = `
                <video controls autoplay playsinline oncanplay="const loader = this.parentElement.querySelector('.video-loader'); if(loader) loader.remove(); this.parentElement.style.backgroundImage='none';">
                    <source src="${finalVideoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-loader">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Loading Video...</p>
                </div>
            `;
        }
    }, 100);

    // Set video info
    modalTitle.textContent = video.title;
    modalDescription.textContent = video.description;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalPlayer = document.getElementById('videoModalPlayer');

    if (!modal) return;

    // Stop video playback
    modalPlayer.innerHTML = '';

    // Hide modal
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===================================
// CONTACT FORM
// ===================================

function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            try {
                // 1. Send via FormSubmit (Email)
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // 2. Open WhatsApp (Automatic)
                    const whatsappNumber = "916363278962";
                    const whatsappMessage = `Hello Nehal!%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Message:* ${encodeURIComponent(message)}`;
                    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

                    // Success UI
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent to Email & WhatsApp!';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

                    // Reset form
                    form.reset();

                    // Show success notification
                    showNotification('Messages sent successfully!', 'success');
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error Sending';
                submitBtn.style.background = '#ef4444';
                showNotification('Something went wrong. Please try again.', 'error');
            } finally {
                // Reset button after 5 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 5000);
            }
        });
    }
}

// ===================================
// LOAD SITE CONTENT
// ===================================

function loadSiteContent() {
    const content = dataManager.getSiteContent();

    // Update hero section
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');

    if (heroTitle) heroTitle.textContent = content.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;

    // Update about section
    const aboutHeading = document.getElementById('aboutHeading');
    const aboutDescription = document.getElementById('aboutDescription');
    const aboutImage = document.getElementById('aboutImage');

    if (aboutHeading) aboutHeading.textContent = content.about.heading;
    if (aboutDescription) aboutDescription.textContent = content.about.description;
    if (aboutImage && content.about.image) aboutImage.src = content.about.image;

    // Update contact links
    const instagramLink = document.getElementById('instagramLink');
    const youtubeLink = document.getElementById('youtubeLink');
    const emailLink = document.getElementById('emailLink');
    const whatsappLink = document.getElementById('whatsappLink');

    if (instagramLink) instagramLink.href = content.contact.instagram;
    if (youtubeLink) youtubeLink.href = content.contact.youtube;
    if (emailLink) emailLink.href = `mailto:${content.contact.email}`;
    if (whatsappLink) whatsappLink.href = content.contact.whatsapp;
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: var(--space-lg) var(--space-xl);
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        color: white;
        font-weight: 500;
        box-shadow: var(--shadow-xl);
        z-index: var(--z-toast);
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;

    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    const iconColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#00d4ff';

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="width: 32px; height: 32px; background: ${iconColor}; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">
                ${icon}
            </div>
            <div>${message}</div>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
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
// SMOOTH SCROLL POLYFILL
// ===================================

// Smooth scroll for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollTo = (target) => {
        const targetPosition = target.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) smoothScrollTo(target);
        });
    });
}

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    // Scroll-dependent operations
}, 100);

window.addEventListener('scroll', debouncedScroll);

console.log('🎬 Cinematic Portfolio initialized successfully!');
