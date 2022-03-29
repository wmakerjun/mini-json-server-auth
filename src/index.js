const userName = JSON.parse(localStorage.getItem("name"));

// 메인화면에서는 id 값이 local에 있냐 없냐만 판단하고 숨길거숨기고 보여줄 거 보여주기만한다.
if (userName) {
  document.querySelector("#no-login").classList.add("hide");
  document.querySelector("#ok-login").classList.remove("hide");
  document.querySelector("#login-user-name").textContent = userName;

  const logoutButton = document.querySelector("#logout-button");
  logoutButton.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5500/";
  });
} else {
}

// 유저 정보에서 fetch 를 통해서 데이터를 가져오고
