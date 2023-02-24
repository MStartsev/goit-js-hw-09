import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const datePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timerElements = document.querySelectorAll('.value');

startButton.disabled = true;

const addLeadingZero = value => {
  return Math.floor(value).toString().padStart(2, '0');
};

const convertTime = countdown => {
  const SECONDS_PER_DAY = 86400;
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;

  const days = countdown / SECONDS_PER_DAY;
  const hours = (countdown % SECONDS_PER_DAY) / SECONDS_PER_HOUR;
  const minutes = (countdown % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE;
  const seconds = countdown % SECONDS_PER_MINUTE;

  return { days: days, hours: hours, minutes: minutes, seconds: seconds };
};

const updateCountdown = countdown => {
  Object.entries(convertTime(countdown)).forEach(([key, value]) => {
    [...timerElements].forEach(element => {
      if (Object.keys(element.dataset)[0] === key)
        element.textContent = addLeadingZero(value);
    });
  });
};

let countdownInterval = null;

const startCountdown = countdown => {
  countdownInterval = setInterval(() => {
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownInterval);
      Notify.success('Countdown finished!');
      return;
    }
    updateCountdown(countdown);
  }, 1000);
};

const handleStartButtonClick = () => {
  const selectedDate = datePicker._flatpickr.selectedDates[0];
  const now = Date.now();

  if (selectedDate <= now) return;

  const convertMstoSec = value => Math.floor(value / 1000);
  const countdown = convertMstoSec(selectedDate - now);

  startCountdown(countdown);
  startButton.removeEventListener('click', handleStartButtonClick);
};

startButton.addEventListener('click', handleStartButtonClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = Date.now();
    startButton.disabled =
      selectedDate > now
        ? false
        : !Notify.failure('Please choose a date in the future');
  },
};

flatpickr(datePicker, options);
