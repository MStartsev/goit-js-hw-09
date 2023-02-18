import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let storageValue = {};

getStorage(STORAGE_KEY, writeValue);

form.addEventListener('input', throttle(setStorage, 500));
form.addEventListener('submit', submitForm);

function getStorage(STORAGE_KEY, writeValueToElements) {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    if (item) storageValue = JSON.parse(item);
    writeValueToElements(storageValue);
  } catch (error) {
    console.error(error);
  }
}

function writeValue(storageValue) {
  Object.entries(storageValue).forEach(
    ({ 0: key, 1: value }) => (form[key].value = value)
  );
}

function setStorage(e) {
  storageValue[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageValue));
}

function submitForm(e) {
  e.preventDefault();

  const consoleMessage = [...form.querySelectorAll('[name]')].reduce(
    (text, { name, value }) =>
      !value
        ? alert(`${name} field is empty!`)
        : `${text}\n ${name} : ${value}`,
    `${STORAGE_KEY}: `
  );

  if (!consoleMessage) return;

  console.log(consoleMessage);
  storageValue = {};
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
