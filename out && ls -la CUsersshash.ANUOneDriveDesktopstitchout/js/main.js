/**
 * Ambika Builders - Main JavaScript
 * Shared functionality across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavigation();
    initScrollAnimations();
    initMobileMenu();
    initSmoothScroll();
});

/**
 * Navigation scroll effects
 * Changes navbar appearance on scroll
 */
function initNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            nav.classList.add('nav-scrolled');
            nav.classList.remove('py-5');
            nav.classList.add('py-3');
        } else {
            nav.classList.remove('nav-scrolled');
            nav.classList.remove('py-3');
            nav.classList.add('py-5');
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Scroll-triggered animations using Intersection Observer
 * Elements with .reveal class will animate when scrolled into view
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length === 0) return;
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionally unobserve after animation
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.mobile-menu-close');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        document.body.classList.toggle('overflow-hidden');
    });
    
    if (menuClose) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        });
    }
    
    // Close menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        });
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Form validation utilities
 */
const FormValidator = {
    // Email validation
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    // Phone validation (Indian format)
    isValidPhone(phone) {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
    },
    
    // Required field check
    isNotEmpty(value) {
        return value.trim().length > 0;
    },
    
    // Show error message
    showError(input, message) {
        const formGroup = input.closest('.form-group') || input.parentElement;
        formGroup.classList.add('has-error');
        
        let errorEl = formGroup.querySelector('.error-message');
        if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.className = 'error-message text-red-400 text-xs mt-1 block';
            formGroup.appendChild(errorEl);
        }
        errorEl.textContent = message;
        
        input.classList.add('border-red-500');
    },
    
    // Clear error
    clearError(input) {
        const formGroup = input.closest('.form-group') || input.parentElement;
        formGroup.classList.remove('has-error');
        
        const errorEl = formGroup.querySelector('.error-message');
        if (errorEl) errorEl.remove();
        
        input.classList.remove('border-red-500');
    },
    
    // Clear all errors in form
    clearAllErrors(form) {
        form.querySelectorAll('.has-error').forEach(group => {
            group.classList.remove('has-error');
            const errorEl = group.querySelector('.error-message');
            if (errorEl) errorEl.remove();
        });
        form.querySelectorAll('.border-red-500').forEach(input => {
            input.classList.remove('border-red-500');
        });
    }
};

/**
 * Counter animation for statistics
 * Animates numbers counting up
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

/**
 * Lazy loading for images
 * Uses Intersection Observer to load images only when visible
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * Utility: Debounce function
 * Limits how often a function can fire
 */
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

/**
 * Utility: Throttle function
 * Ensures function is called at most once per wait period
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Format price in Indian format
 * Converts 24000000 to "₹2.4 Cr"
 */
function formatPrice(amount) {
    if (amount >= 10000000) {
        return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(0)} Lakhs`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Format area with sqft
 */
function formatArea(sqft) {
    return `${sqft.toLocaleString('en-IN')} sqft`;
}

// Export utilities for use in page-specific scripts
window.AmbikaUtils = {
    FormValidator,
    animateCounter,
    debounce,
    throttle,
    formatPrice,
    formatArea
};
