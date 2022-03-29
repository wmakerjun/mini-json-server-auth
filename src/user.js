const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");

const id = localStorage.getItem("id");

fetch(`http://localhost:3000/users/${id}`)
  .then((response) => response.json())
  .then((user) => {
    const { name, email } = user;
    userName.textContent = name;
    userEmail.textContent = email;
  });
