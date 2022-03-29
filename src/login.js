const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");

// { accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC50IiwiaWF0IjoxNjQ4NTUxOTI1LCJleHAiOjE2NDg1NTU1MjUsInN1YiI6IjUifQ.26PM49a7CbUPOz9fVu1nz7Qcc6svWjvM8Qwll4P_Gsk" user: {email: "test@test.t", id: 5} }

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const loginEmailValue = loginEmail.value;
  const loginPasswordValue = loginPassword.value;

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginEmailValue,
      password: loginPasswordValue,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // accessToken -> localStorage storage
  const dataResult = await response.json();
  localStorage.setItem("user", JSON.stringify(dataResult));

  // 이제 user 정보 페이지로 리디렉션 시키면
  location.href = "http://localhost:5500/";
});
