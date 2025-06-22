


document.addEventListener('DOMContentLoaded', function() {
  // Preloader
  const preloader = document.querySelector('.preloader');
  window.addEventListener('load', function() {
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        preloader.style.display = 'none';
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Hero slider
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Testimonials slider with smooth transitions
  const testimonials = document.querySelectorAll('.testimonial');
  const dotsContainer = document.querySelector('.testimonial-dots');
  let currentTestimonial = 0;
  let isAnimating = false;
  
  // Create dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showTestimonial(index));
    dotsContainer.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  function showTestimonial(n) {
    if (isAnimating || n === currentTestimonial) return;
    isAnimating = true;
    
    // Mark current testimonial as leaving
    testimonials[currentTestimonial].classList.add('leaving');
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[n].classList.add('active');
    
    setTimeout(() => {
      // Hide current testimonial
      testimonials[currentTestimonial].classList.remove('active', 'leaving');
      
      // Show new testimonial
      testimonials[n].classList.add('active');
      currentTestimonial = n;
      isAnimating = false;
    }, 800);
  }
  
  document.querySelector('.testimonial-next').addEventListener('click', () => {
    showTestimonial((currentTestimonial + 1) % testimonials.length);
  });
  
  document.querySelector('.testimonial-prev').addEventListener('click', () => {
    showTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  });
  
  // Auto change testimonial every 7 seconds
  setInterval(() => {
    showTestimonial((currentTestimonial + 1) % testimonials.length);
  }, 7000);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // Form submission
  const reservaForm = document.getElementById('reservaForm');
  if (reservaForm) {
    reservaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert('¡Gracias por tu reserva! Nos pondremos en contacto contigo para confirmarla.');
      this.reset();
    });
  }

  // Button hover effects
  const buttons = document.querySelectorAll('.btn, .btn-reserva, .btn-add');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Card hover effects
  const cards = document.querySelectorAll('.specialty-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });
});

class InfiniteScroller {
  constructor() {
    this.scrollElements = document.querySelectorAll('.scroller-content');
    this.baseSpeed = 40; // Velocidad fija
    
    this.init();
  }
  
  init() {
    this.duplicateContent();
    this.updateSpeed(this.baseSpeed);
  }
  
  duplicateContent() {
    this.scrollElements.forEach(el => {
      el.innerHTML += el.innerHTML;
    });
  }
  
  updateSpeed(speed) {
    this.scrollElements.forEach(el => {
      el.style.animationDuration = `${speed}s`;
    });
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  new InfiniteScroller();
});
/*

B. Diseño asistido con IA
Herramientas como Durable, 10Web o Framer AI crean sitios automáticamente.

Puedes usarlas como borradores rápidos y luego personalizarlos.

También puedes automatizar prototipos con Figma plugins + GPT-4 API.

*/
