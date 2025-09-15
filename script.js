window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const price = params.get("price");
  const image = params.get("image");

  if (name && price && image) {
    document.getElementById("productName").textContent = name;
    document.getElementById("productPrice").textContent = "Price: $" + price;
    document.getElementById("productImage").src = image;
  }
};

function placeOrder() {
  // Get form elements
  const photoInput = document.querySelector('input[type="file"]');
  const sizeSelect = document.querySelector('select');
  const whatsappInput = document.querySelector('input[type="text"]');

  if (!photoInput.files.length) {
    alert("⚠️ Please upload a photo before placing order.");
    return;
  }
  if (!sizeSelect.value) {
    alert("⚠️ Please select a frame size.");
    return;
  }
  if (!whatsappInput.value.trim()) {
    alert("⚠️ Please enter your WhatsApp number.");
    return;
  }
 
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
