// ============================================================================
// MOBILE NAVIGATION MENU
// ============================================================================
// Toggles mobile navigation menu open/closed and updates ARIA attributes
// for accessibility. Allows users to navigate on mobile without page reload.

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu when user clicks a nav link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================================================================
// ACCORDION FAQ FUNCTIONALITY
// ============================================================================
// Single-open accordion: only one FAQ item can be open at a time.
// Updates visual indicator (+ / −) and manages content visibility.
// Improves UX for FAQ section by preventing info overload.

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const content = accordion.nextElementSibling;
    const symbol = accordion.querySelector(".accordion-symbol");
    const isOpen = content.classList.contains("open");

    // Close all accordions
    document.querySelectorAll(".accordion").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-symbol").textContent = "+";
    });

    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("open");
    });

    // Open clicked accordion if it wasn't already open
    if (!isOpen) {
      accordion.classList.add("active");
      content.classList.add("open");
      symbol.textContent = "−";
    }
  });
});

// ============================================================================
// SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
// ============================================================================
// Lazy-loads animations when elements enter viewport. Improves performance
// by only animating visible elements. Triggers fade-in + slide-up effect
// on scroll with 15% threshold (element 15% visible to trigger animation).

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target); // Stop observing after animation
      }
    });
  },
  { threshold: 0.15 }
);

// Observe all elements with reveal class (used on hero copy, cards, etc.)
document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Observe stat items separately for staggered effect
document.querySelectorAll(".reveal-stat").forEach((element) => {
  revealObserver.observe(element);
});

// ============================================================================
// HERO STATS COUNTER ANIMATION
// ============================================================================
// Triggers when hero stats section becomes visible (50% threshold).
// Marks stats as "counted" to prevent re-triggering animation on scroll back.
// Works with CSS animation to create visual counter effect.

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".hero-stats").forEach((element) => {
  statObserver.observe(element);
});

// ============================================================================
// PARALLAX HERO ORBS - MOUSE MOVEMENT EFFECT
// ============================================================================
// Creates subtle parallax depth effect: background orbs follow mouse cursor
// at 1% of mouse movement distance. Enhances premium feel without being
// distracting. Only affects hero section orbs to avoid performance issues.

window.addEventListener("mousemove", (e) => {
  const heroOrbs = document.querySelectorAll(".hero-orb");
  // Calculate offset based on mouse position relative to screen center
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

  heroOrbs.forEach((orb) => {
    orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// ============================================================================
// SCROLL SPY NAVIGATION HIGHLIGHTING
// ============================================================================
// Highlights active nav link based on which section is currently in view.
// Updates visual feedback (green highlight) as user scrolls through page.
// Improves UX by showing user their current position on page.

const scrollSpyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        // Remove active state from all links
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.remove("active-nav");
        });
        // Highlight link matching current section
        document.querySelectorAll(".nav-links a").forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-nav");
          }
        });
      }
    });
  },
  { threshold: 0.5 }
);

// Observe all sections with IDs
document.querySelectorAll("section[id]").forEach((section) => {
  scrollSpyObserver.observe(section);
});

// ============================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================================================
// Intercepts anchor link clicks and smoothly scrolls to target instead
// of instant jump. Provides better UX and visual continuity.
// Works on all links starting with '#' (anchor links).

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================================================
// ENHANCED BUTTON GLOW ON HOVER
// ============================================================================
// Dynamically increases button glow intensity on hover for interactive feedback.
// Primary buttons (blue): stronger glow (35% opacity)
// Secondary buttons (green): subtle glow (25% opacity)
// Improves visual feedback and interactivity perception.

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.boxShadow = this.classList.contains("btn-primary")
      ? "0 24px 60px rgba(92, 200, 255, 0.35)" // Primary button glow
      : "0 12px 40px rgba(94, 240, 179, 0.25)"; // Secondary button glow
  });

  btn.addEventListener("mouseleave", function () {
    if (this.classList.contains("btn-primary")) {
      this.style.boxShadow = "0 18px 50px rgba(92, 200, 255, 0.22)"; // Reset to default
    } else {
      this.style.boxShadow = "none"; // Remove glow
    }
  });
});

// ============================================================================
// CARD GLOW EFFECT ON HOVER
// ============================================================================
// Enhances card hover state with dual-layer glow effect (green + blue).
// Creates sense of depth and interactivity. Applied to both feature cards
// and mission cards for consistent interactive feedback across page.

document.querySelectorAll(".feature-card, .mission-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.boxShadow =
      "0 40px 100px rgba(94, 240, 179, 0.25), 0 0 40px rgba(92, 200, 255, 0.15)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.boxShadow = "var(--shadow)"; // Reset to CSS variable default
  });
});

// ============================================================================
// SCROLL PROGRESS INDICATOR
// ============================================================================
// Creates animated progress bar at top of page showing scroll position.
// Dynamically created element with gradient (blue → green) and glow effect.
// Updates on every scroll event. Improves UX by showing how much content remains.

const createScrollProgress = () => {
  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  document.body.appendChild(scrollProgress);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + "%"; // Update width based on scroll %
  });
};

createScrollProgress();

// ============================================================================
// STAGGERED CARD REVEAL ANIMATION
// ============================================================================
// Applies cascading animation delays to cards for choreographed reveal effect.
// Each card enters 120ms after previous, creating visual rhythm and drawing
// eye across the page. Improves engagement and page hierarchy perception.

const staggerReveal = (selector, delay = 100) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    // Sets CSS custom property --stagger-delay for each element
    el.style.setProperty("--stagger-delay", `${index * delay}ms`);
  });
};

staggerReveal(".mission-card", 120);  // 120ms delay between mission cards
staggerReveal(".feature-card", 120);  // 120ms delay between feature cards

// ============================================================================
// AUTO-UPDATE FOOTER YEAR
// ============================================================================
// Automatically updates copyright year in footer to current year.
// No need for manual maintenance—always displays correct year.

document.querySelector("#year").textContent = new Date().getFullYear();
