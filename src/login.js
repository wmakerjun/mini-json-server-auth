import { requestLogin } from "./api.js";

document.querySelector("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-form input[type="email"]').value;
  const password = document.querySelector('#login-form input[type="password"]').value;

  const response = await requestLogin(email, password);

  if (!response.status) {
    alert(response.content);
    return;
  }

  const { accessToken, user } = response.content;
  sessionStorage.setItem("user", JSON.stringify({ accessToken, id: user.id }));
  location.href = "/";
});
