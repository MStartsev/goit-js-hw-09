import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const getValue = name => Number(form[name].value);

  const delay = getValue('delay');
  const step = getValue('step');
  const amount = getValue('amount');

  for (let position = 1; position <= amount; position++) {
    const message = text => `${text} promise ${position} in ${delay}ms`;

    createPromise(position, delay, step)
      .then(({ position, delay }) => {
        Notify.success(message('Fulfilled'));
      })

      .catch(({ position, delay }) => {
        Notify.failure(message('Rejected'));
      });
  }
});

function createPromise(position, delay, step) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const timeout = delay + (position - 1) * step;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay: timeout });
      } else {
        reject({ position, delay: timeout });
      }
    }, timeout);
  });
}
