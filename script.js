// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  
  // Typing Effect
  const typingText = document.querySelector(".typing-text");
  const words = ["Full Stack Web Developer", "MERN Stack Developer", "Programmer"];
  let wordIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < words[wordIndex].length) {
      typingText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    }
  }
  
  
  // Scroll Animations & Sticky Navbar
  const header = document.querySelector('.header');
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('section').forEach((section) => {
    scrollObserver.observe(section);
  });
  
  window.addEventListener("scroll", () => {
    // Sticky Navbar
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to Top Button
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });


  // Back to Top Button
  const backToTopButton = document.querySelector(".back-to-top");
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  
  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });

  
  
  // Contact Form to WhatsApp
  const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('contact-name');
  const contactEmail = document.getElementById('contact-email');
  const contactMessage = document.getElementById('contact-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactName.value;
    const email = contactEmail.value;
    const message = contactMessage.value;

    const whatsappNumber = +919631855139; // <--- Add your WhatsApp number here
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=` +
      `Name: ${name}%0a` +
      `Email: ${email}%0a` +
      `Message: ${message}`;

    window.open(whatsappUrl, '_blank');
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    if (words.length > 0) {
      setTimeout(type, 1500);
    }
  });
  
  console.log("Portfolio fully loaded 🚀");