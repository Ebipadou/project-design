//DOM ELEMENTS
let countSpanElement = document.getElementById('count');
const count = countSpanElement.textContent;
let countNumber = Number(countSpanElement.textContent);
const codeNumber1 = document.getElementById('codeNumber1');
const codeNumber2 = document.getElementById('codeNumber2');
const codeNumber3 = document.getElementById('codeNumber3');
const codeNumber4 = document.getElementById('codeNumber4');
const codeNumber5 = document.getElementById('codeNumber5');
const verifyBtn = document.getElementById('verify-btn');
const newCodeBtn = document.getElementById('new-code-btn');
const text1 = document.querySelector('.verify-code-text');
const text2 = document.querySelector('.resend-code-text');
const showModal = document.querySelector('.show-modal');

//DOM ELEMENTS

let code = getRandomNumber();
let userInputCode;
let interval;
let currentCount = setTimer(countNumber);
let timeOut = false;

function getRandomNumber() {
  return Math.floor(Math.random() * 90000) + 10000
}


verifyBtn.addEventListener('click', () => {
  // INPUT VALUES
  const codeNumber1_Value = Number(codeNumber1.value.trim());
  const codeNumber2_Value = Number(codeNumber2.value.trim());
  const codeNumber3_Value = Number(codeNumber3.value.trim());
  const codeNumber4_Value = Number(codeNumber4.value.trim());
  const codeNumber5_Value = Number(codeNumber5.value.trim());
  // INPUT VALUES
  userInputCode = Number(`${codeNumber1_Value}${codeNumber2_Value}${codeNumber3_Value}${codeNumber4_Value}${codeNumber5_Value}`);

  if (code === userInputCode) {
    showModal.innerHTML = `<p>Success!</p>`;
    showModal.classList.add('active');
    setTimeout(() => {
      showModal.classList.remove('active');
      window.location.href = '/create new password.html';
    }, 2000)
  } else {
    showModal.innerHTML = `<p>Incorrect Verification Code</p>`;
    showModal.classList.add('active');
    setTimeout(() => {
      showModal.classList.remove('active')
    }, 2000)
  }
});

function setTimer(countNumber) {
  showModal.innerHTML = `Your verification code: ${code}`;
  showModal.classList.add('active');
  setTimeout(() => {
    showModal.classList.remove('active')
  }, 2000)
  interval = setInterval(() => {
  countNumber --;
  countSpanElement.textContent = `${countNumber}`;
  timeOut = false;

  if (countNumber === 0) {
    text1.classList.remove('active');
    text2.classList.add('active');
    clearInterval(interval);
    timeOut = true;
    countNumber = 0;
  }

  return countNumber;
}, 1000)};


newCodeBtn.addEventListener('click', () => {
  if (timeOut) {
    code = getRandomNumber();
    showModal.innerHTML = `New verification code: ${code}`;
    showModal.classList.add('active');
    setTimeout(() => {
      showModal.classList.remove('active');
    }, 2000)
    countNumber = Number(count);
    setTimer(countNumber);
    text2.classList.remove('active');
    text1.classList.add('active');
  } else {
    showModal.innerHTML = `<p>New code will be generated once the timer runs out</p>`;
    showModal.classList.add('active');
    setTimeout(() => {
      showModal.classList.remove('active');
    }, 2000);
  }
})