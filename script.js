const goTopBtn = document.getElementById("goTopBtn");

// Show/hide button smoothly
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    goTopBtn.style.display = "block";
    setTimeout(() => {
      goTopBtn.style.opacity = "1";
      goTopBtn.style.transform = "scale(1)";
    }, 50);
  } else {
    goTopBtn.style.opacity = "0";
    goTopBtn.style.transform = "scale(0.8)";
    setTimeout(() => (goTopBtn.style.display = "none"), 400);
  }
});

// Smooth scroll to top
goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
