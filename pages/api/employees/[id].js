import fetch from "isomorphic-fetch";

export default async ({ query }, res) => {
  const id = query.id;
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await response.json();

  res.send(data);
};
