import fetch from 'isomorphic-fetch';

export default async ({ query }, res) => {
  const page = query.page;
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const data = await response.json();

  res.send(data);
};
