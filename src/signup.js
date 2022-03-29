import { requestRegister } from "./api.js";

document.querySelector("#signup-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector('#signup-form input[type="text"]').value;
  const email = document.querySelector('#signup-form input[type="email"]').value;
  const password = document.querySelector('#signup-form input[type="password"]').value;

  const response = await requestRegister(email, name, password);

  if (!response.status) {
    alert(response.content);
    return;
  }

  alert("회원가입이 완료되었습니다.");
  location.href = "/login.html";
});
