import { getUser } from "./api.js";
import { getCookie } from "./utils.js";

const userId = getCookie("user_id");
const accessToken = getCookie("access_token");

const init = async () => {
  const user = await getUser(userId, accessToken);

  const $leftButton = document.querySelector(".left-menu-button");
  const $rightButton = document.querySelector(".right-menu-button");

  $leftButton.addEventListener("click", (e) => {
    if (e.target.name === "login") {
      location.href = "/login.html";
    } else if (e.target.name === "user-edit") {
      location.href = "/user.html";
    }
  });

  $rightButton.addEventListener("click", (e) => {
    if (e.target.name === "signup") {
      location.href = "/signup.html";
    } else if (e.target.name === "logout") {
      document.cookie = "user_id=";
      document.cookie = "access_token=";

      location.href = "/";
    }
  });

  if (!user.id) {
    $leftButton.textContent = "로그인";
    $leftButton.name = "login";
    $rightButton.textContent = "회원가입";
    $rightButton.name = "signup";
    document.querySelector(".introduce-user").hidden = true;
    return;
  }
  document.querySelector(
    ".introduce-user"
  ).textContent = `👋🏼 ${user.name}님 안녕하세요`;
  document.querySelector(".introduce-user").hidden = false;
  $leftButton.textContent = "회원정보 수정";
  $leftButton.name = "user-edit";
  $rightButton.textContent = "로그아웃";
  $rightButton.name = "logout";
};

init();
