import { getUser } from "./api.js";
import { getCookie } from "./utils.js";

const userId = getCookie("user_id");
const accessToken = getCookie("access_token");

const template = `
  <div>
  <h1>회원가입</h1>
  <form class="signup__form">
    <label>이름</label>
    <input type="text" class="signup__input" name="name" required />
    <label>이메일</label>
    <input type="email" class="signup__input" name="email" required />
    <label>비밀번호</label>
    <input type="password" class="signup__input" name="password" required />
    <button type="submit">회원가입</button>
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
    .querySelector(".signup__form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const { name, email, password } = e.target.elements;

      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
      }).then((res) => res.json());

      if (!response.accessToken) {
        alert(response);
      }

      location.href = "/";
    });
};

init();
