const user = JSON.parse(localStorage.getItem('user-info'));

console.log(user);

if (user && user.key) {
  document.querySelector('#app').classList.remove('default');
  document.querySelector('#app').classList.add('login');
  document.querySelector('#greeting-message').innerText = `${user.name}님 환영합니다.`;
}

document.querySelector('#logout-button').addEventListener('click', () => {
  localStorage.removeItem('user-info');
  location.reload();
});
