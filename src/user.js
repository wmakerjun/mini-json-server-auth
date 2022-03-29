const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");

const { user: userData } = JSON.parse(localStorage.getItem("user"));

if (userData.name) {
  userName.textContent = userData.name;
} else {
  userName.textContent = "";
}
userEmail.textContent = userData.email;
