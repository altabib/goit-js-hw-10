import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/octagon.svg';

const startBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', onStartTimer);

let changedTimerData = false;
let userSelectedDate = 0;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (selectedDates[0] <= Date.now()) {
      iziToast.show({
        iconUrl: icon,
        theme: 'dark',
        message: 'Please choose a date in the future',
        messageSize: '16px',
        messageColor: 'white',
        backgroundColor: '#EF4040',
        position: 'topRight',
        timeout: 5000,
      });

      return;
    } else {
      startBtn.disabled = false;
    }
    changedTimerData = true;
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function onStartTimer() {
  changedTimerData = false;
  const intervalId = setInterval(() => {
    const timeDifference = userSelectedDate - Date.now();
    const time = convertMs(timeDifference);

    timerDays.textContent = addLeadingZero(time.days);
    timerHours.textContent = addLeadingZero(time.hours);
    timerMinutes.textContent = addLeadingZero(time.minutes);
    timerSeconds.textContent = addLeadingZero(time.seconds);

    if (timeDifference <= 1000 || changedTimerData === true) {
      clearInterval(intervalId);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  }, 1000);

  startBtn.disabled = true;
}
