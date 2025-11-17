const gymUser = document.getElementById('user');
const gymCenter = document.getElementById('gym');
const registerAsBtn = document.getElementById('js-register-as-btn');


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
  alert('Feature Coming Soon!');
  }

  else if (!gymUser.classList.contains('selected') && !gymCenter.classList.contains('selected')){
    alert('Nothing\'s selected');
  }
})