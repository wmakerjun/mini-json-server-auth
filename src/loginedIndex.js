const userInfo = JSON.parse(localStorage.getItem("accessToken")) ?? null;

if (!userInfo) {
  location.href = "http://localhost:5500/";
}

document.querySelector(
  "#greeting"
).textContent = `👋🏼 ${userInfo.name}님 안녕하세요`;

document.querySelector("#logout").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "http://localhost:5500/";
});
