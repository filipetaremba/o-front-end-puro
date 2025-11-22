// ========================================
// UNIVERSIDADE ZAMBEZE - HERO SLIDER
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const slider = {
        slides: document.querySelectorAll('.slide'),
        dotsContainer: document.querySelector('.slider-dots'),
        prevBtn: document.querySelector('.slider-prev'),
        nextBtn: document.querySelector('.slider-next'),
        currentSlide: 0,
        slideInterval: null,

        init() {
            if (!this.slides.length) return;
            
            this.createDots();
            this.attachEvents();
            this.startAutoPlay();
        },

        createDots() {
            this.slides.forEach((_, index) => {
                const dot = document.createElement('span');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(index));
                this.dotsContainer.appendChild(dot);
            });
        },

        attachEvents() {
            this.prevBtn?.addEventListener('click', () => this.prevSlide());
            this.nextBtn?.addEventListener('click', () => this.nextSlide());
        },

        goToSlide(index) {
            this.slides[this.currentSlide].classList.remove('active');
            this.dotsContainer.children[this.currentSlide].classList.remove('active');

            this.currentSlide = index;

            this.slides[this.currentSlide].classList.add('active');
            this.dotsContainer.children[this.currentSlide].classList.add('active');

            this.resetAutoPlay();
        },

        nextSlide() {
            const next = (this.currentSlide + 1) % this.slides.length;
            this.goToSlide(next);
        },

        prevSlide() {
            const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.goToSlide(prev);
        },

        startAutoPlay() {
            this.slideInterval = setInterval(() => this.nextSlide(), 5000);
        },

        resetAutoPlay() {
            clearInterval(this.slideInterval);
            this.startAutoPlay();
        }
    };

    slider.init();
});