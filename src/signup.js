document
  .querySelector("#signup-submit-button")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#signup-name-input").value;
    const email = document.querySelector("#signup-email-input").value;
    const password = document.querySelector("#signup-password-input").value;
    const response = await fetch("http://localhost:9000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    console.log(response);
    if (response.ok) {
      location.href = "http://localhost:5500/index.html";
    }
  });
