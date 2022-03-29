const request = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();

  return { status: response.ok, content: data };
};

export const requestRegister = async (email, name, password) => {
  const response = await request("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      password,
    }),
  });

  return response;
};

export const requestLogin = async (email, password) => {
  const response = await request("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response;
};

export const requestUserInfo = async (id, accessToken) => {
  const response = await request(`http://localhost:3000/600/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};
