// Select the cart count element
const cartCountElement = document.querySelector(".cart-count");

// Initialize cart count with a fallback of 0
let cartCount = 0;

// If the cartCount element exists, retrieve and set its value from localStorage
if (cartCountElement) {
  cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
  cartCountElement.textContent = cartCount; // Update the cart count display
}
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

























///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    
        // Clear button
        cartDetails.innerHTML += `
          <button class="add-to-cart1" onclick="clearCart()">Clear</button>
        `;
      }
    }



    
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
}













































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

  
  
// JavaScript to handle the color change on hover and click, including focus and active states
const contactLinks = document.querySelectorAll('.contact-link');

// Loop through each link and add event listeners
contactLinks.forEach(link => {
    // Set the default color for each link on page load
    link.style.color = '#333';  // Default color

    // Hover event to change color to blue on hover
    link.addEventListener('mouseenter', function() {
        this.style.color = '#007bff';  // Change to blue on hover
    });

    // Mouse leave event to revert color back to default
    link.addEventListener('mouseleave', function() {
        // Only revert to default if the link wasn't clicked
        if (this.style.color !== '#333') {
            this.style.color = '#333';  // Revert to default color on mouse leave
        }
    });

    // Click event to temporarily show blue, then revert to default color
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the link's default behavior (optional)

        // Set color to blue on click (when clicked)
        this.style.color = '#007bff';  // Change to blue on click

        // After a short delay (like 0.3 seconds), revert back to default color (#333)
        setTimeout(() => {
            this.style.color = '#333';  // Revert to default color after 300ms
        }, 300);  // 300 ms delay before reverting to default color
    });

    // Focus event to handle color when clicked (especially for mobile)
    link.addEventListener('focus', function() {
        this.style.color = '#333';  // Default color on focus (when clicked on mobile)
    });

    // Blur event to revert to the default color when focus is lost
    link.addEventListener('blur', function() {
        if (this.style.color !== '#333') {
            this.style.color = '#333';  // Revert to default color when focus is lost
        }
    });
});













    