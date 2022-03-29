const userInfo = JSON.parse(localStorage.getItem("accessToken")) ?? null;

if (!userInfo) {
  location.href = "http://localhost:5500/";
}

document.querySelector("#user-name").textContent = userInfo.name;
document.querySelector("#user-email").textContent = userInfo.email;
