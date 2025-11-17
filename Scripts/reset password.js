const form = document.getElementById('form');
const emailAddress = document.getElementById('email'); // make sure your input has id="email"
const emailError = document.getElementById('email-error'); // make sure this <span> or <p> exists

const userData = localStorage.getItem('userBioData');
const userJsonData = JSON.parse(userData);
const modal = document.getElementById('modal');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (authenticateForm()) {
    // ✅ Only redirect when valid
    modal.innerText = 'User Found!';
    modal.classList.add('active');
    setTimeout(() => {
      modal.classList.remove('active');
      window.location.href = '/check-your-inbox.html';
    }, 2000);
  }
});

function authenticateForm() {
  const emailAddressValue = emailAddress.value.trim();
  let formValid = true;

  // Reset error message each time
  emailError.textContent = '';

  // Email validation
  if (emailAddressValue === '' || emailAddressValue === null) {
    setTimeout(emailError.textContent = 'Please enter your email', 2000);
    formValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddressValue)) {
    setTimeout(emailError.textContent = 'Please enter a valid email address', 2000);
    formValid = false;
  } else if (!Object.values(userJsonData).includes(emailAddressValue)) {
    setTimeout(emailError.textContent = 'Email does not exist', 2000);
    formValid = false;
  }

  // Clear error message after 2s only if invalid
  if (!formValid) {
    setTimeout(() => (emailError.textContent = ''), 2000);
  }

  return formValid;
}