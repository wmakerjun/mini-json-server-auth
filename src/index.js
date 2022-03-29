const $app = document.querySelector('#app');

const homePageTemplate = `
  <h1>미니 인증과 인가</h1>
  <a href="/login.html">
    <button>로그인</button>
  </a>
  <a href="/signup.html">
    <button>회원가입</button>
  </a>
`;

const myPageTemplate = (name) => `
  <h1>미니 인증과 인가</h1>
  <h2>${name}님 안녕하세요</h2>
  <a href="/user.html">
    <button type="button">회원정보</button>
  </a>
  <button type="button" id="logout-btn">로그아웃</button>
  <a href="/log"></a>
`;

const userAccountTemplate = ({ name, email }) => `
  <div id="user-account">
    <h4>회원정보</h4>
    <form>
      <label>이름</label>
      <input name="name" type="text" disabled value="${name}" />
      <label>이메일</label>
      <input name="email" type="email" disabled value="${email}" />
    </form>
  </div>
`;

const heyTemplate = `
  <figure>
    <blockquote><p>당신 무슨짓 한거야 너 미쳤어?</p></blockquote>
    <figcaption>-<b>Movie</b>, <cite>Woowahan TechCourse FE 4th</cite></figcaption>
  </figure>
`;

const accessToken = localStorage.getItem('accessToken');
const isLoggedIn = !!accessToken;
if (isLoggedIn) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || null);
  $app.innerHTML = userInfo ? myPageTemplate(userInfo.name) : heyTemplate;
} else {
  $app.innerHTML = homePageTemplate;
}

$app.addEventListener('click', (event) => {
  const { target } = event;
  if (target.localName !== 'button') return;
  if (target.id === 'logout-btn') {
    localStorage.clear();
    location.href = location.origin;
  }
});
