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
const formSubmit = document.querySelector('.mainForm');
const inputEmail = document.getElementById('email');
const inputName = document.getElementById('name');
const inputTextArea = document.getElementById('msg');
const Rest = document.querySelector('.btn02');
formSubmit.addEventListener('input', () => {
  const formData = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputTextArea.value,
  };
  if (formData) {
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }
});
const storedData = localStorage.getItem('contactForm');

if (storedData) {
  const formObj = JSON.parse(storedData);
  inputName.value = formObj.name;
  inputEmail.value = formObj.email;
  inputTextArea.value = formObj.message;
}
Rest.addEventListener('click', () => {
  localStorage.removeItem('contactForm');
});