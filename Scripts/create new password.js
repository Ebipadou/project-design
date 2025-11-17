// DOM ELEMENTS
const form = document.getElementById('form');
const newPassword = document.getElementById('enter-new-password');
const confirmPassword = document.getElementById('confirm-new-password');
const newPasswordError = document.getElementById('new-password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const submit = document.getElementById('submit');

const userData = localStorage.getItem('userBioData');
let userJSONData = JSON.parse(userData);
console.log(`Old Password: ${userJSONData['password']}`);

console.log(userJSONData.password);

// DOM ELEMENTS

// SCRIPT VARIABLES
// const storedUserEmail = userJSONData['userEmail'];
// const storedUserName = userJSONData['username'];
// let storedUserPassword = userJSONData['password'];
// SCRIPT VARIABLES

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm();
})

function validateForm() {
  const newPasswordValue = newPassword.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  if (newPasswordValue === '' || newPasswordValue === null) {
    newPasswordError.textContent = 'Please enter a new password';
    setTimeout(() => {
      newPasswordError.textContent = '';
    }, 2000);
  }

  if (newPasswordValue.length < 6 ) {
    newPasswordError.textContent = 'Password must be longer than 6 characters';
    setTimeout(newPasswordError.textContent = '', 2000);
  }

  if (confirmPasswordValue === '' || confirmPasswordValue === null) {
    confirmPasswordError.textContent = 'Please confirm your new password';
    setTimeout(() => {
      confirmPasswordError.textContent = '';
    }, 2000);
  }

  if (newPasswordValue !== confirmPasswordValue) {
    newPasswordError.textContent = 'Passwords do not match';
    confirmPasswordError.textContent = 'Passwords do not match';
    setTimeout(() => {
      newPasswordError.textContent = '';
      confirmPasswordError.textContent = '';
    }, 2000);
  }

  if ((newPasswordValue === confirmPasswordValue) & newPasswordValue !== '') {
    userJSONData.password = newPasswordValue;
    console.log(`New Password: ${userJSONData.password}`);
    localStorage.setItem('userBioData', JSON.stringify(userJSONData))
    alert('Password changed successfully!');
    window.location.href = '/signin.html';
  }

}