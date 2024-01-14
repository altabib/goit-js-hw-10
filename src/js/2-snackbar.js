import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconOk from '../img/bi_check2-circle.svg';
import iconError from '../img/octagon.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
  ev.preventDefault();

  const delay = ev.target.elements.delay.value;
  const value = ev.target.elements.state.value;

  const makePromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value === 'fulfilled') {
          resolve(value);
        }
        reject(value);
      }, delay);
    });
  };

  makePromise()
    .then(() => {
      iziToast.show({
        iconUrl: iconOk,
        theme: 'dark',
        title: 'OK',
        titleColor: 'white',
        message: `Fulfilled promise in ${delay}ms`,
        messageSize: '16px',
        messageColor: 'white',
        backgroundColor: '#59A10D',
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.show({
        iconUrl: iconError,
        title: `Error`,
        titleColor: 'white',
        message: 'Illegal operation',
        messageSize: '16px',
        messageColor: 'white',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
    });
}
