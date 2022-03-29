(async () => {
  const userInfo = localStorage.getItem('user-info');

  if (!userInfo) {
    alert('잘못된 접근입니다!');
    return;
  }

  const user = JSON.parse(userInfo);
  const response = await fetch(`http://localhost:3000/600/users/${user.id}`, { 
    method: 'GET', 
    headers: {
      Authorization: `Bearer ${user.key}`,
    },
  });
  const body = await response.json();
  
  console.log(body);

  if (!response.ok) {
    alert('응애');
    return;
  }
  document.querySelector('#user-name').textContent = body.name;
  document.querySelector('#user-email').textContent = body.email;
})();

