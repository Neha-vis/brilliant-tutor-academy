// Stats Swiper
var statsSwiper = new Swiper('.statsSwiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: false,
  grabCursor: true,
  breakpoints: {
    1024: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    480: { slidesPerView: 1, spaceBetween: 20 },
  }
});

// Count Up 
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.stat-value');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText.replace(/,/g, '');
      const increment = target / 100;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment).toLocaleString();
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
});

// General Swiper
var generalSwiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 30 },
  }
});

// Testimonial Swiper
var testimonialSwiper = new Swiper('.myTestimonialSwiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 3, 

  breakpoints: {
    
    0: {
      slidesPerView: 1,
      centeredSlides: false,
    },
   
    768: {
      slidesPerView: 2,
    },
   
    1024: {
      slidesPerView: 3,
    },
  },

  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      const activeText = activeSlide.querySelector('.testimonial-text')?.textContent || '';
      document.getElementById('testimonial-content').textContent = `“${activeText}”`;
    }
  }
});
