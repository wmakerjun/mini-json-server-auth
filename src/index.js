document.addEventListener("DOMContentLoaded", () => {
  const userInfo = JSON.parse(sessionStorage.getItem("user"));

  if (!userInfo) return;
  location.href = "/user.html";
});
