const showMessage = (message) => {
  const msg = document.getElementById('errorMsg');
  msg.innerText = message;
};
const validateEmail = (input) => {
  const emailRegex = /^[a-z0-9]+@[^\s]+\.[^\s]+$/g;
  const email = input.value.trim();
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
};
const form = document.querySelector('#signup');
const EMAIL_INVALID = 'Please enter a correct email address format';

form.addEventListener('submit', (event) => {
  const email = document.getElementById('email');
  event.preventDefault();
  const validEmail = validateEmail(email);
  if (validEmail) {
    form.submit();
  } else {
    showMessage(EMAIL_INVALID);
  }
});
