document.querySelector("#login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#login-email-input").value;
  const password = document.querySelector("#login-password-input").value;
  await fetch("http://localhost:9000/users");
});
