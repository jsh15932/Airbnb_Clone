const headerLogin = document.querySelector('#login');
const headerRegister = document.querySelector('#register');
const lookPassword = document.querySelector('.look_password');

headerLogin.addEventListener('click', (e) => {
    const login = document.querySelector('.header__login');
  
    login.querySelector('.modal').classList.remove('hidden');
    login.previousSibling.querySelector('.modal').classList.add('hidden');
  });