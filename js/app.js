const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

btnClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});