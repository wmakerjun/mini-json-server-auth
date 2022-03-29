const signup = event => {
  event.preventDefault();
  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  const url = "http://localhost:3000/signup/";
  const data = {
    email,
    password,
    name,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      if (!res.ok) {
        alert("회원가입 잘 쓰세요.>ㅇ<");
        return;
      }
      return res.json();
    })
    .then(response => {
      const userAuth = {
        accessToken: response.accessToken,
        id: response.user.id,
      };
      localStorage.setItem("userAuth", JSON.stringify(userAuth));
      location.replace("../user.html");
    })
    .catch(error => console.error("에러", error));
};

document.querySelector("form").addEventListener("submit", signup);
