function placeOrder() {
  // Get form elements
  const photoInput = document.querySelector('input[type="file"]');
  const sizeSelect = document.querySelector('select');
  const whatsappInput = document.querySelector('input[type="text"]');

  // Validation checks
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

  // If everything is filled → show popup
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
