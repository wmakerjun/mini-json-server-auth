document.querySelector("#login-button").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;
  fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("틀렸소");
    })
    .then(({ user }) => {
      // 비번 맞을때 실행
      localStorage.setItem("id", JSON.stringify(user.id));
      localStorage.setItem("name", JSON.stringify(user.name));
      window.location.href = "http://127.0.0.1:5500/";
      // console.log(user);
    })
    .catch((e) => {
      // 비번 틀렸을때 실행
      alert(e.message);
    });
});
