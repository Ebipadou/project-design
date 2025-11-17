const backArrow = document.getElementById('back-arrow');
const logOut = document.getElementById('powerIcon');
const editIcon = document.getElementById('edit-icon');

const home = document.getElementById('home');
const tools = document.getElementById('tools');
const locationIcon = document.getElementById('location');
const profile = document.getElementById('profile');

const modal = document.querySelector(".modal-container");

backArrow.addEventListener('click', () => {
  window.location.href = '../homepage.html';
});

editIcon.addEventListener("click", () => {
  alert("Feature coming soon");
})

logOut.addEventListener('click', () => {
  modal.classList.add('active');
  setTimeout(() => {
    modal.classList.remove('active');
    window.location.href = '../signin.html';
  }, 2000);
});


home.addEventListener('click', () => {window.location.href = '../homepage.html'});

tools.addEventListener('click', () => {
  window.location.href = '../tools.html';
});

locationIcon.addEventListener('click', () => {window.location.href = '../location.html'});

profile.addEventListener('click', () => {window.location.href = '#';});