const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const content = accordion.nextElementSibling;
    const symbol = accordion.querySelector(".accordion-symbol");
    const isOpen = content.classList.contains("open");

    document.querySelectorAll(".accordion").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-symbol").textContent = "+";
    });

    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("open");
    });

    if (!isOpen) {
      accordion.classList.add("active");
      content.classList.add("open");
      symbol.textContent = "−";
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.querySelector("#year").textContent = new Date().getFullYear();
