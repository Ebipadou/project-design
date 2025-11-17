const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const checkBox = document.getElementById('check');
const modal = document.querySelector('.ui-modal-component');

const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');

const userData = localStorage.getItem('userBioData');
const userJsonData = JSON.parse(userData);
console.log(userJsonData);


form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (authenticateForm()) {
    modal.style.display = 'flex';
    setTimeout(() => {
      window.location.href = '/dashboard.html'}, 3000);
      emailAddress.value = '';
      password.value = '';
  }
})


function authenticateForm() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  let formValid = true
  
  if (userJsonData) {
    if (!Object.values(userJsonData).includes(usernameValue)) {
      usernameError.textContent = 'Username not found!';
      setTimeout(() => usernameErrorError.textContent = '', 2000);
      formValid = false;
    }
    if (!Object.values(userJsonData).includes(passwordValue)) {
      passwordError.textContent = 'Incorrect password!';
      setTimeout(() => passwordError.textContent = '', 2000);
      formValid = false;
    }
  }

  return formValid;
  

}