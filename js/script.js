// Smooth scroll
document.querySelectorAll("nav.main-nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight active nav link based on scroll
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  document.querySelectorAll("section.section").forEach(section => {
    const id = section.getAttribute("id");
    const navLink = document.querySelector(`nav.main-nav a[href="#${id}"]`);
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});

// 3D card interactivity (mouse move tilt)
const card = document.querySelector(".hero-illustration .card-3d");
if (card) {
  card.addEventListener("mousemove", handleCardMove);
  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
}

function handleCardMove(e) {
  const cardRect = card.getBoundingClientRect();
  const x = e.clientX - cardRect.left; // x within card
  const y = e.clientY - cardRect.top;
  const centerX = cardRect.width / 2;
  const centerY = cardRect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 10;  // max tilt 10 deg
  const rotateY = ((x - centerX) / centerX) * -10;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}
