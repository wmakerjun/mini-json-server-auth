const userAuth = JSON.parse(localStorage.getItem("userAuth"));

const id = userAuth.id;
const accessToken = `Bearer ${userAuth.accessToken}`;

const url = `http://localhost:3000/600/users/${id}`;

const renderUpdatedUserInfo = response => {
  console.log(response);
  const name = response.name;
  document.getElementById("name").textContent = name;
  const email = response.email;
  document.getElementById("email").textContent = email;
};

// 로그인
fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken,
  },
})
  .then(res => {
    if (!res.ok) {
      alert("로그인 안 돼셨어요.>ㅇ<");
      return;
    }
    return res.json();
  })
  .then(response => renderUpdatedUserInfo(response))
  .catch(error => console.error("에러", error));
