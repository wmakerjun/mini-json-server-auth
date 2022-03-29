export async function getUser(userId, accessToken) {
  const response = await fetch(`http://localhost:3000/600/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  return data;
}
