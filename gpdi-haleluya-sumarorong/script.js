// INITIALIZE LUCIDE ICONS
lucide.createIcons();

// MOBILE MENU TOGGLE
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isHidden = mobileMenu.classList.contains('hidden');
    menuIcon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
    lucide.createIcons();
});

// NAVBAR SCROLL EFFECT
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// GOLGOTA ANIMATION ON SCROLL
const golgota = document.getElementById('golgota-container');
window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / window.innerHeight;
    if (scrollPercent <= 0.5) {
        const scale = 1 + (scrollPercent * 1.5);
        const opacity = 1 - (scrollPercent * 0.5);
        const y = scrollPercent * -150;
        
        golgota.style.transform = `translateX(-50%) scale(${scale}) translateY(${y}px)`;
        golgota.style.opacity = opacity;
    }
});

// REVEAL SECTIONS ON SCROLL
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// SET CURRENT YEAR
document.getElementById('year').textContent = new Date().getFullYear();

// CLOSE MOBILE MENU ON LINK CLICK
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});
