import fetch from 'isomorphic-fetch';

export default async (req, res) => {
  const response = await fetch('https://reqres.in/api/users');
  const data = await response.json();

  res.send(data);
};
