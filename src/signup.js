document
  .querySelector("#signup-submit-button")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      const name = document.querySelector("#signup-name-input").value;
      const email = document.querySelector("#signup-email-input").value;
      const password = document.querySelector("#signup-password-input").value;
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (response.ok) {
        const { accessToken, user } = await response.json();

        localStorage.setItem(
          "accessToken",
          JSON.stringify({ ...user, accessToken })
        );
        location.href = "http://localhost:5500/loginedIndex.html";
      }
    } catch (error) {
      alert("중복된 아이디입니다.");
    }
  });
