// login 한 유저랑 - 안 한 유저 (어떤 데이터 : localStorage.getItem("accessToken");

// #app innerHTML

const app = document.querySelector("#app");

const { accessToken: token } = JSON.parse(localStorage.getItem("user"));

if (token) {
  app.innerHTML = `
    <h1>미니 인증과 인가</h1>
    <a href="/user.html">
      <button>회원 정보</button>
    </a>
    <button id="logout" type="button">로그아웃</button>`;

  const logout = document.querySelector("#logout");
  logout.addEventListener("click", (e) => {
    localStorage.removeItem("user");
    window.location.reload();
  });
} else {
  app.innerHTML = `<h1>미니 인증과 인가</h1>
      <a href="/login.html">
        <button>로그인</button>
      </a>
      <a href="/signup.html">
        <button>회원가입</button>
      </a>`;
}
