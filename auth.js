// const url = "http://localhost:3000/signup/";
// const data = {
//   email: "2@naver.com",
//   password: "123456789",
//   age: "100",
// };

// fetch(url, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then(res => res.json())
//   .then(response => console.log("성공", JSON.stringify(response)))
//   .catch(error => console.error("에러", error));

// const url = "http://localhost:3000/login/";
// const data = {
//   email: "1@naver.com",
//   password: "123456789",
// };

// // 로그인
// fetch(url, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then(res => res.json())
//   .then(response => console.log("성공", response))
//   .catch(error => console.error("에러", error));

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAbmF2ZXIuY29tIiwiaWF0IjoxNjQ4NTM4
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAbmF2ZXIuY29tIiwiaWF0IjoxNjQ4NTM4MzUwLCJleHAiOjE2NDg1NDE5NTAsInN1YiI6IjUifQ.anA72ZKNlnSV3ial5JAmTXKswM298kW96Xsv31tE-vc"

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAbmF2ZXIuY29tIiwiaWF0IjoxNjQ4NTM4NDE0LCJleHAiOjE2NDg1NDIwMTQsInN1YiI6IjUifQ.lSX3a0mHtLLe8Fbdmk5U-bPMflck-yDsERo0jVNUR5s"

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAbmF2ZXIuY29tIiwiaWF0IjoxNjQ4NTM4NDMxLCJleHAiOjE2NDg1NDIwMzEsInN1YiI6IjUifQ.EmnCBQLtG0bVQS3SRD9TCFdkbw8EQ6U3hS_n1MEl6kk"

const id = 5;
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAbmF2ZXIuY29tIiwiaWF0IjoxNjQ4NTM4MzUwLCJleHAiOjE2NDg1NDE5NTAsInN1YiI6IjUifQ.anA72ZKNlnSV3ial5JAmTXKswM298kW96Xsv31tE-vc";
const url = `http://localhost:3000/600/users/${id}`;

// 로그인
fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
})
  .then(res => res.json())
  .then(response => console.log("성공", response))
  .catch(error => console.error("에러", error));
