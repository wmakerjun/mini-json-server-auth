import { requestUserInfo } from "./api.js";

document.addEventListener("DOMContentLoaded", async (event) => {
  event.preventDefault();

  const accessInfo = JSON.parse(sessionStorage.getItem("user"));
  if (!accessInfo) {
    location.href = "/";
    return;
  }

  console.log(accessInfo.id);

  const response = await requestUserInfo(accessInfo.id, accessInfo.accessToken);
  if (!response.status) {
    alert(response.content);
    return;
  }

  document.querySelector("#name").textContent = response.content.name;
  document.querySelector("#email").textContent = response.content.email;

  document.querySelector("#title").textContent = `👋🏼 ${response.content.name}님 안녕하세요`;
});

document.querySelector("#logout").addEventListener("click", () => {
  sessionStorage.removeItem("user");
  location.href = "/";
});

document.querySelector("#profile").addEventListener("click", () => {
  alert("그런거 없습니다");
});
