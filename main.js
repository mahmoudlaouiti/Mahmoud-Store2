document.addEventListener("DOMContentLoaded", () => {
  // Select the scroll wrappers
  const scrollWrappers = document.querySelectorAll('.scroll-wrapper');
  
  scrollWrappers.forEach(scrollWrapper => {
      const scrollContainer = scrollWrapper.querySelector('.products-grid');
      const leftButton = scrollWrapper.querySelector('.left-btn');
      const rightButton = scrollWrapper.querySelector('.right-btn');
  
      let scrollAmount = 0;
      const productWidth = scrollContainer.children[0].offsetWidth + 20; // Adjust for margins or padding
      const groupWidth = productWidth * 3; // Grouping 3 products at a time
  
      // Limit the number of products to 20
      const maxProducts = 50; // Set maximum products to 20
      const productItems = scrollContainer.querySelectorAll('.product-item');
      
      if (productItems.length > maxProducts) {
          // Remove excess products if there are more than 20
          for (let i = productItems.length - 1; i >= maxProducts; i--) {
              productItems[i].remove();
          }
      }

      rightButton.addEventListener('click', () => {
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      });
  
      // Left button click event
      leftButton.addEventListener('click', () => {
        scrollContainer.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      });
      // Reset scroll position on window resize
      window.addEventListener('resize', () => {
          scrollAmount = 0;
          scrollContainer.style.transform = 'translateX(0)';
      });
  });
















  





// Select the cart count element
const cartCountElement = document.querySelector(".cart-count");

// Initialize cart count with a fallback of 0
let cartCount = 0;

// If the cartCount element exists, retrieve and set its value from localStorage
if (cartCountElement) {
  cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
  cartCountElement.textContent = cartCount; // Update the cart count display
}


// Add event listener for "Add to Cart 2" buttons (set cart count to product quantity)
const addToCartButtons2 = document.querySelectorAll(".add-to-cart2");
addToCartButtons2.forEach(button => {
  button.addEventListener("click", () => {
    // Initialize total quantity to 0
    let totalQuantity = 0;

    // Loop through all cart-item elements (any element representing a product in the cart)
    const allCartItems = document.querySelectorAll(".cart-item");  // Assuming each cart item has a 'cart-item' class
    allCartItems.forEach(item => {
      // Get the quantity of the current cart item
      const productQuantityElement = item.querySelector(".product-quantity");
      let productQuantity = parseInt(productQuantityElement.textContent) || 1;  // Default to 1 if no quantity is set
      totalQuantity += productQuantity;  // Sum the quantities of all items
    });

    // Get the cart count element
    const cartCountElement = document.querySelector(".cart-count");

    // Update the cart count display with the total quantity
    if (cartCountElement) {
      cartCountElement.textContent = totalQuantity;
    }

    // Save the total cart count to localStorage
    localStorage.setItem('cartCount', totalQuantity);
  });
});




// Add event listener for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart1");
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount = 0; // Reset the cart count to 0
    if (cartCountElement) {
      cartCountElement.textContent = cartCount; // Update the cart count display
    }
    localStorage.setItem('cartCount', cartCount); // Save to localStorage
  });
});

// Click event on the cart icon where nothing happens to the cart count
const cartIcon = document.querySelector(".cart-icon");
if (cartIcon) {
  cartIcon.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent any default behavior (if any)
    event.stopImmediatePropagation(); // Stop the event from affecting anything else
  });
}



console.log(cartCountElement);









































































  // Exemple d'événement pour vider le panier
  const clearCartButton = document.querySelector(".clear-cart");
  if (clearCartButton) {
    clearCartButton.addEventListener("click", () => {
      cartCount = 0; // Réinitialiser le compteur
      cartCountElement.textContent = cartCount; // Mettre à jour le texte du compteur
    });
  }
});



// Function to add the product to localStorage
function addToCart(productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get existing cart or initialize a new one

  const existingProduct = cart.find(item => item.name === productName);
  if (existingProduct) {
    existingProduct.quantity++; // If the product exists, increase its quantity
    existingProduct.total = existingProduct.quantity * existingProduct.price; // Update total price
  } else {
    cart.push({
      name: productName,
      price: productPrice,
      quantity: 1,
      total: productPrice
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart back to localStorage
}

// Function to display the cart items from localStorage
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage or initialize an empty array
  const cartDetails = document.querySelector('.cart-details');
  cartDetails.innerHTML = ''; // Clear the cart before updating
  
  if (cart.length === 0) {
    cartDetails.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      cartDetails.innerHTML += `
        <div class="cart-item">
          <span class="product-name">${item.name}</span>
          <span class="product-price">$${item.price}</span>
          <span class="product-quantity">${item.quantity}</span>
          <span class="product-total">$${item.total}</span>
        </div>
      `;
    });

    // Calculate the total of all items in the cart
    const totalPrice = cart.reduce((acc, item) => acc + item.total, 0);
    cartDetails.innerHTML += `
      <div class="cart-total">Total: $${totalPrice}</div>
    `;

    // Checkout button
    cartDetails.innerHTML += `
      <button class="add-to-cart1" onclick="checkout()"></button>
    `;
  }
}

// Call displayCart on page load
displayCart();

// Function to clear the cart when checking out
function checkout() {
  localStorage.removeItem('cart'); // Clear cart from localStorage
  displayCart(); // Update cart display to reflect changes
}
// Function to add the product to localStorage
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Get existing cart or initialize a new one
  
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
      existingProduct.quantity++; // If the product exists, increase its quantity
      existingProduct.total = existingProduct.quantity * existingProduct.price; // Update total price
    } else {
      cart.push({
        name: productName,
        price: productPrice,
        quantity: 1,
        total: productPrice
      });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart back to localStorage
  }
  
  // Function to display the cart items from localStorage
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get cart from localStorage or initialize an empty array
    const cartDetails = document.querySelector('.cart-details');
    cartDetails.innerHTML = ''; // Clear the cart before updating
    
    if (cart.length === 0) {
      cartDetails.innerHTML = '<br><p>Your cart is empty.</p>';
    } else {
      cart.forEach(item => {
        cartDetails.innerHTML += `
          <div class="cart-item">
            <span class="product-name">${item.name}</span>
            <span class="product-price">$${item.price}</span>
            <span class="product-quantity">${item.quantity}</span>
            <span class="product-total">$${item.total}</span>
          </div>
        `;
      });
  
      // Calculate the total of all items in the cart
      const totalPrice = cart.reduce((acc, item) => acc + item.total, 0);
      cartDetails.innerHTML += `
        <div class="cart-total">Total: $${totalPrice}</div>
      `;
  
      // Clear button
      cartDetails.innerHTML += `
        <button class="add-to-cart1" onclick="clearCart()">CLEAR</button>
        <button class="add-to-cart2">ADD TO CART</button>
      `;
    }
  }


  
  // Call displayCart on page load
  displayCart();
  
  // Function to clear the cart when clicking the Clear button
  function clearCart() {
    localStorage.removeItem('cart'); // Clear cart from localStorage
    displayCart(); // Update cart display to reflect changes (empty cart)
  }

  

  // JavaScript to implement search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar input");
  const productItems = document.querySelectorAll(".product-item");

  // Add event listener to the search input field
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();

    // Loop through each product item and check if it matches the query
    productItems.forEach((item) => {
      const productName = item.querySelector("h3").textContent.toLowerCase();
      const productPrice = item.querySelector("p").textContent.toLowerCase();

      // Show or hide product items based on search query
      if (productName.includes(query) || productPrice.includes(query)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});


// Function to ensure the product items stay the same size
function setProductItemSize() {
  const productList = document.querySelector('.products-grid');
  const productItems = document.querySelectorAll('.product-item');
  
  // Get the width of the container and calculate the width for each item
  const containerWidth = productList.offsetWidth;
  const visibleProducts = productItems.length;

  // If there are products, calculate the width for each item to ensure they fit
  if (visibleProducts > 0) {
      const itemWidth = Math.floor(containerWidth / visibleProducts); // Divide container width by number of products
      productItems.forEach(item => {
          item.style.width = `${itemWidth}px`; // Set the same width for each product item
      });
  }
}

// Function to handle scrolling of products horizontally
function scrollProducts(direction) {
  const productList = document.getElementById('productList');
  const scrollAmount = 200; // Adjust scroll amount as needed

  // Scroll left or right based on direction
  if (direction === 'left') {
      productList.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
      });
  } else if (direction === 'right') {
      productList.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  }

  // Update button states based on the scroll position
  updateButtonState();
}

// Function to update the state of the scroll buttons (disabled or enabled)
function updateButtonState() {
  const productList = document.getElementById('productList');
  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');

  // Disable left button if at the start of the scroll
  if (productList.scrollLeft === 0) {
      leftBtn.disabled = true;
  } else {
      leftBtn.disabled = false;
  }

  // Disable right button if at the end of the scroll
  if (productList.scrollLeft + productList.clientWidth >= productList.scrollWidth) {
      rightBtn.disabled = true;
  } else {
      rightBtn.disabled = false;
  }
}

// Function to search products based on input
function searchProducts() {
  const searchInput = document.getElementById('productSearch').value.toLowerCase();
  const productItems = document.querySelectorAll('.product-item');
  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');
  let visibleCount = 0;

  // Loop through each product item and toggle visibility based on the search
  productItems.forEach(item => {
      const productName = item.querySelector('h3').textContent.toLowerCase();
      if (productName.includes(searchInput)) {
          item.style.display = 'flex'; // Keep the display as 'flex' so layout remains consistent
          visibleCount++;
      } else {
          item.style.display = 'none'; // Hide product but keep the layout fixed
      }
  });


  // After filtering, ensure the button states are correct
  updateButtonState();

  // Adjust the size of the remaining visible products after filtering
  setProductItemSize();
}

// Initialize button state on page load
window.onload = function() {
  setProductItemSize(); // Set initial size based on the number of products
  updateButtonState();  // Update button state
};





document.querySelectorAll('.product-wrapper').forEach(product => {
  const button = product.querySelector('.add-to-cart');
  
  // When the "Add to Cart" button is clicked
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click event from propagating to the overlay
    alert('Product added to cart!');
    // You can add your logic to update the cart here (like pushing to a cart array or updating the UI)
  });
});

window.onload = function() {
  // Retrieve the full name from localStorage
  const userName = localStorage.getItem('userName');
  const userNameDisplay = document.getElementById('userNameDisplay');

  // If a full name is stored in localStorage, display it
  if (userName) {
      userNameDisplay.textContent = `${userName}`;
  } else {
      userNameDisplay.textContent = "Guest"; // Default text if no name is found
  }
};


