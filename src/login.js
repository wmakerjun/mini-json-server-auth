import { getUser } from "./api.js";
import { getCookie } from "./utils.js";

const userId = getCookie("user_id");
const accessToken = getCookie("access_token");

const template = `
  <div>
  <h1>로그인</h1>
  <form class="login-form">
    <label>이메일</label>
    <input type="email" class="login-form__input" name="email" />
    <label>비밀번호</label>
    <input type="password" class="login-form__input" name="password" />
    <button type="submit">로그인</button>
  </form>
  </div>
`;

const init = async () => {
  const user = await getUser(userId, accessToken);
  if (user.id) {
    alert("권한이 없습니다.");
    location.href = "/";
    return;
  }
  document.body.innerHTML = template;

  document
    .querySelector(".login-form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      }).then((res) => res.json());

      if (!response.accessToken) return;
      console.log("response", response);

      document.cookie = `user_id=${response.user.id}`;
      document.cookie = `access_token=${response.accessToken}`;

      location.href = "/";
    });
};

init();
