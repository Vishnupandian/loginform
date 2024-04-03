function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (!isValidPassword(password)) {
      alert('Password must have at least 7 characters, 1 number, and 1 special character.');
      return;
  }

  document.write('Username:', username);
  document.write('Password:', password);
}

function isValidPassword(password) {
  return /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/.test(password);
}
