const userInfo = JSON.parse(localStorage.getItem("accessToken")) ?? null;

if (userInfo) {
  location.href = "http://localhost:5500/loginedIndex.html";
}

document.querySelector("#login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#login-email-input").value;
  const password = document.querySelector("#login-password-input").value;
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    console.log(response);
    console.log(json);

    const { accessToken, user } = json;

    localStorage.setItem(
      "accessToken",
      JSON.stringify({ ...user, accessToken })
    );

    if (response.ok) {
      location.href = "http://localhost:5500/loginedIndex.html";
    }
  } catch (error) {
    console.log(error);
    alert("회원정보가 없습니다.");
  }
});
