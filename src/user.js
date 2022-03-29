const 이름 = document.querySelector('#이름');
const 회원정보버튼 = document.querySelector('#회원정보-버튼');
const 회원정보 = document.querySelector('#회원정보');
const 회원정보이름 = document.querySelector('#회원정보-이름');
const 회원정보이메일 = document.querySelector('#회원정보-이메일');
const 로그아웃버튼 = document.querySelector('#로그아웃');

회원정보버튼.addEventListener('click', 회원정보보여주기);
로그아웃버튼.addEventListener('click', 로그아웃);

function 회원정보보여주기() {
  회원정보.toggleAttribute('hidden');
  회원정보버튼.toggleAttribute('hidden', '');
}

function 로그아웃() {
  sessionStorage.clear();
  location = '/index.html';
}

const 유저 = JSON.parse(sessionStorage.getItem('유저정보'));

이름.textContent = 유저.name;
회원정보이름.textContent = 유저.name;
회원정보이메일.textContent = 유저.email;
