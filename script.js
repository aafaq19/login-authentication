const users = []; // Store registered users

// Function to register a new user
function register() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  if (username && password) {
    users.push({ username, password });
    alert('Registration successful!');
    switchForm('loginForm');
  } else {
    alert('Please fill in all fields.');
  }
}

// Function to log in
function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    alert('Login successful!');
    switchForm('securedPage');
  } else {
    alert('Login failed. Check your credentials.');
  }
}

// Function to log out
function logout() {
  switchForm('loginForm');
}

// Function to switch between forms
function switchForm(formId) {
  const forms = ['loginForm', 'registrationForm', 'securedPage'];
  forms.forEach((form) => {
    document.getElementById(form).style.display = 'none';
  });
  document.getElementById(formId).style.display = 'block';
}
