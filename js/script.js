// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav ul');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Cast Slider
const castContainer = document.querySelector('.cast-container');
const castMembers = document.querySelectorAll('.cast-member');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (castContainer && prevBtn && nextBtn) {
    let currentIndex = 0;
    const memberWidth = 250 + 30; // width + margin
    
    function updateSlider() {
        castContainer.style.transform = `translateX(-${currentIndex * memberWidth}px)`;
    }
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < castMembers.length - 3) {
            currentIndex++;
            updateSlider();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        if (currentIndex < castMembers.length - 3) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 5000);
}

// Responsive nav adjustment
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav) {
        nav.style.display = 'flex';
    } else if (nav) {
        nav.style.display = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});