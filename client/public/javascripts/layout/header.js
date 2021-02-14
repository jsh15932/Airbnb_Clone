const headerLogin = document.querySelector('#login');
const headerRegister = document.querySelector('#register');
const lookPassword = document.querySelector('.look_password');

headerLogin.addEventListener('click', (e) => {
  const login = document.querySelector('.header__login');

  login.querySelector('.modal').classList.remove('hidden');
  login.previousSibling.querySelector('.modal').classList.add('hidden');
});

headerRegister.addEventListener('click', (e) => {
  const register = document.querySelector('.header__register');

  register.nextSibling.querySelector('.modal').classList.add('hidden');
  register.querySelector('.modal').classList.remove('hidden');
});

lookPassword.addEventListener('click', () => {
  const input = document.querySelector('.login__password').children.namedItem('password');
    
  if (input.getAttribute('type') === 'password') input.setAttribute('type', 'text');
  else input.setAttribute('type', 'password');
})