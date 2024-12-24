// Handle user registration
function registerUser(event) {
  event.preventDefault(); // Prevent the default form submission

  const fullName = document.getElementById("fullName").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validate the inputs
  if (!fullName || !password || !confirmPassword) {
    displayMessage("Please fill in all fields.", "error");
    return;
  }

  if (password !== confirmPassword) {
    displayMessage("Passwords do not match.", "error");
    return;
  }

  // Store the user information in localStorage
  localStorage.setItem("userName", fullName);
  localStorage.setItem("userPassword", password);

  // Redirect to Home.html
  window.location.href = "Home.html";
}

// Handle user login
function loginUser(event) {
  event.preventDefault(); // Prevent the default form submission

  const enteredFullName = document.getElementById("loginFullName").value;
  const enteredPassword = document.getElementById("loginPassword").value;

  const storedFullName = localStorage.getItem("userName");
  const storedPassword = localStorage.getItem("userPassword");

  // Validate login credentials
  if (enteredFullName === storedFullName && enteredPassword === storedPassword) {
    // Redirect to Home.html if credentials are correct
    window.location.href = "Home.html";
  } else {
    // Show a message for incorrect credentials
    displayMessage("Invalid credentials. Please try again.", "error");
  }
}

// Display a message to the user (error or success)
function displayMessage(message, type) {
  const messageContainer = document.createElement("div");
  messageContainer.textContent = message;
  messageContainer.classList.add(type === "error" ? "error-message" : "success-message");

  // Append the message to the body or a specific container
  document.body.appendChild(messageContainer);

  // Remove the message after 3 seconds
  setTimeout(() => {
    messageContainer.remove();
  }, 3000);
}

// Display the user's name if logged in, or 'Guest' if not
window.onload = function() {
  const userName = localStorage.getItem("userName");
  const userNameDisplay = document.getElementById("userNameDisplay");

  if (userName) {
    userNameDisplay.textContent = `Welcome, ${userName}!`;
  } else {
    userNameDisplay.textContent = 'Welcome, Guest!';
  }
};
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