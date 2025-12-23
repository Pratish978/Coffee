const form = document.getElementById("orderForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const coffee = document.getElementById("coffeeName").value;
  const qty = document.getElementById("quantity").value;
  const name = document.getElementById("customerName").value;

  message.style.color = "green";
  message.textContent =
    "✅ Thank you " + name + "! Your " + qty + " " + coffee + " will be delivered soon ☕";

  form.reset();
});
