/* ================= NAVBAR TOGGLE ================= */
const ham = document.getElementById("hamburger");
const nav = document.getElementById("navLinks");

ham.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* ================= HERO TYPING ================= */
const text = "Experience premium coffee crafted with passion and perfection.";
const heroText = document.getElementById("hero-text");
let i = 0;

function typing() {
  if (i < text.length) {
    heroText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
heroText.innerHTML = "";
typing();

/* ================= ADD TO CART ================= */
document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = {
      name: btn.dataset.name,
      price: btn.dataset.price,
      image: btn.dataset.image
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
  });
});

/* ================= SCROLL ANIMATION ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
},{ threshold: 0.15 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));
