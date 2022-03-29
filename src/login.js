const $loginForm = document.querySelector('#login-form');

$loginForm.addEventListener('submit', async (e) => { 
  e.preventDefault(); 
  
  const response = await fetch('http://localhost:3000/login', { 
    method: 'POST', 
    body: new URLSearchParams(new FormData($loginForm)) 
  });

  const body = await response.json();

  if (!response.ok) {
    alert(body);
    return;
  }
  console.log(body);
  const user = {
    key: body.accessToken,
    id:  body.user.id,
    name: body.user.name
  }
  localStorage.setItem('user-info', JSON.stringify(user));
  location.href = './';
});
