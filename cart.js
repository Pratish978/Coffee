// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Sample cart functionality
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const cartContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');

function renderCart() {
  cartContainer.innerHTML = '';
  let total = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p style="text-align:center;">Your cart is empty ☕</p>';
    totalPriceEl.innerText = 0;
    return;
  }

  cartItems.forEach((item, index) => {
    total += parseInt(item.price);
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  totalPriceEl.innerText = total;
}

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  renderCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  if(cartItems.length === 0){
    alert("Your cart is empty ☕");
  } else {
    alert("Checkout successful! Thank you for your order ☕");
    cartItems = [];
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart();
  }
});

// Initial render
renderCart();
