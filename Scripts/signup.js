const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkBox = document.getElementById('check');
const modal = document.querySelector('.ui-modal-component');

const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const checkBoxError = document.getElementById('check-error');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Run validation
  if (authenticateForm()) {
    // ✅ Redirect after successful validation
    modal.style.display = 'flex';
    setTimeout(() => {
      window.location.href = "./sign-in.html";
    }, 3000);
  }
});

function authenticateForm() {
  let formIsValid = true; // reset on every call

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  console.log(usernameValue);
  console.log(emailValue);
  console.log(passwordValue);
  


  // Name validation
  if (usernameValue === '') {
    usernameError.textContent = 'Please enter your full name';
    setTimeout(() => (usernameError.textContent = ''), 2000);
    formIsValid = false;
  }

  // Email validation
  if (emailValue === '') {
    emailError.textContent = 'Please enter your email';
    setTimeout(() => (emailError.textContent = ''), 2000);
    formIsValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address';
    setTimeout(() => (emailError.textContent = ''), 2000);
    formIsValid = false;
  }

  // Password validation
  if (passwordValue === '') {
    passwordError.textContent = 'Please enter your Password';
    setTimeout(() => (passwordError.textContent = ''), 2000);
    formIsValid = false;
  } else if (passwordValue.length < 6) {
    passwordError.textContent = 'Password cannot be less than 6 characters';
    setTimeout(() => (passwordError.textContent = ''), 2000);
    formIsValid = false;
  }

  // Checkbox validation ✅ FIXED
  if (!checkBox.checked) {
    checkBoxError.textContent = 'Please agree to the terms and conditions';
    setTimeout(() => (checkBoxError.textContent = ''), 2000);
    formIsValid = false;
  }

  if (formIsValid) {
    // ✅ Save user data only if everything is valid
    const userData = {
      username: usernameValue,
      userEmail: emailValue,
      password: passwordValue
    };
    localStorage.setItem('userBioData', JSON.stringify(userData));
  }

  return formIsValid;
}

