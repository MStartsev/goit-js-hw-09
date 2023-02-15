import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email, message } = form;
let storageValue = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

if (storageValue.email) email.value = storageValue.email;
if (storageValue.message) message.value = storageValue.message;

form.addEventListener('input', throttle(setStorage, 500));
form.addEventListener('submit', submitForm);

function setStorage(e) {
  const targetEmail = e.target === email;
  const targetMessage = e.target === message;
  const value = e.target.value.trim();

  if (!targetEmail && !targetMessage) return;
  targetEmail ? (storageValue.email = value) : (storageValue.message = value);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageValue));
}

function submitForm(e) {
  e.preventDefault();
  if (!storageValue.email || !storageValue.message) return;

  console.log(`${STORAGE_KEY}: `, storageValue);
  storageValue = {};
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
