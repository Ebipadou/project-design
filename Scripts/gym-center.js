const gymUser = document.getElementById('user');
const gymCenter = document.getElementById('gym');
const registerAsBtn = document.getElementById('js-register-as-btn');
const modalContainer = document.querySelector('.ui-modal-component');
const modalHeader = document.querySelector('.modal-heading');


gymUser.addEventListener('click', () => {
  gymCenter.classList.remove('selected');
  gymUser.classList.toggle('selected');
})

gymCenter.addEventListener('click', () => {
  gymUser.classList.remove('selected');
  gymCenter.classList.toggle('selected');
})

registerAsBtn.addEventListener('click', () => {
  if (gymUser.classList.contains('selected')) {
  window.location.href = '/Sign-up.html';
  }
  else if (gymCenter.classList.contains('selected')) {
  modalHeader.innerHTML = 'Feature Coming Soon!';
  modalContainer.classList.toggle('active');
  setTimeout(() => {
    modalContainer.classList.toggle('active');
  }, 2000);
  }

  else if (!gymUser.classList.contains('selected') && !gymCenter.classList.contains('selected')){
  modalHeader.innerHTML = 'Please select an option';
  modalContainer.classList.toggle('active');
  setTimeout(() => {
    modalContainer.classList.toggle('active');
  }, 2000);
  }
})
