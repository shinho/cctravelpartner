let currentSlide = 0;
const totalSlides = 3;
const track = document.getElementById('hero-carousel');
const dots = document.querySelectorAll('.carousel-dot');

function moveCarousel(index) {
    if (!track) return;
    currentSlide = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('bg-white');
            dot.classList.remove('bg-white/40');
            dot.style.width = '12px';
            dot.style.borderRadius = '2px';
        } else {
            dot.classList.remove('bg-white');
            dot.classList.add('bg-white/40');
            dot.style.width = '6px';
            dot.style.borderRadius = '50%';
        }
    });
}

if (track) {
    moveCarousel(0);
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        moveCarousel(currentSlide);
    }, 7000);
}

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('header');

    if (currentScroll <= 0) {
        header.classList.remove('shadow-xl');
        header.style.backgroundColor = 'rgba(245, 240, 225, 0.95)';
        return;
    }

    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
        header.classList.add('shadow-xl');
        header.style.backgroundColor = 'rgba(245, 240, 225, 0.98)';
    }
    lastScroll = currentScroll;
});
