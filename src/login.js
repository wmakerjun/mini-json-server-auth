const 로그인폼 = document.querySelector('#로그인폼');
로그인폼.addEventListener('submit', 로그인);

function 로그인(e) {
  e.preventDefault();

  const 이메일값 = e.target.이메일.value;
  const 비밀번호값 = e.target.비밀번호.value;

  const 사용자데이터 = {
    email: 이메일값,
    password: 비밀번호값,
  };

  console.log(이메일값, 비밀번호값);

  fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify(사용자데이터),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      location = '/index.html';
    }
  });
}
