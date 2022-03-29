const submitForm = document.querySelector("#sign-up-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameValue = name.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  // 요청을 보내면 되지않을까 ? fetch OR axios
  // http://localhost:3000/register

  const response = await fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  location.href = "http://localhost:5500/";
});
