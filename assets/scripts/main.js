window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const navPrimary = document.querySelector("nav");
  if (window.scrollY > 1) {
    header.style.backgroundColor = "var(--secondary-clr)";
    header.style.boxShadow = "0 0.25rem 0.75rem var(--shadow-clr)";
    navPrimary.classList.remove("nav-primary");
    navPrimary.classList.add("nav-scrolled");
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
    navPrimary.classList.remove("nav-scrolled");
    navPrimary.classList.add("nav-primary");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
