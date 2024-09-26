// 네비게이션 바 배경 변경
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// 부드러운 스크롤
const navLinks = document.querySelectorAll('.nav-links a');

for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
    });
}
