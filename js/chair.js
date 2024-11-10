document.addEventListener("DOMContentLoaded", function () {
  const shopButtons = document.querySelectorAll(".shop-btn");
  const cartIcon = document.querySelector(".action-btn");
  const badge = document.querySelector(".badge");
  let cartCount = 0;
  const cartItems = [];

  // Function to update cart badge
  function updateBadge() {
    badge.textContent = cartCount;
  }

  // Function to calculate total price
  function calculateTotalPrice() {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  }

  // Function to open modal with cart items and total price
  function openCartModal() {
    // Create or update the modal with cart items
    const modal = document.querySelector("#cartModal") || createCartModal();
    const modalContent = modal.querySelector(".modal-content");

    // Populate modal with cart items and total price
    modalContent.innerHTML = `
      <h2>Cart Items</h2>
      ${cartItems
        .map(
          (item) => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.title}" />
              <p>${item.title}</p>
              <p>${item.price} $</p>
            </div>`
        )
        .join("")}
      <hr />
      <p class="total-price"><strong>Total Price: ${calculateTotalPrice()} $</strong></p>
    `;
    modal.style.display = "block";
  }

  // Function to create modal structure
  function createCartModal() {
    const modal = document.createElement("div");
    modal.id = "cartModal";
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Cart Items</h2>
        <hr/>
      </div>`;
    document.body.appendChild(modal);

    // Close modal on clicking close button
    modal.querySelector(".close").onclick = () => (modal.style.display = "none");
    return modal;
  }

  // Event listener for shop buttons
  shopButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const productItem = button.closest(".product-item");
      const title = productItem.querySelector(".product-title").textContent;
      const image = productItem.querySelector(".product-image img").src;
      const priceElement = productItem.querySelector('.product-price');
      const price = priceElement.getAttribute('data-price');

      // Add product to cart and update badge
      cartItems.push({ title, image, price });
      cartCount += 1;
      updateBadge();
    });
  });

  // Event listener for cart icon
  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    openCartModal();
  });

  // Hide modal when clicking outside of it
  window.addEventListener("click", (event) => {
    const cartModal = document.querySelector("#cartModal");
    if (event.target === cartModal) {
      cartModal.style.display = "none";
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("product-search");
  const productItems = document.querySelectorAll(".product-item");

  searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();

    productItems.forEach((item) => {
      const title = item.querySelector(".product-title").textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});


// Select the toggle button and the navbar items
const toggleButton = document.querySelector(".toggle_btn");
const navItems = document.querySelector(".nav_bar_items");

// Add click event listener to the toggle button
toggleButton.addEventListener("click", () => {
    // Toggle the 'active' class to show/hide the nav items
    navItems.classList.toggle("active");
});