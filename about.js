// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll to visit section (example)
const visitBtn = document.getElementById('visitBtn');
visitBtn.addEventListener('click', () => {
  alert("Thank you for visiting! ☕"); // Can replace with scroll or link
});
