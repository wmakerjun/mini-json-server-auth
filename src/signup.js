const $signupForm = document.querySelector('#sign-up-form');

$signupForm.addEventListener('submit', async (e) => { 
  e.preventDefault(); 
  
  const response = await fetch('http://localhost:3000/register', { 
    method: 'POST', 
    body: new URLSearchParams(new FormData($signupForm)) 
  });
  const body = await response.json();

  if (!response.ok) {
    alert(body);
    return;
  }

  location.href = './';
});
