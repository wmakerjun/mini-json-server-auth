import { getUser } from "./api.js";
import { getCookie } from "./utils.js";

const userId = getCookie("user_id");
const accessToken = getCookie("access_token");

const init = async () => {
  const user = await getUser(userId, accessToken);
  if (!user.id) {
    alert("권한이 없습니다.");
    location.href = "/";
    return;
  }
  const template = `
    <div>
      <h1>회원정보</h1>
      <h3>이름</h3>
      <p class="user-name">${user.name}</p>
      <h3>이메일</h3>
      <p class="user-email">${user.email}</p>
    </div>
  `;

  document.body.innerHTML = template;
};

init();
