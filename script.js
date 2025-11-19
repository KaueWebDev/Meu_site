// Scroll para About
document.getElementById("scrollToAbout").onclick = () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
};

// Animação ao aparecer na tela
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));