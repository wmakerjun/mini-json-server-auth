document.querySelector("#register-button").addEventListener("click", (e) => {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((user) => {
      console.log("registered", user);
    });
});
