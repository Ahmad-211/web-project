// Array to store user data
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to validate email format
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Function to register a new user
function registerUser() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if user already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert('User with this email already exists.');
    return;
  }

  // Add user to the array
  users.push({ username, email, password });

  // Save the updated users array to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful! Redirecting to homepage...');
  window.location.href = 'homepage.html'; // Redirect to homepage
}

// Function to login a user
function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Retrieve users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  const user = storedUsers.find(user => user.email === email);

  if (user && user.password === password) {
    alert('Login successful! Redirecting to homepage...');
    window.location.href = 'homepage.html'; // Redirect to homepage
  } else {
    alert('Invalid email or password.');
  }
}

// Function to reset password
function resetPassword() {
  const email = document.getElementById('resetEmail').value;
  const newPassword = prompt('Enter your new password:');

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Retrieve users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  const user = storedUsers.find(user => user.email === email);

  if (user) {
    user.password = newPassword;

    // Save the updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Password reset successful! Redirecting to login...');
    window.location.href = 'login.html'; // Redirect to login page
  } else {
    alert('No user found with this email.');
  }
}
