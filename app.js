
// Portfolio data
const portfolioData = {
    "authorName": "Kalpit Sahu",
    "tagline": "Full-Stack Web Designer & Developer",
    "about": "Hi, I'm Kalpit Sahu. I craft fast, accessible and delightful digital experiences. From idea validation to final deploy, my workflow blends design thinking with performance-first code to help brands convert visitors into customers. When I'm not coding, you'll find me sketching interfaces or mentoring junior developers.",
    "portrait": "images/Kalpit.png",
    "skills": [
        { "category": "Front-End", "items": [{ "label": "HTML", "value": 95 }, { "label": "CSS", "value": 90 }, { "label": "JavaScript", "value": 85 }, { "label": "React", "value": 75 }] },
        { "category": "Back-End", "items": [{ "label": "Node.js", "value": 80 }, { "label": "Express", "value": 75 }] },
        { "category": "Tools", "items": [{ "label": "Git", "value": 90 }, { "label": "Figma", "value": 70 }, { "label": "Webpack", "value": 65 }] },
        { "category": "Soft Skills", "items": [{ "label": "Communication", "value": 88 }, { "label": "Teamwork", "value": 85 }, { "label": "Problem-Solving", "value": 90 }] }
    ],
    "projects": [
        {
            "slug": "html-intro",
            "title": "Introduction to HTML",
            "thumbnail": "images/project1-thumb.png",
            "hero": "images/project1-thumb.png",
            "description": "Building semantic, SEO-friendly markup for modern sites.",
            "problem": "Legacy pages used outdated tags hurting accessibility and SEO.",
            "process": "Refactored 20+ templates to semantic HTML5 elements, added ARIA landmarks, ran Lighthouse audits iteratively.",
            "result": "Accessibility score 99/100 and organic traffic up 18% in 3 months.",
            "kpi": "↑18% organic traffic",
            "tech": ["HTML", "ARIA", "Lighthouse"]
        },
        {
            "slug": "css-scaler",
            "title": "CSS: The Architect of Web Style",
            "thumbnail": "images/project2-thumb.png",
            "hero": "images/project2-thumb.png",
            "description": "Scalable and maintainable CSS architecture.",
            "problem": "Large codebase suffered from specificity wars and duplications.",
            "process": "Implemented BEM methodology with utility classes and CSS variables; introduced automated visual regression testing.",
            "result": "Stylesheet size reduced by 35% and team onboarding time halved.",
            "kpi": "-35% CSS bloat",
            "tech": ["CSS", "BEM", "PostCSS"]
        },
        {
            "slug": "js-interactive",
            "title": "JavaScript: Web Interactivity",
            "thumbnail": "images/project3-thumb.png",
            "hero": "images/project3-thumb.png",
            "description": "Progressive enhancement with vanilla JS + Three.js.",
            "problem": "Site engagement was low due to static pages.",
            "process": "Added micro-interactions, lazy-loaded animations, and 3D product explorer.",
            "result": "Average session duration increased from 1:20 to 2:10.",
            "kpi": "+50 sec dwell time",
            "tech": ["JavaScript", "Three.js", "IntersectionObserver"]
        },
        {
            "slug": "python-data",
            "title": "Python: Data Automation",
            "thumbnail": "images/project4-thumb.png",
            "hero": "images/project4-thumb.png",
            "description": "Automated data pipeline with Python.",
            "problem": "Manual report generation cost 8h per week.",
            "process": "Created ETL pipeline using Pandas and scheduled with cron.",
            "result": "Saved 30 hours/month and improved data accuracy.",
            "kpi": "30h/month saved",
            "tech": ["Python", "Pandas", "Cron"]
        }
    ],
    "testimonials": [
        { "name": "Alicia Gomez", "role": "Product Manager @ StartupX", "quote": "Kalpit turned our vague mockups into a polished product that our users love." },
        { "name": "Marcus Lee", "role": "CTO @ FinTechPro", "quote": "Delivered ahead of schedule with pixel-perfect code and a smile." },
        { "name": "Eva Müller", "role": "Design Lead @ Creatives", "quote": "Rare blend of design aesthetic and engineering rigor." }
    ],
    "blogPosts": [
        { "slug": "perf-budget", "title": "Web Performance Budgets: A Practical Guide", "date": "2025-06-15", "tags": ["Performance", "Best Practice"], "excerpt": "How to set, monitor, and enforce performance budgets in real projects.", "content": "<p>Performance budgets are essential constraints that help teams make informed decisions about what to include in their web applications. They serve as a forcing function to prioritize speed and user experience over feature bloat.</p><p>Start by establishing baseline metrics using tools like Lighthouse or WebPageTest. Set realistic targets for key metrics like First Contentful Paint, Largest Contentful Paint, and Total Blocking Time based on your users' devices and network conditions.</p><p>The real power comes from automation - integrate performance checks into your CI/CD pipeline using tools like Lighthouse CI or bundlesize. This catches performance regressions before they reach production.</p>" },
        { "slug": "a11y-checklist", "title": "Your 2025 Accessibility Checklist", "date": "2025-05-22", "tags": ["Accessibility"], "excerpt": "Ensure every release meets WCAG 2.2 without slowing dev cycles.", "content": "<p>Accessibility isn't a checklist item you complete once - it's an ongoing commitment to inclusive design. With WCAG 2.2 introducing new success criteria, it's time to update your processes.</p><p>Start with automated testing using tools like axe-core or Lighthouse, but remember they only catch about 30% of accessibility issues. Manual testing with keyboard navigation and screen readers is crucial.</p><p>Focus on the big wins: semantic HTML, proper heading structure, color contrast ratios, and keyboard accessibility. These foundational elements will solve the majority of accessibility barriers your users face.</p>" },
        { "slug": "design-systems", "title": "Scaling with Design Systems", "date": "2025-04-30", "tags": ["Design", "Workflow"], "excerpt": "Why and how to build a living design system.", "content": "<p>Design systems are more than component libraries - they're the shared language between design and development teams. They encode decisions about color, typography, spacing, and interaction patterns into reusable assets.</p><p>Start small with a basic color palette and typography scale. Document the 'why' behind each decision, not just the 'what'. This context helps teams make consistent decisions when the system doesn't cover their specific use case.</p><p>The key to adoption is making the system easier to use than building from scratch. Invest in developer experience with clear documentation, code examples, and integration with popular frameworks.</p>" }
    ],
    "social": { "linkedin": "https://linkedin.com/in/kalpitsahu", "github": "https://github.com/kalpitsahu", "twitter": "https://twitter.com/kalpit_dev" }
};

// Global variables
let currentTestimonial = 0;
let testimonialInterval;
let currentTheme = 'light';
let skillsAnimated = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    initializeNavigation();
    loadContent();
    initializeSkillsObserver();
    initializeTestimonials();
    initializeContactForm();
    initializeBackToTop();
    initializeScrollBehavior();
    initializeModalHandlers();
    initializeAboutAnimation();
});

// Theme management
function initializeTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!document.documentElement.hasAttribute('data-theme-manual')) {
            currentTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
        }
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.documentElement.setAttribute('data-theme-manual', 'true');
}

// Navigation management
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Handle CTA buttons and other navigation triggers
    document.addEventListener('click', handleGlobalNavigation);
}

function handleNavigation(e) {
    e.preventDefault();
    e.stopPropagation();

    const targetSection = e.target.getAttribute('data-section');
    if (targetSection) {
        showSection(targetSection);
        updateActiveNav(e.target);
    }
}

function handleGlobalNavigation(e) {
    if (e.target.hasAttribute('data-action')) {
        const action = e.target.getAttribute('data-action');
        if (action === 'scroll-to-contact') {
            e.preventDefault();
            e.stopPropagation();
            showSection('contact');
            updateActiveNav(document.querySelector('[data-section="contact"]'));
        }
    }

    if (e.target.hasAttribute('data-section') && !e.target.classList.contains('nav__link')) {
        const targetSection = e.target.getAttribute('data-section');
        e.preventDefault();
        e.stopPropagation();
        showSection(targetSection);
        updateActiveNav(document.querySelector(`[data-section="${targetSection}"]`));
    }
}

function initializeAboutAnimation() {
    const aboutImage = document.querySelector('.about-preview__image');
    const aboutText = document.querySelector('.about-preview__content');

    if (aboutImage && aboutText) {
        aboutImage.classList.add('animate-in');
        aboutText.classList.add('animate-in');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutImage.classList.add('visible');
                    aboutText.classList.add('visible');
                }
            });
        }, { threshold: 0.3 });

        observer.observe(aboutImage); // observe just one element to trigger both
    }
}


function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('section--active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('section--active');

        // Trigger skills animation if showing about or home sections
        if ((sectionId === 'home' || sectionId === 'about') && !skillsAnimated) {
            setTimeout(() => animateSkills(), 500);
        }

        // Scroll to top when changing sections
        window.scrollTo(0, 0);
    }
}

function updateActiveNav(activeLink) {
    document.querySelectorAll('.nav__link').forEach(link => {
        link.removeAttribute('aria-current');
    });
    if (activeLink) {
        activeLink.setAttribute('aria-current', 'page');
    }
}

// Content loading
function loadContent() {
    loadAboutContent();
    loadSkillsContent();
    loadProjectsContent();
    loadTestimonialsContent();
    loadBlogContent();
    loadSocialLinks();
}

function loadAboutContent() {
    const aboutText = document.getElementById('about-text');
    const aboutFullText = document.getElementById('about-full-text');

    if (aboutText) aboutText.textContent = portfolioData.about;
    if (aboutFullText) aboutFullText.textContent = portfolioData.about;

    const aboutImage = document.querySelector('.about-preview__image');
    if (aboutImage) {
        aboutImage.innerHTML = `<img src="${portfolioData.portrait}" alt="${portfolioData.authorName}" class="about-image" />`;
    }

    const fullAboutImage = document.querySelector('.about__image');
    if (fullAboutImage) {
        fullAboutImage.innerHTML = `<img src="${portfolioData.portrait}" alt="${portfolioData.authorName}" class="about-image" />`;
    }

}

function loadSkillsContent() {
    const skillsContainer = document.getElementById('skills-container');
    const skillsDetailedContainer = document.getElementById('skills-detailed-container');
    if (skillsContainer) {
        portfolioData.skills.forEach(category => {
            const categoryDiv = createSkillCategory(category);
            skillsContainer.appendChild(categoryDiv);
        });
    }

    if (skillsDetailedContainer) {
        portfolioData.skills.forEach(category => {
            const detailedCategoryDiv = createSkillCategory(category, true);
            skillsDetailedContainer.appendChild(detailedCategoryDiv);
        });
    }
}

function createSkillCategory(category, isDetailed = false) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';

    categoryDiv.innerHTML = `
        <h3>${category.category}</h3>
        <div class="skill-items">
            ${category.items.map(skill => `
                <div class="skill-item">
                    <div class="skill-circle">
                        <canvas width="80" height="80" data-percentage="${skill.value}"></canvas>
                    </div>
                    <div class="skill-label">${skill.label}</div>
                    <div class="skill-percentage">${skill.value}%</div>
                </div>
            `).join('')}
        </div>
    `;

    return categoryDiv;
}

function loadProjectsContent() {
    const projectsPreviewContainer = document.getElementById('projects-preview-container');
    const projectsContainer = document.getElementById('projects-container');

    // Load preview (first 4 projects)
    if (projectsPreviewContainer) {
        const previewProjects = portfolioData.projects.slice(0, 4);
        previewProjects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsPreviewContainer.appendChild(projectCard);
        });
    }

    // Load all projects
    if (projectsContainer) {
        portfolioData.projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });
    }
}

function createProjectCard(project) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'project-card';

    // Add click handler for modal
    cardDiv.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        showProjectModal(project);
    });

    cardDiv.innerHTML = `
        <div class="project-card__image">
            <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />
        </div>

        <div class="project-card__content">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    return cardDiv;
}

function showProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('project-detail-content');

    if (!modal || !content) return;

    content.innerHTML = `
        <div class="project-detail__hero">
         <img src="${project.hero}" alt="${project.title}" class="project-hero-image" />
        </div>
        <div class="project-detail__kpi">${project.kpi}</div>
        <h2>${project.title}</h2>
        <p style="font-size: var(--font-size-lg); margin-bottom: var(--space-32);">${project.description}</p>
        
        <div class="project-detail__section">
            <h3>Problem</h3>
            <p>${project.problem}</p>
        </div>
        
        <div class="project-detail__section">
            <h3>Process</h3>
            <p>${project.process}</p>
        </div>
        
        <div class="project-detail__section">
            <h3>Result</h3>
            <p>${project.result}</p>
        </div>
        
        <div class="project-tech" style="margin-top: var(--space-24);">
            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    const closeButton = modal.querySelector('.modal__close');
    if (closeButton) {
        closeButton.focus();
    }
}

function loadTestimonialsContent() {
    const testimonialsContainer = document.getElementById('testimonials-container');

    if (testimonialsContainer) {
        portfolioData.testimonials.forEach((testimonial, index) => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.className = `testimonial ${index === 0 ? 'active' : ''}`;

            testimonialDiv.innerHTML = `
                <blockquote class="testimonial__quote">"${testimonial.quote}"</blockquote>
                <div class="testimonial__author">${testimonial.name}</div>
                <div class="testimonial__role">${testimonial.role}</div>
            `;

            testimonialsContainer.appendChild(testimonialDiv);
        });
    }
}

function loadBlogContent() {
    const blogPreviewContainer = document.getElementById('blog-preview-container');
    const blogContainer = document.getElementById('blog-container');
    const blogTagsContainer = document.getElementById('blog-tags');

    // Load preview (first 3 posts)
    if (blogPreviewContainer) {
        const previewPosts = portfolioData.blogPosts.slice(0, 3);
        previewPosts.forEach(post => {
            const blogCard = createBlogCard(post);
            blogPreviewContainer.appendChild(blogCard);
        });
    }

    // Load all posts
    if (blogContainer) {
        portfolioData.blogPosts.forEach(post => {
            const blogCard = createBlogCard(post);
            blogContainer.appendChild(blogCard);
        });
    }

    // Create tag filters
    if (blogTagsContainer) {
        const allTags = [...new Set(portfolioData.blogPosts.flatMap(post => post.tags))];
        allTags.forEach(tag => {
            const tagButton = document.createElement('button');
            tagButton.className = 'blog-filter';
            tagButton.textContent = tag;
            tagButton.setAttribute('data-tag', tag);
            tagButton.addEventListener('click', () => filterBlogPosts(tag));
            blogTagsContainer.appendChild(tagButton);
        });
    }
}

function createBlogCard(post) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'blog-card';
    cardDiv.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        showBlogModal(post);
    });

    const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    cardDiv.innerHTML = `
        <div class="blog-card__content">
            <h3 class="blog-card__title">${post.title}</h3>
            <div class="blog-card__date">${date}</div>
            <p class="blog-card__excerpt">${post.excerpt}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return cardDiv;
}

function showBlogModal(post) {
    const modal = document.getElementById('blog-modal');
    const content = document.getElementById('blog-post-content');

    if (!modal || !content) return;

    const date = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    content.innerHTML = `
        <h1 style="margin-bottom: var(--space-16);">${post.title}</h1>
        <div style="color: var(--color-text-secondary); margin-bottom: var(--space-24); font-size: var(--font-size-base);">${date}</div>
        <div style="margin-bottom: var(--space-24);">
            ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
        </div>
        <div style="line-height: 1.7; font-size: var(--font-size-base);">
            ${post.content}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    const closeButton = modal.querySelector('.modal__close');
    if (closeButton) {
        closeButton.focus();
    }
}

function filterBlogPosts(selectedTag) {
    const blogCards = document.querySelectorAll('#blog-container .blog-card');
    const filterButtons = document.querySelectorAll('.blog-filter');

    // Update active filter
    filterButtons.forEach(btn => {
        btn.classList.remove('blog-filter--active');
        if (btn.getAttribute('data-tag') === selectedTag || (selectedTag === 'all' && btn.textContent === 'All')) {
            btn.classList.add('blog-filter--active');
        }
    });

    // Filter posts
    blogCards.forEach((card, index) => {
        const post = portfolioData.blogPosts[index];
        if (selectedTag === 'all' || post.tags.includes(selectedTag)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function loadSocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');

    if (socialLinksContainer) {
        Object.entries(portfolioData.social).forEach(([platform, url]) => {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
            socialLinksContainer.appendChild(link);
        });
    }
}

// Skills animation with Canvas
function initializeSkillsObserver() {
    const skillsSection = document.querySelector('.skills-preview');

    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !skillsAnimated) {
                    animateSkills();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }
}

function animateSkills() {
    if (skillsAnimated) return;
    skillsAnimated = true;

    const canvases = document.querySelectorAll('.skill-circle canvas');

    canvases.forEach((canvas, index) => {
        setTimeout(() => {
            animateSkillCircle(canvas);
        }, index * 200);
    });
}

function animateSkillCircle(canvas) {
    const ctx = canvas.getContext('2d');
    const percentage = parseInt(canvas.getAttribute('data-percentage'));
    const centerX = 40;
    const centerY = 40;
    const radius = 30;

    let currentPercentage = 0;
    const increment = percentage / 60; // 60 frames for 1 second animation

    function drawCircle() {
        ctx.clearRect(0, 0, 80, 80);

        // Background circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.lineWidth = 6;
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-border');
        ctx.stroke();

        // Progress circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, (-Math.PI / 2) + (2 * Math.PI * currentPercentage / 100));
        ctx.lineWidth = 6;
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
        ctx.lineCap = 'round';
        ctx.stroke();

        // Percentage text
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text-primary');
        ctx.font = '12px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(Math.round(currentPercentage) + '%', centerX, centerY + 4);

        if (currentPercentage < percentage) {
            currentPercentage += increment;
            requestAnimationFrame(drawCircle);
        }
    }

    drawCircle();
}

// Testimonials carousel
function initializeTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length === 0) return;

    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }

    // Auto-advance every 5 seconds
    testimonialInterval = setInterval(showNextTestimonial, 5000);

    // Pause on hover
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });

        testimonialsContainer.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(showNextTestimonial, 5000);
        });
    }
}

// Contact form
function initializeContactForm() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (validateForm()) {
                try {
                    const formData = new FormData(form);
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        showFormSuccess();
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    alert('There was an error sending your message. Please try again.');
                }
            }
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    }
}

function validateForm() {
    const form = document.getElementById('contact-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();

    clearFieldError(field);

    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }

    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }

    return true;
}

function showFieldError(field, message) {
    const errorContainer = field.parentNode.querySelector('.form-error');
    if (errorContainer) {
        errorContainer.textContent = message;
        errorContainer.classList.add('visible');
        field.style.borderColor = 'var(--color-error)';
    }
}

function clearFieldError(field) {
    const errorContainer = field.parentNode.querySelector('.form-error');
    if (errorContainer) {
        errorContainer.textContent = '';
        errorContainer.classList.remove('visible');
        field.style.borderColor = '';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormSuccess() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');

    if (form) form.classList.add('hidden');
    if (successMessage) successMessage.classList.remove('hidden');
}

// Modal management
function initializeModalHandlers() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal__close')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}

// Back to top button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            showSection('home');
            updateActiveNav(document.querySelector('[data-section="home"]'));
        });

        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }
}

// Smooth scroll behavior
function initializeScrollBehavior() {
    // Smooth scroll for anchor links
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // Tab trapping in modals
    const activeModal = document.querySelector('.modal.active');
    if (activeModal && e.key === 'Tab') {
        trapTab(e, activeModal);
    }
});

function trapTab(e, modal) {
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
    } else {
        if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }
    }
}

// app.js
const canvas = document.getElementById('plexusCanvas');
const ctx = canvas.getContext('2d');

let numParticles = window.innerWidth < 768 ? 80 : 200;
const particleRadius = 2;
const maxLineDistance = 100;
const particleSpeed = 0.3;
const mouseInfluenceRadius = 150;

let particles = [];
let mouse = { x: null, y: null, active: false };

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
}
resizeCanvas();

window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
});
window.addEventListener('mouseout', () => {
    mouse.active = false;
});
canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
        mouse.active = true;
    }
});
canvas.addEventListener('touchend', () => {
    mouse.active = false;
});

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * particleSpeed * 2;
        this.vy = (Math.random() - 0.5) * particleSpeed * 2;
        this.radius = particleRadius;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.vx *= -1;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.vy *= -1;
        }

        if (mouse.active) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouseInfluenceRadius) {
                const forceX = dx / distance;
                const forceY = dy / distance;
                const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
                this.x -= forceX * force * 2;
                this.y -= forceY * force * 2;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(33, 128, 141, 0.8)';
        ctx.fill();
        ctx.closePath();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particles.push(new Particle(x, y));
    }
}
initParticles();

function drawLines() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxLineDistance) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(33, 128, 141, ${1 - dist / maxLineDistance})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    drawLines();
    requestAnimationFrame(animate);
}
animate();


// --- Animation Loop ---
function animate() {
    // Clear the canvas for the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Draw lines between particles
        for (let j = i; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxLineDistance) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                // Line opacity based on distance (closer = more opaque)
                ctx.strokeStyle = `rgba(33, 128, 141, ${1 - (distance / maxLineDistance)})`;
                ctx.lineWidth = 0.5; // Thin lines
                ctx.stroke();
                ctx.closePath();
            }
        }
    }

    // Draw lines from mouse to nearby particles
    if (mouse.active) {
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseInfluenceRadius) {
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = `rgba(33, 128, 141, ${1 - (distance / mouseInfluenceRadius)})`; // Blue lines to mouse
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.closePath();
            }
        }
    }

    // Request the next frame
    requestAnimationFrame(animate);
}

// Start the animation
initParticles();
animate();
