// Icon Animation JavaScript - ADD THIS TO YOUR script.js

document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("icon");
  const orbit = document.getElementById("icon-orbit");
  const websiteContent = document.getElementById("website-content");
  const ripple = document.getElementById("ripple");
  const container = document.getElementById("icon-container");
  const touchGlow = document.getElementById("touch-glow");
  const safariBlur = document.getElementById("safariblur");
  const glow = document.getElementById("glow");

  // Icon click handler
  if (icon) {
    icon.addEventListener("click", () => {
      const rect = orbit.getBoundingClientRect();
      ripple.style.left = rect.width / 2 + "px";
      ripple.style.top = rect.height / 2 + "px";
      ripple.style.width = "350px";
      ripple.style.height = "350px";
      ripple.style.opacity = "0.5";
      ripple.style.transition = "all .7s ease-out";

      touchGlow.style.opacity = "1";
      touchGlow.style.transform = "scale(2)";

      setTimeout(() => {
        touchGlow.style.opacity = "0";
        ripple.style.opacity = "0";
        ripple.style.width = "0";
        ripple.style.height = "0";
        touchGlow.style.transform = "scale(1)";
      }, 1000);

      setTimeout(() => {
        container.style.display = "none";
        websiteContent.style.display = "block";
        document.body.classList.add("website-active");

        // Initialize particles after website is shown
        initializeParticles();
      }, 1200);
    });
  }

  // Mouse movement effects
  if (container) {
    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -25;
      const rotateY = ((x - centerX) / centerX) * 25;
      orbit.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;

      glow.style.opacity = "0.8";
      glow.style.transform = "scale(1.08)";
      clearTimeout(glow._resetTimeout);
      glow._resetTimeout = setTimeout(() => {
        glow.style.opacity = "";
        glow.style.transform = "";
      }, 300);
    });

    container.addEventListener("mouseleave", () => {
      orbit.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  // Floating animation
  let angle = 0;
  function animateFloat() {
    if (container && container.style.display !== "none") {
      angle += 0.015;
      const x = Math.sin(angle * 0.9) * 10;
      const y = Math.cos(angle * 0.6) * 8;
      container.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
    requestAnimationFrame(animateFloat);
  }

  animateFloat();

  // Safari blur detection
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari && safariBlur) {
    safariBlur.style.display = "block";
  }

  // Initialize particles function
  function initializeParticles() {
    // Your existing particles initialization will work here
    // The particles.js code you already have will run
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Particles.js for header (NASA style - dots only)
  window.particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#305B89",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false, // NASA style - no connecting lines
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 6,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });

  // Initialize Particles.js for Core Applications section
  window.particlesJS("particles-js-3", {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#305B89",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false, // NASA style - no connecting lines
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          size: 6,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });

  // Smooth scroll for scroll indicator
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const nextSection = document.querySelector(".why-matters");
      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  // Fade-in animation for sections
  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  // Add fade-in class to elements and observe them
  const elementsToAnimate = document.querySelectorAll(
    ".section-content, .application-item, .why-matters-content, .compatibility-content, .ventures-content"
  );
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in");
    fadeInObserver.observe(el);
  });

  // Button hover effects
  const buttons = document.querySelectorAll(".see-all-btn, .ventures-btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Optimize for mobile touch
  if ("ontouchstart" in window) {
    document.body.classList.add("touch-device");
  }
});
