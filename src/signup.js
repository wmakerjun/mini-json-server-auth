const 회원가입폼 = document.querySelector('#회원가입-폼');
회원가입폼.addEventListener('submit', 입력값다루기);

function 입력값다루기(e) {
  e.preventDefault();

  const 이름값 = e.target.이름.value;
  const 이메일값 = e.target.이메일.value;
  const 비밀번호값 = e.target.비밀번호.value;

  const 사용자데이터 = {
    name: 이름값,
    email: 이메일값,
    password: 비밀번호값,
  };

  fetch('http://localhost:3000/register', {
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
