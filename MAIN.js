const SubmitBtn = document.getElementById('submit-btn');
const password = document.querySelector('#password');
const repassword = document.querySelector('#password-con');
const Message = document.getElementById('Message');

function check() {
  let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (password.value.match(reg) && repassword.value.match(reg)) {
    return true;
  } else {
    return false;
  }
}

const passConfirm = function () {
  if (password.value === repassword.value) {
    Message.style.color = 'green';
    Message.innerHTML = 'Passwords match!';
  } else if (password.value && repassword.value === '') {
    Message.style.color = 'blue';
    Message.innerHTML = 'Password should be matched';
  } else {
    Message.style.color = 'red';
    Message.innerHTML = 'Passwords do NOT match!';
  }
};
let sub = SubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (check()) {
    passConfirm();
  }
});
