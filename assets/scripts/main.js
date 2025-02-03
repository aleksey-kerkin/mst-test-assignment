window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 1) {
    header.style.backgroundColor = "var(--secondary-clr)";
    header.style.boxShadow = "0 0.25rem 0.75rem var(--shadow-clr)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
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
