// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== FILTER MENU =====
const filterBtns = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    menuCards.forEach(card => {
      if(category === "all" || card.dataset.category === category){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ===== ADD TO CART =====
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = button.dataset.price;
    const image = button.dataset.image;
    alert(`${name} added to cart!`);
    // Here you can add code to actually add to cart or localStorage
  });
});
